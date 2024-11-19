import { ActivityIndicator, Dimensions, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function LoadingFullPage() {
  const insets = useSafeAreaInsets();
  const { height } = Dimensions.get("screen");

  return (
    <View
      className="w-screen h-screen bg-black/60 flex items-center justify-center absolute inset-0 z-10"
      style={{ top: insets.top * -1 - 500, height: height + 1000 }}
    >
      <ActivityIndicator size="large" color="#FFF" />
    </View>
  );
}

export default LoadingFullPage;
