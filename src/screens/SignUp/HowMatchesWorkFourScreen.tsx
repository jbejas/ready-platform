import React from "react";
import { View, Text, Image } from "react-native";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";

// Localization
import { useTranslation } from "react-i18next";

// Define the props type for your navigation stack
type Props = {
  route: RouteProp<any>;
  navigation: NavigationProp<any>;
};

export default function HowMatchesWorkFourScreen({ route, navigation }: Props) {
  // Mount Localization
  const { t } = useTranslation();

  const goToFirstReflectionScreen = () => {
    navigation.navigate("CompleteFirstReflectionScreen");
  };

  const { dailyConnections } = route.params;

  return (
    <SafeAreaComponent
      testID="HowMatchesWorkFour"
      relative
      customClasses="!bg-card"
    >
      <View className="w-full flex flex-col items-center justify-start">
        <Text
          allowFontScaling={false}
          className="text-[32px]  text-dark text-left mt-20 mb-12 font-jokkerl w-full -tracking-widest leading-10"
        >
          {t("how-matches-work-four.title")}{" "}
          <Text allowFontScaling={false} className="font-jokkerm">
            {t("how-matches-work-four.title1")} {dailyConnections}{" "}
            {t("how-matches-work-four.title2")}
          </Text>{" "}
          {t("how-matches-work-four.title3")}
        </Text>
        <View className="w-screen flex flex-row items-center justify-between">
          <Image source={require("@assets/images/sara-square.png")} />
          <Image source={require("@assets/images/tom-square.png")} />
        </View>
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
