import DynamicButton from "@components/DynamicButton/DynamicButton";
import {
  NavigationProp,
  RouteProp,
  StackActions,
} from "@react-navigation/native";
import Alert from "@src/components/Alert";
import CloseIcon from "@src/components/CloseIcon/CloseIcon";
import FooterAbsoluteGradient from "@src/components/FooterAbsoluteGradient";
import ProgressBar from "@src/components/ProgressBar";
import SafeArea from "@src/components/SafeArea";
import Toggle from "@src/components/Toggle";
import useCurrentUser from "@src/hooks/useCurrentUser";
import GenderList from "@src/screens/ProfileSetup/40GenderScreen/GenderList";
import useProgressAboutYouScreens from "@src/screens/ProfileSetup/hooks/useProgressAboutYouScreens";
import { setUser } from "@store/auth/authSlice";
import { updateUser } from "@utils/amplifyUtils";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, Text, TouchableWithoutFeedback, View } from "react-native";
import { useDispatch } from "react-redux";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
};

export default function GenderScreen({ route, navigation }: Props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isEditing, sexualOrientation: sexualOrientationProps } = route.params;

  useEffect(() => {
    if (sexualOrientationProps) setSexualOrientation(sexualOrientationProps);
  }, [sexualOrientationProps]);

  const user = useCurrentUser();
  const { progress, beforeProgress, nextStep } = useProgressAboutYouScreens();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<string | null>(null);
  const [isSexualOrientationVisible, setIsSexualOrientationVisible] =
    useState<boolean>(false);
  const [sexualOrientation, setSexualOrientation] = useState<string | number>(
    null
  );

  const handleGender = async () => {
    try {
      setIsLoading(true);

      const updatedUser = await updateUser(user.id, {
        gender: response,
        sexualOrientation: sexualOrientation,
        isSexualOrientationVisible: isSexualOrientationVisible,
        onboardingStep: 4,
      });
      await dispatch(setUser(updatedUser));
      if (isEditing) {
        navigation.goBack();
      } else {
        navigation.navigate(nextStep, {
          isEditing: false,
        });
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("goToPronounsScreen Error: ", error);
    }
  };

  useEffect(() => {
    if (!isEditing) {
      navigation.setOptions({
        headerRight: () => (
          <CloseIcon
            onPress={() => {
              const popAction = StackActions.pop(5);
              navigation.dispatch(popAction);
            }}
          />
        ),
      });
    }
  }, [navigation]);

  useEffect(() => {
    setIsSexualOrientationVisible(user?.isSexualOrientationVisible);
    setResponse(user.gender);
    setSexualOrientation(user.sexualOrientation);
  }, []);

  return (
    <View className="flex-1 relative">
      <SafeArea
        testID="UserGender"
        scrollable
        relative
        addVerticalInsets
        addAdditionalInsetBottom={16}
        addAdditionalInsetTop={isEditing ? 32 : 13}
        customClasses={`px-4 ${isEditing ? "mb-[120px]" : "mb-[80px]"}`}
      >
        <View className="flex-1">
          {!isEditing && (
            <ProgressBar
              withDelay={500}
              initialProgress={beforeProgress}
              progress={progress}
            />
          )}
          <Text
            allowFontScaling={false}
            className="text-[30px] sm-1:text-[36px] text-primary-blue-100 text-left mt-10 font-jokkerl -tracking-widest"
          >
            {t("user-gender.title")}
          </Text>
          <Text
            allowFontScaling={false}
            className="text-base text-primary-blue-100 text-left mt-4 mb-6 font-jokkerr "
          >
            {t("user-gender.subtitle")}
          </Text>

          <GenderList
            existingValue={response}
            onPressAddMore={() =>
              navigation.navigate("SexualOrientationScreen", {
                sexualOrientation,
                isEditing,
              })
            }
            sexualOrientation={sexualOrientation}
            onRemoveSexualOrientation={() => setSexualOrientation(null)}
            setResponse={(value) => {
              setResponse(value);
              setSexualOrientation(null);
            }}
          />
          <View className="mt-6">
            <Alert
              text={
                <Alert.Text>
                  {t("user-gender.alert")}{" "}
                  <TouchableWithoutFeedback
                    onPress={() => {
                      navigation.navigate("HelpScreen");
                    }}
                  >
                    <Text className="underline">
                      {t("user-gender.let-us-know")}
                    </Text>
                  </TouchableWithoutFeedback>{" "}
                  <Alert.Text>{t("user-gender.if-we-are-missing")}</Alert.Text>
                </Alert.Text>
              }
            />
          </View>
        </View>
      </SafeArea>
      <FooterAbsoluteGradient>
        <View
          className={`flex px-6  justify-start ${
            isEditing ? "flex-col" : "flex-row items-center"
          }`}
          style={{ gap: 16 }}
        >
          <Pressable
            className="flex flex-row items-center justify-start flex-1"
            onPress={() =>
              setIsSexualOrientationVisible(!isSexualOrientationVisible)
            }
          >
            <Toggle
              variant="organic-checkbox"
              className="mr-2"
              value={isSexualOrientationVisible}
              onValueChange={(newValue) =>
                setIsSexualOrientationVisible(newValue)
              }
            />

            <Text
              allowFontScaling={false}
              className="text-base font-jokkerr text-primary-blue-100"
            >
              {t("general.visible-on-profile")}
            </Text>
          </Pressable>

          {isEditing ? (
            <DynamicButton
              testID="Landing.Modal.ImDone"
              onPress={handleGender}
              type={"full-transparent-v2"}
              label={t("general.save")}
              size="large"
              rounded={"2xl"}
              position="none"
              textStyles="text-base"
              textColor="dark"
              loaderColor="#000"
              isLoading={isLoading}
            />
          ) : (
            <DynamicButton
              onPress={handleGender}
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
              isLoading={isLoading}
            />
          )}
        </View>
      </FooterAbsoluteGradient>
    </View>
  );
}
