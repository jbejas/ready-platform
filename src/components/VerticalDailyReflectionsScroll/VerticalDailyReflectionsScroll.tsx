import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const ITEM_HEIGHT = 50; // Height of each item in the list

const VerticalDailyReflectionsScroll = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState(0); // State to manage selected index

  const renderItem = ({ item, index }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const opacityStyle = useAnimatedStyle(() => {
      const distance = Math.abs(index - selectedIndex);
      let opacity = 0;

      if (distance === 0) {
        opacity = 1;
      } else if (distance === 1) {
        opacity = 0.6;
      } else if (distance === 2) {
        opacity = 0.4;
      } else {
        opacity = 0;
      }

      return {
        opacity: withSpring(opacity),
      };
    });

    return (
      <Animated.View style={[styles.item, opacityStyle]}>
        <Text allowFontScaling={false}>{item.label}</Text>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${index}`}
        getItemLayout={(data, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
        onMomentumScrollEnd={(event) => {
          const offsetY = event.nativeEvent.contentOffset.y;
          const index = Math.floor(offsetY / ITEM_HEIGHT);
          setSelectedIndex(index);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default VerticalDailyReflectionsScroll;
