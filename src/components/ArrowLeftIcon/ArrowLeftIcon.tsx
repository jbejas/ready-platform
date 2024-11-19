import * as React from "react";
import { Pressable, Image, View, Text } from "react-native";
import { IconChevronLeft } from "@tabler/icons-react-native";
import { useSelector } from "react-redux";

interface ArrowLeftMenuIconProps {
  onPress: () => void;
  onImagePress?: () => void;
  iconColor?: string;
  navigation?: any;
}

// Define the state structure
interface RootState {
  chat: {
    singleChannelUserImage: string;
    singleChannelUserName: string;
  };
}

export default function ArrowLeftIcon({
  iconColor = "#000",
  onPress,
  onImagePress,
}: ArrowLeftMenuIconProps) {
  // Get Single Channel User Image
  const { singleChannelUserImage, singleChannelUserName } = useSelector(
    (state: RootState) => state.chat
  );

  return (
    <View
      className={`${
        singleChannelUserImage ? "w-[200px]" : ""
      } flex flex-row items-center justify-start`}
    >
      <Pressable onPress={onPress} className="-ml-3">
        <IconChevronLeft
          width={40}
          height={40}
          color={iconColor}
          strokeWidth={1}
        />
      </Pressable>
      {singleChannelUserImage ? (
        <Pressable
          onPress={onImagePress}
          className="flex flex-row items-center justify-start"
        >
          <View className="w-[30px] h-[30px] rounded-full overflow-hidden">
            <Image
              source={{ uri: singleChannelUserImage }}
              className="w-full h-full object-cover"
            />
          </View>
          <Text
            allowFontScaling={false}
            className="font-jokkerl text-dark ml-2 text-[16px]"
          >
            {singleChannelUserName}
          </Text>
        </Pressable>
      ) : null}
    </View>
  );
}
