import { NavigationProp } from "@react-navigation/native";
import VideoPlayer from "@components/VideoPlayer";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

export default function VideoPlayerScreen({ navigation }: Props) {
  return <VideoPlayer />;
}
