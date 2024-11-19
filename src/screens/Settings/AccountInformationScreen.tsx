import React, { useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";

// Set Redux Dispatch
import { useDispatch, useSelector } from "react-redux";

// Localization
import { useTranslation } from "react-i18next";

// Amplify Utils
import { updateUser } from "@utils/amplifyUtils";
// Redux
import { setUser } from "@store/auth/authSlice";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

// Define the state structure
interface RootState {
  auth: {
    user: string;
  };
  keyboard: {
    isKeyboardVisible: boolean;
  };
}

export default function AccountInformationScreen({ navigation }: Props) {
  // Mount Localization
  const { t } = useTranslation();
  // Mount Redux dispatch
  const dispatch = useDispatch();
  // Get user
  const user = JSON.parse(useSelector((state: RootState) => state.auth.user));
  // Get keyboard state
  const isKeyboardVisible = useSelector(
    (state: RootState) => state.keyboard.isKeyboardVisible,
  );

  // Constants
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);

  const updateUserEmail = async () => {
    setIsLoading(true);
    const updatedUser = await updateUser(user.id, {
      email,
      lastName,
    });
    await dispatch(setUser(updatedUser));
    navigation.goBack();
    setIsLoading(false);
  };

  // Validate email to enable continue button.
  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && emailRegex.test(email)) {
      setIsEmailValid(true);
      return;
    }
    setIsEmailValid(false);
  }, [email]);
  // Validate email to enable continue button.
  useEffect(() => {
    setEmail(user.email);
    setLastName(user.lastName);
  }, []);

  return (
    <SafeAreaComponent testID="AccountInformation" isPressable relative>
      <Text
        allowFontScaling={false}
        className="text-[18px] font-jokkerl -tracking-0.52px] w-full text-left mt-8"
      >
        {t("user-settings.account-name")}
      </Text>
      <View className="w-full flex flex-row items-center justify-center py-2 rounded-none border-b mb-4 mt-6 border-dark">
        <TextInput
          className="w-full text-xl font-jokkerl text-[18px] "
          value={user.firstName}
          editable={false}
          placeholder={t("user-name.first-name")}
        />
      </View>
      <View className="w-full flex flex-row items-center justify-center py-2 rounded-none border-b mb-4 border-dark">
        <TextInput
          className="w-full text-xl font-jokkerl text-[18px] h-[40px]"
          defaultValue={user.lastName}
          onChangeText={(e) => setLastName(e)}
          placeholder={t("user-name.last-name")}
        />
      </View>
      <Text
        allowFontScaling={false}
        className="text-[18px] font-jokkerl w-full text-left mt-8"
      >
        {t("user-settings.account-email")}
      </Text>
      <View className="w-full flex flex-row items-center justify-center py-2 rounded-none border-b mb-4 border-dark">
        <TextInput
          className="w-full text-xl  font-jokkerl text-[18px] "
          autoFocus
          onChangeText={setEmail}
          value={email}
          placeholder={t("user-settings.email")}
          autoCapitalize="none"
          keyboardType="email-address"
          autoCorrect={false}
        />
      </View>
      <View
        className={`${
          isKeyboardVisible ? "absolute -bottom-96" : "absolute bottom-12"
        } w-screen px-4 left-0 flex flex-col items-center justify-between`}
      >
        <DynamicButton
          onPress={() => updateUserEmail()}
          type={"primary"}
          label={t("general.done")}
          size="large"
          rounded={"2xl"}
          position="none"
          textStyles="text-base"
          disabled={!isEmailValid}
          isLoading={isLoading}
        />
      </View>
    </SafeAreaComponent>
  );
}
