import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  View,
  Text,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";
import Dots from "@components/Dots";
import PracticeStatus from "@components/PracticeStatus";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useScrollViewOffset,
  useAnimatedRef,
} from "react-native-reanimated";
import dayjs from "dayjs";

// Localization
import { useTranslation } from "react-i18next";

// Amplify Graph Queries
import { getUrl } from "aws-amplify/storage";

// Utils
import { sendSpark } from "@utils/user";
import { getConnectionReflectionData } from "@utils/reflections";
// Redux Root State
interface RootState {
  auth: {
    user: string;
  };
  reflections: {
    totalReflectionDaysCount: number;
  };
}

const { height, width } = Dimensions.get("window");

interface Props {
  closeProfile: () => void;
  connectionData: any;
  navigation?: NavigationProp<any>;
}

export default function ConnectionProfileScreen({
  connectionData,
  closeProfile,
  navigation,
}: Props) {
  // Mount Localization
  const { t } = useTranslation();

  const [
    currentCategoryReflectionDaysCount,
    setCurrentCategoryReflectionDaysCount,
  ] = useState<number>(0);
  const [currentReflectionCategoryName, setCurrentReflectionCategoryName] =
    useState<string>("");
  const [userReflectionCardImageUrl, setUserReflectionCardImageUrl] =
    useState<string>("");
  const [isLoadingDayImage, setIsLoadingDayImage] = useState(true);

  // Get user ID
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const user = JSON.parse(currentUser);

  const IMG_HEIGHT = height * 0.6;

  // Constants
  const [userImages, setUserImages] = useState<
    {
      url: string;
    }[]
  >([]);
  const [isSendSparkModalVisible, setIsSendSparkModalVisible] =
    useState<boolean>(false);
  const [dotIndex, setDotIndex] = useState<number>(0);
  const [prompts, setPrompts] = useState<{ name: string; response: string }[]>(
    []
  );

  const toggleSendSparkModal = () => {
    setIsSendSparkModalVisible(!isSendSparkModalVisible);
  };

  const updateDots = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const x = event.nativeEvent.contentOffset.x;
    const index = Math.round(x / width);
    setDotIndex(index);
  };

  const loadProfile = async () => {
    const images = [];

    await Promise.all(
      connectionData.photos.items
        .sort((a, b) => a.photo.sortOrder - b.photo.sortOrder)
        .map(async (photo, index) => {
          const image1URI = await getUrl({
            path: `public/${photo.photo.name}`,
          });
          images.push({
            url: String(image1URI.url),
          });
        })
    );

    setUserImages(images);
  };

  const getUserMetadata = () => {
    const age = dayjs().diff(connectionData.birthdate, "year");
    const metadata = [];
    metadata.push(age);
    if (connectionData.gender?.length) metadata.push(connectionData.gender);
    if (connectionData.sexualOrientation)
      metadata.push(connectionData.sexualOrientation);
    if (connectionData.location) {
      const locationWithoutZip = connectionData.location
      .split(",")
      .slice(0, -1) // Remove the last element (country)
      .join(", ")
      .replace(/\s*\b\d{5}(?:-\d{4})?\b|\s*\b[A-Z]\d[A-Z] ?\d[A-Z]\d\b/g, "")
      .trim();
      metadata.push(locationWithoutZip);
    }
    return metadata.join(" / ");
  };

  useEffect(() => {
    loadProfile();
    setPrompts(JSON.parse(connectionData.prompts));
  }, [connectionData]);

  const handleSendSpark = async () => {
    const spark = await sendSpark(currentUser, connectionData);
    if (!spark.result) {
      toggleSendSparkModal();
    }

    if (spark.result) {
    }
  };

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  // @ts-ignore
  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  useEffect(() => {
    const connectionReflectionData = async (connectionData) => {
      try {
        const connectionReflectionData: any = await getConnectionReflectionData(
          connectionData
        );
        setCurrentCategoryReflectionDaysCount(
          connectionReflectionData.currentCategoryReflectionDaysCount
        );
        setCurrentReflectionCategoryName(
          connectionReflectionData.currentReflectionCategoryName
        );
        setUserReflectionCardImageUrl(
          connectionReflectionData.userReflectionCardImageUrl
        );
        setIsLoadingDayImage(false);
      } catch (error) {
        console.log("Error", error);
      }
    };
    connectionReflectionData(connectionData);
  }, [connectionData]);

  return (
    <Animated.ScrollView
      ref={scrollRef}
      scrollEventThrottle={16}
      className="w-screen h-screen bg-gradient-start"
    >
      <Animated.ScrollView
        pagingEnabled
        horizontal
        className="w-full relative"
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={updateDots}
        style={[
          { width: width, height: IMG_HEIGHT },
          imageAnimatedStyle as any,
        ]}
      >
        {userImages?.map((userImage, index) => {
          return (
            <Animated.Image
              key={index}
              source={{ uri: userImage.url }}
              style={{ width: width, height: IMG_HEIGHT }}
            />
          );
        })}
      </Animated.ScrollView>
      <View className="w-full flex items-center justify-center h-12 -mt-12 relative z-10">
        <Dots
          dots={userImages.length}
          dotIndex={dotIndex}
          dotColor="bg-white"
          dotOpacity="opacity-40"
        />
      </View>
      {/* {userImages[0]?.url && (
        <Animated.Image
          source={{ uri: userImages[0].url }}
          style={[
            { width: width, height: IMG_HEIGHT },
            imageAnimatedStyle as any,
          ]}
        />
      )} */}
      <View className="w-full bg-gradient-start">
        {connectionData.firstName && (
          <View className="w-full p-6">
            <View className="w-full flex flex-row items-center justify-between">
              <Text
                allowFontScaling={false}
                className="text-[36px] font-jokkerl  -tracking-widest"
              >
                {connectionData.firstName} {connectionData.lastName.charAt(0)}
              </Text>
            </View>
            <Text
              allowFontScaling={false}
              className="w-full text-[16px] font-jokkerl  mt-3"
            >
              {getUserMetadata()}
            </Text>
            {connectionData.bio && connectionData.id === user.id && (
              <View className="w-full bg-category-card p-4 rounded-xl mt-4">
                <Pressable
                  onPress={() =>
                    navigation.navigate("MyProfileScreen", {
                      isOnboarding: false,
                    })
                  }
                >
                  <Text
                    allowFontScaling={false}
                    className="w-full text-[18px] font-jokkerl mb-2"
                  >
                    {t("connection-profile-screen.about")}{" "}
                    {connectionData.firstName}
                  </Text>
                  <Text
                    allowFontScaling={false}
                    className="w-full text-[16px] font-jokkerl "
                  >
                    {connectionData.bio}
                  </Text>
                </Pressable>
              </View>
            )}
            {connectionData.bio && connectionData.id !== user.id && (
              <View className="w-full bg-category-card p-4 rounded-xl mt-4">
                <Text
                  allowFontScaling={false}
                  className="w-full text-[18px] font-jokkerl mb-2"
                >
                  {t("connection-profile-screen.about")}{" "}
                  {connectionData.firstName}
                </Text>
                <Text
                  allowFontScaling={false}
                  className="w-full text-[16px] font-jokkerl "
                >
                  {connectionData.bio}
                </Text>
              </View>
            )}
            {currentCategoryReflectionDaysCount > 0 ? (
              <View className="w-full h-[160px] flex items-start justify-start mt-4">
                <PracticeStatus
                  reflectionsDaysCount={currentCategoryReflectionDaysCount}
                  currentReflectionCategoryName={currentReflectionCategoryName}
                  userReflectionCardImageUrl={userReflectionCardImageUrl}
                  isLoading={isLoadingDayImage}
                />
              </View>
            ) : null}
          </View>
        )}
        <View className="w-full px-6 py-4 flex flex-row items-center justify-between">
          <Text allowFontScaling={false} className="text-[16px] font-jokkerl">
            {t("connection-profile-screen.more-about-me")}
          </Text>
          {connectionData.id === user.id ? (
            <Pressable onPress={() => navigation.navigate("AboutYouScreen")}>
              <Text
                allowFontScaling={false}
                className="text-[16px] font-jokkerl underline"
              >
                {t("general.edit")}
              </Text>
            </Pressable>
          ) : null}
        </View>
        <View className="w-full px-6">
          {connectionData.gender &&
          connectionData.isSexualOrientationVisible ? (
            <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
              <Text className="text-[18px] font-jokkerr w-full w-full">
                How do you prefer to identify?
              </Text>
              <Text className="text-[16px] font-jokkerl mt-2 w-full w-full">
                {connectionData?.gender}{" "}
                {connectionData?.sexualOrientation
                  ? `/ ${user.sexualOrientation}`
                  : ""}
              </Text>
            </View>
          ) : null}

          {connectionData.genderPreferences &&
            connectionData.areGenderPreferencesVisible && (
              <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
                <Text className="text-[18px] font-jokkerr w-full">
                  Who are you open to dating?
                </Text>
                <Text className="text-[16px] font-jokkerl mt-2 w-full">
                  {connectionData?.genderPreferences?.replaceAll(",", ", ")}
                </Text>
              </View>
            )}

          {connectionData.ethnicity.items.length > 0 &&
            connectionData.isEthnicityVisible && (
              <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
                <Text className="text-[18px] font-jokkerr w-full w-full">
                  Which ethnicity best describes you?
                </Text>
                <Text className="text-[16px] font-jokkerl mt-2 w-full w-full">
                  {connectionData?.ethnicity.items
                    .map((item) => item.ethnicity.name)
                    .join(", ")}
                </Text>
              </View>
            )}

          {connectionData?.languages.items.length > 0 &&
            connectionData.areLanguagesVisible && (
              <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
                <Text className="text-[18px] font-jokkerr w-full">
                  What languages do you speak?
                </Text>
                <Text className="text-[16px] font-jokkerl mt-2 w-full">
                  {connectionData?.languages.items
                    .map((item) => item.language.name)
                    .join(", ")}
                </Text>
              </View>
            )}

          {connectionData?.starSign?.length > 0 &&
            connectionData.isStarSignVisible && (
              <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
                <Text className="text-[18px] font-jokkerr w-full">
                  What's your star sign?
                </Text>
                <Text className="text-[16px] font-jokkerl mt-2 w-full">
                  {connectionData?.starSign}
                </Text>
              </View>
            )}
          {connectionData?.location?.length > 0 &&
            connectionData.isLocationVisible && (
              <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
                <Text className="text-[18px] font-jokkerr w-full">
                  Where are you located?
                </Text>
                <Text className="text-[16px] font-jokkerl mt-2 w-full">
                  {connectionData.location}
                </Text>
              </View>
            )}

          {connectionData?.height !== 0 && connectionData.isHeightVisible && (
            <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
              <Text className="text-[18px] font-jokkerr w-full">
                How tall are you?
              </Text>
              <Text className="text-[16px] font-jokkerl mt-2 w-full">
                {connectionData?.height !== 0
                  ? `${Math.floor(user.height / 30.48)}'${Math.round(
                      (connectionData?.height / 2.54) % 12
                    )}" / ${connectionData?.height} cm`
                  : ""}
              </Text>
            </View>
          )}

          {connectionData?.wantChildrenStatus &&
            connectionData.isWantChildrenStatusVisible && (
              <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
                <Text className="text-[18px] font-jokkerr w-full">
                  Do you want kids?
                </Text>
                <Text className="text-[16px] font-jokkerl mt-2 w-full">
                  {connectionData?.wantChildrenStatus}
                </Text>
              </View>
            )}

          {connectionData?.religion?.name?.length > 0 &&
            connectionData.isReligionVisible && (
              <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
                <Text className="text-[18px] font-jokkerr w-full">
                  What are your religious beliefs?
                </Text>
                <Text className="text-[16px] font-jokkerl mt-2 w-full">
                  {connectionData?.religion?.name}
                </Text>
              </View>
            )}

          {connectionData?.hometown && connectionData.isHometownVisible && (
            <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
              <Text className="text-[18px] font-jokkerr w-full">
                Where did you grow up?
              </Text>
              <Text className="text-[16px] font-jokkerl mt-2 w-full">
                {connectionData?.hometown}
              </Text>
            </View>
          )}

          {connectionData?.school && connectionData.isSchoolVisbile && (
            <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
              <Text className="text-[18px] font-jokkerr w-full">
                Where did you go to school?
              </Text>
              <Text className="text-[16px] font-jokkerl mt-2 w-full">
                {connectionData?.school}
              </Text>
            </View>
          )}

          {connectionData?.educationLevel &&
            connectionData.isEducationLevelVisible && (
              <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
                <Text className="text-[18px] font-jokkerr w-full">
                  What's the highest education level you've attained?
                </Text>
                <Text className="text-[16px] font-jokkerl mt-2 w-full">
                  {connectionData?.educationLevel}
                </Text>
              </View>
            )}

          {connectionData?.tobaccoPreference &&
            connectionData.isTobaccoPreferenceVisible && (
              <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
                <Text className="text-[18px] font-jokkerr w-full">
                  Do you smoke tobacco?
                </Text>
                <Text className="text-[16px] font-jokkerl mt-2 w-full">
                  {connectionData?.tobaccoPreference}
                </Text>
              </View>
            )}

          {connectionData?.drugPreference &&
            connectionData.isDrugPreferenceVisible && (
              <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
                <Text className="text-[18px] font-jokkerr w-full">
                  Do you do drugs?
                </Text>
                <Text className="text-[16px] font-jokkerl mt-2 w-full">
                  {connectionData?.drugPreference}
                </Text>
              </View>
            )}

          {connectionData?.drinkPreference &&
            connectionData.isDrinkPreferenceVisible && (
              <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
                <Text className="text-[18px] font-jokkerr w-full">
                  Do you drink alcohol?
                </Text>
                <Text className="text-[16px] font-jokkerl mt-2 w-full">
                  {connectionData?.drinkPreference}
                </Text>
              </View>
            )}
          <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20" />
          {prompts?.map((prompt, index) => {
            return prompt.name !== "" ? (
              <View
                className={`w-screen pb-14 pt-12 -mt-6 flex items-center justify-between -ml-6 ${
                  index % 2 !== 0 ? "bg-dark" : ""
                }`}
                key={index}
              >
                <View className="w-full flex flex-row items-center justify-between px-6">
                  <Text
                    className={`text-[16px] font-jokkerl ${
                      index % 2 !== 0 ? "text-light" : ""
                    }`}
                  >
                    {prompt.name}
                  </Text>
                  {connectionData.id === user.id && index === 0 ? (
                    <Pressable
                      onPress={() =>
                        navigation.navigate("MyProfileScreen", {
                          isOnboarding: false,
                        })
                      }
                    >
                      <Text
                        allowFontScaling={false}
                        className="text-[16px] font-jokkerl underline"
                      >
                        {t("general.edit")}
                      </Text>
                    </Pressable>
                  ) : null}
                </View>
                <View className="w-full px-6">
                  <Text
                    className={`text-[30px] font-jokkerl mt-4 ${
                      index % 2 !== 0 ? "text-light" : ""
                    }`}
                  >
                    "{prompt.response}"
                  </Text>
                </View>
              </View>
            ) : null;
          })}
        </View>
        {/* {connectionData.value && (
          <View className="w-full px-6 py-4 relative h-[500px] flex items-center justify-center">
            <View className="w-screen h-full flex items-center justify-center absolute top-0 left-0">
              <BigCircle width={350} height={350} />
            </View>
            <Text
              allowFontScaling={false}
              className="w-full text-[18px] font-jokkerl mb-2 absolute top-5 left-6"
            >
              {t("connection-profile-screen.what-i-value")}
            </Text>
            <Text
              allowFontScaling={false}
              className="w-full text-[70px] font-jokkerl -tracking-widest text-center"
            >
              {connectionData.value}
            </Text>
          </View>
        )}
        {connectionData.mentalHealth && (
          <View className="w-full px-6 py-4">
            <View className="border-b border-solid border-dark/20 pb-4">
              <Text
                allowFontScaling={false}
                className="w-full text-[18px] font-jokkerl mb-2"
              >
                {t("connection-profile-screen.mental")}
              </Text>
              <Text
                allowFontScaling={false}
                className="w-full text-[80px] font-jokkerl -tracking-widest text-center"
              >
                {connectionData.mentalHealth}
              </Text>
            </View>
          </View>
        )}
        {connectionData.quality && (
          <View className="w-full px-6 py-4">
            <View className="border-b border-solid border-dark/20 pb-4">
              <Text
                allowFontScaling={false}
                className="w-full text-[18px] font-jokkerl mb-2"
              >
                {t("connection-profile-screen.qualities")}
              </Text>
              <Text
                allowFontScaling={false}
                className="w-full text-[80px] font-jokkerl -tracking-widest text-center"
              >
                {connectionData.quality}
              </Text>
            </View>
          </View>
        )} */}
      </View>
    </Animated.ScrollView>
  );
}
