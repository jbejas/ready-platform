import { useState } from "react";
import { View, Text, Image, Pressable, Modal, Dimensions } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";

// Localization
import { useTranslation } from "react-i18next";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

export default function HowMatchesWorkThreeScreen({ navigation }: Props) {
  const { t } = useTranslation();

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const { height } = Dimensions.get("screen");

  const goToFirstReflectionScreen = () => {
    navigation.navigate("CompleteFirstReflectionScreen");
  };

  return (
    <SafeAreaComponent testID="HowMatchesWorkThree" relative>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        className="relative bg-dark"
      >
        <View className="w-screen h-[420px] px-6 flex items-start justify-start absolute bottom-0 bg-card rounded-t-3xl shadow-2xl">
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
      <View className="h-full w-full bottom-12 left-0 flex flex-col items-center justify-start">
        <Text
          allowFontScaling={false}
          className="text-[16px]  text-dark text-left mt-12 font-jokkerl w-full leading-6"
        >
          {t("healthy-communication.pretitle")}
        </Text>
        <Text
          allowFontScaling={false}
          className="text-[26px]  text-dark text-left mt-2 mb-12 font-jokkerl w-full -tracking-widest leading-9"
        >
          {t("healthy-communication.title")}
        </Text>
      </View>
      <View
        className="w-screen absolute left-0 bottom-0 flex justify-end overflow-hidden pt-12"
        style={{ height: height * 0.6 }}
      >
        <Image
          source={require("@assets/images/connection-screen.png")}
          className="w-screen"
          resizeMode="cover"
        />
      </View>
      <View className="absolute w-screen pr-8 bottom-12 left-0 flex flex-row items-center justify-between">
        <Pressable onPress={() => setIsModalVisible(true)}>
          <Text
            allowFontScaling={false}
            className="font-jokkerl underline text-[16px] ml-6 text-light"
          >
            Learn more
          </Text>
        </Pressable>
        <DynamicButton
          onPress={() => goToFirstReflectionScreen()}
          type={"icon"}
          size="large"
          iconPosition="right"
          icon={"chevron-right"}
          iconSize={30}
          showBgImage
          bgImage="drawn-light"
          iconColor="white"
          rounded="full"
          position="none"
          textStyles="text-base"
        />
      </View>
    </SafeAreaComponent>
  );
}
