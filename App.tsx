import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  NavigationState,
  PartialState,
  StackActions,
  useNavigation,
  useNavigationContainerRef,
} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import dayjs from "dayjs";
import * as Device from "expo-device";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import {
  DevSettings,
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// RN View Shot (Screen Capture)
import ViewShot from "react-native-view-shot";

// AWS Storage
import { uploadData } from "aws-amplify/storage";

// Image Handling
import { clearOldCache, fetchImageFromUri } from "@utils/imageHandling";

// Amplify Utils
import { updateUser } from "@utils/amplifyUtils";

// AWS Amplify setup. This has to be done as early as possible.
import { Amplify } from "aws-amplify";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";
import { getUrl } from "aws-amplify/storage";
import { Hub } from "aws-amplify/utils";
// import { ExpoSQLiteAdapter } from "@aws-amplify/datastore-storage-adapter/ExpoSQLiteAdapter";
import { generateClient, GraphQLQuery } from "@aws-amplify/api";
import * as customQueries from "@gcq/index";
import * as mutations from "@graphql/mutations";
import * as queries from "@graphql/queries";
import {
  CreateFeedbackTesterInput,
  CreateFeedbackTesterMutation,
  CreateFeedbackUserInput,
  CreateFeedbackUserMutation,
  GetUserQuery,
  StreamTokenQuery,
  StreamTokenQueryVariables,
} from "@src/api/index";
import amplifyconfig from "src/amplifyconfiguration.json";

// Sentry
import * as Sentry from "@sentry/react-native";

// Segment
import {
  AnalyticsProvider,
  createClient,
} from "@segment/analytics-react-native";

// OneSignal Push Notifications Setup.
import Constants from "expo-constants";
import { LogLevel, OneSignal } from "react-native-onesignal";
// Expo Haptics
import * as Haptics from "expo-haptics";

// Paper Component Provider
import { PaperProvider } from "react-native-paper";

// Expo BlurView
import { BlurView } from "expo-blur";

// Get Stream Chat
import { AppProvider } from "@components/AppContext/AppContext";
import { CHAT_API_KEY } from "@src/chatConfig/chatConfig";
import { StreamChat } from "stream-chat";
import { Chat, DeepPartial, OverlayProvider, Theme } from "stream-chat-expo";

// Add React Redux and Store
import store, { AppDispatch } from "@store/store";
import { Provider, useDispatch, useSelector } from "react-redux";

// Components
import DynamicButton from "@components/DynamicButton/DynamicButton";
import ToastManager from "@components/ToastManager";

// Safe Area Lib
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

// Splash Screen
import SplashScreen from "@src/components/SplashScreen/SplashScreen";

// Sign Up Screens
import AddMoreDetailsScreen from "@screens/SignUp/AddMoreDetailsScreen";
import UserDateOfBirthScreen from "@screens/SignUp/UserDateOfBirthScreen";
import UserNameScreen from "@screens/SignUp/UserNameScreen";
import UserPhoneNumberScreen from "@screens/SignUp/UserPhoneNumberScreen";
import UserPhoneVerificationCodeScreen from "@screens/SignUp/UserPhoneVerificationCodeScreen";
import ValuePropScreen from "@screens/SignUp/ValuePropScreen";
import ValuePropScreen2 from "@screens/SignUp/ValuePropScreen2";
import WelcomeScreen from "@screens/SignUp/WelcomeScreen";
import ReflectionQuestionScreen from "@src/screens/Reflection/ReflectionQuestionScreen";
import ReflectionQuoteScreen from "@src/screens/Reflection/ReflectionQuoteScreen";
import ReflectionStartScreen from "@src/screens/Reflection/ReflectionStartScreen";
import ReflectionStatsScreen from "@src/screens/Reflection/ReflectionStatsScreen";
import AboutReadyScreen from "@src/screens/SignUp/AboutReadyScreen";
import CompleteFirstReflectionScreen from "@src/screens/SignUp/CompleteFirstReflectionScreen";
import FirstReflectionIntroScreen from "@src/screens/SignUp/FirstReflectionIntroScreen";
import FirstReflectionLastScreen from "@src/screens/SignUp/FirstReflectionLastScreen";
import FirstReflectionProgressionScreen from "@src/screens/SignUp/FirstReflectionProgressionScreen";
import FirstReflectionQuestionScreen from "@src/screens/SignUp/FirstReflectionQuestionScreen";
import FirstReflectionQuoteScreen from "@src/screens/SignUp/FirstReflectionQuoteScreen";
import GoToDashboardScreen from "@src/screens/SignUp/GoToDashboardScreen";
import HowMatchesWorkFourScreen from "@src/screens/SignUp/HowMatchesWorkFourScreen";
import HowMatchesWorkOneScreen from "@src/screens/SignUp/HowMatchesWorkOneScreen";
import HowMatchesWorkThreeScreen from "@src/screens/SignUp/HowMatchesWorkThreeScreen";
import HowMatchesWorkTwoScreen from "@src/screens/SignUp/HowMatchesWorkTwoScreen";
import HowReflectionsWorkScreen from "@src/screens/SignUp/HowReflectionsWorkScreen";
import UserEmailRecoveryScreen from "@src/screens/SignUp/UserEmailRecoveryScreen";
import UserEmailScreen from "@src/screens/SignUp/UserEmailScreen";
import UserNotificationsScreen from "@src/screens/SignUp/UserNotificationsScreen";
import UserPasswordScreen from "@src/screens/SignUp/UserPasswordScreen";
import WhatAreDailyReflectionsScreen from "@src/screens/SignUp/WhatAreDailyReflectionsScreen";
import ReadyLandingScreen from "@src/screens/Tabs/ReadyLandingScreen";

// Profile Setup Screens
import SexualOrientationScreen from "@src/screens/ProfileSetup/SexualOrientationScreen";
import MentalHealthScreen from "@screens/ProfileSetup/15MentalHealthScreen";
import ProfileSetupScreen from "@screens/ProfileSetup/1ProfileSetupScreen";
import QualityScreen from "@screens/ProfileSetup/20QualityScreen";
import EnergyScreen from "@screens/ProfileSetup/25EnergyScreen";
import SecondProfileSetupScreen from "@screens/ProfileSetup/30SecondProfileSetupScreen";
import StarSignScreen from "@screens/ProfileSetup/35StarSignScreen";
import GenderScreen from "@src/screens/ProfileSetup/40GenderScreen";
import PronounsScreen from "@screens/ProfileSetup/45PronounsScreen";
import GenderPreferenceScreen from "@screens/ProfileSetup/50GenderPreferenceScreen";
import EthnicityScreen from "@screens/ProfileSetup/55EthnicityScreen";
import WhatIsImportantScreen from "@screens/ProfileSetup/5WhatIsImportantScreen";
import LanguagesScreen from "@screens/ProfileSetup/60LanguagesScreen";
import LocationScreen from "@screens/ProfileSetup/65LocationScreen";
import DistanceScreen from "@screens/ProfileSetup/70DistanceScreen";
import HeightScreen from "@screens/ProfileSetup/75HeightScreen";
import KidsScreen from "@screens/ProfileSetup/80KidsScreen";
import WantKidsScreen from "@screens/ProfileSetup/81WantKidsScreen";
import ReligionScreen from "@screens/ProfileSetup/82ReligionScreen";
import HometownScreen from "@screens/ProfileSetup/85HometownScreen";
import SchoolScreen from "@screens/ProfileSetup/90SchoolScreen";
import EducationScreen from "@screens/ProfileSetup/95EducationScreen";
import ValueSetupScreen from "@src/screens/ProfileSetup/10ValueSetupScreen";
import DiscoveringYouScreen from "@src/screens/ProfileSetup/7DiscoveringYouScreen";

// Habits Screen
import DrugsScreen from "@screens/Habits/10DrugsScreen";
import AlcoholScreen from "@screens/Habits/15AlcoholScreen";
import FirstHabitsSetupScreen from "@screens/Habits/1FirstHabitsSetupScreen";
import TherapyScreen from "@screens/Habits/25TherapyScreen";
import ExerciseScreen from "@screens/Habits/30ExerciseScreen";
import ProfileCompleteScreen from "@screens/Habits/35ProfileCompleteScreen";
import TobaccoScreen from "@screens/Habits/5TobaccoScreen";

// Sign In Screens
import SignInPhoneNumberScreen from "@screens/SignIn/PhoneNumberScreen";
import PhoneVerificationCodeScreen from "@screens/SignIn/PhoneVerificationCodeScreen";
import SignInEmailScreen from "@screens/SignIn/SignInEmailScreen";
import SignInLandingScreen from "@screens/SignIn/SignInLandingScreen";

// Chat Screens
import ReportStepOneScreen from "@screens/Chat/10ReportStepOneScreen";
import UnmatchStepOneScreen from "@screens/Chat/10UnmatchStepOneScreen";
import ReportReasonScreen from "@screens/Chat/20ReportReasonScreen";
import UnmatchReasonScreen from "@screens/Chat/20UnmatchReasonScreen";
import ReportDetailsScreen from "@screens/Chat/30ReportDetailsScreen";
import UnmatchDetailsScreen from "@screens/Chat/30UnmatchDetailsScreen";
import ReportCompleteScreen from "@screens/Chat/40ReportCompleteScreen";
import UnmatchCompleteScreen from "@screens/Chat/40UnmatchCompleteScreen";
import SingleChannelScreen from "@screens/Chat/SingleChannelScreen";

// Settings Screens
import AboutScreen from "@src/screens/Settings/AboutScreen";
import AboutYouScreen from "@src/screens/Settings/AboutYouScreen";
import AccountInformationScreen from "@src/screens/Settings/AccountInformationScreen";
import AgeRangeScreen from "@src/screens/Settings/AgeRangeScreen";
import DailyReflectionReminderScreen from "@src/screens/Settings/DailyReflectionReminderScreen";
import EditBioScreen from "@src/screens/Settings/EditBioScreen";
import HelpScreen from "@src/screens/Settings/HelpScreen";
import MatchingPreferencesScreen from "@src/screens/Settings/MatchingPreferencesScreen";
import MyProfileScreen from "@src/screens/Settings/MyProfileScreen";
import NewConnectionsReminderScreen from "@src/screens/Settings/NewConnectionsReminderScreen";
import NewMessagesScreen from "@src/screens/Settings/NewMessagesScreen";
import NotificationSettingsScreen from "@src/screens/Settings/NotificationSettingsScreen";
import ProfileDoneScreen from "@src/screens/Settings/ProfileDoneScreen";
import UserAccountScreen from "@src/screens/Settings/UserAccountScreen";

// Tab Screens
import ChatScreen from "@src/screens/Tabs/ChatScreen";
import ConnectScreen from "@src/screens/Tabs/ConnectScreen";
import YouScreen from "@src/screens/Tabs/YouScreen";

// Connect Screens
import ConnectionProfileScreen from "@screens/Connect/ConnectionProfileScreen";
import MatchesV2Screen from "@screens/Connect/MatchesV2Screen";

// Content display Screens
import AudioScreen from "@screens/Content/AudioScreen";
import ContentCategoryScreen from "@screens/Content/ContentCategoryScreen";
import ContentTypeScreen from "@screens/Content/ContentTypeScreen";
import LearnScreen from "@screens/Content/LearnScreen";
import ReadingScreen from "@screens/Content/ReadingScreen";
import VideoPlayerScreen from "@screens/Content/VideoPlayerScreen";

// Disconnect Screens
import DisconnectScreen from "@screens/Disconnect/DisconnectScreen";

// Components
import UserMenu from "@components/UserMenu/UserMenu";
import ArrowLeftIcon from "@src/components/ArrowLeftIcon/ArrowLeftIcon";
import CloseIcon from "@src/components/CloseIcon/CloseIcon";

// Tabler Icons
import { IconX } from "@tabler/icons-react-native";

// Menu Icons
import ConnectOff from "@assets/menu-icons/connect-off.svg";
import ConnectOn from "@assets/menu-icons/connect-on.svg";
import CircleOff from "@assets/menu-icons/you-off.svg";
import CircleOn from "@assets/menu-icons/you-on.svg";
// import SparkOn from "@assets/menu-icons/spark-on.svg";
// import SparkOff from "@assets/menu-icons/spark-off.svg";
import ChatOff from "@assets/menu-icons/chat-off.svg";
import ChatOn from "@assets/menu-icons/chat-on.svg";
// import ProfileOn from "@assets/menu-icons/profile-on.svg";
// import ProfileOff from "@assets/menu-icons/profile-off.svg";

// Localization
import "@src/i18n/index";
import { useTranslation } from "react-i18next";

// Get Auth Slice from redux store
import { DAY_MAIN_POSITION } from "@src/constants/constants";
import QueryClientProvider, {
  queryClient,
} from "@src/providers/QueryClientProvider";
import {
  fetchUserReflectionsDaysCount,
  setCurrentReflectionCategoryName,
  setReflectionQuestionBackgroundImage,
  setReflectionQuestionsGradientValues,
} from "@src/store/reflections/reflectionsSlice";
import { getCategoryById } from "@src/utils/categories";
import { getCurrentReflectionDayCategoryId } from "@src/utils/reflections";
import { setUser, setUserId, setUserType } from "@store/auth/authSlice";
import { setIsStreamInitialized, setMessageCount } from "@store/chat/chatSlice";
import { setStoryVisibility } from "@store/stories/storiesSlice";
import { useFonts } from "expo-font";
import UserPhotoScreen from "@src/screens/ProfileSetup/UserPhotoScreen";

Amplify.configure(amplifyconfig);

const API = generateClient();

const getSentryApiKey = () => {
  console.log(
    "process.env.EXPO_PUBLIC_ENVIRONMENT",
    process.env.EXPO_PUBLIC_ENVIRONMENT,
  );
  switch (process.env.EXPO_PUBLIC_ENVIRONMENT) {
    case "dev":
      return "https://"; // Dev
    case "staging":
      return "https://"; // Staging
    case "beta":
      return "https://"; // Beta
    case "prod":
      return "https://"; // Prod
    default:
      throw new Error("Unknown environment");
  }
};

if (__DEV__) {
  /*
   * This is a dev setting to clear the cache of react query for debug
   */
  DevSettings.addMenuItem("Remove cache react query", () => {
    queryClient.clear();
  });
}

if (!__DEV__) {
  Sentry.init({
    dsn: getSentryApiKey(),
    debug: process.env.EXPO_PUBLIC_ENVIRONMENT === "prod" ? false : true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
  });
}

const getSegmentApiKey = () => {
  switch (process.env.EXPO_PUBLIC_ENVIRONMENT) {
    case "dev":
      return ""; // Dev
    case "staging":
      return ""; // Staging
    case "beta":
      return ""; // Beta
    case "prod":
      return ""; // Prod
    default:
      throw new Error("Unknown environment");
  }
};

const segmentClient = createClient({
  writeKey: getSegmentApiKey(),
  trackAppLifecycleEvents: true,
  collectDeviceId: true,
  debug: process.env.ENVIRONMENT !== "prod",
});

console.log("Initialize OneSignal");
OneSignal.Debug.setLogLevel(LogLevel.Verbose);
OneSignal.initialize(Constants.expoConfig.extra.oneSignalAppId);

console.log("CHAT_API_KEY", CHAT_API_KEY);

const chatClient = StreamChat.getInstance(CHAT_API_KEY);

const chatTheme: DeepPartial<Theme> = {
  overlay: {
    container: {
      backgroundColor: "rgba(0,0,0,0.2)", // Overlay (On Press) BG Color
    },
  },
  loadingDots: {
    container: {
      backgroundColor: "transparent", // Main channels list BG color
    },
    loadingDot: {
      backgroundColor: "transparent", // Main channels list BG color
    },
  },
  emptyStateIndicator: {
    channelContainer: {
      backgroundColor: "red",
      display: "none",
    },
    channelDetails: {
      backgroundColor: "red",
      color: "red",
    },
    channelTitle: {
      backgroundColor: "red",
      display: "none",
      color: "red",
    },
  },
  channelListMessenger: {
    flatListContent: {
      backgroundColor: "transparent", // Main channels list BG color
    },
    flatList: {
      backgroundColor: "transparent", // Main channels list BG color
    },
  },
  channelListSkeleton: {
    background: {
      backgroundColor: "transparent", // Loading skeleton BG color
    },
    container: {},
    maskFillColor: "transparent",
  },
  messageList: {
    container: {
      backgroundColor: "transparent", // Single Chat BG Color
    },
    contentContainer: {
      backgroundColor: "transparent", // Single Chat BG Color
    },
    listContainer: {
      backgroundColor: "transparent", // Single Chat BG Color
    },
    messageContainer: {
      backgroundColor: "transparent", // Single Chat BG Color
    },
    messageSystem: {
      container: {
        backgroundColor: "transparent", // Single Chat BG Color
      },
    },
    typingIndicatorContainer: {
      backgroundColor: "black",
    },
  },
  messageSimple: {
    content: {
      replyBorder: {
        backgroundColor: "#F7F3EA",
      },
      receiverMessageBackgroundColor: "#F7F3EA",
      senderMessageBackgroundColor: "rgba(0,0,0,0.3)",
    },
  },
  channelPreview: {
    container: {
      backgroundColor: "transparent", // Channel Main container BG color
    },
    contentContainer: {
      backgroundColor: "transparent", // Channel text BG color
    },
    unreadContainer: {
      backgroundColor: "#000000", // Channel text BG color
    },
  },
  messageInput: {
    container: {
      backgroundColor: "transparent", // Bottom Message Box BG color
    },
    inputBoxContainer: {
      backgroundColor: "transparent", // Text Input container BG color
    },
    inputBox: {
      backgroundColor: "transparent", // Text Input Box BG color
    },
    sendButtonContainer: {
      backgroundColor: "transparent", // Send Button BG color
    },
    sendButton: {
      backgroundColor: "transparent", // Send Button BG color
    },
  },
};

const chatStyles = { style: chatTheme };

// Screens Types
type AuthStackParamList = {
  ReadyLandingScreen: undefined;
  UserPhoneNumberScreen: undefined;
  UserPhoneVerificationCodeScreen: undefined;
  PhoneVerificationCodeScreen: undefined;
  AboutReadyScreen: undefined;
  WhatAreDailyReflectionsScreen: undefined;
  HowReflectionsWorkScreen: undefined;
  HowMatchesWorkOneScreen: undefined;
  HowMatchesWorkTwoScreen: undefined;
  HowMatchesWorkThreeScreen: undefined;
  HowMatchesWorkFourScreen: undefined;
  CompleteFirstReflectionScreen: undefined;
  FirstReflectionIntroScreen: undefined;
  FirstReflectionQuestionScreen: undefined;
  FirstReflectionQuoteScreen: undefined;
  FirstReflectionProgressionScreen: undefined;
  FirstReflectionLastScreen: undefined;
  ReflectionStartScreen: undefined;
  ReflectionQuestionScreen: undefined;
  ReflectionQuoteScreen: undefined;
  ReflectionStatsScreen: undefined;
  UserEmailScreen: undefined;
  UserEmailRecoveryScreen: undefined;
  UserNameScreen: undefined;
  UserNotificationsScreen: undefined;
  GoToDashboardScreen: undefined;
  WelcomeScreen: undefined;
  SignInWithPhoneScreen: undefined;
  SignInVerifyPhoneScreen: undefined;
  UserDateOfBirthScreen: undefined;
  SignInLandingScreen: undefined;
  AddMoreDetailsScreen: undefined;
  ValuePropScreen: undefined;
  ValuePropScreen2: undefined;
  SignInPhoneNumberScreen: undefined;
  UserPasswordScreen: undefined;
  SignInEmailScreen: undefined;

  // Profile Setup Screens
  ProfileSetupScreen: undefined;
  WhatIsImportantScreen: undefined;
  ValueSetupScreen: undefined;
  DiscoveringYouScreen: undefined;
  MentalHealthScreen: undefined;
  QualityScreen: undefined;
  EnergyScreen: undefined;
  SecondProfileSetupScreen: undefined;
  StarSignScreen: undefined;
  GenderScreen: undefined;
  SexualOrientationScreen: undefined;
  PronounsScreen: undefined;
  GenderPreferenceScreen: undefined;
  EthnicityScreen: undefined;
  LanguagesScreen: undefined;
  LocationScreen: undefined;
  DistanceScreen: undefined;
  HeightScreen: undefined;
  KidsScreen: undefined;
  WantKidsScreen: undefined;
  ReligionScreen: undefined;
  HometownScreen: undefined;
  SchoolScreen: undefined;
  EducationScreen: undefined;

  // Habits Screen
  FirstHabitsSetupScreen: undefined;
  TobaccoScreen: undefined;
  WeedScreen: undefined;
  AlcoholScreen: undefined;
  DrugsScreen: undefined;
  TherapyScreen: undefined;
  ExerciseScreen: undefined;
  ProfileCompleteScreen: undefined;
  UserPhotoScreen: undefined;
};

type TabParamList = {
  You: undefined;
  Connect: undefined;
  Spark: undefined;
  Chat: undefined;
  UserAccount: undefined;
};

type RootStackParamList = {
  Tabs: undefined;
  UserAccountScreen: undefined;
  MyProfileScreen: undefined;
  ProfileDoneScreen: undefined;
  EditBioScreen: undefined;
  MatchingPreferencesScreen: undefined;
  AgeRangeScreen: undefined;
  NotificationSettingsScreen: undefined;
  AccountInformationScreen: undefined;
  HelpScreen: undefined;
  AboutScreen: undefined;
  AboutYouScreen: undefined;
  DailyReflectionReminderScreen: undefined;
  NewConnectionsReminderScreen: undefined;
  NewMessagesScreen: undefined;
  ChannelListScreen: undefined;
  SingleChannelScreen: undefined;
  UnmatchStepOneScreen: undefined;
  UnmatchReasonScreen: undefined;
  UnmatchDetailsScreen: undefined;
  UnmatchCompleteScreen: undefined;
  ReportStepOneScreen: undefined;
  ReportReasonScreen: undefined;
  ReportDetailsScreen: undefined;
  ReportCompleteScreen: undefined;
  ConnectionProfileScreen: undefined;
  MatchesV2Screen: undefined;
  VideoPlayerScreen: undefined;
  AudioScreen: undefined;
  ReadingScreen: undefined;
  DisconnectScreen: undefined;
  ContentCategoryScreen: undefined;
  ContentTypeScreen: undefined;
  LearnScreen: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

// Define the state structure
interface RootState {
  auth: {
    user: any;
    isYouScreenLoaded: boolean;
    userType: string;
  };
  signup: {
    isUserOnboarded: boolean;
    userId: string;
  };
  stories: {
    isStoryVisibile: boolean;
  };
  feedback: {
    isFeedbackFormVisbible: boolean;
  };
  connections: {
    isConnectionsBadgeVisible: boolean;
  };
  chat: {
    messageCount: number;
    isStreamInitialized: boolean;
  };
  toast: {
    isToastVisible: boolean;
    toastStyle: string;
    toastText: string;
  };
}

const Stack = createNativeStackNavigator<AuthStackParamList>();
const AuthStackScreen: React.FC = () => {
  // Mount Navigation
  const navigation = useNavigation<NavigationProp>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ReadyLandingScreen"
        component={ReadyLandingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ValuePropScreen"
        component={ValuePropScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name="ValuePropScreen2"
        component={ValuePropScreen2}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UserPasswordScreen"
        component={UserPasswordScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
          headerRight: () => <CloseIcon onPress={() => navigation.goBack()} />,
        }}
      />
      <Stack.Screen
        name="AddMoreDetailsScreen"
        component={AddMoreDetailsScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
          headerRight: () => <CloseIcon onPress={() => navigation.goBack()} />,
        }}
      />
      <Stack.Screen
        name="UserPhoneNumberScreen"
        component={UserPhoneNumberScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UserPhoneVerificationCodeScreen"
        component={UserPhoneVerificationCodeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AboutReadyScreen"
        component={AboutReadyScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name="WhatAreDailyReflectionsScreen"
        component={WhatAreDailyReflectionsScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name="HowReflectionsWorkScreen"
        component={HowReflectionsWorkScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name="HowMatchesWorkOneScreen"
        component={HowMatchesWorkOneScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name="HowMatchesWorkTwoScreen"
        component={HowMatchesWorkTwoScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name="HowMatchesWorkThreeScreen"
        component={HowMatchesWorkThreeScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name="HowMatchesWorkFourScreen"
        component={HowMatchesWorkFourScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name="CompleteFirstReflectionScreen"
        component={CompleteFirstReflectionScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name="FirstReflectionIntroScreen"
        component={FirstReflectionIntroScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon
              iconColor="#FFF"
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
      <Stack.Screen
        name="FirstReflectionQuestionScreen"
        component={FirstReflectionQuestionScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FirstReflectionQuoteScreen"
        component={FirstReflectionQuoteScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => <View></View>,
        }}
      />
      <Stack.Screen
        name="FirstReflectionProgressionScreen"
        component={FirstReflectionProgressionScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => <View></View>,
        }}
      />
      <Stack.Screen
        name="FirstReflectionLastScreen"
        component={FirstReflectionLastScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => <View></View>,
        }}
      />
      <Stack.Screen
        name="UserNameScreen"
        component={UserNameScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UserEmailScreen"
        component={UserEmailScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => <View />,
        }}
      />
      <Stack.Screen
        name="UserEmailRecoveryScreen"
        component={UserEmailRecoveryScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name="UserDateOfBirthScreen"
        component={UserDateOfBirthScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UserNotificationsScreen"
        component={UserNotificationsScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerBackTitleStyle: {
            fontSize: 10,
            fontFamily: "Dm",
          },
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name="GoToDashboardScreen"
        component={GoToDashboardScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerBackTitleStyle: {
            fontSize: 10,
            fontFamily: "Dm",
          },
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignInLandingScreen"
        component={SignInLandingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PhoneVerificationCodeScreen"
        component={PhoneVerificationCodeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignInPhoneNumberScreen"
        component={SignInPhoneNumberScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name="SignInEmailScreen"
        component={SignInEmailScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

// Get Stream Channel List Screen
const ChannelListScreen = () => {
  return null;
};

const Tab = createBottomTabNavigator<TabParamList>();
const TabsScreen: React.FC = () => {
  // Mount Navigation
  const navigation = useNavigation<NavigationProp>();

  // Get connections badge state
  const isConnectionsBadgeVisible = useSelector(
    (state: RootState) => state.connections.isConnectionsBadgeVisible,
  );

  // Get messages count
  const chatMessageCount = useSelector(
    (state: RootState) => state.chat.messageCount,
  );

  // Get Stories Visibility State
  const isStoryVisibile = useSelector(
    (state: RootState) => state.stories.isStoryVisibile,
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerTransparent: true,
        headerStyle: {
          backgroundColor: "transparent", // made header transparent
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
            width: 0,
          },
        },
        tabBarStyle: {
          display: !isStoryVisibile ? "flex" : "none",
          position: "absolute",
          backgroundColor: "transparent", // made bottom tabbar transparent
          borderTopWidth: 0,
        },
        tabBarBackground: () => (
          <BlurView
            intensity={30}
            style={{
              ...StyleSheet.absoluteFillObject,
              overflow: "hidden",
              backgroundColor: "#11141D",
            }}
          />
        ),
      }}
    >
      <Tab.Screen
        name="You"
        component={YouScreen}
        options={{
          title: "You",
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 14,
          },
          headerTitle: () => null,
          headerBackground: () => (
            <BlurView
              intensity={30}
              className="h-[110px]"
              style={{
                ...StyleSheet.absoluteFillObject,
                overflow: "hidden",
                backgroundColor: "transparent",
              }}
            />
          ),
          headerRight: (props) => (
            <UserMenu
              onPress={() => navigation.navigate("UserAccountScreen")}
            />
          ),
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <View className="flex items-center justify-center bg-transparent pt-3">
              {focused ? (
                <CircleOn width={20} height={20} className="opacity-60" />
              ) : (
                <CircleOff width={20} height={20} className="opacity-60" />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Connect"
        component={ConnectScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <View className="flex items-center justify-center bg-transparent pt-3 relative">
              {isConnectionsBadgeVisible ? (
                <View className="w-[10px] h-[10px] bg-white rounded-full border-2 border-dark absolute top-[9px] -right-[3px] z-10"></View>
              ) : null}
              {focused ? (
                <ConnectOn width={25} height={20} className="opacity-60" />
              ) : (
                <ConnectOff width={25} height={20} className="opacity-60" />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerShown: false,
          title: "Chat",
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <View className="flex items-center justify-center bg-transparent pt-3 relative">
              {chatMessageCount > 0 ? (
                <View className="w-[10px] h-[10px] bg-white rounded-full border-2 border-dark absolute top-[9px] -right-[3px] z-10"></View>
              ) : null}
              {focused ? (
                <ChatOn width={20} height={20} className="opacity-60" />
              ) : (
                <ChatOff width={20} height={20} className="opacity-60" />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="UserAccount"
        component={UserAccountScreen}
        options={{
          headerShown: false,
          title: "UserAccount",
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarLabel: () => null,
          tabBarIcon: () => (
            <UserMenu
            // onPress={() => navigation.navigate("UserAccountScreen")}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const RootStackScreen: React.FC = () => {
  // Mount Navigation
  const navigation = useNavigation<NavigationProp>();
  // Mount translation
  const { t } = useTranslation();

  const blurHeader = {
    headerBackground: () => (
      <BlurView
        intensity={30}
        style={{
          ...StyleSheet.absoluteFillObject,
          overflow: "hidden",
          backgroundColor: "transparent",
        }}
      />
    ),
    headerTitle: "",
    headerTransparent: true,
    headerBackTitleVisible: false,
    headerTintColor: "#24384D",
    headerLeft: () => (
      <ArrowLeftIcon iconColor="#111830" onPress={() => navigation.goBack()} />
    ),
  };

  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "transparent", // make header transparent
        },
      }}
    >
      <RootStack.Screen
        name="Tabs"
        component={TabsScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="UserAccountScreen"
        component={UserAccountScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => <View />,
          headerRight: () => (
            <Pressable
              className="bg-light-gray w-[40px] h-[40px] rounded-full flex items-center justify-center"
              onPress={() => navigation.goBack()}
            >
              <IconX width={36} />
            </Pressable>
          ),
        }}
      />
      <RootStack.Screen
        name="MyProfileScreen"
        component={MyProfileScreen}
        options={{
          headerBackground: () => (
            <BlurView
              intensity={30}
              className="h-[110px]"
              style={{
                ...StyleSheet.absoluteFillObject,
                overflow: "hidden",
                backgroundColor: "transparent",
              }}
            />
          ),
          headerTitle: () => (
            <View className="flex items-center justify-center">
              <Text
                allowFontScaling={false}
                className="text-center text-[20px] font-jokkerl  text-dark -tracking-wide"
              >
                {t("user-settings.my-profile")}
              </Text>
            </View>
          ),
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <RootStack.Screen
        name="ProfileDoneScreen"
        component={ProfileDoneScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="EditBioScreen"
        component={EditBioScreen}
        options={{
          headerTitle: () => (
            <View className="flex items-center justify-center">
              <Text
                allowFontScaling={false}
                className="text-center text-[20px] font-jokkerl  text-dark -tracking-wide"
              >
                {t("bio-screen.title")}
              </Text>
            </View>
          ),
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <RootStack.Screen
        name="MatchingPreferencesScreen"
        component={MatchingPreferencesScreen}
        options={{
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerBackTitle: "",
          headerTintColor: "#24384D",
          headerTitle: () => (
            <View className="flex items-center justify-center">
              <Text
                allowFontScaling={false}
                className="text-center text-[20px] font-jokkerl  text-dark -tracking-wide"
              >
                {t("matching-preferences-screen.screen-header")}
              </Text>
            </View>
          ),
        }}
      />
      <RootStack.Screen
        name="AgeRangeScreen"
        component={AgeRangeScreen}
        options={({ route }) => {
          const isEditing = route.params && route?.params?.["isEditing"];
          return {
            ...blurHeader,
            headerShown: isEditing,
            headerBackground: isEditing
              ? blurHeader.headerBackground
              : undefined,
          };
        }}
      />
      <RootStack.Screen
        name="NotificationSettingsScreen"
        component={NotificationSettingsScreen}
        options={{
          headerTitle: () => (
            <View className="flex items-center justify-center">
              <Text
                allowFontScaling={false}
                className="text-center text-[20px] font-jokkerl  text-dark -tracking-wide"
              >
                {t("notifications-screen.screen-header")}
              </Text>
            </View>
          ),
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <RootStack.Screen
        name="DailyReflectionReminderScreen"
        component={DailyReflectionReminderScreen}
        options={{
          headerTitle: () => (
            <View className="flex items-center justify-center">
              <Text
                allowFontScaling={false}
                className="text-center text-[20px] font-jokkerl  text-dark -tracking-wide"
              >
                {t("daily-reflection-reminder-screen.screen-header")}
              </Text>
            </View>
          ),
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <RootStack.Screen
        name="NewConnectionsReminderScreen"
        component={NewConnectionsReminderScreen}
        options={{
          headerTitle: () => (
            <View className="flex items-center justify-center">
              <Text
                allowFontScaling={false}
                className="text-center text-[20px] font-jokkerl  text-dark -tracking-wide"
              >
                {t("new-connections-reminder-screen.screen-header")}
              </Text>
            </View>
          ),
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <RootStack.Screen
        name="NewMessagesScreen"
        component={NewMessagesScreen}
        options={{
          headerTitle: () => (
            <View className="flex items-center justify-center">
              <Text
                allowFontScaling={false}
                className="text-center text-[20px] font-jokkerl  text-dark -tracking-wide"
              >
                {t("new-connections-reminder-screen.screen-header")}
              </Text>
            </View>
          ),
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <RootStack.Screen
        name="AccountInformationScreen"
        component={AccountInformationScreen}
        options={{
          headerTitle: () => (
            <View className="flex items-center justify-center">
              <Text
                allowFontScaling={false}
                className="text-center text-[20px] font-jokkerl  text-dark -tracking-wide"
              >
                {t("account-information-screen.screen-header")}
              </Text>
            </View>
          ),
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <RootStack.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{
          headerTitle: () => (
            <View className="flex items-center justify-center">
              <Text
                allowFontScaling={false}
                className="text-center text-[20px] font-jokkerl  text-dark -tracking-wide"
              >
                {t("help-screen.screen-header")}
              </Text>
            </View>
          ),
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <RootStack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          headerTitle: () => (
            <View className="flex items-center justify-center">
              <Text
                allowFontScaling={false}
                className="text-center text-[20px] font-jokkerl text-dark -tracking-wide"
              >
                {t("about-screen.screen-header")}
              </Text>
            </View>
          ),
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <RootStack.Screen
        name="AboutYouScreen"
        component={AboutYouScreen}
        options={{
          headerBackground: () => (
            <BlurView
              intensity={30}
              className="h-[110px]"
              style={{
                ...StyleSheet.absoluteFillObject,
                overflow: "hidden",
                backgroundColor: "transparent",
              }}
            />
          ),
          headerTitle: () => (
            <View className="flex items-center justify-center">
              <Text
                allowFontScaling={false}
                className="text-center text-[20px] font-jokkerl  text-dark -tracking-wide"
              >
                {t("about-you-screen.screen-header")}
              </Text>
            </View>
          ),
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <RootStack.Screen
        name="VideoPlayerScreen"
        component={VideoPlayerScreen}
        options={{
          headerTitle: () => <View></View>,
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "transparent", // made header transparent
          },
          headerLeft: () => (
            <ArrowLeftIcon
              iconColor="white"
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
      <RootStack.Screen
        name="AudioScreen"
        component={AudioScreen}
        options={{
          headerTitle: () => <View></View>,
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "transparent", // made header transparent
          },
          headerLeft: () => (
            <ArrowLeftIcon
              iconColor="white"
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
      <RootStack.Screen
        name="ReadingScreen"
        component={ReadingScreen}
        options={{
          headerTitle: () => "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "transparent", // made bottom tabbar transparent
          },
          headerLeft: () => (
            <ArrowLeftIcon
              iconColor="black"
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
      <RootStack.Screen
        name="DisconnectScreen"
        component={DisconnectScreen}
        options={{
          headerTitle: () => "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "transparent", // made bottom tabbar transparent
          },
          headerLeft: () => <View />,
          headerRight: () => (
            <Pressable
              className="bg-light-gray w-[40px] h-[40px] rounded-full flex items-center justify-center"
              onPress={() => navigation.goBack()}
            >
              <IconX width={36} color="#000" />
            </Pressable>
          ),
        }}
      />
      <RootStack.Screen
        name="ContentCategoryScreen"
        component={ContentCategoryScreen}
        options={{
          headerTitle: () => "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "transparent", // made bottom tabbar transparent
          },
          headerLeft: () => (
            <ArrowLeftIcon
              iconColor="black"
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
      <RootStack.Screen
        name="ContentTypeScreen"
        component={ContentTypeScreen}
        options={{
          headerTitle: () => "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "transparent", // made bottom tabbar transparent
          },
          headerLeft: () => (
            <ArrowLeftIcon
              iconColor="black"
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
      <RootStack.Screen
        name="LearnScreen"
        component={LearnScreen}
        options={{
          headerTitle: () => "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "transparent", // made bottom tabbar transparent
          },
          headerLeft: () => (
            <ArrowLeftIcon
              iconColor="black"
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
      <RootStack.Screen
        name="ChannelListScreen"
        component={ChannelListScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
        }}
      />
      <RootStack.Screen
        name="SingleChannelScreen"
        component={SingleChannelScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerStyle: {
            backgroundColor: "#EEE8DC", // made bottom tabbar transparent
          },
        }}
      />
      <RootStack.Screen
        name="UnmatchStepOneScreen"
        component={UnmatchStepOneScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <RootStack.Screen
        name="UnmatchReasonScreen"
        component={UnmatchReasonScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <RootStack.Screen
        name="UnmatchDetailsScreen"
        component={UnmatchDetailsScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <RootStack.Screen
        name="UnmatchCompleteScreen"
        component={UnmatchCompleteScreen}
        options={{ headerShown: false }}
      />

      <RootStack.Screen
        name="ReportStepOneScreen"
        component={ReportStepOneScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <RootStack.Screen
        name="ReportReasonScreen"
        component={ReportReasonScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <RootStack.Screen
        name="ReportDetailsScreen"
        component={ReportDetailsScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <RootStack.Screen
        name="ReportCompleteScreen"
        component={ReportCompleteScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ReflectionStartScreen"
        component={ReflectionStartScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerStyle: {
            backgroundColor: "transparent", // made header transparent
          },
          headerLeft: () => <View></View>,
          headerRight: () => (
            <Pressable
              className="bg-light-gray w-[40px] h-[40px] rounded-full flex items-center justify-center"
              onPress={() => navigation.goBack()}
            >
              <IconX width={36} />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="ReflectionQuestionScreen"
        component={ReflectionQuestionScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerStyle: {
            backgroundColor: "transparent", // made header transparent
          },
          headerLeft: () => <View></View>,
          headerRight: () => (
            <Pressable
              className="bg-light-gray w-[40px] h-[40px] rounded-full flex items-center justify-center"
              onPress={() => navigation.goBack()}
            >
              <IconX width={36} />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="ReflectionQuoteScreen"
        component={ReflectionQuoteScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ReflectionStatsScreen"
        component={ReflectionStatsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileSetupScreen"
        component={ProfileSetupScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name="WhatIsImportantScreen"
        component={WhatIsImportantScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name="DiscoveringYouScreen"
        component={DiscoveringYouScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerBackground: () => (
            <BlurView
              intensity={30}
              className="h-[110px]"
              style={{
                ...StyleSheet.absoluteFillObject,
                overflow: "hidden",
                backgroundColor: "transparent",
              }}
            />
          ),
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
          headerRight: () => (
            <CloseIcon
              onPress={() => {
                const popAction = StackActions.pop(3);
                navigation.dispatch(popAction);
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="ValueSetupScreen"
        component={ValueSetupScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name="MentalHealthScreen"
        component={MentalHealthScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name="QualityScreen"
        component={QualityScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name="EnergyScreen"
        component={EnergyScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name="SecondProfileSetupScreen"
        component={SecondProfileSetupScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="StarSignScreen"
        component={StarSignScreen}
        options={({ route }) => {
          const isEditing = route.params && route?.params?.["isEditing"];
          return {
            ...blurHeader,
            headerShown: isEditing,
            headerBackground: isEditing
              ? blurHeader.headerBackground
              : undefined,
          };
        }}
      />
      <Stack.Screen
        name="GenderScreen"
        component={GenderScreen}
        options={({ route }) => {
          const isEditing = route.params && route?.params?.["isEditing"];
          return {
            ...blurHeader,
            headerShown: isEditing,
            headerBackground: isEditing
              ? blurHeader.headerBackground
              : undefined,
          };
        }}
      />
      <Stack.Screen
        name="SexualOrientationScreen"
        component={SexualOrientationScreen}
        options={blurHeader}
      />
      <Stack.Screen
        name="PronounsScreen"
        component={PronounsScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name="GenderPreferenceScreen"
        component={GenderPreferenceScreen}
        options={({ route }) => {
          const isEditing = route.params && route?.params?.["isEditing"];
          return {
            ...blurHeader,
            headerShown: isEditing,
            headerBackground: isEditing
              ? blurHeader.headerBackground
              : undefined,
          };
        }}
      />
      <Stack.Screen
        name="EthnicityScreen"
        component={EthnicityScreen}
        options={({ route }) => {
          const isEditing = route.params && route?.params?.["isEditing"];
          return {
            ...blurHeader,
            headerShown: isEditing,
            headerBackground: isEditing
              ? blurHeader.headerBackground
              : undefined,
          };
        }}
      />
      <Stack.Screen
        name="LanguagesScreen"
        component={LanguagesScreen}
        options={({ route }) => {
          const isEditing = route.params && route?.params?.["isEditing"];
          return {
            ...blurHeader,
            headerShown: isEditing,
            headerBackground: isEditing
              ? blurHeader.headerBackground
              : undefined,
          };
        }}
      />
      <Stack.Screen
        name="LocationScreen"
        component={LocationScreen}
        options={({ route }) => {
          const isEditing = route.params && route?.params?.["isEditing"];
          return {
            ...blurHeader,
            headerShown: isEditing,
            headerBackground: isEditing
              ? blurHeader.headerBackground
              : undefined,
          };
        }}
      />
      <Stack.Screen
        name="DistanceScreen"
        component={DistanceScreen}
        options={({ route }) => {
          const isEditing = route.params && route?.params?.["isEditing"];
          return {
            ...blurHeader,
            headerShown: isEditing,
            headerBackground: isEditing
              ? blurHeader.headerBackground
              : undefined,
          };
        }}
      />

      <Stack.Screen
        name="HeightScreen"
        component={HeightScreen}
        options={({ route }) => {
          const isEditing = route.params && route?.params?.["isEditing"];
          return {
            ...blurHeader,
            headerShown: isEditing,
            headerBackground: isEditing
              ? blurHeader.headerBackground
              : undefined,
          };
        }}
      />
      <Stack.Screen
        name="KidsScreen"
        component={KidsScreen}
        options={({ route }) => {
          const isEditing = route.params && route?.params?.["isEditing"];
          return {
            ...blurHeader,
            headerShown: isEditing,
            headerBackground: isEditing
              ? blurHeader.headerBackground
              : undefined,
          };
        }}
      />
      <Stack.Screen
        name="WantKidsScreen"
        component={WantKidsScreen}
        options={({ route }) => {
          const isEditing = route.params && route?.params?.["isEditing"];
          return {
            ...blurHeader,
            headerShown: isEditing,
            headerBackground: isEditing
              ? blurHeader.headerBackground
              : undefined,
          };
        }}
      />
      <Stack.Screen
        name="ReligionScreen"
        component={ReligionScreen}
        options={({ route }) => {
          const isEditing = route.params && route?.params?.["isEditing"];
          return {
            ...blurHeader,
            headerShown: isEditing,
            headerBackground: isEditing
              ? blurHeader.headerBackground
              : undefined,
          };
        }}
      />
      <Stack.Screen
        name="HometownScreen"
        component={HometownScreen}
        options={({ route }) => {
          const isEditing = route.params && route?.params?.["isEditing"];
          return {
            ...blurHeader,
            headerShown: isEditing,
            headerBackground: isEditing
              ? blurHeader.headerBackground
              : undefined,
          };
        }}
      />
      <Stack.Screen
        name="SchoolScreen"
        component={SchoolScreen}
        options={({ route }) => {
          const isEditing = route.params && route?.params?.["isEditing"];
          return {
            ...blurHeader,
            headerShown: isEditing,
            headerBackground: isEditing
              ? blurHeader.headerBackground
              : undefined,
          };
        }}
      />
      <Stack.Screen
        name="EducationScreen"
        component={EducationScreen}
        options={({ route }) => {
          const isEditing = route.params && route?.params?.["isEditing"];
          return {
            ...blurHeader,
            headerShown: isEditing,
            headerBackground: isEditing
              ? blurHeader.headerBackground
              : undefined,
          };
        }}
      />
      <Stack.Screen
        name="FirstHabitsSetupScreen"
        component={FirstHabitsSetupScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name="TobaccoScreen"
        component={TobaccoScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name="DrugsScreen"
        component={DrugsScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name="AlcoholScreen"
        component={AlcoholScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name="TherapyScreen"
        component={TherapyScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name="ExerciseScreen"
        component={ExerciseScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name="ProfileCompleteScreen"
        component={ProfileCompleteScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserPhotoScreen"
        component={UserPhotoScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="ConnectionProfileScreen"
        component={ConnectionProfileScreen}
        options={{
          headerShown: false,
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
      <RootStack.Screen
        name="MatchesV2Screen"
        component={MatchesV2Screen}
        options={{
          headerShown: false,
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#24384D",
          headerLeft: () => (
            <ArrowLeftIcon onPress={() => navigation.goBack()} />
          ),
        }}
      />
    </RootStack.Navigator>
  );
};

// Get current navigation route
const getActiveRouteName = (
  state: NavigationState | PartialState<NavigationState> | undefined,
): string => {
  if (!state || typeof state.index !== "number") {
    return "Unknown";
  }

  const route = state.routes[state.index];

  if (route.state) {
    return getActiveRouteName(route.state);
  }

  return route.name;
};

const AppWithProvider: React.FC = () => {
  // Set loading state when initializing the app
  const [userIsOnboarded, setUserIsOnboarded] = useState<boolean>(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] =
    useState<boolean>(false);
  const [feedbackResponse, setFeedbackResponse] = useState<string>("");
  const [feedbackImageURI, setFeedbackImageURI] = useState<string>("");
  const [isAppLoading, setIsAppLoading] = useState<boolean>(true);
  const [isFeedbackLoading, setIsFeedbackLoading] = useState<boolean>(false);
  const [routeName, setRouteName] = useState("Unknown");

  // Set navigation Ref
  const navigationRef = useNavigationContainerRef();

  // Get user state
  const user = useSelector((state: RootState) => state.auth.user);
  // Get user type
  const userType = useSelector((state: RootState) => state.auth.userType);

  // You screen loading status
  const isYouScreenLoaded = useSelector(
    (state: RootState) => state.auth.isYouScreenLoaded,
  );

  // Get feedback Modal state
  const feedbackFormState = useSelector(
    (state: RootState) => state.feedback.isFeedbackFormVisbible,
  );

  // Is User Onboarded?
  const getIsUserOnboarded = useSelector(
    (state: RootState) => state.signup.isUserOnboarded,
  );
  // Get stream status
  const streamStatus = useSelector(
    (state: RootState) => state.chat.isStreamInitialized,
  );

  // Mount redux dispatch
  const dispatch: AppDispatch = useDispatch();

  // Loading fonts
  const [fontsLoaded, fontError] = useFonts({
    "Jokker-Regular": require("@assets/fonts/Jokker-Regular.ttf"),
    "Jokker-Bold": require("@assets/fonts/Jokker-Bold.ttf"),
    "Jokker-Heavy": require("@assets/fonts/Jokker-Heavy.ttf"),
    "Jokker-Light": require("@assets/fonts/Jokker-Light.ttf"),
    "Jokker-Medium": require("@assets/fonts/Jokker-Medium.ttf"),
    "Jokker-Semibold": require("@assets/fonts/Jokker-Semibold.ttf"),
    "Jokker-Thin": require("@assets/fonts/Jokker-Thin.ttf"),
  });

  // Screen capture reference
  const screenshotCapture = useRef<any>();

  useEffect(() => {
    setIsFeedbackModalOpen(feedbackFormState);
  }, [feedbackFormState]);

  useEffect(() => {
    setTimeout(() => {
      checkUserStatus();
    }, 1000);
  }, [getIsUserOnboarded]);

  // Rect Native feedback
  const openFeedbackModal = async () => {
    try {
      const screenCapture = await screenshotCapture.current.capture();
      setFeedbackImageURI(screenCapture);
      setIsFeedbackModalOpen(true);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } catch (error) {
      setIsFeedbackModalOpen(false);
      console.log("openFeedbackModal Error", error);
    }
  };

  const closeFeedbackModal = () => {
    setIsFeedbackModalOpen(false);
    setIsFeedbackLoading(false);
    setFeedbackResponse("");
  };

  const uploadFeedbackImage = async (filename, img) => {
    try {
      const imageStorage = await uploadData({
        // path: ({ identityId }) => `public/${identityId}/${filename}`,
        path: () => `public/${filename}`,
        data: img,
        options: {
          contentType: "image/png",
        },
      }).result;
      return imageStorage.path;
    } catch (error) {
      console.log("Error uploading image", error);
      return error.response;
    }
  };

  const sendFeedback = async (currentRoute) => {
    try {
      const parsedUserData = JSON.parse(user);
      setIsFeedbackLoading(true);
      const img = await fetchImageFromUri(feedbackImageURI);
      const feedbackImageName = `/feedback/${String(dayjs().valueOf())}.png`;
      if (parsedUserData?.email) {
        await uploadFeedbackImage(feedbackImageName, img);
      }

      const { brand, deviceName, modelId, modelName, osVersion } = Device;
      const { width, height } = Dimensions.get("screen");
      const deviceInfo = `${brand} / ${deviceName} / ${modelId} / ${modelName} / ${osVersion} / ${width}x${height}`;

      if (userType === "mobileapptester") {
        // Feedback from admin users.
        const feedback: CreateFeedbackUserInput = {
          feedback: feedbackResponse,
          userName: parsedUserData?.id
            ? `${parsedUserData.firstName}${
                parsedUserData.lastName
                  ? ` ${parsedUserData.lastName.charAt(0)}`
                  : ""
              } `
            : "Not Logged in",
          userEmail: parsedUserData?.email
            ? parsedUserData.email
            : "Not Logged in",
          screen: currentRoute.name,
          imageName: parsedUserData?.email ? feedbackImageName : "",
          deviceInfo,
        };
        const addFeedbackUser = await API.graphql<
          GraphQLQuery<CreateFeedbackUserMutation>
        >({
          query: mutations.createFeedbackUser,
          variables: { input: feedback },
        });
        setFeedbackResponse("");
        setIsFeedbackModalOpen(false);
        setIsFeedbackLoading(false);
        return addFeedbackUser.data.createFeedbackUser.id;
      } else {
        // Feedback from testers.
        const feedbackTesters: CreateFeedbackTesterInput = {
          feedback: feedbackResponse,
          userName: parsedUserData?.id
            ? `${parsedUserData.firstName}${
                parsedUserData.lastName
                  ? ` ${parsedUserData.lastName.charAt(0)}`
                  : ""
              } `
            : "Not Logged in",
          userEmail: parsedUserData?.email
            ? parsedUserData.email
            : "Not Logged in",
          screen: currentRoute.name,
          imageName: parsedUserData?.email ? feedbackImageName : "",
          deviceInfo,
        };
        const addFeedbackTester = await API.graphql<
          GraphQLQuery<CreateFeedbackTesterMutation>
        >({
          query: mutations.createFeedbackTester,
          variables: { input: feedbackTesters },
        });
        setFeedbackResponse("");
        setIsFeedbackModalOpen(false);
        setIsFeedbackLoading(false);
        return addFeedbackTester.data.createFeedbackTester.id;
      }
    } catch (error) {
      setIsFeedbackLoading(false);
      setIsFeedbackModalOpen(false);
      alert(`Error adding feedback: ${error.message}`);
      console.error("Error adding feedback:", error);
    }
  };

  const hideSplashScreen = () => {
    setTimeout(() => {
      setIsAppLoading(false);
    }, 3000);
  };

  useEffect(() => {
    hideSplashScreen();
  }, []);

  const checkUserStatus = async () => {
    try {
      const parsedUserData = JSON.parse(user);
      console.log("parsedUserData", parsedUserData);
      if (parsedUserData.isUserOnboarded || parsedUserData.isSignUpComplete) {
        await getUserData(parsedUserData.id);
        setUserIsOnboarded(true);
        return;
      }
      setUserIsOnboarded(false);
    } catch (error) {
      console.log("checkUserStatus error", error);
    }
  };

  const connectStreamUser = async (currentUser) => {
    try {
      let streamToken = currentUser.streamToken;
      if (currentUser.streamToken === "0") {
        console.log("Stream token not set. Set it.");
        // Generate user Stream Token
        const userDetails: StreamTokenQueryVariables = {
          userId: currentUser.id,
        };
        const { data } = await API.graphql<GraphQLQuery<StreamTokenQuery>>({
          query: queries.streamToken,
          variables: userDetails,
        });
        streamToken = data.streamToken;
        const updatedUser = await updateUser(currentUser.id, {
          streamToken,
        });
        await dispatch(setUser(updatedUser));
      }

      let streamConfig: any = {
        id: currentUser.id,
        name: currentUser.firstName,
        privacy_settings: {
          typing_indicators: {
            enabled: false,
          },
          read_receipts: {
            enabled: false,
          },
        },
      };

      if (!streamStatus) {
        console.log("Stream is not connected, connect user!");
        if (
          currentUser.photos.items.sort(
            (a, b) => a.photo.sortOrder - b.photo.sortOrder,
          )[0]?.photo.name
        ) {
          const userImage = await getUrl({
            path: `public/${
              currentUser.photos.items.sort(
                (a, b) => a.photo.sortOrder - b.photo.sortOrder,
              )[0].photo.name
            }`,
          });
          const userImageUrl = String(userImage.url).split("?")[0];
          streamConfig.image = userImageUrl;
        }

        const streamUser = await chatClient.connectUser(
          streamConfig,
          streamToken,
        );
        // @ts-ignore
        dispatch(setMessageCount(streamUser.me.total_unread_count));
        dispatch(setIsStreamInitialized(true));
      }
    } catch (error) {
      console.log("connectStreamUser Error", error);
    }
  };

  const getCurrentDayCategoryName = async (totalReflectionDaysCount) => {
    const currentCategoryId = await getCurrentReflectionDayCategoryId(
      totalReflectionDaysCount,
      DAY_MAIN_POSITION,
    );
    const currentCategory = await getCategoryById(currentCategoryId);
    dispatch(
      setReflectionQuestionBackgroundImage(
        currentCategory.reflectionQuestionBackgroundImage,
      ),
    );
    dispatch(
      setReflectionQuestionsGradientValues(
        currentCategory.reflectionQuestionsGradientValues,
      ),
    );
    dispatch(setCurrentReflectionCategoryName(currentCategory.name));
  };

  const getUserData = async (sub: string) => {
    console.log("Get User Data");
    try {
      const currentUser = await API.graphql<GraphQLQuery<GetUserQuery>>({
        query: customQueries.getUser,
        variables: {
          id: sub,
        },
      });
      await dispatch(setUser(currentUser.data.getUser));

      // Pre fetch user reflection day question
      const totalReflectionDaysCount = await dispatch(
        fetchUserReflectionsDaysCount(),
      ).unwrap();
      getCurrentDayCategoryName(totalReflectionDaysCount);

      if (
        currentUser.data.getUser.isUserOnboarded ||
        currentUser.data.getUser.isSignUpComplete
      ) {
        console.log(
          "User exists and is onboarded. Move to main screen.",
          currentUser.data.getUser,
        );
        setUserIsOnboarded(true);
        connectStreamUser(currentUser.data.getUser);
        return;
      }
      console.log("User is not onboarded. Complete onboarding.");
    } catch (error) {
      console.log("getUserData error:", error);
    }
  };

  const initializeHub = async () => {
    try {
      console.log("Initialize Hub. Set user is onboarded as false.");

      // Set isUserOnboarded value to false.
      setUserIsOnboarded(false);

      // check user state
      const { userId, signInDetails } = await getCurrentUser();
      console.log("Check current user", userId, signInDetails);

      const {
        tokens: {
          accessToken: { payload },
        },
      } = await fetchAuthSession();
      console.log("Auth Payload", payload);
      if (
        payload.hasOwnProperty("cognito:groups") &&
        Array.isArray(payload["cognito:groups"]) &&
        payload["cognito:groups"].includes("mobileapptester")
      ) {
        console.log("Set user type to mobileapptester");
        dispatch(setUserType("mobileapptester"));
      }

      if (!signInDetails && !user) {
        console.log(
          "If no sign in details and no user, set user is onboarded as false",
          signInDetails,
          user,
        );
        await dispatch(setUser(null));
        setUserIsOnboarded(false);
      } else if (signInDetails && !user) {
        // Complete onboarding?
        console.log("Get user data after hub initialization", userId);
        getUserData(userId);
      } else {
        setUserIsOnboarded(true);
      }

      dispatch(setStoryVisibility(false));

      Hub.listen("auth", async ({ payload }) => {
        const { event } = payload;
        console.log("Hub Event: ", event);

        switch (event) {
          case "signedIn":
            const { userId } = await getCurrentUser();
            console.log("User info available. Get user information.", userId);
            dispatch(setUserId(userId));
            getUserData(userId);
            console.log("User have been signedIn successfully.");
            break;
          case "signedOut":
            await dispatch(setUser(null));
            setUserIsOnboarded(false);
            console.log("User have been signed out successfully.");
            break;
          case "tokenRefresh":
            console.log("auth tokens have been refreshed.");
            break;
          case "tokenRefresh_failure":
            console.log("failure while refreshing auth tokens.");
            break;
          case "signInWithRedirect":
            console.log(
              "signInWithRedirect API has successfully been resolved.",
            );
            break;
          case "signInWithRedirect_failure":
            console.log(
              "failure while trying to resolve signInWithRedirect API.",
            );
            break;
          case "customOAuthState":
            console.log("custom state returned from CognitoHosted UI");
            break;
        }
      });
    } catch (error) {
      console.log("initializeHub Error: ", error);
    }
  };

  useEffect(() => {
    initializeHub();
  }, []);

  useEffect(() => {
    console.log("Stream Status Updated", streamStatus);
  }, [streamStatus]);

  // Safe Area Insets
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider className="relative">
      <NavigationContainer
        ref={navigationRef}
        onStateChange={(state) => {
          const newRouteName = getActiveRouteName(state);

          if (routeName !== newRouteName) {
            segmentClient.screen(newRouteName);
            setRouteName(newRouteName);
          }
        }}
      >
        <StatusBar style="auto" />
        <Modal
          visible={isFeedbackModalOpen}
          animationType="fade"
          transparent={true}
          className="relative h-screen w-screen"
          onRequestClose={() => closeFeedbackModal()}
        >
          <View className="w-screen h-screen bg-black/70 flex items-center justify-start">
            <View className="w-[80%] bg-white rounded-xl flex items-start justify-start p-4 mt-24 relative">
              <Text
                allowFontScaling={false}
                className="text-dark text-2xl  font-jokkerl"
              >
                Send us feedback!
              </Text>
              <DynamicButton
                onPress={() => closeFeedbackModal()}
                type="icon-close"
                size="small"
                iconPosition="right"
                icon="close"
                iconSize={20}
                rounded="full"
                position="none"
                textStyles="text-base"
                customStyles="absolute top-1 right-1"
              />
              <TextInput
                className="h-36 w-full bg-black/10 text-dark p-2 rounded-lg my-4"
                multiline={true}
                onChangeText={(text) => setFeedbackResponse(text)}
                textAlignVertical={"top"}
              />
              <DynamicButton
                onPress={() => sendFeedback(navigationRef.getCurrentRoute())}
                type={"primary"}
                label="Send"
                size="medium"
                rounded="full"
                position="none"
                textStyles="text-base"
                disabled={isFeedbackLoading}
                isLoading={isFeedbackLoading}
              />
            </View>
          </View>
        </Modal>
        <ToastManager />
        {isYouScreenLoaded ? (
          <Pressable
            onPress={() => openFeedbackModal()}
            className="h-[25px] px-2 rounded-full bg-black/10 absolute right-12 z-100 flex items-center justify-center"
            style={{ top: insets.top + 5 }}
          >
            <Text className="font-jokkerl">Feedback</Text>
          </Pressable>
        ) : null}
        <ViewShot
          style={{ width: "100%", height: "100%" }}
          ref={screenshotCapture}
        >
          {isAppLoading ? (
            // Loading state
            <SplashScreen />
          ) : user && userIsOnboarded ? (
            <OverlayProvider value={chatStyles}>
              <Chat client={chatClient}>
                <RootStackScreen />
              </Chat>
            </OverlayProvider>
          ) : (
            <AuthStackScreen />
          )}
        </ViewShot>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      clearOldCache();
    }, 1000 * 60);
  });

  return (
    <AppProvider>
      {/* <AnalyticsProvider client={segmentClient}> */}
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PaperProvider>
          <Provider store={store}>
            <AnalyticsProvider client={segmentClient}>
              <QueryClientProvider>
                <AppWithProvider />
              </QueryClientProvider>
            </AnalyticsProvider>
          </Provider>
        </PaperProvider>
      </GestureHandlerRootView>
      {/* </AnalyticsProvider> */}
    </AppProvider>
  );
};

export default Sentry.wrap(App);
