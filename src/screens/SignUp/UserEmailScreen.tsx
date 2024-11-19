import DynamicButton from "@components/DynamicButton/DynamicButton";
import { NavigationProp } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Text, TextInput, View } from "react-native";

// Segment
import { useAnalytics } from "@segment/analytics-react-native";

// Redux
import {
  setUserEmail,
  setUserEmailCommunication,
} from "@store/signUp/signUpSlice";
// Set Redux Dispatch
import { useDispatch } from "react-redux";

// Localization
import Alert from "@src/components/Alert";
import ProgressBar from "@src/components/ProgressBar";
import SafeArea from "@src/components/SafeArea";
import Toggle from "@src/components/Toggle";
import { useTranslation } from "react-i18next";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

// Define the state structure
interface RootState {
  signup: {
    userId: string;
  };
  keyboard: {
    isKeyboardVisible: boolean;
  };
}

export default function UserEmailScreen({ navigation }: Props) {
  const dispatch = useDispatch();
  const { screen } = useAnalytics();

  const { t } = useTranslation();
  const emailInputRef = useRef<TextInput>(null);

  const [email, setEmail] = useState<string>(""); // Initialize email string
  const [emailCommunication, setEmailCommunication] = useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Validate email to enable continue button.
  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && emailRegex.test(email)) {
      setIsEmailValid(true);
      return;
    }
    setIsEmailValid(false);
  }, [email]);

  const validateEmail = async () => {
    try {
      setIsLoading(true);
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return;
      }
      // Set email in Redux
      await dispatch(setUserEmail(email));
      await dispatch(setUserEmailCommunication(emailCommunication));
      navigation.navigate("UserPhoneNumberScreen");
    } catch (error) {
      console.log("Email error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    screen("Email screen");
  }, []);

  return (
    <SafeArea
      testID="UserEmail"
      isPressable
      relative
      addVerticalInsets
      addAdditionalInsetBottom={16}
      addAdditionalInsetTop={13}
    >
      <View className="flex-1">
        <ProgressBar initialProgress={0} withDelay={500} progress={5} />
        <Text
          allowFontScaling={false}
          className="text-[30px] sm-1:text-[36px] text-primary-blue-100 text-left mt-10 mb-24 font-jokkerl"
        >
          {t("email-verification.whats-your-email")}
        </Text>
        <View className="w-full flex flex-row items-center justify-center pb-1 border-b mb-4 border-primary-blue-100">
          <TextInput
            ref={emailInputRef}
            onChangeText={setEmail}
            className="w-full text-[16px] h-8 font-extralight font-jokkerl"
            value={email}
            placeholder={t("email-verification.email")}
            autoCapitalize="none"
            keyboardType="email-address"
            autoCorrect={false}
            onSubmitEditing={validateEmail}
            focusable
            returnKeyType="next"
            returnKeyLabel="Next"
          />
        </View>
        <Text
          allowFontScaling={false}
          className="text-base w-full text-primary-blue-100 text-left mb-6 font-jokkerr tracking-tighter leading-6"
        >
          {t("email-verification.email-verify")}
        </Text>
        <Alert
          text={
            <View className="flex flex-row items-start">
              <Toggle
                className="mr-2"
                variant="checkbox"
                value={emailCommunication}
                onValueChange={(newValue) => setEmailCommunication(newValue)}
              />

              <Alert.Text className="flex-1">
                {t("email-verification.subscribe-mailing-list")}
              </Alert.Text>
            </View>
          }
        />
      </View>
      <View className="items-end">
        <DynamicButton
          onPress={() => validateEmail()}
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
          disabled={!isEmailValid}
          isLoading={isLoading}
        />
      </View>
    </SafeArea>
  );
}
