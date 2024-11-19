import { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";

import MaskedView from "@react-native-masked-view/masked-view";

import dayjs from "dayjs";

import { LinearGradient } from "expo-linear-gradient";

// Amplify Graph Queries
import { getUrl } from "aws-amplify/storage";

// Safe Area Lib
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

enum ArrowDirection {
  IS_VERTICAL = 0,
  IS_HORIZONTAL = 1,
}

type MatchesProps = {
  data: any;
  onPress: (index) => void;
};

function MatchesSliderV2({ data, onPress }: MatchesProps) {
  // Safe Area Insets
  const insets = useSafeAreaInsets();

  const PAGE_WIDTH = width;
  const PAGE_HEIGHT = height - insets.top - insets.bottom;
  const directionAnim = useSharedValue<ArrowDirection>(
    ArrowDirection.IS_VERTICAL
  );
  const [isVertical, setIsVertical] = useState(true);

  const animationStyle = useCallback(
    (value: number) => {
      "worklet";
      const translateY = interpolate(value, [-1, 0, 1], [-PAGE_HEIGHT, 0, 0]);
      const translateX = interpolate(value, [-1, 0, 1], [-PAGE_WIDTH, 0, 0]);
      const zIndex = interpolate(value, [-1, 0, 1], [300, 0, -300]);
      const scale = interpolate(value, [-1, 0, 1], [1, 1, 0.7]);
      return {
        transform: [isVertical ? { translateY } : { translateX }, { scale }],
        zIndex,
      };
    },
    [PAGE_HEIGHT, PAGE_WIDTH, isVertical]
  );

  useAnimatedReaction(
    () => directionAnim.value,
    (direction) => {
      switch (direction) {
        case ArrowDirection.IS_VERTICAL:
          runOnJS(setIsVertical)(true);
          break;
        case ArrowDirection.IS_HORIZONTAL:
          runOnJS(setIsVertical)(false);
          break;
      }
    },
    []
  );

  return (
    <View className="w-screen h-screen flex items-center justify-center pt-10">
      <Carousel
        loop
        style={{
          width: PAGE_WIDTH,
          height: PAGE_HEIGHT,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
          overflow: "visible",
          // marginTop: insets.top,
        }}
        vertical={isVertical}
        width={PAGE_WIDTH}
        height={PAGE_HEIGHT}
        data={data}
        renderItem={({ index, animationValue }) => (
          <Item
            connection={data[index]}
            key={index}
            index={index}
            animationValue={animationValue}
            directionAnim={directionAnim}
            onPress={(index) => onPress(index)}
          />
        )}
        // @ts-ignore
        customAnimation={animationStyle}
      />
    </View>
  );
}

const Item: React.FC<{
  connection: any;
  index: number;
  animationValue: Animated.SharedValue<number>;
  directionAnim: Animated.SharedValue<ArrowDirection>;
  onPress?: (index) => void;
}> = ({ connection, animationValue, index, onPress }) => {
  // Safe Area Insets
  const insets = useSafeAreaInsets();
  // Constants
  const ITEM_WIDTH = width;
  const ITEM_HEIGHT = height;

  const [metadata, setMetadata] = useState<string | boolean>(false);
  const [userMainImage, setUserMainImage] = useState<string | boolean>(false);

  const maskStyle = useAnimatedStyle(() => {
    const zIndex = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [300, 0, -300]
    );

    const backgroundColor = interpolateColor(
      animationValue.value,
      [-1, 0, 1],
      ["transparent", "transparent", "transparent"]
    );

    return {
      backgroundColor,
      zIndex,
    };
  }, [animationValue]);

  const loadUser = async () => {
    try {
      if (connection.photos.items.length > 0) {
        const imageURI = await getUrl({
          path: `public/${
            connection.photos.items.sort(
              (a, b) => a.photo.sortOrder - b.photo.sortOrder
            )[0].photo.name
          }`,
        });
        setUserMainImage(String(imageURI.url));
      }
      const age = dayjs().diff(connection.birthdate, "year");
      const metadata = [];
      metadata.push(age);
      metadata.push(connection.gender);
      if (connection.location) {
        const locationWithoutZip = connection.location
          .split(",")
          .slice(0, -1) // Remove the last element (country)
          .join(", ")
          .replace(
            /\s*\b\d{5}(?:-\d{4})?\b|\s*\b[A-Z]\d[A-Z] ?\d[A-Z]\d\b/g,
            ""
          )
          .trim();
        metadata.push(locationWithoutZip);
      }
      // if (connection.location) {
      //   const locationWithoutZip = connection.location.split(" ").pop();
      //   metadata.push(locationWithoutZip);
      // }
      setMetadata(metadata.join(" / "));
    } catch (error) {
      console.log("Error loadUser", error);
    }
  };

  useEffect(() => {
    loadUser();
  }, [connection]);

  const WIDTH_IMAGE = ITEM_HEIGHT > 800 ? ITEM_WIDTH * 1.4 : ITEM_WIDTH * 1.1;
  return (
    <Animated.View
      key={index}
      className="flex-1 rounded-xl flex items-center justify-center"
      style={[maskStyle, { paddingTop: insets.top + 30 }]}
    >
      <Pressable onPress={() => onPress(index)} className="w-full h-full">
        <View className="rounded-2xl flex items-center justify-start relative w-full h-full overflow-visible">
          <View
            className="flex items-center justify-center h-full overflow-visible"
            style={{ width: WIDTH_IMAGE }}
          >
            <MaskedView
              className="relative"
              style={styles.maskedView}
              maskElement={
                <View style={styles.maskWrapper}>
                  <Image
                    source={require("@assets/carousel/connection-mask.png")}
                    style={styles.mask}
                    resizeMode="contain"
                  />
                </View>
              }
            >
              <View className="w-full h-full relative flex items-center justify-center">
                {connection.isLiked ? (
                  <View className="absolute right-24 top-36 z-50 flex flex-row items-center justify-center bg-card p-1 rounded-[17px]">
                    <Text className="font-jokkerl text-dark">
                      You sent a spark to {connection.firstName}
                    </Text>
                  </View>
                ) : null}
                {userMainImage ? (
                  <Image
                    source={{ uri: `${userMainImage}` }}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="contain"
                    className="z-20"
                  />
                ) : null}
                <View className="w-full h-full absolute top-0 left-0 bg-light z-10"></View>
                <View
                  className="absolute left-0 w-full flex items-center justify-center z-20"
                  style={{
                    paddingTop: ITEM_HEIGHT * 0.3,
                    paddingBottom: ITEM_HEIGHT * 0.3,
                  }}
                >
                  <LinearGradient
                    colors={["rgba(0,0,0,0)", "#000"]}
                    className="w-full h-[150px] absolute bottom-0"
                  />
                </View>
                <View
                  className="absolute left-0 w-full z-30 flex flex-row items-center justify-between"
                  style={{
                    paddingTop: ITEM_HEIGHT * 0.25,
                    paddingBottom: ITEM_HEIGHT * 0.25,
                  }}
                >
                  <View className="w-full absolute bottom-0 px-8 flex items-center justify-center">
                    <View className="w-full px-20 flex flex-row items-center justify-start">
                      <Text
                        allowFontScaling={false}
                        className="text-white text-[36px] font-jokkerl -tracking-widest"
                      >
                        {connection.firstName} {connection.lastName.charAt(0)}{" "}
                      </Text>
                      {/* {connection.isLiked ? (
                        <View className="w-[24px] h-[24px] rounded-full bg-white flex items-center justify-center">
                          <IconFlare
                            width={25}
                            height={25}
                            strokeWidth={1}
                            color={"#000"}
                          />
                        </View>
                      ) : null} */}
                    </View>

                    <Text
                      allowFontScaling={false}
                      className="text-white text-[16px] font-jokkerl mt-1 w-full px-20"
                    >
                      {metadata}
                    </Text>
                  </View>
                </View>
              </View>
            </MaskedView>
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  maskedView: {
    flexDirection: "row",
    height: "100%",
  },
  maskWrapper: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mask: {
    width: "100%",
    height: "100%",
  },
  image: {
    flex: 1,
    height: "100%",
  },
});

export default MatchesSliderV2;
