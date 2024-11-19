import React from "react";
import { View, Text } from "react-native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";

// Localization
import { useTranslation } from "react-i18next";

export default function AccountInformationScreen() {
  // Mount Localization
  const { t } = useTranslation();

  return (
    <SafeAreaComponent testID="Help" isPressable relative>
      <View className="w-full h-full flex flex-col items-center justify-start">
        <Text
          allowFontScaling={false}
          className="text-[18px] font-jokkerl -tracking-wide w-full text-left mt-8"
        >
          {t("help-screen.title")}
        </Text>
        <Text
          allowFontScaling={false}
          className="text-[16px] font-jokkerl -tracking-wide w-full text-left  mt-4"
        >
          {t("help-screen.subtitle")}{" "}
          <Text allowFontScaling={false} className="underline">
            {t("help-screen.contact-email")}
          </Text>
        </Text>
      </View>
    </SafeAreaComponent>
  );
}
