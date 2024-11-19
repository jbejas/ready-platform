import { IconX } from "@tabler/icons-react-native";
import { TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface CloseButtonProps {
  onPress: () => void;
  addPaddingRight?: number;
  addPaddingTop?: number;
  fixed?: boolean;
}

function CloseButton({
  onPress,
  fixed = true,
  addPaddingRight,
  addPaddingTop,
}: CloseButtonProps) {
  const insets = useSafeAreaInsets();
  const styles = {};

  if (fixed) {
    styles["top"] = insets.top + (addPaddingTop || 0);
    styles["right"] = insets.right + (addPaddingRight || 0);
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles}
      className={`bg-light-100 rounded-full w-10 h-10 flex items-center justify-center ${
        fixed ? "absolute" : ""
      }`}
    >
      <IconX width={25} height={25} color="#000" strokeWidth={1} />
    </TouchableOpacity>
  );
}

export default CloseButton;
