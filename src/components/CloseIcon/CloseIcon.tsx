import * as React from "react";
import { View, Pressable } from "react-native";
import { IconX } from "@tabler/icons-react-native";

interface closeIconProps {
  onPress: () => void;
}

export default function CloseIcon({ onPress }: closeIconProps) {
  return (
    <View className="w-[35px] h-[35px] bg-black/10 rounded-full flex items-center justify-center mr-2">
      <Pressable onPress={onPress}>
        <IconX width={27} height={27} color="#000" strokeWidth={1} />
      </Pressable>
    </View>
  );
}
