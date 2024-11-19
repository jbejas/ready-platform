import { useState } from "react";
import { View, Text, Image, Modal, Pressable, Dimensions } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";

// Localization
import { useTranslation } from "react-i18next";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

export default function UserPhoneNumberScreen({ navigation }: Props) {
  const { t } = useTranslation();

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const { height, width } = Dimensions.get("screen");

  const goToHowReflectionsWorkScreen = () => {
    navigation.navigate("HowMatchesWorkTwoScreen");
  };

  return (
    <SafeAreaComponent testID="Welcome" relative>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        className="relative bg-dark"
      >
        <View className="w-screen h-[430px] px-6 flex items-start justify-start absolute bottom-0 bg-modal rounded-t-3xl shadow-2xl">
          <Text
            allowFontScaling={false}
            className="text-dark w-full text-left text-[20px] mt-6 font-jokkerl"
          >
            Reflections help you pause, so you can make decisions — and connect
            with other people — in a way that aligns with your values. They also
            help us get to know you better, so we can show you better potential
            connections. 
          </Text>
          <Text
            allowFontScaling={false}
            className="text-dark w-full text-left text-[20px] mt-6 font-jokkerl"
          >
            After you reflect, we'll share a piece of Ready wisdom to help grow
            your emotional intelligence and expand your self-awareness.
          </Text>
          <DynamicButton
            onPress={() => setIsModalVisible(false)}
            type="full-transparent"
            label={t("general.all-set")}
            size="large"
            rounded={"2xl"}
            position="none"
            textStyles="text-base"
            loaderColor="#FFF"
            customStyles="mt-8 !w-full mx-0"
            textColor="dark"
          />
        </View>
      </Modal>
      <View
        className="w-screen flex flex-col items-center justify-center absolute top-0 left-0 px-8"
        style={{ height: height * 0.5 }}
      >
        <Text
          allowFontScaling={false}
          className="text-[18px] mt-20 text-dark text-left font-jokkerl w-full -tracking-widest leading-10"
        >
          {t("what-are-daily-reflections.title")}
        </Text>
        <Text
          allowFontScaling={false}
          className="text-[32px] text-dark text-left  mb-12 font-jokkerl w-full -tracking-widest leading-10"
        >
          {t("what-are-daily-reflections.subtitle")}
        </Text>
      </View>
      <View
        className="w-screen absolute left-0 bottom-0 px-8 flex justify-start overflow-hidden"
        style={{ height: height * 0.54 }}
      >
        <Image
          source={require("@assets/images/WhatAreDailyReflectionsScreenCard.png")}
          style={{ width: width }}
          className="absolute -bottom-1 left-0 h-full"
          resizeMode="contain"
        />
        <Text
          allowFontScaling={false}
          className="text-[18px] font-jokkerl mb-4 text-white mt-24"
        >
          {t("what-are-daily-reflections.card-pretitle")}
        </Text>
        <Text
          allowFontScaling={false}
          className="text-[36px] font-jokkerl text-white"
        >
          {t("what-are-daily-reflections.card-title")}
        </Text>
      </View>
      <View className="absolute w-screen pr-8 bottom-20 left-0 flex flex-row items-center justify-between">
        <Pressable onPress={() => setIsModalVisible(true)}>
          <Text
            allowFontScaling={false}
            className="font-jokkerl underline text-[16px] ml-6 text-light"
          >
            Learn more
          </Text>
        </Pressable>
        <DynamicButton
          onPress={() => goToHowReflectionsWorkScreen()}
          type={"icon"}
          size="large"
          iconPosition="right"
          icon={"chevron-right"}
          iconColor="white"
          iconSize={30}
          showBgImage
          bgImage="drawn-light"
          rounded="full"
          position="none"
          textStyles="text-base"
          loaderColor="#FFF"
        />
      </View>
    </SafeAreaComponent>
  );
}
