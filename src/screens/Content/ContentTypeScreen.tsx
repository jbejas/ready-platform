import { useState, useEffect } from "react";
import { View, Text, Image, Pressable, Dimensions } from "react-native";
import { RouteProp, NavigationProp } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";

// Utils
import { getImageURL } from "@utils/images";
import { getContent } from "@utils/content";
import ImageCache from "@src/components/ImageCache";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
};

export default function ContentTypeScreen({ route, navigation }: Props) {
  // Route params
  const { contentType, totalReflectionDaysCount } = route.params;

  // Constants
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<any>([]);
  const [contentImages, setContentImages] = useState<string[]>([]);
  const [totalItems, setTotalItems] = useState<number | null>(null);

  const { width } = Dimensions.get("screen");

  useEffect(() => {
    const fetchContent = async () => {
      try {
        if (contentType === "Reading") {
          setTitle("Read");
        }
        if (contentType === "Audio") {
          setTitle("Listen");
        }
        const contentImagesArray = [];
        const contentData = await getContent(
          100,
          contentType,
          totalReflectionDaysCount
        );
        setContents(contentData.items);
        setTotalItems(contentData.total);
        await Promise.all(
          contentData.items.map(async (category, index) => {
            const headerImageURL = await getImageURL(category.image);
            contentImagesArray[index] = headerImageURL;
          })
        );
        setContentImages(contentImagesArray);
      } catch (error) {
        console.log("fetchContent Error", error);
      }
    };
    fetchContent();
  }, []);

  const handleContentNavigation = async (content) => {
    if (content.contentType?.name === "Audio") {
      navigation.navigate("AudioScreen", {
        content,
      });
    }
    if (content.contentType?.name === "Reading") {
      navigation.navigate("ReadingScreen", {
        content,
      });
    }
  };

  return (
    <View testID="screen.ContentType" className="w-screen h-screen relative">
      <View className="absolute top-0 w-screen h-screen z-0">
        <LinearGradient
          colors={["FBF2F4", "#F7EAEC"]}
          className="w-full h-full absolute left-0 bottom-0 rounded-b-3xl"
        />
      </View>
      <SafeAreaComponent testID="Learn" scrollable relative>
        <Text className="font-jokkerl text-[30px] mb-6">
          {title}{" "}
          {totalItems ? (
            <Text className="font-jokkerl text-[16px]">({totalItems})</Text>
          ) : null}
        </Text>
        <View className="flex flex-row flex-wrap justify-between pb-36">
          {contents.map((content, index) => (
            <Pressable
              key={index}
              onPress={() => handleContentNavigation(content)}
              style={{ width: width / 2 - 32 }}
              className="mb-10"
            >
              <View className="w-full h-[240px] flex items-center justify-start bg-card mr-3 relative rounded-[8px] overflow-hidden">
                {contentImages[index] ? (
                  <ImageCache
                    uri={contentImages[index]}
                    className="w-full h-[120px] rounded-t-[8px]"
                  />
                ) : null}
                <View className="w-full h-[120px] p-4">
                  <Text
                    allowFontScaling={false}
                    className="text-dark text-[18px] font-jokkerl w-full h-[64px]"
                    numberOfLines={3}
                    ellipsizeMode="tail"
                  >
                    {content.title}
                  </Text>
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </SafeAreaComponent>
    </View>
  );
}
