import { getUrl } from "aws-amplify/storage";

export const getImageURL = async (image) => {
  const imageURI = await getUrl({ path: `public/${image}` });
  return String(imageURI.url);
};
