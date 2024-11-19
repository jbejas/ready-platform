import { useEffect, useState } from "react";
import { View, Text, Modal, Pressable } from "react-native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import { NavigationProp } from "@react-navigation/native";
import ContentScroller from "@components/ContentScroller";
import { LinearGradient } from "expo-linear-gradient";
import DynamicButton from "@components/DynamicButton/DynamicButton";

// Redux
import { useSelector } from "react-redux";

// Localization
import { useTranslation } from "react-i18next";

// Utils
import { getContentCount } from "@utils/content";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

// Define the state structure
interface RootState {
  reflections: {
    totalReflectionDaysCount: number;
  };
}

export default function LearnScreen({ navigation }: Props) {
  // Mount Localization
  const { t } = useTranslation();

  const [totalContentCount, setTotalContentCount] = useState<number | null>(
    null,
  );
  const [totalReadCount, setTotalReadCount] = useState<number | null>(null);
  const [totalListenCount, setTotalListenCount] = useState<number | null>(null);
  const [showLearnMoreModal, setShowLearnMoreModal] = useState<boolean>(false);

  // Get user total reflections days count
  const totalReflectionDaysCount = useSelector(
    (state: RootState) => state.reflections.totalReflectionDaysCount,
  );

  useEffect(() => {
    const getTotalContentCount = async () => {
      const [totalContent, totalReadContent, totalListenContent] =
        await Promise.all([
          getContentCount("All", totalReflectionDaysCount),
          getContentCount("Reading", totalReflectionDaysCount),
          getContentCount("Audio", totalReflectionDaysCount),
        ]);

      console.log("totalContent", totalContent);
      console.log("totalReadContent", totalReadContent);
      console.log("totalListenContent", totalListenContent);
      setTotalContentCount(totalContent);
      setTotalReadCount(totalReadContent);
      setTotalListenCount(totalListenContent);
    };
    getTotalContentCount();
  }, []);

  return (
    <View className="w-screen h-screen relative">
      <Modal
        animationType="slide"
        transparent={true}
        visible={showLearnMoreModal}
        className="relative"
      >
        <View className="w-screen h-[270px] px-6 pt-6 pb-20 flex items-start justify-start absolute bottom-0 bg-modal rounded-t-3xl shadow-2xl">
          <Text
            allowFontScaling={false}
            className="text-dark w-full text-left text-[20px] mt-4 font-jokkerl"
          >
            Here you’ll find our content library of readings and audio clips
            from Yung Pueblo categorized by different areas of Ready wisdom.
          </Text>
          <DynamicButton
            onPress={() => setShowLearnMoreModal(false)}
            type={"full-transparent"}
            label={t("general.all-set")}
            size="large"
            rounded={"2xl"}
            position="none"
            textStyles="text-base"
            textColor="dark"
            customStyles="mt-8 !text-dark w-full mx-0 absolute bottom-8 left-6"
          />
        </View>
      </Modal>
      <View className="absolute top-0 w-screen h-screen z-0">
        <LinearGradient
          colors={["#FAEBE7", "#F4E6E5"]}
          className="w-full h-full absolute left-0 bottom-0 rounded-b-3xl"
        />
      </View>
      <SafeAreaComponent testID="Learn" scrollable relative>
        <View className="w-full pb-[120px]">
          <View className="flex flex-row items-center justify-between">
            <Text
              allowFontScaling={false}
              className="text-dark text-[32px] font-jokkerl my-6"
            >
              Explore{" "}
              {totalContentCount ? (
                <Text className="font-jokkerl text-[16px]">
                  ({totalContentCount})
                </Text>
              ) : null}
            </Text>
            <Pressable onPress={() => setShowLearnMoreModal(true)}>
              <Text
                allowFontScaling={false}
                className="text-dark text-[16px] font-jokkerl my-6 underline"
              >
                Learn more
              </Text>
            </Pressable>
          </View>
          <View className="mt-6">
            <ContentScroller
              contentCount={5}
              contentCategoryName="Reading"
              showViewAll
              viewAllText="See all"
              title="Read"
              contentItemsCount={totalReadCount}
              navigation={navigation}
              totalReflectionDaysCount={totalReflectionDaysCount}
            />
          </View>
          <View className="mt-6">
            <ContentScroller
              contentCount={5}
              contentCategoryName="Audio"
              showViewAll
              viewAllText="See all"
              title="Listen"
              contentItemsCount={totalListenCount}
              navigation={navigation}
              totalReflectionDaysCount={totalReflectionDaysCount}
            />
          </View>
        </View>
      </SafeAreaComponent>
    </View>
  );
}
