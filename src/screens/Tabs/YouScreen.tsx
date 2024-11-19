import CategoriesScroller from "@components/CategoriesScroller";
import ContentScroller from "@components/ContentScroller";
import DynamicButton from "@components/DynamicButton/DynamicButton";
import HorizontalCardsUserMilestonesScroll from "@components/HorizontalCardsUserMilestonesScroll";
import PracticeStatus from "@components/PracticeStatus";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DailyWisdom from "@src/components/DailyWisdom";
import { useEffect, useRef, useState } from "react";
import {
  AppState,
  AppStateStatus,
  Image,
  Modal,
  Pressable,
  Text,
  View,
} from "react-native";
import { OneSignal } from "react-native-onesignal";

// Constants
import { ADDITIONAL_INSET_TOP } from "@src/constants/constants";

// Safe Area Lib
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Constants
import { DAY_MAIN_POSITION } from "@constants/constants";

// Stream Chat
import { CHAT_API_KEY } from "@src/chatConfig/chatConfig";
import { StreamChat } from "stream-chat";

// SVGs
import ReadyPlus from "@assets/images/ready-plus.svg";

// Utils
import { getDashboardCategories, getCategoryById } from "@utils/categories";
import { getImageURL } from "@utils/images";
import { registerDeviceOneSignal } from "@utils/onesignal";
import { getGeneralAppConfig } from "@utils/generalAppConfiguration";
import { getCurrentReflectionDayCategoryId } from "@utils/reflections";
import { getUserById, updateUserTimeZone } from "@utils/user";

// Redux
import { setIsYouScreenLoaded, setUser } from "@store/auth/authSlice";
import { setMessageCount, setPromptsCount } from "@store/chat/chatSlice";
import { fetchGeneralAppConfig } from "@store/config/configSlice";
import {
  fetchUserReflectionsDaysCount,
  setCurrentReflectionCategoryName,
  setReflectionQuestionBackgroundImage,
  setReflectionQuestionsGradientValues,
} from "@store/reflections/reflectionsSlice";
import { AppDispatch } from "@store/store";
import { useDispatch, useSelector } from "react-redux";

// Localization
import useOnMessageChat from "@src/hooks/useOnMessageChat";
import { useTranslation } from "react-i18next";

// Define the state structure
interface RootState {
  auth: {
    user: string;
  };
  chat: {
    isStreamInitialized: boolean;
  };
  reflections: {
    totalReflectionDaysCount: number;
    currentCategoryReflectionDaysCount: number;
    currentReflectionCategoryName: string | null;
    userReflectionCardImageUrl: string | null;
  };
  connections: {
    updatedOn: string;
  };
}

export default function YouScreen({ navigation }) {
  // Mount Localization
  const { t } = useTranslation();
  // Mount Redux dispatch
  const dispatch: AppDispatch = useDispatch();
  // Get userData
  const user = JSON.parse(useSelector((state: RootState) => state.auth.user));
  // Get stream status
  const streamStatus = useSelector(
    (state: RootState) => state.chat.isStreamInitialized
  );
  // Get user total reflections days count
  const totalReflectionDaysCount = useSelector(
    (state: RootState) => state.reflections.totalReflectionDaysCount
  );
  // Get user current category reflection days count
  const currentCategoryReflectionDaysCount = useSelector(
    (state: RootState) => state.reflections.currentCategoryReflectionDaysCount
  );
  // Get user current reflection category name
  const currentReflectionCategoryName = useSelector(
    (state: RootState) => state.reflections.currentReflectionCategoryName
  );
  // Get user current reflection day card image
  const userReflectionCardImageUrl = useSelector(
    (state: RootState) => state.reflections.userReflectionCardImageUrl
  );
  // Connections updated on
  const updatedOn = useSelector(
    (state: RootState) => state.connections.updatedOn
  );

  // Safe Area Insets
  const insets = useSafeAreaInsets();

  //Add event listener for chat messages
  useOnMessageChat();

  // Refs
  const appState = useRef<AppStateStatus>(AppState.currentState);
  // Stream Chat
  const chatClient = StreamChat.getInstance(CHAT_API_KEY);

  // Constants
  const [isUserPaused, setIsUserPaused] = useState<boolean>(false);
  const [showProgressionModal, setShowProgressionModal] =
    useState<boolean>(false);
  const [isPremiumModalVisible, setIsPremiumModalVisible] =
    useState<boolean>(false);
  const [categories, setCategories] = useState<any[]>([]);
  const [categoriesImages, setCategoriesImages] = useState<string[]>([]);
  const [appStateVisible, setAppStateVisible] = useState<AppStateStatus>(
    appState.current
  );

  // // Subscribe to update of User
  // const updateUserSub = API.graphql<
  //   GraphQLSubscription<OnUpdateUserSubscription>
  // >({
  //   query: subscriptions.onUpdateUser,
  //   variables: {
  //     filter: {
  //       id: {
  //         eq: user?.id,
  //       },
  //     },
  //   },
  // }).subscribe({
  //   next: async ({ data }) => {
  //     const updatedUserPaused = data?.onUpdateUser?.isUserPaused;
  //     if (
  //       updatedUserPaused !== undefined &&
  //       updatedUserPaused !== isUserPaused
  //     ) {
  //       setIsUserPaused(updatedUserPaused);
  //     }
  //   },
  //   error: (error) => {
  //     console.log("Updated User Error: ", error);
  //   },
  // });

  // Daily Ready operations
  useEffect(() => {
    const subscription = AppState.addEventListener(
      "change",
      async (nextAppState) => {
        console.log("nextAppState", nextAppState);
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === "active"
        ) {
          console.log("App Active");
          // check and set if user can reflect
          updateUserTimeZone(user);
        }
        if (
          appState.current === "active" &&
          nextAppState.match(/inactive|background/)
        ) {
          console.log("App to Background", nextAppState);
        }
        appState.current = nextAppState;
        setAppStateVisible(appState.current);
      }
    );

    // return () => {
    //   subscription.remove();
    // };
  }, []);



  useEffect(() => {
    registerDeviceOneSignal(user);
  }, [user]);
  
  const fetchDashboardCategories = async () => {
    const categoriesImagesArray = [];
    // TODO: Move to a thunk!
    const categories = await getDashboardCategories();
    setCategories(categories);
    await Promise.all(
      categories.map(async (category, index) => {
        const headerImageURL = await getImageURL(category.dashboardImage);
        categoriesImagesArray[index] = headerImageURL;
      })
    );
    setCategoriesImages(categoriesImagesArray);
  };

  useEffect(() => {
    fetchDashboardCategories();
  }, []);

  useEffect(() => {
    const requestPushPermission = async () => {
      await OneSignal.Notifications.requestPermission(true);
      setTimeout(() => {
        registerDeviceOneSignal(user);
      }, 1000);
    };
    requestPushPermission();
  }, []);

  // TODO: Figure out where to move this to clean this view.
  const createChannelEventsListener = async () => {
    console.log("Watching Stream channels");

    // Process chat message count.
    chatClient.on((event) => {
      if (event.total_unread_count !== undefined) {
        dispatch(setMessageCount(event.total_unread_count));
      }
    });

    // Chat connection state.
    chatClient.on("connection.changed", (e) => {
      if (e.online) {
        console.log("the connection is up!");
      } else {
        console.log("the connection is down!");
      }
    });

  };

  const getCurrentDayCategoryName = async () => {
    const currentCategoryId = await getCurrentReflectionDayCategoryId(
      totalReflectionDaysCount,
      DAY_MAIN_POSITION
    );
    const currentCategory = await getCategoryById(currentCategoryId);
    console.log("getCurrentDayCategoryName currentCategory", currentCategory);
    dispatch(
      setReflectionQuestionBackgroundImage(
        currentCategory.reflectionQuestionBackgroundImage
      )
    );
    dispatch(
      setReflectionQuestionsGradientValues(
        currentCategory.reflectionQuestionsGradientValues
      )
    );
    dispatch(setCurrentReflectionCategoryName(currentCategory.name));
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      dispatch(setIsYouScreenLoaded(true));
      await getCurrentDayCategoryName();
      dispatch(fetchUserReflectionsDaysCount());
      dispatch(fetchGeneralAppConfig());
    });
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    console.log("Stream status updated");
    if (streamStatus) {
      createChannelEventsListener();
    }
  }, [streamStatus]);

  useEffect(() => {
    const getGeneralAppConfigurations = async () => {
      const appConfig = await getGeneralAppConfig();
      const promptsCount = appConfig.find(
        (config) => config.contentType === "chat-prompts-count"
      );
      setPromptsCount(promptsCount.value);
    };
    getGeneralAppConfigurations();
  }, []);

  useEffect(() => {
    dispatch(setIsYouScreenLoaded(true));
    dispatch(fetchUserReflectionsDaysCount());
    dispatch(fetchGeneralAppConfig());
  }, []);

  useEffect(() => {
    console.log("totalReflectionDaysCount updated");
    getCurrentDayCategoryName();
  }, [totalReflectionDaysCount]);

  useEffect(() => {
    const updateUser = async () => {
      const userData = await getUserById(user?.id);
      const updatedUser = JSON.parse(userData);
      await dispatch(setUser(updatedUser));
    };
    updateUser();
  }, [updatedOn, user]);

  return (
    <SafeAreaComponent
      testID="YouTab"
      scrollable
      relative
      gradientColorStart="#EEE8DC"
      gradientColorEnd="#FFF8E6"
      gradientDirection="ttb"
    >
      <View
        className="w-screen h-screen absolute top-0 left-0 bg-gradient-start -ml-6"
        style={{ marginTop: (insets.top + ADDITIONAL_INSET_TOP) * -1 }}
      >
        <Image
          source={require("@assets/backgrounds/dashboard.png")}
          className="object-contain w-screen h-screen"
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showProgressionModal}
        className="relative"
      >
        <View className="w-screen h-[400px] px-6 pt-4 pb-20 flex items-start justify-start absolute bottom-0 bg-modal rounded-t-3xl shadow-2xl">
          <Text
            allowFontScaling={false}
            className="text-dark w-full text-left text-[20px] mt-4 font-jokkerl"
          >
            Here is where you’ll track your progress as you complete your daily
            practice of reflection and Ready wisdom.
          </Text>
          <Text
            allowFontScaling={false}
            className="text-dark w-full text-left text-[20px] font-jokkerl mt-4"
          >
            From Growth to Curiosity, each area of Ready wisdom comprises 10
            days of practice. Each area was intentionally designed, in order, in
            a ladder of understanding and skills that build upon the last.
          </Text>
          <DynamicButton
            onPress={() => setShowProgressionModal(false)}
            type={"full-transparent"}
            label={t("general.got-it")}
            size="large"
            rounded={"2xl"}
            position="none"
            textStyles="text-base"
            textColor="dark"
            customStyles="mt-8 !text-dark w-full mx-0 absolute bottom-8 left-6"
          />
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isUserPaused}
        className="relative"
      >
        <View className="w-screen h-screen px-6 py-20 flex items-center justify-start absolute bottom-0 bg-card">
          <Text
            allowFontScaling={false}
            className="text-dark w-full text-left text-[36px] font-jokkerl"
          >
            {t("profile-suspended.title")}
          </Text>
          <Text
            allowFontScaling={false}
            className="text-dark w-full text-left text-lg mt-4 font-jokkerl"
          >
            {t("profile-suspended.subtitle")}
          </Text>
          <Text
            allowFontScaling={false}
            className="text-dark w-full text-left text-lg mt-4 font-jokkerl"
          >
            {t("profile-suspended.description")}
          </Text>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isPremiumModalVisible}
        className="relative bg-dark"
      >
        <View className="w-screen h-[60%] px-6 pb-20 pt-8 flex items-start justify-start absolute bottom-0 bg-card rounded-t-3xl shadow-2xl">
          <ReadyPlus className="mt-4" />
          <Text
            allowFontScaling={false}
            className="text-dark w-full text-left text-[36px] mt-12 font-jokkerl"
          >
            Unlock a world of opportunities
          </Text>
          <Text
            allowFontScaling={false}
            className="text-dark w-full text-left text-[16px] mt-6 font-jokkerl"
          >
            Upgrade to our premium membership for exclusive benefits, including
            more sparks, enhanced profile visibility, and increased chances of
            finding your perfect match.
          </Text>
          <Text
            allowFontScaling={false}
            className="text-dark w-full text-left text-[16px] mt-6 font-jokkerl"
          >
            Don't miss out on this opportunity to supercharge your dating
            experience.
          </Text>
          <DynamicButton
            onPress={() => setIsPremiumModalVisible(false)}
            type={"full-transparent"}
            label={t("general.got-it")}
            size="large"
            rounded={"2xl"}
            position="none"
            textStyles="text-base"
            textColor="dark"
            customStyles="mt-8 !text-dark w-full mx-0 absolute bottom-8 left-6"
          />
        </View>
      </Modal>
      <View className="w-full h-full mb-[150px]">
        {user?.firstName && (
          <View className="mb-8">
            <Text allowFontScaling={false} className="font-jokkerl text-[36px]">
              {t("general.welcome")},
            </Text>
            <Text
              allowFontScaling={false}
              className="font-jokkerl text-[36px] -tracking-widest"
            >
              {user?.firstName}
            </Text>
          </View>
        )}
        <View className="mb-8">
          <Text
            allowFontScaling={false}
            className="font-jokkerl text-base mb-3"
          >
            {t("you-screen.your-feed")}
          </Text>
          <HorizontalCardsUserMilestonesScroll navigation={navigation} />
        </View>
        {user?.days?.items?.length > 0 ? (
          <View className="pb-8">
            <View className="w-full flex flex-row items-center justify-between">
              <Text
                allowFontScaling={false}
                className="font-jokkerl text-dark mb-4 text-[16px]"
              >
                {t("you-screen.your-progression")}
              </Text>
              <Pressable onPress={() => setShowProgressionModal(true)}>
                <Text
                  allowFontScaling={false}
                  className="font-jokkerl text-dark mb-4 text-[14px] underline"
                >
                  {t("general.learn-more")}
                </Text>
              </Pressable>
            </View>
            <View className="w-full h-[160px] flex items-start justify-start">
              <PracticeStatus
                reflectionsDaysCount={currentCategoryReflectionDaysCount}
                currentReflectionCategoryName={currentReflectionCategoryName}
                userReflectionCardImageUrl={userReflectionCardImageUrl}
              />
            </View>
          </View>
        ) : null}
        <View className="mb-4">
          <Text
            allowFontScaling={false}
            className="text-dark font-jokkerl text-[16px]"
          >
            Your practice
          </Text>
        </View>
        <CategoriesScroller
          categories={categories}
          categoriesImages={categoriesImages}
          navigation={navigation}
          user={user}
          reflectionsDaysCount={currentCategoryReflectionDaysCount}
          totalDaysCount={totalReflectionDaysCount}
          showPaymentModal={() => setIsPremiumModalVisible(true)}
          isComingSoonVisible
        />
        <ContentScroller
          showViewAll
          contentCount={5}
          contentCategoryName="All"
          navigation={navigation}
          totalReflectionDaysCount={totalReflectionDaysCount}
          title={t("you-screen.explore-more")}
        />
        <View className="pb-24">
          <DailyWisdom />
        </View>
      </View>
    </SafeAreaComponent>
  );
}
