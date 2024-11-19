import { useEffect } from "react";
import { View, Image } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from "react-native-reanimated";

// Redux
import { AppDispatch } from "@store/store";
import { useDispatch } from "react-redux";

import { fetchContentCategories } from "@store/content/contentSlice";

import ReadyBetaCharcoal from "@assets/icons/ready-beta.svg";

const SplashScreen = () => {
  // Mount Redux dispatch
  const dispatch: AppDispatch = useDispatch();

  const opacity = useSharedValue(0);
  const translateY = useSharedValue(50);

  useEffect(() => {
    setTimeout(() => {
      console.log("Pulling categories");
      dispatch(fetchContentCategories());
    }, 5000);
    opacity.value = withTiming(1, { duration: 2000 });
    translateY.value = withSpring(0, { damping: 10, stiffness: 100 }); // Bounce effect
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <View className="flex-1 w-screen h-screen flex justify-center items-center">
      <Image
        source={require("@assets/images/splash-screen-bg.png")}
        className="w-screen h-screen absolute left-0 top-0"
      />
      <Animated.View style={animatedStyle}>
        <ReadyBetaCharcoal />
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
