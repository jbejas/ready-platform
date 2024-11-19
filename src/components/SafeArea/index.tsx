import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode, useEffect } from "react";
import { Keyboard, View, ViewStyle } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { setKeyboardVisibility } from "@store/keyboard/keyboardSlice";
import { useDispatch } from "react-redux";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  ADDITIONAL_INSET_BOTTOM,
  ADDITIONAL_INSET_TOP,
} from "@src/constants/constants";

const PressableComponent = ({ children }) => {
  return (
    <View
      className="flex-1"
      onStartShouldSetResponder={() => {
        Keyboard.dismiss();
        return false;
      }}
    >
      {children}
    </View>
  );
};

const ContainerComponent = ({ children }) => {
  return (
    <KeyboardAwareScrollView
      bounces={false}
      keyboardShouldPersistTaps={"handled"}
      showsVerticalScrollIndicator={false}
      enableOnAndroid
      className="flex-1 "
      nestedScrollEnabled={false}
      contentContainerStyle={{ flexGrow: 1, position: "relative" }}
    >
      {children}
    </KeyboardAwareScrollView>
  );
};

interface SafeAreaProps {
  children: ReactNode;
  relative?: boolean;
  scrollable?: boolean;
  isPressable?: boolean;
  addHorizontalInsets?: boolean;
  addVerticalInsets?: boolean;
  addTopInsets?: boolean;
  addBottomInsets?: boolean;
  addAdditionalInsetTop?: number;
  addAdditionalInsetBottom?: number;
  customClasses?: string;
  isTransparent?: boolean;
  testID: string;
  gradientColorStart?: string;
  gradientColorEnd?: string;
  gradientDirection?: "ttb" | "ltr";
}

const SafeArea: React.FC<SafeAreaProps> = ({
  children,
  addHorizontalInsets = false,
  addVerticalInsets = false,
  addTopInsets = true,
  addBottomInsets = true,
  addAdditionalInsetTop = ADDITIONAL_INSET_TOP,
  addAdditionalInsetBottom = ADDITIONAL_INSET_BOTTOM,
  customClasses = "",
  isPressable = false,
  testID,
  scrollable = false,
  gradientColorStart = "#EEE8DC",
  gradientColorEnd = "#FFF8E6",
  gradientDirection = "ltr",
}) => {
  // Mount Redux dispatch
  const dispatch = useDispatch();

  // Safe Area Insets
  const insets = useSafeAreaInsets();

  // Define the style object for the View component
  const verticalInsets: ViewStyle = {
    paddingTop: insets.top + addAdditionalInsetTop,
    paddingBottom: insets.bottom + addAdditionalInsetBottom,
  };

  const horizontalInsets: ViewStyle = {
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };

  let viewStyles: ViewStyle = {};

  if (addTopInsets) {
    viewStyles.paddingTop = verticalInsets.paddingTop;
  }
  if (addBottomInsets) {
    viewStyles.paddingBottom = verticalInsets.paddingBottom;
  }

  if (addVerticalInsets) {
    viewStyles = { ...viewStyles, ...verticalInsets };
  }

  if (addHorizontalInsets) {
    viewStyles = { ...viewStyles, ...horizontalInsets };
  }

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardWillShow",
      () => {
        console.log("Keyboard is visible");
        dispatch(setKeyboardVisibility(true));
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardWillHide",
      () => {
        console.log("Keyboard is hidden");
        dispatch(setKeyboardVisibility(false));
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const RenderContainer = scrollable ? ContainerComponent : React.Fragment;
  const RenderPressable = isPressable ? PressableComponent : React.Fragment;

  return (
    <View className="flex flex-1 relative" testID={`screen.${testID}`}>
      <View className="absolute top-0 w-screen h-screen z-0">
        <LinearGradient
          start={
            gradientDirection === "ltr" ? { x: 0, y: 0.5 } : { x: 0.5, y: 0 }
          }
          end={
            gradientDirection === "ltr" ? { x: 1, y: 0.5 } : { x: 0.5, y: 1 }
          }
          colors={[`${gradientColorStart}`, `${gradientColorEnd}`]}
          className="w-full h-full absolute left-0 bottom-0"
        />
      </View>
      <RenderPressable>
        <RenderContainer>
          <View
            className={`flex-1 px-6 ${customClasses} relative`}
            style={viewStyles}
          >
            {children}
          </View>
        </RenderContainer>
      </RenderPressable>
    </View>
  );
};

export default SafeArea;
