import DynamicButton from "@components/DynamicButton/DynamicButton";
import { BASIC_INFO_TOTAL_STEPS } from "@constants/constants";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import FooterAbsoluteGradient from "@src/components/FooterAbsoluteGradient";
import ProgressBar from "@src/components/ProgressBar";
import SafeArea from "@src/components/SafeArea";
import SelectableToggleItem from "@src/components/SelectableToggleItem";
import Skeleton from "@src/components/Skeleton";
import Toggle from "@src/components/Toggle";
import useCurrentUser from "@src/hooks/useCurrentUser";
import useListChildrenStatuses from "@src/hooks/useListChildrenStatuses";
import { setUser } from "@store/auth/authSlice";
import { useMutation } from "@tanstack/react-query";
import { updateUser } from "@utils/amplifyUtils";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";
type Props = {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
};

export default function KidsScreen({ navigation, route }: Props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { isEditing } = route.params;

  const user = useCurrentUser();

  const [selected, setSelected] = useState<string>();

  const [isChildrenStatusVisible, setIsChildrenStatusVisible] =
    useState<boolean>(false);

  const { mutate: goToPronounsScreen, isPending: isLoading } = useMutation({
    mutationFn: async () => {
      const updatedUser = await updateUser(user.id, {
        childrenStatusID: selected,
        isChildrenStatusVisible,
        onboardingStep: 15,
      });
      await dispatch(setUser(updatedUser));
      navigation.navigate("WantKidsScreen", { isEditing: false });
    },
    onError: (error) => {
      console.log("goToPronounsScreen Error: ", error);
    },
  });

  const { data: allChildrenStatuses, isLoading: isLoadingAllChildrenStatuses } =
    useListChildrenStatuses();

  useEffect(() => {
    setSelected(user.childrenStatusID);
  }, []);

  const progress = (3 / BASIC_INFO_TOTAL_STEPS) * 100;
  const progressBefore = (2 / BASIC_INFO_TOTAL_STEPS) * 100;

  return (
    <View className="flex-1 relative">
      <SafeArea
        testID="Languages"
        relative
        scrollable
        addVerticalInsets
        addAdditionalInsetBottom={16}
        addAdditionalInsetTop={isEditing ? 32 : 13}
        customClasses={`px-4 ${isEditing ? "mb-[120px]" : "mb-[80px]"}`}
      >
        <View className="flex-1">
          {!isEditing && (
            <ProgressBar
              withDelay={500}
              initialProgress={progressBefore}
              progress={progress}
            />
          )}

          <Text
            allowFontScaling={false}
            className="text-[30px] sm-1:text-[36px] text-primary-blue-100 text-left mt-10 mb-6 font-jokkerl -tracking-widest"
          >
            {t("kids-screen.title")}
          </Text>
          <View style={{ gap: 8 }}>
            {isLoadingAllChildrenStatuses ? (
              <>
                <Skeleton width={"100%"} height={72} />
                <Skeleton width={"100%"} height={72} />
                <Skeleton width={"100%"} height={72} />
              </>
            ) : (
              allChildrenStatuses.items.map((item) => (
                <SelectableToggleItem
                  key={item.id}
                  title={item.name}
                  variantToggle="organic-radio"
                  onSelect={() => setSelected(item.name)}
                  selected={selected === item.name}
                />
              ))
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
            onPress={() => setIsChildrenStatusVisible(!isChildrenStatusVisible)}
          >
            <Toggle
              variant="organic-checkbox"
              className="mr-2"
              value={isChildrenStatusVisible}
              onValueChange={(newValue) => setIsChildrenStatusVisible(newValue)}
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
              onPress={goToPronounsScreen}
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
              onPress={goToPronounsScreen}
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
