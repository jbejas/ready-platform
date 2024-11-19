import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const DrawnButtonIcon = (props: SvgProps) => (
  <Svg width={52} height={50} fill="none" {...props}>
    <Path d="M12.077 8.822C18.408-.34 54.593-3.914 50.65 25.87c-.504 8.796-9.131 23.678-23.548 23.217C12.687 48.627 1 36.982 1 23.078 1 12.756 7.442 4.091 16.66.501" />
  </Svg>
);
export default DrawnButtonIcon;
