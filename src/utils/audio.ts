import { getUrl } from "aws-amplify/storage";

export const getAudioURL = async (image) => {
  const imageURI = await getUrl({ path: `public/${image}` });
  return imageURI;
};
