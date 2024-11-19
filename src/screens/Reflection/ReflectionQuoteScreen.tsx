import { useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";

// Segment
import { useAnalytics } from "@segment/analytics-react-native";

// Redux
import { useSelector } from "react-redux";

// Localization
import { useTranslation } from "react-i18next";

// Define the props type for your navigation stack
type Props = {
  route: RouteProp<any>;
  navigation: NavigationProp<any>;
};

// Define the state structure
interface RootState {
  reflections: {
    reflectionQuestionsGradientValues: string;
    reflectionQuestionBackgroundImage: string;
  };
}

export default function UserPhoneNumberScreen({ route, navigation }: Props) {
  // Translation
  const { t } = useTranslation();
  // Segment
  const { track } = useAnalytics();

  // Route params
  const {
    quote,
    author,
    reflectionsCount,
    daysGettingReady,
    userName,
    contentCategoryName,
    questionTitle,
  } = route.params;

  // Get reflection question values
  const reflectionQuestionsGradientValues = useSelector(
    (state: RootState) => state.reflections.reflectionQuestionsGradientValues,
  ).split(",");

  const goToReflectionStatsScreen = () => {
    navigation.navigate("ReflectionStatsScreen", {
      reflectionsCount,
      daysGettingReady,
      userName,
    });
  };

  useEffect(() => {
    track("Reflection complete", {
      reflectionDay: daysGettingReady,
    });
  }, []);

  return (
    <SafeAreaComponent
      testID="ReflectionQuote"
      relative
      gradientColorStart={reflectionQuestionsGradientValues[0]}
      gradientColorEnd={reflectionQuestionsGradientValues[1]}
      gradientDirection="ttb"
    >
      <View className="h-full w-full bottom-12 left-0 flex flex-col items-center justify-start">
        <Text
          allowFontScaling={false}
          className="text-[19px] text-light mt-20 font-jokkerl w-full -tracking-widest"
        >
          {contentCategoryName} — {questionTitle}
        </Text>
        <Text
          allowFontScaling={false}
          className="text-[20px] font-regular leading-[25px] text-light mt-14 font-jokkerl w-full -tracking-widest"
        >
          {quote}
        </Text>
        {author !== "" && (
          <Text
            allowFontScaling={false}
            className="text-[20px] font-regular text-light mt-6 font-jokkerl w-full -tracking-widest"
          >
            - {author}
          </Text>
        )}
      </View>
      <View className="absolute w-screen px-6 bottom-12 left-0 flex flex-row items-center justify-end">
        <DynamicButton
          onPress={() => goToReflectionStatsScreen()}
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
