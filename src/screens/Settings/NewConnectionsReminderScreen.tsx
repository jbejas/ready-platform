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
  const [isConnectionsViaPushEnabled, setIsConnectionsViaPushEnabled] =
    useState<boolean>(false);
  const [isConnectionsViaEmailEnabled, setIsConnectionsViaEmailEnabled] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleConnectionsViaPushState = () => {
    setIsConnectionsViaPushEnabled(!isConnectionsViaPushEnabled);
  };

  const toggleConnectionsViaEmailState = () => {
    setIsConnectionsViaEmailEnabled(!isConnectionsViaEmailEnabled);
  };

  const saveNewConnectionsReminder = async () => {
    try {
      setIsLoading(true);
      const updatedUser = await updateUser(user.id, {
        isNewConnectionsNotificationPushActive: isConnectionsViaPushEnabled,
        isNewConnectionsNotificationEmailActive: isConnectionsViaEmailEnabled,
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
    setIsConnectionsViaPushEnabled(user.isNewConnectionsNotificationPushActive);
    setIsConnectionsViaEmailEnabled(
      user.isNewConnectionsNotificationEmailActive,
    );
  }, []);

  return (
    <SafeAreaComponent testID="NewConnectionsReminder" relative>
      <View className="w-full flex flex-col items-center justify-start">
        <Text
          allowFontScaling={false}
          className="text-[16px] font-jokkerl -tracking-wide w-full text-left mt-4"
        >
          {t("new-connections-reminder-screen.subtitle")}
        </Text>
        <Text
          allowFontScaling={false}
          className="text-[16px] font-jokkerl -tracking-wide w-full text-left  mt-4"
        >
          {t("new-connections-reminder-screen.description")}
        </Text>
      </View>
      <View className="w-full flex flex-row items-center justify-between mt-6 border-b border-solid border-dark/20 pb-4">
        <View>
          <Text
            allowFontScaling={false}
            className="text-[18px] font-jokkerl -tracking-wide text-left"
          >
            {t("new-connections-reminder-screen.matches-via-push")}
          </Text>
          <Text
            allowFontScaling={false}
            className="text-[16px] font-jokkerl -tracking-wide text-left "
          >
            {t("new-connections-reminder-screen.matches-via-push-description")}
          </Text>
        </View>
        <Switch
          trackColor={{ false: "#E8E8E8", true: "#B8B4AC" }}
          thumbColor={isConnectionsViaPushEnabled ? "#FFFFFF" : "#FFFFFF"}
          ios_backgroundColor="#FCFCFC"
          onValueChange={() => toggleConnectionsViaPushState()}
          value={isConnectionsViaPushEnabled}
        />
      </View>
      <View className="w-full flex flex-row items-center justify-between mt-4 border-b border-solid border-dark/20 pb-4">
        <View>
          <Text
            allowFontScaling={false}
            className="text-[18px] font-jokkerl -tracking-wide text-left"
          >
            {t("new-connections-reminder-screen.matches-via-email")}
          </Text>
          <Text
            allowFontScaling={false}
            className="text-[16px] font-jokkerl -tracking-wide text-left "
          >
            {t("new-connections-reminder-screen.matches-via-email-description")}
          </Text>
        </View>
        <Switch
          trackColor={{ false: "#E8E8E8", true: "#B8B4AC" }}
          thumbColor={isConnectionsViaEmailEnabled ? "#FFFFFF" : "#FFFFFF"}
          ios_backgroundColor="#FCFCFC"
          onValueChange={() => toggleConnectionsViaEmailState()}
          value={isConnectionsViaEmailEnabled}
        />
      </View>
      <View className="absolute w-screen bottom-8 px-6 left-0 flex flex-col items-center justify-center">
        <DynamicButton
          onPress={() => saveNewConnectionsReminder()}
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
