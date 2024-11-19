import React, { ReactNode, useEffect } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ViewStyle,
  Keyboard,
  Pressable,
} from "react-native";
import { ScrollView, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Redux
import { useDispatch } from "react-redux";
import { setKeyboardVisibility } from "@store/keyboard/keyboardSlice";

// Safe Area Lib
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Constants
import {
  ADDITIONAL_INSET_TOP,
  ADDITIONAL_INSET_BOTTOM,
} from "@src/constants/constants";

// Define the props type
interface SafeAreaComponentProps {
  children: ReactNode;
  relative?: boolean;
  scrollable?: boolean;
  isPressable?: boolean;
  addHorizontalInsets?: boolean;
  addVerticalInsets?: boolean;
  addAdditionalInsetTop?: number;
  addAdditionalInsetBottom?: number;
  customClasses?: string;
  isTransparent?: boolean;
  testID: string;
  gradientColorStart?: string;
  gradientColorEnd?: string;
  gradientDirection?: "ttb" | "ltr";
}

const SafeAreaComponent: React.FC<SafeAreaComponentProps> = ({
  children,
  relative,
  scrollable = false,
  addHorizontalInsets = false,
  addVerticalInsets = true,
  addAdditionalInsetTop = ADDITIONAL_INSET_TOP,
  addAdditionalInsetBottom = ADDITIONAL_INSET_BOTTOM,
  customClasses = "",
  isPressable = false,
  isTransparent = false,
  testID,
  gradientColorStart = "#EEE8DC",
  gradientColorEnd = "#FFF8E6",
  gradientDirection = "ltr",
}) => {
  // Mount Redux dispatch
  const dispatch = useDispatch();

  const classes = `flex w-screen h-screen px-6 absolute top-0 left-0 ${
    isTransparent ? "" : ""
  }`;

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

  let viewStyles = {};

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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex"
      testID={`screen.${testID}`}
    >
      {scrollable ? (
        isPressable ? (
          <View className="w-screen h-screen absolute top-0 left-0 flex-1">
            <View className="absolute top-0 w-screen h-screen z-0">
              <LinearGradient
                start={
                  gradientDirection === "ltr"
                    ? { x: 0, y: 0.5 }
                    : { x: 0.5, y: 0 }
                }
                end={
                  gradientDirection === "ltr"
                    ? { x: 1, y: 0.5 }
                    : { x: 0.5, y: 1 }
                }
                colors={[`${gradientColorStart}`, `${gradientColorEnd}`]}
                className="w-full h-full absolute left-0 bottom-0"
              />
            </View>
            <Pressable
              className="w-screen h-screen absolute top-0 left-0 z-10"
              onPress={() => Keyboard.dismiss()}
            >
              <ScrollView
                className={`${classes} ${customClasses}`}
                style={viewStyles}
                showsVerticalScrollIndicator={false}
              >
                {children}
              </ScrollView>
            </Pressable>
          </View>
        ) : (
          <View className="w-screen h-screen absolute top-0 left-0 flex-1">
            <View className="absolute top-0 w-screen h-screen z-0">
              <LinearGradient
                start={
                  gradientDirection === "ltr"
                    ? { x: 0, y: 0.5 }
                    : { x: 0.5, y: 0 }
                }
                end={
                  gradientDirection === "ltr"
                    ? { x: 1, y: 0.5 }
                    : { x: 0.5, y: 1 }
                }
                colors={[`${gradientColorStart}`, `${gradientColorEnd}`]}
                className="w-full h-full absolute left-0 bottom-0 rounded-b-3xl"
              />
            </View>
            <ScrollView
              className={`${classes} ${customClasses}`}
              style={viewStyles}
            >
              {children}
            </ScrollView>
          </View>
        )
      ) : isPressable ? (
        <View className="w-screen h-screen absolute top-0 left-0 flex-1">
          <View className="absolute top-0 w-screen h-screen z-0">
            <LinearGradient
              start={
                gradientDirection === "ltr"
                  ? { x: 0, y: 0.5 }
                  : { x: 0.5, y: 0 }
              }
              end={
                gradientDirection === "ltr"
                  ? { x: 1, y: 0.5 }
                  : { x: 0.5, y: 1 }
              }
              colors={[`${gradientColorStart}`, `${gradientColorEnd}`]}
              className="w-full h-full absolute left-0 bottom-0 rounded-b-3xl"
            />
          </View>
          <Pressable
            className="w-screen h-screen absolute top-0 left-0 z-10"
            onPress={() => Keyboard.dismiss()}
          >
            <View className={`${classes} ${customClasses}`} style={viewStyles}>
              {children}
            </View>
          </Pressable>
        </View>
      ) : (
        <View className="w-screen h-screen absolute top-0 left-0 flex-1">
          <View className="absolute top-0 w-screen h-screen z-0">
            <LinearGradient
              start={
                gradientDirection === "ltr"
                  ? { x: 0, y: 0.5 }
                  : { x: 0.5, y: 0 }
              }
              end={
                gradientDirection === "ltr"
                  ? { x: 1, y: 0.5 }
                  : { x: 0.5, y: 1 }
              }
              colors={[`${gradientColorStart}`, `${gradientColorEnd}`]}
              className="w-full h-full absolute left-0 bottom-0 rounded-b-3xl"
            />
          </View>
          <View className={`${classes} ${customClasses}`} style={viewStyles}>
            {children}
          </View>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

export default SafeAreaComponent;
