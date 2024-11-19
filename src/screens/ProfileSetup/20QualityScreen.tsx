import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text } from "react-native";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";
import HorizontalReflectionQuestionsScroll from "@components/HorizontalReflectionQuestionsScroll/HorizontalReflectionQuestionsScroll";

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

export default function QualityScreen({ navigation, route }: Props) {
  // Mount Localization
  const { t } = useTranslation();
  // Mount Redux dispatch
  const dispatch = useDispatch();
  // Route params
  const { isEditing } = route.params;

  // Get user ID
  const user = JSON.parse(useSelector((state: RootState) => state.auth.user));

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string | number>(
    "Patience"
  );
  const [responses, setResponses] = useState<{ value: string | null }[]>([
    { value: null },
  ]);

  const getValuesResponses = async () => {
    const values = [
      {
        value: "Patience",
      },
      {
        value: "Determination",
      },
      {
        value: "Inner peace",
      },
      {
        value: "Speaking your truth",
      },
      {
        value: "Balance",
      },
    ];
    setResponses(values);
  };

  useEffect(() => {
    getValuesResponses();
  }, []);

  const processUserValue = async () => {
    try {
      setIsLoading(true);
      const updatedUser = await updateUser(user.id, {
        quality: selectedValue,
        onboardingStep: 4,
      });
      await dispatch(setUser(updatedUser));
      if (isEditing) {
        navigation.goBack();
      } else {
        navigation.navigate("EnergyScreen");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("processUserValue Error: ", error);
    }
  };

  return (
    <SafeAreaComponent testID="QualityScreen" relative>
      <View className="h-full w-full left-0 flex flex-col items-center justify-start">
        <Text
          allowFontScaling={false}
          className="text-[30px] sm-1:text-[36px] text-dark text-left mt-2 font-jokkerl w-full -tracking-widest"
        >
          {t("quality-screen.title")}
        </Text>
        <HorizontalReflectionQuestionsScroll
          data={responses}
          existingValue={user?.quality}
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
          />
        )}
      </View>
    </SafeAreaComponent>
  );
}
