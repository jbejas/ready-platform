import { generateClient, GraphQLQuery } from "@aws-amplify/api";
import Draggable from "@components/Draggable";
import DynamicButton from "@components/DynamicButton/DynamicButton";
import * as mutations from "@graphql/mutations";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DeletePhotoUserInput, DeletePhotoUserMutation } from "@src/api/index";
import ActionMenuModal from "@src/components/ActionMenuModal";
import OrganicCircleMinusIcon from "@src/components/icons/OrganicCircleMinusIcon";
import OrganicPhotoIcon from "@src/components/icons/OrganicPhotoIcon";
import OrganicUploadIcon from "@src/components/icons/OrganicUploadIcon";
import OrganicXIcon from "@src/components/icons/OrganicXIcon";
import ImageCropModal, {
  ImageCropResultBase64,
} from "@src/components/ImageCropModal";
import useOnSortEndImages from "@src/components/UserPhotoUpload/hooks/useOnSortEndImages";
import Label from "@src/components/UserPhotoUpload/Label";
import RemoveButton from "@src/components/UserPhotoUpload/RemoveButton";
import { setUser } from "@store/auth/authSlice";
import { IconPlus } from "@tabler/icons-react-native";
import { createPhotoUser } from "@utils/amplifyUtils";
import { fetchImageFromUri, moderateImage } from "@utils/imageHandling";
import { getUserById } from "@utils/user";
import { getUrl, remove, uploadData } from "aws-amplify/storage";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Dimensions, Image, Modal, Pressable, Text, View } from "react-native";
import { Modalize } from "react-native-modalize";
import { Portal } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

const MARGIN_ITEMS = 9;

interface RootState {
  auth: {
    user: string;
  };
}
interface ImageObject {
  imageUri?: string;
  imageFileName?: string;
}

export interface ImageState {
  image1?: ImageObject;
  image2?: ImageObject;
  image3?: ImageObject;
  image4?: ImageObject;
  image5?: ImageObject;
  image6?: ImageObject;
}

interface ImageCropSelected {
  uri: string;
  selectedImageNumber: number;
  width: number;
  height: number;
}

interface UserPhotoUploadProps {
  onLoading: (loading: boolean) => void;
  paddingVertical: number;
  onImageUpdate?: (images: ImageState) => void;
}

function UserPhotoUpload({
  onLoading,
  onImageUpdate,
  paddingVertical,
}: UserPhotoUploadProps) {
  const [imageCropSelected, setImageCropSelected] =
    useState<ImageCropSelected>();
  const [images, setImages] = useState<ImageState | null>(null);
  const [isImageLoading, setIsImageLoading] = useState<boolean>(false);
  const [isImageErrorModalVisibile, setIsImageErrorModalVisibile] =
    useState<boolean>(false);
  const [isLoadingRemove, setIsLoadingRemove] = useState<number>();
  const [selectedImageNumber, setSelectedImageNumber] = useState();

  const selectImageModalRef = useRef<Modalize>(null);
  const removeImageModalRef = useRef<Modalize>(null);
  const API = generateClient();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const user = JSON.parse(useSelector((state: RootState) => state.auth.user));

  const { width } = Dimensions.get("screen");

  const {
    isLoading: isLoadingSortImages,
    keysImages,
    onSortEndImages,
    positions,
  } = useOnSortEndImages({ user, images });

  useEffect(() => {
    onLoading(isImageLoading || isLoadingSortImages);
  }, [isImageLoading, isLoadingSortImages, onLoading]);

  useEffect(() => {
    if (images && onImageUpdate) {
      onImageUpdate?.(images);
    }
  }, [images, onImageUpdate]);

  const processUserPhotos = async () => {
    try {
      const userData = await getUserById(user.id);
      const parsedUserPhotos = JSON.parse(userData).photos.items.sort(
        (a, b) => a.photo.sortOrder - b.photo.sortOrder
      );
      if (parsedUserPhotos.length > 0) {
        let loadImages = {};
        const sortedPhotos = parsedUserPhotos.sort(
          (a, b) => a.photo.sortOrder - b.photo.sortOrder
        );
        const imagePromises = sortedPhotos.map(async (photo, index) => {
          const imageURI = await getUrl({ path: `public/${photo.photo.name}` });
          return {
            [`image${index + 1}`]: {
              photoId: photo.id,
              imageUri: imageURI.url,
              imageFileName: photo.photo.name,
            },
          };
        });

        const loadedImages = await Promise.all(imagePromises);
        loadImages = loadedImages.reduce(
          (acc, image) => ({ ...acc, ...image }),
          {}
        );
        setImages(loadImages);
      }
    } catch (error) {
      console.log("processUserPhotos Error: ", error);
    }
  };

  useEffect(() => {
    processUserPhotos();
  }, []);

  const handleImage = async (selectedImageNumber) => {
    try {
      setSelectedImageNumber(selectedImageNumber);

      if (
        images &&
        images[`image${selectedImageNumber}`]?.imageFileName.length > 0
      ) {
        removeImageModalRef.current?.open();
        console.log("aquiii");
        return;
      }

      if (
        images &&
        !images[`image${selectedImageNumber}`]?.imageFileName.length
      ) {
        selectImageModalRef.current?.open();
        return;
      }

      if (!images) {
        selectImageModalRef.current?.open();
        return;
      }
    } catch (error) {
      console.log("handleImage Error:", error);
    }
  };

  const selectImage = async () => {
    try {
      selectImageModalRef.current?.close();
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.1,
        selectionLimit: 1,
      });

      if (!result.canceled) {
        setImageCropSelected({
          uri: result?.assets?.[0].uri,
          selectedImageNumber,
          width: result?.assets?.[0].width,
          height: result?.assets?.[0].height,
        });
      }
    } catch (error) {
      console.log("selectImage Error: ", error);
    }
  };

  const takePhoto = async () => {
    try {
      selectImageModalRef.current?.close();
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.1,
        selectionLimit: 1,
      });

      if (!result.canceled) {
        setImageCropSelected({
          uri: result?.assets?.[0].uri,
          selectedImageNumber,
          width: result?.assets?.[0].width,
          height: result?.assets?.[0].height,
        });
      }
    } catch (error) {
      console.log("takePhoto Error: ", error);
    }
  };

  const removeImage = async () => {
    try {
      removeImageModalRef.current?.close();

      setIsLoadingRemove(selectedImageNumber);
      // Get AWS Image ID
      const awsImageId = images[`image${selectedImageNumber}`].photoId;

      // Delete Image from cloud
      const userDetails: DeletePhotoUserInput = {
        id: awsImageId,
      };
      await API.graphql<GraphQLQuery<DeletePhotoUserMutation>>({
        query: mutations.deletePhotoUser,
        variables: { input: userDetails },
      });

      // If it is image #1 remove it from local storage
      if (selectedImageNumber === 1) {
        await AsyncStorage.removeItem("user-main-image");
        user.photos.items.splice(0, 1);
        dispatch(setUser(user));
      }

      // Remove image from images pool
      const imageToRemove = images[`image${selectedImageNumber}`].imageFileName;
      await remove({
        // path: ({ identityId }) => `public/${identityId}/${imageToRemove}`,
        path: () => `public/${imageToRemove}`,
      });
      setImages({
        ...images,
        [`image${selectedImageNumber}`]: null,
      });
    } catch (error) {
      console.log("Error deleting image", error);
    }
    setIsLoadingRemove(undefined);
  };

  const handleImagePicked = async (pickerResult: ImageCropResultBase64) => {
    try {
      const selectedImageNumber = imageCropSelected.selectedImageNumber;
      setImageCropSelected(undefined);
      setIsImageLoading(true);
      const { mimeType, base64, uri } = pickerResult;

      if (selectedImageNumber === 1) {
        const base64String = `data:${mimeType};base64,${base64}`;
        await AsyncStorage.setItem("user-main-image", base64String);
      }

      // Generate a UUID as the custom key for the file
      const customKey = uuid();
      // Extract the file extension
      const fileExtension = uri.split(".").pop();
      // Remove spaces and special characters from the file name (excluding the file extension), allowing only letters and numbers
      const imageFileName =
        `profile_images/${user.id}/${customKey}.${fileExtension}`.toLowerCase();
      const img = await fetchImageFromUri(uri);
      const result = await uploadProfileImage(`${imageFileName}`, img);
      setIsImageLoading(false);
      if (result === "OK") {
        downloadImage({ uri, imageFileName, selectedImageNumber });
      } else {
        await deleteImageFromS3(imageFileName);
        setIsImageErrorModalVisibile(true);
      }
    } catch (error) {
      setIsImageLoading(false);
      setImageCropSelected(undefined);
      console.log("Image upload failed", error);
    }
  };
  const deleteImageFromS3 = async (imagePath) => {
    // Delete Image from cloud
    await remove({
      path: () => `public/${imagePath}`,
    });
  };

  const downloadImage = async (imageData) => {
    try {
      const { uri: imageUri, imageFileName, selectedImageNumber } = imageData;

      const photosFileNames = [
        {
          sortOrder: selectedImageNumber,
          imageFileName,
          imageUri,
        },
      ];

      const photoId = await createPhotoUser(user.id, photosFileNames);

      setImages({
        ...images,
        [`image${selectedImageNumber}`]: {
          imageUri,
          imageFileName,
          photoId,
        },
      });
      if (selectedImageNumber === 1) {
        setTimeout(async () => {
          const updatedUserData = await getUserById(user.id);
          const updatedUser = JSON.parse(updatedUserData);
          user.photos.items = updatedUser.photos.items.sort(
            (a, b) => a.photo.sortOrder - b.photo.sortOrder
          );
          dispatch(setUser(user));
        }, 1000);
      }
      setIsImageLoading(false);
    } catch (error) {
      console.log("Error downwloading Image", JSON.stringify(error));
      setIsImageLoading(false);
    }
  };

  const uploadProfileImage = async (filename, img) => {
    try {
      const imageStorage = await uploadData({
        // path: ({ identityId }) => `public/${identityId}/${filename}`,
        path: () => `public/${filename}`,
        data: img,
        options: {
          contentType: "image/jpeg",
        },
      }).result;
      const result = await moderateImage(imageStorage.path);
      return result;
    } catch (error) {
      console.log("Error uploading image", error);
      return error.response;
    }
  };
  const widthItem = (width - paddingVertical) / 3 - MARGIN_ITEMS;
  const height = widthItem * 2 + MARGIN_ITEMS;
  return (
    <>
      <View
        style={{ height }}
        className={`w-full flexrelative flex-row flex-wrap`}
      >
        {keysImages.map((item, index) => {
          const key = `image${index + 1}`;
          const isDisabled = !images || !(key in images) || !images[key];
          return (
            <Draggable
              key={item}
              positions={positions}
              id={item}
              onDragEnd={onSortEndImages}
              disabled={isDisabled}
              size={widthItem}
              columns={3}
              marginItems={MARGIN_ITEMS}
            >
              {images && images[key] ? (
                <View
                  className="aspect-square relative flex items-center justify-center ml-[1px] mb-[1px]"
                  style={{ width: widthItem }}
                >
                  <Image
                    source={{
                      uri: String(images[key].imageUri),
                    }}
                    className="object-fit z-10 absolute top-0 left-0 rounded-lg aspect-square"
                    style={{ width: widthItem }}
                  />
                  <Label index={positions.value[index]} />

                  <RemoveButton
                    isLoadingRemove={isLoadingRemove === index + 1}
                    onPress={() => handleImage(index + 1)}
                  />
                </View>
              ) : (
                <Pressable onPress={() => handleImage(index + 1)}>
                  <View
                    className="aspect-square bg-white rounded-lg flex items-center justify-center"
                    style={{
                      width: widthItem,
                    }}
                  >
                    <IconPlus
                      width={25}
                      height={25}
                      color={"#111830"}
                      strokeWidth={1.2}
                    />
                  </View>
                </Pressable>
              )}
            </Draggable>
          );
        })}
      </View>
      <ImageCropModal
        onClose={() => setImageCropSelected(undefined)}
        isOpen={!!imageCropSelected}
        image={imageCropSelected}
        returnBase64
        onCrop={(result: ImageCropResultBase64) => handleImagePicked(result)}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={isImageErrorModalVisibile}
        className="relative"
        onRequestClose={() => setIsImageErrorModalVisibile(false)}
      >
        <View className="w-full h-full p-5 flex items-center justify-start absolute bottom-0 pb-24 rounded-t-xl bg-card shadow-md">
          <Text
            allowFontScaling={false}
            className="text-dark-gray w-full font-bold font-jokkerl text-[32px] mb-6 mt-24"
          >
            {t("my-profile-screen.image-error-title")}
          </Text>
          <Text
            allowFontScaling={false}
            className="text-dark-gray w-full font-bold font-jokkerl text-[16px] mb-6 leading-6"
          >
            {t("my-profile-screen.image-error-subtitle")}
          </Text>
          <View className="absolute w-screen px-6 bottom-12 left-0 flex flex-row items-center justify-end">
            <DynamicButton
              onPress={() => setIsImageErrorModalVisibile(false)}
              type={"primary"}
              label={t("my-profile-screen.image-error-cta")}
              size="large"
              rounded={"2xl"}
              position="none"
              textStyles="text-base"
            />
          </View>
        </View>
      </Modal>
      <Portal>
        <ActionMenuModal
          menus={[
            {
              icon: (
                <OrganicPhotoIcon className="w-6 h-6 fill-primary-blue-100" />
              ),
              label: t("select-image-modal.take-photo"),
              onPress: takePhoto,
            },
            {
              icon: (
                <OrganicUploadIcon className="w-6 h-6 fill-primary-blue-100" />
              ),
              label: t("select-image-modal.upload-photo"),
              onPress: selectImage,
            },
            {
              icon: <OrganicXIcon className="w-6 h-6 fill-primary-blue-100" />,
              label: t("select-image-modal.cancel"),
              onPress: () => selectImageModalRef.current?.close(),
            },
          ]}
          ref={selectImageModalRef}
        />
        <ActionMenuModal
          menus={[
            {
              icon: (
                <OrganicCircleMinusIcon className="w-6 h-6 fill-primary-blue-100" />
              ),
              label: t("select-image-modal.remove-photo"),
              onPress: removeImage,
            },

            {
              icon: <OrganicXIcon className="w-6 h-6 fill-primary-blue-100" />,
              label: t("select-image-modal.cancel"),
              onPress: () => removeImageModalRef.current?.close(),
            },
          ]}
          ref={removeImageModalRef}
        />
      </Portal>
    </>
  );
}
export default UserPhotoUpload;
