import React from "react";
import { View, Text } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";

// Localization
import { useTranslation } from "react-i18next";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

export default function WhatIsImportantScreen({ navigation }: Props) {
  // Mount Localization
  const { t } = useTranslation();

  return (
    <SafeAreaComponent testID="WhatsImportant" relative>
      <Text
        allowFontScaling={false}
        className="text-[19px]  text-vanilla-regular text-left mt-8 mb-6 font-jokkerl w-full -tracking-wide"
      >
        1/3
      </Text>
      <Text
        allowFontScaling={false}
        className="text-[30px] sm-1:text-[36px] text-dark text-left mt-8 mb-6 font-jokkerl w-full -tracking-widest"
      >
        {t("what-is-important.subtitle")}
      </Text>
      <View className="absolute w-screen px-6 bottom-12 left-0 flex flex-row items-center justify-end">
        <DynamicButton
          onPress={() => navigation.navigate("DiscoveringYouScreen")}
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
