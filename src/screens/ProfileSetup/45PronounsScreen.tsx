import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";
import HorizontalQuestionsRadio from "@src/components/HorizontalQuestionsRadio/HorizontalQuestionsRadio";

// Amplify Graph Queries
import { generateClient } from "aws-amplify/api";
import * as queries from "@graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import { SearchPronounsQuery } from "@src/api/index";

// Amplify Utils
import { updateUser } from "@utils/amplifyUtils";
// Redux
import { setUser } from "@store/auth/authSlice";

// Redux
import { setUserPronouns } from "@store/signUp/signUpSlice";

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

type ResponseType = {
  id: string;
  name: string;
  isActive: boolean;
};

export default function PronounsScreen({ navigation }: Props) {
  // Mount Localization
  const { t } = useTranslation();
  // Mount Redux dispatch
  const dispatch = useDispatch();
  // Mount Graphql API
  const API = generateClient();

  // Get user ID
  const user = JSON.parse(useSelector((state: RootState) => state.auth.user));

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<ResponseType | null>(null);
  const [pronouns, setPronouns] = useState<
    { id: string; name: string; isActive: boolean }[]
  >([]);

  const goToPronounsScreen = async () => {
    try {
      setIsLoading(true);
      await dispatch(setUserPronouns(response.name));
      const updatedUser = await updateUser(user.id, {
        pronounID: response.id,
        onboardingStep: 8,
      });
      await dispatch(setUser(updatedUser));
      navigation.navigate("GenderPreferenceScreen");
      setIsLoading(false);
    } catch (error) {
      console.log("goToPronounsScreen Error: ", error);
    }
  };

  const getAllPronouns = async () => {
    const allPronouns = await API.graphql<GraphQLQuery<SearchPronounsQuery>>({
      query: queries.searchPronouns,
      variables: {
        sort: {
          field: "sortOrder",
          direction: "asc",
        },
      },
    });
    setPronouns(
      allPronouns.data.searchPronouns.items.map((item) => ({
        id: item.id || "",
        name: item.name,
        isActive: item.isActive,
      }))
    );
  };

  useEffect(() => {
    getAllPronouns();
  }, []);

  return (
    <SafeAreaComponent testID="Pronouns" relative>
      <Text
        allowFontScaling={false}
        className="text-[30px] sm-1:text-[36px] text-dark text-left mt-8 font-jokkerl w-full -tracking-widest"
      >
        {t("user-pronouns.title")}
      </Text>
      <Text
        allowFontScaling={false}
        className="text-[16px]  text-dark text-left my-6 font-jokkerl w-full"
      >
        {t("user-pronouns.subtitle")}
      </Text>
      <HorizontalQuestionsRadio
        responses={pronouns}
        onPress={(response) => setResponse(response)}
      />
      <View className="absolute w-screen px-6 bottom-12 left-0 flex flex-row items-center justify-end">
        <DynamicButton
          onPress={() => goToPronounsScreen()}
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
          disabled={!response}
          isLoading={isLoading}
        />
      </View>
    </SafeAreaComponent>
  );
}
