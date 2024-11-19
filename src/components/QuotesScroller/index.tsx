import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  Share,
} from "react-native";
import Animated from "react-native-reanimated";
import Dots from "@components/Dots";

// Amplify
import { CreateQuoteInput } from "@src/api/index";

// Utils
import { getQuotes } from "@utils/quotes";

export default function QuotesScroller() {
  const [dotIndex, setDotIndex] = useState<number>(0);
  const [quotes, setQuotes] = useState<CreateQuoteInput[]>([]);

  const updateDots = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const x = event.nativeEvent.contentOffset.x;
    const index = Math.round(x / width);
    setDotIndex(index);
  };

  const { width } = Dimensions.get("window");

  useEffect(() => {
    const listQuotes = async () => {
      const q = await getQuotes();
      setQuotes(q);
    };
    listQuotes();
  }, []);

  const shareQuote = async () => {
    try {
      const result = await Share.share({
        message: `${quotes[dotIndex].text} -${quotes[dotIndex].author} / I found this on the Ready App - a space for deeper connections and personal growth.`,
        url: "https://readyplatform.co/",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log("Share error", error);
    }
  };

  return (
    <View className="w-screen -ml-6 mb-8 ">
      <Animated.ScrollView
        pagingEnabled
        horizontal
        className="w-full h-[180px]"
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={updateDots}
      >
        {quotes.map((quote, index) => (
          <View
            key={index}
            className="w-screen h-full flex items-center justify-start p-6"
          >
            <Text
              allowFontScaling={false}
              className="text-[24px] font-jokkerl  -tracking-widest w-full"
            >
              {quote.text}
            </Text>
            <Text
              allowFontScaling={false}
              className="text-[16px] font-jokkerl  -tracking-widest w-full mt-4"
            >
              - {quote.author}
            </Text>
          </View>
        ))}
      </Animated.ScrollView>
      <Dots dots={quotes.length} dotIndex={dotIndex} />
      <View className="w-full px-6 mt-4 flex items-end justify-center">
        <Pressable onPress={() => shareQuote()}>
          <Text
            allowFontScaling={false}
            className="w-full text-right underline font-jokkerl"
          >
            Share This
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
