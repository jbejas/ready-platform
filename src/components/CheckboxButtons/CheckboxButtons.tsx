import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import Checkbox from "expo-checkbox";

import { SKY12 } from "@constants/colors";

interface ArrowLeftMenuIconProps {
  options: { id: string; name: string; isActive: boolean }[];
  onOptionSelect: (
    selectedOption: { id: string; name: string; isActive: boolean }[],
  ) => void;
  className?: string;
  addMarginTop?: boolean;
}

export default function CheckboxButtons({
  options,
  onOptionSelect,
  className,
  addMarginTop = false,
}: ArrowLeftMenuIconProps) {
  const [checkedItems, setCheckedItems] = useState<
    {
      id: string;
      name: string;
      isActive: boolean;
    }[]
  >([]);

  const handleOptionSelect = (value: {
    id: string;
    name: string;
    isActive: boolean;
  }) => {
    const currentIndex = checkedItems.indexOf(value);
    const newCheckedItems = [...checkedItems];

    if (currentIndex === -1) {
      newCheckedItems.push(value);
    } else {
      newCheckedItems.splice(currentIndex, 1);
    }

    setCheckedItems(newCheckedItems);
    onOptionSelect(newCheckedItems); // Call the function passed as a prop
  };

  return (
    <ScrollView
      className={`w-full ${className} ${addMarginTop ? "mt-20" : ""}`}
    >
      {options.map((option, index) => {
        if (option.isActive) {
          return (
            <View
              key={index}
              className={`${index === 0 ? "mt-20" : ""} ${
                index === options.length - 1 ? "mb-36" : "mb-2"
              } ${
                checkedItems.includes(option)
                  ? "bg-orange border-orange"
                  : "bg-white border-slate7"
              } w-full flex flex-row items-center justify-between border rounded-full px-4 py-2`}
            >
              <View className="flex flex-row items-center justify-start">
                <Text allowFontScaling={false} className="text-base  mr-2">
                  {String.fromCharCode(65 + index)}. {addMarginTop}
                </Text>
                <Text allowFontScaling={false} className="text-base text-dark">
                  {option.name}
                </Text>
              </View>
              <Checkbox
                value={checkedItems.includes(option)}
                onValueChange={() => handleOptionSelect(option)}
                color={checkedItems.includes(option) ? SKY12 : undefined}
                className="w-4 h-4"
              />
            </View>
          );
        } else {
          return null;
        }
      })}
    </ScrollView>
  );
}
