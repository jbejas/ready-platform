import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";

// Localization
import { useTranslation } from "react-i18next";

// Utils
import { getDailySparks } from "@utils/amplifyUtils";

// Icons
import ConnectIcon from "@assets/icons/connections.svg";
import Chat from "@assets/icons/chat.svg";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

export default function HowMatchesWorkOneScreen({ navigation }: Props) {
  const { t } = useTranslation();

  const [dailySparks, setDailySparks] = useState<string>("");

  const goToFirstReflectionScreen = () => {
    navigation.navigate("HowMatchesWorkTwoScreen", {
      dailySparks,
    });
  };

  const getUserDailySparks = async () => {
    const dailySparksNumber = await getDailySparks();
    setDailySparks(dailySparksNumber);
  };

  useEffect(() => {
    getUserDailySparks();
  }, []);

  return (
    <SafeAreaComponent
      testID="HowMatchesWorkOne"
      relative
      customClasses="!bg-card"
    >
      <View className="h-full w-full bottom-12 left-0 flex flex-col items-center justify-start">
        <Text
          allowFontScaling={false}
          className="text-[32px]  text-dark text-left mt-20 mb-12 font-jokkerl w-full -tracking-widest leading-10"
        >
          {t("how-matches-work-one.title")}{" "}
          <Text allowFontScaling={false} className="font-jokkerm">
            {t("how-matches-work-one.title1")}
          </Text>
        </Text>
        <View className="w-screen h-[120px] pl-6 flex flex-row items-center justify-start">
          <View className="bg-[#FBFBFB] w-10/12 h-full rounded-[8px] mr-[8px] flex flex-row items-start justify-start p-6">
            <View className="mr-6">
              <ConnectIcon width={30} height={20} strokeWidth={1} />
            </View>
            <View className="w-10/12 pr-6">
              <Text
                allowFontScaling={false}
                className="text-[18px] font-jokkerm mb-2"
              >
                {t("how-matches-work-one.you-have-new-matches")}
              </Text>
              <Text
                allowFontScaling={false}
                className="text-[16px] font-jokkerl"
              >
                {t("how-matches-work-one.view-matches")}
              </Text>
            </View>
          </View>
          <View className="bg-[#FBFBFB] w-10/12 h-full rounded-[8px] mr-[8px] flex flex-row items-start justify-start p-6">
            <View className="mr-6">
              <Chat width={30} height={20} strokeWidth={1} />
            </View>
          </View>
        </View>
      </View>
      <View className="absolute w-screen pr-8 bottom-12 left-0 flex flex-row items-center justify-end">
        <DynamicButton
          onPress={() => goToFirstReflectionScreen()}
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
    </SafeAreaComponent>
  );
}
