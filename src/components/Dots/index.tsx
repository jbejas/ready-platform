import { View } from "react-native";

interface Props {
  dotIndex: number;
  dots: number;
  dotColor?: string;
  dotOpacity?: string;
}

export default function Dots({
  dotIndex,
  dots = 1,
  dotColor = "bg-dark",
  dotOpacity = "opacity-20",
}: Props) {
  return (
    <View className="w-full flex flex-row items-center justify-center mt-4">
      {Array.from({ length: dots }, (_, index) => {
        return (
          <View
            key={index}
            className={`w-[4px] h-[4px] rounded-full mr-[4px] ${dotColor} ${
              dotIndex === index ? "" : `${dotOpacity}`
            }`}
          />
        );
      })}
    </View>
  );
}
