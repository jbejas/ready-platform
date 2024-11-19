import * as React from "react";
import { View } from "react-native";
import { BASIC_INFO_TOTAL_STEPS } from "@constants/constants";

interface StepsProps {
  step: number;
}

export default function Steps({ step }: StepsProps) {
  let stepWidth = Math.floor((100 / BASIC_INFO_TOTAL_STEPS) * step);
  return (
    <View className="w-full h-1 flex items-start justify-center bg-card8 rounded-lg overflow-hidden">
      <View
        className={`h-full bg-orange10 relative`}
        style={{ width: `${stepWidth}%` }}
      />
    </View>
  );
}
