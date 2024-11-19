import React from "react";
import { Text as RNText } from "react-native";

// Create a custom Text component that disables font scaling
const Text = ({ children, ...props }) => {
  return (
    <RNText {...props} allowFontScaling={false}>
      {children}
    </RNText>
  );
};

export default Text;
