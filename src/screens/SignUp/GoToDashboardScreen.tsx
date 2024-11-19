import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";

// Segment
import { useAnalytics } from "@segment/analytics-react-native";

// Redux
import { setIsUserOnboarded } from "@store/signUp/signUpSlice";
import { setUser } from "@store/auth/authSlice";

// Amplify
import { updateUser } from "@utils/amplifyUtils";

// Localization
import { useTranslation } from "react-i18next";

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
  // Segment
  const { track } = useAnalytics();

  // Get user ID
  const userId = useSelector((state: RootState) => state.auth.userId);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const goToYouPage = async () => {
    setIsLoading(true);
    const updatedUser = await updateUser(userId, {
      isSignUpComplete: true,
    });
    track("User onboarded");
    await dispatch(setUser(updatedUser));
    await dispatch(setIsUserOnboarded(true));
  };

  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <SafeAreaComponent testID="GoToDashboard" relative>
      <Text
        allowFontScaling={false}
        className="text-[36px] w-full font-jokkerl"
      >
        {t("go-to-dashboard.title")}
      </Text>
      <View className="absolute w-screen bottom-12 left-0 flex items-end justify-end">
        <DynamicButton
          onPress={() => goToYouPage()}
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
          isLoading={isLoading}
        />
      </View>
    </SafeAreaComponent>
  );
}
