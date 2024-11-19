import React from "react";
import { View } from "react-native";
import MatchesSliderV2 from "@components/MatchesSliderV2";

export default function MatchesV2Screen() {
  return (
    <View className="h-screen w-screen top-0 left-0 flex items-center justify-center bg-card relative">
      <MatchesSliderV2 onPress={(index) => console.log("Index", index)} />
    </View>
  );
}
