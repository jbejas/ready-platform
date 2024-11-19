import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Image,
} from "react-native";
import DynamicButton from "@components/DynamicButton/DynamicButton";
import Animated from "react-native-reanimated";
import Dots from "@components/Dots";

interface Props {
  showPaymentModal?: () => void;
}

export default function ReflectionsScroller({ showPaymentModal }: Props) {
  const [dotIndex, setDotIndex] = useState<number>(0);

  const updateDots = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const x = event.nativeEvent.contentOffset.x;
    const index = Math.round(x / width);
    setDotIndex(index);
  };

  const { width } = Dimensions.get("window");

  return (
    <View className="w-screen -ml-6">
      <Animated.ScrollView
        pagingEnabled
        horizontal
        className="w-full h-[420px]"
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={updateDots}
      >
        <View className="w-screen h-full flex items-center justify-start px-6 pb-6">
          <Image
            source={require("@assets/images/mindset-header.png")}
            className="w-full h-[180px] mb-6"
          />
          <Text
            allowFontScaling={false}
            className="text-dark text-[32px] font-jokkerl mb-4 w-full"
          >
            Mindset
          </Text>
          <Text
            allowFontScaling={false}
            className="text-dark mb-2 font-jokkerl leading-5 w-full"
          >
            Mindset is the lens through which we view the world and approach
            life's challenges. It encompasses our beliefs, attitudes, and
            perceptions that shape...
          </Text>
          <DynamicButton
            onPress={() => showPaymentModal()}
            label="Coming soon"
            type={"full-transparent"}
            size={"medium"}
            rounded="2xl"
            textStyles={"text-[17px] font-jokkerl"}
            textColor={"text-dark"}
            customStyles={"mb-2 mt-4 w-full"}
          />
        </View>
        <View className="w-screen h-full flex items-center justify-start p-6">
          <Image
            source={require("@assets/images/mindset-header.png")}
            className="w-full h-[180px] my-6"
          />
          <Text
            allowFontScaling={false}
            className="text-dark text-[32px] font-jokkerl mb-4 w-full"
          >
            Mindset
          </Text>
          <Text
            allowFontScaling={false}
            className="text-dark mb-2 font-jokkerl leading-5 w-full"
          >
            Mindset is the lens through which we view the world and approach
            life's challenges. It encompasses our beliefs, attitudes, and
            perceptions that shape...
          </Text>
          <DynamicButton
            onPress={() => showPaymentModal()}
            label="Coming soon"
            type={"full-transparent"}
            size={"medium"}
            rounded="2xl"
            textStyles={"text-[17px] font-jokkerl"}
            textColor={"text-dark"}
            customStyles={"mb-2 mt-4 w-full"}
          />
        </View>
        <View className="w-screen h-full flex items-center justify-start p-6">
          <Image
            source={require("@assets/images/mindset-header.png")}
            className="w-full h-[180px] my-6"
          />
          <Text
            allowFontScaling={false}
            className="text-dark text-[32px] font-jokkerl mb-4 w-full"
          >
            Mindset
          </Text>
          <Text
            allowFontScaling={false}
            className="text-dark mb-2 font-jokkerl leading-5 w-full"
          >
            Mindset is the lens through which we view the world and approach
            life's challenges. It encompasses our beliefs, attitudes, and
            perceptions that shape...
          </Text>
          <DynamicButton
            onPress={() => showPaymentModal()}
            label="Coming soon"
            type={"full-transparent"}
            size={"medium"}
            rounded="2xl"
            textStyles={"text-[17px] font-jokkerl"}
            textColor={"text-dark"}
            customStyles={"mb-2 mt-4 w-full"}
          />
        </View>
      </Animated.ScrollView>
      <Dots dots={3} dotIndex={dotIndex} />
    </View>
  );
}
