import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Pressable,
  Linking,
  Modal,
} from "react-native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import { NavigationProp } from "@react-navigation/native";
import DynamicButton from "@components/DynamicButton/DynamicButton";
import ReadyBetaCharcoal from "@assets/icons/ready-beta-charcoal.svg";

// Amplify
import { signOut } from "aws-amplify/auth";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { resetSignUp } from "@store/signUp/signUpSlice";
import { resetAuth } from "@store/auth/authSlice";

// Localization
import { useTranslation } from "react-i18next";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

// Define the state structure
interface RootState {
  keyboard: {
    isKeyboardVisible: boolean;
  };
}

export default function ReadyLandingScreen({ navigation }: Props) {
  // Mount Localization
  const { t } = useTranslation();
  // Mount Redux dispatch
  const dispatch = useDispatch();
  // Get keyboard state
  const isKeyboardVisible = useSelector(
    (state: RootState) => state.keyboard.isKeyboardVisible
  );

  const [areButtonsVisible, setAreButtonsVisible] = useState<boolean>(false);
  const [isSignInTroubleModalVisible, setIsSignInTroubleModalVisible] =
    useState<boolean>(false);

  const cleanUser = async () => {
    await dispatch(resetSignUp());
    await dispatch(resetAuth());
    await signOut();
  };

  const createAccount = async () => {
    await cleanUser();
    navigation.navigate("ValuePropScreen2");
  };

  useEffect(() => {
    setTimeout(() => {
      setAreButtonsVisible(true);
    }, 2000);
  });

  const signUserIn = async () => {
    await cleanUser();
    navigation.navigate("SignInPhoneNumberScreen");
  };

  const viewTermsOfService = async () => {
    try {
      const url = "https://www.readyplatform.co/terms-of-use/";
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      }
    } catch (error) {
      console.log("viewTermsOfService", error);
    }
  };

  const viewPrivacyPolicy = async () => {
    try {
      const url = "https://www.readyplatform.co/privacy-policy/";
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      }
    } catch (error) {
      console.log("viewTermsOfService", error);
    }
  };

  return (
    <SafeAreaComponent testID="Landing" relative>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isSignInTroubleModalVisible}
        className="relative"
      >
        {/* <View className="w-screen h-screen absolute left-0 top-0 z-0 bg-dark/40"></View> */}
        <View
          testID="Modal.TroubleSigningInModal"
          className="w-full h-[90%] p-5 flex items-center justify-start absolute bottom-0 pb-24 rounded-t-2xl bg-modal z-10"
        >
          <Text
            allowFontScaling={false}
            className="text-dark-gray w-full text-left text-[26px] -tracking-widest font-jokkerl  mt-6"
          >
            Trouble Signing In? Here’s How to Fix It:
          </Text>
          <Text
            allowFontScaling={false}
            className="text-dark-gray w-full text-left text-[16px] -tracking-wide font-jokkerl mt-4 "
          >
            1. Check your phone number. Make sure you’re entering the correct
            phone number, including the country code.
          </Text>
          <Text
            allowFontScaling={false}
            className="text-dark-gray w-full text-left text-[16px] -tracking-wide font-jokkerl mt-4 "
          >
            2. Verify one-time password entry. Double-check that you’ve entered
            the one-time password correctly, with no extra spaces or characters.
          </Text>
          <Text
            allowFontScaling={false}
            className="text-dark-gray w-full text-left text-[16px] -tracking-wide font-jokkerl mt-4 "
          >
            3. Request a new one-time password. If the first one doesn’t work,
            request a new one by tapping 'Resend OTP'.
          </Text>
          <Text
            allowFontScaling={false}
            className="text-dark-gray w-full text-left text-[16px] -tracking-wide font-jokkerl mt-4 "
          >
            4. Check your internet connection. Make sure you have a stable
            connection or cell network signal.
          </Text>
          <Text
            allowFontScaling={false}
            className="text-dark-gray w-full text-left text-[16px] -tracking-wide font-jokkerl mt-4 "
          >
            5. Update the app. Make sure you’re using the latest version of the
            app by checking for updates in your phone’s app store.
          </Text>
          <Text
            allowFontScaling={false}
            className="text-dark-gray w-full text-left text-[16px] -tracking-wide font-jokkerl mt-4 "
          >
            6. Check your spam or blocked messages. Sometimes one-time password
            messages can be filtered into spam or blocked by your phone. 
          </Text>
          <Text
            allowFontScaling={false}
            className="text-dark-gray w-full text-left text-[16px] -tracking-wide font-jokkerl mt-4  mb-6"
          >
            7. Get in touch. If you’re still having issues, reach out to us at{" "}
            <Text allowFontScaling={false} className="font-jokkerm">
              support@readyplatform.co
            </Text>{" "}
            .
          </Text>
          <DynamicButton
            testID="Landing.Modal.ImDone"
            onPress={() => setIsSignInTroubleModalVisible(false)}
            type="full-transparent"
            label={t("general.got-it")}
            size="large"
            rounded="2xl"
            position="none"
            textStyles="text-base"
            customStyles="mt-8 !w-full mx-0"
            textColor="dark"
          />
        </View>
      </Modal>
      <View className="h-full w-full left-0 flex flex-col items-start justify-start pt-0 sm-1:pt-6">
        <ReadyBetaCharcoal width={124} />
        <Text
          allowFontScaling={false}
          className="font-jokkerl text-[25px] sm-1:text-[30px] leading-9 mt-2"
        >
          {t("general.landing-text")}
        </Text>
      </View>
      {areButtonsVisible ? (
        <View
          testID="Landing.ButtonsContainer"
          className={`${
            isKeyboardVisible
              ? "absolute -bottom-96"
              : "absolute bottom-2 sm-1:bottom-12"
          } w-screen left-0 flex items-center justify-center`}
        >
          <View className="w-screen flex flex-row items-center justify-around mb-0 sm-1:mb-6">
            <DynamicButton
              testID="Landing.SignIn"
              onPress={() => signUserIn()}
              label={t("landing-page.sign-in")}
              type={"icon-text"}
              showBgImage
              bgImage="drawn-big"
              rounded="full"
              customStyles="w-[190px] h-[190px]"
              textStyles={"text-[21px] font-jokkerl"}
              textColor="text-dark"
            />
            <DynamicButton
              testID="Landing.SignUp"
              onPress={() => createAccount()}
              label={t("landing-page.sign-up")}
              type={"icon-text"}
              showBgImage
              bgImage="drawn-big"
              rounded="full"
              customStyles="w-[190px] h-[190px]"
              textStyles={"text-[21px] font-jokkerl"}
              textColor="text-dark"
            />
          </View>
          <DynamicButton
            testID="Landing.TroubleSignIn"
            onPress={() => setIsSignInTroubleModalVisible(true)}
            label={t("landing-page.trouble-sign-in")}
            type={"full-transparent-borderless"}
            size={"medium"}
            textStyles={"text-[14px] underline font-jokkerl"}
            textColor={"text-dark"}
          />
          <View
            testID="Landing.TermsConditions"
            className="w-full flex flex-row flex-wrap items-start justify-start px-6 mb-6 sm-1:mb-0 sm-1:mt-8"
          >
            <View className="h-5">
              <Text
                allowFontScaling={false}
                className="text-[14px] text-dark font-jokkerl"
              >
                By signing up, you agree to our{" "}
              </Text>
            </View>
            <View className="h-5 mr-1">
              <Pressable
                testID="Landing.ViewTermsOfService"
                onPress={() => viewTermsOfService()}
              >
                <Text
                  allowFontScaling={false}
                  className="underline text-[14px] text-dark font-jokkerl"
                >
                  terms of service,
                </Text>
              </Pressable>
            </View>
            <View className="h-5 pr-1">
              <Text
                allowFontScaling={false}
                className="text-[14px] text-dark font-jokkerl"
              >
                and
              </Text>
            </View>
            <View className="h-5">
              <Pressable
                testID="Landing.ViewPrivacyPolicy"
                onPress={() => viewPrivacyPolicy()}
              >
                <Text
                  allowFontScaling={false}
                  className="underline text-[14px] text-dark font-jokkerl"
                >
                  privacy policy.
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      ) : (
        <View
          testID="Landing.ActivityIndicator"
          className="absolute w-screen bottom-6 left-0 h-48 flex items-center justify-center"
        >
          <ActivityIndicator size="large" color="#000" />
        </View>
      )}
    </SafeAreaComponent>
  );
}
