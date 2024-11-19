import * as queries from "@graphql/queries";
import { generateClient, GraphQLQuery } from "@aws-amplify/api";
import {
  ModerateImageQueryVariables,
  ModerateImageQuery,
} from "@src/api/index";
import axios from "axios";
import * as FileSystem from "expo-file-system";
import { queryClient } from "@src/providers/QueryClientProvider";

export const BASE_DIR = `${FileSystem.cacheDirectory}image-cache/`;
const RETRY_CACHE = 3;

const API = generateClient();

// Fetch Image as Blob
export const fetchImageFromUri = async (uri) => {
  const response = await fetch(uri);
  const blob = await response.blob();
  return blob;
};

export const moderateImage = async (imagePath) => {
  try {
    const imageDetails: ModerateImageQueryVariables = {
      imagePath,
    };
    console.log("imageDetails", imageDetails);
    const {
      data: { moderateImage },
    } = await API.graphql<GraphQLQuery<ModerateImageQuery>>({
      query: queries.moderateImage,
      variables: imageDetails,
    });
    console.log("ModerateImage", moderateImage);
    return moderateImage;
  } catch (error) {
    console.log("moderateImage error", error);
  }
};

export const getFileFromDevice = async (
  uri: string,
  retry = 0
): Promise<string> => {
  try {
    /**
     * Check if the image exists in the device.
     * If it does, return the path from the device.
     */
    const image = await fileExistsInDevice(uri);

    if (image.exists) {
      // returns the path from device
      return image.uri;
    } else {
      const resultDownload = await downloadFileToDevice(uri);

      if (resultDownload) {
        return resultDownload.uri;
      }

      throw new Error(
        `getFileFromCache error - downloadFileToDevice URI: ${uri}`
      );
    }
  } catch (e) {
    if (retry < RETRY_CACHE) {
      return getFileFromDevice(uri, retry + 1);
    }

    console.error("getFileFromCache error", e, uri);

    return uri;
  }
};

export const downloadFileToDevice = async (uri: string) => {
  const downloadResumable = FileSystem.createDownloadResumable(
    uri,
    getDirFileInDevice(uri),
    {}
  );

  return downloadResumable.downloadAsync();
};

const createFoldersInDevice = async (uri: string) => {
  await FileSystem.makeDirectoryAsync(BASE_DIR, { intermediates: true });
  await FileSystem.makeDirectoryAsync(getFolderImageWithPrefix(uri), {
    intermediates: true,
  });
};

export const fileExistsInDevice = async (uri: string) => {
  // creates directory if it doesn't exist
  await createFoldersInDevice(uri);

  // get image from storage
  return FileSystem.getInfoAsync(getDirFileInDevice(uri));
};

/**
 * Get the filename from the URI.
 * @param uri
 * @example
 * getFilenameInCache("https://example.com/image.jpg") -> image.jpg
 * getFilenameInCache("https://example.com/image_cache/image.jpg") -> image.jpg
 */
export const getFilenameInCache = (uri: string) => {
  try {
    if (!uri) return "";

    const parsedUrl = new URL(uri);

    const pathSegments = parsedUrl.pathname.split("/");

    return pathSegments[pathSegments.length - 1];
  } catch (e) {
    console.error(`getNameFileInCache error URI: `, uri, e);
    return uri;
  }
};

export const checkUriIsValid = (uri: string) => {
  return uri && (uri.includes("https") || uri.includes("http"));
};

export const removeImageFromReactQuery = async (imageNameLocal: string) => {
  await queryClient.resetQueries({
    queryKey: ["image", imageNameLocal],
  });
};

export const getFolderPrefix = (uri: string) => {
  if (!uri) return "";

  const parsedUrl = new URL(uri);

  const pathSegments = parsedUrl.pathname.split("/");

  return pathSegments[pathSegments.length - 2];
};

export const getFolderImageWithPrefix = (uri: string) => {
  const folderPrefix = getFolderPrefix(uri);

  return `${BASE_DIR}${folderPrefix}/`;
};

/**
 * Get the directory and filename of the image in the device.
 */
export const getDirFileInDevice = (uri: string) => {
  const fileName = getFilenameInCache(uri);

  return `${getFolderImageWithPrefix(uri)}${fileName}`;
};

const convertToMb = (size: number) => size / 1024 / 1024;

export interface FileCache {
  file: string;
  folder: string;
  modificationTime: number;
  size: number;
}

export const clearOldCache = async () => {
  const cacheDirectory = await FileSystem.getInfoAsync(BASE_DIR);
  if (!cacheDirectory.exists) {
    await FileSystem.makeDirectoryAsync(BASE_DIR, {
      intermediates: true,
    });
  }

  const batchSize = 10;
  const limitMb = 500;

  const folders = await FileSystem.readDirectoryAsync(BASE_DIR);
  let results: FileCache[] = [];

  // Loop through each folder found in the BASE_DIR
  for (const folder of folders) {
    const folderPath = `${BASE_DIR}${folder}/`;
    const folderInfo = await FileSystem.getInfoAsync(folderPath);

    if (!folderInfo.isDirectory) {
      continue; // Skip if it's not a directory
    }

    const cachedFiles = await FileSystem.readDirectoryAsync(folderPath);
    let position = 0;

    if (cachedFiles.length > 0) {
      while (position < cachedFiles.length) {
        const itemsForBatch = cachedFiles.slice(position, position + batchSize);
        results = [
          ...results,
          ...(
            await Promise.all(
              itemsForBatch.map(async (file) => {
                const info = await FileSystem.getInfoAsync(
                  `${folderPath}${file}`
                );
                if (!info.exists) return null;
                return {
                  file,
                  folder,
                  modificationTime: info.modificationTime,
                  size: info.size,
                } as FileCache;
              })
            )
          ).filter(Boolean), // Filter out null values
        ];
        position += batchSize;
      }
    }
  }

  const sorted = results.sort(
    (a, b) => a.modificationTime - b.modificationTime
  );

  let totalSize: number = convertToMb(
    sorted
      .map((file) => file.size)
      .reduce((total, current) => total + current, 0)
  );

  // Clear old files if the size exceeds the limit
  if (totalSize > limitMb) {
    for (const file of sorted) {
      if (totalSize > limitMb) {
        await FileSystem.deleteAsync(`${BASE_DIR}${file.folder}/${file.file}`, {
          idempotent: true,
        });
        removeImageFromReactQuery(file.file);
        totalSize -= convertToMb(file.size);
      }
    }
  }
};

/**
 * Check if the image exists in the device.
 * since the cache from react query might be outdated or inexistent.
 * if is outdated or inexistent, remove from react query cache.
 * then the query is going to fetch the image again.
 */
export const checkImageExistInLocal = async (
  imageLocalPath: string
): Promise<string | null> => {
  try {
    const info = await FileSystem.getInfoAsync(imageLocalPath);

    if (info.exists) {
      return;
    }
  } catch (error) {
    console.error(
      "error checkImageExistInLocal imageLocalPath:",
      imageLocalPath,
      error
    );
  }

  removeImageFromReactQuery(getFilenameInCache(imageLocalPath));
};

export const getMimeType = (uri: string) => {
  const extension = uri.split(".").pop().toLowerCase();
  switch (extension) {
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    case "png":
      return "image/png";
    case "gif":
      return "image/gif";
    default:
      return "application/octet-stream";
  }
};

/**
 * Finds the closest aspect ratio to the given width and height.
 * @param {number} width - The width of the image.
 * @param {number} height - The height of the image.
 * @returns {{width: number, height: number}} The closest aspect ratio.
 */
export function closestAspectRatio(
  width: number,
  height: number
): { width: number; height: number } {
  // Calculate the ratio between width and height
  const ratio: number = width / height;

  // Define the aspect ratios 1:1 and 2:3
  const aspectRatios: {
    dimensions: { width: number; height: number };
    value: number;
  }[] = [
    { dimensions: { width: 1, height: 1 }, value: 1 / 1 },
    { dimensions: { width: 2, height: 3 }, value: 2 / 3 },
  ];

  // Find the aspect ratio that is closest to the calculated ratio
  let closest = aspectRatios[0];
  let minDifference: number = Math.abs(ratio - closest.value);

  for (let i = 1; i < aspectRatios.length; i++) {
    const difference: number = Math.abs(ratio - aspectRatios[i].value);
    if (difference < minDifference) {
      closest = aspectRatios[i];
      minDifference = difference;
    }
  }

  return closest.dimensions;
}
