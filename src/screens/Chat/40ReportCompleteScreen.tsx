import {
  NavigationProp,
  RouteProp,
  StackActions,
} from "@react-navigation/native";
import { View, Text } from "react-native";
import DynamicButton from "@components/DynamicButton/DynamicButton";

// Segment
import { useAnalytics } from "@segment/analytics-react-native";

// Images
import WavyLine2 from "@assets/images/wavy-line-2.svg";

// Localization
import { useTranslation } from "react-i18next";

// Define the props type for your navigation stack
type Props = {
  route: RouteProp<any>;
  navigation: NavigationProp<any>;
};

const UnmatchCompleteScreen = ({ route, navigation }: Props) => {
  // Mount Localization
  const { t } = useTranslation();
  // Segment
  const { track } = useAnalytics();

  const goToChatScreen = async () => {
    track("Unmatched and reported");
    const popAction = StackActions.pop(6);
    navigation.dispatch(popAction);
  };

  return (
    <View
      testID="ReportComplete"
      className="bg-gradient-start w-full h-full pb-10 relative"
    >
      <View className="w-full absolute top-48 left-0 px-6">
        <View className="w-full flex items-start justify-center">
          <WavyLine2 width={176} height={100} />
        </View>
        <Text
          allowFontScaling={false}
          className="text-[36px] font-jokkerl  -tracking-widest"
        >
          {t("report-complete-screen.title")}
        </Text>
      </View>
      <View className="absolute w-screen px-6 bottom-12 left-0 flex flex-row items-center justify-end">
        <DynamicButton
          onPress={() => goToChatScreen()}
          type={"icon"}
          size="large"
          iconPosition="right"
          icon={"chevron-right"}
          iconSize={30}
          showBgImage
          iconColor="black"
          loaderColor="#000"
          rounded="full"
          position="none"
          textStyles="text-base"
        />
      </View>
    </View>
  );
};

export default UnmatchCompleteScreen;
