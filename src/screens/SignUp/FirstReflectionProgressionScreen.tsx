import React from "react";
import { useSelector } from "react-redux";
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

// Define the state structure
interface RootState {
  auth: {
    user: string;
  };
}

export default function FirstReflectionProgressionScreen({
  navigation,
}: Props) {
  // Mount Localization
  const { t } = useTranslation();

  // Get userData
  const user = JSON.parse(useSelector((state: RootState) => state.auth.user));

  const goToLastReflectionPage = async () => {
    navigation.navigate("FirstReflectionLastScreen");
  };

  return (
    <SafeAreaComponent testID="FirstReflectionProgression" relative>
      <View className="h-full w-full bottom-12 left-0 flex flex-col items-center justify-start">
        <Text
          allowFontScaling={false}
          className="text-[19px]  text-light text-left mt-20 font-jokkerl w-full -tracking-wide"
        >
          {t("reflection-progression.pretitle")}
        </Text>
        <Text
          allowFontScaling={false}
          className="text-[36px] font-regular leading-[40px] text-light text-left mt-6 font-jokkerl w-full -tracking-widest"
        >
          {t("reflection-progression.title")} {user.firstName}
        </Text>
      </View>
      <View className="absolute w-screen px-6 bottom-12 left-0 flex flex-row items-center justify-end">
        <DynamicButton
          onPress={() => goToLastReflectionPage()}
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
