import OrganicSelectedCheckbox from "@src/components/icons/OrganicSelectedCheckbox";
import OrganicSelectedRadio from "@src/components/icons/OrganicSelectedRadio";
import OrganicSelectedRadioMultiple from "@src/components/icons/OrganicSelectedRadioMultiple";
import OrganicUnselectedCheckbox from "@src/components/icons/OrganicUnselectedCheckbox";
import OrganicUnselectedRadio from "@src/components/icons/OrganicUnselectedRadio";
import ExpoCheckbox from "expo-checkbox";
import { StyleProp, TouchableOpacity } from "react-native";

export interface ToggleProps {
  className?: string;
  variant?:
    | "checkbox"
    | "organic-checkbox"
    | "organic-radio"
    | "organic-radio-multiple";
  style?: StyleProp<any>;
  value: boolean;
  onValueChange: (value: boolean) => void;
}

const iconMapping = {
  "organic-checkbox": {
    selected: OrganicSelectedCheckbox,
    unselected: OrganicUnselectedCheckbox,
  },
  "organic-radio": {
    selected: OrganicSelectedRadio,
    unselected: OrganicUnselectedRadio,
  },
  "organic-radio-multiple": {
    selected: OrganicSelectedRadioMultiple,
    unselected: OrganicUnselectedRadio,
  },
};

function Toggle({
  style,
  value,
  variant,
  onValueChange,
  ...props
}: ToggleProps) {
  const handleChange = () => {
    onValueChange(!value);
  };

  if (variant === "checkbox") {
    return (
      <ExpoCheckbox
        style={style}
        className="border-light-200 rounded-lg w-6 h-6"
        color="#d1c9b4"
        value={value}
        onValueChange={handleChange}
        {...props}
      />
    );
  }

  if (iconMapping[variant]) {
    const IconComponent = value
      ? iconMapping[variant].selected
      : iconMapping[variant].unselected;
    return (
      <TouchableOpacity onPress={handleChange} style={style}>
        <IconComponent className="w-6 h-6" />
      </TouchableOpacity>
    );
  }

  return null;
}

export default Toggle;
