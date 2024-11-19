import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ListRenderItemInfo,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface HorizontalReflectionQuestionsScrollProps {
  data?: { label?: string; value: string | number }[];
  onSelectValue: (selectedValue: string | number) => void;
  appendString?: string;
  customClasses?: string;
  existingValue?: string;
}

export default function UserPhoneNumberScreen({
  data,
  onSelectValue,
  appendString,
  customClasses,
  existingValue,
}: HorizontalReflectionQuestionsScrollProps) {
  // Refs
  const flatListRef = useRef<Animated.FlatList>(null);

  // Constants
  const [responses, setResponses] = useState<
    { label?: string; value: string | number | null }[]
  >([]);

  const parseResponses = async () => {
    const mappedResponses: { label?: string; value: string | number | null }[] =
      [];

    data.map((r, index) => {
      if (r.value !== "") {
        mappedResponses.push({
          label: r.label || "",
          value: r.value,
        });
      }
    });

    // Add an empty value at the beginning of the Array
    mappedResponses.unshift({ value: null });
    mappedResponses.unshift({ value: null });
    mappedResponses.unshift({ value: null });
    mappedResponses.unshift({ value: null });

    // Add 3 empty values at the end of the Array
    // This can be improved!
    mappedResponses.push({ value: null });
    mappedResponses.push({ value: null });
    mappedResponses.push({ value: null });
    mappedResponses.push({ value: null });

    setResponses(mappedResponses);
  };

  useEffect(() => {
    parseResponses();
  }, [data]);

  const itemHeight = 60;

  const scrollY = useRef(new Animated.Value(0)).current;

  const renderItem = ({
    item,
    index,
  }: ListRenderItemInfo<{ label?: string; value: string | number | null }>) => {
    return (
      <Animated.View
        key={index}
        className="flex items-center justify-center w-full h-[60px]"
      >
        <Text
          allowFontScaling={false}
          className="text-[28px] font-jokkerl  text-left w-full"
        >
          {item.label ? item.label : item.value}
          {appendString !== undefined && item.value ? `${appendString}` : ""}
        </Text>
      </Animated.View>
    );
  };

  const momentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const y = event.nativeEvent.contentOffset.y;
    const index = Math.round(y / itemHeight);
    onSelectValue(data[index].label);
  };

  useEffect(() => {
    setTimeout(() => {
      if (existingValue !== undefined && existingValue !== null) {
        let index = data.findIndex((item) => item.value === existingValue);
        if (index === -1) {
          index = data.findIndex((item) => item.label === existingValue);
        }
        if (index !== -1) {
          const yOffset = index * itemHeight;
          flatListRef.current?.scrollToOffset({
            offset: yOffset,
            animated: true,
          });
        }
      }
    }, 500);
  }, [existingValue, data]);

  return (
    <View
      className={`w-full h-[540px] flex items-center justify-center relative ${customClasses}`}
    >
      <Animated.FlatList
        className="relative z-10 w-full"
        ref={flatListRef}
        data={responses}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        snapToInterval={itemHeight}
        onMomentumScrollEnd={momentumScrollEnd}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
        getItemLayout={(_, index) => ({
          length: itemHeight,
          offset: itemHeight * index,
          index,
        })}
      />
      <View className="w-full absolute top-[242px] bottom-0 left-0 right-0 z-0 h-[55px] flex items-start justify-center">
        <View className="w-[14px] h-[4px] bg-dark -ml-6"></View>
      </View>
      <View className="absolute w-screen h-[150px] top-0 z-10">
        <LinearGradient
          // Background Linear Gradient
          colors={[
            "rgba(255, 247, 245, 1)",
            "rgba(255, 247, 245, 1)",
            "rgba(255, 247, 245, 0.3)",
          ]}
          className="w-screen h-full"
        />
      </View>
      <View className="absolute w-screen h-[150px] bottom-0 z-10">
        <LinearGradient
          // Background Linear Gradient
          colors={[
            "rgba(255, 247, 245, 0.3)",
            "rgba(255, 247, 245, 1)",
            "rgba(255, 247, 245, 1)",
          ]}
          className="w-screen h-full"
        />
      </View>
    </View>
  );
}
