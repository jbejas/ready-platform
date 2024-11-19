import BlurGradient from "@src/components/BlurGradient";
import React, { useEffect, useRef } from "react";
import {
  NativeScrollEvent,
  NativeScrollPoint,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  View,
} from "react-native";

const SELECT_HEIGHT = 72;
const DEFAULT_TIME_OUT_FIX = 380;
const CONTAINER_HEIGHT = 400;
const MAX_INTENSITY = 20;
const HEIGHT_BLUR = 50;

interface Value {
  label?: string;
  value: string | number;
}

export interface SelectScrollviewPickerProps {
  items: Value[];
  selected: string | number;
  onChange?(value: Value): void;
}

const SelectScrollviewPicker = ({
  items,
  selected,
  onChange,
}: SelectScrollviewPickerProps) => {
  const auxCONTAINER_HEIGHT = (CONTAINER_HEIGHT - SELECT_HEIGHT) / 2;
  const intervalFix = useRef<NodeJS.Timeout>();

  const primaryScrollRef = useRef<ScrollView>(null);
  const secondaryScrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (selected) {
      setTimeout(() => {
        selectTo(
          items.findIndex(
            (item) => item.value?.toString() === selected?.toString()
          )
        );
      }, DEFAULT_TIME_OUT_FIX);
    }
  }, [SELECT_HEIGHT, CONTAINER_HEIGHT, selected]);

  const getItem = (isPrimary: boolean) => {
    if (items.length === 0) {
      return null;
    }

    return items.map((item, i) => {
      return (
        <View
          key={i}
          style={[
            {
              justifyContent: "center",
              alignItems: "center",
              height: SELECT_HEIGHT,
            },
          ]}
        >
          <Text className="font-jokkerl text-primary-blue-100 text-[25px] text-center">
            {isPrimary && item.label}
          </Text>
        </View>
      );
    });
  };

  const checkIntervalFix = () => {
    if (intervalFix && intervalFix.current) clearInterval(intervalFix.current);
  };

  const getScrollIndex = (scrollY: NativeScrollPoint["y"]) => {
    const y = Math.round(scrollY);
    return Math.round(y / SELECT_HEIGHT);
  };

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    // checkIntervalFix();
    const y = e.nativeEvent.contentOffset.y;
    if (secondaryScrollRef && secondaryScrollRef.current) {
      secondaryScrollRef.current.scrollTo({ y, animated: false });
    }
  };

  const selectTo = (index: number) => {
    const y = index * SELECT_HEIGHT;
    if (primaryScrollRef && primaryScrollRef.current) {
      primaryScrollRef.current.scrollTo({ y, animated: true });
    }
  };

  const onScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    checkIntervalFix();

    const currentIndex = getScrollIndex(event.nativeEvent.contentOffset.y);
    intervalFix.current = setTimeout(() => {
      if (onChange) {
        onChange(items[currentIndex]);
      }
    }, DEFAULT_TIME_OUT_FIX);
  };

  return (
    <View style={{ height: CONTAINER_HEIGHT }} className="relative">
      <View
        style={{
          height: CONTAINER_HEIGHT,
        }}
      >
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          onScroll={onScroll}
          ref={primaryScrollRef}
          decelerationRate={0.5}
          scrollEventThrottle={16}
          snapToInterval={SELECT_HEIGHT}
          nestedScrollEnabled={false}
          snapToAlignment={"center"}
          snapToOffsets={items.map((item, index) => SELECT_HEIGHT * index)}
        >
          <View style={{ height: auxCONTAINER_HEIGHT }} />
          {getItem(true)}
          <View style={{ height: auxCONTAINER_HEIGHT }} />
        </ScrollView>
      </View>
      <View
        className="border border-primary-blue-100 rounded-lg"
        style={[
          {
            height: SELECT_HEIGHT,
            marginTop: -(CONTAINER_HEIGHT / 2 + SELECT_HEIGHT / 2),
          },
        ]}
        pointerEvents="none"
      >
        <View
          style={{
            position: "absolute",
            height: SELECT_HEIGHT - 2,
            width: "100%",
          }}
        >
          <View
            style={{
              width: "100%",
            }}
          />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          ref={secondaryScrollRef}
          scrollEnabled={false}
          scrollEventThrottle={16}
          onScroll={onScrollEnd}
        >
          {getItem(false)}
        </ScrollView>
      </View>

      <View
        className="absolute top-0 left-0 right-0"
        style={{ height: HEIGHT_BLUR }}
      >
        <BlurGradient
          startIntensity={MAX_INTENSITY}
          endIntensity={0}
          height={HEIGHT_BLUR}
        />
      </View>
      <View
        className="absolute bottom-0 left-0 right-0"
        style={{ height: HEIGHT_BLUR }}
      >
        <BlurGradient
          startIntensity={0}
          endIntensity={MAX_INTENSITY}
          height={HEIGHT_BLUR}
        />
      </View>
    </View>
  );
};

export default SelectScrollviewPicker;
