import { useEffect } from "react";
import { View, Text, Pressable, Share } from "react-native";

// Localization
import { useTranslation } from "react-i18next";

// Segment
import { useAnalytics } from "@segment/analytics-react-native";

// Redux
import { AppDispatch } from "@store/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchReflectionDayQuote } from "@store/reflections/reflectionsSlice";

// Redux Root State
interface RootState {
  reflections: {
    currentQuote: string;
    currentQuoteAuthor: string;
  };
}

export default function DailyWisdom() {
  // Mount localization
  const { t } = useTranslation();
  // Mount Redux dispatch
  const dispatch: AppDispatch = useDispatch();
  // Segment
  const { track } = useAnalytics();
  // Get current quote
  const currentQuote = useSelector(
    (state: RootState) => state.reflections.currentQuote,
  );
  // Get current quote author
  const currentQuoteAuthor = useSelector(
    (state: RootState) => state.reflections.currentQuoteAuthor,
  );

  useEffect(() => {
    if (!currentQuote) {
      console.log("currentQuote", currentQuote);
      dispatch(fetchReflectionDayQuote());
    }
  }, []);

  const shareQuote = async () => {
    try {
      const result = await Share.share({
        message: `${currentQuote}${
          currentQuoteAuthor ? ` by ${currentQuoteAuthor}` : ""
        } / I found this on the Ready App - a space for deeper connections and personal growth.`,
        url: "https://readyplatform.co/",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          track("Daily wisdom shared with activityType");
        } else {
          // shared
          track("Daily wisdom shared");
        }
      } else if (result.action === Share.dismissedAction) {
        track("Daily wisdom share cancelled/dismissed");
      }
    } catch (error) {
      console.log("Share error", error);
    }
  };

  return (
    <View className="w-full">
      {currentQuote ? (
        <>
          <Text className="font-jokkerl text-[16px]">
            {t("daily-wisdom-component.title")}
          </Text>
          <Text className="font-jokkerl text-[30px] mt-6">{currentQuote}</Text>
          {currentQuoteAuthor ? (
            <Text className="font-jokkerl text-[16px] mt-6">
              - {currentQuoteAuthor}
            </Text>
          ) : null}
          <Pressable className="mt-6" onPress={() => shareQuote()}>
            <Text
              allowFontScaling={false}
              className="w-full text-right underline font-jokkerl"
            >
              {t("daily-wisdom-component.share")}
            </Text>
          </Pressable>
        </>
      ) : null}
    </View>
  );
}
