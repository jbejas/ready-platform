import DynamicButton from "@components/DynamicButton/DynamicButton";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { BASIC_INFO_TOTAL_STEPS, STAR_SIGNS } from "@constants/constants";
import { updateUser } from "@utils/amplifyUtils";
import { setUser } from "@store/auth/authSlice";
import FooterAbsoluteGradient from "@src/components/FooterAbsoluteGradient";
import ProgressBar from "@src/components/ProgressBar";
import SafeArea from "@src/components/SafeArea";
import SelectableToggleItem from "@src/components/SelectableToggleItem";
import Toggle from "@src/components/Toggle";
import useCurrentUser from "@src/hooks/useCurrentUser";
import { useMutation } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

type Props = {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
};

export default function StarSignScreen({ navigation, route }: Props) {
  const dispatch = useDispatch();
  const { isEditing } = route.params;
  const user = useCurrentUser();
  const { t } = useTranslation();

  const [selectedValue, setSelectedValue] = useState<string | number>(
    "Patience"
  );

  const [isVisibleOnProfile, setIsVisibleOnProfile] = useState<boolean>(false);

  useEffect(() => {
    setIsVisibleOnProfile(user.isStarSignVisible);
    setSelectedValue(user.starSign);
  }, []);

  const { mutate: processUserValue, isPending: isLoading } = useMutation({
    mutationFn: async () => {
      const updatedUser = await updateUser(user.id, {
        starSign: selectedValue,
        isStarSignVisible: isVisibleOnProfile,
      });
      await dispatch(setUser(updatedUser));
      if (isEditing) {
        navigation.goBack();
      } else {
        navigation.navigate("GenderScreen", {
          isEditing: false,
        });
      }
    },
    onError: (error) => {
      console.log("processUserValue Error: ", error);
    },
  });

  const progress = (4 / BASIC_INFO_TOTAL_STEPS) * 100;
  const progressBefore = (3 / BASIC_INFO_TOTAL_STEPS) * 100;

  return (
    <View className="flex-1 relative">
      <SafeArea
        testID="StarSign"
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
              initialProgress={progressBefore}
              progress={progress}
            />
          )}

          <Text
            allowFontScaling={false}
            className="text-[30px] sm-1:text-[36px] text-primary-blue-100 text-left mt-10 mb-6 font-jokkerl -tracking-widest"
          >
            {t("star-sign-screen.title")}
          </Text>
          <View style={{ gap: 8 }}>
            {STAR_SIGNS.map((item) => (
              <SelectableToggleItem
                key={item.value}
                title={item.value}
                variantToggle="organic-radio"
                onSelect={() => setSelectedValue(item.value)}
                selected={selectedValue === item.value}
              />
            ))}
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
            onPress={() => setIsVisibleOnProfile(!isVisibleOnProfile)}
          >
            <Toggle
              variant="organic-checkbox"
              className="mr-2"
              value={isVisibleOnProfile}
              onValueChange={(newValue) => setIsVisibleOnProfile(newValue)}
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
