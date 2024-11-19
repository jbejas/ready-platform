import React, { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";

// Utils
import { getCurrentReflectionQuestion } from "@utils/reflections";

// Skeleton
import { Skeleton } from "moti/skeleton";
const SkeletonCommonProps = {
  colorMode: "light",
  transition: {
    type: "timing",
    duration: 1500,
  },
  backgroundColor: "#D4D4D4",
} as const;

// Define the props type for your navigation stack
type Props = {
  day: number;
  position: number;
  color?: string;
  backgroundColor?: string;
  selectedBackgroundColor?: string;
  borderColor?: string;
  selectedBorderColor?: string;
  textColor?: string;
  selectedTextColor?: string;
  formTextColor?: string;
  onPress: (selectedResponse) => void;
  fullWidthQuestions?: boolean;
};

export default function HorizontalReflectionQuestionsRadio({
  day,
  position,
  onPress,
  backgroundColor = "white",
  selectedBackgroundColor = "white",
  borderColor = "white",
  selectedBorderColor = "white",
  textColor = "white",
  selectedTextColor = "white",
  formTextColor = "white",
  fullWidthQuestions = false,
}: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [quote, setQuote] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [questionCategory, setQuestionCategory] = useState<string>("");
  const [questionTheme, setQuestionTheme] = useState<string>("");
  const [responses, setResponses] = useState<{ value: string | null }[]>([
    { value: "" },
  ]);
  const [responseIndex, setResponseIndex] = useState<number | null>(null);

  useEffect(() => {
    const getOnboardingReflectionQuestion = async () => {
      try {
        setIsLoading(true);
        const currentQuestion = await getCurrentReflectionQuestion(
          day,
          position,
        );
        currentQuestion.map((q) => {
          setQuestion(q.question);
          setQuestionCategory(q.checkInQuestionCategory.name);
          setQuote(q.quote);
          setAuthor(q.author);
          setTitle(q.title);
          setQuestionTheme(q.checkInQuestionContentCategoryName);
          const mappedResponses: { value: string | null }[] = [];
          q.responses.map((r) => {
            mappedResponses.push({
              value: r,
            });
          });
          setResponses(mappedResponses);
        });
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log("getOnboardingReflectionQuestion error", error);
      }
    };
    getOnboardingReflectionQuestion();
  }, []);

  return (
    <View className="w-full">
      <Text
        allowFontScaling={false}
        className={`text-[18px] mt-8 mb-6 font-jokkerl w-full text-${formTextColor}`}
      >
        {questionTheme} — {title}
      </Text>
      <Text
        allowFontScaling={false}
        className={`text-[36px]  font-jokkerl w-full -tracking-widest text-${formTextColor}`}
      >
        {question}
      </Text>
      <View className="flex flex-row flex-wrap justify-between h-[75%] w-full mt-8">
        {!isLoading && responses.length > 0
          ? responses.map((r, index) => {
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    setResponseIndex(index);
                    onPress({
                      question,
                      response: r.value,
                      category: questionCategory,
                      quote: quote,
                      author: author,
                    });
                  }}
                  className={`${
                    fullWidthQuestions ? "w-full h-[70px]" : "w-[48%] h-[120px]"
                  } mb-4 flex items-center justify-center`}
                >
                  <View
                    className={`${
                      responseIndex === index
                        ? `bg-${selectedBackgroundColor} border-${selectedBorderColor}`
                        : `bg-${backgroundColor} border-${borderColor}`
                    } w-full h-full flex items-center justify-center rounded-xl px-3 py-2`}
                  >
                    <Text
                      allowFontScaling={false}
                      className={`${
                        responseIndex === index
                          ? `text-${selectedTextColor}`
                          : `text-${textColor}`
                      } text-center w-full font-jokkerl text-[14px]`}
                    >
                      {r.value}
                    </Text>
                  </View>
                </Pressable>
              );
            })
          : null}
      </View>
      {isLoading ? (
        <View className="w-full h-full absolute top-0 left-0">
          <View className="mt-8">
            <Skeleton
              height={25}
              width={140}
              radius={6}
              {...SkeletonCommonProps}
            />
          </View>
          <View className="mt-6">
            <Skeleton
              height={70}
              width={"100%"}
              radius={6}
              {...SkeletonCommonProps}
            />
          </View>
          <View className="w-full flex flex-row items-center justify-between mt-10">
            <View className="w-[48%]">
              <Skeleton
                height={120}
                width={"100%"}
                radius={6}
                {...SkeletonCommonProps}
              />
            </View>
            <View className="w-[48%]">
              <Skeleton
                height={120}
                width={"100%"}
                radius={6}
                {...SkeletonCommonProps}
              />
            </View>
          </View>
          <View className="w-full flex flex-row items-center justify-between mt-4">
            <View className="w-[48%]">
              <Skeleton
                height={120}
                width={"100%"}
                radius={6}
                {...SkeletonCommonProps}
              />
            </View>
            <View className="w-[48%]">
              <Skeleton
                height={120}
                width={"100%"}
                radius={6}
                {...SkeletonCommonProps}
              />
            </View>
          </View>
          <View className="w-full flex flex-row items-center justify-between mt-4">
            <View className="w-[48%]">
              <Skeleton
                height={120}
                width={"100%"}
                radius={6}
                {...SkeletonCommonProps}
              />
            </View>
            <View className="w-[48%]">
              <Skeleton
                height={120}
                width={"100%"}
                radius={6}
                {...SkeletonCommonProps}
              />
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
}
