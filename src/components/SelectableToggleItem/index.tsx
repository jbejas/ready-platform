import Toggle, { ToggleProps } from "@src/components/Toggle";
import { ReactNode } from "react";
import { StyleProp, Text, TouchableOpacity, View } from "react-native";

interface SelectableToggleItemProps {
  selected: boolean;
  onSelect?: (value: boolean) => void;
  title: string;
  variantToggle: ToggleProps["variant"];
  className?: string;
  footer?: ReactNode;
  style?: StyleProp<any>;
}

function SelectableToggleItem({
  selected,
  onSelect,
  title,
  variantToggle,
  footer,
  style,
}: SelectableToggleItemProps) {
  const handleChange = () => {
    onSelect && onSelect(!selected);
  };

  return (
    <TouchableOpacity
      onPress={handleChange}
      className={`border ${
        selected ? "border-primary-blue-100" : "border-light-200"
      } flex flex-col py-2 pl-6 rounded-lg pr-4 min-h-[70px]`}
      style={style}
    >
      <View className="flex-row items-center mt-4 mb-2">
        <Text className="flex-1 mr-6 font-jokkerr text-primary -blue-100 text-base">
          {title}
        </Text>
        <Toggle
          variant={variantToggle}
          value={selected}
          onValueChange={handleChange}
        />
      </View>
      {footer}
    </TouchableOpacity>
  );
}

export default SelectableToggleItem;
