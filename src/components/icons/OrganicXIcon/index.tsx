import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const OrganicXIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 25" {...props}>
    <Path
      fillRule="evenodd"
      d="M5.475 6.222a.5.5 0 0 1 .707 0l6.142 6.142.162-.162 4.82-5.54a.5.5 0 1 1 .755.656l-4.832 5.554a.473.473 0 0 1-.023.025l-.175.174 5.602 5.602a.5.5 0 1 1-.707.707l-5.602-5.601-5.474 5.474a.5.5 0 1 1-.707-.707l5.474-5.475L5.475 6.93a.5.5 0 0 1 0-.707Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default OrganicXIcon;
