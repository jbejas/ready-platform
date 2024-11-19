import { NavigationProp } from "@react-navigation/native";
import InterstitialScreen from "@src/components/InterstitialScreen";
import { useTranslation } from "react-i18next";

type Props = {
  navigation: NavigationProp<any>;
};

export default function UserPhoneNumberScreen({ navigation }: Props) {
  const { t } = useTranslation();

  const goToEmailScreen = () => {
    navigation.navigate("UserEmailScreen");
  };

  return (
    <InterstitialScreen
      testID="ValueProp2"
      text={t("value-prop-screen-2.title")}
      onPress={() => goToEmailScreen()}
    />
  );
}
