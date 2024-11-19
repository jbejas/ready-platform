import React, { useState, useEffect } from "react";
import { View, Text, Switch } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

// Amplify Utils
import { updateUser } from "@utils/amplifyUtils";

// Set Redux Dispatch
import { useDispatch, useSelector } from "react-redux";
// Redux
import { setUser } from "@store/auth/authSlice";

// Localization
import { useTranslation } from "react-i18next";

// Set dayjs libraries
dayjs.extend(utc);

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
  const [
    isDailyReflectionReminderEnabled,
    setIsDailyReflectionReminderEnabled,
  ] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<Date>(
    dayjs(user.dailyReflectionNotificationTime).toDate(),
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleReminderState = () => {
    console.log("Reminder State", isDailyReflectionReminderEnabled);
    setIsDailyReflectionReminderEnabled(!isDailyReflectionReminderEnabled);
  };

  const saveDailyReflectionReminder = async () => {
    try {
      setIsLoading(true);
      const UTCTime = dayjs(selectedTime).utc();
      const updatedUser = await updateUser(user.id, {
        isDailyReflectionNotificationEnabled: String(
          isDailyReflectionReminderEnabled,
        ),
        dailyReflectionNotificationTime: UTCTime,
        dailyReflectionReminderFrequency: "daily",
      });
      await dispatch(setUser(updatedUser));
      navigation.goBack();
      setIsLoading(false);
    } catch (error) {
      console.log("saveDailyReflectionReminder Error", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsDailyReflectionReminderEnabled(
      user.isDailyReflectionNotificationEnabled,
    );
  }, []);

  return (
    <SafeAreaComponent testID="DailyReflectionReminder" relative>
      <View className="w-full flex flex-col items-center justify-start">
        <Text
          allowFontScaling={false}
          className="text-[16px] font-jokkerl -tracking-wide w-full text-left mt-4"
        >
          {t("daily-reflection-reminder-screen.subtitle")}
        </Text>
        <Text
          allowFontScaling={false}
          className="text-[16px] font-jokkerl -tracking-wide w-full text-left  mt-4"
        >
          {t("daily-reflection-reminder-screen.description")}
        </Text>
      </View>
      <View className="w-full flex flex-row items-center justify-between mt-6">
        <Text
          allowFontScaling={false}
          className="text-[18px] font-jokkerl -tracking-wide text-left"
        >
          {t("daily-reflection-reminder-screen.daily-reflection-notification")}
        </Text>
        <Switch
          trackColor={{ false: "#E8E8E8", true: "#B8B4AC" }}
          thumbColor={isDailyReflectionReminderEnabled ? "#FFFFFF" : "#FFFFFF"}
          ios_backgroundColor="#FCFCFC"
          onValueChange={() => toggleReminderState()}
          value={isDailyReflectionReminderEnabled}
        />
      </View>
      {isDailyReflectionReminderEnabled ? (
        <>
          <View className="w-full mt-4 border-t border-solid border-dark/20">
            <Text
              allowFontScaling={false}
              className="text-[18px] font-jokkerl -tracking-wide w-full text-left mt-4"
            >
              {t("daily-reflection-reminder-screen.reminder-frequency")}
            </Text>
            <Text
              allowFontScaling={false}
              className="text-[16px] font-jokkerl -tracking-wide w-full text-left  mt-2"
            >
              Daily
            </Text>
          </View>
          <View className="w-full mt-4 border-t border-solid border-dark/20">
            <Text
              allowFontScaling={false}
              className="text-[18px] font-jokkerl -tracking-wide w-full text-left mt-4"
            >
              {t("daily-reflection-reminder-screen.reminder-time")}
            </Text>
            <RNDateTimePicker
              mode="time"
              minuteInterval={30}
              value={selectedTime}
              display="spinner"
              onChange={(e) =>
                setSelectedTime(dayjs(e.nativeEvent.timestamp).toDate())
              }
            />
          </View>
        </>
      ) : null}

      <View className="absolute w-screen bottom-8 px-6 left-0 flex flex-col items-center justify-center">
        <DynamicButton
          onPress={() => saveDailyReflectionReminder()}
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
