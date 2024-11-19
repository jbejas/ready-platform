import { View, Text, Dimensions } from "react-native";

import { useTranslation } from "react-i18next";
import ImageCache from "../ImageCache";

import { Skeleton } from "moti/skeleton";

import { REFLECTION_DAYS } from "@constants/constants";

interface Props {
  reflectionsDaysCount: number;
  currentReflectionCategoryName: string;
  userReflectionCardImageUrl: string;
  isLoading?: boolean;
}

const SkeletonCommonProps = {
  colorMode: "light",
  transition: {
    type: "timing",
    duration: 1500,
  },
  backgroundColor: "#D4D4D4",
} as const;

export default function PracticeStatus({
  reflectionsDaysCount,
  currentReflectionCategoryName,
  userReflectionCardImageUrl,
  isLoading,
}: Props) {
  const { t } = useTranslation();
  const { width } = Dimensions.get("window");

  return (
    <View className="w-full">
      {isLoading ? (
        <View className="w-full h-[170px] rounded-lg overflow-hidden">
          <Skeleton
            height={170}
            width={width - 48}
            radius={5}
            {...SkeletonCommonProps}
          />
        </View>
      ) : (
        <View className="p-6 bg-category-card w-full h-full rounded-[8px] relative overflow-hidden flex flex-row items-center justify-between">
          <View>
            <Text
              allowFontScaling={false}
              className="font-jokkerl text-[32px] text-dark mb-1"
            >
              {reflectionsDaysCount}/{REFLECTION_DAYS}{" "}
              {reflectionsDaysCount > 1
                ? t("you-screen.days")
                : t("you-screen.day")}
            </Text>
            <Text
              allowFontScaling={false}
              className="font-jokkerl text-[16px] text-dark"
            >
              {t("you-screen.progress", {
                contentCategory: currentReflectionCategoryName,
              })}
            </Text>
          </View>
          {userReflectionCardImageUrl ? (
            <ImageCache
              uri={userReflectionCardImageUrl}
              style={{ width: 140, height: 130 }}
              resizeMode="contain"
            />
          ) : null}
        </View>
      )}
    </View>
  );
}
