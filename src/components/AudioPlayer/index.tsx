import { Audio } from "expo-av";
import { useEffect, useState } from "react";
import { View, Pressable, Text, Image } from "react-native";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

import {
  IconRewindForward15,
  IconRewindBackward15,
  IconPlayerPlayFilled,
  IconPlayerPause,
} from "@tabler/icons-react-native";

// Skeleton
import { Skeleton } from "moti/skeleton";

// Utils
import { getAudioURL } from "@utils/audio";
dayjs.extend(duration);
const SkeletonCommonProps = {
  colorMode: "light",
  transition: {
    type: "timing",
    duration: 1500,
  },
  backgroundColor: "#D4D4D4",
} as const;

type Props = {
  content: any;
};

export default function AudioPlayer({ content }: Props) {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [audio, setAudio] = useState<Audio.Sound | null>(null); // Add state for audio reference

  async function loadAndPlayAudio() {
    setIsLoading(true);
    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
    });
    const getAudioURI = await getAudioURL(content.media);
    const soundURL = String(getAudioURI.url).split("?")[0];
    const { sound, status } = await Audio.Sound.createAsync(
      {
        uri: soundURL,
        headers: {
          key: content.id,
        },
      },
      { isLooping: false },
    );
    if (status.isLoaded) {
      setAudio(sound); // Store the audio reference
      await sound.playAsync();
      setIsPlaying(true);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadAndPlayAudio();
  }, []);

  useEffect(() => {
    if (audio) {
      try {
        const timeUpdate = setInterval(async () => {
          const audioStatus = await audio.getStatusAsync();
          if (audioStatus.isLoaded) {
            setCurrentTime(audioStatus.positionMillis);
            setDuration(audioStatus.durationMillis);
          }
        }, 1000);
        return () => {
          clearInterval(timeUpdate);
          clearAudio();
        };
      } catch (error) {
        console.log("Get audio status error", error);
      }
    }
  }, [audio]);

  const clearAudio = async () => {
    await audio.stopAsync();
    await audio.unloadAsync();
  };

  return (
    <View className="w-screen h-screen relative bg-orange10/50">
      <View className="w-screen h-screen">
        <Image
          source={require("@assets/images/audio-bg.png")}
          className="object-fit w-screen h-screen"
        />
      </View>
      {!isLoading ? (
        <View className="w-screen h-[150px] absolute bottom-12 left-0 flex items-center justify-center z-10">
          <View className="w-full flex flex-row items-center justify-center mb-4">
            <Pressable
              className="w-[50px] h-[50px] bg-gray/50 flex items-center justify-center rounded-full overflow-hidden"
              onPress={() => {
                if (isPlaying) {
                  audio.pauseAsync();
                  audio.playFromPositionAsync(currentTime - 15000);
                  audio.playAsync();
                } else {
                  audio.playFromPositionAsync(currentTime - 15000);
                }
              }}
            >
              <IconRewindBackward15 color="white" size={35} />
            </Pressable>
            <Pressable
              className="w-[60px] h-[60px] bg-gray/50 flex items-center justify-center rounded-full overflow-hidden mx-6"
              onPress={() => {
                if (isPlaying) {
                  audio.pauseAsync();
                } else {
                  audio.playAsync();
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
                  audio.pauseAsync();
                  audio.playFromPositionAsync(currentTime + 15000);
                  audio.playAsync();
                } else {
                  audio.playFromPositionAsync(currentTime + 15000);
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
                {content.title}
              </Text>
            </View>
            <View className="w-3/12">
              <Text
                allowFontScaling={false}
                className="text-white font-jokkerl text-right"
              >{`${dayjs.duration(currentTime).format("m:ss")} / ${dayjs
                .duration(duration)
                .format("m:ss")}`}</Text>
            </View>
          </View>
          <View className="w-full flex items-center justify-center px-6">
            <View className="w-full h-[3px] bg-white/40 rounded-md overflow-hidden">
              <View
                style={{
                  width: `${(currentTime / duration) * 100}%`,
                  height: "100%",
                  backgroundColor: "#FFF",
                }}
              />
            </View>
          </View>
        </View>
      ) : (
        <View className="w-screen h-[150px] absolute bottom-12 left-0 flex items-center justify-center z-20">
          <View className="w-full flex flex-row items-center justify-center mb-4">
            <Skeleton
              height={54}
              width={54}
              radius={27}
              {...SkeletonCommonProps}
            />
            <View className="mx-6">
              <Skeleton
                height={60}
                width={60}
                radius={30}
                {...SkeletonCommonProps}
              />
            </View>
            <Skeleton
              height={54}
              width={54}
              radius={27}
              {...SkeletonCommonProps}
            />
          </View>
          <View className="w-full flex flex-row justify-between">
            <View className="w-[100px] flex flex-row ml-5 mr-5">
              <Skeleton
                height={15}
                width={"75%"}
                radius={5}
                {...SkeletonCommonProps}
              />
            </View>
            <View className="w-[80px] flex justify-end items-end ml-5 mr-5">
              <Skeleton
                height={15}
                width={"100%"}
                radius={5}
                {...SkeletonCommonProps}
              />
            </View>
          </View>
          <View className="w-full flex items-center justify-center mt-4">
            <View className="w-full flex items-center justify-center">
              <Skeleton
                height={5}
                width={"90%"}
                radius={5}
                {...SkeletonCommonProps}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
