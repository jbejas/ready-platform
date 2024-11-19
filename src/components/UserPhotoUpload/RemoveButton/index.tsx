import OrganicCloseIcon from "@src/components/icons/OrganicCloseIcon";
import { Pressable, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

interface RemoveButtonProps {
  isLoadingRemove: boolean;
  onPress: () => void;
}

function RemoveButton({ isLoadingRemove, onPress }: RemoveButtonProps) {
  return (
    <View className="z-20 absolute right-[3px] top-[3px]">
      {isLoadingRemove ? (
        <ActivityIndicator size="small" color={`#FDFBFA`} />
      ) : (
        <Pressable onPress={onPress} className="w-[28px] h-[28px]">
          <OrganicCloseIcon
            className="z-20"
            width={28}
            height={28}
            color={"#FDFBFA"}
          />
        </Pressable>
      )}
    </View>
  );
}

export default RemoveButton;
