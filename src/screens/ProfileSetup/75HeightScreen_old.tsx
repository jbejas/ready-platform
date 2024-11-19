import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, Pressable } from "react-native";
import {
  NavigationProp,
  RouteProp,
  StackActions,
} from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";
import HorizontalQuestionsScroll from "@components/HorizontalQuestionsScroll/HorizontalQuestionsScroll";
import Checkbox from "expo-checkbox";
import CloseIcon from "@src/components/CloseIcon/CloseIcon";

// Constants
import { BASIC_INFO_TOTAL_STEPS } from "@constants/constants";

// Localization
import { useTranslation } from "react-i18next";

// Amplify Utils
import { updateUser } from "@utils/amplifyUtils";
import { sentryTracker } from "@utils/sentry";

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

export default function HeightScreen({ navigation, route }: Props) {
  // Mount Localization
  const { t } = useTranslation();
  // Mount Redux dispatch
  const dispatch = useDispatch();
  // Route params
  const { isEditing, existingValue } = route.params;

  // Get user ID
  const user = JSON.parse(useSelector((state: RootState) => state.auth.user));

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string | number>("5");
  const [responses, setResponses] = useState<
    { label?: string; value: string | number | null }[]
  >([]);
  const [isHeightVisible, setIsHeightVisible] = useState<boolean>(false);

  const goToProfileCompleteScreen = async () => {
    try {
      setIsLoading(true);
      const updatedUser = await updateUser(user.id, {
        height: Number(selectedValue),
        isHeightVisible,
        onboardingStep: 11,
      });
      await dispatch(setUser(updatedUser));
      if (isEditing) {
        navigation.goBack();
      } else {
        navigation.navigate("ProfileCompleteScreen");
      }
      setIsLoading(false);
    } catch (error) {
      console.log("Error goToReflectionQuoteScreen: ", error);
    }
  };

  const getValuesResponses = async () => {
    try {
      const startCm = 91; // 3 feet in cm
      const endCm = 213; // 7 feet in cm

      const heightArray = [];
      for (let cm = startCm; cm <= endCm; cm++) {
        const totalInches = cm / 2.54;
        const feet = Math.floor(totalInches / 12);
        const inches = Math.round(totalInches % 12);
        heightArray.push({
          label: `${feet}’${inches} (${cm}cm)`,
          value: cm,
        });
      }

      setResponses(heightArray);
      if (isEditing) {
        setSelectedValue(user.height);
      }
    } catch (error) {
      console.log("Error getValuesResponses: ", error);
      sentryTracker("HeightScreen", "Error generating height values", user);
    }
  };

  useEffect(() => {
    getValuesResponses();
    setIsHeightVisible(user?.isHeightVisible);
  }, []);

  useEffect(() => {
    try {
      if (!isEditing) {
        navigation.setOptions({
          headerRight: () => (
            <CloseIcon
              onPress={() => {
                const popAction = StackActions.pop(12);
                navigation.dispatch(popAction);
              }}
            />
          ),
        });
      }
    } catch (error) {
      console.log("Error useEffect isEditing Height Screen: ", error);
    }
  }, [navigation]);

  return (
    <SafeAreaComponent testID="Height" relative>
      {!isEditing ? (
        <Text
          allowFontScaling={false}
          className="text-[19px]  text-dark text-left mt-8 font-jokkerl w-full -tracking-widest"
        >
          8/{BASIC_INFO_TOTAL_STEPS}
        </Text>
      ) : null}
      <Text
        allowFontScaling={false}
        className="text-[36px]  text-dark text-left mt-2 font-jokkerl w-full -tracking-widest"
      >
        {t("height-screen.title")}
      </Text>
      <Text
        allowFontScaling={false}
        className="text-[16px]  text-dark text-left mb-6 font-jokkerl w-full -tracking-wide"
      >
        {t("height-screen.subtitle")}
      </Text>
      <HorizontalQuestionsScroll
        data={responses}
        existingValue={existingValue}
        onSelectValue={(value) => setSelectedValue(value)}
      />
      <View
        className={`${
          isEditing ? "flex-col" : "flex-row px-6"
        } absolute w-screen  bottom-12 left-0 flex  items-center justify-between`}
      >
        <View
          className={`${
            isEditing ? "mb-4 w-full px-6" : ""
          } flex flex-row items-start justify-start`}
        >
          <Pressable
            className="w-9/12 flex flex-row items-start justify-start"
            onPress={() => setIsHeightVisible(!isHeightVisible)}
          >
            <Checkbox
              className="mr-2"
              value={isHeightVisible}
              color={isHeightVisible ? "#24384D" : undefined}
              onValueChange={(newValue) => setIsHeightVisible(newValue)}
            />
            <Text
              allowFontScaling={false}
              className="text-[16px] font-jokkerl "
            >
              {t("general.visible-on-profile")}
            </Text>
          </Pressable>
        </View>
        {!isEditing ? (
          <View className="mr-3">
            <Pressable
              onPress={() => navigation.navigate("ProfileCompleteScreen")}
            >
              <Text allowFontScaling={false} className="underline font-jokkerl">
                {t("general.skip")}
              </Text>
            </Pressable>
          </View>
        ) : null}
        {isEditing ? (
          <DynamicButton
            testID="Landing.Modal.ImDone"
            onPress={() => goToProfileCompleteScreen()}
            type={"full-transparent"}
            label={t("general.save")}
            size="large"
            rounded={"2xl"}
            position="none"
            textStyles="text-base"
            textColor="dark"
            loaderColor="#000"
            disabled={!selectedValue}
            isLoading={isLoading}
          />
        ) : (
          <DynamicButton
            onPress={() => goToProfileCompleteScreen()}
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
            loaderColor="#000"
            disabled={!selectedValue}
            isLoading={isLoading}
          />
        )}
      </View>
    </SafeAreaComponent>
  );
}
