import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text } from "react-native";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";
import HorizontalQuestionsCheckbox from "@src/components/HorizontalQuestionsCheckbox/HorizontalQuestionsCheckbox";

// Amplify Utils
import { updateUser } from "@utils/amplifyUtils";

// Localization
import { useTranslation } from "react-i18next";
// Redux
import { setUser } from "@store/auth/authSlice";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
};

// Redux Root State
interface RootState {
  auth: {
    user: string;
  };
}

export default function MentalHealthScreen({ navigation, route }: Props) {
  // Mount Localization
  const { t } = useTranslation();
  // Mount Redux dispatch
  const dispatch = useDispatch();
  // Route params
  const { isEditing } = route.params;

  // Get user ID
  const user = JSON.parse(useSelector((state: RootState) => state.auth.user));

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<
    { id?: string; name: string; isActive?: boolean }[]
  >([]);
  const [responses, setResponses] = useState<
    { id: string; name: string; isActive?: boolean }[]
  >([
    {
      id: "Boundaries",
      name: "Boundaries",
    },
    {
      id: "Meditation",
      name: "Meditation",
    },
    {
      id: "Therapy",
      name: "Therapy",
    },
    {
      id: "Journaling",
      name: "Journaling",
    },
    {
      id: "Exercise",
      name: "Exercise",
    },
    {
      id: "Prefer not to share",
      name: "Prefer not to share",
    },
  ]);

  const processUserValue = async () => {
    try {
      setIsLoading(true);
      const mentalHealthItems = selectedValue
        .map((item) => item.name)
        .join(", ");
      const updatedUser = await updateUser(user.id, {
        mentalHealth: mentalHealthItems,
        onboardingStep: 3,
      });
      await dispatch(setUser(updatedUser));
      if (isEditing) {
        navigation.goBack();
      } else {
        navigation.navigate("QualityScreen");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("processUserValue Error: ", error);
    }
  };

  return (
    <SafeAreaComponent testID="MentalHealth" relative>
      <View className="h-full w-full left-0 flex flex-col items-center justify-start">
        <Text
          allowFontScaling={false}
          className="text-[36px]  text-dark text-left mt-2 mb-6 font-jokkerl w-full -tracking-widest"
        >
          {t("mental-health-screen.title")}
        </Text>
        <Text
          allowFontScaling={false}
          className="text-[16px]  text-dark text-left mb-6 font-jokkerl w-full -tracking-wide"
        >
          {t("mental-health-screen.subtitle")}
        </Text>
        <HorizontalQuestionsCheckbox
          data={responses}
          existingValues={user?.mentalHealth}
          onSelectValue={(value) => setSelectedValue(value)}
        />
      </View>
      <View
        className={`${
          isEditing ? "flex-col" : "flex-row px-6"
        } absolute w-screen bottom-12 left-0 flex items-center justify-between`}
      >
        {isEditing ? (
          <DynamicButton
            testID="Landing.Modal.ImDone"
            onPress={() => processUserValue()}
            type={"full-transparent"}
            label={t("general.save")}
            size="large"
            rounded={"2xl"}
            position="none"
            textStyles="text-base"
            textColor="dark"
            loaderColor="#000"
            isLoading={isLoading}
            disabled={!selectedValue || !selectedValue.length}
          />
        ) : (
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
        )}
      </View>
    </SafeAreaComponent>
  );
}
