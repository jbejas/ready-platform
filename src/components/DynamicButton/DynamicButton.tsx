import React from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
// Tabler Icons
import {
  IconArrowRight,
  IconBookmarkPlus,
  IconBrandApple,
  IconBrandFacebook,
  IconChevronLeft,
  IconChevronRight,
  IconHeart,
  IconLocationShare,
  IconX,
} from "@tabler/icons-react-native";

import DrawnButtonBigIcon from "@src/components/DrawnButtonBigIcon";
import DrawnButtonIcon from "@src/components/DrawnButtonIcon";

const SIZES = {
  small: "h-8",
  medium: "h-12",
  large: "h-12",
  "medium-large": "h-14",
  xlarge: "h-24",
  icon: "p-4",
};

const TYPES = {
  primary: "bg-black text-white w-full",
  secondary: "bg-dark-gray",
  full: "bg-dark-gray w-11/12 mx-4",
  "full-transparent":
    "bg-transparent w-11/12 mx-4 border border-1 border-dark-gray",
  "full-transparent-v2": "bg-transparent border border-1 border-light-200",
  "full-transparent-borderless": "bg-transparent w-11/12 mx-4",
  white: "w-11/12 bg-white mx-4",
  icon: "w-[50px] !h-[50px] flex items-center justify-center",
  "icon-text": "w-[50px] !h-[50px] flex items-center justify-center",
  "icon-close": "w-[30px] !h-[30px] flex items-center justify-center",
  "full-icon": "bg-dark-gray w-11/12 mx-4",
};

const ROUNDED = {
  small: "rounded-sm",
  medium: "rounded-md",
  large: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "2.5xl": "rounded-[19px]",
  full: "rounded-full",
};

const POSITIONS = {
  none: "",
  top: "absolute top-0 left-0",
  "bottom-left": "absolute bottom-4 left-0",
  "bottom-right": "absolute bottom-6 right-6",
};

interface MyButtonProps {
  onPress: () => void;
  type: keyof typeof TYPES;
  size?: keyof typeof SIZES;
  label?: string;
  textStyles?: string;
  textColor?: string;
  rounded?: keyof typeof ROUNDED;
  position?: keyof typeof POSITIONS;
  customStyles?: string;
  icon?:
    | "arrow-left"
    | "arrow-right"
    | "chevron-right"
    | "apple"
    | "facebook"
    | "share"
    | "bookmark"
    | "heart"
    | "close";
  iconPosition?: "left" | "center" | "right";
  bgImage?: "drawn" | "drawn-light" | "drawn-big";
  bgImageCustomStyles?: string;
  showBgImage?: boolean;
  iconSize?: number;
  iconColor?: string;
  addShadow?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  loaderColor?: string;
  testID?: string;
}

export default function DynamicButton({
  onPress,
  type,
  size,
  label,
  textStyles,
  textColor = "text-white",
  rounded,
  position,
  customStyles = "",
  icon,
  iconPosition = "left",
  bgImageCustomStyles,
  iconSize = 24,
  iconColor = "black",
  addShadow = false,
  disabled = false,
  isLoading = false,
  loaderColor = "#FFF",
  showBgImage = false,
  bgImage = "drawn",
  testID,
}: MyButtonProps) {
  const btnClasses: string[] = [];
  const generalClasses = "flex items-center justify-center";
  const btnSize = SIZES[size] ? SIZES[size] : "p-2";
  const btnType = TYPES[type] ? TYPES[type] : "bg-black";
  const btnRound = ROUNDED[rounded] ? ROUNDED[rounded] : "rounded-full";
  const btnPosition = POSITIONS[position] ? POSITIONS[position] : "";

  const renderIcon = (iconPosition) => {
    switch (icon) {
      case "arrow-left":
        return (
          <IconChevronLeft
            size={iconSize}
            color={iconColor}
            strokeWidth={1}
            className={`
            ${iconPosition !== "center" ?? "absolute"}
            ${iconPosition === "left" ?? "left-4"}
            ${iconPosition === "right" ?? "right-4"}
            `}
          />
        );
      case "arrow-right":
        return (
          <IconArrowRight
            size={iconSize}
            color={iconColor}
            strokeWidth={1}
            className={`
            ${iconPosition !== "center" ?? "absolute"}
            ${iconPosition === "left" ?? "left-4"}
            ${iconPosition === "right" ?? "right-4"}
            `}
          />
        );
      case "chevron-right":
        return (
          <IconChevronRight
            size={iconSize}
            color={iconColor}
            strokeWidth={1}
            className={`
              ${iconPosition !== "center" ?? "absolute"}
              ${iconPosition === "left" ?? "left-4"}
              ${iconPosition === "right" ?? "right-4"}
              `}
          />
        );
      case "close":
        return (
          <IconX
            className="mx-2"
            color={iconColor}
            width={iconSize}
            height={iconSize}
            strokeWidth={1}
          />
        );
      case "apple":
        return (
          <IconBrandApple
            className="mx-2"
            color={iconColor}
            width={iconSize}
            height={iconSize}
          />
        );
      case "share":
        return (
          <IconLocationShare
            className="mx-2"
            width={iconSize}
            height={iconSize}
            color={iconColor}
          />
        );
      case "bookmark":
        return (
          <IconBookmarkPlus
            className="mx-2"
            width={iconSize}
            height={iconSize}
            color={iconColor}
          />
        );
      case "heart":
        return (
          <IconHeart
            className="mx-2"
            color={iconColor}
            width={iconSize}
            height={iconSize}
          />
        );
      case "facebook":
        return (
          <IconBrandFacebook
            className="mx-2"
            color={iconColor}
            width={iconSize}
            height={iconSize}
          />
        );
      default:
        return null;
    }
  };

  // Join all Taiwlind classes
  btnClasses.push(
    generalClasses,
    btnSize,
    btnType,
    btnRound,
    btnPosition,
    customStyles
  );

  return (
    <View
      style={addShadow ? styles.shadow : null}
      className={`${btnClasses.join(" ")} ${disabled && "opacity-40"}`}
      testID={`Button.${testID}`}
    >
      <Pressable
        className="w-full h-full flex items-center justify-center"
        disabled={disabled}
        onPress={onPress}
      >
        {showBgImage && bgImage === "drawn" && !isLoading ? (
          <DrawnButtonIcon
            className={`w-[50px] h-[50px] absolute top-0 left-0 stroke-dark ${bgImageCustomStyles}`}
          />
        ) : null}
        {showBgImage && bgImage === "drawn-light" && !isLoading ? (
          <DrawnButtonIcon
            className={`w-[50px] h-[50px] absolute top-0 left-0 stroke-white ${bgImageCustomStyles}`}
          />
        ) : null}
        {showBgImage && bgImage === "drawn-big" && !isLoading ? (
          <DrawnButtonBigIcon
            className={`absolute top-0 left-0 w-[169px] h-[168px] stroke-[#111830] ${bgImageCustomStyles}`}
          />
        ) : null}
        <View className="flex flex-row items-center justify-center relative w-full">
          {isLoading ? (
            <View className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <ActivityIndicator size="small" color={`${loaderColor}`} />
            </View>
          ) : (
            <>
              {iconPosition === "left" && renderIcon(iconPosition)}
              {iconPosition === "center" ? (
                renderIcon(iconPosition)
              ) : (
                <Text
                  allowFontScaling={false}
                  className={`font-jokkerr ${textStyles} ${textColor}`}
                >
                  {label}
                </Text>
              )}
              {iconPosition === "right" && renderIcon(iconPosition)}
            </>
          )}
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.23,
    shadowRadius: 11.78,
    elevation: 15,
  },
});
