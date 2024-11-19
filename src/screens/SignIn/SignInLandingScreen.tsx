import React from "react";
import { View, Text, Image } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import DynamicButton from "@components/DynamicButton/DynamicButton";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";

// Localization
import { useTranslation } from "react-i18next";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

export default function SignInLandingScreen({ navigation }: Props) {
  const { t } = useTranslation();

  return (
    <SafeAreaComponent testID="SignInLanding" relative>
      <View className="flex w-full h-full items-center justify-center bg-card relative">
        <View className="w-screen h-screen absolute top-0 left-0">
          <Image
            source={require("@assets/images/splash-screen-bg-logo.png")}
            className="object-contain w-screen h-screen"
          />
        </View>
        <View className="absolute w-full top-60 left-0 flex flex-col items-center justify-center">
          {/* <ReadyLogo width={80} /> */}
          {/* <Text allowFontScaling={false} className="text-[60px] font-bold text-vanilla-medium text-center font-jokkerl">
          Ready
        </Text>
        <Text allowFontScaling={false} className="text-md text-vanilla-medium text-center px-12 font-jokkerl">
          {t("landing-page.subtitle")}
        </Text> */}
        </View>
        <View className="absolute w-full bottom-6 left-0">
          <Text
            allowFontScaling={false}
            className="px-4 py-1 text-center text-vanilla-medium"
          >
            {t("landing-page.sign-up-disclaimer")}{" "}
            <Text allowFontScaling={false} className="underline">
              {t("landing-page.terms")}
            </Text>{" "}
            {t("landing-page.privacy-policy-disclaimer")}{" "}
            <Text allowFontScaling={false} className="underline">
              {t("landing-page.privacy-policy")}
            </Text>
          </Text>
          <Text
            allowFontScaling={false}
            className="px-4 pt-1 pb-3 text-center text-vanilla-medium"
          >
            {t("landing-page.social-media-post")}
          </Text>
          {/* <DynamicButton
          onPress={() => navigation.navigate("PhoneNumber")}
          label={t("sign-in.apple")}
          type={"full-icon"}
          icon={"apple"}
          size={"medium"}
          textStyles={"text-dark text-[15px]"}
          customStyles={"mb-2 bg-white"}
        />
        <DynamicButton
          onPress={() => navigation.navigate("SignInWithPhone")}
          label={t("sign-in.facebook")}
          type={"full-icon"}
          icon={"facebook"}
          size={"medium"}
          textStyles={"text-white text-[15px]"}
          customStyles={"mb-2 bg-facebook"}
        /> */}
          <DynamicButton
            onPress={() => navigation.navigate("SignInPhoneNumberScreen")}
            label={t("sign-in.phone-number")}
            type={"full-transparent"}
            size={"medium"}
            textStyles={"text-dark-gray text-[15px]"}
            customStyles={"mb-2 bg-white"}
          />
          <DynamicButton
            onPress={() => navigation.navigate("SignInEmailScreen")}
            label={t("sign-in.email")}
            type={"full-transparent"}
            size={"medium"}
            textStyles={"text-dark-gray text-[15px]"}
            customStyles={"mb-2 bg-white"}
          />
          <DynamicButton
            onPress={() => navigation.goBack()}
            label={t("sign-in.back")}
            type={"full-transparent-borderless"}
            size={"medium"}
            textStyles={"text-vanilla-medium text-[15px] font-bold"}
          />
        </View>
      </View>
    </SafeAreaComponent>
  );
}
