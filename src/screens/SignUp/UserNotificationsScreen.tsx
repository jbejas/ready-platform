import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, Image } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";

// Dayjs
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

// OneSignal
import { OneSignal } from "react-native-onesignal";

// Amplify
import { updateUser } from "@utils/amplifyUtils";

// Redux
import { setUser } from "@store/auth/authSlice";

// Localization
import { useTranslation } from "react-i18next";

dayjs.extend(utc);

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

// Define the state structure
interface RootState {
  auth: {
    userId: string;
  };
}

export default function NotificationsScreen({ navigation }: Props) {
  // Mount Localization
  const { t } = useTranslation();
  // Mount Redux dispatch
  const dispatch = useDispatch();

  // Get user ID
  const userId = useSelector((state: RootState) => state.auth.userId);

  const [areNotificationsProcessed, setAreNotificationsProcessed] =
    useState<boolean>(false);

  const enableNotifications = async () => {
    const UTCTime = dayjs()
      .utc()
      .startOf("day")
    let notificationsStatus = false;
    await OneSignal.Notifications.requestPermission(true);
    const notificationsState =
      await OneSignal.Notifications.getPermissionAsync();
    if (notificationsState) {
      notificationsStatus = true;
      setAreNotificationsProcessed(true);
      const updatedUser = await updateUser(userId, {
        isNewMessagesNotificationEnabled: notificationsStatus,
        isNewConnectionsNotificationPushActive: notificationsStatus,
        isDailyReflectionNotificationEnabled: notificationsStatus,
        dailyReflectionNotificationTime: UTCTime,
        dailyReflectionReminderFrequency: "daily",
      });
      await dispatch(setUser(updatedUser));
    }
  };

  const goToDashboardScreen = async () => {
    navigation.navigate("GoToDashboardScreen");
  };

  useEffect(() => {
    const checkNotificationsPermissions = async () => {
      const notificationsState =
        await OneSignal.Notifications.getPermissionAsync();
      if (notificationsState) {
        setAreNotificationsProcessed(true);
      }
    };
    checkNotificationsPermissions();
  }, []);

  return (
    <SafeAreaComponent testID="UserNotifications" relative>
      <Text
        allowFontScaling={false}
        className="text-[16px] w-full h-12 flex flex-row items-center justify-between font-jokkerl"
      >
        {t("notifications.enable-notifications")}
      </Text>
      <Text
        allowFontScaling={false}
        className="text-[36px] font-bold text-dark-gray mb-12 font-jokkerl"
      >
        {t("notifications.dont-miss-out")}
      </Text>
      <View className="w-full h-[80px] flex items-center justify-center">
        <Image
          source={require("@assets/images/notification.png")}
          resizeMode="contain"
          className="w-full"
        />
      </View>
      {areNotificationsProcessed ? (
        <View className="absolute w-screen bottom-12 left-0 flex items-end justify-end">
          <DynamicButton
            onPress={() => goToDashboardScreen()}
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
            customStyles="mr-6"
          />
        </View>
      ) : (
        <View className="absolute w-screen bottom-12 left-0 flex items-center justify-center">
          <DynamicButton
            onPress={() => enableNotifications()}
            label={t("notifications.turn-notifications-on")}
            type={"full-transparent-borderless"}
            size={"medium"}
            textStyles={"text-[14px] font-jokkerl"}
            textColor={"text-dark"}
            customStyles="border border-dark/40 rounded-[15px]"
          />
          <DynamicButton
            onPress={() => goToDashboardScreen()}
            label={t("notifications.skip")}
            type={"full-transparent-borderless"}
            size={"medium"}
            textStyles={"text-[14px] underline font-jokkerl"}
            textColor={"text-dark"}
          />
        </View>
      )}
    </SafeAreaComponent>
  );
}
