import { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay as withDelayReanimated,
  withTiming,
} from "react-native-reanimated";

interface ProgressBarProps {
  progress: number;
  initialProgress?: number;
  withDelay?: number;
}
function ProgressBar({
  progress,
  initialProgress = 0,
  withDelay,
}: ProgressBarProps) {
  const progressWidth = useSharedValue(initialProgress);

  const progressStyle = useAnimatedStyle(() => {
    return {
      width: `${progressWidth.value}%`,
    };
  });

  useEffect(() => {
    progressWidth.value = withTiming(initialProgress, { duration: 0 });
  }, [initialProgress]);

  useEffect(() => {
    if (withDelay) {
      progressWidth.value = withDelayReanimated(
        withDelay,
        withTiming(progress, { duration: 350 })
      );
      return;
    }
    progressWidth.value = withTiming(progress, { duration: 350 });
  }, [progress, progressWidth, withDelay]);

  return (
    <View className="relative h-[2px] rounded-lg bg-light-200">
      <Animated.View
        className="bg-primary-blue-100 h-[2px] absolute top-0 left-0 rounded-lg"
        style={progressStyle}
      />
    </View>
  );
}

export default ProgressBar;
