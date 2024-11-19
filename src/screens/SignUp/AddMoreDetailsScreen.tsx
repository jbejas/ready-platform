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

export default function UserPhoneNumberScreen({ navigation }: Props) {
  const { t } = useTranslation();

  const goToPronounsScreen = () => {
    navigation.navigate("UserPronounsScreen");
  };

  return (
    <SafeAreaComponent testID="AddMoreDetails" relative>
      <View className="h-full w-full px-4 bottom-12 left-0 flex flex-col items-center justify-center">
        <Text
          allowFontScaling={false}
          className="text-4xl font-bold text-dark text-center mb-20 font-jokkerl"
        >
          {t("add-more-details.title")}
        </Text>
        <DynamicButton
          onPress={goToPronounsScreen}
          type={"primary"}
          label={`${t("add-more-details.button")}`}
          size="large"
          iconPosition="right"
          icon={"arrow-right"}
          iconSize={30}
          rounded="full"
          position="none"
          textStyles="text-base"
        />
      </View>
    </SafeAreaComponent>
  );
}
