import { useState, useEffect } from "react";
import { NavigationProp } from "@react-navigation/native";
import { View, Text, Dimensions, Pressable, Modal } from "react-native";
import StoryDashes from "@components/StoryDashes/StoryDashes";
import MatchesSliderV2 from "@components/MatchesSliderV2";
import ConnectionProfile from "@components/ConnectionProfile";
import Animated, {
  useSharedValue,
  withSpring,
  ReduceMotion,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import DynamicButton from "@components/DynamicButton/DynamicButton";

// Images
import BigButtonDark from "@assets/images/big-button-dark.svg";

// Skeleton
import { Skeleton } from "moti/skeleton";

// Redux
import { AppDispatch } from "@store/store";
import { useDispatch, useSelector } from "react-redux";
import { setStoryVisibility } from "@store/stories/storiesSlice";
import {
  setIsConnectionsBadgeVisible,
  updateConnections,
  fetchConnections,
} from "@store/connections/connectionsSlice";
import { setCanUserReflect } from "@src/store/reflections/reflectionsSlice";

// Localization
import { useTranslation } from "react-i18next";

// Icons
import { IconX } from "@tabler/icons-react-native";
import { canUserReflectToday } from "@utils/reflections";
import ConnectionsIcon from "@assets/icons/connections.svg";

const SkeletonCommonProps = {
  colorMode: "light",
  transition: {
    type: "timing",
    duration: 1500,
  },
  backgroundColor: "#D4D4D4",
} as const;

// Define the state structure
interface RootState {
  auth: {
    user: string;
  };
  connections: {
    updatedOn: string;
    connections: any[];
    isConnectionsBadgeVisible: boolean;
    status: string;
  };
  reflections: {
    canUserReflect: boolean;
  };
  config: {
    activeConnectionsLimit: number;
  };
}

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

export default function ConnectScreen({ navigation }: Props) {
  // Mount Localization
  const { t } = useTranslation();
  // Mount Redux dispatch
  const dispatch: AppDispatch = useDispatch();
  // Get userData
  const user = JSON.parse(useSelector((state: RootState) => state.auth.user));
  // Current user connections
  const connections = useSelector(
    (state: RootState) => state.connections.connections,
  );
  const canUserReflect = useSelector(
    (state: RootState) => state.reflections.canUserReflect,
  );
  const isConnectionsBadgeVisible = useSelector(
    (state: RootState) => state.connections.isConnectionsBadgeVisible,
  );
  // Get app config
  const activeConnectionsLimit = useSelector(
    (state: RootState) => state.config.activeConnectionsLimit,
  );
  // Is Loading connections
  const loadingStatus = useSelector(
    (state: RootState) => state.connections.status,
  );

  // Get screen dimensions
  const { width, height } = Dimensions.get("screen");

  // Constants
  const [matchIndex, setMatchIndex] = useState<number>(0);
  const [isStoryVisible, setIsStoryVisible] = useState<boolean>(false);
  const [isProfileVisible, setIsProfileVisible] = useState<boolean>(false);
  const [userConnections, setUserConnections] = useState<any>([]);
  const [isLearnMoreModalVisible, setIsLearnMoreModalVisible] =
    useState<boolean>(false);
  const [isPauseModalVisible, setIsPauseModalVisible] =
    useState<boolean>(false);
  const [isConnectionsLimitReached, setIsConnectionsLimitReached] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Reanimated spring configuration
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

  const storyBottom = useSharedValue(bottomInitialValue);
  const profileBottom = useSharedValue(bottomInitialValue);

  const showStory = async (index) => {
    await setMatchIndex(index);
    await dispatch(setStoryVisibility(true));
    await setIsStoryVisible(true);
    storyBottom.value = withSpring(bottomEndValue, springConfig);
  };

  const hideStory = async () => {
    await dispatch(setStoryVisibility(false));
    storyBottom.value = withSpring(bottomInitialValue, springConfig);
    setTimeout(() => {
      setIsStoryVisible(false);
    }, 500);
  };

  const showProfile = async (index) => {
    await setMatchIndex(index);
    await dispatch(setStoryVisibility(true));
    await setIsProfileVisible(true);
    profileBottom.value = withSpring(bottomEndValue, springConfig);
    setTimeout(() => {
      storyBottom.value = withSpring(bottomInitialValue, springConfig);
    }, 500);
  };

  const hideProfile = async () => {
    try {
      await dispatch(setStoryVisibility(false));
      profileBottom.value = withSpring(bottomInitialValue, springConfig);
      setTimeout(() => {
        setIsProfileVisible(false);
      }, 500);
    } catch (error) {
      console.log("hideProfile error", error);
    }
  };

  useEffect(() => {
    const focusListener = navigation.addListener("focus", async () => {});

    return focusListener;
  }, [navigation]);

  useEffect(() => {
    try {
      console.log("Connections updated", connections);
      setUserConnections(connections);
    } catch (error) {
      console.log("Error getting connections", error);
    }
  }, [connections]);

  const updateSparkedConnection = (connectionId) => {
    console.log("Connection ID", connectionId);
    setUserConnections((prevConnections) =>
      prevConnections.map((connection) =>
        connection.id === connectionId
          ? { ...connection, isLiked: true }
          : connection,
      ),
    );
    setTimeout(() => {
      dispatch(updateConnections(userConnections));
    }, 1000);
  };

  useEffect(() => {
    setIsConnectionsLimitReached(
      user.activeConnections < activeConnectionsLimit ? false : true,
    );
  }, [activeConnectionsLimit, user]);

  useEffect(() => {
    console.log("loadingStatus", loadingStatus);
    setIsLoading(loadingStatus === "suceeded" ? false : true);
  }, [loadingStatus]);

  useEffect(() => {
    const initConnectScreen = async () => {
      const checkIfUserCanReflect = await canUserReflectToday(user.days.items);
      dispatch(setCanUserReflect(checkIfUserCanReflect));
      if (isConnectionsBadgeVisible) {
        await dispatch(setIsConnectionsBadgeVisible(false));
        setIsPauseModalVisible(true);
      }
      // @ts-ignore
      dispatch(fetchConnections({ userId: user.id }));
    };
    initConnectScreen();
  }, []);

  const goToMyProfileScreen = () => {
    // Move the user to the User Account Tab
    navigation.navigate("UserAccount");
    // After that move the user to My Profile Screen
    setTimeout(() => {
      navigation.navigate("MyProfileScreen");
    }, 0);
  };

  return (
    <View testID="screen.ConnectTab" className="relative">
      <Modal
        animationType="slide"
        transparent={true}
        visible={isLearnMoreModalVisible}
        className="relative"
      >
        {/* <View className="w-screen h-screen absolute left-0 top-0 z-0 bg-dark/40"></View> */}
        <View className="w-full h-[320px] px-5 flex items-center justify-start absolute bottom-0 pb-24 rounded-t-2xl bg-card z-10">
          <Text
            allowFontScaling={false}
            className="text-dark-gray w-full text-left text-[20px] font-jokkerl  mt-6"
          >
            {t("connect-screen.modal-text-1")}
          </Text>
          <Text
            allowFontScaling={false}
            className="text-dark-gray w-full text-left text-[20px] font-jokkerl  mt-6"
          >
            {t("connect-screen.modal-text-2")}
          </Text>
          <DynamicButton
            onPress={() => setIsLearnMoreModalVisible(false)}
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={isPauseModalVisible}
        className="relative"
      >
        {/* <View className="w-screen h-screen absolute left-0 top-0 z-0 bg-dark/40"></View> */}
        <View className="w-screen h-screen px-5 pt-28 flex items-center justify-start absolute bottom-0 rounded-t-2xl z-10">
          <LinearGradient
            colors={["#A69CBE", "#C7BED9"]}
            className="w-screen h-screen absolute left-0 bottom-0 rounded-b-3xl"
          />
          {/* <Pressable
            onPress={() => handlePausePopupClose()}
            className="absolute top-16 right-6 z-30 bg-white/30 rounded-full p-1"
          >
            <IconX width={25} height={25} color="#000" strokeWidth={1} />
          </Pressable> */}
          <Text
            allowFontScaling={false}
            className="text-dark-gray w-full text-left text-[40px] font-jokkerl"
          >
            {t("connect-screen.pause-text")}
          </Text>
          <Pressable
            className="mt-12"
            onPress={() => setIsPauseModalVisible(false)}
          >
            <BigButtonDark width={320} height={320} />
          </Pressable>
        </View>
      </Modal>
      {/* Background gradient */}
      <LinearGradient
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        colors={["#EEE8DC", "#FFF8E6"]}
        className="w-screen h-screen absolute left-0 bottom-0 rounded-b-3xl"
      />
      {/* Story */}
      <Animated.View
        className="w-screen h-screen absolute z-10"
        style={{ bottom: storyBottom }}
      >
        {isStoryVisible && connections?.length > 0 ? (
          <StoryDashes
            onClosePress={hideStory}
            onSendSpark={(connectionId) =>
              updateSparkedConnection(connectionId)
            }
            userData={connections[matchIndex]}
            viewProfile={() => {
              showProfile(matchIndex);
            }}
            navigation={navigation}
          />
        ) : null}
      </Animated.View>
      {/* End Story */}
      {/* Profile */}
      <Animated.View
        className="w-screen h-screen absolute z-20"
        style={{ bottom: profileBottom }}
      >
        <Pressable
          onPress={hideProfile}
          className="w-[30px] h-[30px] absolute top-16 right-6 z-10 rounded-full bg-white/50 flex items-center justify-center"
        >
          <IconX width={25} height={25} color="#000" strokeWidth={1} />
        </Pressable>
        {isProfileVisible && connections?.length > 0 ? (
          <ConnectionProfile
            connectionData={connections[matchIndex]}
            closeProfile={hideProfile}
          />
        ) : null}
      </Animated.View>
      {/* End profile */}

      {/* If the total connections for this user has reached the limit set in the admin panel, it cannot see new connections. */}
      {isConnectionsLimitReached ? (
        <View className="w-screen h-screen flex items-center justify-start px-6 relative z-20 bg-gradient-start">
          <Text
            allowFontScaling={false}
            className="text-[40px] font-jokkerl mt-28 w-full"
          >
            {t("connect-screen.connect-title")}
          </Text>
          <View className="w-screen absolute bottom-0 left-0 mb-28 px-6">
            <ConnectionsIcon width={45} height={32} />
            <Text
              allowFontScaling={false}
              className="text-[32px] font-jokkerl w-full mt-4"
            >
              {t("connect-screen.connection-limit-title")}
            </Text>
            <Text
              allowFontScaling={false}
              className="text-[16px] font-jokkerl mt-4 w-full"
            >
              {t("connect-screen.connection-limit-subtitle-1", {
                activeConnectionsLimit,
              })}
            </Text>
            <Text
              allowFontScaling={false}
              className="text-[16px] font-jokkerl mt-4 w-full"
            >
              {t("connect-screen.connection-limit-subtitle-2")}
            </Text>
          </View>
        </View>
      ) : null}

      {/* If user can reflect today it should not see any connections */}
      {canUserReflect ? (
        <View className="w-screen h-screen flex items-center justify-start px-6 absolute top-0 left-0 z-20 bg-gradient-start">
          <Text
            allowFontScaling={false}
            className="text-[40px] font-jokkerl mt-28 w-full"
          >
            {t("connect-screen.connect-title")}
          </Text>
          <View className="w-screen absolute bottom-0 left-0 mb-28 px-6">
            <ConnectionsIcon width={45} height={32} />
            <Text
              allowFontScaling={false}
              className="text-[32px] font-jokkerl w-full mt-4"
            >
              {t("connect-screen.profile-title")}
            </Text>
            <Text
              allowFontScaling={false}
              className="text-[18px] font-jokkerl mt-4 w-full"
            >
              {t("connect-screen.reflect-subtitle")}
            </Text>
            <Text
              allowFontScaling={false}
              className="text-[18px] font-jokkerl mt-4 w-full"
            >
              {t("connect-screen.reflect-subtitle-2")}
              <Text className="text-[18px] font-jokkerl underline">
                {t("connect-screen.reflect-subtitle-3")}
              </Text>
              {t("connect-screen.reflect-subtitle-4")}
            </Text>
          </View>
        </View>
      ) : null}

      {/* If there are connections set, show them */}
      {connections?.length > 0 ? (
        <View className="relative w-screen h-screen">
          <View className="w-full flex flex-row items-center justify-between absolute top-20 z-10 px-6">
            <Text
              allowFontScaling={false}
              className="text-dark font-jokkerl text-[30px] -tracking-widest"
            >
              {t("connect-screen.connect-title")}
            </Text>
            <Pressable onPress={() => setIsLearnMoreModalVisible(true)}>
              <Text
                allowFontScaling={false}
                className="text-dark font-jokkerl text-[16px] underline"
              >
                {t("connect-screen.learn-more")}
              </Text>
            </Pressable>
          </View>
          <View className="w-full flex flex-row items-center justify-between absolute top-32 z-10 px-6">
            <Text
              allowFontScaling={false}
              className="text-dark font-jokkerl text-[18px] -tracking-widest"
            >
              {t("connect-screen.connections", {
                connectionsCount: connections.length,
                userFirstName: user.firstName,
              })}
            </Text>
          </View>
          {/* <MatchesSlider
                data={userConnections}
                onPress={(index) => showStory(index)}
              /> */}
          <MatchesSliderV2
            data={connections}
            onPress={(index) => showStory(index)}
          />
          <View className="w-screen absolute left-0 bottom-12 sm-1:bottom-20 h-8 z-30 flex items-center justify-center">
            <Text className="font-jokkerl text-[14px] w-full text-center">
              {t("connect-screen.pull-down")}
            </Text>
          </View>
        </View>
      ) : (
        <View className="w-screen h-screen flex items-center justify-start px-6 relative">
          <Text
            allowFontScaling={false}
            className="text-[40px] font-jokkerl mt-28 w-full"
          >
            {t("connect-screen.connect-title")}
          </Text>
          <View className="w-screen absolute bottom-0 left-0 mb-28 px-6">
            <ConnectionsIcon width={45} height={32} />
            <Text
              allowFontScaling={false}
              className="text-[32px] font-jokkerl w-full mt-4"
            >
              {t("connect-screen.profile-title")}
            </Text>
            <Text
              allowFontScaling={false}
              className="text-[18px] font-jokkerl mt-4 w-full"
            >
              {t("connect-screen.reflect-subtitle")}
            </Text>
            <Text
              allowFontScaling={false}
              className="text-[18px] font-jokkerl mt-4 w-full"
            >
              {t("connect-screen.reflect-subtitle-2")}
              <Text className="text-[18px] font-jokkerl underline">
                {t("connect-screen.reflect-subtitle-3")}
              </Text>
              {t("connect-screen.reflect-subtitle-4")}
            </Text>
          </View>
        </View>
      )}

      {/* If connections are being loaded, show the loader. */}
      {isLoading ? (
        <View className="w-screen h-screen flex items-center justify-center absolute top-0 left-0 z-0 bg-gradient-start">
          <Skeleton.Group show={true}>
            <View className="w-full flex flex-row items-center justify-between px-5 relative">
              <Skeleton
                height={height * 0.65}
                width={width * 0.9}
                radius={10}
                {...SkeletonCommonProps}
              />
              <View className="w-2/3 absolute bottom-4 left-8">
                <Skeleton
                  height={40}
                  width={"70%"}
                  radius={5}
                  {...SkeletonCommonProps}
                />
                <View className="w-full mt-[7px]">
                  <Skeleton
                    height={20}
                    width={"50%"}
                    radius={5}
                    {...SkeletonCommonProps}
                  />
                </View>
              </View>
              <View className="w-1/3 flex items-end justify-center -mt-[5px]">
                <Skeleton
                  height={50}
                  width={50}
                  radius={"round"}
                  {...SkeletonCommonProps}
                />
              </View>
            </View>
          </Skeleton.Group>
        </View>
      ) : null}

      {/* If the user profile is not complete, the user cannot see any connections. */}
      {!user?.isProfileComplete ? (
        <View className="w-screen h-screen flex items-center justify-start px-6 absolute top-0 left-0 z-20 bg-gradient-start">
          <Text
            allowFontScaling={false}
            className="text-[40px] font-jokkerl mt-28 w-full"
          >
            {t("connect-screen.connect-title")}
          </Text>
          <View className="w-screen absolute bottom-0 left-0 mb-28 px-6">
            <ConnectionsIcon width={45} height={32} />
            <Text
              allowFontScaling={false}
              className="text-[32px] font-jokkerl w-full mt-4"
            >
              {t("connect-screen.profile-title")}
            </Text>
            <Text
              allowFontScaling={false}
              className="text-[16px] font-jokkerl mt-4 w-full"
            >
              {t("connect-screen.profile-subtitle")}
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
      ) : null}
    </View>
  );
}
