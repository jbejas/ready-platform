import { View, Text } from "react-native";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";

export default function AccountInformationScreen() {
  return (
    <SafeAreaComponent testID="About" scrollable relative>
      <View className="w-full h-full flex flex-col items-center justify-start pb-[250px]">
        <Text
          allowFontScaling={false}
          className="text-[16px] font-jokkerl -tracking-wide w-full text-left mt-4"
        >
          Ready is a relationship platform that fosters growth as you date, and
          as you build a relationship.
        </Text>
        <Text
          allowFontScaling={false}
          className="text-[16px] font-jokkerl -tracking-wide w-full text-left mt-4"
        >
          Founded on the belief that personal evolution starts with
          introspection, Ready’s reflective practice helps you connect better to
          yourself, and connect better to others.
        </Text>
        <Text
          allowFontScaling={false}
          className="text-[16px] font-jokkerl -tracking-wide w-full text-left mt-4"
        >
          Our goal is to create a space that helps grow your emotional
          intelligence and expand your self-awareness, making everyone more
          ready for meaningful connection and serious relationships.
        </Text>
      </View>
    </SafeAreaComponent>
  );
}
