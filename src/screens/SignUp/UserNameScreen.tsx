import DynamicButton from "@components/DynamicButton/DynamicButton";
import { NavigationProp } from "@react-navigation/native";
import { createUser } from "@utils/amplifyUtils";
import React, { useEffect, useRef, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { useSelector } from "react-redux";
import { setUserFirstName, setUserId } from "@store/auth/authSlice";
import { useDispatch } from "react-redux";
import Alert from "@src/components/Alert";
import ProgressBar from "@src/components/ProgressBar";
import SafeArea from "@src/components/SafeArea";
import { useTranslation } from "react-i18next";

// Define the props type for your navigation stack
type NavigationProps = {
  navigation: NavigationProp<any>;
};

// Define the state structure
interface RootState {
  signup: {
    userId: string;
    userEmailCommunication: boolean;
    userPhoneNumber: string;
    userEmail: string;
  };
  auth: {
    userId: string;
    userPhoneNumber: string;
  };
  keyboard: {
    isKeyboardVisible: boolean;
  };
}

export default function UserNameScreen({ navigation }: NavigationProps) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const lastNameInputRef = useRef<TextInput>(null);
  const firstNameInputRef = useRef<TextInput>(null);

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [isNameValid, setIsNameValid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const userPhoneNumber = useSelector(
    (state: RootState) => state.auth.userPhoneNumber
  );
  const userId = useSelector((state: RootState) => state.auth.userId);
  const userEmail = useSelector((state: RootState) => state.signup.userEmail);
  const userEmailCommunication = useSelector(
    (state: RootState) => state.signup.userEmailCommunication
  );

  useEffect(() => {
    if (firstNameInputRef.current) {
      firstNameInputRef.current.focus();
    }
  }, []);

  // Validate name to enable continue button.
  useEffect(() => {
    setIsNameValid(firstName?.trim().length > 0);
  }, [firstName, lastName]);

  const validateName = async () => {
    try {
      setIsLoading(true);
      const createUserWithId = await createUser({
        id: userId,
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: userEmail,
        emailCommunication: userEmailCommunication,
        isNewConnectionsNotificationEmailActive: userEmailCommunication,
        phone: userPhoneNumber,
        signUpStep: 1,
      });

      if (!createUserWithId) {
        throw new Error("User creation failed");
      }

      await dispatch(setUserFirstName(firstName));
      await dispatch(setUserId(createUserWithId));
      setTimeout(() => {
        navigation.navigate("UserDateOfBirthScreen");
        setIsLoading(false);
      }, 3000);
    } catch (error) {
      setIsLoading(false);
      console.log("validateName Error: ", error);
      alert("An error ocurred while processing your data. Please try again.");
    }
  };

  return (
    <SafeArea
      addVerticalInsets
      addAdditionalInsetBottom={16}
      addAdditionalInsetTop={13}
      testID="UserName"
      isPressable
    >
      <View className="flex-1">
        <ProgressBar initialProgress={40} withDelay={500} progress={60} />
        <Text
          allowFontScaling={false}
          className="text-[30px] sm-1:text-[36px] text-primary-blue-100 text-left mt-10 font-jokkerl"
        >
          {t("user-name.whats-your-name")}
        </Text>
        <Text
          allowFontScaling={false}
          className="text-base text-dark text-left mt-2 mb-[70px] font-jokkerr -tracking-wide"
        >
          {t("user-name.subtitle")}
        </Text>
        <View className="flex flex-col mb-12 gap-1">
          <View className="w-full flex flex-row items-center justify-center pb-3 rounded-none border-b border-primary-blue-100">
            <TextInput
              ref={firstNameInputRef}
              className="w-full font-jokkerl text-base"
              onChangeText={setFirstName}
              value={firstName}
              placeholder={t("user-name.first-name")}
              onSubmitEditing={() => lastNameInputRef.current?.focus()}
              focusable
              returnKeyType="next"
              returnKeyLabel="Next"
            />
          </View>
          {!isNameValid && firstName.length > 0 && (
            <Text allowFontScaling={false} className="text-base text-red">
              {t("errors.required")}
            </Text>
          )}
        </View>

        <View className="w-full flex flex-row items-center justify-center pt-2 pb-3 rounded-none border-b mb-6 border-primary-blue-100">
          <TextInput
            ref={lastNameInputRef}
            allowFontScaling={false}
            className="w-full font-jokkerl text-base"
            onChangeText={setLastName}
            value={lastName}
            placeholder={t("user-name.last-name")}
            onSubmitEditing={validateName}
            returnKeyType="next"
            returnKeyLabel="Next"
          />
        </View>
        <Alert text={t("user-name.last-name-optional")}></Alert>
      </View>
      <View className="items-end">
        <DynamicButton
          onPress={validateName}
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
          disabled={!isNameValid}
          isLoading={isLoading}
        />
      </View>
    </SafeArea>
  );
}
