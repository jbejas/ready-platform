import React from "react";
import { View, Text } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";
import HorizontalCardsDailyReflectionsScroll from "@src/components/HorizontalCardsDailyReflectionsScroll/HorizontalCardsDailyReflectionsScroll";
import { LinearGradient } from "expo-linear-gradient";

// Localization
import { useTranslation } from "react-i18next";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

export default function HowReflectionsWorkScreen({ navigation }: Props) {
  const { t } = useTranslation();

  const goToFirstReflectionScreen = () => {
    navigation.navigate("HowMatchesWorkOneScreen");
  };

  const cardsData = [
    {
      id: "1",
      title: "Curiosity",
    },
    {
      id: "2",
      title: "Growth",
    },
    {
      id: "3",
      title: "Mindset",
    },
  ];

  return (
    <SafeAreaComponent testID="HowReflectionsWork" relative>
      <View className="w-screen h-screen absolute top-0 left-0">
        <LinearGradient
          // Background Linear Gradient
          colors={["#FAE2E6", "#F0E5E6"]}
          className="w-full h-full absolute left-0 bottom-0 rounded-b-3xl"
        />
      </View>
      <View className="h-full w-full bottom-12 left-0 flex flex-col items-center justify-start">
        <Text
          allowFontScaling={false}
          className="text-[32px]  text-dark text-left my-20 font-jokkerl w-full -tracking-widest"
        >
          {t("how-reflections-work.title")}
        </Text>
        <HorizontalCardsDailyReflectionsScroll cardsData={cardsData} />
      </View>
      <View className="absolute w-screen pr-8 bottom-12 left-0 flex flex-row items-center justify-end">
        <DynamicButton
          onPress={() => goToFirstReflectionScreen()}
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
    </SafeAreaComponent>
  );
}
