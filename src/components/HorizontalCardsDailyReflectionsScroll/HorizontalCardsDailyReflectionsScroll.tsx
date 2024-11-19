import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";

// Define the type for each item
type CardItem = {
  id: string;
  title: string;
  imageUri?: string;
};

type Props = {
  cardsData: CardItem[];
};

const HorizontalCardScroll = ({ cardsData }: Props) => {
  const renderItem = ({ item }: { item: CardItem }) => {
    return (
      <View
        style={styles.shadow}
        className="bg-card rounded-[32px] mr-4 w-[280px] h-[140px] relative flex items-center justify-center px-6 py-9 overflow-hidden"
      >
        {item.id === "1" && (
          <Image
            source={require("@assets/images/CuriosityCard.jpg")}
            style={[{ width: 280, height: 140 }]}
            className="object-cover absolute"
          />
        )}
        {item.id === "2" && (
          <Image
            source={require("@assets/images/GrowthCard.jpg")}
            style={[{ width: 280, height: 140 }]}
            className="object-cover absolute"
          />
        )}
        {item.id === "3" && (
          <Image
            source={require("@assets/images/MindsetCard.jpg")}
            style={[{ width: 280, height: 140 }]}
            className="object-cover absolute"
          />
        )}
        <Text
          allowFontScaling={false}
          className="text-light  font-jokkerl text-[28px]"
        >
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View className="h-[200px] w-screen -ml-4 -mr-4">
      <FlatList
        className="pl-4 pr-4 mr-4 overflow-visible"
        data={cardsData}
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
    shadowOpacity: 0.07,
    shadowRadius: 50,
    elevation: 15,
  },
});

export default HorizontalCardScroll;
