import DynamicButton from "@components/DynamicButton/DynamicButton";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { BASIC_INFO_TOTAL_STEPS } from "@constants/constants";
import { updateUser } from "@utils/amplifyUtils";
import { setUser } from "@store/auth/authSlice";
import FooterAbsoluteGradient from "@src/components/FooterAbsoluteGradient";
import ProgressBar from "@src/components/ProgressBar";
import SafeArea from "@src/components/SafeArea";
import SelectScrollviewPicker from "@src/components/SelectScrollviewPicker";
import Skeleton from "@src/components/Skeleton";
import Toggle from "@src/components/Toggle";
import useCurrentUser from "@src/hooks/useCurrentUser";
import useListReligions from "@src/hooks/useListReligions";
import { useMutation } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
};

export default function ReligionScreen({ navigation, route }: Props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isEditing } = route.params;

  const user = useCurrentUser();

  const [selectedValue, setSelectedValue] = useState<string | number>();
  const [isReligionVisible, setIsReligionVisible] = useState<boolean>(false);

  const { mutate: processUserValue, isPending: isLoading } = useMutation({
    mutationFn: async () => {
      const userId = user.id;

      const updatedUser = await updateUser(userId, {
        religionID: selectedValue,
        isReligionVisible,
        onboardingStep: 17,
      });
      await dispatch(setUser(updatedUser));
      if (isEditing) {
        navigation.goBack();
      } else {
        navigation.navigate("HometownScreen", { isEditing: false });
      }
    },
    onError: (error) => {
      console.log("processUserValue Error: ", error);
    },
  });

  const { data: religions, isLoading: isReligionsLoading } = useListReligions();

  useEffect(() => {
    setIsReligionVisible(user?.isReligionVisible);
    setSelectedValue(user.religion?.id);
  }, []);

  const progress = (5 / BASIC_INFO_TOTAL_STEPS) * 100;
  const progressBefore = (4 / BASIC_INFO_TOTAL_STEPS) * 100;

  return (
    <View className="flex-1 relative">
      <SafeArea
        testID="Religion"
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
            className="text-[30px] sm-1:text-[36px] text-primary-blue-100 text-left mt-10 mb-4 font-jokkerl -tracking-widest mb-6"
          >
            {t("religion-screen.title")}
          </Text>
          {isReligionsLoading ? (
            <View style={{ gap: 8 }}>
              <Skeleton width="100%" height={70} />
              <Skeleton width="100%" height={70} />
              <Skeleton width="100%" height={70} />
            </View>
          ) : (
            <SelectScrollviewPicker
              items={religions?.items.map((religion) => ({
                label: religion.name,
                value: religion.id,
              }))}
              onChange={(value) => setSelectedValue(value.value)}
              selected={selectedValue}
            />
          )}
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
            onPress={() => setIsReligionVisible(!isReligionVisible)}
          >
            <Toggle
              variant="organic-checkbox"
              className="mr-2"
              value={isReligionVisible}
              onValueChange={(newValue) => setIsReligionVisible(newValue)}
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
