import React, { useState, useRef, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";
import PasswordStrengthMeterBar from "react-native-password-strength-meter-bar";

// Redux
import { useSelector } from "react-redux";
import { setUserTempPassword } from "@store/signUp/signUpSlice";
// Set Redux Dispatch
import { useDispatch } from "react-redux";

// Localization
import { useTranslation } from "react-i18next";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

// Define the state structure
interface RootState {
  signup: {
    userEmail: string;
  };
  keyboard: {
    isKeyboardVisible: boolean;
  };
}

export default function UserPasswordScreen({ navigation }: Props) {
  // Mount Redux dispatch
  const dispatch = useDispatch();

  // Mount Localization
  const { t } = useTranslation();
  const passwordInputRef = useRef<TextInput>(null);

  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [doPasswordsMatch, setDoPasswordsMatch] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Get keyboard state
  const isKeyboardVisible = useSelector(
    (state: RootState) => state.keyboard.isKeyboardVisible,
  );

  // Validate password to enable continue button.
  useEffect(() => {
    const passwordRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (password && passwordRegex.test(password)) {
      setIsPasswordValid(true);
      return;
    }
    setIsPasswordValid(false);
  }, [password]);

  const validatePasswords = () => {
    try {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
      if (!passwordRegex.test(password)) {
        setIsPasswordValid(false);
        return;
      }
      if (password !== repeatPassword) {
        setDoPasswordsMatch(false);
        return;
      }
      setDoPasswordsMatch(true);
      setIsPasswordValid(true);
    } catch (error) {
      console.log("Error validating Passwords", error);
    }
  };

  useEffect(() => {
    validatePasswords();
  }, [password, repeatPassword]);

  const validatePassword = async () => {
    try {
      setIsLoading(true);
      dispatch(setUserTempPassword(password));
      navigation.navigate("UserPhoneNumberScreen");
    } catch (error) {
      setIsLoading(false);
      console.log("error signing up:", error);
    }
  };

  return (
    <SafeAreaComponent testID="UserPassword" isPressable relative>
      {/* <Steps step={2} /> */}
      <Text
        allowFontScaling={false}
        className="text-4xl font-bold text-dark text-center my-16 font-jokkerl"
      >
        {t("user-password.title")}
      </Text>
      <View className="w-full flex flex-row items-center justify-center bg-white px-4 py-3 rounded-xl border mb-4 border-slate7">
        <TextInput
          ref={passwordInputRef}
          onChangeText={setPassword}
          className="w-full text-xl h-10 -mt-2"
          value={password}
          placeholder={t("user-password.password")}
          autoCapitalize="none"
          secureTextEntry={true}
          autoCorrect={false}
        />
      </View>
      <View className="w-full flex flex-row items-center justify-center bg-white px-4 py-3 rounded-xl border mb-4 border-slate7">
        <TextInput
          ref={passwordInputRef}
          onChangeText={setRepeatPassword}
          className="w-full text-xl h-10 -mt-2"
          value={repeatPassword}
          placeholder={t("user-password.repeat-password")}
          autoCapitalize="none"
          secureTextEntry={true}
          autoCorrect={false}
        />
      </View>
      <PasswordStrengthMeterBar password={password} />
      {!isPasswordValid && (
        <View className="w-full flex flex-row items-center justify-between myDL-4">
          <Text
            allowFontScaling={false}
            className="w-full text-center text-base text-red"
          >
            {t("user-password.password-invalid")}
          </Text>
        </View>
      )}
      {!doPasswordsMatch && (
        <View className="w-full flex flex-row items-center justify-between">
          <Text
            allowFontScaling={false}
            className="w-full text-center text-base text-red"
          >
            {t("user-password.passwords-dont-match")}
          </Text>
        </View>
      )}
      <View
        className={`${
          isKeyboardVisible ? "absolute -bottom-96" : "absolute bottom-12"
        } w-screen px-4 left-0 flex flex-col items-center justify-between`}
      >
        <DynamicButton
          onPress={validatePassword}
          type={"primary"}
          label={t("general.continue")}
          size="large"
          iconPosition="right"
          icon={"arrow-right"}
          iconSize={30}
          rounded="full"
          position="none"
          textStyles="text-base"
          disabled={!isPasswordValid}
          isLoading={isLoading}
        />
      </View>
    </SafeAreaComponent>
  );
}
