import React, { useState, useRef, useEffect } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { signOut } from "aws-amplify/auth";
import { CountryPicker } from "react-native-country-codes-picker";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";
import { IconChevronDown } from "@tabler/icons-react-native";
import { setUserPhoneNumber, setUserCountryCode } from "@store/auth/authSlice";
import { setIsUserOnboarded } from "@store/signUp/signUpSlice";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Mask Input
import MaskInput from "react-native-mask-input";

// Localization
import { useTranslation } from "react-i18next";

// User Utils
import { userSignIn } from "@utils/user";
import { AppDispatch } from "@src/store/store";
import { getPhoneNumberMaskFF } from "@src/store/config/configSlice";
import { fetchGeneralAppConfig } from "@store/config/configSlice";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

export default function UserPhoneNumberScreen({ navigation }: Props) {
  // Mount Translations
  const { t } = useTranslation();
  // Set Redux dispatch
  const dispatch: AppDispatch = useDispatch();

  const phoneInputRef = useRef<TextInput>(null);

  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | boolean>(false);
  const [showPhoneCountryPicker, setShowPhoneCountryPicker] =
    useState<boolean>(false);
  const [countryCode, setCountryCode] = useState<string>("+1");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // MUSTDO - Get phone number mask from app FF when we have it implemented in the BE
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

  const togglePhoneCountryPicker = () => {
    setShowPhoneCountryPicker(!showPhoneCountryPicker);
  };

  const handleSignIn = async () => {
    try {
      setErrorMessage(false);
      setIsLoading(true);
      await dispatch(setUserPhoneNumber(phoneNumber));
      await dispatch(setUserCountryCode(countryCode));
      await userSignIn(phoneNumber, countryCode);
      navigation.navigate("PhoneVerificationCodeScreen");
      setIsLoading(false);
    } catch (error) {
      console.log("Error handleSignIn", error);
      presentErrorMessage(`${error.message}`);
      setIsLoading(false);
    }
  };

  const presentErrorMessage = (errorMessage) => {
    setErrorMessage(errorMessage);
  };

  const cleanUser = async () => {
    await dispatch(setIsUserOnboarded(false));
    await signOut();
  };

  const createAccount = async () => {
    await cleanUser();
    navigation.navigate("ValuePropScreen");
  };

  return (
    <SafeAreaComponent testID="SignInPhoneNumber" isPressable relative>
      <Text
        allowFontScaling={false}
        className="text-[36px]  text-dark text-left my-14 font-jokkerl"
      >
        {t("phone-verification.title")}
      </Text>
      <View className="w-full h-12 flex flex-row items-center justify-between">
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
          className="border-b border-solid border-black w-[70px] mr-0.5 h-10 flex flex-row items-center justify-evenly"
        >
          <Text
            allowFontScaling={false}
            className="text-[16px] font-jokkerl text-dark"
          >
            {countryCode}
          </Text>
          <IconChevronDown size={22} color="black" />
        </Pressable>
        <View className="border-b border-solid border-black h-10 ml-1 w-9/12 text-2xl flex items-start justify-center">
          <MaskInput
            className="text-[16px] w-full font-jokkerl"
            value={phoneNumber}
            keyboardType="numeric"
            onChangeText={(masked, unmasked) => {
              setPhoneNumber(unmasked); // you can use the unmasked value as well
            }}
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
        className="w-full my-[28px] text-dark/40 text-left text-[13px] font-jokkerl"
      >
        {t("phone-verification.otp-code-description")}
      </Text>
      {errorMessage && (
        <View className="w-full flex items-center justify-center mt-4">
          <Text allowFontScaling={false} className="text-base text-red">
            {errorMessage}
          </Text>
        </View>
      )}
      <View className="absolute w-screen px-6 bottom-12 left-0 flex flex-col items-end justify-center">
        {errorMessage ? (
          <DynamicButton
            onPress={() => createAccount()}
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
          />
        ) : (
          <DynamicButton
            onPress={() => handleSignIn()}
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
            disabled={!isPhoneNumberValid || isLoading}
            isLoading={isLoading}
          />
        )}
      </View>
    </SafeAreaComponent>
  );
}
