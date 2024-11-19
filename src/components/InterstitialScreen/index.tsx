import SafeArea from "@src/components/SafeArea";
import { Text, View } from "react-native";
import DynamicButton from "@components/DynamicButton/DynamicButton";

interface InterstitialScreenProps {
  testID: string;
  testIDButton?: string;
  hasBackButton?: boolean;
  isLoading?: boolean;
  text: string;
  onPress?: () => void;
}

function InterstitialScreen({
  testID,
  testIDButton,
  hasBackButton = false,
  isLoading,
  text,
  onPress,
}: InterstitialScreenProps) {
  return (
    <SafeArea
      testID={testID}
      gradientColorStart="#1A2F27"
      gradientColorEnd="#243D33"
      addAdditionalInsetTop={!hasBackButton ? 0 : undefined}
    >
      <View className="flex-1 flex flex-col py-[55px] items-center ">
        <Text className="text-[30px] sm-1:text-[36px] w-full text-action-sheet-light font-jokkerl leading-10 -tracking-widest pb-[40px] sm-1:pb-[89px]">
          {text}
        </Text>
        <DynamicButton
          testID={testIDButton}
          onPress={onPress}
          type={"icon"}
          icon="arrow-right"
          iconColor="#FAF6F4"
          showBgImage
          iconSize={44}
          isLoading={isLoading}
          bgImage="drawn-big"
          bgImageCustomStyles="w-[201px] h-[200px] sm-1:w-[251px] sm-1:h-[250px] stroke-action-sheet-light"
          customStyles="w-[220px] h-[220px] sm-1:w-[270px] sm-1:h-[270px]"
        />
      </View>
    </SafeArea>
  );
}

export default InterstitialScreen;
