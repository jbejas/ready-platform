import { NavigationProp } from "@react-navigation/native";
import InterstitialScreen from "@src/components/InterstitialScreen";
import { useTranslation } from "react-i18next";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

export default function SecondProfileSetupScreen({ navigation }: Props) {
  const { t } = useTranslation();

  return (
    <InterstitialScreen
      testID="SecondProfileSetup"
      text={t("setup-2-screen.title")}
      onPress={() => navigation.navigate("GenderScreen", { isEditing: false })}
    />
  );
}
