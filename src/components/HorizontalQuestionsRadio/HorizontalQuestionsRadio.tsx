import React, { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";

// Define the props type for your navigation stack
type Props = {
  responses: { id: string; name: string; isActive: boolean }[];
  onPress: (selectedResponse) => void;
  existingValue?: any;
  isFullWidth?: boolean;
};

export default function HorizontalQuestionsRadio({
  responses,
  onPress,
  existingValue,
  isFullWidth = false,
}: Props) {
  const [responseIndex, setResponseIndex] = useState<number | null>(null);

  useEffect(() => {
    if (existingValue) {
      const findSelectedValueIndex = responses.findIndex((r) => {
        return r.name === existingValue;
      });
      setResponseIndex(findSelectedValueIndex);
    }
  }, [responses]);

  return (
    <View className="flex flex-row flex-wrap justify-between h-[75%] w-full">
      {responses.length > 1 &&
        responses.map((r, index) => {
          if (r.name.trim() === "") return;
          return (
            <Pressable
              key={index}
              onPress={() => {
                setResponseIndex(index);
                onPress(r);
              }}
              className={`${responseIndex === index && "!bg-black"} ${
                isFullWidth ? "w-full" : "w-[48%]"
              } h-[80px] border border-dark/20 rounded-2xl p-3 mb-4 flex items-center justify-center`}
            >
              <View className="w-full h-full flex items-center justify-center">
                <Text
                  allowFontScaling={false}
                  className={`${
                    responseIndex === index && "!text-white"
                  } text-center w-full font-jokkerl text-[14px]`}
                >
                  {r.name}
                </Text>
              </View>
            </Pressable>
          );
        })}
    </View>
  );
}
