import { useEffect } from "react";
import { View, Text } from "react-native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import { RouteProp } from "@react-navigation/native";

// Segment
import { useAnalytics } from "@segment/analytics-react-native";

// Redux slices
import { AppDispatch } from "@store/store";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUnackedUnmatches,
  setUnmatchName,
  setLikeId,
} from "@store/connections/connectionsSlice";

// Utils
import { ackUnmatch } from "@utils/connections";

// Define the props type for your navigation stack
type Props = {
  route: RouteProp<any>;
};

// Define the state structure
interface RootState {
  auth: {
    user: string;
  };
  connections: {
    unmatchName: boolean;
    likeId: any;
  };
}

export default function DisconnectScreen({ route }: Props) {
  // Mount Redux dispatch
  const dispatch: AppDispatch = useDispatch();
  // Segment
  const { track } = useAnalytics();

  useEffect(() => {
    track("Disconnect Screen");
    return () => {
      dispatch(setUnmatchName(""));
      dispatch(setLikeId(0));
    };
  }, []);

  // Get userData
  const user = JSON.parse(useSelector((state: RootState) => state.auth.user));
  // Get unmatch name
  const unmatchName = useSelector(
    (state: RootState) => state.connections.unmatchName,
  );
  // Get likeId
  const likeId = useSelector((state: RootState) => state.connections.likeId);

  useEffect(() => {
    const processAckUnmatch = async () => {
      await ackUnmatch(likeId);
      setTimeout(() => {
        if (user?.id) {
          // @ts-ignore
          dispatch(fetchUnackedUnmatches({ userId: user.id }));
        }
      }, 1000);
    };
    processAckUnmatch();
  }, []);

  return (
    <SafeAreaComponent
      testID="DisconnectScreen"
      scrollable
      relative
      gradientColorStart="#EEE8DC"
      gradientColorEnd="#FFF8E6"
      gradientDirection="ttb"
    >
      <View className="w-full h-full">
        <Text allowFontScaling={false} className="text-[36px] font-jokkerl">
          {unmatchName} wasn't feeling a strong connection, so they disconnected
          from you
        </Text>
        <Text
          allowFontScaling={false}
          className="text-[20px] font-jokkerl mt-6 leading-8"
        >
          To pave the way for a quality conversations over the quantity of
          connections, Read discourages ghosting and encourages accountability
          for all.
        </Text>
      </View>
    </SafeAreaComponent>
  );
}
