import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Image,
} from "react-native";
import DynamicButton from "@components/DynamicButton/DynamicButton";
import Animated from "react-native-reanimated";
import Dots from "@components/Dots";
import ImageCache from "@src/components/ImageCache";

interface Props {
  categories: any;
  categoriesImages: any;
  navigation: any;
  user: any;
  reflectionsDaysCount: number;
  totalDaysCount: number;
  showPaymentModal?: () => void;
  isComingSoonVisible?: boolean;
}

export default function CategoriesScroller({
  categories,
  categoriesImages,
  navigation,
  user,
  reflectionsDaysCount,
  totalDaysCount,
  showPaymentModal,
  isComingSoonVisible = false,
}: Props) {
  const [dotIndex, setDotIndex] = useState<number>(0);

  const updateDots = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const x = event.nativeEvent.contentOffset.x;
    const index = Math.round(x / width);
    setDotIndex(index);
  };

  const { width } = Dimensions.get("window");

  return (
    <View className="w-screen -ml-6 mb-8">
      <Animated.ScrollView
        pagingEnabled
        horizontal
        className="w-full h-[300px]"
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={updateDots}
      >
        {categories &&
          Array.isArray(categories) &&
          categories.length > 0 &&
          categories
            .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0))
            .map((category, index) => (
              <View
                className="w-screen h-full flex items-center justify-start px-6 pb-6 pt-20"
                key={index}
              >
                {categoriesImages[index] ? (
                  <View className="w-full h-[180px] rounded-[8px] overflow-hidden absolute">
                    <ImageCache
                      uri={categoriesImages[index]}
                      className="object-contain w-[382px] h-[180px]"
                    />
                  </View>
                ) : null}
                <View className="w-full bottom-0 left-0 bg-category-card p-4 rounded-b-[8px] h-[215px]">
                  <Text
                    allowFontScaling={false}
                    className="text-dark text-[32px] font-jokkerl mb-4 w-full"
                  >
                    {category.name}
                  </Text>
                  <Text
                    allowFontScaling={false}
                    className="text-dark mb-2 font-jokkerl leading-5 w-full"
                    numberOfLines={3}
                    ellipsizeMode="tail"
                  >
                    {category.description}
                  </Text>
                  <View className="w-full flex items-end justify-end mt-4 absolute bottom-4 right-4">
                    <DynamicButton
                      onPress={() =>
                        navigation.navigate("ContentCategoryScreen", {
                          category,
                          userId: user.id,
                          reflectionsDaysCount,
                          categoryImage: categoriesImages[index],
                          totalDaysCount,
                        })
                      }
                      type={"icon"}
                      size="large"
                      iconPosition="right"
                      icon={"chevron-right"}
                      iconSize={30}
                      showBgImage
                      iconColor="black"
                      rounded="full"
                      position="none"
                      textStyles="text-base"
                    />
                  </View>
                </View>
              </View>
            ))}
        {isComingSoonVisible ? (
          <View
            className="w-screen h-full flex items-center justify-start px-6 pb-6 pt-20"
            key={100000000000000000000}
          >
            <View className="w-full h-[180px] rounded-[8px] overflow-hidden absolute">
              <Image
                source={require("@assets/images/MindsetCard.jpg")}
                style={[{ width: 382, height: 180 }]}
                className="object-fit"
              />
            </View>
            <View className="w-full bottom-0 left-0 bg-category-card p-4 rounded-b-[8px] h-[215px]">
              <Text
                allowFontScaling={false}
                className="text-dark text-[32px] font-jokkerl mb-4 w-full"
              >
                Coming soon
              </Text>
              <Text
                allowFontScaling={false}
                className="text-dark mb-2 font-jokkerl leading-5 w-full"
              >
                More reflection categories coming soon to Ready.
              </Text>
              <View className="w-full flex items-end justify-end mt-4 absolute bottom-4 right-4">
                <DynamicButton
                  onPress={() => showPaymentModal()}
                  type={"icon"}
                  size="large"
                  iconPosition="right"
                  icon={"chevron-right"}
                  iconSize={30}
                  showBgImage
                  iconColor="black"
                  rounded="full"
                  position="none"
                  textStyles="text-base"
                />
              </View>
            </View>
          </View>
        ) : null}
      </Animated.ScrollView>
      <Dots
        dots={isComingSoonVisible ? categories.length + 1 : categories.length}
        dotIndex={dotIndex}
      />
    </View>
  );
}
