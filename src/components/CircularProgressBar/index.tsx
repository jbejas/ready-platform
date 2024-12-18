import { StyleSheet, View } from "react-native";
import React from "react";
import { Canvas, Path, Skia } from "@shopify/react-native-skia";
import { SharedValue } from "react-native-reanimated";

type Props = {
  strokeWidth: number;
  radius: number;
  end: SharedValue<number>;
  backgroundColor: string;
  foreColor: string;
};

const CircularProgressBar = ({
  radius,
  strokeWidth,
  end,
  backgroundColor = "333438",
  foreColor = "c2ecff",
}: Props) => {
  const innerRadius = radius - strokeWidth / 2;

  const path = Skia.Path.Make();
  path.addCircle(radius, radius, innerRadius);

  return (
    <View style={{ width: radius * 2, height: radius * 2 }}>
      <Canvas style={styles.container}>
        <Path
          path={path}
          strokeWidth={strokeWidth}
          color={`#${backgroundColor}`}
          style="stroke"
          strokeJoin="round"
          strokeCap="round"
          start={0}
          end={1}
        />
        <Path
          path={path}
          strokeWidth={strokeWidth}
          color={`#${foreColor}`}
          style="stroke"
          strokeJoin="round"
          strokeCap="round"
          start={0}
          end={end}
        />
      </Canvas>
    </View>
  );
};

export default CircularProgressBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
