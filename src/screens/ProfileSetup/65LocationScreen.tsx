import DynamicButton from "@components/DynamicButton/DynamicButton";
import {
  NavigationProp,
  RouteProp,
  StackActions,
} from "@react-navigation/native";
import CloseIcon from "@src/components/CloseIcon/CloseIcon";
import FooterAbsoluteGradient from "@src/components/FooterAbsoluteGradient";
import ProgressBar from "@src/components/ProgressBar";
import SafeArea from "@src/components/SafeArea";
import Toggle from "@src/components/Toggle";
import useCurrentUser from "@src/hooks/useCurrentUser";
import useProgressAboutYouScreens from "@src/screens/ProfileSetup/hooks/useProgressAboutYouScreens";
import { setUser } from "@store/auth/authSlice";
import { updateUser } from "@utils/amplifyUtils";
import { sentryTracker } from "@utils/sentry";
import axios from "axios";
import * as Location from "expo-location";
import { Skeleton } from "moti/skeleton";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, Text, TextInput, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useDispatch } from "react-redux";
const SkeletonCommonProps = {
  colorMode: "light",
  transition: {
    type: "timing",
    duration: 1500,
  },
  backgroundColor: "#D4D4D4",
} as const;

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
};

export default function UserPhoneNumberScreen({ navigation, route }: Props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isEditing } = route.params;

  const user = useCurrentUser();
  const { progress, beforeProgress, nextStep } = useProgressAboutYouScreens();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [location, setLocation] = useState<string | null>(null);
  const [lat, setLat] = useState<number | null>(null);
  const [long, setLong] = useState<number | null>(null);
  const [isLocationGranted, setIsLocationGranted] = useState<boolean>(true);
  const [isLocationVisible, setIsLocationVisible] = useState<boolean>(false);
  const [isLoadingLocation, setIsLoadingLocation] = useState<boolean>(true);

  const goToDistanceScreen = async () => {
    try {
      setIsLoading(true);
      const updatedUser = await updateUser(user.id, {
        location,
        locationLatLong: {
          latitude: String(lat),
          longitude: String(long),
        },
        isLocationVisible,
        onboardingStep: 8,
      });
      await dispatch(setUser(updatedUser));
      if (isEditing) {
        navigation.goBack();
      } else {
        navigation.navigate(nextStep, {
          isEditing: false,
          existingValue: false,
        });
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("Error goToReflectionQuoteScreen: ", error);
      sentryTracker(
        "LocationScreen",
        `Error goToReflectionQuoteScreen: ${error}`,
        user,
      );
    }
  };

  const fetchLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setIsLocationGranted(false);
        const reversedGeolocation = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=39.4231173,-95.9334841&key=`,
        );
        const currentLocation = reversedGeolocation.data.results.find(
          (location) => location.types[0] === "postal_code",
        );
        setLocation(currentLocation.formatted_address);

        setLat(currentLocation.geometry.location.lat);
        setLong(currentLocation.geometry.location.lng);
        setLocation("");
      } else {
        const { coords } = await Location.getCurrentPositionAsync({});
        const reversedGeolocation = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.latitude},${coords.longitude}&key=`,
        );
        const currentLocation = reversedGeolocation.data.results.find(
          (location) => location.types[0] === "postal_code",
        );
        setLocation(currentLocation.formatted_address);
        setLat(coords.latitude);
        setLong(coords.longitude);
      }
      setIsLoadingLocation(false);
    } catch (error) {
      setIsLoadingLocation(false);
      console.log("Fetch Location error: ", error);
      sentryTracker("LocationScreen", `Fetch Location error: ${error}`, user);
    }
  };

  const fetchLocationByZipCode = async () => {
    try {
      const reversedGeolocation = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=`,
      );
      const currentLocation = reversedGeolocation.data.results.find(
        (location) => location.types[0] === "postal_code",
      );
      console.log("Current location", currentLocation);
      setLocation(currentLocation.formatted_address);
      setLat(currentLocation.geometry.location.lat);
      setLong(currentLocation.geometry.location.lng);
    } catch (error) {
      console.log("Fetch Location by zip code: ", error);
      sentryTracker(
        "LocationScreen",
        `Fetch Location by zip code error: ${error}`,
        user,
      );
    }
  };

  useEffect(() => {
    fetchLocation();
    setIsLocationVisible(user?.isLocationVisible);
  }, []);

  const parseLocation = async (latlong) => {
    try {
      const reversedGeolocation = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlong.x.latitude},${latlong.x.longitude}&key=`,
      );
      const currentLocation = reversedGeolocation.data.results.find(
        (location) => location.types[0] === "postal_code",
      );
      setLocation(currentLocation.formatted_address);
    } catch (error) {
      console.log("parseLocation error", error);
      sentryTracker("LocationScreen", `parseLocation error: ${error}`, user);
    }
  };

  useEffect(() => {
    if (!isEditing) {
      navigation.setOptions({
        headerRight: () => (
          <CloseIcon
            onPress={() => {
              const popAction = StackActions.pop(9);
              navigation.dispatch(popAction);
            }}
          />
        ),
      });
    }
  }, [navigation]);

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
            className="text-[30px] sm-1:text-[36px] text-primary-blue-100 text-left mt-10 mb-4 font-jokkerl -tracking-widest"
          >
            {t("location-screen.title")}
          </Text>
          <Text
            allowFontScaling={false}
            className="text-base text-primary-blue-100 text-left mb-12 font-jokkerr -tracking-wide"
          >
            {t("location-screen.subtitle")}
          </Text>
          <View className="w-full flex items-center justify-center pb-8">
            <TextInput
              onChangeText={(value) => setLocation(value)}
              className="w-full text-base font-jokkerl text-primary-blue-100 placeholder-primary-blue-100 border-b pb-2  border-primary-blue-100"
              value={location}
              placeholder={t("location-screen.input-placeholder")}
              autoCapitalize="none"
              keyboardType={isLocationGranted ? "default" : "number-pad"}
              autoCorrect={false}
            />
            {!isLocationGranted ? (
              <View className="mt-4">
                <DynamicButton
                  onPress={() => fetchLocationByZipCode()}
                  type={"primary"}
                  label="Search by ZIP Code"
                  size="large"
                  rounded={"2xl"}
                  position="none"
                  textStyles="text-base"
                />
              </View>
            ) : null}
          </View>
          <View className="w-full h-[250px] rounded-lg overflow-hidden  sm-1:h-[300px]">
            {lat && long && !isLoadingLocation ? (
              <MapView
                style={{ width: "100%", height: "100%" }}
                loadingEnabled
                zoomEnabled={false}
                region={{
                  latitude: lat,
                  longitude: long,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }}
                initialRegion={{
                  latitude: lat,
                  longitude: long,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }}
              >
                <Marker
                  draggable
                  coordinate={{
                    latitude: lat,
                    longitude: long,
                  }}
                  // image={require("@assets/icons/map-pin.png")}
                  onDragEnd={(e) =>
                    parseLocation({ x: e.nativeEvent.coordinate })
                  }
                />
              </MapView>
            ) : (
              <View>
                <Skeleton
                  height={"100%"}
                  width={"100%"}
                  radius={5}
                  {...SkeletonCommonProps}
                />
              </View>
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
            onPress={() => setIsLocationVisible(!isLocationVisible)}
          >
            <Toggle
              variant="organic-checkbox"
              className="mr-2"
              value={isLocationVisible}
              onValueChange={(newValue) => setIsLocationVisible(newValue)}
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
              onPress={goToDistanceScreen}
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
              onPress={goToDistanceScreen}
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
