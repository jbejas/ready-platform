import DynamicButton from "@components/DynamicButton/DynamicButton";
import { NavigationProp } from "@react-navigation/native";
import { useAnalytics } from "@segment/analytics-react-native";
import ProgressBar from "@src/components/ProgressBar";
import SafeArea from "@src/components/SafeArea";
import { setUser } from "@store/auth/authSlice";
import { updateUser } from "@utils/amplifyUtils";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useDispatch, useSelector } from "react-redux";

dayjs.extend(customParseFormat);

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

// Define the state structure
interface RootState {
  auth: {
    userId: string;
  };
}

export default function UserDateOfBirthScreen({ navigation }: Props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { identify, track } = useAnalytics();
  const userId = useSelector((state: RootState) => state.auth.userId);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [birthdate, setBirthdate] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showAgeError, setShowAgeError] = useState<boolean>(false);

  const showDatePicker = () => {
    setShowAgeError(false);
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = async (date) => {
    try {
      const userAge = dayjs().diff(date, "year");
      if (userAge >= 18) {
        const ISODate = dayjs(date).toISOString();
        setBirthdate(ISODate);
      } else {
        setShowAgeError(true);
        setBirthdate(null);
      }
    } catch (error) {
      console.log("Birthdate selection error: ", error);
    } finally {
      setDatePickerVisibility(false);
    }
  };

  const validateUserBirthdate = async () => {
    try {
      setShowAgeError(false);
      setIsLoading(true);
      const updatedUser = await updateUser(userId, {
        birthdate,
        signUpStep: 2,
      });
      await dispatch(setUser(updatedUser));
      identify(updatedUser.id, {
        email: updatedUser.email,
        firstName: updatedUser.firstName,
        birthdate: updatedUser.birthdate,
      });
      track("User signed up");
      navigation.navigate("AboutReadyScreen");
    } catch (error) {
      console.log("Error navigating to User Gender Screen: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeArea
      addVerticalInsets
      addAdditionalInsetBottom={16}
      addAdditionalInsetTop={13}
      testID="UserDateOfBirth"
    >
      <View className="flex-1">
        <ProgressBar initialProgress={60} withDelay={500} progress={80} />
        <Text
          allowFontScaling={false}
          className="text-[30px] sm-1:text-[36px] text-primary-blue-100 text-left mt-10 font-jokkerl -tracking-widest"
        >
          {t("dob.title")}
        </Text>
        <Pressable onPress={showDatePicker}>
          <View className="mt-[102px] mb-4 border-b border-solid border-primary-blue-100 h-8">
            <Text
              allowFontScaling={false}
              className="text-[16px]  text-primary-blue-100 font-jokkerl"
            >
              {birthdate
                ? dayjs(birthdate).format("MMMM / DD / YYYY")
                : "MM / DD / YYYY"}
            </Text>
          </View>
        </Pressable>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}
        />
        <Text
          allowFontScaling={false}
          className="text-base text-primary-blue-100 text-left mb-20 font-jokkerr"
        >
          {t("dob.description")}
        </Text>
        {showAgeError && (
          <View className="w-full flex flex-row items-center justify-evenly mt-12 mb-12">
            <Text
              allowFontScaling={false}
              className="text-base text-red font-jokkerl"
            >
              You must be 18 years or older to use Ready
            </Text>
          </View>
        )}
      </View>
      <View className="items-end">
        <DynamicButton
          onPress={validateUserBirthdate}
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
          disabled={!birthdate}
          isLoading={isLoading}
        />
      </View>
    </SafeArea>
  );
}
