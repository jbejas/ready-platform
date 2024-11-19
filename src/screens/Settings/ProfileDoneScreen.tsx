import { View, Text, Pressable } from "react-native";
import { NavigationProp, StackActions } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";

// Localization
import { useTranslation } from "react-i18next";

// Icons
import { IconX } from "@tabler/icons-react-native";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

export default function ProfileDoneScreen({ navigation }: Props) {
  // Mount Localization
  const { t } = useTranslation();

  const goToDashboard = () => {
    const popAction = StackActions.pop(31);
    navigation.dispatch(popAction);
  };

  const goToContent = () => {
    const popAction = StackActions.pop(31);
    navigation.dispatch(popAction);
    setTimeout(() => {
      navigation.navigate("LearnScreen");
    }, 100);
  };

  return (
    <SafeAreaComponent testID="ProfileComplete" relative>
      <View className="h-full w-full flex flex-col items-start justify-start">
        <View className="w-full h-12 flex flex-row items-start justify-end">
          <Pressable
            onPress={() => goToDashboard()}
            className="w-8 h-8 rounded-full bg-dark/20 flex items-center justify-center"
          >
            <IconX width={27} height={27} color="#000" strokeWidth={1} />
          </Pressable>
        </View>
        <Text
          allowFontScaling={false}
          className="text-[44px] text-dark text-left font-jokkerl w-full -tracking-widest"
        >
          {t("profile-done.title")}
        </Text>
        <Text
          allowFontScaling={false}
          className="text-[16px] text-dark text-left mt-6 font-jokkerl w-full -tracking-wide leading-[25px]"
        >
          {t("profile-done.subtitle")}
        </Text>
        <View className="w-screen absolute bottom-0 left-0 -ml-6">
          <DynamicButton
            onPress={() => goToContent()}
            type={"full-transparent"}
            label={t("general.explore-content")}
            size="large"
            rounded={"2xl"}
            position="none"
            textColor="dark"
            loaderColor="#000"
            textStyles="text-base"
          />
          <DynamicButton
            onPress={() => goToDashboard()}
            type={"full-transparent"}
            label={t("general.go-to-my-dashboard")}
            size="large"
            rounded={"2xl"}
            position="none"
            textColor="dark"
            loaderColor="#000"
            textStyles="text-base underline"
            customStyles="mt-4 border-0"
          />
        </View>
      </View>
    </SafeAreaComponent>
  );
}
