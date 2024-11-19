import { useEffect, useState } from "react";
import { NavigationProp } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Dimensions,
} from "react-native";
import DynamicButton from "@components/DynamicButton/DynamicButton";
import Dots from "@components/Dots";

import Animated from "react-native-reanimated";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

// Redux
import { useSelector } from "react-redux";

// Skeleton
import { Skeleton } from "moti/skeleton";

// Utils
import {
  getReflectionsByUser,
  canUserReflectToday,
  getReflectionDaysCountByCategory,
} from "@utils/reflections";
import ImageCache from "@src/components/ImageCache";
dayjs.extend(advancedFormat);
const SkeletonCommonProps = {
  colorMode: "light",
  transition: {
    type: "timing",
    duration: 1500,
  },
  backgroundColor: "#D4D4D4",
} as const;

interface Props {
  category: any;
  userId: string;
  navigation: NavigationProp<any>;
  cardDotImage: string;
}

// Define the state structure
interface RootState {
  auth: {
    user: string;
  };
}

export default function ReflectionsScroller({
  category,
  navigation,
  userId,
  cardDotImage,
}: Props) {
  // Get userData
  const user = JSON.parse(useSelector((state: RootState) => state.auth.user));

  const [userReflections, setUserReflections] = useState<number[]>([]);
  const [canUserReflect, setCanUserReflect] = useState<boolean>(false);
  const [days, setDays] = useState<any>([]);
  const [highestDay, setHigestDay] = useState<any>([]);
  const [dotIndex, setDotIndex] = useState<number>(0);

  const beginningOfMonth = dayjs().startOf("month");

  const { width } = Dimensions.get("window");

  const updateDots = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const x = event.nativeEvent.contentOffset.x;
    const index = Math.round(x / width);
    setDotIndex(index);
  };

  useEffect(() => {
    const fetchCategoryReflectionDays = async () => {
      // Check if user can reflect today, if not, current day is disabled
      const getCanUserReflectToday = await canUserReflectToday(user.days.items);
      setCanUserReflect(getCanUserReflectToday);
      // Fetch user reflections to determine which days has the user reflected
      const fetchUserReflections = await getReflectionsByUser(userId);
      const userReflectionsDays = [];
      fetchUserReflections.map((reflection) => {
        userReflectionsDays.push(reflection.day);
      });
      setUserReflections(userReflectionsDays);
      const totalDays = await getReflectionDaysCountByCategory(category.id);
      setDays(totalDays);
    };
    fetchCategoryReflectionDays();
    const highestDay = Math.max(...user.days.items.map((item) => item.day));
    setHigestDay(highestDay);
  }, []);

  return (
    <View className="w-screen -ml-6 mb-8 mt-6">
      <Text
        allowFontScaling={false}
        className="text-dark font-jokkerl px-6 text-[16px]"
      >
        Reflections
      </Text>
      <Animated.ScrollView
        pagingEnabled
        horizontal
        className="w-full h-[320px]"
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={updateDots}
      >
        {userReflections.length === 0 ? (
          <Skeleton.Group show={true}>
            <View className="w-screen h-full flex items-center justify-start p-6">
              <View className="w-full h-[280px]">
                <Skeleton
                  height={280}
                  width={"100%"}
                  radius={5}
                  {...SkeletonCommonProps}
                />
              </View>
            </View>
          </Skeleton.Group>
        ) : null}
        {days.length > 0 &&
          days.map((day, index) => (
            <View
              key={index}
              className="w-screen h-full flex items-center justify-start p-6"
            >
              <View className="w-full h-full flex items-start justify-center bg-card rounded-[8px] overflow-hidden">
                {/* Day disabled. Come back tomorrow */}
                {day.day === highestDay + 1 ? (
                  <View className="w-full h-[290px] bg-facebook/80 absolute top-0 left-0 z-10 flex items-end justify-end">
                    <Text
                      allowFontScaling={false}
                      className="text-light font-[16px] font-jokkerl pb-8 pr-8"
                    >
                      Come back tomorrow
                    </Text>
                  </View>
                ) : null}

                {day.day > highestDay + 1 ? (
                  <View className="w-full h-[290px] bg-facebook/80 absolute top-0 left-0 z-10 flex items-end justify-end">
                    <Text
                      allowFontScaling={false}
                      className="text-light font-[16px] font-jokkerl pb-8 pr-8"
                    >
                      Come back later
                    </Text>
                  </View>
                ) : null}

                {/* All days after tomorrow are disabled. */}
                {/* {day.day > highestDay + 1 ? (
                  <View className="w-full h-[290px] bg-facebook/70 absolute top-0 left-0 z-10 flex items-center justify-center">
                    <IconLock width={45} height={45} color="#FFF" />
                  </View>
                ) : null} */}

                {/* Reflection circle is enabled if reflection is already completed. */}
                {day.day <= highestDay ? (
                  cardDotImage !== "" ? (
                    <View className="w-[72px] h-[72px] absolute top-6 right-6">
                      <ImageCache
                        uri={cardDotImage}
                        className="w-[72px] h-[72px]"
                        resizeMode="contain"
                      />
                    </View>
                  ) : (
                    <View className="absolute top-6 right-6 w-[72px] h-[72px]">
                      <Skeleton
                        height={72}
                        width={72}
                        radius={36}
                        {...SkeletonCommonProps}
                      />
                    </View>
                  )
                ) : null}
                {/* Reflection circle is disabled if reflection is pending. */}
                {day.day > highestDay && canUserReflect ? (
                  cardDotImage !== "" ? (
                    <View className="w-[72px] h-[72px] absolute top-6 right-6">
                      <ImageCache
                        uri={cardDotImage}
                        className="w-[72px] h-[72px]"
                        style={{ tintColor: "gray" }}
                        resizeMode="contain"
                      />
                    </View>
                  ) : (
                    <View className="absolute top-6 right-6 w-[72px] h-[72px]">
                      <Skeleton
                        height={72}
                        width={72}
                        radius={36}
                        {...SkeletonCommonProps}
                      />
                    </View>
                  )
                ) : null}
                {day.day > highestDay ? (
                  cardDotImage !== "" ? (
                    <View className="w-[72px] h-[72px] absolute top-6 right-6">
                      <ImageCache
                        uri={cardDotImage}
                        className="w-[72px] h-[72px]"
                        style={{ tintColor: "gray" }}
                        resizeMode="contain"
                      />
                    </View>
                  ) : (
                    <View className="absolute top-6 right-6 w-[72px] h-[72px]">
                      <Skeleton
                        height={72}
                        width={72}
                        radius={36}
                        {...SkeletonCommonProps}
                      />
                    </View>
                  )
                ) : null}
                <Text
                  allowFontScaling={false}
                  className="text-[28px] w-9/12 font-jokkerl text-dark pl-6"
                >
                  {`${beginningOfMonth.add(index, "day").format("Do")}`}{" "}
                  {category.name} reflections
                </Text>
                <Text
                  allowFontScaling={false}
                  className="text-[16px] w-10/12 font-jokkerl text-dark mt-3 leading-5 pl-6"
                >
                  {day.title}
                </Text>
                {/* Reflection button is not present if user cant reflect today. */}
                {day.day <= highestDay ? (
                  <Text
                    allowFontScaling={false}
                    className="text-[16px] text-dark font-jokkerl absolute bottom-6 right-6"
                  >
                    Reflection completed
                  </Text>
                ) : null}

                {/* Initiate reflection button is enabled if user can reflect today. */}
                {day.day >= highestDay + 1 && canUserReflect ? (
                  <DynamicButton
                    onPress={() =>
                      navigation.navigate("ReflectionQuestionScreen", {
                        comesFromCategory: true,
                        selectedDayFromCategory: index + 1,
                      })
                    }
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
                    customStyles="absolute bottom-6 right-6"
                  />
                ) : null}
              </View>
            </View>
          ))}
      </Animated.ScrollView>
      <View className="w-full -mt-6">
        <Dots dots={10} dotIndex={dotIndex} />
      </View>
    </View>
  );
}
