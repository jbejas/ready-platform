import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { View, Text, TextInput } from "react-native";
import DynamicButton from "@components/DynamicButton/DynamicButton";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";

// Amplify Utils
import { updateUser } from "@utils/amplifyUtils";

// Redux
import { setUser } from "@store/auth/authSlice";

// Amplify
import * as mutations from "@graphql/mutations";
import * as queries from "@graphql/queries";
import * as customQueries from "@gcq/index";
import { generateClient, GraphQLQuery } from "@aws-amplify/api";
import {
  SearchLikesQuery,
  UpdateLikeInput,
  UpdateLikeMutation,
  DeleteStreamChannelQuery,
} from "@src/api/index";

// Localization
import { useTranslation } from "react-i18next";

// Define the props type for your navigation stack
type Props = {
  route: RouteProp<any>;
  navigation: NavigationProp<any>;
};

// Redux Root State
interface RootState {
  keyboard: {
    isKeyboardVisible: boolean;
  };
  auth: {
    user: string;
  };
}

const UnmatchDetailsScreen = ({ route, navigation }: Props) => {
  // Mount Localization
  const { t } = useTranslation();
  // Mount Graphql API
  const API = generateClient();
  // Mount Redux dispatch
  const dispatch = useDispatch();

  // Get user
  const user = JSON.parse(useSelector((state: RootState) => state.auth.user));
  // Get keyboard state
  const isKeyboardVisible = useSelector(
    (state: RootState) => state.keyboard.isKeyboardVisible,
  );

  const { userName, selectedValue, chatChannelId, chatChannelCid } =
    route.params;

  const [details, setDetails] = useState<string>("");
  const [isUnmatching, setIsUnmatching] = useState<boolean>(false);

  const handleUnmatch = async () => {
    try {
      setIsUnmatching(true);
      const {
        data: {
          searchLikes: {
            items: [{ id: channelId, likerId, likedId }],
          },
        },
      } = await API.graphql<GraphQLQuery<SearchLikesQuery>>({
        query: customQueries.searchLikes,
        variables: {
          limit: 1,
          filter: {
            channelId: {
              eq: chatChannelId,
            },
          },
        },
      });

      const channelDetails: UpdateLikeInput = {
        id: channelId,
        active: false,
        unmatchReason: selectedValue.name,
        details,
        isUnmatched: true,
        unmatchedUserId: user.id === likerId ? likedId : likerId, // If the user unmatching is the liker, then the user being unmateched is the liked and VV.
      };

      const { data } = await API.graphql<GraphQLQuery<UpdateLikeMutation>>({
        query: mutations.updateLike,
        variables: { input: channelDetails },
      });

      const response = await API.graphql<
        GraphQLQuery<DeleteStreamChannelQuery>
      >({
        query: queries.deleteStreamChannel,
        variables: {
          channelCid: chatChannelCid,
        },
      });

      console.log("Response", response);

      const activeConnections = user.activeConnections - 1;
      const updatedUser = await updateUser(user.id, {
        activeConnections,
      });
      await dispatch(setUser(updatedUser));

      navigation.navigate("UnmatchCompleteScreen", {
        userName,
      });
      setIsUnmatching(false);
    } catch (error) {
      setIsUnmatching(true);
      console.log("Error handle unmatch", error);
    }
  };

  return (
    <SafeAreaComponent
      testID="UnmatchDetails"
      relative
      isPressable
      customClasses="bg-gradient-start"
    >
      <View className="w-full">
        <Text
          allowFontScaling={false}
          className="text-[36px] font-jokkerl  -tracking-widest"
        >
          {t("unmatch-details-screen.title")}
        </Text>
        <Text
          allowFontScaling={false}
          className="text-[16px] font-jokkerl  -tracking-wide my-4"
        >
          {t("unmatch-details-screen.subtitle")}
        </Text>
      </View>
      <View className="w-full flex flex-row items-center justify-center pt-3 mt-6">
        <TextInput
          onChangeText={(e) => setDetails(e)}
          className="w-full text-xl h-52  font-jokkerl border-b mb-4 border-dark"
          defaultValue={details}
          placeholder={t("unmatch-details-screen.share-your-thoughts")}
          autoCapitalize="none"
          keyboardType="default"
          autoCorrect={true}
          maxLength={300}
          multiline={true}
        />
      </View>
      <View className="w-full flex flex-row items-end justify-center">
        <Text
          allowFontScaling={false}
          className="w-full text-right font-jokkerl"
        >
          {details ? details.length : 0} / 300
        </Text>
      </View>
      <View
        className={`${
          isKeyboardVisible ? "absolute -bottom-96" : "absolute bottom-12"
        } w-screen px-6 left-0 flex flex-row items-center justify-end`}
      >
        <DynamicButton
          onPress={() => handleUnmatch()}
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
          loaderColor="#000"
          isLoading={isUnmatching}
          disabled={details.length === 0}
        />
      </View>
    </SafeAreaComponent>
  );
};

export default UnmatchDetailsScreen;
