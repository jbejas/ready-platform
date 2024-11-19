import { useRef, useState } from "react";
import { getUserById } from "@utils/user";
import { useSharedValue } from "react-native-reanimated";
import { updatePhoto } from "@src/utils/amplifyUtils";
import { setUser } from "@store/auth/authSlice";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ImageState } from "@src/components/UserPhotoUpload";

export const USER_PHOTO_UPLOAD_MAX_IMAGES = 6;

const updatePhotoUser = async (keyImage, position, images, parsedUser) => {
  const key = `image${Number(keyImage) + 1}`;
  if (!(key in images) || !images[key]) {
    return;
  }

  const photoId = images[key].photoId;

  const photoDetails = parsedUser.photos.items.find(
    (photo) => photo.id === photoId
  ).photo;

  if (!photoDetails) {
    return;
  }

  photoDetails.sortOrder = position;

  return updatePhoto(photoId, photoDetails);
};

interface UseOnSortEndImagesProps {
  user: any;
  images: ImageState;
}

export default function useOnSortEndImages({
  user,
  images,
}: UseOnSortEndImagesProps) {
  const [isLoading, setIsLoading] = useState(false);
  const refTimeOut = useRef(null);
  const dispatch = useDispatch();

  const keysImages = new Array(USER_PHOTO_UPLOAD_MAX_IMAGES)
    .fill("")
    .map((_, i) => i);

  const positions = useSharedValue(
    Object.assign({}, ...keysImages.map((item) => ({ [item]: item })))
  );

  async function onSortEndImages() {
    if (refTimeOut.current) {
      clearTimeout(refTimeOut.current);
    }

    refTimeOut.current = setTimeout(async () => {
      try {
        setIsLoading(true);
        const userData = await getUserById(user.id);
        const parsedUser = JSON.parse(userData);

        const promises = Object.entries(positions.value).map(
          ([keyImage, position]) =>
            updatePhotoUser(keyImage, position, images, parsedUser)
        );

        await Promise.all(promises);

        AsyncStorage.removeItem("user-main-image");
        const userUpdated = await getUserById(user.id);
        await dispatch(setUser(JSON.parse(userUpdated)));
      } catch (error) {
        console.log("onSortEndImages Error: ", error);
      }
      setIsLoading(false);
    }, 1000);
  }

  return { isLoading, onSortEndImages, keysImages, positions };
}
