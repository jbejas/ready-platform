import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Skeleton } from "moti/skeleton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DynamicButton from "@components/DynamicButton/DynamicButton";

// Segment
import { useAnalytics } from "@segment/analytics-react-native";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  Easing,
  useAnimatedReaction,
  runOnJS,
  ReduceMotion,
} from "react-native-reanimated";

// Utils
import { sendPushNotificationToConnectedUser } from "@utils/onesignal";
import { sendEmailNotificationToConnectedUser } from "@utils/emails";

// Constants
import { STORY_TIMING, STORY_PAUSE } from "@constants/constants";

// Icons
import { IconX } from "@tabler/icons-react-native";

// Localization
import { useTranslation } from "react-i18next";

// Amplify Graph Queries
import { getUrl } from "aws-amplify/storage";

// Get User Photos
import { sendSpark } from "@utils/user";

type Props = {
  userData: any;
  onClosePress: () => void;
  viewProfile: () => void;
  onSendSpark: (connectionId) => void;
  navigation: any;
};

const SkeletonCommonProps = {
  colorMode: "light",
  transition: {
    type: "timing",
    duration: 1500,
  },
  backgroundColor: "#D4D4D4",
} as const;

// Redux Root State
interface RootState {
  auth: {
    user: string;
  };
  connections: {
    connections: any[];
  };
}

const StoryDashes = ({
  onClosePress,
  userData,
  viewProfile,
  onSendSpark,
  navigation,
}: Props) => {
  // Mount Localization
  const { t } = useTranslation();
  // Segment
  const { track } = useAnalytics();
  // Get user ID
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const currentUserData = JSON.parse(currentUser);

  const [isPaused, setIsPaused] = useState(false);
  const [storyIndex, setStoryIndex] = useState(0);
  const [userImages, setUserImages] = useState<
    {
      url: string;
    }[]
  >([]);
  const [storyViewDuration, setStoryViewDuration] =
    useState<number>(STORY_TIMING);
  const [storyElements, setStoryElements] = useState<
    {
      key: number;
      url?: string;
      bio?: string;
      quality?: string;
      spark?: boolean;
      prompt?: string;
      response?: string;
      showGradient?: boolean;
    }[]
  >([]);
  const [isProcessingSpark, setIsProcessingSpark] = useState<boolean>(false);
  const [userMainImage, setUserMainImage] = useState<string>("");

  const progress = useSharedValue(0); // 0 -> 1

  useEffect(() => {
    if (!isPaused) {
      progress.value = 0;
      progress.value = withTiming(1, {
        duration: storyViewDuration,
        easing: Easing.linear,
      });
    }
  }, [storyIndex, isPaused]);

  const handlePressIn = () => {
    setIsPaused(true);
    progress.value = withTiming(progress.value, { duration: 0 }); // Pause the animation
  };

  const handlePressOut = () => {
    setIsPaused(false);
    progress.value = withTiming(1, {
      duration: (1 - progress.value) * storyViewDuration,
      easing: Easing.linear,
    });
  };

  const goToPrevStory = () => {
    setStoryIndex((index) => {
      if (index === 0) {
        return 0;
      }
      return index - 1;
    });
  };

  const goToNextStory = () => {
    setStoryIndex((index) => {
      if (index === storyElements.length - 1) {
        return 0;
      }
      return index + 1;
    });
  };

  useAnimatedReaction(
    () => progress.value,
    (currentValue, previousValue) => {
      if (currentValue !== previousValue && currentValue === 1) {
        runOnJS(goToNextStory)();
      }
    }
  );

  const indicatorAnimatedStyle = useAnimatedStyle(() => ({
    width: `${progress.value * 100}%`,
  }));

  const getStoryImages = async () => {
    const images = [];
    const storyElements = [];
    await Promise.all(
      userData.photos.items
        .sort((a, b) => a.photo.sortOrder - b.photo.sortOrder)
        .map(async (photo, index) => {
          console.log("Story photo", photo.photo.name);
          const image1URI = await getUrl({
            path: `public/${photo.photo.name}`,
          });
          images.push({
            url: String(image1URI.url),
          });
        })
    );

    setUserImages(images);

    // Parse Prompts
    const userPrompts = JSON.parse(userData.prompts);

    // Add first image. This is always set. No additional logic needed here.
    storyElements.push({
      key: 0,
      url: String(images[0].url),
    });

    // Add user Bio if completed, if not, show prompt n
    if (userData.bio) {
      storyElements.push({
        key: 1,
        bio: userData.bio,
        showGradient: true,
      });
    } else {
      storyElements.push({
        key: 1,
        prompt: userPrompts[0].name,
        response: userPrompts[0].response,
        showGradient: true,
      });
    }

    // Add second image if exists...
    if (images[1]?.url) {
      storyElements.push({
        key: 2,
        url: String(images[1].url),
      });
    }

    // Add user prompt #2
    if (userPrompts[1]?.name !== "") {
      storyElements.push({
        key: 3,
        prompt: userPrompts[1].name,
        response: userPrompts[1].response,
        showGradient: true,
      });
    }

    if (images[2]?.url) {
      storyElements.push({
        key: 4,
        url: String(images[2].url),
      });
    }

    // Add user prompt #3
    if (userPrompts[2]?.name !== "") {
      storyElements.push({
        key: 5,
        prompt: userPrompts[2].name,
        response: userPrompts[2].response,
        showGradient: true,
      });
    }

    // Add user quality
    if (userData.quality) {
      storyElements.push({
        key: 6,
        quality: userData.quality,
      });
    }

    if (images[3]?.url) {
      storyElements.push({
        key: 7,
        url: String(images[3].url),
        spark: true,
      });
    } else {
      storyElements.push({
        key: 7,
        url: String(images[0].url),
        spark: true,
      });
    }

    if (userData.id === currentUserData.id) {
      storyElements.pop();
    }

    setStoryElements(storyElements);
  };

  const generateUserStory = () => {
    getStoryImages();
  };

  useEffect(() => {
    generateUserStory();
  }, [userData]);

  useEffect(() => {
    const getUserMainImage = async () => {
      const userMainImage = await AsyncStorage.getItem("user-main-image");
      setUserMainImage(userMainImage);
    };
    getUserMainImage();
  }, []);

  const handleSendSpark = async () => {
    try {
      // Pause story
      setStoryViewDuration(STORY_PAUSE);
      setStoryIndex(storyElements.length - 1);
      // Show processing indicator
      setIsProcessingSpark(true);
      // Send spark
      const spark = await sendSpark(currentUser, JSON.stringify(userData));
      // Hide processing indicator
      setIsProcessingSpark(false);
      // Update user to show check after sparking
      onSendSpark(userData.id);
      // Show modal windows if it is a match or just a spark
      if (!spark.result) {
        track("Spark sent", {
          spark: false,
        });
        showSparkModal();
      }
      if (spark.result) {
        // Send push notification!
        // isNewConnectionsNotificationPushActive
        // isNewConnectionsNotificationEmailActive
        if (
          userData.isNewConnectionsNotificationPushActive &&
          userData.oneSignalUserId
        ) {
          sendPushNotificationToConnectedUser(
            currentUserData.firstName,
            userData.oneSignalUserId
          );
        }
        if (
          userData.isNewConnectionsNotificationEmailActive &&
          userData.email
        ) {
          console.log("Send email notification after spark");
          sendEmailNotificationToConnectedUser(
            userData.email,
            currentUserData.firstName
          );
        }
        track("Spark sent", {
          spark: true,
        });
        showConnectionModal();
      }
    } catch (error) {
      console.log("handleSendSpark Error:", error);
    }
  };

  // Spark and connection animations
  const springConfig = {
    mass: 1,
    damping: 100,
    stiffness: 500,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 2,
    reduceMotion: ReduceMotion.System,
  };

  // Screen height
  const { height } = Dimensions.get("screen");

  // Initial animation values
  const bottomInitialValue = height * -1;
  const bottomEndValue = 0;

  // Setup initial elements position
  const sparkBottom = useSharedValue(bottomInitialValue);
  const connectionBottom = useSharedValue(bottomInitialValue);

  const showSparkModal = async () => {
    sparkBottom.value = withSpring(bottomEndValue, springConfig);
  };

  const showConnectionModal = async () => {
    connectionBottom.value = withSpring(bottomEndValue, springConfig);
  };

  const hideSparkModal = async () => {
    setStoryViewDuration(STORY_TIMING);
    setStoryIndex(storyElements.length - 1);
    sparkBottom.value = withSpring(bottomInitialValue, springConfig);
    setTimeout(() => {
      onClosePress();
    }, 500);
  };

  const hideConnectionModal = async () => {
    setStoryViewDuration(STORY_TIMING);
    setStoryIndex(storyElements.length - 1);
    connectionBottom.value = withSpring(bottomInitialValue, springConfig);
    setTimeout(() => {
      onClosePress();
    }, 500);
  };

  const handleOnClosePress = () => {
    setStoryIndex(0);
    progress.value = 0; // Stop the animation
    onClosePress();
  };

  return (
    <View className="w-screen h-screen relative bg-card">
      {storyElements.map((story, index) => (
        <View
          key={story.key}
          className={`w-screen h-screen flex items-center justify-center relative ${
            storyIndex === index ? "" : "hidden"
          }`}
        >
          {story.showGradient ? (
            <LinearGradient
              colors={["#A69CBE", "#C7BED9"]}
              className="w-screen h-screen absolute left-0 top-0 z-0"
            />
          ) : null}
          {story.url && (
            <Image
              source={{ uri: story.url }}
              className="w-full h-full absolute top-0 left-0"
              resizeMode="contain"
            />
          )}
          {story.spark && userData.id !== currentUserData.id && (
            <View className="w-screen h-screen absolute top-0 left-0 flex items-center">
              <Image
                source={{ uri: story.url }}
                className="w-screen absolute top-0 left-0 z-0"
              />
              {!userData.isLiked ? (
                <Pressable
                  onPress={() => handleSendSpark()}
                  className="w-[72px] h-[72px] absolute bottom-36 flex items-center justify-center z-[1000]"
                >
                  {isProcessingSpark ? (
                    <ActivityIndicator size="large" color="#FFF" />
                  ) : (
                    <View className="w-[146px] h-[146px] flex items-center justify-center relative">
                      <Image
                        source={require("@assets/icons/spark-button-light-large.png")}
                        className="absolute left-0 top-0 z-0"
                      />
                    </View>
                  )}
                </Pressable>
              ) : null}
              <View className="w-full absolute bottom-16 flex items-center justify-center px-8 z-40">
                {userData.isLiked ? (
                  <Text
                    allowFontScaling={false}
                    className="w-full text-center text-[20px] text-light mb-4 font-jokkerl"
                  >
                    You already sent a spark to {userData.firstName}
                  </Text>
                ) : null}
                {userData.id !== currentUserData.id ? (
                  <Pressable onPress={() => viewProfile()} className="w-full">
                    <Text
                      allowFontScaling={false}
                      className="w-full text-center text-[16px] text-light underline font-jokkerl"
                    >
                      {t("story-dashes.view-user-profile", {
                        userName: userData.firstName,
                      })}
                    </Text>
                  </Pressable>
                ) : null}
              </View>
              <View className="absolute bottom-0 left-0 w-full h-[250px] z-0">
                <LinearGradient
                  colors={["rgba(0,0,0,0)", "#000"]}
                  className="w-full h-full absolute left-0 bottom-0"
                />
              </View>
            </View>
          )}
          {story.bio && (
            <View className="w-screen h-screen fle items-center justify-center p-6">
              <Text
                allowFontScaling={false}
                className="text-[18px] text-dark font-jokkerl w-full pb-[64px]"
              >
                {t("story-dashes.about-me")}
              </Text>
              <Text
                allowFontScaling={false}
                className="text-[36px] text-dark font-jokkerl -tracking-widest w-full"
              >
                {story.bio}
              </Text>
            </View>
          )}
          {story.prompt && (
            <View className="w-screen h-screen fle items-center justify-center p-6">
              <Text
                allowFontScaling={false}
                className="text-[26px] text-dark font-jokkerl -tracking-widest w-full"
              >
                {story.prompt}
              </Text>
              <Text
                allowFontScaling={false}
                className="text-[36px] text-dark font-jokkerl -tracking-widest w-full"
              >
                {story.response}
              </Text>
            </View>
          )}
          {story.quality && (
            <View className="w-screen h-screen fle items-center justify-center p-6">
              <Text
                allowFontScaling={false}
                className="text-[16px] text-dark w-full text-left font-jokkerl"
              >
                {t("story-dashes.quality")}
              </Text>
              <Text
                allowFontScaling={false}
                className="text-[36px] text-dark w-full text-left font-jokkerl"
              >
                {story.quality}
              </Text>
            </View>
          )}
        </View>
      ))}
      <Pressable
        className="w-[30%] h-screen absolute left-0 top-0 z-40"
        onPress={goToPrevStory}
        onLongPress={handlePressIn}
        onPressOut={handlePressOut}
        delayLongPress={150}
      />
      <Pressable
        className="w-[30%] h-screen absolute right-0 top-0 z-40"
        onPress={goToNextStory}
        onLongPress={handlePressIn}
        onPressOut={handlePressOut}
        delayLongPress={150}
      />
      <View className="absolute left-0 top-0 w-screen flex items-center justify-center">
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(0,0,0,0.6)", "transparent"]}
          className="w-screen h-[150px] absolute top-0 left-0 "
        />
        <View className="gap-1 flex-row top-[75px] h-[3px] w-full px-2">
          {storyElements.map((story, index) => (
            <View
              key={`${index}`}
              className="flex-1 h-[3px] bg-white/50 rounded-xl overflow-hidden"
            >
              <Animated.View
                className="h-[3px] bg-white"
                style={[
                  index === storyIndex && indicatorAnimatedStyle,
                  index > storyIndex && { width: 0 },
                  index < storyIndex && { width: "100%" },
                ]}
              />
            </View>
          ))}
        </View>
      </View>
      <View className="absolute left-0 top-[90px] w-screen flex flex-row items-center justify-between px-3 z-50">
        <View className="flex flex-row items-center justify-start">
          {userImages.length > 0 ? (
            <Image
              source={{ uri: userImages[0].url }} // Corrected to use story.url instead of storyElements[0].url
              className="w-[30px] h-[30px] rounded-full overflow-hidden"
            />
          ) : (
            <Skeleton
              height={30}
              width={30}
              radius={10}
              {...SkeletonCommonProps}
            />
          )}
          <Text
            allowFontScaling={false}
            className="text-white  font-jokkerl text-[16px] pl-3"
          >
            {userData.firstName}
          </Text>
        </View>
        <View className="flex flex-row items-center justify-end ">
          <Pressable
            onPress={handleOnClosePress}
            className="w-[30px] h-[30px] flex items-center justify-center bg-black/30 rounded-full"
          >
            <IconX width={20} height={20} color="#FFF" strokeWidth={1} />
          </Pressable>
        </View>
      </View>
      {/* Spark modal */}
      <Animated.View
        className="w-screen absolute z-50"
        style={{ bottom: sparkBottom, height }}
      >
        <Pressable
          onPress={hideSparkModal}
          className="w-[35px] h-[35px] absolute top-16 right-6 z-10 rounded-full bg-white/50 flex items-center justify-center"
        >
          <IconX width={30} height={30} color="#000" strokeWidth={1} />
        </Pressable>
        <View className="w-screen h-full absolute top-0 left-0">
          {storyElements.length > 0 ? (
            <Image
              source={{ uri: storyElements[0].url }}
              className="w-screen h-screen absolute top-0 left-0"
            />
          ) : null}
          <View className="w-full h-[96px] flex items-center justify-center absolute bottom-40 left-0 z-10">
            <Image
              source={require("@assets/icons/spark-sent.png")}
              className="w-[100px] h-[100px]"
            />
          </View>
          <Text
            allowFontScaling={false}
            className="w-full font-jokkerl text-center text-[16px] absolute bottom-32 left-0 text-light z-10"
          >
            {t("story-dashes.sent-spark")} {userData.firstName}
          </Text>
          <LinearGradient
            // Background Linear Gradient
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]}
            className="w-full h-[50%] absolute left-0 bottom-0 z-0"
          />
        </View>
      </Animated.View>
      {/* End Spark modal */}
      {/* Connection modal */}
      <Animated.View
        className="w-screen bg-category-card absolute z-50"
        style={{ bottom: connectionBottom, height }}
      >
        <Pressable
          onPress={hideConnectionModal}
          className="w-[35px] h-[35px] absolute top-16 right-6 z-10 rounded-full bg-white/50 flex items-center justify-center"
        >
          <IconX width={30} height={30} color="#000" strokeWidth={1} />
        </Pressable>
        <View className="w-screen h-full absolute top-0 left-0">
          {storyElements.length > 0 ? (
            <View className="w-screen absolute top-[250px] flex items-center justify-center">
              <View className="h-[200px] w-[200px] rounded-full overflow-hidden absolute left-[24px] top-0">
                <Image
                  source={{ uri: storyElements[0].url }}
                  className="w-full h-full absolute top-0 left-0"
                />
              </View>
              <View className="h-[200px] w-[200px] rounded-full overflow-hidden absolute top-[60px] right-[24px] border-2 border-solid border-white">
                {userMainImage ? (
                  <Image
                    source={{ uri: String(userMainImage) }}
                    className="w-full h-full absolute top-0 left-0"
                  />
                ) : null}
              </View>
              {/* <View className="w-full flex items-center justify-center mt-[60px] z-10">
                <Image
                  source={require("@assets/images/spark-ring.png")}
                  className="w-[150px] h-[150px]"
                />
              </View> */}
            </View>
          ) : null}
          <View className="absolute top-32 left-0 text-light z-10 px-6">
            <Text
              allowFontScaling={false}
              className="w-full font-jokkerl text-[40px]"
            >
              {t("story-dashes.its-connection")}
            </Text>
            <Text
              allowFontScaling={false}
              className="w-full font-jokkerl text-[16px]"
            >
              Start the conversation and say hi
            </Text>
          </View>
          <View className="absolute left-0 bottom-0 w-screen flex items-start justify-start h-56">
            <DynamicButton
              onPress={() =>
                navigation.navigate("Chat", { screen: "ChatScreen" })
              }
              type={"full-transparent"}
              label={t("story-dashes.start-the-conversation")}
              size="large"
              rounded={"2xl"}
              position="none"
              textStyles="text-base"
              textColor="dark"
              customStyles="mt-8 !text-dark"
            />
            <DynamicButton
              onPress={() => hideConnectionModal()}
              type="full-transparent-borderless"
              label={t("story-dashes.maybe-later")}
              size="large"
              rounded={"2xl"}
              position="none"
              textStyles="text-base"
              textColor="dark"
              customStyles="mt-2 !text-dark"
            />
          </View>
          {/* <LinearGradient
            // Background Linear Gradient
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]}
            className="w-full h-[40%] absolute left-0 bottom-0 z-0"
          /> */}
        </View>
      </Animated.View>
      {/* End Connection modal */}
    </View>
  );
};

export default StoryDashes;
