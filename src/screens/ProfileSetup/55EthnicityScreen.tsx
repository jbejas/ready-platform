import DynamicButton from "@components/DynamicButton/DynamicButton";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { Ethnicity, EthnicityUser } from "@src/api/index";
import Alert from "@src/components/Alert";
import FooterAbsoluteGradient from "@src/components/FooterAbsoluteGradient";
import ProgressBar from "@src/components/ProgressBar";
import SafeArea from "@src/components/SafeArea";
import SelectableToggleItem from "@src/components/SelectableToggleItem";
import Skeleton from "@src/components/Skeleton";
import Toggle from "@src/components/Toggle";
import useCurrentUser from "@src/hooks/useCurrentUser";
import useListEthnicities from "@src/hooks/useListEthnicities";
import useProgressAboutYouScreens from "@src/screens/ProfileSetup/hooks/useProgressAboutYouScreens";
import { setUser } from "@store/auth/authSlice";
import { useMutation } from "@tanstack/react-query";
import {
  createEthnicityUser,
  deleteEthnicityUser,
  updateUser,
} from "@utils/amplifyUtils";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";

type Props = {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
};

export default function EthnicityScreen({ navigation, route }: Props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { isEditing } = route.params;
  const user = useCurrentUser();
  const { progress, beforeProgress, nextStep } = useProgressAboutYouScreens();

  const [selectedValue, setSelectedValue] = useState<Partial<EthnicityUser>[]>(
    []
  );
  const [isEthnicityVisible, setIsEthnicityVisible] = useState<boolean>(false);

  const { mutate: processUserValue, isPending: isLoading } = useMutation({
    mutationFn: async () => {
      const userId: string = user.id;

      const ethnicityIdsUser = getEthnicityUser().map(
        (ethnicity) => ethnicity.ethnicity.id
      );
      const ethnicityIdsSelected = selectedValue.map(
        (ethnicity) => ethnicity.id
      );
      const ethnicityNews = selectedValue.filter(
        (ethnicity) => !ethnicityIdsUser.includes(ethnicity.ethnicity.id)
      );

      const ethnicityToRemove = getEthnicityUser().filter(
        (ethnicity) => !ethnicityIdsSelected.includes(ethnicity.id)
      );

      //create if not exists
      if (ethnicityNews.length > 0) {
        await createEthnicityUser(
          user.id,
          ethnicityNews.map((ethnicity) => ethnicity.ethnicity)
        );
      }
      if (ethnicityToRemove.length > 0) {
        await Promise.all(
          ethnicityToRemove.map((ethnicity) =>
            deleteEthnicityUser(ethnicity.id)
          )
        );
      }

      const updatedUser = await updateUser(userId, {
        isEthnicityVisible,
        onboardingStep: 6,
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

  const { data: allEthnicities, isLoading: isLoadingEthnicities } =
    useListEthnicities();

  const getEthnicityUser = () => {
    return user?.ethnicity.items.map((item) => item) || [];
  };

  useEffect(() => {
    setIsEthnicityVisible(user.isEthnicityVisible);
    setSelectedValue(getEthnicityUser());
  }, []);

  const handleSelect = (item: Ethnicity) => {
    if (selectedValue.find((selected) => selected.ethnicity.id === item.id)) {
      setSelectedValue(
        selectedValue.filter((selected) => selected.ethnicity.id !== item.id)
      );
    } else {
      setSelectedValue([
        ...selectedValue,
        {
          id: null,
          ethnicity: item,
        },
      ]);
    }
  };

  return (
    <View className="flex-1 relative">
      <SafeArea
        testID="Ethnicity"
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
            {t("user-ethnicity.title")}
          </Text>
          <Alert text={t("user-ethnicity.alert")} />
          <View style={{ gap: 8 }} className="mt-6">
            {isLoadingEthnicities ? (
              <>
                <Skeleton width={"100%"} height={72} />
                <Skeleton width={"100%"} height={72} />
                <Skeleton width={"100%"} height={72} />
              </>
            ) : (
              allEthnicities.items.map((item) => (
                <SelectableToggleItem
                  key={item.id}
                  title={item.name}
                  variantToggle="organic-radio-multiple"
                  onSelect={() => handleSelect(item)}
                  selected={
                    !!selectedValue.find(
                      (ethnicity) => ethnicity.ethnicity.id === item.id
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
            onPress={() => setIsEthnicityVisible(!isEthnicityVisible)}
          >
            <Toggle
              variant="organic-checkbox"
              className="mr-2"
              value={isEthnicityVisible}
              onValueChange={(newValue) => setIsEthnicityVisible(newValue)}
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
              onPress={processUserValue}
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
              onPress={processUserValue}
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
