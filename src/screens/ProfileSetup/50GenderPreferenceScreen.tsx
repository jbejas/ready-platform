import DynamicButton from "@components/DynamicButton/DynamicButton";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import FooterAbsoluteGradient from "@src/components/FooterAbsoluteGradient";
import ProgressBar from "@src/components/ProgressBar";
import SafeArea from "@src/components/SafeArea";
import SelectableToggleItem from "@src/components/SelectableToggleItem";
import Skeleton from "@src/components/Skeleton";
import useCurrentUser from "@src/hooks/useCurrentUser";
import useListGenders from "@src/hooks/useListGenders";
import useProgressAboutYouScreens from "@src/screens/ProfileSetup/hooks/useProgressAboutYouScreens";
import { setUser } from "@store/auth/authSlice";
import { useMutation } from "@tanstack/react-query";
import { updateUser } from "@utils/amplifyUtils";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import { useDispatch } from "react-redux";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
};

export default function GenderPreferenceScreen({ navigation, route }: Props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { isEditing } = route.params;

  // Get user ID
  const user = useCurrentUser();
  const { progress, beforeProgress, nextStep } = useProgressAboutYouScreens();

  const [selectedValue, setSelectedValue] = useState<string[]>([]);

  const { mutate: processUserGenderPreferences, isPending: isLoading } =
    useMutation({
      mutationFn: async () => {
        const updatedUser = await updateUser(user.id, {
          genderPreferences: selectedValue.join(","),
          // areGenderPreferencesVisible,
          onboardingStep: 5,
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

  const { data: allGenders, isLoading: isLoadingAllGenders } = useListGenders();

  const handleSelect = (item: string) => {
    if (selectedValue?.includes(item)) {
      setSelectedValue(selectedValue?.filter((selected) => selected !== item));
    } else {
      setSelectedValue([...selectedValue, item]);
    }
  };

  useEffect(() => {
    setSelectedValue(user?.genderPreferences?.split(",") || []);
  }, []);

  return (
    <View className="flex-1 relative">
      <SafeArea
        testID="GenderPreference"
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
            {t("user-dating-preference.title")}
          </Text>
          <Text
            allowFontScaling={false}
            className="text-base text-primary-blue-100 text-left mt-4 mb-6 font-jokkerr"
          >
            {t("user-dating-preference.subtitle")}
          </Text>
          <View style={{ gap: 8 }}>
            {isLoadingAllGenders ? (
              <>
                <Skeleton width={"100%"} height={72} />
                <Skeleton width={"100%"} height={72} />
                <Skeleton width={"100%"} height={72} />
              </>
            ) : (
              allGenders.items.map((item) => (
                <SelectableToggleItem
                  key={item.id}
                  title={item.name}
                  variantToggle="organic-radio-multiple"
                  onSelect={() => handleSelect(item.name)}
                  selected={selectedValue.includes(item.name)}
                />
              ))
            )}
          </View>
        </View>
      </SafeArea>
      <FooterAbsoluteGradient>
        <View
          className={`flex px-6 ${
            isEditing ? "flex-col" : "flex-row justify-end"
          }`}
          style={{ gap: 16 }}
        >
          {isEditing ? (
            <DynamicButton
              testID="Landing.Modal.ImDone"
              onPress={processUserGenderPreferences}
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
              onPress={processUserGenderPreferences}
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
