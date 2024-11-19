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

export default function ProfileSetupScreen({ navigation }: Props) {
  // Mount Localization
  const { t } = useTranslation();

  return (
    <SafeAreaComponent testID="ProfileSetup" relative>
      <Text
        allowFontScaling={false}
        className="text-[19px]  text-dark text-left mt-8 mb-6 font-jokkerl w-full -tracking-wide"
      >
        {t("profile-setup.title")}
      </Text>
      <Text
        allowFontScaling={false}
        className="text-[30px] sm-1:text-[36px] text-dark text-left mt-8 mb-6 font-jokkerl w-full -tracking-widest"
      >
        {t("profile-setup.subtitle")}
      </Text>
      <View className="absolute w-screen px-6 bottom-12 left-0 flex flex-row items-center justify-end">
        <DynamicButton
          onPress={() => navigation.navigate("WhatIsImportantScreen")}
          type={"primary"}
          label={t("general.im-ready")}
          size="large"
          rounded={"2xl"}
          position="none"
          textStyles="text-base"
        />
      </View>
    </SafeAreaComponent>
  );
}
