import DynamicButton from "@components/DynamicButton/DynamicButton";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { Skeleton } from "moti/skeleton";
import { useEffect, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// Constants
import { ADDITIONAL_INSET_TOP } from "@src/constants/constants";

// Keyboard
import { Keyboard, KeyboardEvent } from "react-native";

// Safe Area Lib
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Dayjs
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

// Localization
import { useTranslation } from "react-i18next";

// Constants
import { FILL_THE_BLANK } from "@constants/constants";

// Amplify Utils
import { createDayUser, updateUser } from "@utils/amplifyUtils";
import { getUserCurrentDay } from "@utils/reflections";

// Redux
import { setUser } from "@store/auth/authSlice";
import {
  fetchConnections,
  setIsConnectionsBadgeVisible,
} from "@store/connections/connectionsSlice";
import {
  setCanUserReflect,
  setCurrentQuote,
} from "@store/reflections/reflectionsSlice";
import { AppDispatch } from "@store/store";

// Amplify Graph Queries
import { GraphQLQuery } from "@aws-amplify/api";
import * as customQueries from "@gcq/index";
import { SearchCheckInQuestionsQuery } from "@src/api/index";
import SafeArea from "@src/components/SafeArea";
import { generateClient } from "aws-amplify/api";

// Set dayjs libraries
dayjs.extend(utc);

// Define the props type for your navigation stack
type Props = {
  route: RouteProp<any>;
  navigation: NavigationProp<any>;
};

// Redux Root State
interface RootState {
  auth: {
    user: string;
  };
  keyboard: {
    isKeyboardVisible: boolean;
  };
  reflections: {
    reflectionQuestionsGradientValues: string;
    reflectionQuestionBackgroundImage: string;
  };
}

const SkeletonCommonProps = {
  colorMode: "light",
  transition: {
    type: "timing",
    duration: 1500,
  },
  backgroundColor: "#D4D4D4",
} as const;

export default function ReflectionQuestionScreen({ route, navigation }: Props) {
  // Mount Localization
  const { t } = useTranslation();
  // Mount Redux dispatch
  const dispatch: AppDispatch = useDispatch();
  // Mount Graphql API
  const API = generateClient();
  // Get user ID
  const user = JSON.parse(useSelector((state: RootState) => state.auth.user));
  // Get reflection question values
  const reflectionQuestionsGradientValues = useSelector(
    (state: RootState) => state.reflections.reflectionQuestionsGradientValues
  ).split(",");
  // Get keyboard state
  const isKeyboardVisible = useSelector(
    (state: RootState) => state.keyboard.isKeyboardVisible
  );

  // Safe Area Insets
  const insets = useSafeAreaInsets();

  // Route Params
  const { comesFromCategory, selectedDayFromCategory } = route.params;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<any>(false);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [selectedQuestionIndex, setSelectedQuestionIndex] =
    useState<number>(-1);
  const [responses, setResponses] = useState<
    {
      question: string;
      response: string;
      questionDay: number;
      questionPosition: number;
      category: string;
    }[]
  >([]);
  const [fillTheBlankResponse, setFillTheBlankResponse] = useState<string>("");
  const [keyboardHeight, setKeyboardHeight] = useState<number>(0);

  useEffect(() => {
    const setDayQuestion = async () => {
      try {
        const userCurrentDay = await getUserCurrentDay(user.days.items);
        let selectedDay;
        if (comesFromCategory) {
          selectedDay = selectedDayFromCategory;
        } else {
          selectedDay = userCurrentDay.day + 1;
        }
        const discoveryQuestions = await API.graphql<
          GraphQLQuery<SearchCheckInQuestionsQuery>
        >({
          query: customQueries.searchCheckInQuestions,
          variables: {
            limit: 10,
            filter: {
              day: {
                eq: selectedDay,
              },
            },
            sort: [
              {
                field: "sortOrder",
                direction: "asc",
              },
            ],
          },
        });
        setQuestions(discoveryQuestions.data.searchCheckInQuestions.items);
      } catch (error) {
        console.log("setDayQuestion", error);
      }
    };
    setDayQuestion();
  }, []);

  const nextQuestion = async () => {
    try {
      // Process Response
      const question = questions[questionIndex].question;
      const response =
        questions[questionIndex].checkInQuestionType.name === FILL_THE_BLANK
          ? fillTheBlankResponse
          : questions[questionIndex].responses[selectedQuestionIndex];
      const questionDay = questions[questionIndex].day;
      const questionPosition = questions[questionIndex].sortOrder;
      const category = questions[questionIndex].checkInQuestionCategory.name;
      const quote = questions[questionIndex].quote;
      const author = questions[questionIndex].author;
      const newResponses = [
        ...responses,
        {
          question,
          response,
          questionDay,
          questionPosition,
          category,
        },
      ];
      console.log("newResponses", newResponses);
      // Reset selected question index
      setSelectedQuestionIndex(-1);
      await setResponses(newResponses);
      if (questionIndex === questions.length - 1) {
        setIsLoading(true);
        await Promise.all(
          newResponses.map(async (response) => {
            await createDayUser(
              user.id,
              response.questionDay,
              response.questionPosition,
              response.question,
              response.response,
              response.category
            );
            // user.days.items.push({
            //   createdAt: dayjs().toISOString(),
            //   day: response.questionDay,
            //   position: response.questionPosition,
            //   question: response.question,
            //   response: response.response,
            //   questionCategory: response.category,
            // });
            const updatedUser = await updateUser(user.id, {
              reflectionCompletedOn: dayjs().startOf("day"),
            });
            await dispatch(setUser(updatedUser));

            // Update user state
            // dispatch(setUser(user));
            // Load connections after reflection for the day is complete.
            dispatch(setIsConnectionsBadgeVisible(true));
            // Pull connections
            console.log("Processing daily connections");
          })
        );
        // @ts-ignore
        dispatch(fetchConnections({ userId: user.id }));
        dispatch(setCurrentQuote(quote));
        dispatch(setCanUserReflect(false));
        navigation.navigate("ReflectionQuoteScreen", {
          quote,
          author: author,
          reflectionsCount: user.days.items.length,
          daysGettingReady: dayjs().diff(user.createdAt, "days"),
          userName: user.firstName,
          contentCategoryName:
            questions[questionIndex].checkInQuestionContentCategoryName,
          questionTitle: questions[questionIndex].title,
        });
        setIsLoading(false);
      } else {
        const newQuestionIndex = questionIndex + 1;
        setQuestionIndex(newQuestionIndex);
      }
    } catch (error) {
      console.log("nextQuestion", error);
    }
  };

  useEffect(() => {
    function onKeyboardDidShow(e: KeyboardEvent) {
      // Remove type here if not using TypeScript
      console.log("Keyboard Height", e.endCoordinates.height);
      setKeyboardHeight(e.endCoordinates.height);
    }

    function onKeyboardDidHide() {
      setKeyboardHeight(0);
    }

    const showSubscription = Keyboard.addListener(
      "keyboardDidShow",
      onKeyboardDidShow
    );
    const hideSubscription = Keyboard.addListener(
      "keyboardDidHide",
      onKeyboardDidHide
    );
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <>
      <SafeArea
        testID="ReflectionQuestion"
        relative
        gradientColorStart={reflectionQuestionsGradientValues[0]}
        gradientColorEnd={reflectionQuestionsGradientValues[1]}
        gradientDirection="ttb"
        customClasses="!px-0"
      >
        {!questions.length ? (
          <View className="mt-10 px-6">
            <Skeleton.Group show={true}>
              <Skeleton
                height={70}
                width={"100%"}
                radius={10}
                {...SkeletonCommonProps}
              />
              <View className="w-full flex items-center justify-center mt-4">
                <Skeleton
                  height={20}
                  width={"100%"}
                  radius={5}
                  {...SkeletonCommonProps}
                />
              </View>
              <View className="w-full flex items-center justify-center mt-6">
                <Skeleton
                  height={60}
                  width={"100%"}
                  radius={5}
                  {...SkeletonCommonProps}
                />
              </View>
              <View className="w-full flex items-center justify-center mt-4">
                <Skeleton
                  height={60}
                  width={"100%"}
                  radius={5}
                  {...SkeletonCommonProps}
                />
              </View>
              <View className="w-full flex items-center justify-center mt-4">
                <Skeleton
                  height={60}
                  width={"100%"}
                  radius={5}
                  {...SkeletonCommonProps}
                />
              </View>
              <View className="w-full flex items-center justify-center mt-4">
                <Skeleton
                  height={60}
                  width={"100%"}
                  radius={5}
                  {...SkeletonCommonProps}
                />
              </View>
              <View className="w-full flex items-center justify-center mt-4">
                <Skeleton
                  height={60}
                  width={"100%"}
                  radius={5}
                  {...SkeletonCommonProps}
                />
              </View>
            </Skeleton.Group>
          </View>
        ) : (
          <View
            className="h-screen w-screen left-0 flex flex-col items-center justify-start px-6 pt-28"
            style={{
              top: insets.top * -1 - ADDITIONAL_INSET_TOP,
              marginBottom: isKeyboardVisible ? keyboardHeight / 3 : 0,
            }}
          >
            <Text
              allowFontScaling={false}
              className="text-[36px] text-light text-left mt-2 font-jokkerl w-full -tracking-widest mb-8"
            >
              {questions[questionIndex].question}
            </Text>
            {questions[questionIndex].checkInQuestionType.name ===
            FILL_THE_BLANK ? (
              <View className="w-full flex flex-row items-center justify-center pt-3">
                <TextInput
                  onChangeText={(e) => setFillTheBlankResponse(e)}
                  className="w-full text-xl h-44 font-jokkerl border-b mb-4 text-white border-white"
                  placeholder={t("reflection-question-screen.response")}
                  autoCapitalize="sentences"
                  keyboardType="default"
                  autoCorrect={true}
                  maxLength={300}
                  multiline={true}
                  placeholderTextColor="#FFF"
                />
              </View>
            ) : null}
            {questions[questionIndex].checkInQuestionType.name !==
              FILL_THE_BLANK &&
              questions[questionIndex].responses.map((response, index) => {
                if (response.trim() === "") return;
                return (
                  <Pressable
                    key={index}
                    onPress={() => setSelectedQuestionIndex(index)}
                    className="w-full"
                  >
                    <View
                      className={`${
                        index === selectedQuestionIndex
                          ? "border-2 bg-white/10 border-light"
                          : "border-2 border-light/50"
                      } w-full flex items-center justify-center px-2 py-5  rounded-xl mb-4`}
                    >
                      <Text
                        allowFontScaling={false}
                        className={`text-white w-full text-center font-jokkerl text-[16px]`}
                      >
                        {response}
                      </Text>
                    </View>
                  </Pressable>
                );
              })}
            {isKeyboardVisible ? (
              <View className="w-full flex flex-row items-center justify-end z-30">
                <DynamicButton
                  onPress={() => nextQuestion()}
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
                  loaderColor="#FFF"
                  isLoading={isLoading}
                  disabled={
                    selectedQuestionIndex === -1 &&
                    questions[questionIndex]?.checkInQuestionType?.name !==
                      FILL_THE_BLANK
                  }
                />
              </View>
            ) : null}
          </View>
        )}
      </SafeArea>
      <View className="absolute bottom-12 right-0 flex flex-row items-center justify-end px-6">
        <DynamicButton
          onPress={() => nextQuestion()}
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
          loaderColor="#FFF"
          isLoading={isLoading}
          disabled={
            selectedQuestionIndex === -1 &&
            questions[questionIndex]?.checkInQuestionType?.name !==
              FILL_THE_BLANK
          }
        />
      </View>
    </>
  );
}
