import Dots from "@components/Dots";
import { NavigationProp } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated from "react-native-reanimated";

// Dayjs
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";

// Skeleton
import { Skeleton } from "moti/skeleton";

// Redux
import {
  fetchUnackedUnmatches,
  setLikeId,
  setUnmatchName,
} from "@store/connections/connectionsSlice";
import { AppDispatch } from "@store/store";
import { useDispatch, useSelector } from "react-redux";

// Icons
import { IconChevronRight } from "@tabler/icons-react-native";

// Constants
import { ONBOARDING_SCREENS } from "@constants/constants";

// Localization
import { useTranslation } from "react-i18next";

// Utils
import { getUserLikes } from "@utils/connections";

dayjs.extend(isToday);

// Define the state structure
interface RootState {
  auth: {
    user: string;
  };
  chat: {
    messageCount: number;
  };
  connections: {
    isConnectionsBadgeVisible: boolean;
    unmatches: any;
    updatedOn: string;
  };
}

interface Card {
  title: string;
  subtitle: string;
  route: string;
  toTab?: string;
  isVisible: boolean;
  hasGradient: boolean;
  gradient: string[];
  titleColor?: string;
  subtitleColor?: string;
  hasProfileIcon?: boolean;
  iconColor?: string;
  hasArrow: boolean;
  hasRedDot?: boolean;
  hasMatchesIcon?: boolean;
  hasChatIcon?: boolean;
  parameters?: {
    userName: string;
    likeId: string;
  };
}

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

const SkeletonCommonProps = {
  colorMode: "light",
  transition: {
    type: "timing",
    duration: 1500,
  },
  backgroundColor: "#D4D4D4",
} as const;

const HorizontalCardsUserMilestonesScroll = ({ navigation }: Props) => {
  // Mount Localization
  const { t } = useTranslation();
  // Mount Redux dispatch
  const dispatch: AppDispatch = useDispatch();
  // Get userData
  const user = JSON.parse(useSelector((state: RootState) => state.auth.user));
  // Get chat data
  const chatMessageCount = useSelector(
    (state: RootState) => state.chat.messageCount
  );
  // Get connections badge state
  const isConnectionsBadgeVisible = useSelector(
    (state: RootState) => state.connections.isConnectionsBadgeVisible
  );
  // Get unmatches
  const unmatches = useSelector(
    (state: RootState) => state.connections.unmatches
  );

  const cards: Card[] = [];

  const { width } = Dimensions.get("window");

  // Onboarding
  const setOnboardingStep = user ? user.onboardingStep : 0;
  const onboardingDropRoute = ONBOARDING_SCREENS[setOnboardingStep];

  // Constants
  const [processedCards, setProcessedCards] = useState<any>([]);
  const [dotIndex, setDotIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchUnackedUnmatches({ userId: user?.id }));
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const processCards = useCallback(async () => {
    // Check if user can reflect today based on when was the last reflection completed.
    // If the last reflection was not completed today, the it can reflect and we show the corresponding card.
    const canUserReflect = !dayjs(user.reflectionCompletedOn).isToday();

    cards.length = 0;
    cards.push({
      title: t("horizontal-cards.finish-profile"),
      subtitle: t("horizontal-cards.the-more-you-complete-profile"),
      route: onboardingDropRoute,
      isVisible: user ? !user.isProfileComplete : false,
      hasGradient: true,
      gradient: ["#FAEBE7", "#F4E6E5"],
      titleColor: "dark",
      subtitleColor: "dark",
      hasProfileIcon: true,
      iconColor: "#000",
      hasArrow: true,
    });

    cards.push({
      title: t("horizontal-cards.daily-reflection-title"),
      subtitle: t("horizontal-cards.daily-reflection-subtitle"),
      route: "ReflectionStartScreen",
      isVisible: canUserReflect,
      hasGradient: true,
      gradient: ["#FAEBE7", "#F4E6E5"],
      titleColor: "dark",
      subtitleColor: "dark",
      hasRedDot: true,
      hasArrow: true,
    });

    cards.push({
      title: t("horizontal-cards.new-sparks-title"),
      subtitle: t("horizontal-cards.new-sparks-subtitle"),
      route: "ConnectScreen",
      toTab: "Connect",
      isVisible: !canUserReflect && isConnectionsBadgeVisible,
      hasGradient: true,
      gradient: ["#FAEBE7", "#F4E6E5"],
      titleColor: "dark",
      subtitleColor: "dark",
      hasRedDot: true,
      hasArrow: true,
    });

    // cards.push({
    //   title: "You've got 3 new connections",
    //   subtitle: "Say hi to start the conversation",
    //   route: "ConnectScreen",
    //   toTab: "Connect",
    //   isVisible: isConnectionsBadgeVisible,
    //   hasGradient: true,
    //   gradient: ["#FAEBE7", "#F4E6E5"],
    //   titleColor: "dark",
    //   subtitleColor: "dark",
    //   hasMatchesIcon: true,
    //   iconColor: "#fff",
    //   hasArrow: true,
    // });

    cards.push({
      title: `${chatMessageCount} unread ${
        chatMessageCount > 1 ? "messages" : "message"
      } ${chatMessageCount > 1 ? "are" : "is"} waiting`,
      subtitle: "Write back to keep the ball rolling",
      route: "ChatScreen",
      toTab: "Chat",
      hasGradient: true,
      gradient: ["#FAEBE7", "#F4E6E5"],
      isVisible: chatMessageCount > 0,
      hasChatIcon: true,
      hasArrow: true,
    });

    unmatches.map((unmatch) => {
      const userName =
        unmatch.liker.firstName === user.firstName
          ? unmatch.liked.firstName
          : unmatch.liker.firstName;
      cards.push({
        title: `${userName} has disconnected from you`,
        subtitle: "Tap to see the reason they gave",
        route: "DisconnectScreen",
        parameters: {
          userName,
          likeId: unmatch.id,
        },
        isVisible: true,
        hasGradient: true,
        gradient: ["#FAEBE7", "#F4E6E5"],
        titleColor: "dark",
        subtitleColor: "dark",
        hasRedDot: true,
        hasArrow: true,
      });
    });

    const cardsCount = cards.filter((card) => card.isVisible);

    if (cardsCount.length === 0) {
      cards.push({
        title: t("horizontal-cards.curious-for-more-title"),
        subtitle: t("horizontal-cards.curious-for-more-subtitle"),
        route: "",
        isVisible: true,
        hasGradient: true,
        gradient: ["#FAEBE7", "#F4E6E5"],
        titleColor: "dark",
        subtitleColor: "dark",
        hasRedDot: true,
        hasArrow: false,
      });
    }

    setProcessedCards(cards);
  }, [
    unmatches,
    user?.reflectionCompletedOn,
    user?.isProfileComplete,
    chatMessageCount,
    isConnectionsBadgeVisible,
  ]);

  useEffect(() => {
    processCards();
  }, [processCards]);

  const fetchUserLikes = async () => {
    const userLikes = await getUserLikes(user.id);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      // Check for new unmatches.
      // @ts-ignore
      await dispatch(fetchUnackedUnmatches({ userId: user?.id }));
      processCards();
      fetchUserLikes();
    });
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation, processCards]);

  useEffect(() => {
    console.log("Unmatches", unmatches)
  },[])

  const updateDots = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const x = event.nativeEvent.contentOffset.x;
    const index = Math.round(x / width);
    setDotIndex(index);
  };

  const goToRoute = (item) => {
    if (item.route === "DisconnectScreen") {
      dispatch(setUnmatchName(item.parameters.userName));
      dispatch(setLikeId(item.parameters.likeId));
      navigation.navigate("DisconnectScreen", {
        userName: item.parameters.userName,
        likeId: item.parameters.likeId,
      });
    }

    if (item.toTab) {
      navigation.navigate(item.toTab, { screen: item.route });
      return;
    }

    if (item.route !== "") {
      navigation.navigate(item.route, {
        isEditing: false,
        comesFromCategory: false,
        isOnboarding: true,
      });
    }
  };

  return (
    <View className="w-screen -ml-6">
      <Animated.ScrollView
        pagingEnabled
        horizontal
        className="w-full h-[170px]"
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={updateDots}
      >
        {!isLoading ? (
          processedCards
            .filter((item) => item.isVisible)
            .map((item, index) => {
              return (
                <Pressable
                  key={index}
                  className="flex items-center justify-start px-6 w-screen"
                  style={styles.shadow}
                  onPress={() => goToRoute(item)}
                >
                  <View className="relative flex flex-row items-center justify-between w-full h-full bg-category-card rounded-[8px]">
                    <View className="w-[90%] h-full flex items-start justify-start pt-5">
                      <Text
                        allowFontScaling={false}
                        className={`${
                          item.titleColor
                            ? `text-${item.titleColor}`
                            : "text-dark"
                        } font-regular font-jokkerr text-[18px] w-full px-4 leading-6`}
                      >
                        {item.title}
                      </Text>
                      <Text
                        allowFontScaling={false}
                        className={`${
                          item.subtitleColor
                            ? `text-${item.subtitleColor}`
                            : "text-dark"
                        }  font-jokkerl text-[16px] mt-3 -tracking-wide w-full px-4 leading-6`}
                      >
                        {item.subtitle}
                      </Text>
                    </View>
                    {item.hasArrow ? (
                      <View className="w-[10%] flex items-center justify-center">
                        <IconChevronRight
                          width={35}
                          height={35}
                          color="#000"
                          strokeWidth={1}
                        />
                      </View>
                    ) : null}
                  </View>
                </Pressable>
              );
            })
        ) : (
          <View className="w-screen h-[170px] px-6 rounded-3xl overflow-hidden">
            <Skeleton
              height={170}
              width={"100%"}
              radius={5}
              {...SkeletonCommonProps}
            />
          </View>
        )}
      </Animated.ScrollView>
      <Dots
        dots={processedCards.filter((card) => card.isVisible).length}
        dotIndex={dotIndex}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.07,
    shadowRadius: 50,
    elevation: 15,
  },
});

export default HorizontalCardsUserMilestonesScroll;
