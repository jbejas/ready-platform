import { NavigationProp } from "@react-navigation/native";
import InterstitialScreen from "@src/components/InterstitialScreen";
import { setUser } from "@store/auth/authSlice";
import { updateUser } from "@utils/amplifyUtils";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  navigation: NavigationProp<any>;
};

// Redux Root State
interface RootState {
  auth: {
    user: string;
  };
}

export default function ProfileCompleteScreen({ navigation }: Props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  // Get user ID
  const user = JSON.parse(useSelector((state: RootState) => state.auth.user));

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const goToUserPhotoScreen = async () => {
    try {
      setIsLoading(true);
      const updatedUser = await updateUser(user.id, {
        onboardingStep: 11,
      });
      await dispatch(setUser(updatedUser));
      navigation.navigate("UserPhotoScreen");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("goToMyProfileScreen error", error);
    }
  };

  return (
    <InterstitialScreen
      testID="ProfileComplete"
      text={t("profile-complete.title")}
      onPress={goToUserPhotoScreen}
      isLoading={isLoading}
    />
  );
}
