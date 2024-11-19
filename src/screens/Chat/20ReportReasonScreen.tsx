import { useState, useEffect } from "react";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { View, Text } from "react-native";
import DynamicButton from "@components/DynamicButton/DynamicButton";
import HorizontalQuestionsRadio from "@src/components/HorizontalQuestionsRadio/HorizontalQuestionsRadio";

// Localization
import { useTranslation } from "react-i18next";

// Define the props type for your navigation stack
type Props = {
  route: RouteProp<any>;
  navigation: NavigationProp<any>;
};

const UnmatchReasonScreen = ({ route, navigation }: Props) => {
  // Mount Localization
  const { t } = useTranslation();

  const { userName, chatChannelId, chatChannelCid } = route.params;

  const [selectedValue, setSelectedValue] = useState<{
    id: string;
    name: string;
    isActive: boolean;
  }>();
  const [responses, setResponses] = useState<
    { id: string; name: string; isActive: boolean }[]
  >([]);

  const existingResponses = [
    {
      id: "1",
      isActive: true,
      name: "Inappropriate photos",
    },
    {
      id: "2",
      isActive: true,
      name: "Spam or scam",
    },
    {
      id: "3",
      isActive: true,
      name: "Abusive or harmful behavior",
    },
    {
      id: "4",
      isActive: true,
      name: "Underage user",
    },
    {
      id: "4",
      isActive: true,
      name: "Fake profile",
    },
    {
      id: "6",
      isActive: true,
      name: "Other concern",
    },
  ];

  const goToReportDetailsScreen = () => {
    navigation.navigate("ReportDetailsScreen", {
      userName,
      selectedValue,
      chatChannelId,
      chatChannelCid,
    });
  };

  useEffect(() => {
    setResponses(existingResponses);
  }, []);

  return (
    <View
      testID="ReportReason"
      className="bg-gradient-start w-full h-full pb-10 relative"
    >
      <View className="w-full absolute top-36 left-0 px-6">
        <Text
          allowFontScaling={false}
          className="text-[36px] font-jokkerl -tracking-widest mb-8"
        >
          {t("report-reason-screen.title", { userName })}
        </Text>
        {/* <Text
          allowFontScaling={false}
          className="text-[16px] font-jokkerl -tracking-wide my-4"
        >
          {t("report-reason-screen.subtitle")}
        </Text> */}
        <HorizontalQuestionsRadio
          isFullWidth={true}
          responses={responses}
          onPress={(value) => setSelectedValue(value)}
        />
      </View>
      <View className="absolute w-screen px-6 bottom-12 left-0 flex flex-row items-center justify-end">
        <DynamicButton
          onPress={() => goToReportDetailsScreen()}
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
          disabled={!selectedValue}
        />
      </View>
    </View>
  );
};

export default UnmatchReasonScreen;
