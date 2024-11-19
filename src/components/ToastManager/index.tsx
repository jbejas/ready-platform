import { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// Reanimated
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
  ReduceMotion,
  useAnimatedStyle,
} from "react-native-reanimated";

// Icons
import { IconInfoCircle, IconX } from "@tabler/icons-react-native";

import { setIsToastVisible } from "@store/toast/toastSlice";

interface ToastProps {
  className?: string;
}

// Define the state structure
interface RootState {
  toast: {
    isToastVisible: boolean;
    toastStyle: string;
    toastText: string;
    duration: number;
  };
}

export default function ToastManager({ className }: ToastProps) {
  // Mount Redux dispatch
  const dispatch = useDispatch();
  // Get toast state
  const { isToastVisible, toastStyle, toastText, duration } = useSelector(
    (state: RootState) => state.toast
  );

  // Constants
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const springConfig = {
    mass: 1,
    damping: 15,
    stiffness: 80,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 2,
    reduceMotion: ReduceMotion.System,
  };

  const topInitialValue = -500;
  const toastBottom = useSharedValue(topInitialValue);
  const progress = useSharedValue(1);

  useEffect(() => {
    if (isToastVisible) {
      toastBottom.value = withSpring(100, springConfig);
      progress.value = withTiming(0, { duration });
      const id = setTimeout(() => {
        dispatch(setIsToastVisible(false));
        toastBottom.value = withSpring(topInitialValue, springConfig);
        progress.value = 1;
      }, duration);
      setTimeoutId(id);
    }
  }, [isToastVisible]);

  const animatedProgressStyle = useAnimatedStyle(() => {
    return {
      width: `${progress.value * 100}%`,
      height: 5,
    };
  });

  const handleCancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    dispatch(setIsToastVisible(false));
    toastBottom.value = withSpring(topInitialValue, springConfig);
  };

  return (
    <Animated.View
      style={{ top: toastBottom }}
      className={`w-screen absolute flex items-center justify-center px-6 z-50 ${className}`}
    >
      <View
        className={`
        h-full w-full relative rounded-[10px] overflow-hidden p-4 flex flex-row items-center justify-start
        ${toastStyle === "info" ? "bg-light-blue text-black" : ""}
        `}
      >
        <Pressable
          onPress={handleCancel}
          className="absolute top-2 right-2 w-[25px] h-[25px] bg-black/20 flex items-center justify-center rounded-full"
        >
          <IconX width={20} height={20} strokeWidth={1} />
        </Pressable>
        <IconInfoCircle width={25} height={25} strokeWidth={1} />
        <Text
          allowFontScaling={false}
          className="font-jokkerl text-[16px] ml-2"
        >
          {toastText}
        </Text>
        <Animated.View
          style={animatedProgressStyle}
          className="absolute bottom-0 left-0 bg-black"
        />
      </View>
    </Animated.View>
  );
}
