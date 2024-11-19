import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Pressable } from "react-native";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";
import HorizontalQuestionsRadio from "@src/components/HorizontalQuestionsRadio/HorizontalQuestionsRadio";
import Checkbox from "expo-checkbox";
import { BASIC_INFO_TOTAL_STEPS } from "@constants/constants";
import { generateClient } from "aws-amplify/api";
import * as queries from "@graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import { ListEducationLevelsQuery } from "@src/api/index";
import { updateUser } from "@utils/amplifyUtils";
import { setUser } from "@store/auth/authSlice";
import { useTranslation } from "react-i18next";
import useCurrentUser from "@src/hooks/useCurrentUser";
import useListEducationLevels from "@src/hooks/useListEducationLevels";
import ProgressBar from "@src/components/ProgressBar";
import SafeArea from "@src/components/SafeArea";
import Toggle from "@src/components/Toggle";
import FooterAbsoluteGradient from "@src/components/FooterAbsoluteGradient";
import SelectableToggleItem from "@src/components/SelectableToggleItem";
import Skeleton from "@src/components/Skeleton";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
};

export default function EducationScreen({ navigation, route }: Props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const API = generateClient();
  const { isEditing } = route.params;

  const user = useCurrentUser();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedEducationLevel, setSelectedEducationLevel] = useState<
    string | null
  >(null);

  const [isEducationLevelVisible, setIsEducationLevelVisible] =
    useState<boolean>(false);

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const updatedUser = await updateUser(user.id, {
        educationLevel: selectedEducationLevel,
        isEducationLevelVisible,
        onboardingStep: 20,
      });
      await dispatch(setUser(updatedUser));
      if (isEditing) {
        navigation.goBack();
      } else {
        navigation.navigate("ProfileCompleteScreen");
      }
      setIsLoading(false);
    } catch (error) {
      console.log("goToPronounsScreen Error: ", error);
    }
  };

  const { data: educationLevels, isLoading: isLoadingEducationLevels } =
    useListEducationLevels();

  useEffect(() => {
    setSelectedEducationLevel(user?.educationLevel);
    setIsEducationLevelVisible(user?.isEducationLevelVisible);
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
            className="text-[30px] sm-1:text-[36px] text-primary-blue-100 text-left mt-10 font-jokkerl -tracking-widest mb-8"
          >
            {t("education-screen.title")}
          </Text>
          <View style={{ gap: 8 }}>
            {isLoadingEducationLevels ? (
              <>
                <Skeleton width={"100%"} height={72} />
                <Skeleton width={"100%"} height={72} />
                <Skeleton width={"100%"} height={72} />
              </>
            ) : (
              educationLevels.items.map((item) => (
                <SelectableToggleItem
                  key={item.id}
                  title={item.name}
                  variantToggle="organic-radio-multiple"
                  onSelect={() => setSelectedEducationLevel(item.name)}
                  selected={selectedEducationLevel === item.name}
                />
              ))
            )}
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
            onPress={() => setIsEducationLevelVisible(!isEducationLevelVisible)}
          >
            <Toggle
              variant="organic-checkbox"
              className="mr-2"
              value={isEducationLevelVisible}
              onValueChange={(newValue) => setIsEducationLevelVisible(newValue)}
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
