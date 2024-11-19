import DynamicButton from "@components/DynamicButton/DynamicButton";
import { NavigationProp } from "@react-navigation/native";
import {
  confirmSignUp,
  getCurrentUser,
  resendSignUpCode,
  signIn,
} from "aws-amplify/auth";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { OTPInput } from "react-native-otp-component";
import { useSelector } from "react-redux";

import { setUser, setUserId } from "@store/auth/authSlice";
import { useDispatch } from "react-redux";

import ProgressBar from "@src/components/ProgressBar";
import SafeArea from "@src/components/SafeArea";
import { useTranslation } from "react-i18next";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

// Define the state structure
interface RootState {
  signup: {
    user: {
      username: string;
    };
    userPhoneNumber: string;
    userCountryCode: string;
    userTempPassword: string;
    userEmail: string;
  };
  auth: {
    userPhoneNumber: string;
    userCountryCode: string;
  };
  keyboard: {
    isKeyboardVisible: boolean;
  };
}

export default function PhoneVerificationScreen({ navigation }: Props) {
  // Set Translations
  const { t } = useTranslation();
  // Set Redux dispatch
  const dispatch = useDispatch();

  const [errorTracker, setErrorTracker] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isRequestingNewCode, setIsRequestingNewCode] =
    useState<boolean>(false);

  const [codes, setCodes] = useState<string[] | undefined>(Array(6).fill(""));
  const [errorMessages, setErrorMessages] = useState<string[]>();
  const refs = Array(6)
    .fill(null)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    .map(() => useRef<TextInput>(null));

  const onChangeCode = (text: string, index: number) => {
    if (text.length > 1) {
      setErrorMessages(undefined);
      const newCodes = text.split("");
      setCodes(newCodes);
      refs[5]!.current?.focus();
      return;
    }
    setErrorMessages(undefined);
    const newCodes = [...codes!];
    newCodes[index] = text;
    setCodes(newCodes);
    if (text !== "" && index < 5) {
      refs[index + 1]!.current?.focus();
    }
  };

  useEffect(() => {
    refs[0]!.current?.focus();
  }, []);

  const otpConfig = {
    borderColor: "transparent",
    backgroundColor: "transparent",
    textColor: "#000",
    errorColor: "transparent",
    focusColor: "transparent",
  };

  // Get User ID
  const userPassword = useSelector(
    (state: RootState) => state.signup.userTempPassword
  );
  // Get user Phone Number
  const getUserPhoneNumber = useSelector(
    (state: RootState) => state.auth.userPhoneNumber
  );
  // Get keyboard state
  const isKeyboardVisible = useSelector(
    (state: RootState) => state.keyboard.isKeyboardVisible
  );

  const validatePhoneNumberCode = async () => {
    try {
      setIsLoading(true);
      const username = getUserPhoneNumber;
      const code = codes?.join("");
      const { isSignUpComplete } = await confirmSignUp({
        username,
        confirmationCode: code,
      });

      if (isSignUpComplete) {
        handleUserSignIn();
      }
    } catch (error) {
      setIsLoading(false);
      setErrorTracker(
        "The OTP code you entered isn’t quite right. Please check the text message we sent you and try again. Drop us a line at support@readyplatform.co if the problem continues."
      );
      console.log("Error validating phone number: ", error);
    }
  };

  const handleUserSignIn = async () => {
    try {
      setTimeout(async () => {
        const { isSignedIn } = await signIn({
          username: getUserPhoneNumber,
          password: userPassword,
          options: {
            authFlowType: "USER_PASSWORD_AUTH",
          },
        });
        if (isSignedIn) {
          const { userId, signInDetails } = await getCurrentUser();
          console.log("User ID", userId);
          await dispatch(setUserId(userId));
          await dispatch(setUser(signInDetails));
          navigation.navigate("UserNameScreen");
        }
      }, 2000);
    } catch (error) {
      console.log("Error signing user in: ", error);
      setErrorTracker(`Error signing in ${error.message}`);
    }
  };

  const resendCode = async () => {
    try {
      setIsRequestingNewCode(true);
      await resendSignUpCode({
        username: getUserPhoneNumber,
      });
      setIsRequestingNewCode(false);
    } catch (error) {
      console.log("Error requesting new confirmation code: ", error);
      setIsRequestingNewCode(false);
    }
  };

  return (
    <SafeArea
      testID="UserPhoneVerificationCode"
      isPressable
      relative
      addVerticalInsets
      addAdditionalInsetBottom={16}
      addAdditionalInsetTop={13}
    >
      <View className="flex-1">
        <ProgressBar initialProgress={20} withDelay={500} progress={40} />
        <Text
          allowFontScaling={false}
          className="text-[30px] sm-1:text-[36px] text-primary-blue-100 text-left mt-10 mb-[69px] font-jokkerl"
        >
          {t("phone-verification.verification-code-title")}
        </Text>
        <View className="w-full h-9">
          <OTPInput
            codes={codes!}
            errorMessages={errorMessages}
            onChangeCode={onChangeCode}
            refs={refs}
            config={otpConfig}
          />
        </View>
        <View className="w-full h-1 flex flex-row items-center justify-between">
          <View className="w-12  h-1 border-b border-solid border-primary-blue-100"></View>
          <View className="w-12  h-1 border-b border-solid border-primary-blue-100"></View>
          <View className="w-12  h-1 border-b border-solid border-primary-blue-100"></View>
          <View className="w-12  h-1 border-b border-solid border-primary-blue-100"></View>
          <View className="w-12  h-1 border-b border-solid border-primary-blue-100"></View>
          <View className="w-12  h-1 border-b border-solid border-primary-blue-100"></View>
        </View>
        <View className={`flex flex-row items-center justify-between mt-6`}>
          {isRequestingNewCode ? (
            <ActivityIndicator size="small" color="#000" />
          ) : (
            <Pressable onPress={() => resendCode()}>
              <Text
                allowFontScaling={false}
                className="underline text-[14px] font-jokkerr text-primary-blue-100"
              >
                {t("phone-verification.resend-code")}
              </Text>
            </Pressable>
          )}
        </View>
        <View className="w-full flex items-center justify-center mt-12 px-8">
          <Text
            allowFontScaling={false}
            className="text-base font-jokkerl text-center"
          >
            {errorTracker}
          </Text>
        </View>
      </View>
      <View className="items-end">
        <DynamicButton
          onPress={validatePhoneNumberCode}
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
          loaderColor="#000"
          disabled={codes.join("").length !== 6}
          isLoading={isLoading}
        />
      </View>
    </SafeArea>
  );
}
