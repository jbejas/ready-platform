import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, Pressable } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";
import HorizontalQuestionsRadio from "@src/components/HorizontalQuestionsRadio/HorizontalQuestionsRadio";
import Checkbox from "expo-checkbox";

// Amplify Graph Queries
import { generateClient } from "aws-amplify/api";
import * as queries from "@graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import { ListExercisePreferencesQuery } from "@src/api/index";

// Redux Slices
import { setUser } from "@store/auth/authSlice";

// Localization
import { useTranslation } from "react-i18next";

// Amplify Utils
import { updateUser } from "@utils/amplifyUtils";

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

export default function ExerciseScreen({ navigation }: Props) {
  // Mount Localization
  const { t } = useTranslation();
  // Mount Graphql API
  const API = generateClient();
  // Mount Redux dispatch
  const dispatch = useDispatch();

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
  const [isExercisePreferenceVisible, setIsExercisePreferenceVisible] =
    useState<boolean>(false);

  const goToProfileCompleteScreen = async () => {
    try {
      setIsLoading(true);
      const exercise = responses.find((r) => r.name === selectedValue.name);
      const updatedUser = await updateUser(user.id, {
        exercisePreference: exercise.name,
        isExercisePreferenceVisible,
        onboardingStep: 25,
      });
      await dispatch(setUser(updatedUser));
      navigation.navigate("ProfileCompleteScreen");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("Error goToReflectionQuoteScreen: ", error);
    }
  };

  const getAllExercisePreferences = async () => {
    const allExercisePreferences = await API.graphql<
      GraphQLQuery<ListExercisePreferencesQuery>
    >({
      query: queries.listExercisePreferences,
      variables: {
        sort: {
          field: "sortOrder",
          direction: "asc",
        },
      },
    });
    setResponses(
      allExercisePreferences.data.listExercisePreferences.items.map((item) => ({
        id: item.id || "",
        name: item.name,
        isActive: item.isActive,
      }))
    );
  };

  useEffect(() => {
    getAllExercisePreferences();
  }, []);

  return (
    <SafeAreaComponent testID="Exercise" relative>
      <Text
        allowFontScaling={false}
        className="text-[36px]  text-dark text-left mt-8 mb-24 font-jokkerl w-full -tracking-widest"
      >
        {t("exercise-screen.title")}
      </Text>
      <HorizontalQuestionsRadio
        responses={responses}
        onPress={(response) => setSelectedValue(response)}
      />
      <View className="absolute w-screen px-6 bottom-12 left-0 flex flex-row items-center justify-between">
        <View className="flex flex-row items-start justify-start">
          <Pressable
            className="w-9/12 flex flex-row items-start justify-start"
            onPress={() =>
              setIsExercisePreferenceVisible(!isExercisePreferenceVisible)
            }
          >
            <Checkbox
              className="mr-2"
              value={isExercisePreferenceVisible}
              color={isExercisePreferenceVisible ? "#24384D" : undefined}
              onValueChange={(newValue) =>
                setIsExercisePreferenceVisible(newValue)
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
          disabled={!selectedValue}
          isLoading={isLoading}
        />
      </View>
    </SafeAreaComponent>
  );
}
