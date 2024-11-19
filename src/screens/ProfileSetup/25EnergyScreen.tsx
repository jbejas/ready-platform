import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";
import HorizontalQuestionsCheckbox from "@src/components/HorizontalQuestionsCheckbox/HorizontalQuestionsCheckbox";

// Constants
import { BASIC_INFO_TOTAL_STEPS } from "@constants/constants";

// Amplify Utils
import { createEnergyUser, updateUser } from "@utils/amplifyUtils";
// Redux
import { setUser } from "@store/auth/authSlice";

// Localization
import { useTranslation } from "react-i18next";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

// Redux Root State
interface RootState {
  auth: {
    user: string;
  };
}

export default function EnergyScreen({ navigation }: Props) {
  // Mount Localization
  const { t } = useTranslation();
  // Mount Redux dispatch
  const dispatch = useDispatch();

  // Get user ID
  const user = JSON.parse(useSelector((state: RootState) => state.auth.user));

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<
    { id?: string; name: string; isActive?: boolean }[]
  >([]);
  const [responses, setResponses] = useState<
    { id?: string; name: string; isActive?: boolean }[]
  >([
    {
      id: "Friendships",
      name: "Friendships",
    },
    {
      id: "Personal Growth",
      name: "Personal Growth",
    },
    {
      id: "Inner Peace",
      name: "Inner Peace",
    },
    {
      id: "Work",
      name: "Work",
    },
    {
      id: "Exercise",
      name: "Exercise",
    },
    {
      id: "Service",
      name: "Service",
    },
  ]);

  const processUserValue = async () => {
    try {
      setIsLoading(true);
      const userId = user.id;
      await createEnergyUser(userId, selectedValue);
      const updatedUser = await updateUser(user.id, {
        onboardingStep: 5,
      });
      await dispatch(setUser(updatedUser));
      navigation.navigate("GenderScreen", {
        isEditing: false,
        existingValue: false,
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("processUserValue Error: ", error);
    }
  };

  return (
    <SafeAreaComponent testID="Energy" relative>
      <View className="h-full w-full left-0 flex flex-col items-center justify-start">
        <Text
          allowFontScaling={false}
          className="text-[19px]  text-dark text-left mt-8 font-jokkerl w-full -tracking-widest"
        >
          4/{BASIC_INFO_TOTAL_STEPS}
        </Text>
        <Text
          allowFontScaling={false}
          className="text-[30px] sm-1:text-[36px] text-dark text-left mt-2 font-jokkerl w-full -tracking-widest"
        >
          {t("energy-screen.title")}
        </Text>
        <Text
          allowFontScaling={false}
          className="text-[16px]  text-dark text-left mb-6 font-jokkerl w-full -tracking-wide"
        >
          {t("energy-screen.subtitle")}
        </Text>
        <HorizontalQuestionsCheckbox
          data={responses}
          onSelectValue={(value) => setSelectedValue(value)}
        />
      </View>
      <View className="absolute w-screen px-6 bottom-12 left-0 flex flex-row items-center justify-end">
        <DynamicButton
          onPress={() => processUserValue()}
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
          isLoading={isLoading}
          disabled={!selectedValue || !selectedValue.length}
        />
      </View>
    </SafeAreaComponent>
  );
}
