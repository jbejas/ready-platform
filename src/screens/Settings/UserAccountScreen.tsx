import React, { useEffect, useState } from "react";
import { View, Text, Pressable, Dimensions } from "react-native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ConnectionProfile from "@components/ConnectionProfile";
import StoryDashes from "@components/StoryDashes/StoryDashes";
import dayjs from "dayjs";

// Reanimated
import Animated, {
  useSharedValue,
  withSpring,
  ReduceMotion,
} from "react-native-reanimated";

// Tabler Icons
import { IconX } from "@tabler/icons-react-native";

// Constants
import { ONBOARDING_SCREENS } from "@constants/constants";

// Safe Area Lib
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Amplify
import * as mutations from "@graphql/mutations";
import * as customQueries from "@gcq/index";
import { generateClient, GraphQLQuery } from "@aws-amplify/api";
import {
  GetUserQuery,
  DeleteDayInput,
  DeleteDayMutation,
  DeleteUserInput,
  DeleteUserMutation,
} from "@src/api/index";

// Package version
import packageJson from "./../../../package.json";

// Localization
import { useTranslation } from "react-i18next";

// Amplify Graph Queries
import { signOut, deleteUser } from "aws-amplify/auth";

// Set Redux
import { useDispatch, useSelector } from "react-redux";
import { setUser, resetAuth } from "@store/auth/authSlice";
import { resetSignUp } from "@store/signUp/signUpSlice";
import { setStoryVisibility } from "@store/stories/storiesSlice";

// Utils
import { getUserCurrentDay, getReflectionsDaysCount } from "@utils/reflections";
import { createDayUser } from "@utils/amplifyUtils";
import { unregisterDeviceOneSignal } from "@src/utils/onesignal";

// Define the state structure
interface RootState {
  auth: {
    user: string;
    userType: string;
  };
}

export default function UserAccountScreen({ navigation }) {
  // Mount Localization
  const { t } = useTranslation();
  // Mount Redux dispatch
  const dispatch = useDispatch();
  // Mount Graphql API
  const API = generateClient();
  // Safe Area Insets
  const insets = useSafeAreaInsets();
  // Profile animation
  const { height, scale } = Dimensions.get("screen");

  const topInitialValue = height * -1;
  const topEndValue = 0;
  const profileBottom = useSharedValue(topInitialValue);

  const storyBottom = useSharedValue(topInitialValue);

  // Spring config
  const springConfig = {
    mass: 1,
    damping: 100,
    stiffness: 500,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 2,
    reduceMotion: ReduceMotion.System,
  };

  // Get user
  const user = JSON.parse(useSelector((state: RootState) => state.auth.user));
  // Get user type
  const userType = useSelector((state: RootState) => state.auth.userType);

  // Set user onboarding step
  const setOnboardingStep = user ? user.onboardingStep : 0;
  const onboardingDropRoute = ONBOARDING_SCREENS[setOnboardingStep];

  const [isLoading, setIsLoading] = useState<any>(null);
  const [isAddDayLoading, setIsAddDayLoading] = useState<any>(null);
  const [isDeleteLoading, setIsDeleteLoading] = useState<any>(null);
  const [isStoryVisible, setIsStoryVisible] = useState<boolean>(false);

  const showStory = async () => {
    await dispatch(setStoryVisibility(true));
    await setIsStoryVisible(true);
    storyBottom.value = withSpring(topEndValue, springConfig);
  };

  const hideStory = async () => {
    await dispatch(setStoryVisibility(false));
    storyBottom.value = withSpring(topInitialValue, springConfig);
    setTimeout(() => {
      dispatch(setStoryVisibility(false));
    }, 500);
  };

  const handleResetDay = async () => {
    try {
      const { data } = await API.graphql<GraphQLQuery<GetUserQuery>>({
        query: customQueries.getUser,
        variables: {
          id: user.id,
        },
      });
      const days = JSON.stringify(data.getUser.days);
      const parsedDays = JSON.parse(days).items;
      const currentDay = await getUserCurrentDay(parsedDays);
      const dayDetails: DeleteDayInput = {
        id: currentDay["_z"].id,
      };
      const deleteDay = await API.graphql<GraphQLQuery<DeleteDayMutation>>({
        query: mutations.deleteDay,
        variables: { input: dayDetails },
      });

      const newUserDays = parsedDays.filter((day) => {
        if (day.id !== currentDay["_z"].id) {
          return day;
        }
        return false;
      });

      user.days.items = newUserDays;

      await dispatch(setUser(user));
      navigation.goBack();
    } catch (error) {
      console.log("getUserData error:", error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      setIsDeleteLoading(true);
      const userDetails: DeleteUserInput = {
        id: user.id,
      };
      const deletedUser = await API.graphql<GraphQLQuery<DeleteUserMutation>>({
        query: mutations.deleteUser,
        variables: { input: userDetails },
      });
      await deleteUser();
      await handleSignOut();
      setIsDeleteLoading(false);
    } catch (error) {
      console.log("Error deleteing profile", error);
      setIsDeleteLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      // TODO: Disconnect user from Stream.
      // TODO: Disconnect user from OneSignal (is it needed?)
      setIsLoading(true);
      await unregisterDeviceOneSignal(user);
      await dispatch(resetSignUp());
      await dispatch(resetAuth());
      await AsyncStorage.removeItem("user-main-image");
      await signOut();
    } catch (error) {
      console.log("Error signing out", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddNewDay = async () => {
    try {
      setIsAddDayLoading(true);
      const days = await getReflectionsDaysCount(user.id);
      const dayPlusOne: number = days + 1;
      const dayPosition: number = 10;
      await createDayUser(user.id, dayPlusOne, 10, "Lorem", "Ipsum", "Dolor");
      user.days.items.push({
        createdAt: dayjs().toISOString(),
        day: dayPlusOne,
        position: dayPosition,
      });
      setTimeout(async () => {
        await dispatch(setUser(user));
        setIsAddDayLoading(false);
        navigation.goBack();
      }, 1000);
    } catch (error) {
      console.log("Error deleteing profile", error);
      setIsAddDayLoading(false);
    }
  };

  const goToProfile = () => {
    // If user profile is not complete navigate to the onboarding screen where the user dropped off.
    if (!user.isProfileComplete) {
      navigation.navigate(onboardingDropRoute, {
        isEditing: false,
        comesFromCategory: false,
        isOnboarding: true,
      });
      return;
    }
    navigation.navigate("MyProfileScreen", {
      isOnboarding: false,
    });
  };

  const showProfile = async () => {
    await dispatch(setStoryVisibility(true));
    profileBottom.value = withSpring(topEndValue, springConfig);
  };

  const hideProfile = async () => {
    try {
      profileBottom.value = withSpring(topInitialValue, springConfig);
      setTimeout(() => {
        dispatch(setStoryVisibility(false));
      }, 500);
    } catch (error) {
      console.log("hideProfile error", error);
    }
  };

  useEffect(() => {
    console.log("User account Height", height, scale);
  }, []);

  return (
    <View className="relative w-screen h-screen">
      {/* Profile */}
      <Animated.View
        className="w-screen bg-gradient-start absolute z-100"
        style={{ bottom: profileBottom, height }}
      >
        <Pressable
          onPress={hideProfile}
          className="w-[35px] h-[35px] absolute right-6 z-10 rounded-full bg-white/50 flex items-center justify-center"
          style={{ top: insets.top - 5 }}
        >
          <IconX width={30} height={30} color="#000" strokeWidth={1} />
        </Pressable>
        {user ? (
          <ConnectionProfile
            navigation={navigation}
            connectionData={user}
            closeProfile={hideProfile}
          />
        ) : null}
      </Animated.View>
      {/* End Profile */}
      {/* Story */}
      <Animated.View
        className="w-screen h-screen absolute z-10"
        style={{ bottom: storyBottom, height }}
      >
        {isStoryVisible ? (
          <StoryDashes
            onClosePress={hideStory}
            onSendSpark={(connectionId) =>
              console.log("connectionId", connectionId)
            }
            userData={user}
            viewProfile={() => {
              console.log("viewProfile");
            }}
            navigation={navigation}
          />
        ) : null}
      </Animated.View>
      {/* End Story */}
      <SafeAreaComponent
        testID="UserAccount"
        relative
        scrollable
        addVerticalInsets={false}
      >
        <View className="w-full h-full flex flex-col items-start justify-center mb-[50px] mt-8">
          <View className="flex flex-row items-center justify-center">
            <Text
              allowFontScaling={false}
              className="text-left text-[36px] font-jokkerl -tracking-widest"
            >
              {t("user-settings.my-account")}
            </Text>
          </View>
          <View className="w-full">
            <View className="w-full border-t border-solid border-dark/20 mt-8">
              <Pressable onPress={() => showProfile()}>
                <Text
                  allowFontScaling={false}
                  className="text-[18px] py-5 font-jokkerl -tracking-wide"
                >
                  {t("user-settings.view-my-profile")}
                </Text>
              </Pressable>
            </View>
            <View className="w-full border-t border-solid border-dark/20">
              <Pressable onPress={() => showStory()}>
                <Text
                  allowFontScaling={false}
                  className="text-[18px] py-5 font-jokkerl -tracking-wide"
                >
                  {t("user-settings.view-my-story")}
                </Text>
              </Pressable>
            </View>
            <View className="w-full border-t border-solid border-dark/20">
              <Pressable onPress={() => goToProfile()}>
                <Text
                  allowFontScaling={false}
                  className="text-[18px] py-5 font-jokkerl -tracking-wide"
                >
                  {t("user-settings.my-profile")}
                </Text>
              </Pressable>
            </View>
            <View className="w-full border-t border-solid border-dark/20">
              {user && user.isProfileComplete ? (
                <Pressable
                  onPress={() => navigation.navigate("AboutYouScreen")}
                >
                  <Text
                    allowFontScaling={false}
                    className="text-[18px] py-5 font-jokkerl -tracking-wide"
                  >
                    {t("user-settings.about-you")}
                  </Text>
                </Pressable>
              ) : (
                <Text
                  allowFontScaling={false}
                  className="text-[18px] py-5 font-jokkerl -tracking-wide opacity-70"
                >
                  {t("user-settings.about-you")}
                </Text>
              )}
            </View>
            <View className="w-full border-t border-solid border-dark/20">
              {user && user.isProfileComplete ? (
                <Pressable
                  onPress={() =>
                    navigation.navigate("MatchingPreferencesScreen")
                  }
                >
                  <Text
                    allowFontScaling={false}
                    className="text-[18px] py-5 font-jokkerl -tracking-wide"
                  >
                    {t("user-settings.matching-preferences")}
                  </Text>
                </Pressable>
              ) : (
                <Text
                  allowFontScaling={false}
                  className="text-[18px] py-5 font-jokkerl -tracking-wide opacity-70"
                >
                  {t("user-settings.matching-preferences")}
                </Text>
              )}
            </View>
            <View className="w-full border-t border-solid border-dark/20">
              <Pressable
                onPress={() =>
                  navigation.navigate("NotificationSettingsScreen")
                }
              >
                <Text
                  allowFontScaling={false}
                  className="text-[18px] py-5 font-jokkerl -tracking-wide"
                >
                  {t("user-settings.notification-settings")}
                </Text>
              </Pressable>
            </View>
            <View className="w-full border-t border-solid border-dark/20">
              <Pressable
                onPress={() => navigation.navigate("AccountInformationScreen")}
              >
                <Text
                  allowFontScaling={false}
                  className="text-[18px] py-5 font-jokkerl -tracking-wide"
                >
                  {t("user-settings.account-information")}
                </Text>
              </Pressable>
            </View>
            <View className="w-full border-t border-solid border-dark/20">
              <Pressable onPress={() => navigation.navigate("HelpScreen")}>
                <Text
                  allowFontScaling={false}
                  className="text-[18px] py-5 font-jokkerl -tracking-wide"
                >
                  {t("user-settings.help")}
                </Text>
              </Pressable>
            </View>
            <View className="w-full border-t border-solid border-dark/20">
              <Pressable onPress={() => navigation.navigate("AboutScreen")}>
                <Text
                  allowFontScaling={false}
                  className="text-[18px] py-5 font-jokkerl -tracking-wide"
                >
                  {t("user-settings.about")}
                </Text>
              </Pressable>
            </View>
            <View className="w-full border-t border-solid border-dark/20">
              <Pressable onPress={() => handleSignOut()}>
                <Text
                  allowFontScaling={false}
                  className="text-[18px] py-5 font-jokkerl underline -tracking-wide"
                >
                  {t("user-settings.log-out")}
                </Text>
              </Pressable>
            </View>
            <View className="w-full border-t border-solid border-dark/20">
              <Text
                allowFontScaling={false}
                className="text-[14px] py-5 font-jokkerl -tracking-wide"
              >
                {packageJson.version && `v${packageJson.version}`}
              </Text>
            </View>
          </View>
          {userType !== "mobileapptester" ? (
            <View className="flex w-full items-center justify-center mb-44">
              <DynamicButton
                onPress={() => handleAddNewDay()}
                type={"primary"}
                label={`Add Day`}
                size="large"
                iconPosition="right"
                iconSize={30}
                rounded="full"
                position="none"
                textStyles="text-base"
                customStyles="mt-4"
                addShadow={true}
                disabled={isAddDayLoading}
                isLoading={isAddDayLoading}
              />
              <DynamicButton
                onPress={() => handleResetDay()}
                type={"primary"}
                label={`Reset Day`}
                size="large"
                iconPosition="right"
                iconSize={30}
                rounded="full"
                position="none"
                textStyles="text-base"
                customStyles="mt-4"
                addShadow={true}
                disabled={isLoading}
                isLoading={isLoading}
              />
              <DynamicButton
                onPress={() => handleDeleteAccount()}
                type={"primary"}
                label={`Delete Account`}
                size="large"
                iconPosition="right"
                iconSize={30}
                rounded="full"
                position="none"
                textStyles="text-base"
                customStyles="mt-4"
                addShadow={true}
                disabled={isDeleteLoading}
                isLoading={isDeleteLoading}
              />
            </View>
          ) : null}
        </View>
      </SafeAreaComponent>
    </View>
  );
}
