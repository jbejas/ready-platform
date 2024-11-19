import { BlurView } from "expo-blur";
import { StyleProp, View, ViewStyle } from "react-native";

interface BlurGradientProps {
  height: number;
  startIntensity: number;
  endIntensity: number;
  className?: string;
  style?: StyleProp<ViewStyle>;
}

const BlurGradient = ({
  height,
  startIntensity,
  endIntensity,
  style,
}: BlurGradientProps) => {
  const stepHeight = 1.5;
  const blurSteps = Math.ceil(height / stepHeight);

  const blurLayers = Array.from({ length: blurSteps }, (_, i) => {
    const intensity =
      startIntensity + (endIntensity - startIntensity) * (i / blurSteps);
    return (
      <BlurView
        key={i}
        style={{
          height: stepHeight,
        }}
        intensity={intensity}
      />
    );
  });

  return <View style={style}>{blurLayers}</View>;
};

export default BlurGradient;
