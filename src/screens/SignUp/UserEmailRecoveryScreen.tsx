import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { View, Text, TextInput, Modal, Pressable } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";
import Close from "@assets/images/xmark-solid.svg";

// Redux
import {
  setUserEmail,
  setUserEmailCommunication,
} from "@store/signUp/signUpSlice";
// Set Redux Dispatch
import { useDispatch } from "react-redux";

// Localization
import { useTranslation } from "react-i18next";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

// Define the state structure
interface RootState {
  signup: {
    userId: string;
  };
  keyboard: {
    isKeyboardVisible: boolean;
  };
}

export default function UserEmailRecoveryScreen({ navigation }: Props) {
  // Mount Redux dispatch
  const dispatch = useDispatch();

  // Get keyboard state
  const isKeyboardVisible = useSelector(
    (state: RootState) => state.keyboard.isKeyboardVisible,
  );

  // Mount Localization
  const { t } = useTranslation();
  const emailInputRef = useRef<TextInput>(null);

  const [email, setEmail] = useState<string>(""); // Initialize email string
  const [emailCommunication, setEmailCommunication] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Validate email to enable continue button.
  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && emailRegex.test(email)) {
      setIsEmailValid(true);
      return;
    }
    setIsEmailValid(false);
  }, [email]);

  const toggleInfoModal = () => {
    setModalVisible(!modalVisible);
  };

  const validateEmail = async () => {
    try {
      setIsLoading(true);
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return;
      }
      // Set email in Redux
      await dispatch(setUserEmail(email));
      await dispatch(setUserEmailCommunication(emailCommunication));
      navigation.navigate("UserNameScreen");
    } catch (error) {
      console.log("Email error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaComponent testID="UserEmail" isPressable relative>
      {/* <Steps step={2} /> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        className="relative"
        onRequestClose={toggleInfoModal}
      >
        <View className="w-full h-64 p-5 flex items-center justify-start absolute bottom-0 pb-24 rounded-t-xl bg-card">
          <Text
            allowFontScaling={false}
            className="text-dark-gray w-full text-left text-lg font-jokkerl"
          >
            {t("email-verification.modal-title")}
          </Text>
          <Text
            allowFontScaling={false}
            className="text-dark-gray w-full text-left text-sm mt-4"
          >
            {t("email-verification.modal-content")}
          </Text>
          <Pressable
            onPress={toggleInfoModal}
            className="absolute top-4 right-4"
          >
            <Close width={15} height={15} strokeWidth={1} />
          </Pressable>
        </View>
      </Modal>
      <Text
        allowFontScaling={false}
        className="text-[36px] text-dark text-left my-16 font-jokkerl "
      >
        {t("email-verification.whats-your-email")}
      </Text>
      <View className="w-full flex flex-row items-center justify-center pt-3 pb-1 border-b mb-4 border-dark">
        <TextInput
          ref={emailInputRef}
          onChangeText={setEmail}
          className="w-full text-[16px] h-8 font-extralight font-jokkerl"
          value={email}
          placeholder={t("email-verification.email")}
          autoCapitalize="none"
          keyboardType="email-address"
          autoCorrect={false}
        />
      </View>
      <View className="w-full flex flex-row items-center justify-between">
        <Text
          allowFontScaling={false}
          className="text-[15px] w-full text-dark text-left mb-20 font-jokkerl  tracking-tighter leading-5"
        >
          {t("email-verification.email-verify")}
        </Text>
      </View>
      <View
        className={`${
          isKeyboardVisible ? "absolute -bottom-96" : "absolute bottom-12"
        } w-screen px-6 left-0 flex flex-col items-center justify-center`}
      >
        <View className="flex flex-row items-start justify-center mb-4 px-4">
          <Checkbox
            className="mr-2"
            value={emailCommunication}
            color={emailCommunication ? "#140E0E" : undefined}
            onValueChange={(newValue) => setEmailCommunication(newValue)}
          />
          <Pressable onPress={() => setEmailCommunication(!emailCommunication)}>
            <Text allowFontScaling={false} className="text-md font-jokkerl ">
              {t("email-verification.subscribe-mailing-list")}
            </Text>
          </Pressable>
        </View>
        <DynamicButton
          onPress={() => validateEmail()}
          type={"primary"}
          label={t("general.continue")}
          size="large"
          rounded={"2xl"}
          position="none"
          textStyles="text-base"
          loaderColor="#FFF"
          disabled={!isEmailValid}
          isLoading={isLoading}
        />
      </View>
    </SafeAreaComponent>
  );
}
