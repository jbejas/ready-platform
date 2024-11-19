import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, Pressable } from "react-native";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";
import HorizontalQuestionsRadio from "@src/components/HorizontalQuestionsRadio/HorizontalQuestionsRadio";
import Checkbox from "expo-checkbox";

// Amplify Graph Queries
import { generateClient } from "aws-amplify/api";
import * as queries from "@graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import { ListDrinkPreferencesQuery } from "@src/api/index";

// Localization
import { useTranslation } from "react-i18next";

// Amplify Utils
import { updateUser } from "@utils/amplifyUtils";

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

export default function AlcoholScreen({ navigation, route }: Props) {
  // Mount Localization
  const { t } = useTranslation();
  // Mount Graphql API
  const API = generateClient();
  // Mount Redux dispatch
  const dispatch = useDispatch();
  // Route params
  const { isEditing } = route.params;

  // Get user ID
  const user = JSON.parse(useSelector((state: RootState) => state.auth.user));

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<{
    id: string;
    name: string;
    isActive: boolean;
  }>();
  const [responses, setResponses] = useState<
    { id: string; name: string; isActive: boolean }[]
  >([]);
  const [isDrinkPreferenceVisible, setIsDrinkPreferenceVisible] =
    useState<boolean>(false);

  const goToTherapyScreen = async () => {
    try {
      setIsLoading(true);
      const alcohol = responses.find((r) => r.name === selectedValue.name);
      const updatedUser = await updateUser(user.id, {
        drinkPreference: alcohol.name,
        isDrinkPreferenceVisible,
        onboardingStep: 23,
      });
      await dispatch(setUser(updatedUser));
      if (isEditing) {
        navigation.goBack();
      } else {
        navigation.navigate("TherapyScreen");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("Error goToReflectionQuoteScreen: ", error);
    }
  };

  const getAllDrinkPreferences = async () => {
    const allDrinkPreferences = await API.graphql<
      GraphQLQuery<ListDrinkPreferencesQuery>
    >({
      query: queries.listDrinkPreferences,
    });
    setResponses(
      allDrinkPreferences.data.listDrinkPreferences.items.map((item) => ({
        id: item.id || "",
        name: item.name,
        isActive: item.isActive,
      }))
    );
  };

  useEffect(() => {
    getAllDrinkPreferences();
    setSelectedValue(user?.drinkPreference);
    setIsDrinkPreferenceVisible(user?.isDrinkPreferenceVisible);
  }, []);

  return (
    <SafeAreaComponent testID="Alcohol" relative>
      <Text
        allowFontScaling={false}
        className="text-[36px]  text-dark text-left mt-8 mb-24 font-jokkerl w-full -tracking-widest"
      >
        {t("alcohol-screen.title")}
      </Text>
      <HorizontalQuestionsRadio
        responses={responses}
        existingValue={user?.drinkPreference}
        onPress={(response) => setSelectedValue(response)}
      />
      <View
        className={`${
          isEditing ? "flex-col" : "flex-row px-6"
        } absolute w-screen bottom-12 left-0 flex items-center justify-between`}
      >
        <View
          className={`${
            isEditing ? "w-full px-6 mb-4" : ""
          } flex flex-row items-start justify-start`}
        >
          <Pressable
            className="w-9/12 flex flex-row items-start justify-start"
            onPress={() =>
              setIsDrinkPreferenceVisible(!isDrinkPreferenceVisible)
            }
          >
            <Checkbox
              className="mr-2"
              value={isDrinkPreferenceVisible}
              color={isDrinkPreferenceVisible ? "#24384D" : undefined}
              onValueChange={(newValue) =>
                setIsDrinkPreferenceVisible(newValue)
              }
            />
            <Text
              allowFontScaling={false}
              className="text-[16px] font-jokkerl "
            >
              {t("general.visible-on-profile")}
            </Text>
          </Pressable>
        </View>
        {isEditing ? (
          <DynamicButton
            testID="Landing.Modal.ImDone"
            onPress={() => goToTherapyScreen()}
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
            onPress={() => goToTherapyScreen()}
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
            isLoading={isLoading}
          />
        )}
      </View>
    </SafeAreaComponent>
  );
}
