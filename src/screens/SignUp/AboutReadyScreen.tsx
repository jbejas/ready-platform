import { View, Text, Pressable } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";

// Images
import BigButtonDark from "@assets/images/big-button-dark.svg";

// Localization
import { useTranslation } from "react-i18next";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

export default function UserPhoneNumberScreen({ navigation }: Props) {
  const { t } = useTranslation();

  const goToNameScreen = () => {
    navigation.navigate("WhatAreDailyReflectionsScreen");
  };

  return (
    <SafeAreaComponent testID="AboutReady" relative>
      <View className="h-full w-full bottom-12 left-0 flex flex-col items-center justify-start">
        <Text
          allowFontScaling={false}
          className="text-[40px] sm-1:text-[52px] text-dark text-left mb-20 mt-36 font-jokkerl w-full -tracking-widest"
        >
          {t("about-ready.title")}
        </Text>
      </View>
      <View className="absolute bottom-6 sm-1:bottom-20 w-screen px-4 left-0 flex flex-col items-center justify-between">
        <View className="flex flex-row items-start justify-center mb-4">
          <Pressable onPress={() => goToNameScreen()}>
            <BigButtonDark width={320} height={320} />
          </Pressable>
        </View>
      </View>
    </SafeAreaComponent>
  );
}
