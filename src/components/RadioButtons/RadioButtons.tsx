import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { RadioButton } from "react-native-paper";
import { SKY12 } from "@constants/colors";

interface ArrowLeftMenuIconProps {
  options: {
    id: string;
    name: string;
    isActive: boolean;
  }[];
  onOptionSelect: (selectedOption: string) => void;
  className?: string;
  addMarginTop?: boolean;
}

export default function RadioButtons({
  options,
  onOptionSelect,
  className,
  addMarginTop = false,
}: ArrowLeftMenuIconProps) {
  const [checked, setChecked] = useState<string>("");

  const handleOptionSelect = (newValue: string) => {
    setChecked(newValue);
    onOptionSelect(newValue); // Call the function passed as a prop
  };

  return (
    <ScrollView
      className={`w-full ${className} ${addMarginTop ? "mt-20" : ""}`}
    >
      <RadioButton.Group onValueChange={handleOptionSelect} value={checked}>
        {options.map((option, index) => (
          <View
            key={index}
            className={`${index === 0 ? "mt-24" : ""} ${
              index === options.length - 1 ? "mb-36" : "mb-2"
            } ${
              checked === option.id
                ? "bg-orange border-orange"
                : "bg-white border-slate7"
            } w-full flex flex-row items-center justify-between border rounded-full px-4 py-2`}
          >
            <View className="flex flex-row items-center justify-start">
              <Text
                allowFontScaling={false}
                className={`text-base mr-2 ${
                  checked === option.id ? "text-dark" : "text-slate11"
                }`}
              >
                {String.fromCharCode(65 + index)}.
              </Text>
              <Text allowFontScaling={false} className="text-base text-dark">
                {option.name}
              </Text>
            </View>
            <RadioButton.Android
              color={checked === option.id ? SKY12 : undefined}
              value={option.id}
            />
          </View>
        ))}
      </RadioButton.Group>
    </ScrollView>
  );
}
