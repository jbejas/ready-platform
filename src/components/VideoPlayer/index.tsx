import { useVideoPlayer, VideoView } from "expo-video";
import { useEffect, useRef, useState } from "react";
import { View, Pressable, Text } from "react-native";

import {
  IconRewindForward15,
  IconRewindBackward15,
  IconPlayerPlayFilled,
  IconPlayerPause,
} from "@tabler/icons-react-native";

const videoSource =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function VideoPlayer() {
  const ref = useRef(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });

  useEffect(() => {
    const subscription = player.addListener("playingChange", (isPlaying) => {
      setIsPlaying(isPlaying);
    });

    const timeUpdate = setInterval(() => {
      setCurrentTime(player.currentTime);
      setDuration(player.duration);
    }, 1000);

    return () => {
      subscription.remove();
      clearInterval(timeUpdate);
    };
  }, [player]);

  return (
    <View testID="VideoPlayer" className="w-screen h-screen relative">
      <VideoView
        className="w-screen h-screen absolute top-0 left-0 z-0"
        ref={ref}
        player={player}
        nativeControls={false}
        allowsFullscreen
        allowsPictureInPicture
        contentFit="cover"
      />
      <View className="w-screen h-[150px] absolute bottom-12 left-0 flex items-center justify-center z-10">
        <View className="w-full flex flex-row items-center justify-center mb-4">
          <Pressable
            className="w-[50px] h-[50px] bg-gray/50 flex items-center justify-center rounded-full overflow-hidden"
            onPress={() => {
              if (isPlaying) {
                player.pause();
                player.seekBy(-30);
                player.play();
              } else {
                player.seekBy(-30);
              }
            }}
          >
            <IconRewindBackward15 color="white" size={35} />
          </Pressable>
          <Pressable
            className="w-[60px] h-[60px] bg-gray/50 flex items-center justify-center rounded-full overflow-hidden mx-6"
            onPress={() => {
              if (isPlaying) {
                player.pause();
              } else {
                player.play();
              }
              setIsPlaying(!isPlaying);
            }}
          >
            {isPlaying ? (
              <IconPlayerPause color="white" size={35} />
            ) : (
              <IconPlayerPlayFilled color="white" size={35} />
            )}
          </Pressable>
          <Pressable
            className="w-[50px] h-[50px] bg-gray/50 flex items-center justify-center rounded-full overflow-hidden"
            onPress={() => {
              if (isPlaying) {
                player.pause();
                player.seekBy(30);
                player.play();
              } else {
                player.seekBy(-30);
              }
            }}
          >
            <IconRewindForward15 color="white" size={35} />
          </Pressable>
        </View>
        <View className="w-full flex flex-row items-center justify-between px-6 mb-4">
          <View className="w-9/12">
            <Text
              allowFontScaling={false}
              className="text-white font-jokkerl text-left"
            >
              Big Buck Bunny
            </Text>
          </View>
          <View className="w-3/12">
            <Text
              allowFontScaling={false}
              className="text-white font-jokkerl text-right"
            >{`${Math.floor(currentTime / 60)}:${Math.floor(currentTime % 60)
              .toString()
              .padStart(2, "0")} / ${Math.floor(duration / 60)}:${Math.floor(
              duration % 60
            )
              .toString()
              .padStart(2, "0")}`}</Text>
          </View>
        </View>
        <View className="w-full flex items-center justify-center px-6">
          <View className="w-full h-[3px] bg-white/40 rounded-md overflow-hidden">
            <View
              style={{
                width: `${(player.currentTime / player.duration) * 100}%`,
                height: "100%",
                backgroundColor: "#FFF",
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
