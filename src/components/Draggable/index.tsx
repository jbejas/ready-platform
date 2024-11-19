import React from "react";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { getOrder, getPosition } from "./utils";

const Draggable = ({
  children,
  positions,
  id,
  onDragEnd,
  disabled,
  size,
  columns,
  marginItems,
}) => {
  const position = getPosition(positions.value[id], size, columns, marginItems);
  const translateX = useSharedValue(position.x);
  const translateY = useSharedValue(position.y);

  const isGestureActive = useSharedValue(0);

  useAnimatedReaction(
    () => positions.value[id],
    (newOrder) => {
      const newPostions = getPosition(newOrder, size, columns, marginItems);
      translateX.value = withTiming(newPostions.x);
      translateY.value = withTiming(newPostions.y);
    }
  );

  const panGesture = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      if (disabled) return;

      ctx.startX = translateX.value;
      ctx.startY = translateY.value;
      isGestureActive.value = 1;
    },
    onActive: (evt, ctx) => {
      if (disabled) return;

      translateX.value = Number(ctx.startX) + evt.translationX;
      translateY.value = Number(ctx.startY) + evt.translationY;

      const oldOrder = positions.value[id];
      const newOrder = getOrder(
        translateX.value,
        translateY.value,
        size,
        columns
      );
      if (oldOrder !== newOrder) {
        const idToSwap = Object.keys(positions.value).find(
          (key) => positions.value[key] === newOrder
        );
        if (idToSwap) {
          const newPostions = JSON.parse(JSON.stringify(positions.value));
          newPostions[id] = newOrder;
          newPostions[idToSwap] = oldOrder;
          positions.value = newPostions;
        }
      }
    },
    onEnd: () => {
      if (disabled) return;

      const destination = getPosition(
        positions.value[id],
        size,
        columns,
        marginItems
      );
      translateX.value = withTiming(destination.x, {}, () => {
        if (translateY.value === destination.y) {
          runOnJS(onDragEnd)(id);
        }
      });
      translateY.value = withTiming(destination.y, {}, () => {
        if (translateX.value === destination.x) {
          runOnJS(onDragEnd)(id);
        }
      });
    },
    onFinish: () => {
      if (disabled) return;
      isGestureActive.value = 0;
    },
  });

  // @ts-ignore
  const animatedStyle = useAnimatedStyle(() => {
    const animation = {
      damping: 10,
      stiffness: 100,
    };
    const zIndex = withSpring(isGestureActive.value ? 6 : 1, animation);
    const scale = withSpring(isGestureActive.value ? 1.2 : 1, animation);

    return {
      position: "absolute",
      zIndex,
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale },
      ],
    };
  });

  return (
    <Animated.View style={animatedStyle}>
      <PanGestureHandler onGestureEvent={panGesture}>
        <Animated.View>{children}</Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

export default Draggable;
