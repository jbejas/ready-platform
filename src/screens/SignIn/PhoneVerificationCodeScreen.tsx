import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { confirmSignIn, getCurrentUser } from "aws-amplify/auth";
import * as customQueries from "@gcq/index";
import { generateClient, GraphQLQuery } from "@aws-amplify/api";
import { GetUserQuery } from "@src/api/index";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";
import { OTPInput } from "react-native-otp-component";

// Segment
import { useAnalytics } from "@segment/analytics-react-native";

// Constants
import { SIGNUP_SCREENS } from "@constants/constants";

// Redux
import { setIsUserOnboarded } from "@store/signUp/signUpSlice";
import { setUser, setUserId, setUserSession } from "@store/auth/authSlice";

// Localization
import { useTranslation } from "react-i18next";

// User utils
import { userSignIn } from "@utils/user";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

// Define the state structure
interface RootState {
  auth: {
    user: string;
    userPhoneNumber: string;
    userCountryCode: string;
  };
}

export default function PhoneVerificationCodeScreen({ navigation }: Props) {
  // Mount GraphQL client
  const client = generateClient();
  // Mount Localization
  const { t } = useTranslation();
  // Mount Redux dispatch
  const dispatch = useDispatch();
  // Segment
  const { identify, track } = useAnalytics();

  const user = JSON.parse(useSelector((state: RootState) => state.auth.user));

  const userPhoneNumber = useSelector(
    (state: RootState) => state.auth.userPhoneNumber
  );
  const userCountryCode = useSelector(
    (state: RootState) => state.auth.userCountryCode
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isRequestingNewCode, setIsRequestingNewCode] =
    useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

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

  const otpConfig = {
    borderColor: "transparent",
    backgroundColor: "transparent",
    textColor: "#000",
    errorColor: "transparent",
    focusColor: "transparent",
  };

  const requestNewCode = async () => {
    try {
      console.log("User", user);
      setIsError(false);
      setIsRequestingNewCode(true);
      // Call Sign In method. Tis will send a new code to the user.
      await userSignIn(userPhoneNumber, userCountryCode);
      setIsRequestingNewCode(false);
    } catch (error) {
      console.log("Phone Verification Screen -> Error handleSignIn", error);
      setIsRequestingNewCode(false);
    }
  };

  const validatePhoneNumberCode = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const verificationCode = codes?.join("");
      const { isSignedIn, nextStep } = await confirmSignIn({
        challengeResponse: verificationCode,
      });
      if (isSignedIn) {
        const currentUserInfo = await getCurrentUser();
        const { userId } = currentUserInfo;
        const currentUser = await client.graphql<GraphQLQuery<GetUserQuery>>({
          query: customQueries.getUser,
          variables: {
            id: userId,
          },
        });
        console.log(
          "validatePhoneNumberCode",
          userId,
          currentUser.data.getUser
        );
        identify(currentUser.data.getUser.id, {
          email: currentUser.data.getUser.email,
          firstName: currentUser.data.getUser.firstName,
          birthdate: currentUser.data.getUser.birthdate,
        });
        track("User signed in");
        await dispatch(setUserId(userId));
        await dispatch(setUser(currentUser.data.getUser));
        await dispatch(setUserSession(JSON.stringify(currentUser)));

        if (!currentUser.data.getUser) {
          navigation.navigate("UserEmailRecoveryScreen");
        } else if (!currentUser.data.getUser.isSignUpComplete) {
          const signUpDropRoute =
            SIGNUP_SCREENS[currentUser.data.getUser.signUpStep];
          navigation.navigate(signUpDropRoute);
        } else {
          dispatch(setIsUserOnboarded(true));
        }
        setIsLoading(false);
      } else {
        console.log("User not signed In", nextStep);
        setIsError(true);
        setIsLoading(false);
      }
      console.log("Next Step", nextStep);
    } catch (error) {
      console.log("Error validating phone number: ", error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  return (
    <SafeAreaComponent isPressable relative testID="SignInPhoneVerification">
      <Text
        allowFontScaling={false}
        className="text-[36px]  -tracking-widest text-dark text-left my-14 font-jokkerl"
      >
        {t("phone-verification.verification-code-title")}
      </Text>
      <View className="w-full h-9 flex flex-row items-center justify-center">
        <View className="w-[284px] h-9 flex flex-row items-center justify-center">
          <OTPInput
            codes={codes!}
            errorMessages={errorMessages}
            onChangeCode={onChangeCode}
            refs={refs}
            config={otpConfig}
          />
        </View>
      </View>
      <View className="w-full h-1 flex flex-row items-center justify-center">
        <View className="w-[244px] ml-[2px] h-1 flex flex-row items-center justify-center">
          <View className="w-2/12 mx-1 h-1 border-b border-solid border-black"></View>
          <View className="w-2/12 mx-1 h-1 border-b border-solid border-black"></View>
          <View className="w-2/12 mx-1 h-1 border-b border-solid border-black"></View>
          <View className="w-2/12 mx-1 h-1 border-b border-solid border-black"></View>
          <View className="w-2/12 mx-1 h-1 border-b border-solid border-black"></View>
          <View className="w-2/12 mx-1 h-1 border-b border-solid border-black"></View>
        </View>
      </View>
      <View className="w-full flex items-center justify-center mt-6">
        {isRequestingNewCode ? (
          <ActivityIndicator size="small" color="#000" />
        ) : (
          <Pressable onPress={() => requestNewCode()}>
            <Text
              allowFontScaling={false}
              className="w-full my-[28px] text-dark/40 text-left text-[13px]"
            >
              {t("phone-verification.resend-otp")}
            </Text>
          </Pressable>
        )}
      </View>
      {isError ? (
        <View className="w-full flex items-center justify-center mt-6">
          <Pressable onPress={() => requestNewCode()}>
            <Text
              allowFontScaling={false}
              className="w-full my-[28px] text-red text-left text-[13px]"
            >
              {t("phone-verification.invalid-otp")}
            </Text>
          </Pressable>
        </View>
      ) : null}
      <View className="absolute w-screen px-6 bottom-12 left-0 flex flex-row items-center justify-between">
        <DynamicButton
          onPress={validatePhoneNumberCode}
          type={"primary"}
          label={t("general.continue")}
          size="large"
          rounded={"2xl"}
          position="none"
          textStyles="text-base"
          disabled={codes.join("").length !== 6}
          isLoading={isLoading}
        />
      </View>
    </SafeAreaComponent>
  );
}
