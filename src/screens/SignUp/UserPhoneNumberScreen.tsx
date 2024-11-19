import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  View,
  Text,
  TextInput,
  Modal,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { signUp, signIn } from "aws-amplify/auth";
import { CountryPicker } from "react-native-country-codes-picker";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";
import { IconChevronDown } from "@tabler/icons-react-native";

import { getPhoneNumberMaskFF } from "@src/store/config/configSlice";
import { fetchGeneralAppConfig } from "@store/config/configSlice";

import {
  setUser,
  setUserPhoneNumber,
  setUserCountryCode,
} from "@store/auth/authSlice";

// Mask Input
import MaskInput from "react-native-mask-input";

// Set Redux Dispatch
import { useDispatch } from "react-redux";
import { setUserTempPassword } from "@store/signUp/signUpSlice";

// Import Password Generator
import generatePassword from "@utils/passwordGenerator";

// Localization
import { useTranslation } from "react-i18next";
import { AppDispatch } from "@src/store/store";
import SafeArea from "@src/components/SafeArea";
import ProgressBar from "@src/components/ProgressBar";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

// Define the state structure
interface RootState {
  signup: {
    userEmail: string;
  };
  keyboard: {
    isKeyboardVisible: boolean;
  };
}

export default function UserPhoneNumberScreen({ navigation }: Props) {
  // Set Redux dispatch
  const dispatch: AppDispatch = useDispatch();
  const { t } = useTranslation();
  const phoneInputRef = useRef<TextInput>(null);

  // Get user ID
  const userEmail = useSelector((state: RootState) => state.signup.userEmail);
  // Get keyboard state
  const isKeyboardVisible = useSelector(
    (state: RootState) => state.keyboard.isKeyboardVisible
  );

  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [showPhoneCountryPicker, setShowPhoneCountryPicker] =
    useState<boolean>(false);
  const [countryCode, setCountryCode] = useState<string>("+1");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const phoneNumberMaskFF = false;
  // const phoneNumberMaskFF = useSelector(getPhoneNumberMaskFF);

  useEffect(() => {
    // dispatch(fetchGeneralAppConfig());

    if (phoneInputRef.current) {
      phoneInputRef.current.focus();
    }
  }, []);

  // Validate phone number length to enable continue button.
  useEffect(() => {
    if (!phoneNumberMaskFF) {
      setIsPhoneNumberValid(true);
    } else {
      setIsPhoneNumberValid(phoneNumber.length === 10);
    }
  }, [phoneNumber, phoneNumberMaskFF]);

  const toggleInfoModal = () => {
    setModalVisible(!modalVisible);
  };

  const togglePhoneCountryPicker = () => {
    setShowPhoneCountryPicker(!showPhoneCountryPicker);
  };

  const formatPhoneNumberE164 = () => {
    // Remove any non-digit characters from the phone number and country code
    const cleanPhoneNumber = phoneNumber.replace(/\D/g, "");
    const cleanCountryCode = countryCode.replace(/\D/g, "");

    // Combine country code and phone number in E.164 format
    return `+${cleanCountryCode}${cleanPhoneNumber}`;
  };

  const validatePhoneNumber = async () => {
    const ramdomPassword = generatePassword();
    dispatch(setUserTempPassword(ramdomPassword));

    try {
      setIsLoading(true);
      const formattedPhoneNumber = formatPhoneNumberE164();
      await dispatch(setUserPhoneNumber(formattedPhoneNumber));
      await dispatch(setUserCountryCode(countryCode));
      const { userId, nextStep } = await signUp({
        username: formattedPhoneNumber,
        password: ramdomPassword,
        options: {
          userAttributes: {
            phone_number: formattedPhoneNumber, // E.164 number convention
            email: userEmail,
            // Add custom attribute for user group
            "custom:userType": "readyappusers",
          },
          autoSignIn: {
            // optional - enables auto sign in after user is confirmed
            // enabled: false,
            authFlowType: "USER_PASSWORD_AUTH",
          },
        },
      });

      // Store user data in redux store
      dispatch(setUser(JSON.stringify(userId)));
      if (nextStep.signUpStep === "CONFIRM_SIGN_UP") {
        navigation.navigate("UserPhoneVerificationCodeScreen");
      }
    } catch (error) {
      console.log("error signing up:", error);
      console.log(
        "error signing up:",
        JSON.stringify(error),
        error.name === "UsernameExistsException"
      );
      if (error.name === "UsernameExistsException") {
        signInWithPhoneNumber();
      }
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithPhoneNumber = async () => {
    try {
      setIsLoading(true);
      const formattedPhoneNumber = formatPhoneNumberE164();
      const user = await signIn({
        username: formattedPhoneNumber,
        options: {
          authFlowType: "CUSTOM_WITHOUT_SRP",
        },
      });
      await dispatch(setUserPhoneNumber(formattedPhoneNumber));
      await dispatch(setUser(user));
      navigation.navigate("PhoneVerificationCodeScreen");
      setIsLoading(false);
    } catch (error) {
      console.log("error signing in:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <SafeArea
        testID="UserPhoneNumberScreen"
        isPressable
        addVerticalInsets
        addAdditionalInsetBottom={16}
        addAdditionalInsetTop={13}
      >
        <View className="flex-1">
          <ProgressBar initialProgress={5} withDelay={500} progress={20} />
          <Text
            allowFontScaling={false}
            className="text-[30px] sm-1:text-[36px] text-primary-blue-100 text-left mt-10 mb-[58px] font-jokkerl "
          >
            {t("phone-verification.title")}
          </Text>
          <View className="w-full h-10 flex flex-row items-center justify-between">
            <CountryPicker
              show={showPhoneCountryPicker}
              style={{
                modal: {
                  height: 500,
                },
              }}
              lang="en"
              // when picker button press you will get the country object with dial code
              pickerButtonOnPress={(item) => {
                setCountryCode(item.dial_code);
                setShowPhoneCountryPicker(false);
              }}
              onBackdropPress={togglePhoneCountryPicker}
            />
            <Pressable
              onPress={togglePhoneCountryPicker}
              className="border-b border-solid border-primary-blue-100 w-[70px] mr-0.5 h-10 flex flex-row items-center justify-evenly"
            >
              <Text
                allowFontScaling={false}
                className="text-[16px] font-jokkerljokkerr text-primary-blue-100"
              >
                {countryCode}
              </Text>
              <IconChevronDown size={22} color="black" />
            </Pressable>
            <View className="border-b border-solid border-primary-blue-100 h-10 ml-1 w-9/12 text-2xl flex items-start justify-center">
              <MaskInput
                className="text-[16px] w-full font-jokkerl"
                keyboardType="numeric"
                value={phoneNumber}
                onChangeText={(masked, unmasked) => {
                  setPhoneNumber(unmasked); // you can use the unmasked value as well
                }}
                returnKeyType="next"
                returnKeyLabel="Next"
                onSubmitEditing={validatePhoneNumber}
                mask={
                  !phoneNumberMaskFF
                    ? undefined
                    : [
                        "(",
                        /\d/,
                        /\d/,
                        /\d/,
                        ")",
                        " ",
                        /\d/,
                        /\d/,
                        /\d/,
                        "-",
                        /\d/,
                        /\d/,
                        /\d/,
                        /\d/,
                      ]
                }
              />
            </View>
          </View>
          <Text
            allowFontScaling={false}
            className="w-full mt-4 text-primary-blue-100 text-left text-base font-jokkerl"
          >
            {t("phone-verification.verification-code-description")} {` `}
            <TouchableWithoutFeedback onPress={toggleInfoModal}>
              <Text
                allowFontScaling={false}
                className="pt-2 text-primary-blue-100 text-left text-base font-jokkerl underline"
              >
                {t("phone-verification.why-do-you-need-my-phone-number")}
              </Text>
            </TouchableWithoutFeedback>
          </Text>
        </View>
        <View className="items-end">
          <DynamicButton
            onPress={() => validatePhoneNumber()}
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
            loaderColor="#000"
            disabled={!isPhoneNumberValid}
            isLoading={isLoading}
          />
        </View>
      </SafeArea>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        className="relative"
        onRequestClose={toggleInfoModal}
      >
        <View className="w-full h-64 p-5 flex items-center justify-start absolute bottom-0 pb-24 rounded-t-3xl bg-card">
          <Text
            allowFontScaling={false}
            className="text-dark-gray w-full text-left text-[16px] mt-4 font-jokkerm leading-5"
          >
            {t(
              "phone-verification.why-do-you-need-my-phone-number-description"
            )}
          </Text>
          <View className="w-screen absolute left-0 bottom-8">
            <DynamicButton
              onPress={toggleInfoModal}
              type={"full-transparent"}
              label={t("general.ok")}
              size="large"
              rounded={"2xl"}
              position="none"
              textStyles="text-base"
              textColor="text-dark"
              disabled={!isPhoneNumberValid}
              loaderColor="#FFF"
            />
          </View>
        </View>
      </Modal>
    </>
  );
}
