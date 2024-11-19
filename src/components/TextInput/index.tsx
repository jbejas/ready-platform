import { useRef } from "react";
import {
  TextInput as TextInputNative,
  TextInputProps,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const TextInput = ({ ...props }: TextInputProps) => {
  const ref = useRef<TextInputNative>(null);
  return (
    <TouchableWithoutFeedback onPress={() => ref.current?.focus()}>
      <View className="flex flex-row  border-b mb-4 pb-3 border-primary-blue-100">
        <TextInputNative {...props} className="flex-1" ref={ref} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TextInput;
