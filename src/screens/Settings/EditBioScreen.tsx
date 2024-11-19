import React, { useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";

// Set Redux Dispatch
import { useDispatch, useSelector } from "react-redux";
// Redux Slices
import { setUser } from "@store/auth/authSlice";

// Localization
import { useTranslation } from "react-i18next";

// Amplify Utils
import { updateUser } from "@utils/amplifyUtils";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

// Define the state structure
interface RootState {
  auth: {
    user: string;
  };
  keyboard: {
    isKeyboardVisible: boolean;
  };
}

export default function UserAccountScreen({ navigation }: Props) {
  // Mount Localization
  const { t } = useTranslation();
  // Mount Redux dispatch
  const dispatch = useDispatch();
  // Get user
  const user = JSON.parse(useSelector((state: RootState) => state.auth.user));
  // Get keyboard state
  const isKeyboardVisible = useSelector(
    (state: RootState) => state.keyboard.isKeyboardVisible,
  );

  // Constants
  const [bio, setBio] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleBio = async () => {
    try {
      setIsLoading(true);
      await updateUser(user.id, {
        bio,
      });
      user.bio = bio;
      dispatch(setUser(user));
      navigation.goBack();
      setIsLoading(false);
    } catch (error) {
      console.log("handleBio Error: ", error);
    }
  };

  useEffect(() => {
    setBio(user.bio);
  }, []);

  return (
    <SafeAreaComponent
      testID="EditBio
    "
      isPressable
      relative
    >
      <View className="w-full h-full flex flex-col items-center justify-start">
        <Text
          allowFontScaling={false}
          className="text-[36px] font-jokkerl -tracking-widest w-full text-left "
        >
          {t("bio-screen.title")}
        </Text>
        <Text
          allowFontScaling={false}
          className="text-[16px] font-jokkerl -tracking-wide w-full text-left  mt-4"
        >
          {t("bio-screen.subtitle")}
        </Text>
        <View className="w-full flex flex-row items-center justify-center py-3 border-b mb-4 border-dark mt-6">
          <TextInput
            onChangeText={(e) => setBio(e)}
            className="w-full text-xl h-48  font-jokkerl"
            defaultValue={user.bio}
            placeholder={t("bio-screen.placeholder")}
            autoCapitalize="none"
            keyboardType="default"
            autoCorrect={true}
            maxLength={250}
            multiline={true}
          />
        </View>
        <View className="w-full flex flex-row items-end justify-center">
          <Text
            allowFontScaling={false}
            className="w-full text-right font-jokker"
          >
            {bio ? bio.length : 0} / 250
          </Text>
        </View>
      </View>
      <View
        className={`${
          isKeyboardVisible ? "absolute -bottom-96" : "absolute bottom-12"
        } w-screen px-4 left-0 flex flex-col items-center justify-between`}
      >
        <DynamicButton
          onPress={() => handleBio()}
          type={"primary"}
          label={t("general.save")}
          size="large"
          rounded={"2xl"}
          position="none"
          textStyles="text-base"
          disabled={!bio}
          isLoading={isLoading}
        />
      </View>
    </SafeAreaComponent>
  );
}
