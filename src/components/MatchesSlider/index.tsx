import { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import Animated from "react-native-reanimated";
import { Skeleton } from "moti/skeleton";
import Dots from "@components/Dots";

// SubComponents
import { ConnectionItem } from "./connection-item";

const { height, width } = Dimensions.get("window");

const SkeletonCommonProps = {
  colorMode: "light",
  transition: {
    type: "timing",
    duration: 1500,
  },
  backgroundColor: "#D4D4D4",
} as const;

type MatchesProps = {
  data: any;
  onPress: (index) => void;
};

const MatchesSlider: React.FC<MatchesProps> = ({ data, onPress }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const momentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    try {
      const x = event.nativeEvent.contentOffset.x;
      const index = Math.round(x / width);
      setCurrentIndex(index);
    } catch (error) {
      console.log("momentumScrollEnd error:", error);
    }
  };

  return (
    <View className="flex w-full h-full items-center justify-center relative">
      <View className="w-screen h-full flex-1 flex items-center justify-start mt-40 absolute top-0 left-0 bg-card -z-10">
        <Skeleton.Group show={true}>
          <Skeleton
            height={height * 0.5}
            width={width * 0.9}
            radius={10}
            {...SkeletonCommonProps}
          />
          <View className="w-full flex flex-row items-center justify-between px-6 mt-4">
            <View className="w-2/3">
              <Skeleton
                height={40}
                width={"70%"}
                radius={5}
                {...SkeletonCommonProps}
              />
              <View className="w-full mt-[7px]">
                <Skeleton
                  height={20}
                  width={"50%"}
                  radius={5}
                  {...SkeletonCommonProps}
                />
              </View>
            </View>
            <View className="w-1/3 flex items-end justify-center -mt-[5px]">
              <Skeleton
                height={50}
                width={50}
                radius={"round"}
                {...SkeletonCommonProps}
              />
            </View>
          </View>
        </Skeleton.Group>
      </View>
      {data?.length > 0 && (
        <>
          <Animated.ScrollView
            pagingEnabled
            horizontal
            className="flex-1 w-full bg-card"
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(e) => momentumScrollEnd(e)}
          >
            {data.map((match, index) => {
              return (
                <ConnectionItem
                  match={match}
                  index={index}
                  key={index.toString()}
                  onPress={() => onPress(index)}
                />
              );
            })}
          </Animated.ScrollView>
          <View className="w-full absolute left-0 bottom-24 h-10">
            <Dots dots={data.length} dotIndex={currentIndex} />
          </View>
        </>
      )}
      {data?.length === 0 && (
        <View className="w-full h-full flex items-center justify-center px-6 bg-card">
          <Text
            allowFontScaling={false}
            className="font-jokkerl text-[36px] -tracking-widest text-center"
          >
            Why not adjust those filters?
          </Text>
          <Text
            allowFontScaling={false}
            className="font-jokkerl text-center  text-[16px] -tracking-wide mt-8"
          >
            You've seen everyone nearby. But, never fear, someone great could be
            just outside your filters.
          </Text>
        </View>
      )}
    </View>
  );
};

export { MatchesSlider };
