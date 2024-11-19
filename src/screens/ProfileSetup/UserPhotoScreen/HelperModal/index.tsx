import DrawnButtonBigIcon from "@src/components/DrawnButtonBigIcon";
import DynamicButton from "@src/components/DynamicButton/DynamicButton";
import SafeArea from "@src/components/SafeArea";
import { useTranslation } from "react-i18next";
import { Image, Modal, StatusBar, Text, View } from "react-native";

interface HelperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function HelperModal({ isOpen, onClose }: HelperModalProps) {
  const { t } = useTranslation();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      className="relative"
      onRequestClose={onClose}
    >
      <StatusBar hidden={true} />

      <SafeArea
        testID="HelperModal"
        customClasses="px-0 bg-[#FAF6F4]"
        addAdditionalInsetTop={0}
        addTopInsets={false}
        addAdditionalInsetBottom={0}
        scrollable
      >
        <View className="flex-1">
          <View className="items-center">
            <Image
              resizeMode="cover"
              className="w-full h-[258px] object-contain"
              source={require("@assets/images/user-photo-helper-modal.jpeg")}
            />
            <DrawnButtonBigIcon
              className={`absolute w-[268px] h-[284px] stroke-[white] `}
            />
          </View>
          <View className="px-6 pt-8 pb-4">
            <Text className="text-xl font-jokkerl leading-7 text-primary-blue-100">
              {t("user-photo-helper-modal.title")}
            </Text>
            <Text className="mt-2 text-lg font-jokkerr leading-[26px] text-primary-blue-100">
              {t("user-photo-helper-modal.description1")}
            </Text>

            <Text className="mt-8 text-xl font-jokkerl leading-7 text-primary-blue-100">
              {t("user-photo-helper-modal.subtitle1")}
            </Text>
            <Text className="mt-2 text-lg font-jokkerr leading-[26px] text-primary-blue-100">
              {t("user-photo-helper-modal.description2")}
            </Text>

            <Text className="mt-8 text-xl font-jokkerl leading-7 text-primary-blue-100">
              {t("user-photo-helper-modal.subtitle2")}
            </Text>
            <Text className="mt-2 text-lg font-jokkerr leading-[26px] text-primary-blue-100">
              {t("user-photo-helper-modal.description3")}
            </Text>

            <Text className="mt-8 text-xl font-jokkerl leading-7 text-primary-blue-100">
              {t("user-photo-helper-modal.subtitle3")}
            </Text>
            <Text className="mt-2 mb-10 text-lg font-jokkerr leading-[26px] text-primary-blue-100">
              {t("user-photo-helper-modal.description4")}
            </Text>
            <DynamicButton
              position="none"
              onPress={onClose}
              type={"full-transparent-v2"}
              size="medium-large"
              rounded={"2.5xl"}
              textColor="text-primary-blue-100"
              textStyles="text-[17px]"
              label={t("user-photo-helper-modal.all-set")}
            />
          </View>
        </View>
      </SafeArea>
    </Modal>
  );
}

export default HelperModal;
