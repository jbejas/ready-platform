import { LinearGradient } from "expo-linear-gradient";
import { PropsWithChildren } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function FooterAbsoluteGradient({ children }: PropsWithChildren) {
  const insets = useSafeAreaInsets();

  return (
    <View className="absolute bottom-0 left-0 right-0">
      <LinearGradient
        className="h-[50px]"
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["rgba(251, 244, 228, 0)", "rgba(250, 244, 228, 1)"]}
      ></LinearGradient>
      <View
        className="bg-[#FAF4E4]"
        style={{ paddingBottom: insets.bottom + 16 }}
      >
        {children}
      </View>
    </View>
  );
}

export default FooterAbsoluteGradient;
