import DynamicButton from "@components/DynamicButton/DynamicButton";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import FooterAbsoluteGradient from "@src/components/FooterAbsoluteGradient";
import ProgressBar from "@src/components/ProgressBar";
import SafeArea from "@src/components/SafeArea";
import { AGE_RANGE_MAX, AGE_RANGE_MIN } from "@src/constants/constants";
import useCurrentUser from "@src/hooks/useCurrentUser";
import useProgressAboutYouScreens from "@src/screens/ProfileSetup/hooks/useProgressAboutYouScreens";
import { setUser } from "@store/auth/authSlice";
import { useMutation } from "@tanstack/react-query";
import { updateUser } from "@utils/amplifyUtils";
import { LinearGradient } from "expo-linear-gradient";
import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import { useDispatch } from "react-redux";
import Slider from "rn-range-slider";

// Define the props type for your navigation stack
type Props = {
  route: RouteProp<any>;
  navigation: NavigationProp<any>;
};

export default function AgeRangeScreen({ route, navigation }: Props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const user = useCurrentUser();

  const { isEditing } = route.params;

  const [low, setLow] = useState<number>(AGE_RANGE_MIN);
  const [high, setHigh] = useState<number>(AGE_RANGE_MAX);

  const Label = ({ text, ...restProps }) => {
    return (
      <View className="" {...restProps}>
        <Text allowFontScaling={false} className=" text-transparent">
          {low} {high}
        </Text>
      </View>
    );
  };

  const Notch = (props) => {
    return <View className="w-2 h-2 bg-transparent" {...props} />;
  };

  const Rail = () => {
    return <View className="flex-1 h-1 rounded-xl bg-light-100" />;
  };

  const RailSelected = () => {
    return <View className="h-1 rounded-xl bg-primary-blue-100" />;
  };

  const Thumb = () => {
    return (
      <LinearGradient
        colors={["#C0AFB2", "#8F8082"]}
        className="w-[28px] h-[28px] rounded-full shadow-sm"
      />
    );
  };

  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback((value) => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);
  const { progress, beforeProgress, nextStep } = useProgressAboutYouScreens();

  const { mutate: handleAgeRange, isPending: isLoading } = useMutation({
    mutationFn: async () => {
      const updatedUser = await updateUser(user.id, {
        agePreferenceFrom: low,
        agePreferenceTo: high,
        onboardingStep: 10,
      });
      user.agePreferenceFrom = low;
      user.agePreferenceTo = high;
      await dispatch(setUser(updatedUser));

      if (!isEditing) {
        navigation.navigate(nextStep, {
          isEditing: false,
        });
      } else {
        navigation.goBack();
      }
    },
    onError: (error) => {
      console.log("Handle Age Preference Error: ", error);
    },
  });

  useEffect(() => {
    setLow(user.agePreferenceFrom);
    setHigh(user.agePreferenceTo);
  }, []);

  return (
    <View className="flex-1 relative">
      <SafeArea
        testID="AgeRange"
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
            className="text-[30px] sm-1:text-[36px] text-primary-blue-100 text-left mt-10 font-jokkerl -tracking-widest "
          >
            {t("age-range-screen.title")}
          </Text>
          <Text
            allowFontScaling={false}
            className="text-base text-primary-blue-100 text-left font-jokkerr -tracking-wide mt-4"
          >
            {t("age-range-screen.subtitle")}
          </Text>
          <Text
            allowFontScaling={false}
            className="text-[36px] text-primary-blue-100 mt-[92px] font-jokkerl -tracking-wide  mb-6"
          >
            {low}{" "}
            <Text
              allowFontScaling={false}
              className="text-base font-jokkerr text-primary-blue-100"
            >
              {t("age-range-screen.to")}
            </Text>{" "}
            {high === AGE_RANGE_MAX ? `${AGE_RANGE_MAX}+` : high}
          </Text>
          <Slider
            className="w-full"
            min={AGE_RANGE_MIN}
            max={AGE_RANGE_MAX}
            low={low}
            high={high}
            step={1}
            floatingLabel
            renderThumb={renderThumb}
            renderRail={renderRail}
            renderRailSelected={renderRailSelected}
            renderLabel={renderLabel}
            renderNotch={renderNotch}
            onValueChanged={handleValueChange}
          />
          <View className="flex flex-row justify-between">
            <Text
              allowFontScaling={false}
              className="text-base text-primary-blue-100 font-jokkerr -tracking-wide"
            >
              {AGE_RANGE_MIN} {t("age-range-screen.years")}
            </Text>
            <Text
              allowFontScaling={false}
              className="text-base text-primary-blue-100 font-jokkerr -tracking-wide"
            >
              {AGE_RANGE_MAX} {t("age-range-screen.years")}
            </Text>
          </View>
        </View>
      </SafeArea>
      <FooterAbsoluteGradient>
        <View
          className={`flex px-6 ${
            isEditing ? "flex-col " : "flex-row justify-end"
          }`}
        >
          {isEditing ? (
            <DynamicButton
              testID="Landing.Modal.ImDone"
              onPress={handleAgeRange}
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
              onPress={handleAgeRange}
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
