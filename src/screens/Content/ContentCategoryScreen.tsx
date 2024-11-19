import DailyReflectionsScroller from "@components/DailyReflectionsScroller";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";

// Segment
import { useAnalytics } from "@segment/analytics-react-native";

import Animated, {
  AnimatedStyle,
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

// Utils
import { getImageURL } from "@utils/images";

// Utils
import ImageCache from "@src/components/ImageCache";
import { getDayImage } from "@utils/reflections";

// Define the props type for your navigation stack
type Props = {
  route: RouteProp<any>;
  navigation: NavigationProp<any>;
};

export default function ContentCategoryScreen({ route, navigation }: Props) {
  // Segment
  const { track } = useAnalytics();
  // Screen Params
  const { category, userId, categoryImage, totalDaysCount } = route.params;

  // Constants
  const [gradient, setGradient] = useState<string[]>([]);
  const [cardDotImage, setCardDotImage] = useState<string>("");
  const [dayImageSrc, setDayImageSrc] = useState<string>("");
  const IMG_HEIGHT = 150;

  useEffect(() => {
    setCardDotImage("");
    const fetchContentData = async () => {
      const parsedGradient = category.contentPageGradientValues.split(",");
      setGradient(parsedGradient);
      const cardDotImageURL = await getImageURL(
        category.progressionCardDotImage,
      );
      setCardDotImage(cardDotImageURL);

      if (
        totalDaysCount >= category.sortOrder - 10 &&
        totalDaysCount <= category.sortOrder
      ) {
        console.log("Category is current");
        const dayImage = await getDayImage(totalDaysCount, category.name);
        const dayImageURL = await getImageURL(dayImage);
        setDayImageSrc(dayImageURL);
      }

      if (totalDaysCount > category.sortOrder) {
        console.log("Category is not current");
        const dayImage = await getDayImage(category.sortOrder, category.name);
        const dayImageURL = await getImageURL(dayImage);
        setDayImageSrc(dayImageURL);
        return;
      }
    };
    fetchContentData();
  }, []);

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  // @ts-ignore
  const imageAnimatedStyle: AnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75],
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [2, 1, 1],
          ),
        },
      ],
    };
  });

  useEffect(() => {
    track("Category screen viewed", {
      categoryName: category.name,
    });
  }, []);

  return (
    <View testID="screen.Content" className="w-screen h-screen relative">
      {category.gradientValues ? (
        <View className="absolute top-0 w-screen h-screen z-0">
          <LinearGradient
            colors={gradient}
            className="w-full h-full absolute left-0 bottom-0 rounded-b-3xl"
          />
        </View>
      ) : null}
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        className="w-screen h-screen"
      >
        <ImageCache
          uri={categoryImage}
          isAnimated
          imageAnimatedStyle={imageAnimatedStyle}
          className="w-screen h-[150px] -z-10"
          skeletonProps={{ radius: 0 }}
        />
        <View className="w-full px-6 relative z-10 bg-gradient-start">
          <Text
            allowFontScaling={false}
            className="text-dark text-[32px] font-jokkerl mb-6 mt-16 w-full"
          >
            {category.name}
          </Text>
          <Text
            allowFontScaling={false}
            className="text-dark mb-2 font-jokkerl leading-5 w-full"
          >
            {category.description}
          </Text>
          <DailyReflectionsScroller
            category={category}
            userId={userId}
            navigation={navigation}
            cardDotImage={cardDotImage}
          />
          <Text
            allowFontScaling={false}
            className="text-dark font-jokkerl text-[16px]"
          >
            Your progression through {category.name}
          </Text>
          <View className="w-full flex items-center justify-center mt-3 bg-card rounded-[8px] py-4 mb-8">
            {dayImageSrc !== "" ? (
              <ImageCache uri={dayImageSrc} className="w-[228px] h-[201px]" />
            ) : (
              <Image
                source={require("@assets/images/empty-progression.png")}
                className="w-[228px] h-[201px]"
                resizeMode="contain"
              />
            )}
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
}
