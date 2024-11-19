import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ListRenderItemInfo,
} from "react-native";

interface HorizontalReflectionQuestionsScrollProps {
  data?: { label?: string; value: string | number }[];
  onSelectValue: (selectedValue: string | number) => void;
  appendString?: string;
  existingValue?: any;
}

export default function HorizontalQuestionsScroll({
  data,
  onSelectValue,
  appendString,
  existingValue,
}: HorizontalReflectionQuestionsScrollProps) {
  // Constants
  const [responses, setResponses] = useState<
    { label?: string; value: string | number | null }[]
  >([]);
  const [initialValueIndex, setInitialValueIndex] = useState<number>(0);

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
    mappedResponses.unshift({ value: 0 });
    mappedResponses.unshift({ value: 0 });
    mappedResponses.unshift({ value: 0 });

    // Add 3 empty values at the end of the Array
    // This can be improved!
    mappedResponses.push({ value: 0 });
    mappedResponses.push({ value: 0 });
    mappedResponses.push({ value: 0 });

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
          className="text-[28px] font-jokkerl text-left w-full"
          // style={{ height: itemHeight }}
        >
          {item.label ? item.label : item.value !== 0 ? item.value : ""}
          {appendString !== undefined && item.value ? `${appendString}` : ""}
        </Text>
      </Animated.View>
    );
  };

  const momentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    try {
      const y = event.nativeEvent.contentOffset.y;
      const index = Math.round(y / itemHeight);
      onSelectValue(data[index].value);
    } catch (error) {
      console.log("Horizontal Questions Scroll momentumScrollEnd error", error);
    }
  };

  useEffect(() => {
    if (existingValue) {
      const findSelectedValueIndex = data.findIndex((r) => {
        if (typeof r.value === "number") {
          return r.value === existingValue;
        }
        return r.value === String(existingValue);
      });
      console.log(
        "findSelectedValueIndex",
        existingValue,
        findSelectedValueIndex
      );
      setInitialValueIndex(
        findSelectedValueIndex !== -1 ? findSelectedValueIndex : 0
      );
    }
  }, [data]);

  return (
    <View className="w-full flex-1 max-h-[420px] flex items-center justify-center relative mt-6 sm-1:mt-10">
      <Animated.FlatList
        className="relative z-10 w-full"
        initialScrollIndex={initialValueIndex}
        data={responses}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        snapToInterval={itemHeight}
        onMomentumScrollEnd={momentumScrollEnd}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        getItemLayout={(_, index) => ({
          length: itemHeight,
          offset: itemHeight * index,
          index,
        })}
      />
      <View className="w-full absolute top-[180px] bottom-0 left-0 right-0 z-0 h-[58px] flex items-start justify-center">
        <View className="w-[14px] h-[4px] bg-dark -ml-6"></View>
      </View>
    </View>
  );
}
