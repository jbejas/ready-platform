import { useEffect, useState } from "react";
import { NavigationProp } from "@react-navigation/native";
import { View, Text, Pressable, Modal } from "react-native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import { useAppContext } from "@components/AppContext/AppContext";
import { LinearGradient } from "expo-linear-gradient";
import DynamicButton from "@components/DynamicButton/DynamicButton";

// Stream
import { ChannelList } from "stream-chat-expo";

// Icons
import ChatIcon from "@assets/icons/chat.svg";

// Get Stream Chat
import { StreamChat } from "stream-chat";
import { CHAT_API_KEY } from "@chatconfig/chatConfig";

// Amplify Utils
import { updateUser } from "@utils/amplifyUtils";

// Set Redux Dispatch
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "@store/auth/authSlice";
import { setStoryVisibility } from "@store/stories/storiesSlice";
import { setMessageCount } from "@store/chat/chatSlice";

// Localization
import { useTranslation } from "react-i18next";

// Amplify
import * as customQueries from "@gcq/index";
import { generateClient, GraphQLQuery } from "@aws-amplify/api";
// import { SearchLikesQuery } from "@src/api/index";
import { SearchLikesQuery } from "@src/api";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

// Define the state structure
interface RootState {
  auth: {
    user: string;
  };
  chat: {
    currentChannelId: string;
  };
  config: {
    activeConnectionsLimit: number;
  };
}

export default function ChatScreen({ navigation }: Props) {
  // Mount Localization
  const { t } = useTranslation();
  // Mount Graphql API
  const API = generateClient();
  // Mount Redux dispatch
  const dispatch = useDispatch();

  // Get userData
  const user = JSON.parse(useSelector((state: RootState) => state.auth.user));

  const [clientIsReady, setClientIsReady] = useState<boolean>(false);
  const [channelsCount, setChannelsCount] = useState<number | null>(null);
  const [showLearnMoreModal, setShowLearnMoreModal] = useState<boolean>(false);

  const filters = {
    members: {
      $in: [user.id],
    },
  };

  const sort = {
    last_message_at: -1 as const,
  };

  const { setChannel } = useAppContext();

  const goToChannel = async (channel) => {
    const {
      state: {
        messageSets: [{ messages }],
        members,
      },
    } = channel;
    let userName = "";
    let userImage = "";
    let currentUserId = "";

    console.log("Members", members);

    // members.map((member) => {
    //   console.log("member", member.user.name, member.user.id);
    // });

    for (const [_, value] of Object.entries(members as any)) {
      if ((value as any).user.id !== user.id) {
        userName = (value as any).user.name;
        currentUserId = (value as any).user.id;
        userImage = (value as any).user.image;
      }
    }
    await setChannel(channel);
    navigation.navigate("SingleChannelScreen", {
      userName: userName,
      messagesLength: messages.length,
      currentUserId,
      userImage,
    });
  };

  // Instantiate Stream Chat
  const chatClient = StreamChat.getInstance(CHAT_API_KEY);

  const createChannels = async () => {
    try {
      // Search Likes to generate channels
      const {
        data: {
          searchLikes: { items: existingLikes },
        },
      } = await API.graphql<GraphQLQuery<SearchLikesQuery>>({
        query: customQueries.searchLikes,
        variables: {
          limit: 1000,
          filter: {
            or: [{ likerId: { eq: user.id } }, { likedId: { eq: user.id } }],
            amILikedBack: { eq: true },
            active: { eq: true },
          },
        },
      });

      // Update users active chats
      if (existingLikes.length !== user.activeConnections) {
        const updatedUser = await updateUser(user.id, {
          activeConnections: existingLikes.length,
        });
        await dispatch(setUser(updatedUser));
      }

      console.log("existingLikes", existingLikes.length);

      setChannelsCount(existingLikes.length);

      existingLikes.map(async (likes) => {
        const channel = await chatClient.channel("messaging", likes.channelId, {
          members: [likes.likedId, likes.likerId],
        });
        const newChannel = await channel.watch();
      });

      setClientIsReady(true);
    } catch (error) {
      console.log("Channel Creation error", error);
    }
  };

  useEffect(() => {
    const focusListener = navigation.addListener("focus", () => {
      createChannels();
      dispatch(setStoryVisibility(false));
      dispatch(setMessageCount(0));
    });

    return focusListener;
  }, [navigation]);

  const goToMyProfileScreen = () => {
    // Move the user to the User Account Tab
    navigation.navigate("UserAccount");
    // After that move the user to My Profile Screen
    setTimeout(() => {
      navigation.navigate("MyProfileScreen");
    }, 0);
  };

  return (
    <View testID="ChatTab" className="relative">
      <Modal
        animationType="slide"
        transparent={true}
        visible={showLearnMoreModal}
        className="relative"
      >
        <View className="w-screen h-[400px] px-6 pt-6 pb-20 flex items-start justify-start absolute bottom-0 bg-modal rounded-t-3xl shadow-2xl">
          <Text
            allowFontScaling={false}
            className="text-dark w-full text-left text-[20px] mt-4 font-jokkerl"
          >
            {t("chat-screen.modal-title-1")}
          </Text>
          <Text
            allowFontScaling={false}
            className="text-dark w-full text-left text-[20px] mt-4 font-jokkerl"
          >
            {t("chat-screen.modal-title-2")}
          </Text>
          <DynamicButton
            onPress={() => setShowLearnMoreModal(false)}
            type={"full-transparent"}
            label={t("general.all-set")}
            size="large"
            rounded={"2xl"}
            position="none"
            textStyles="text-base"
            textColor="dark"
            customStyles="mt-8 !text-dark w-full mx-0 absolute bottom-8 left-6"
          />
        </View>
      </Modal>
      <LinearGradient
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        colors={["#EEE8DC", "#FFF8E6"]}
        className="w-screen h-screen absolute left-0 bottom-0 rounded-b-3xl"
      />
      {!user.isProfileComplete ? (
        // Loading state
        <View className="w-full h-full flex items-center justify-start px-6 relative">
          <Text
            allowFontScaling={false}
            className="text-[40px] font-jokkerl -tracking-widest mt-28 w-full"
          >
            {t("chat-screen.title")}
          </Text>
          <View className="w-screen absolute bottom-0 left-0 mb-28 px-6">
            <ChatIcon width={45} height={32} className="-ml-1" />
            <Text
              allowFontScaling={false}
              className="text-[32px] font-jokkerl -tracking-widest w-full mt-4"
            >
              {t("chat-screen.no-active-channels-title")}
            </Text>
            <Text
              allowFontScaling={false}
              className="text-[16px] font-jokkerl mt-4 w-full leading-5"
            >
              {t("chat-screen.profile-subtitle")}
            </Text>
            <DynamicButton
              onPress={() => goToMyProfileScreen()}
              type={"full-transparent"}
              label={t("connect-screen.complete-profile")}
              size="large"
              rounded={"2xl"}
              position="none"
              textStyles="text-base"
              textColor="dark"
              customStyles="mt-8 !text-dark w-full -ml-1"
            />
          </View>
        </View>
      ) : !clientIsReady ? (
        <View className="w-screen h-screen flex items-center justify-center">
          <Text allowFontScaling={false}>Loading chat ...</Text>
        </View>
      ) : (
        <SafeAreaComponent
          testID="ChatTab"
          addAdditionalInsetTop={15}
          addAdditionalInsetBottom={45}
          addHorizontalInsets
          addVerticalInsets
          relative
        >
          {channelsCount > 0 ? (
            <View className="w-full h-full px-6">
              <View className="w-full flex flex-row items-center justify-between">
                <Text
                  allowFontScaling={false}
                  className="text-inter text-[36px] -tracking-widest font-jokkerl"
                >
                  {t("chat-screen.title")}
                </Text>
                <Pressable onPress={() => setShowLearnMoreModal(true)}>
                  <Text
                    allowFontScaling={false}
                    className="text-inter text-[16px] font-jokkerl underline"
                  >
                    {t("chat-screen.learn-more")}
                  </Text>
                </Pressable>
              </View>

              <ChannelList
                filters={filters}
                sort={sort}
                onSelect={(channel) => goToChannel(channel)}
              />
            </View>
          ) : (
            <View
              testID="NoActiveChannels"
              className="w-screen h-screen flex items-center justify-start px-6"
            >
              <Text
                allowFontScaling={false}
                className="text-[40px] font-jokkerl -tracking-widest w-full mt-8"
              >
                {t("chat-screen.title")}
              </Text>
              <View className="w-screen absolute bottom-8 left-0 mb-36 px-6">
                <ChatIcon width={45} height={32} className="-ml-1" />
                <Text
                  allowFontScaling={false}
                  className="text-[32px] font-jokkerl -tracking-widest mt-8"
                >
                  {t("chat-screen.no-active-channels-title")}
                </Text>
                <Text
                  allowFontScaling={false}
                  className="text-[18px] font-jokkerl mt-8 w-full"
                >
                  {t("chat-screen.subtitle-1")}
                </Text>
                <Text
                  allowFontScaling={false}
                  className="text-[18px] font-jokkerl mt-8 w-full"
                >
                  {t("chat-screen.subtitle-2")}
                  <Text className="text-[18px] font-jokkerl underline">
                    {t("chat-screen.subtitle-3")}
                  </Text>
                  {t("chat-screen.subtitle-4")}
                </Text>
              </View>
            </View>
          )}
        </SafeAreaComponent>
      )}
    </View>
  );
}
