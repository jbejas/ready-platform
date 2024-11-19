import OrganicCloseIcon from "@src/components/icons/OrganicCloseIcon";
import { Text, TouchableOpacity, View } from "react-native";

interface ChipProps {
  label: string;
  onRemove: () => void;
}

function Chip({ label, onRemove }: ChipProps) {
  return (
    <View className="flex-row">
      <View
        className="px-3 py-[6.5px] flex flex-row items-center bg-light-100 rounded-[48px] "
        style={{ gap: 8 }}
      >
        <Text className="text-left text-[13px] text-[#10131C] font-jokkerm leading-6">
          {label}
        </Text>
        <TouchableOpacity onPress={onRemove} hitSlop={{ top: 10, right: 10 }}>
          <OrganicCloseIcon width={19} height={19} color="#111830" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Chip;
