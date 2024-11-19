import { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import {
  NavigationProp,
  StackActions,
  RouteProp,
} from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";

// Redux
import { useSelector } from "react-redux";

// Utils
import {
  getReflectionsDaysCount,
  getDayImage,
  getReflectionDayNumber,
} from "@utils/reflections";
import { getImageURL } from "@utils/images";

// Skeleton
import { Skeleton } from "moti/skeleton";

// Localization
import { useTranslation } from "react-i18next";
const SkeletonCommonProps = {
  colorMode: "light",
  transition: {
    type: "timing",
    duration: 1500,
  },
  backgroundColor: "#D4D4D4",
} as const;

// Define the props type for your navigation stack
type Props = {
  route: RouteProp<any>;
  navigation: NavigationProp<any>;
};

// Define the state structure
interface RootState {
  auth: {
    user: string;
  };
  reflections: {
    reflectionQuestionsGradientValues: string;
    reflectionQuestionBackgroundImage: string;
    currentReflectionCategoryName: string | null;
  };
}

export default function UserPhoneNumberScreen({ route, navigation }: Props) {
  // Mount Localization
  const { t } = useTranslation();

  const { userName } = route.params;

  // Redux state - Get userData
  const user = JSON.parse(useSelector((state: RootState) => state.auth.user));
  // Get reflection question values
  const reflectionQuestionsGradientValues = useSelector(
    (state: RootState) => state.reflections.reflectionQuestionsGradientValues,
  ).split(",");
  const currentReflectionCategoryName = useSelector(
    (state: RootState) => state.reflections.currentReflectionCategoryName,
  );

  // Constants
  const [dayImageSrc, setDayImageSrc] = useState<string>("");
  const [reflectionsDaysCount, setReflectionsDaysCount] = useState<number>(0);

  const goToYouPage = async () => {
    const popAction = StackActions.pop(4);
    navigation.dispatch(popAction);
  };

  useEffect(() => {
    const fetchUserReflectionsDaysCount = async () => {
      const daysCount = await getReflectionsDaysCount(user?.id);
      const modDaysValue = getReflectionDayNumber(daysCount);
      setReflectionsDaysCount(modDaysValue);
      const dayImage = await getDayImage(
        daysCount,
        currentReflectionCategoryName,
      );
      const dayImageURL = await getImageURL(dayImage);
      setDayImageSrc(dayImageURL);
    };
    fetchUserReflectionsDaysCount();
  }, []);

  return (
    <SafeAreaComponent
      testID="ReflectionStats"
      relative
      gradientColorStart={reflectionQuestionsGradientValues[0]}
      gradientColorEnd={reflectionQuestionsGradientValues[1]}
      gradientDirection="ttb"
    >
      <Text
        allowFontScaling={false}
        className="text-[40px] font-regular text-light font-jokkerl w-full"
      >
        Your Daily Reflection is complete
      </Text>
      <Text
        allowFontScaling={false}
        className="text-[16px] font-regular font-jokkerl w-full mt-4 text-light"
      >
        Keep up the good work, {userName}
      </Text>
      {dayImageSrc !== "" ? (
        <View className="p-6 bg-card w-full rounded-[8px] relative overflow-hidden flex flex-row items-center justify-between mt-8 h-[160px]">
          <View>
            <Text
              allowFontScaling={false}
              className="font-jokkerl text-[32px] text-dark mb-1"
            >
              {reflectionsDaysCount}/10{" "}
              {reflectionsDaysCount > 1
                ? t("reflection-screen.days")
                : t("reflection-screen.day")}
            </Text>
            <Text
              allowFontScaling={false}
              className="font-jokkerl text-[16px] text-dark"
            >
              {t("reflection-screen.progress")}
            </Text>
          </View>

          <Image
            source={{ uri: dayImageSrc }}
            className={`object-fit w-[140px] h-[130px]`}
          />
        </View>
      ) : (
        <View className="p-6 bg-card w-full rounded-[8px] relative overflow-hidden flex flex-row items-center justify-between mt-8 h-[160px]">
          <View className="w-full relative z-10">
            <Skeleton
              height={35}
              width={"45%"}
              radius={5}
              {...SkeletonCommonProps}
            />
            <View className="w-full mt-[7px]">
              <Skeleton
                height={20}
                width={"28%"}
                radius={5}
                {...SkeletonCommonProps}
              />
            </View>
          </View>
          <View className="w-full h-full absolute top-0 left-0 z-0 opacity-40">
            <Skeleton
              height={160}
              width={"130%"}
              radius={5}
              {...SkeletonCommonProps}
            />
          </View>
        </View>
      )}
      <View className="absolute w-screen px-6 bottom-12 left-0 flex flex-row items-center justify-end">
        <DynamicButton
          onPress={() => goToYouPage()}
          type={"icon"}
          size="large"
          iconPosition="right"
          icon={"chevron-right"}
          iconSize={30}
          showBgImage
          bgImage="drawn-light"
          iconColor="white"
          rounded="full"
          position="none"
          textStyles="text-base"
        />
      </View>
    </SafeAreaComponent>
  );
}
