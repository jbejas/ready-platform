import DynamicButton from "@components/DynamicButton/DynamicButton";
import { BASIC_INFO_TOTAL_STEPS } from "@constants/constants";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import FooterAbsoluteGradient from "@src/components/FooterAbsoluteGradient";
import ProgressBar from "@src/components/ProgressBar";
import SafeArea from "@src/components/SafeArea";
import TextInput from "@src/components/TextInput";
import Toggle from "@src/components/Toggle";
import useCurrentUser from "@src/hooks/useCurrentUser";
import { setUser } from "@store/auth/authSlice";
import { useMutation } from "@tanstack/react-query";
import { updateUser } from "@utils/amplifyUtils";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";

type Props = {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
};

export default function SchoolScreen({ navigation, route }: Props) {
  // Mount Localization
  const { t } = useTranslation();
  // Mount Redux dispatch
  const dispatch = useDispatch();
  // Route params
  const { isEditing } = route.params;

  // Get user ID
  const user = useCurrentUser();

  const [school, setSchool] = useState<string | null>(null);
  const [isSchoolVisbile, setIsSchoolVisbile] = useState<boolean>(false);

  const { mutate: onSubmit, isPending: isLoading } = useMutation({
    mutationFn: async () => {
      const updatedUser = await updateUser(user.id, {
        school,
        isSchoolVisbile,
        onboardingStep: 19,
      });
      await dispatch(setUser(updatedUser));
      if (isEditing) {
        navigation.goBack();
      } else {
        navigation.navigate("EducationScreen", { isEditing: false });
      }
    },
    onError: (error) => {
      console.log("Error goToReflectionQuoteScreen: ", error);
    },
  });

  useEffect(() => {
    setSchool(user?.school);
    setIsSchoolVisbile(user?.isSchoolVisbile);
  }, []);

  const progress = (5 / BASIC_INFO_TOTAL_STEPS) * 100;
  const progressBefore = (4 / BASIC_INFO_TOTAL_STEPS) * 100;

  return (
    <View className="flex-1 relative">
      <SafeArea
        testID="School"
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
              initialProgress={progressBefore}
              progress={progress}
            />
          )}

          <Text
            allowFontScaling={false}
            className="text-[30px] sm-1:text-[36px] text-primary-blue-100 text-left mt-10 font-jokkerl -tracking-widest mb-[110px]"
          >
            {t("school-screen.title")}
          </Text>
          <TextInput
            defaultValue={user?.school}
            onChangeText={(value) => setSchool(value)}
            value={school}
            placeholder={t("location-screen.input-placeholder")}
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
            onPress={() => setIsSchoolVisbile(!isSchoolVisbile)}
          >
            <Toggle
              variant="organic-checkbox"
              className="mr-2"
              value={isSchoolVisbile}
              onValueChange={(newValue) => setIsSchoolVisbile(newValue)}
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
              onPress={onSubmit}
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
              onPress={onSubmit}
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
