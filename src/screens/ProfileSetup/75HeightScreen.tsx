import DynamicButton from "@components/DynamicButton/DynamicButton";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import FooterAbsoluteGradient from "@src/components/FooterAbsoluteGradient";
import ProgressBar from "@src/components/ProgressBar";
import SafeArea from "@src/components/SafeArea";
import SelectScrollviewPicker from "@src/components/SelectScrollviewPicker";
import Toggle from "@src/components/Toggle";
import useCurrentUser from "@src/hooks/useCurrentUser";
import useProgressAboutYouScreens from "@src/screens/ProfileSetup/hooks/useProgressAboutYouScreens";
import { convertHeightToInternationalFormat } from "@src/utils/user";
import { setUser } from "@store/auth/authSlice";
import { useMutation } from "@tanstack/react-query";
import { updateUser } from "@utils/amplifyUtils";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";

const MAX_HEIGHT = 230;
const MIN_HEIGHT = 130;

type Props = {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
};

export default function HeightScreen({ navigation, route }: Props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isEditing } = route.params;
  const user = useCurrentUser();

  const [selectedHeight, setSelectedHeight] = useState<number | null>(null);
  const [isHeightVisible, setIsHeightVisible] = useState<boolean>(false);
  const { progress, beforeProgress, nextStep } = useProgressAboutYouScreens();

  const heightOptions = Array.from(
    { length: (MAX_HEIGHT - MIN_HEIGHT) / 2 + 1 },
    (_, i) => ({
      value: MIN_HEIGHT + i * 2,
      label: convertHeightToInternationalFormat(MIN_HEIGHT + i * 2),
    })
  );

  const { mutate: goToProfileCompleteScreen, isPending: isLoading } =
    useMutation({
      mutationFn: async () => {
        const height = Math.round(selectedHeight);

        const updatedUser = await updateUser(user.id, {
          height,
          isHeightVisible,
          onboardingStep: 11,
        });
        await dispatch(setUser(updatedUser));
        if (isEditing) {
          navigation.goBack();
        } else {
          navigation.navigate(nextStep, { isEditing: false });
        }
      },
      onError: (error) => {
        console.log("Error updateUser: ", error);
      },
    });

  useEffect(() => {
    if (user.height) {
      setSelectedHeight(user.height);
    }
    setIsHeightVisible(user?.isHeightVisible);
  }, []);

  return (
    <View className="flex-1 relative">
      <SafeArea
        testID="Height"
        relative
        scrollable
        isPressable
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
            className="text-[30px] sm-1:text-[36px] text-primary-blue-100 text-left mt-10 font-jokkerl -tracking-widest mb-6"
          >
            {t("height-screen.title")}
          </Text>
          <SelectScrollviewPicker
            items={heightOptions}
            onChange={(value) => setSelectedHeight(Number(value.value))}
            selected={selectedHeight}
          />
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
            onPress={() => setIsHeightVisible(!isHeightVisible)}
          >
            <Toggle
              variant="organic-checkbox"
              className="mr-2"
              value={isHeightVisible}
              onValueChange={(newValue) => setIsHeightVisible(newValue)}
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
              onPress={goToProfileCompleteScreen}
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
              onPress={goToProfileCompleteScreen}
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
