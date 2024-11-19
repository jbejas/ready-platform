import { NavigationProp, RouteProp } from "@react-navigation/native";
import { View, Text } from "react-native";
import DynamicButton from "@components/DynamicButton/DynamicButton";

// Localization
import { useTranslation } from "react-i18next";

// Define the props type for your navigation stack
type Props = {
  route: RouteProp<any>;
  navigation: NavigationProp<any>;
};

const UnmatchStepOneScreen = ({ route, navigation }: Props) => {
  // Mount Localization
  const { t } = useTranslation();

  const { userName, chatChannelId, chatChannelCid } = route.params;

  const goToReportReasonScreen = async () => {
    navigation.navigate("ReportReasonScreen", {
      userName,
      chatChannelId,
      chatChannelCid,
    });
  };

  return (
    <View
      testID="ReportStepOne"
      className="bg-gradient-start w-full h-full pb-10 relative"
    >
      <View className="w-full absolute top-48 left-0 px-6">
        <Text
          allowFontScaling={false}
          className="text-[16px] font-jokkerl -tracking-widest"
        >
          {t("report-step-one-screen.header", { userName })}
        </Text>
        <Text
          allowFontScaling={false}
          className="text-[36px] font-jokkerl -tracking-widest mt-4"
        >
          {t("report-step-one-screen.title", { userName })}
        </Text>
        {/* <Text
          allowFontScaling={false}
          className="text-[16px] font-jokkerl  -tracking-wide mt-4"
        >
          {t("report-step-one-screen.subtitle")}
        </Text> */}
      </View>
      <View className="absolute w-screen px-6 bottom-12 left-0 flex flex-row items-center justify-end">
        <DynamicButton
          onPress={() => goToReportReasonScreen()}
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
        />
      </View>
    </View>
  );
};

export default UnmatchStepOneScreen;