import DynamicButton from "@components/DynamicButton/DynamicButton";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import FooterAbsoluteGradient from "@src/components/FooterAbsoluteGradient";
import SafeArea from "@src/components/SafeArea";
import SelectableToggleItem from "@src/components/SelectableToggleItem";
import Skeleton from "@src/components/Skeleton";
import useListSexualOrientation from "@src/hooks/useListSexualOrientation";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

type Props = {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
};

function SexualOrientationScreen({ route, navigation }: Props) {
  const { sexualOrientation: sexualOrientationProps, isEditing } = route.params;

  const [sexualOrientation, setSexualOrientation] = useState<string | number>(
    sexualOrientationProps
  );
  const { data: allSexualOrientations, isLoading } = useListSexualOrientation();

  useEffect(() => {
    setSexualOrientation(sexualOrientationProps);
  }, [sexualOrientationProps]);

  const { t } = useTranslation();

  return (
    <View className="flex-1 relative">
      <SafeArea
        testID="UserGender"
        scrollable
        relative
        addVerticalInsets
        addAdditionalInsetBottom={16}
        addAdditionalInsetTop={32}
        customClasses={`px-4 mb-[80px]`}
      >
        <View className="flex-1">
          <Text
            allowFontScaling={false}
            className="text-[30px] sm-1:text-[36px] text-primary-blue-100 text-left mt-10 font-jokkerl -tracking-widest"
          >
            {t("user-gender.add-more-detail")}
          </Text>
          <Text
            allowFontScaling={false}
            className="text-base text-primary-blue-100 text-left mt-4 mb-6 font-jokkerr"
          >
            {t("user-gender.identity-inclusivity-message")}
          </Text>
          <View style={{ gap: 8 }}>
            {isLoading ? (
              <>
                <Skeleton width={"100%"} height={72} />
                <Skeleton width={"100%"} height={72} />
                <Skeleton width={"100%"} height={72} />
              </>
            ) : (
              allSexualOrientations.items.map((item, index) => (
                <SelectableToggleItem
                  key={index}
                  title={item.name}
                  selected={sexualOrientation === item.name}
                  onSelect={() => setSexualOrientation(item.name)}
                  variantToggle="organic-radio"
                />
              ))
            )}
          </View>
        </View>
      </SafeArea>
      <FooterAbsoluteGradient>
        <View className={`flex px-6`}>
          <DynamicButton
            testID="Landing.Modal.ImDone"
            onPress={() =>
              navigation.navigate("GenderScreen", {
                sexualOrientation,
                isEditing,
              })
            }
            type={"full-transparent-v2"}
            label={t("general.im-done")}
            size="large"
            rounded={"2xl"}
            position="none"
            textStyles="text-base !font-jokkerm"
            textColor="dark"
            loaderColor="#000"
          />
        </View>
      </FooterAbsoluteGradient>
    </View>
  );
}

export default SexualOrientationScreen;
