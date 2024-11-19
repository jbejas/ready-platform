import { PropsWithChildren, ReactNode } from "react";
import { StyleProp, Text, View } from "react-native";

function AlertText({
  children,
  style,
}: PropsWithChildren<{ style?: StyleProp<any>; className?: string }>) {
  return (
    <Text
      allowFontScaling={false}
      style={style}
      className={`text-primary-blue-100 leading-6 text-base font-jokkerr ${style}`}
    >
      {children}
    </Text>
  );
}

interface AlertProps {
  text: string | ReactNode;
}

function Alert({ text }: AlertProps) {
  return (
    <View className="rounded-lg p-4 bg-card-100">
      {typeof text === "string" ? <AlertText>{text}</AlertText> : text}
    </View>
  );
}

Alert.Text = AlertText;

export default Alert;
