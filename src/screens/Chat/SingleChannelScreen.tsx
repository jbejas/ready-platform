import { useEffect, useState } from "react";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import {
  View,
  Text,
  Modal,
  Pressable,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import {
  Channel,
  MessageList,
  MessageInput,
  KeyboardCompatibleView,
  useMessageContext,
  MessageSimple,
} from "stream-chat-expo";
import { useAppContext } from "@components/AppContext/AppContext";
import DynamicButton from "@components/DynamicButton/DynamicButton";
import ArrowLeftIcon from "@src/components/ArrowLeftIcon/ArrowLeftIcon";
import ConnectionProfile from "@components/ConnectionProfile";

// Segment
import { useAnalytics } from "@segment/analytics-react-native";

// Safe Area Lib
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Get channel Slice from redux store
import { useDispatch } from "react-redux";
import {
  setCurrentChannelId,
  setSingleChannelUserImage,
  setSingleChannelUserName,
} from "@store/chat/chatSlice";

// Amplify
import { CreateChatPromptInput } from "@src/api/index";

// Utils
import { getChatPrompts } from "@utils/chatPrompts";
import { getUserById } from "@utils/user";

// Reanimated
import Animated, {
  useSharedValue,
  withSpring,
  ReduceMotion,
} from "react-native-reanimated";

// Tabler Icons
import { IconDots, IconX } from "@tabler/icons-react-native";

// Localization
import { useTranslation } from "react-i18next";

// Define the props type for your navigation stack
type Props = {
  route: RouteProp<any>;
  navigation: NavigationProp<any>;
};

// TODO: Clean up!

const SingleChannelScreen = ({ route, navigation }: Props) => {
  // Mount Localization
  const { t } = useTranslation();
  // Segment
  const { track } = useAnalytics();
  // Mount redux dispatch
  const dispatch = useDispatch();
  // Route props
  const { userName, currentUserId, userImage } = route.params;
  // Safe Area Insets
  const insets = useSafeAreaInsets();

  const { channel } = useAppContext();

  // Constants
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isUnmatching, setIsUnmatching] = useState<boolean>(false);
  const [prompts, setPrompts] = useState<CreateChatPromptInput[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isProfileVisible, setIsProfileVisible] = useState<boolean>(false);
  const [selectedConnection, setSelectedConnection] = useState<any>(false);
  const mainMessageBottom = useSharedValue(-1000);
  const unmatchBottom = useSharedValue(-1000);

  const CustomKeyboardCompatibleView = ({ children }) => {
    return (
      <KeyboardCompatibleView keyboardVerticalOffset={0}>
        {children}
      </KeyboardCompatibleView>
    );
  };

  useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerLeft: () => (
        <ArrowLeftIcon
          onPress={() => navigation.goBack()}
          onImagePress={() => showProfile()}
        />
      ),
      headerRight: () => (
        <View className="flex flex-row items-center justify-center">
          {/* <Pressable
            className="mr-2 w-[40px] h-[40px] bg-light-gray rounded-full flex items-center justify-center"
            onPress={() => showModal()}
          >
            <IconWand width={22} height={22}  />
          </Pressable> */}
          <Pressable
            className="w-[30px] h-[30px] bg-light-gray rounded-full flex items-center justify-center"
            onPress={() => showModal()}
          >
            <IconDots width={22} height={22} strokeWidth={1} />
          </Pressable>
        </View>
      ),
    });
  }, [navigation]);

  const showModal = () => {
    mainMessageBottom.value = -250;
    setIsModalVisible(true);
    setTimeout(() => {
      animateMainMessageUp();
    }, 500);
  };

  const hideModal = () => {
    if (mainMessageBottom.value !== -1000) {
      animateMainMessageDown();
    }
    if (unmatchBottom.value !== -1000) {
      animateUnmatchMessageDown();
    }
    setTimeout(() => {
      setIsModalVisible(false);
    }, 500);
  };

  const animateMainMessageUp = () => {
    mainMessageBottom.value = withSpring(mainMessageBottom.value + 270, {
      duration: 1000,
      dampingRatio: 0.6,
      restDisplacementThreshold: 10,
      restSpeedThreshold: 10,
    });
  };

  const animateMainMessageDown = () => {
    mainMessageBottom.value = withSpring(mainMessageBottom.value - 270, {
      duration: 1500,
      dampingRatio: 0.6,
      restDisplacementThreshold: 10,
      restSpeedThreshold: 10,
    });
  };

  const animateUnmatchMessageUp = () => {
    unmatchBottom.value = withSpring(mainMessageBottom.value + 270, {
      duration: 1000,
      dampingRatio: 0.6,
      restDisplacementThreshold: 10,
      restSpeedThreshold: 10,
    });
  };

  const animateUnmatchMessageDown = () => {
    unmatchBottom.value = withSpring(mainMessageBottom.value - 270, {
      duration: 1500,
      dampingRatio: 0.6,
      restDisplacementThreshold: 10,
      restSpeedThreshold: 10,
    });
  };

  const handleUnmatchMessage = () => {
    animateMainMessageDown();
    setTimeout(() => {
      animateUnmatchMessageUp();
    }, 500);
  };

  const handleUnmatch = async () => {
    try {
      animateMainMessageDown();
      setTimeout(() => {
        setIsModalVisible(false);
        navigation.navigate("UnmatchStepOneScreen", {
          userName,
          chatChannelId: channel.id,
          chatChannelCid: channel.cid,
        });
      }, 500);
    } catch (error) {
      console.log("Error handle unmatch single channel", error);
    }
  };

  const handleUnmatchAndReport = async () => {
    try {
      animateMainMessageDown();
      setTimeout(() => {
        setIsModalVisible(false);
        navigation.navigate("ReportStepOneScreen", {
          userName,
          chatChannelId: channel.id,
          chatChannelCid: channel.cid,
        });
      }, 500);
    } catch (error) {
      console.log("Error handle unmatch single channel", error);
    }
  };

  const sendCustomMessage = async (prompt) => {
    const message = await channel.sendMessage({
      text: prompt,
      messageType: "prompt",
    });
  };

  useEffect(() => {
    const getPrompts = async () => {
      const userPrompts = await getChatPrompts();
      const shuffledPrompts = userPrompts.sort(() => 0.5 - Math.random());
      await setPrompts(shuffledPrompts.slice(0, 5));
      setIsLoading(false);
    };
    getPrompts();
    return () => {};
  }, []);

  // Set channel ID on state
  useEffect(() => {
    const setChannelId = async () => {
      await dispatch(setCurrentChannelId(channel.id));
    };
    setChannelId();
    return () => {
      dispatch(setCurrentChannelId(false));
    };
  }, [channel]);

  useEffect(() => {
    setTimeout(() => {
      console.log("messageSets", channel.state);
      if (channel.state.messageSets[0].messages.length === 0)
        track("Chat initiated");
    }, 1000);
  }, []);

  const CustomEmptyState = () => {
    return (
      <View className="flex-1 w-full h-full bg-gradient-start flex items-center justify-center">
        <Text
          allowFontScaling={false}
          className="text-black text-[32px] font-jokkerl text-center px-16"
        >
          {t("single-channel.empty-state-title")}
        </Text>
        <Text
          allowFontScaling={false}
          className="text-black text-[16px] font-jokkerl text-center px-16 mt-4"
        >
          {t("single-channel.empty-state-subtitle")}
        </Text>
        <View className="w-screen mt-8 flex items-center justify-center py-12">
          <Animated.ScrollView
            pagingEnabled
            horizontal
            className="bg-gradient-start w-full"
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
          >
            {prompts.map((prompt, index) => (
              <View
                key={index}
                className="w-screen flex items-center justify-center text-wrap overflow-hidden relative pb-12"
              >
                <View className="w-10/12 p-6 bg-card rounded-[8px] relative shadow-lg">
                  <Text
                    allowFontScaling={false}
                    className="text-black text-[20px] font-jokkerl"
                  >
                    {prompt.prompt}
                  </Text>
                  {/* <View className="bg-black rounded-xl mt-2 px-2 py-1">
                    <Text allowFontScaling={false} className="text-white">My category</Text>
                  </View> */}
                  <DynamicButton
                    onPress={() => sendCustomMessage(prompt.prompt)}
                    type={"icon"}
                    size="large"
                    iconPosition="right"
                    icon={"chevron-right"}
                    iconSize={30}
                    showBgImage
                    iconColor="black"
                    rounded="full"
                    position="none"
                    textStyles="text-base"
                    customStyles="absolute -bottom-5 -right-5"
                  />
                </View>
              </View>
            ))}
          </Animated.ScrollView>
        </View>
      </View>
    );
  };

  // const customTypingIndicator = () => {
  //   return (
  //     <View className="w-full h-[15px] bg-dark flex items-start justify-center">
  //       <Text allowFontScaling={false} className="text-white text-[12px] font-jokkerl px-2">
  //         {userName} is typing...
  //       </Text>
  //     </View>
  //   );
  // };

  const CustomMessageUIComponent = () => {
    const { message } = useMessageContext();
    if (message.messageType === "prompt") {
      return (
        <View className="p-2 mt-[100px]">
          <View className="bg-gradient-start rounded-[8px] flex items-center justify-center p-4 mb-2">
            <Text
              allowFontScaling={false}
              className="text-dark font-jokkerl text-[16px] w-full text-left"
            >
              Chat prompt from {message.user.name}:
            </Text>
            <Text
              allowFontScaling={false}
              className="text-dark font-jokkerl text-[26px] w-full text-left"
            >
              {message.text}
            </Text>
          </View>
        </View>
      );
    }
    return <MessageSimple />;
  };

  const handleGetHelp = async () => {
    try {
      // await animateMainMessageDown();
      // const url = "https://www.readyplatform.co/faq/";
      // const supported = await Linking.canOpenURL(url);
      // if (supported) {
      //   await Linking.openURL(url);
      // }

      // First, navigate to the UserAccount tab
      navigation.navigate("UserAccount");
      // Then, navigate to the HelpScreen within the UserAccount stack
      setTimeout(() => {
        navigation.navigate("HelpScreen");
      }, 0);
    } catch (error) {
      console.log("handleGetHelp error", error);
    }
  };

  // Profile animation
  const { height } = Dimensions.get("screen");

  const springConfig = {
    mass: 1,
    damping: 100,
    stiffness: 500,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 2,
    reduceMotion: ReduceMotion.System,
  };

  const bottomInitialValue = (height + 500) * -1;
  const bottomEndValue = bottomInitialValue + height + 500;
  const profileBottom = useSharedValue(bottomInitialValue);

  const showProfile = async () => {
    navigation.setOptions({
      headerShown: false,
      headerStyle: {
        backgroundColor: "transparent", // made bottom tabbar transparent
      },
    });
    const connectionData = await getUserById(currentUserId);
    setSelectedConnection(JSON.parse(connectionData));
    profileBottom.value = withSpring(bottomEndValue, springConfig);
  };

  const hideProfile = async () => {
    try {
      profileBottom.value = withSpring(bottomInitialValue, springConfig);
      setTimeout(() => {
        navigation.setOptions({
          headerShown: true,
          headerStyle: {
            backgroundColor: "#EEE8DC", // made bottom tabbar transparent
          },
        });
      }, 200);
    } catch (error) {
      console.log("hideProfile error", error);
    }
  };

  useEffect(() => {
    dispatch(setSingleChannelUserImage(userImage));
    dispatch(setSingleChannelUserName(userName));
    return () => {
      dispatch(setSingleChannelUserImage(false));
      dispatch(setSingleChannelUserName(false));
    };
  }, [userName, userImage]);

  return (
    <View
      testID="ChatSingleChannel"
      className="bg-gradient-start w-full h-full pb-10 relative"
    >
      {/* Profile */}
      <Animated.View
        className="w-screen h-screen bg-gradient-start absolute z-50"
        style={{ bottom: profileBottom }}
      >
        <Pressable
          onPress={hideProfile}
          className="w-[35px] h-[35px] absolute right-6 z-10 rounded-full bg-white/50 flex items-center justify-center"
          style={{ top: insets.top - 5 }}
        >
          <IconX width={30} height={30} color="#000" strokeWidth={1} />
        </Pressable>
        {selectedConnection ? (
          <ConnectionProfile
            connectionData={selectedConnection}
            closeProfile={hideProfile}
          />
        ) : null}
      </Animated.View>
      {/* End profile */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        className="relative h-screen w-screen"
      >
        <View className="w-full h-full p-5 flex items-center justify-start absolute bottom-0 pb-24 bg-black/50">
          <Pressable
            className="w-screen h-screen absolute top-0 left-0 z-10"
            onPress={() => hideModal()}
          >
            <View className="w-full h-full bg-dark/20" />
          </Pressable>
          {/* Main Message Box */}
          <Animated.View
            className="w-full bg-gray-regular rounded-[20px] absolute z-20"
            style={{ bottom: mainMessageBottom }}
          >
            <Pressable
              className="w-full border-b border-solid border-dark/30 px-6 h-[60px] flex items-center justify-center"
              onPress={() => handleUnmatch()}
            >
              <Text
                allowFontScaling={false}
                className="w-full text-[17px] text-center font-jokkerl -tracking-[0.5px] text-white"
              >
                {t("single-channel.unmatch-from")} {userName}
              </Text>
            </Pressable>
            <Pressable
              className="w-full border-b border-solid border-dark/30 px-6 h-[50px] flex items-center justify-center"
              onPress={() => handleUnmatchAndReport()}
            >
              <Text
                allowFontScaling={false}
                className="w-full text-[17px] text-center font-jokkerl -tracking-[0.5px] text-white"
              >
                {t("single-channel.report")}
              </Text>
            </Pressable>
            <Pressable className="w-full px-6 h-[60px] flex items-center justify-center">
              <Text
                allowFontScaling={false}
                className="w-full text-[17px] text-center font-jokkerl -tracking-[0.5px] text-white"
                onPress={() => handleGetHelp()}
              >
                {t("single-channel.get-help")}
              </Text>
            </Pressable>
          </Animated.View>
          {/* Unmatch Message Box */}
          <Animated.View
            className="w-full bg-gray-regular rounded-[20px] absolute z-20"
            style={{ bottom: unmatchBottom }}
          >
            <View className="p-4">
              <Text
                allowFontScaling={false}
                className="w-full text-[20px] font-jokkerl mb-2 text-white"
              >
                {t("single-channel.unmatch-this-person")}
              </Text>
              <Text
                allowFontScaling={false}
                className="w-full text-[16px] font-jokkerl text-white"
              >
                {t("single-channel.unmatch-explanation")}
              </Text>
            </View>
            <Pressable
              className="w-full border-b border-t border-solid border-dark/30 px-6 h-[60px] flex items-center justify-center"
              onPress={() => handleUnmatch()}
            >
              {isUnmatching ? (
                <ActivityIndicator size="small" color="#FFF" />
              ) : (
                <Text
                  allowFontScaling={false}
                  className="w-full text-[17px] text-center font-jokkerl -tracking-[0.5px] text-white"
                >
                  {t("single-channel.unmatch")}
                </Text>
              )}
            </Pressable>
            <Pressable
              className="w-full px-6 h-[50px] flex items-center justify-center"
              onPress={() => handleUnmatchAndReport()}
            >
              <Text
                allowFontScaling={false}
                className="w-full text-[17px] text-center font-jokkerl -tracking-[0.5px] text-white"
              >
                {t("single-channel.unmatch-report")}
              </Text>
            </Pressable>
          </Animated.View>
        </View>
      </Modal>
      {channel.state.messageSets.length === 0 && (
        <View className="w-full absolute top-48 left-0 px-2">
          <Text
            allowFontScaling={false}
            className="text-[36px] font-jokkerl  -tracking-widest text-center"
          >
            {t("single-channel.new-chat-title")}
          </Text>
          <Text
            allowFontScaling={false}
            className="text-[16px] font-jokkerl  -tracking-wide text-center mt-4"
          >
            {t("single-channel.new-chat-subtitle")}
          </Text>
        </View>
      )}
      {!isLoading && (
        <Channel
          channel={channel}
          initialScrollToFirstUnreadMessage
          KeyboardCompatibleView={CustomKeyboardCompatibleView}
          EmptyStateIndicator={CustomEmptyState}
          MessageSimple={CustomMessageUIComponent}
          // TypingIndicatorContainer={customTypingIndicator}
        >
          <MessageList />
          <MessageInput />
        </Channel>
      )}
    </View>
  );
};

export default SingleChannelScreen;
