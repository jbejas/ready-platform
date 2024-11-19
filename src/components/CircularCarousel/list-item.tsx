import {
  Dimensions,
  ImageProps,
  Image,
  View,
  Text,
  Pressable,
} from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

type CircularCarouselListItemProps = {
  imageSrc: ImageProps["source"];
  index: number;
  contentOffset: Animated.SharedValue<number>;
  onPress: (item) => void;
};

const { width: windowWidth } = Dimensions.get("window");

export const ListItemWidth = windowWidth / 1.5;

const CircularCarouselListItem: React.FC<CircularCarouselListItemProps> = ({
  imageSrc,
  index,
  contentOffset,
  onPress,
}) => {
  // @ts-ignore
  const rStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * ListItemWidth,
      index * ListItemWidth,
      (index + 1) * ListItemWidth,
    ];

    const translateYOutputRange = [0, -ListItemWidth / 20, 0];

    const opacityOutputRange = [0.7, 1, 0.7];

    const scaleOutputRange = [0.9, 1, 0.9];

    const rotateOutputRange = [+3, 0, -3];

    const translateY = interpolate(
      contentOffset.value,
      inputRange,
      translateYOutputRange,
      Extrapolate.CLAMP
    );

    const opacity = interpolate(
      contentOffset.value,
      inputRange,
      opacityOutputRange,
      Extrapolate.CLAMP
    );

    const scale = interpolate(
      contentOffset.value,
      inputRange,
      scaleOutputRange,
      Extrapolate.CLAMP
    );

    const imageRotate = interpolate(
      contentOffset.value,
      inputRange,
      rotateOutputRange,
      Extrapolate.CLAMP
    );

    return {
      opacity,
      transform: [
        {
          translateY,
        },
        {
          scale,
        },
        {
          rotate: `${imageRotate}deg`,
        },
      ],
    };
  });

  return (
    <Animated.View
      className="flex items-center justify-center"
      style={[
        {
          width: ListItemWidth + 10,
          aspectRatio: 1,
          elevation: 5,
          shadowOpacity: 0.2,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 20,
        },
        rStyle,
      ]}
    >
      {/* 
        I've used the React Native Image because it was crashing on Android:
      */}
      <Pressable onPress={() => onPress(index)}>
        <View
          className="relative"
          style={{
            width: ListItemWidth,
          }}
        >
          <Image
            source={imageSrc}
            className="rounded-3xl"
            style={{
              height: 400,
              width: ListItemWidth,
            }}
          />
          <LinearGradient
            // Background Linear Gradient
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]}
            className="w-full h-[30%] absolute left-0 bottom-0 rounded-b-3xl"
          />
          <Text
            allowFontScaling={false}
            className="absolute bottom-8 left-4 text-white font-jokkerl text-[20px]"
          >
            Daria
          </Text>
          <Text
            allowFontScaling={false}
            className="absolute bottom-4 left-4 text-slate7 font-jokkerl text-[12px]"
          >
            Brooklyn, NY
          </Text>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export { CircularCarouselListItem };
