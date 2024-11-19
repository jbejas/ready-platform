import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";

import BigButtonWhite from "@assets/images/big-button-white.svg";

// Define the props type for your navigation stack
type Props = {
  navigation: NavigationProp<any>;
};

export default function UserPhoneNumberScreen({ navigation }: Props) {
  const goToFirstReflectionQuestionScreen = () => {
    navigation.navigate("FirstReflectionQuestionScreen");
    // navigation.goBack();
  };

  return (
    <SafeAreaComponent testID="CompleteFirstReflection" relative>
      <View className="w-screen h-screen absolute top-0 left-0">
        <Image
          source={require("@assets/images/firstDailyReflectionBg.png")}
          className="object-contain w-screen h-screen"
        />
      </View>
      <View className="h-full w-full flex flex-col items-center justify-start relative z-20">
        <Text
          allowFontScaling={false}
          className="text-[46px] text-light text-left mb-20 font-jokkerl w-full -tracking-widest"
        >
          Start your daily reflection practice
        </Text>
        <Pressable
          className="mt-16"
          onPress={() => goToFirstReflectionQuestionScreen()}
        >
          <BigButtonWhite width={320} height={320} />
        </Pressable>
      </View>
    </SafeAreaComponent>
  );
}
