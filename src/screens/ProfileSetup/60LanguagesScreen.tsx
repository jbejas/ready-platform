import DynamicButton from "@components/DynamicButton/DynamicButton";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { Language, LanguageUser } from "@src/api/index";
import FooterAbsoluteGradient from "@src/components/FooterAbsoluteGradient";
import ProgressBar from "@src/components/ProgressBar";
import SafeArea from "@src/components/SafeArea";
import SelectableToggleItem from "@src/components/SelectableToggleItem";
import Skeleton from "@src/components/Skeleton";
import Toggle from "@src/components/Toggle";
import useCurrentUser from "@src/hooks/useCurrentUser";
import useListLanguages from "@src/hooks/useListLanguages";
import useProgressAboutYouScreens from "@src/screens/ProfileSetup/hooks/useProgressAboutYouScreens";
import { setUser } from "@store/auth/authSlice";
import { useMutation } from "@tanstack/react-query";
import {
  createLanguageUser,
  deleteLanguageUser,
  updateUser,
} from "@utils/amplifyUtils";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
};

export default function LanguagesScreen({ navigation, route }: Props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { isEditing } = route.params;
  const { progress, beforeProgress, nextStep } = useProgressAboutYouScreens();

  const user = useCurrentUser();
  const [selectedValue, setSelectedValue] = useState<Partial<LanguageUser>[]>(
    []
  );
  const [areLanguagesVisible, setAreLanguagesVisible] =
    useState<boolean>(false);

  const getLanguagesUser = () => {
    return user?.languages.items.map((item) => item) || [];
  };

  const { mutate: processUserLanguages, isPending: isLoading } = useMutation({
    mutationFn: async () => {
      const userId: string = user.id;

      const languageIdsUser = getLanguagesUser().map(
        (language) => language.language.id
      );
      const languageIdsSelected = selectedValue.map((language) => language.id);
      const languageNews = selectedValue.filter(
        (language) => !languageIdsUser.includes(language.language.id)
      );

      const languageToRemove = getLanguagesUser().filter(
        (language) => !languageIdsSelected.includes(language.id)
      );

      //create if not exists
      if (languageNews.length > 0) {
        await createLanguageUser(
          user.id,
          languageNews.map((language) => language.language)
        );
      }
      if (languageToRemove.length > 0) {
        await Promise.all(
          languageToRemove.map((language) => deleteLanguageUser(language.id))
        );
      }

      const updatedUser = await updateUser(userId, {
        areLanguagesVisible,
        onboardingStep: 7,
      });
      await dispatch(setUser(updatedUser));
      if (isEditing) {
        navigation.goBack();
      } else {
        navigation.navigate(nextStep, { isEditing: false });
      }
    },
    onError: (error) => {
      console.log("processUserValue Error: ", error);
    },
  });

  const { data: allLanguages, isLoading: isLoadingLanguages } =
    useListLanguages();

  useEffect(() => {
    setAreLanguagesVisible(user.areLanguagesVisible);
    setSelectedValue(getLanguagesUser());
  }, []);

  const handleSelect = (item: Language) => {
    if (selectedValue.find((selected) => selected.language.id === item.id)) {
      setSelectedValue(
        selectedValue.filter((selected) => selected.language.id !== item.id)
      );
    } else {
      setSelectedValue([
        ...selectedValue,
        {
          id: null,
          language: item,
        },
      ]);
    }
  };
  return (
    <View className="flex-1 relative">
      <SafeArea
        testID="Languages"
        relative
        scrollable
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
            className="text-[30px] sm-1:text-[36px] text-primary-blue-100 text-left mt-10 mb-6 font-jokkerl -tracking-widest"
          >
            {t("user-languages.title")}
          </Text>
          <View style={{ gap: 8 }}>
            {isLoadingLanguages ? (
              <>
                <Skeleton width={"100%"} height={72} />
                <Skeleton width={"100%"} height={72} />
                <Skeleton width={"100%"} height={72} />
              </>
            ) : (
              allLanguages.items.map((item) => (
                <SelectableToggleItem
                  key={item.id}
                  title={item.name}
                  variantToggle="organic-radio-multiple"
                  onSelect={() => handleSelect(item)}
                  selected={
                    !!selectedValue.find(
                      (ethnicity) => ethnicity.language.id === item.id
                    )
                  }
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
            onPress={() => setAreLanguagesVisible(!areLanguagesVisible)}
          >
            <Toggle
              variant="organic-checkbox"
              className="mr-2"
              value={areLanguagesVisible}
              onValueChange={(newValue) => setAreLanguagesVisible(newValue)}
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
              onPress={processUserLanguages}
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
              onPress={processUserLanguages}
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
