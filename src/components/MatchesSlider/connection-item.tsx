import React, { useEffect, useState } from "react";
import { Dimensions, View, Text, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import dayjs from "dayjs";

// Amplify Graph Queries
import { getUrl } from "aws-amplify/storage";

import { IconCircleCheck } from "@tabler/icons-react-native";

interface PageProps {
  index: number;
  match: any;
  onPress: (index) => void;
}

const { height, width } = Dimensions.get("window");

const ConnectionItem: React.FC<PageProps> = ({ index, match, onPress }) => {
  const [metadata, setMetadata] = useState<string | boolean>(false);
  const [userMainImage, setUserMainImage] = useState<string | boolean>(false);

  const loadUser = async () => {
    try {
      if (match.photos.items.length > 0) {
        const imageURI = await getUrl({
          path: `public/${
            match.photos.items.sort(
              (a, b) => a.photo.sortOrder - b.photo.sortOrder
            )[0].photo.name
          }`,
        });
        setUserMainImage(String(imageURI.url));
      }
      const age = dayjs().diff(match.birthdate, "year");
      const metadata = [];
      metadata.push(age);
      metadata.push(match.gender);
      if (match.hometown) metadata.push(match.hometown);
      setMetadata(metadata.join(" / "));
    } catch (error) {
      console.log("Error loadUser", error);
    }
  };

  useEffect(() => {
    loadUser();
  }, [match]);

  return (
    <View
      key={index}
      className="w-screen h-full flex items-center justify-start mt-40"
    >
      <Pressable onPress={() => onPress(index)}>
        <View
          className="rounded-2xl overflow-hidden flex items-center justify-start bg-gray relative"
          style={[{ width: width * 0.9, height: height * 0.65 }]}
        >
          {match.isLiked ? (
            <View className="absolute top-4 right-4 z-20 w-[24px] h-[24px] rounded-full bg-white flex items-center justify-center">
              <IconCircleCheck
                width={30}
                height={30}
                strokeWidth={1}
                color={"#000"}
              />
            </View>
          ) : null}
          <Image
            source={{ uri: `${userMainImage}` }}
            style={[{ width: width * 0.9, height: height * 0.65 }]}
            className="object-cover"
          />
          <View className="absolute bottom-0 left-0 w-full h-[150px] z-0">
            <LinearGradient
              colors={["rgba(0,0,0,0)", "#000"]}
              className="w-full h-full absolute left-0 bottom-0 rounded-b-3xl"
            />
          </View>
          <View className="absolute bottom-0 left-0 w-full z-10 px-4 pb-4 flex flex-row items-center justify-between">
            <View className="w-full">
              <Text
                allowFontScaling={false}
                className="text-white w-full text-[36px] font-jokkerl  -tracking-widest"
              >
                {match.firstName} {match.lastName.charAt(0)}{" "}
              </Text>
              <Text
                allowFontScaling={false}
                className="text-white w-full text-[16px] font-jokkerl  mt-1"
              >
                {metadata}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export { ConnectionItem };
