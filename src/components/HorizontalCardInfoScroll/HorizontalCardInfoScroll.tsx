import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";

// Define the type for each item
interface CardItem {
  id: string;
  count: string;
  title: string;
  subtitle: string;
  image: any;
}

// Sample data for the cards
const DATA: CardItem[] = [
  {
    id: "1",
    count: "9",
    title: "New Sparks",
    subtitle: "You have no sparks yet",
    image: require("@assets/textures/red.jpg"),
  },
  {
    id: "2",
    count: "5",
    title: "Reflections",
    subtitle: "Check in to see your reflections score",
    image: require("@assets/textures/blue.jpg"),
  },
  {
    id: "3",
    count: "3",
    title: "Stories",
    subtitle: "Tap on your avatar to add to your Story",
    image: require("@assets/textures/green.jpg"),
  },
];

const HorizontalCardScroll = () => {
  const renderItem = ({ item }: { item: CardItem }) => (
    <View
      style={styles.shadow}
      className="bg-card-bold rounded-[32px] mr-4 w-[200px] h-[200px] border border-white relative flex items-center justify-center"
    >
      <MaskedView
        className="flex-1 flex-row h-full"
        maskElement={
          <View className="bg-transparent flex-1 items-center justify-center">
            <Text
              allowFontScaling={false}
              className="text-dark font-jokkerl text-[120px]"
            >
              {item.count}
            </Text>
            <Text
              allowFontScaling={false}
              className="text-dark font-jokkerl text-md"
            >
              {item.title}
            </Text>
          </View>
        }
      >
        <Image
          source={item.image}
          className="object-contain w-screen h-screen"
        />
      </MaskedView>
    </View>
  );

  return (
    <View className="h-[200px] w-screen -ml-4 -mr-4">
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
