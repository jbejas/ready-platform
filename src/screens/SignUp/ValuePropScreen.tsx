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

  const goToValuePropScreen2 = () => {
    navigation.navigate("ValuePropScreen2");
  };

  return (
    <SafeAreaComponent testID="ValueProp" relative>
      <View className="h-full w-full left-0 flex flex-col items-center justify-start pt-32">
        <Text
          allowFontScaling={false}
          className="text-[36px] w-full text-dark text-left mb-20 font-jokkerl  leading-[44px] -tracking-widest"
        >
          {t("value-prop-screen.title")}
        </Text>
      </View>
      <View className="bottom-0 left-0 flex flex-col items-end justify-center">
        <DynamicButton
          onPress={() => goToValuePropScreen2()}
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
