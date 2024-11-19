import DynamicButton from "@components/DynamicButton/DynamicButton";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import FooterAbsoluteGradient from "@src/components/FooterAbsoluteGradient";
import ProgressBar from "@src/components/ProgressBar";
import SafeArea from "@src/components/SafeArea";
import SelectScrollviewPicker from "@src/components/SelectScrollviewPicker";
import useCurrentUser from "@src/hooks/useCurrentUser";
import useProgressAboutYouScreens from "@src/screens/ProfileSetup/hooks/useProgressAboutYouScreens";
import { setUser } from "@store/auth/authSlice";
import { useMutation } from "@tanstack/react-query";
import { updateUser } from "@utils/amplifyUtils";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

interface NavigationProps {
  route: RouteProp<any>;
  navigation: NavigationProp<any>;
}

const DISTANCE_DOES_NOT_MATTER = "1000000";

interface RootState {
  auth: {
    user: string;
  };
  config: {
    distanceFF: number;
  };
}

interface DistanceOption {
  label: string;
  value: string;
}

export default function DistanceScreen({ route, navigation }: NavigationProps) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isEditing } = route.params;
  const user = useCurrentUser();
  const distanceFF = useSelector((state: RootState) => state.config.distanceFF);
  const { progress, beforeProgress, nextStep } = useProgressAboutYouScreens();

  const [selectedValue, setSelectedValue] = useState<string>(
    DISTANCE_DOES_NOT_MATTER
  );
  const [distanceOptions, setDistanceOptions] = useState<DistanceOption[]>([]);

  const { mutate: handleDistance, isPending: isLoading } = useMutation({
    mutationFn: async () => {
      const updatedUser = await updateUser(user.id, {
        distancePreference: selectedValue,
        onboardingStep: 9,
      });

      await dispatch(setUser(updatedUser));

      if (isEditing) {
        navigation.goBack();
      } else {
        navigation.navigate(nextStep, { isEditing: false });
      }
    },
    onError: (error) => {
      console.error("Error updating distance preference:", error);
    },
  });

  const generateDistanceOptions = () => {
    const defaultOption = {
      label: t("distance-screen.distance-doesnt-matter"),
      value: DISTANCE_DOES_NOT_MATTER,
    };

    if (distanceFF !== 1) {
      return [defaultOption];
    }

    const distances = Array.from({ length: 20 }, (_, index) => ({
      label: `${String(5 + index * 5)} mi`,
      value: String(5 + index * 5),
    }));

    return [defaultOption, ...distances];
  };

  useEffect(() => {
    setDistanceOptions(generateDistanceOptions());
    setSelectedValue(
      String(user.distancePreference || DISTANCE_DOES_NOT_MATTER)
    );
  }, []);

  return (
    <View className="flex-1 relative">
      <SafeArea
        testID="Location"
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
            className="text-[30px] sm-1:text-[36px] text-primary-blue-100 text-left mt-10 font-jokkerl -tracking-widest"
          >
            {t("distance-screen.title")}
          </Text>

          {distanceFF === 0 ? (
            <DistanceDisabledMessage t={t} />
          ) : (
            <Text
              allowFontScaling={false}
              className="text-base text-primary-blue-100 text-left font-jokkerr -tracking-wide mt-4"
            >
              {t("distance-screen.subtitle")}
            </Text>
          )}

          <View className="mt-4">
            <SelectScrollviewPicker
              items={distanceOptions}
              selected={selectedValue}
              onChange={(value) => setSelectedValue(String(value.value))}
            />
          </View>
        </View>
      </SafeArea>

      <FooterAbsoluteGradient>
        <View
          className={`flex px-6 flex-1 flex-col ${!isEditing && "items-end"}`}
        >
          {isEditing ? (
            <DynamicButton
              testID="Landing.Modal.ImDone"
              onPress={handleDistance}
              type="full-transparent-v2"
              label={t("general.save")}
              size="large"
              rounded="2xl"
              position="none"
              textStyles="text-base"
              textColor="dark"
              loaderColor="#000"
              isLoading={isLoading}
            />
          ) : (
            <DynamicButton
              onPress={handleDistance}
              type="icon"
              size="large"
              iconPosition="right"
              icon="chevron-right"
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

function DistanceDisabledMessage({ t }: { t: (key: string) => string }) {
  return (
    <>
      <Text
        allowFontScaling={false}
        className="text-base text-primary-blue-100 text-left font-jokkerr -tracking-wide mt-2"
      >
        {t("distance-screen.distance-disabled-hl")}
      </Text>
      <Text
        allowFontScaling={false}
        className="text-base text-primary-blue-100 text-left font-jokkerr -tracking-wide mt-2"
      >
        {t("distance-screen.distance-disabled-sl")}
      </Text>
    </>
  );
}
