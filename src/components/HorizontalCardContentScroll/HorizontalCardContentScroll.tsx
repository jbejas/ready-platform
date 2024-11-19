import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
// Expo BlurView
import { BlurView } from "expo-blur";

// Define the type for each item
interface CardItem {
  id: string;
  title: string;
  image: any;
}

// Sample data for the cards
const DATA: CardItem[] = [
  {
    id: "1",
    title: "Connect better with yourself",
    image: require("@assets/textures/red.jpg"),
  },
  {
    id: "2",
    title: "Motivation",
    image: require("@assets/textures/blue.jpg"),
  },
  {
    id: "3",
    title: "Kindness",
    image: require("@assets/textures/green.jpg"),
  },
  {
    id: "4",
    title: "Compassion",
    image: require("@assets/textures/sea.jpg"),
  },
];

const HorizontalCardScroll = () => {
  const renderItem = ({ item }: { item: CardItem }) => (
    <View
      style={styles.shadow}
      className="bg-white/70 rounded-[32px] mr-4 w-[220px] h-[220px] relative flex items-center justify-center"
    >
      <Image
        source={item.image}
        className="w-full h-full absolute rounded-[32px]"
      />
      <BlurView
        className="rounded-b-[32px] absolute bottom-0 left-0 w-full h-[45%]"
        intensity={30}
        style={{
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          overflow: "hidden",
          backgroundColor: "transparent",
        }}
      />
      <View className="absolute bottom-0 left-0 bg-transparent h-[45%] w-full py-2 px-4 rounded-b-[32px]">
        <Text
          allowFontScaling={false}
          className="text-white text-2xl font-jokkerl text-wrap leading-6"
        >
          {item.title}
        </Text>
      </View>
    </View>
  );

  return (
    <View className="h-[220px] w-screen -ml-4 -mr-4">
      <FlatList
        className="pl-4 pr-4 mr-4 overflow-visible"
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.23,
    shadowRadius: 11.78,
    elevation: 15,
  },
});

export default HorizontalCardScroll;
