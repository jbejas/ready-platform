import React, { useState, useEffect } from "react";
import { View, Text, Switch } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";

// Amplify Utils
import { updateUser } from "@utils/amplifyUtils";

// Set Redux Dispatch
import { useDispatch, useSelector } from "react-redux";
// Redux
import { setUser } from "@store/auth/authSlice";

// Localization
import { useTranslation } from "react-i18next";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

// Define the state structure
interface RootState {
  auth: {
    user: string;
  };
}

export default function MatchingPreferencesScreen({ navigation }: Props) {
  // Mount Localization
  const { t } = useTranslation();
  // Mount Redux dispatch
  const dispatch = useDispatch();

  // Get user
  const user = JSON.parse(useSelector((state: RootState) => state.auth.user));

  // Constants
  const [isMessagesViaPushEnabled, setIsMessagesViaPushEnabled] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleMessagesViaPushState = () => {
    setIsMessagesViaPushEnabled(!isMessagesViaPushEnabled);
  };

  const saveNewMessagesState = async () => {
    try {
      setIsLoading(true);
      const updatedUser = await updateUser(user.id, {
        isNewMessagesNotificationEnabled: String(isMessagesViaPushEnabled),
      });
      await dispatch(setUser(updatedUser));
      navigation.goBack();
      setIsLoading(false);
    } catch (error) {
      console.log("saveNewConnectionsReminder Error: ", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsMessagesViaPushEnabled(user.isNewMessagesNotificationEnabled);
  }, []);

  return (
    <SafeAreaComponent testID="NewMessages" relative>
      <View className="w-full flex flex-col items-center justify-start">
        <Text
          allowFontScaling={false}
          className="text-[24px] font-jokkerl -tracking-wide w-full text-left mt-4"
        >
          {t("new-messages-screen.subtitle")}
        </Text>
        <Text
          allowFontScaling={false}
          className="text-[16px] font-jokkerl -tracking-wide w-full text-left  mt-4"
        >
          {t("new-messages-screen.description")}
        </Text>
      </View>
      <View className="w-full flex flex-row items-center justify-between mt-6 border-b border-solid border-dark/20 pb-4">
        <View>
          <Text
            allowFontScaling={false}
            className="text-[18px] font-jokkerl -tracking-wide text-left"
          >
            {t("new-messages-screen.messages-via-push")}
          </Text>
        </View>
        <Switch
          trackColor={{ false: "#E8E8E8", true: "#B8B4AC" }}
          thumbColor={isMessagesViaPushEnabled ? "#FFFFFF" : "#FFFFFF"}
          ios_backgroundColor="#FCFCFC"
          onValueChange={() => toggleMessagesViaPushState()}
          value={isMessagesViaPushEnabled}
        />
      </View>
      <View className="absolute w-screen bottom-8 px-6 left-0 flex flex-col items-center justify-center">
        <DynamicButton
          onPress={() => saveNewMessagesState()}
          type={"primary"}
          label={t("general.done")}
          size="large"
          rounded={"2xl"}
          position="none"
          textStyles="text-base"
          isLoading={isLoading}
        />
      </View>
    </SafeAreaComponent>
  );
}
