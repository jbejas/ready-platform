import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";
import { Skeleton } from "moti/skeleton";

// Constants
import { DISCOVERY_CATEGORY } from "@constants/constants";

// Amplify Utils
import { updateUser } from "@utils/amplifyUtils";

// Redux
import { setUser } from "@store/auth/authSlice";
import { setIsToastVisible } from "@store/toast/toastSlice";

// Amplify Graph Queries
import { generateClient } from "aws-amplify/api";
import * as queries from "@graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import {
  SearchCheckInQuestionsQuery,
  ListCheckInQuestionCategoriesQuery,
} from "@src/api/index";
import { BlurView } from "expo-blur";

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

const SkeletonCommonProps = {
  colorMode: "light",
  transition: {
    type: "timing",
    duration: 1500,
  },
  backgroundColor: "#D4D4D4",
} as const;

export default function ValueSetupScreen({ navigation }: Props) {
  // Mount Redux dispatch
  const dispatch = useDispatch();
  // Mount Graphql API
  const API = generateClient();

  // Get user ID
  const user = JSON.parse(useSelector((state: RootState) => state.auth.user));

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [discoveringYouQuestions, setDiscoveringYouQuestions] =
    useState<any>(false);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [selectedQuestionIndex, setSelectedQuestionIndex] =
    useState<number>(-1);
  const [responses, setResponses] = useState<
    {
      question: string;
      response: string;
    }[]
  >([]);

  const processUserValue = async () => {
    try {
      setIsLoading(true);
      const userId = user.id;
      const userResponses = JSON.stringify(responses);
      const updatedUser = await updateUser(userId, {
        discoveringYou: userResponses,
        onboardingStep: 2,
      });
      await dispatch(setUser(updatedUser));
      navigation.navigate("SecondProfileSetupScreen");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("processUserValue Error: ", error);
      dispatch(
        setIsToastVisible({
          isVisible: true,
          toastStyle: "info",
          text: "Error getting discovering questions",
        })
      );
      navigation.goBack();
    }
  };

  const getDiscoveryQuestions = async () => {
    const checkInCategories = await API.graphql<
      GraphQLQuery<ListCheckInQuestionCategoriesQuery>
    >({
      query: queries.listCheckInQuestionCategories,
    });

    let discoveryCategoryID = "0";

    checkInCategories.data.listCheckInQuestionCategories.items.map(
      (category) => {
        if (category.name === DISCOVERY_CATEGORY)
          discoveryCategoryID = category.id;
      }
    );

    const discoveryQuestions = await API.graphql<
      GraphQLQuery<SearchCheckInQuestionsQuery>
    >({
      query: queries.searchCheckInQuestions,
      variables: {
        limit: 10,
        filter: {
          checkInQuestionCategoryID: {
            eq: discoveryCategoryID,
          },
          day: {
            eq: 0,
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
    setDiscoveringYouQuestions(
      discoveryQuestions.data.searchCheckInQuestions.items
    );
  };

  useEffect(() => {
    getDiscoveryQuestions();
  }, []);

  const nextQuestion = async () => {
    // Process Response
    const newResponses = [
      ...responses,
      {
        question: discoveringYouQuestions[questionIndex].question,
        response:
          discoveringYouQuestions[questionIndex].responses[
            selectedQuestionIndex
          ],
      },
    ];
    // Reset selected question index
    setSelectedQuestionIndex(-1);
    await setResponses(newResponses);
    const newQuestionIndex = questionIndex + 1;
    setQuestionIndex(newQuestionIndex);
  };

  return (
    <>
      <SafeAreaComponent
        scrollable={true}
        addVerticalInsets
        testID="DiscoveringYou"
      >
        {!discoveringYouQuestions.length ? (
          <View className="mt-10">
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
          <View className="h-full w-full left-0 flex flex-col items-center justify-start">
            <Text
              allowFontScaling={false}
              className="text-[19px]  text-dark text-left mt-0 sm-1:mt-8 font-jokkerl w-full -tracking-widest"
            >
              {questionIndex + 1}/{discoveringYouQuestions.length}
            </Text>
            <Text
              allowFontScaling={false}
              className="text-[30px] sm-1:text-[36px] text-dark text-left mt-2 font-jokkerl w-full -tracking-widest mb-8"
            >
              {discoveringYouQuestions[questionIndex].question}
            </Text>
            {discoveringYouQuestions[questionIndex].responses
              .filter((response) => response.trim() !== "")
              .map((response, index) => {
                return (
                  <Pressable
                    key={index}
                    onPress={() => setSelectedQuestionIndex(index)}
                    className="w-full"
                  >
                    <View
                      className={`${
                        index === selectedQuestionIndex ? "bg-dark" : ""
                      } w-full flex items-center justify-center px-2 py-5 border border-dark/20 rounded-xl mb-4`}
                    >
                      <Text
                        allowFontScaling={false}
                        className={`${
                          index === selectedQuestionIndex
                            ? "text-white"
                            : "text-dark"
                        } w-full text-center`}
                      >
                        {response}
                      </Text>
                    </View>
                  </Pressable>
                );
              })}
          </View>
        )}
      </SafeAreaComponent>
      <View className="absolute w-screen px-6 bottom-12 left-0 flex flex-row items-center justify-end ">
        {questionIndex === discoveringYouQuestions.length - 1 ? (
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
            loaderColor="#000"
            isLoading={isLoading}
            disabled={selectedQuestionIndex === -1}
          />
        ) : (
          <DynamicButton
            onPress={() => nextQuestion()}
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
            isLoading={isLoading}
            disabled={selectedQuestionIndex === -1}
          />
        )}
      </View>
    </>
  );
}
