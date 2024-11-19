import Alert from "@src/components/Alert";
import CloseButton from "@src/components/CloseButton";
import DynamicButton from "@src/components/DynamicButton/DynamicButton";
import SafeArea from "@src/components/SafeArea";
import { closestAspectRatio, getMimeType } from "@src/utils/imageHandling";
import * as FileSystem from "expo-file-system";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Modal, Text, View } from "react-native";
import { CropView } from "react-native-image-crop-tools";

interface ImagePickerAsset {
  uri: string;
  width: number;
  height: number;
}

export interface ImageCropResultBase64 {
  uri: string;
  base64: string;
  mimeType: string;
}

interface ImageCropModalProps {
  isOpen: boolean;
  image?: ImagePickerAsset;
  returnBase64?: boolean;
  onCrop: (uri: string | ImageCropResultBase64) => void;
  onClose: () => void;
}

function ImageCropModal({
  isOpen,
  image,
  returnBase64 = true,
  onCrop,
  onClose,
}: ImageCropModalProps) {
  const ref = useRef<CropView>(null);
  const { t } = useTranslation();

  const { width, height } = image
    ? closestAspectRatio(image.width, image.height)
    : { width: 1, height: 1 };

  const styleCropView: any =
    width === 1 && height === 1
      ? { width: "100%", aspectRatio: 1 }
      : { width: "100%", aspectRatio: 2 / 3 };

  async function handleCrop(response: { uri: string }) {
    if (returnBase64) {
      const file = await FileSystem.readAsStringAsync(response.uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      const mimeType = getMimeType(response.uri);

      return onCrop({ uri: response.uri, base64: file, mimeType });
    }

    onCrop(response.uri);
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      className="relative"
      onRequestClose={onClose}
    >
      <SafeArea
        testID="image-crop"
        scrollable
        addVerticalInsets
        addAdditionalInsetTop={0}
        isPressable={false}
        addAdditionalInsetBottom={0}
      >
        <View className="flex-1 flex-col gap-4 mb-4 relative">
          <View className="flex-1">
            <View className="mt-16 items-center">
              {image && (
                <CropView
                  style={styleCropView}
                  ref={ref}
                  sourceUrl={image.uri}
                  onImageCrop={handleCrop}
                  keepAspectRatio
                  aspectRatio={{ width, height }}
                />
              )}
            </View>
            <Text
              allowFontScaling={false}
              className="text-primary-blue-100 leading-6 text-base font-jokkerr font-normal mt-1 mb-7"
            >
              {t("image-crop-screen.pinch-and-drag")}
            </Text>
            <Alert text={t("image-crop-screen.alert")} />
          </View>
          <View>
            <DynamicButton
              position="none"
              onPress={() => ref.current?.saveImage(true, 100)}
              type={"full-transparent-v2"}
              size="medium-large"
              rounded={"2.5xl"}
              textColor="text-primary-blue-100"
              textStyles="text-[17px]"
              label={t("general.done")}
            />
          </View>
        </View>
      </SafeArea>

      <CloseButton
        onPress={onClose}
        fixed
        addPaddingTop={8}
        addPaddingRight={24}
      />
    </Modal>
  );
}

export default ImageCropModal;
