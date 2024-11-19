import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Amplify
import { downloadData } from "aws-amplify/storage";

// Set Redux
import { useSelector } from "react-redux";

// Asyn Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

interface UserMenuProps {
  onPress?: () => void;
}

// Define the state structure
interface RootState {
  auth: {
    user: string;
  };
}

export default function UserMenu({ onPress }: UserMenuProps) {
  const [userImage, setUserImage] = useState<string | boolean>(false);

  // Get user
  const user = JSON.parse(useSelector((state: RootState) => state.auth.user));

  useEffect(() => {
    const getUserImage = async () => {
      try {
        const userMainImage = await AsyncStorage.getItem("user-main-image");
        if (user.photos.items.length && userMainImage) {
          setUserImage(userMainImage);
        } else {
          if (user.photos.items.length) {
            const userMainImage = user.photos.items.sort(
              (a, b) => a.photo.sortOrder - b.photo.sortOrder
            )[0].photo.name;
            const downloadResult = await downloadData({
              path: `public/${userMainImage}`,
              // Alternatively, path: ({identityId}) => `protected/${identityId}/album/2024/1.jpg`
              options: {
                onProgress: (event) => {
                  // progress callback
                  // console.log(event.transferredBytes);
                },
              },
            }).result;
            const imageBlob = await downloadResult.body.blob();
            const imageReader = new FileReader();
            imageReader.readAsDataURL(imageBlob);
            imageReader.onloadend = async () => {
              const imageBase64 = imageReader.result;
              await AsyncStorage.setItem(
                "user-main-image",
                String(imageBase64).replace("data:/;base64,", "")
              );
              const userMainImage = await AsyncStorage.getItem(
                "user-main-image"
              );
              setUserImage(userMainImage);
            };
          } else {
            await AsyncStorage.removeItem("user-main-image");
            setUserImage(false);
          }
        }
      } catch (error) {
        console.log("Error getting user image", error);
      }
    };
    getUserImage();
  }, [user]);

  return (
    <View className="flex flex-row items-center justify-center h-[30px] w-[30px] mt-3">
      {/* <Pressable
        className="rounded-full w-[30px] h-[30px] bg-gray flex items-center justify-center overflow-hidden"
        onPress={onPress}
      > */}
      <View className="rounded-full w-[30px] h-[30px] bg-gray flex items-center justify-center overflow-hidden">
        {userImage ? (
          <Image
            source={{ uri: String(userImage) }}
            width={30}
            height={30}
            className="object-cover"
          />
        ) : (
          <LinearGradient
            colors={["#222A43", "#454D67"]}
            className="w-full h-full -rotate-45"
          />
        )}
      </View>
      {/* </Pressable> */}
    </View>
  );
}
