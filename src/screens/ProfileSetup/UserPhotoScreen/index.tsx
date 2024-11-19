import DynamicButton from "@components/DynamicButton/DynamicButton";
import { NavigationProp } from "@react-navigation/native";
import Alert from "@src/components/Alert";
import FooterAbsoluteGradient from "@src/components/FooterAbsoluteGradient";
import LoadingFullPage from "@src/components/LoadingFullPage";
import ProgressBar from "@src/components/ProgressBar";
import SafeArea from "@src/components/SafeArea";
import UserPhotoUpload, { ImageState } from "@src/components/UserPhotoUpload";
import { USER_PHOTO_UPLOAD_MAX_IMAGES } from "@src/components/UserPhotoUpload/hooks/useOnSortEndImages";
import HelperModal from "@src/screens/ProfileSetup/UserPhotoScreen/HelperModal";
import { setUser } from "@store/auth/authSlice";
import { IconPencil } from "@tabler/icons-react-native";
import { updateUser } from "@utils/amplifyUtils";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  navigation: NavigationProp<any>;
};

interface RootState {
  auth: {
    user: string;
  };
}

function UserPhotoScreen({ navigation }: Props) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingImage, setIsLoadingImage] = useState(false);
  const [images, setImages] = useState<ImageState | null>(null);
  const [isOpenHelperModal, setIsOpenHelperModal] = useState(false);

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const user = JSON.parse(useSelector((state: RootState) => state.auth.user));

  const imagesFilled = images
    ? Object.values(images).filter((image) => image !== null)
    : [];

  useEffect(() => {
    if (images) {
      setProgress((imagesFilled.length / USER_PHOTO_UPLOAD_MAX_IMAGES) * 100);
    }
  }, [images]);

  const onNextStep = async () => {
    try {
      setIsLoading(true);
      const updatedUser = await updateUser(user.id, {
        onboardingStep: 12,
      });
      await dispatch(setUser(updatedUser));
      navigation.navigate("MyProfileScreen", {
        isOnboarding: true,
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("goToMyProfileScreen error", error);
    }
  };

  return (
    <>
      <View className="relative flex-1">
        {isLoadingImage && <LoadingFullPage />}
        <SafeArea
          testID="UserEmail"
          scrollable
          relative
          addVerticalInsets
          addAdditionalInsetBottom={16}
          addAdditionalInsetTop={13}
          customClasses="px-4 mb-[80px]"
        >
          <View className="flex-1">
            <ProgressBar initialProgress={0} progress={progress} />
            <Text
              allowFontScaling={false}
              className="text-3xl text-primary-blue-100 font-jokkerl my-10 px-2 leading-9 -tracking-widest"
            >
              {t("user-photo-screen.title")}
            </Text>
            <UserPhotoUpload
              paddingVertical={32}
              onLoading={setIsLoadingImage}
              onImageUpdate={setImages}
            />
            <View className="px-2">
              <View className="flex flex-row gap-2 items-center pt-4 pb-6">
                <IconPencil size={13} color="#282828" />
                <Text
                  allowFontScaling={false}
                  className="text-primary-blue-100 text-base font-jokkerr"
                >
                  {t("user-photo-screen.hold-and-drag")}
                </Text>
              </View>
              <Alert
                text={
                  <Alert.Text>
                    {t("user-photo-screen.alert")}{" "}
                    <TouchableWithoutFeedback
                      onPress={() => setIsOpenHelperModal(true)}
                    >
                      <Text className="underline">
                        {t("user-photo-screen.keep-these-tips")}
                      </Text>
                    </TouchableWithoutFeedback>{" "}
                    <Alert.Text>{t("user-photo-screen.in-mind")}</Alert.Text>
                  </Alert.Text>
                }
              />
            </View>
          </View>
        </SafeArea>
        <FooterAbsoluteGradient>
          <View className="items-end px-6">
            <DynamicButton
              onPress={onNextStep}
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
              disabled={imagesFilled.length < 4}
              isLoading={isLoading}
            />
          </View>
        </FooterAbsoluteGradient>
      </View>
      <HelperModal
        isOpen={isOpenHelperModal}
        onClose={() => setIsOpenHelperModal(false)}
      />
    </>
  );
}

export default UserPhotoScreen;
