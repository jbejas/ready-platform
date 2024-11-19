import React, { useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import DynamicButton from "@components/DynamicButton/DynamicButton";

// Amplify Graph Queries
import { signIn, getCurrentUser, signOut } from "aws-amplify/auth";
import * as customQueries from "@gcq/index";
import { generateClient, GraphQLQuery } from "@aws-amplify/api";
import { GetUserQuery } from "@src/api/index";

// Redux
import { useSelector } from "react-redux";
import { setUser, setUserSession } from "@store/auth/authSlice";
import { setIsUserOnboarded } from "@store/signUp/signUpSlice";

// Set Redux Dispatch
import { useDispatch } from "react-redux";

// Localization
import { useTranslation } from "react-i18next";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

// Define the state structure
interface RootState {
  keyboard: {
    isKeyboardVisible: boolean;
  };
}

export default function UserEmailScreen({ navigation }: Props) {
  // Mount GraphQL client
  const client = generateClient();

  // Mount Redux dispatch
  const dispatch = useDispatch();

  // Mount Localization
  const { t } = useTranslation();

  const [email, setEmail] = useState<string>(""); // Initialize email string
  const [password, setPassword] = useState<string>(""); // Initialize email string
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isLoginError, setIsLoginError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Get keyboard state
  const isKeyboardVisible = useSelector(
    (state: RootState) => state.keyboard.isKeyboardVisible,
  );

  // Validate email to enable continue button.
  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && emailRegex.test(email)) {
      setIsEmailValid(true);
      return;
    }
    setIsEmailValid(false);
  }, [email]);

  const handleUserSignIn = async () => {
    try {
      setIsLoading(true);
      await signOut();
      const username = email;
      const { isSignedIn, nextStep } = await signIn({
        username,
        password,
        options: {
          authFlowType: "USER_PASSWORD_AUTH",
        },
      });
      const currentUserInfo = await getCurrentUser();
      const { userId } = currentUserInfo;
      const currentUser = await client.graphql<GraphQLQuery<GetUserQuery>>({
        query: customQueries.getUser,
        variables: {
          id: userId,
        },
      });
      await dispatch(setUser(currentUser.data.getUser));
      await dispatch(setUserSession(JSON.stringify(currentUser)));
      dispatch(setIsUserOnboarded(true));
    } catch (error) {
      console.log("handleUserSignIn error: ", JSON.stringify(error));
      setIsLoading(false);
      setIsLoginError(true);
    }
  };

  return (
    <SafeAreaComponent testID="SignInEmail" isPressable relative>
      <View className="h-full w-full relative">
        <Text
          allowFontScaling={false}
          className="text-4xl font-bold text-dark text-center my-16 font-jokkerl"
        >
          {t("sign-in-email.title")}
        </Text>
        <View className="w-full flex flex-row items-center justify-center bg-white px-4 py-3 rounded-xl border mb-4 border-slate7">
          <TextInput
            onChangeText={setEmail}
            className="w-full text-xl h-10 -mt-2"
            value={email}
            placeholder={t("sign-in-email.email")}
            autoCapitalize="none"
            keyboardType="email-address"
            autoCorrect={false}
          />
        </View>
        <View className="w-full flex flex-row items-center justify-center bg-white px-4 py-3 rounded-xl border mb-4 border-slate7">
          <TextInput
            onChangeText={setPassword}
            className="w-full text-xl h-10 -mt-2"
            value={password}
            placeholder={t("sign-in-email.password")}
            autoCapitalize="none"
            keyboardType="email-address"
            secureTextEntry={true}
            autoCorrect={false}
          />
        </View>
        <View className="w-full flex flex-col items-center justify-between px-2">
          {isLoginError && (
            <>
              <Text
                allowFontScaling={false}
                className="w-full text-center text-base text-red"
              >
                {t("sign-in-email.invalid-login")}
              </Text>
              <Text
                allowFontScaling={false}
                className="w-full text-center text-base text-red"
              >
                {t("sign-in-email.try-again")}
              </Text>
            </>
          )}
        </View>
        <View
          className={`${
            isKeyboardVisible ? "relative -bottom-96" : "absolute bottom-0"
          } w-full px-4 left-0 flex flex-col items-center justify-between`}
        >
          <DynamicButton
            onPress={handleUserSignIn}
            type={"primary"}
            label={t("general.continue")}
            size="large"
            iconPosition="right"
            icon={"arrow-right"}
            iconSize={30}
            rounded="full"
            position="none"
            textStyles="text-base"
            disabled={!isEmailValid || password.trim() === "" || isLoading}
            isLoading={isLoading}
          />
        </View>
      </View>
    </SafeAreaComponent>
  );
}
