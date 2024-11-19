import { useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";

// Segment
import { useAnalytics } from "@segment/analytics-react-native";

// Localization
import { useTranslation } from "react-i18next";

// Define the props type for your navigation stack
type Props = {
  route: RouteProp<any>;
  navigation: NavigationProp<any>;
};

export default function FirstReflectionQuoteScreen({
  route,
  navigation,
}: Props) {
  const { t } = useTranslation();
  // Segment
  const { track } = useAnalytics();

  const { quote, author, contentCategoryName, questionTitle } = route.params;

  const goToReflectionStatsScreen = () => {
    navigation.navigate("FirstReflectionLastScreen");
  };

  useEffect(() => {
    track("First reflection complete");
  }, []);

  return (
    <SafeAreaComponent
      testID="FirstReflectionQuote"
      gradientColorStart="#E9848B"
      gradientColorEnd="#EF979D"
      relative
    >
      <View className="h-full w-full bottom-12 left-0 flex flex-col items-center justify-start">
        <Text
          allowFontScaling={false}
          className="text-[18px]  text-light text-left mt-20 font-jokkerl w-full -tracking-wide"
        >
          {contentCategoryName} — {questionTitle}
        </Text>
        <Text
          allowFontScaling={false}
          className="text-[20px] font-regular leading-[25px] text-light text-left mt-6 font-jokkerl w-full -tracking-widest"
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
