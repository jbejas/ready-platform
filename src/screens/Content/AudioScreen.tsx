import { useEffect } from "react";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import AudioPlayer from "@components/AudioPlayer";

// Segment
import { useAnalytics } from "@segment/analytics-react-native";

// Define the props type for your navigation stack
type Props = {
  route: RouteProp<any>;
  navigation: NavigationProp<any>;
};

export default function AudioScreen({ route, navigation }: Props) {
  // Segment
  const { track } = useAnalytics();
  // Route params
  const { content } = route.params;

  useEffect(() => {
    track("Audio Screen", {
      title: content.title,
    });
  }, []);

  return <AudioPlayer content={content} />;
}
