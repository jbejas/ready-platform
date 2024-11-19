import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";
import { useEffect, useState } from "react";
import { AppDispatch } from "@src/store/store";
import { fetchUserReflectionsDaysCount } from "@src/store/reflections/reflectionsSlice";
import PracticeStatus from "@src/components/PracticeStatus";

// Redux Root State
interface RootState {
  auth: {
    userFirstName: string;
  };
  reflections: {
    totalReflectionDaysCount: number;
    currentCategoryReflectionDaysCount: number;
    currentReflectionCategoryName: string | null;
    userReflectionCardImageUrl: string | null;
  };
}

export default function FirstReflectionLastScreen({ navigation }) {
  const dispatch: AppDispatch = useDispatch();
  const [isLoadingDayImage, setIsLoadingDayImage] = useState(true);

  // Get messages count
  const userFirstName = useSelector(
    (state: RootState) => state.auth.userFirstName,
  );

  const userReflectionCardImageUrl = useSelector(
    (state: RootState) => state.reflections.userReflectionCardImageUrl,
  );
  const currentCategoryReflectionDaysCount = useSelector(
    (state: RootState) => state.reflections.currentCategoryReflectionDaysCount,
  );
  const currentReflectionCategoryName = useSelector(
    (state: RootState) => state.reflections.currentReflectionCategoryName,
  );

  const goToNotificationPage = () => {
    navigation.navigate("UserNotificationsScreen");
  };

  useEffect(() => {
    (async () => {
      await dispatch(fetchUserReflectionsDaysCount());
      setIsLoadingDayImage(false);
    })();
  }, []);

  return (
    <SafeAreaComponent testID="FirstReflectionLast" relative>
      <View className="w-full">
        <Text
          allowFontScaling={false}
          className="text-[36px] font-dark font-jokkerl"
        >
          Great first step,
        </Text>
        <Text
          allowFontScaling={false}
          className="text-[36px] font-dark font-jokkerl"
        >
          {userFirstName}
        </Text>
        <Text
          allowFontScaling={false}
          className="text-[16px] font-dark font-jokkerl mt-4 leading-5"
        >
          As we build our dating community, come back tomorrow for your next
          Daily Reflection. The more you reflect, the better we can connect you.
        </Text>
        <View className="mt-4 w-full h-[160px]">
          <PracticeStatus
            reflectionsDaysCount={1}
            currentReflectionCategoryName="Growth"
            userReflectionCardImageUrl={userReflectionCardImageUrl}
            isLoading={isLoadingDayImage}
          />
        </View>
      </View>
      <View className="absolute w-screen px-6 bottom-12 left-0 flex flex-row items-center justify-end">
        <DynamicButton
          onPress={() => goToNotificationPage()}
          type={"icon"}
          size="large"
          iconPosition="right"
          icon={"chevron-right"}
          iconSize={30}
          showBgImage
          iconColor="black"
          rounded="full"
          position="none"
          textStyles="text-base"
        />
      </View>
    </SafeAreaComponent>
  );
}
