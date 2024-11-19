import { FlatList, ImageProps, View } from "react-native";
import { CircularCarouselListItem, ListItemWidth } from "./list-item";
import { useSharedValue } from "react-native-reanimated";

type CircularCarouselProps = {
  data: ImageProps["source"][];
  onPress: (index) => void;
};

const CircularCarousel: React.FC<CircularCarouselProps> = ({
  data,
  onPress,
}) => {
  const contentOffset = useSharedValue(0);

  return (
    <View className="flex w-full items-center justify-center">
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        scrollEventThrottle={16} // 60fps -> 16ms (1000ms / 60fps)
        onScroll={(event) => {
          contentOffset.value = event.nativeEvent.contentOffset.x;
        }}
        pagingEnabled
        snapToInterval={ListItemWidth}
        className="h-[70%] w-full"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 55,
        }}
        horizontal
        renderItem={({ item, index }) => {
          return (
            <CircularCarouselListItem
              contentOffset={contentOffset}
              imageSrc={item}
              index={index}
              onPress={() => onPress(index)}
            />
          );
        }}
      />
    </View>
  );
};

export { CircularCarousel };
