import { useState, useEffect } from "react";
import { View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";
import HorizontalReflectionQuestionsRadio from "@src/components/HorizontalReflectionQuestionsRadio/HorizontalReflectionQuestionsRadio";

// Dayjs
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { setCurrentQuote } from "@store/reflections/reflectionsSlice";
import { setUser } from "@store/auth/authSlice";

// Amplify Utils
import { createDayUser } from "@utils/amplifyUtils";
import { updateUser } from "@utils/amplifyUtils";

// Set dayjs libraries
dayjs.extend(utc);

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
  question: string;
  response: string;
  category: string;
  quote: string;
  author: string;
  checkInQuestionContentCategoryName: string;
  title: string;
};

export default function FirstReflectionQuestionScreen({ navigation }: Props) {
  // Mount Redux dispatch
  const dispatch = useDispatch();
  // Get user ID
  const user = JSON.parse(useSelector((state: RootState) => state.auth.user));

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<ResponseType | null>(null);

  const goToReflectionQuoteScreen = async () => {
    try {
      setIsLoading(true);
      await createDayUser(
        user.id,
        1,
        10,
        response.question,
        response.response,
        response.category,
      );
      const updatedUser = await updateUser(user.id, {
        reflectionCompletedOn: dayjs().startOf("day"),
      });
      await dispatch(setUser(updatedUser));
      dispatch(setCurrentQuote(response.quote));
      navigation.navigate("FirstReflectionQuoteScreen", {
        quote: response.quote,
        author: response.author,
        contentCategoryName: response.checkInQuestionContentCategoryName,
        questionTitle: response.title,
      });
      setIsLoading(false);
    } catch (error) {
      console.log("goToReflectionQuoteScreen", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <SafeAreaComponent
      relative
      testID="FirstReflectionQuestion"
      gradientColorStart="#E9848B"
      gradientColorEnd="#EF979D"
    >
      <HorizontalReflectionQuestionsRadio
        day={1}
        position={10}
        backgroundColor="white/30"
        selectedBackgroundColor="white"
        borderColor="black/20"
        selectedBorderColor="black"
        textColor="white"
        selectedTextColor="black"
        formTextColor="white"
        fullWidthQuestions
        onPress={(response) => setResponse(response)}
      />
      <View className="absolute w-screen px-6 bottom-12 left-0 flex flex-row items-center justify-end">
        <DynamicButton
          onPress={() => goToReflectionQuoteScreen()}
          type={"icon"}
          size="large"
          iconPosition="right"
          icon={"chevron-right"}
          iconSize={30}
          showBgImage
          bgImage="drawn-light"
          iconColor="white"
          rounded="full"
          position="none"
          textStyles="text-base"
          isLoading={isLoading}
          disabled={!response || isLoading}
        />
      </View>
    </SafeAreaComponent>
  );
}
