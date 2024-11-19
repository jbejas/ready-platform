import { NavigationProp } from "@react-navigation/native";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
  screen: string;
};

const navigateTo = ({ navigation, screen }: Props): void => {
  navigation.navigate(screen);
};

export default navigateTo;
