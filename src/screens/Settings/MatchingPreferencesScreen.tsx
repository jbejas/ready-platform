import React from "react";
import { View, Text, Pressable } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";

// Constants
import { AGE_RANGE_MAX } from "@src/constants/constants";

// Set Redux Dispatch
import { useSelector } from "react-redux";

// Localization
import { useTranslation } from "react-i18next";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

// Define the state structure
interface RootState {
  auth: {
    user: string;
  };
}

export default function MatchingPreferencesScreen({ navigation }: Props) {
  // Mount Localization
  const { t } = useTranslation();
  // Get user
  const user = JSON.parse(useSelector((state: RootState) => state.auth.user));

  return (
    <SafeAreaComponent testID="MatchingPreferences" scrollable relative>
      <View className="w-full flex flex-col items-center justify-start">
        <Text
          allowFontScaling={false}
          className="text-[16px] font-jokkerl -tracking-wide w-full text-left  mt-4"
        >
          {t("matching-preferences-screen.subtitle")}
        </Text>
      </View>
      <View className="w-full mt-2">
        <Pressable
          className="w-full"
          onPress={() =>
            navigation.navigate("GenderPreferenceScreen", {
              isEditing: true,
              existingValues: user.genderPreferences,
            })
          }
        >
          <Text
            allowFontScaling={false}
            className="text-[18px] font-jokkerl -tracking-wide w-full text-left mt-4"
          >
            {t("matching-preferences-screen.gender-preference")}
          </Text>
          <Text
            allowFontScaling={false}
            className="text-[16px] font-jokkerl -tracking-wide w-full text-left  mt-2"
          >
            {user.genderPreferences?.split(",").join(", ")}
          </Text>
        </Pressable>
      </View>
      <View className="w-full mt-4 border-t border-solid border-dark/20">
        <Pressable
          className="w-full"
          onPress={() =>
            navigation.navigate("AgeRangeScreen", {
              isEditing: true,
            })
          }
        >
          <Text
            allowFontScaling={false}
            className="text-[18px] font-jokkerl -tracking-wide w-full text-left mt-4"
          >
            {t("matching-preferences-screen.age-range")}
          </Text>
          <Text
            allowFontScaling={false}
            className="text-[16px] font-jokkerl -tracking-wide w-full text-left  mt-2"
          >
            Between {user.agePreferenceFrom} and {user.agePreferenceTo}
            {user.agePreferenceTo === AGE_RANGE_MAX && "+"}
          </Text>
        </Pressable>
      </View>
      <View className="w-full mt-4 border-t border-solid border-dark/20">
        <Pressable
          className="w-full"
          onPress={() =>
            navigation.navigate("DistanceScreen", {
              isEditing: true,
            })
          }
        >
          <Text
            allowFontScaling={false}
            className="text-[18px] font-jokkerl -tracking-wide w-full text-left mt-4"
          >
            {t("matching-preferences-screen.location-proximity")}
          </Text>

          {user.distancePreference > 100 ? (
            <Text
              allowFontScaling={false}
              className="text-[16px] font-jokkerl -tracking-wide w-full text-left mt-2"
            >
              {t("matching-preferences-screen.distance-doesnt-matter")}{" "}
            </Text>
          ) : (
            <Text
              allowFontScaling={false}
              className="text-[16px] font-jokkerl -tracking-wide w-full text-left mt-2"
            >
              {t("matching-preferences-screen.within")}{" "}
              {user.distancePreference}
              {t("matching-preferences-screen.mi-of-me")}
            </Text>
          )}
        </Pressable>
      </View>
    </SafeAreaComponent>
  );
}
