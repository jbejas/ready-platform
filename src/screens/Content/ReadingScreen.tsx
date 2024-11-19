import { useState, useEffect } from "react";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import dayjs from "dayjs";
import { Text, View } from "react-native";

// Segment
import { useAnalytics } from "@segment/analytics-react-native";

// Utils
import ImageCache from "@src/components/ImageCache";
import { getImageURL } from "@utils/images";

// Define the props type for your navigation stack
type Props = {
  route: RouteProp<any>;
  navigation: NavigationProp<any>;
};

export default function ReadingScreen({ route, navigation }: Props) {
  // Segment
  const { track } = useAnalytics();
  // Navigation params
  const { content } = route.params;

  // Constants
  const [headerImage, setHeaderImage] = useState<string | null>(null);

  useEffect(() => {
    const getImage = async () => {
      const headerImageURL = await getImageURL(content.image);
      setHeaderImage(headerImageURL);
    };
    getImage();
    console.log("Content", content);
  }, []);

  useEffect(() => {
    track("Reading Screen", {
      title: content.title,
    });
  }, []);

  return (
    <SafeAreaComponent testID="Reading" scrollable>
      <View className="mb-[150px]">
        <Text
          allowFontScaling={false}
          className="font-jokkerl text-[36px] text-dark mb-1 text-center w-full"
        >
          {content.title}
        </Text>
        {/* <Text
          allowFontScaling={false}
          className="font-jokkerl text-[16px] text-dark mb-4"
        >
          {content.subTitle}
        </Text> */}
        <Text
          allowFontScaling={false}
          className="font-jokkerl text-[16px] text-dark mt-4 w-full text-center"
        >
          {content.author.firstName} {content.author.lastName} / Published on{" "}
          {dayjs(content.updatedAt).format("MM/DD/YYYY")} in{" "}
          {content.contentCategory.name}
        </Text>
        {headerImage ? (
          <ImageCache
            uri={headerImage}
            className="w-full h-[120px] my-8 rounded-[8px]"
          />
        ) : null}
        <Text
          allowFontScaling={false}
          className="font-jokkerl text-[16px] text-dark mb-4 leading-6"
        >
          {content.text}
        </Text>
      </View>
    </SafeAreaComponent>
  );
}
