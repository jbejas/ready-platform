import { Text, View } from "react-native";

interface LabelProps {
  index: number;
}

function Label({ index }: LabelProps) {
  const classText = index === 0 ? "mx-[5px]" : "mx-[1.5]";

  return (
    <View className="rounded-[48px] bg-[#FAF5F5CC]/80 absolute left-[5px] top-[7px] flex items-center justify-center z-20">
      <Text
        allowFontScaling={false}
        className={`font-jokkerm text-[#10131C] text-[13px] leading-[20px] min-w-[20px] text-center ${classText}`}
      >
        {index === 0 ? "First" : index + 1}
      </Text>
    </View>
  );
}

export default Label;
