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
  // Mount Localization
  const { t } = useTranslation();

  const goToNameScreen = () => {
    console.log("aaaa");
    navigation.navigate("FirstReflectionIntroScreen");
    // navigation.goBack();
  };

  return (
    <>
      <SafeAreaComponent testID="CompleteFirstReflection" relative>
        <View className="h-full w-full flex flex-col items-center justify-start relative z-20">
          <Text
            allowFontScaling={false}
            className="text-[36px] text-dark text-left mb-20 font-jokkerl w-full -tracking-widest"
          >
            {t("complete-first-reflection.title")}
          </Text>
        </View>
      </SafeAreaComponent>
      <View className="absolute w-screen pr-8 bottom-12 left-0 flex flex-row items-center justify-end">
        <DynamicButton
          onPress={() => goToNameScreen()}
          type={"icon"}
          size="large"
          iconPosition="center"
          icon={"chevron-right"}
          iconSize={30}
          showBgImage
          iconColor="black"
          rounded="full"
          position="none"
          textStyles="text-base"
        />
      </View>
    </>
  );
}
