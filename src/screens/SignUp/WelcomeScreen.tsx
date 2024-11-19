import React from "react";
import { View, Text } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";

// Localization
import { useTranslation } from "react-i18next";

// Add React Redux and Store
import { useDispatch } from "react-redux";
import { setUser } from "@src/store/auth/authSlice";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

export default function NotificationsScreen({ navigation }: Props) {
  const { t } = useTranslation();

  // Set Redux dispatch
  const dispatch = useDispatch();

  const getStarted = () => {
    dispatch(setUser(true));
  };

  return (
    <SafeAreaComponent testID="Welcome" relative>
      <View className="flex items-center justify-center h-[70vh] w-full">
        <Text
          allowFontScaling={false}
          className="text-5xl font-bold text-dark-gray text-center my-12 font-jokkerl"
        >
          {t("welcome.welcome")} Mark, {t("welcome.lets-start")}
        </Text>
        <Text allowFontScaling={false} className="w-11/12 text-xl text-center">
          {t("welcome.subtitle")}
        </Text>
      </View>
      <View className="absolute w-screen px-4 bottom-12 left-0 flex flex-row items-center justify-between">
        <DynamicButton
          onPress={getStarted}
          label={t("welcome.get-started")}
          type={"full"}
          size={"medium"}
          customStyles={"!ml-0 !w-full"}
          textStyles={"text-white text-[12px] uppercase"}
        />
      </View>
    </SafeAreaComponent>
  );
}
