import { useState, useEffect } from "react";
import { View, Text, Image, Pressable } from "react-native";
import Animated from "react-native-reanimated";
import { NavigationProp } from "@react-navigation/native";

// Utils
import { getContent } from "@utils/content";
import { getImageURL } from "@utils/images";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

// Skeleton
import { Skeleton } from "moti/skeleton";
import ImageCache from "@src/components/ImageCache";
dayjs.extend(duration);
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
  showViewAll?: boolean;
  viewAllText?: string;
  contentCount: number;
  contentCategoryName: "All" | "Reading" | "Audio";
  title?: string;
  navigation: NavigationProp<any>;
  contentItemsCount?: number | null;
  totalReflectionDaysCount?: number;
};

export default function ContentScroller({
  showViewAll = false,
  contentCount = 5,
  viewAllText = "View all",
  contentCategoryName,
  title = "",
  navigation,
  contentItemsCount = null,
  totalReflectionDaysCount,
}: Props) {
  // Constants
  const [contents, setContents] = useState<any>([]);
  const [contentImages, setContentImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const contentImagesArray = [];
        const contentData = await getContent(
          contentCount,
          contentCategoryName,
          totalReflectionDaysCount
        );
        setContents(contentData.items);
        await Promise.all(
          contentData.items.map(async (category, index) => {
            const headerImageURL = await getImageURL(category.image);
            contentImagesArray[index] = headerImageURL;
          })
        );
        setContentImages(contentImagesArray);
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      } catch (error) {
        setIsLoading(false);
        console.log("fetchContent Error", error);
      }
    };
    fetchContent();
  }, [totalReflectionDaysCount]);

  const handleContentNavigation = async (content) => {
    if (content.contentType?.name === "Audio") {
      navigation.navigate("AudioScreen", {
        content,
      });
    }
    if (content.contentType?.name === "Reading") {
      navigation.navigate("ReadingScreen", {
        content,
      });
    }
  };

  const handleTitleNavigation = async () => {
    if (contentCategoryName === "Reading") {
      navigation.navigate("ContentTypeScreen", {
        contentType: "Reading",
        totalReflectionDaysCount,
      });
    }
    if (contentCategoryName === "Audio") {
      navigation.navigate("ContentTypeScreen", {
        contentType: "Audio",
        totalReflectionDaysCount,
      });
    }
    if (contentCategoryName === "All") {
      navigation.navigate("LearnScreen");
    }
  };

  return (
    <View className="w-screen -ml-6 mb-8">
      {isLoading ? (
        <View className="w-full px-6">
          <View className="w-full flex flex-row items-center justify-between">
            <View className="w-[120px] flex items-start justify-start">
              <Skeleton
                height={15}
                width={"100%"}
                radius={5}
                {...SkeletonCommonProps}
              />
            </View>
            <View className="w-[50px] flex items-end justify-end">
              <Skeleton
                height={15}
                width={"100%"}
                radius={5}
                {...SkeletonCommonProps}
              />
            </View>
          </View>
          <View className="w-full mt-4 flex flex-row items-start justify-start">
            <View className="w-[200px] h-[240px] flex items-start justify-start mr-4">
              <Skeleton
                height={"100%"}
                width={"100%"}
                radius={5}
                {...SkeletonCommonProps}
              />
            </View>
            <View className="w-[200px] h-[240px] flex items-start justify-start">
              <Skeleton
                height={"100%"}
                width={"100%"}
                radius={5}
                {...SkeletonCommonProps}
              />
            </View>
          </View>
        </View>
      ) : (
        <>
          <View className="flex flex-row items-center justify-between px-6 mb-4">
            <Text
              allowFontScaling={false}
              className="text-dark text-[16px] font-jokkerl"
            >
              {title}{" "}
              {contentItemsCount ? (
                <Text className="font-jokkerl text-[16px]">
                  ({contentItemsCount})
                </Text>
              ) : null}
            </Text>
            {showViewAll ? (
              <Pressable onPress={() => handleTitleNavigation()}>
                <Text
                  allowFontScaling={false}
                  className="text-dark underline text-[16px] font-jokkerl"
                >
                  {viewAllText}
                </Text>
              </Pressable>
            ) : null}
          </View>
          <Animated.ScrollView
            horizontal
            className="w-full h-[250px] pl-6"
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
          >
            {contents.map((content, index) => (
              <Pressable
                key={index}
                onPress={() => handleContentNavigation(content)}
              >
                <View className="w-[200px] h-[240px] flex items-center justify-start bg-category-card mr-3 relative rounded-[8px] overflow-hidden">
                  {contentImages[index] ? (
                    <ImageCache
                      uri={contentImages[index]}
                      className="w-full h-[120px] rounded-t-[8px]"
                    />
                  ) : null}
                  <View className="w-full h-[120px] p-4">
                    <Text
                      allowFontScaling={false}
                      className="text-dark text-[18px] font-jokkerl w-full h-[64px]"
                      numberOfLines={3}
                      ellipsizeMode="tail"
                    >
                      {content.title}
                    </Text>
                    <View className="absolute bottom-2 left-2 rounded-full px-2 py-1">
                      <Text
                        allowFontScaling={false}
                        className="font-jokkerm text-[12px] text-dark"
                      >
                        {content?.contentType?.name}
                      </Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            ))}
            <View className="h-full w-8"></View>
          </Animated.ScrollView>
        </>
      )}
    </View>
  );
}
