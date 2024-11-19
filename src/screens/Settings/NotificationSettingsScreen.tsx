import React from "react";
import { View, Text, Pressable } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import dayjs from "dayjs";

// Set Redux Dispatch
import { useSelector } from "react-redux";

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

export default function NotificationSettingsScreen({ navigation }: Props) {
  // Mount Localization
  const { t } = useTranslation();
  // Get user
  const user = JSON.parse(useSelector((state: RootState) => state.auth.user));

  return (
    <SafeAreaComponent testID="NotificationSettings" isPressable relative>
      <View className="w-full mt-2">
        <Pressable
          className="w-full"
          onPress={() => navigation.navigate("DailyReflectionReminderScreen")}
        >
          <Text
            allowFontScaling={false}
            className="text-[18px] font-jokkerl -tracking-wide w-full text-left mt-4"
          >
            {t("notifications-screen.daily-reflection-reminder")}
          </Text>
          {user.isDailyReflectionNotificationEnabled ? (
            <Text
              allowFontScaling={false}
              className="text-[16px] font-jokkerl -tracking-wide w-full text-left  mt-2"
            >
              Push, {user.dailyReflectionReminderFrequency},{" "}
              {dayjs(user.dailyReflectionNotificationTime).format("hh:mm A")}
            </Text>
          ) : (
            <Text
              allowFontScaling={false}
              className="text-[16px] font-jokkerl -tracking-wide w-full text-left  mt-2"
            >
              {t("general.off")}
            </Text>
          )}
        </Pressable>
      </View>
      <View className="w-full mt-4 border-t border-solid border-dark/20">
        <Pressable
          className="w-full"
          onPress={() => navigation.navigate("NewConnectionsReminderScreen")}
        >
          <Text
            allowFontScaling={false}
            className="text-[18px] font-jokkerl -tracking-wide w-full text-left mt-4"
          >
            {t("notifications-screen.new-connections")}
          </Text>
          <Text
            allowFontScaling={false}
            className="text-[16px] font-jokkerl -tracking-wide w-full text-left  mt-2"
          >
            Push:{" "}
            {user.isNewConnectionsNotificationPushActive
              ? t("general.on")
              : t("general.off")}
            , Email:{" "}
            {user.isNewConnectionsNotificationEmailActive
              ? t("general.on")
              : t("general.off")}
          </Text>
        </Pressable>
      </View>
      <View className="w-full mt-4 border-t border-solid border-dark/20">
        <Pressable
          className="w-full"
          onPress={() => navigation.navigate("NewMessagesScreen")}
        >
          <Text
            allowFontScaling={false}
            className="text-[18px] font-jokkerl -tracking-wide w-full text-left mt-4"
          >
            {t("notifications-screen.new-messages")}
          </Text>
          <Text
            allowFontScaling={false}
            className="text-[16px] font-jokkerl -tracking-wide w-full text-left  mt-2"
          >
            Push:{" "}
            {user.isNewMessagesNotificationEnabled
              ? t("general.on")
              : t("general.off")}
          </Text>
        </Pressable>
      </View>
    </SafeAreaComponent>
  );
}
