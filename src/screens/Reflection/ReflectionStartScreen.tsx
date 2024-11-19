import { useEffect, useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";

// Redux
import { useSelector } from "react-redux";

// Images
import BigButtonWhite from "@assets/images/big-button-white.svg";

// Amplify Graph Queries
import { getUrl } from "aws-amplify/storage";

// Localization
import { useTranslation } from "react-i18next";
import ImageCache from "@src/components/ImageCache";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

// Define the state structure
interface RootState {
  reflections: {
    reflectionQuestionsGradientValues: string;
    reflectionQuestionBackgroundImage: string;
  };
}

export default function ReflectionStartScreen({ navigation }: Props) {
  // Mount translation
  const { t } = useTranslation();

  // Constants
  const [reflectionQuestionBgImage, setReflectionQuestionBgImage] =
    useState<string>("");

  // Get reflection question values
  const reflectionQuestionsGradientValues = useSelector(
    (state: RootState) => state.reflections.reflectionQuestionsGradientValues
  ).split(",");

  const reflectionQuestionBackgroundImage = useSelector(
    (state: RootState) => state.reflections.reflectionQuestionBackgroundImage
  ).split("?")[0];

  const goToNameScreen = () => {
    navigation.navigate("ReflectionQuestionScreen", {
      isEditing: false,
      comesFromCategory: false,
      isOnboarding: true,
    });
  };

  const getReflectionQuestionBackgroundImage = async () => {
    const imageURI = await getUrl({
      path: `public/${reflectionQuestionBackgroundImage}`,
    });
    setReflectionQuestionBgImage(String(imageURI.url));
  };

  useEffect(() => {
    getReflectionQuestionBackgroundImage();
  }, []);

  return (
    <SafeAreaComponent
      testID="AboutReady"
      relative
      gradientColorStart={reflectionQuestionsGradientValues[0]}
      gradientColorEnd={reflectionQuestionsGradientValues[1]}
      gradientDirection="ttb"
    >
      <View className="absolute top-0 w-screen h-screen z-0">
        {reflectionQuestionBgImage.length > 0 ? (
          <ImageCache
            uri={reflectionQuestionBgImage}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
        ) : null}
      </View>
      <View className="h-full w-full bottom-12 left-0 flex flex-col items-center justify-start">
        <Text
          allowFontScaling={false}
          className="text-[42px] sm-1:text-[52px] text-light text-left mb-20 mt-12 font-jokkerl w-full -tracking-widest"
        >
          {t("reflection-question-start.title")}
        </Text>
      </View>
      <View className="absolute bottom-0 sm-1:bottom-20 w-screen px-4 left-0 flex flex-col items-center justify-between">
        <View className="flex flex-row items-start justify-center mb-4">
          <Pressable onPress={() => goToNameScreen()}>
            <BigButtonWhite width={320} height={320} />
          </Pressable>
        </View>
      </View>
    </SafeAreaComponent>
  );
}
