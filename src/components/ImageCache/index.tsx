import Skeleton, { SkeletonProps } from "@src/components/Skeleton";
import {
  checkImageExistInLocal,
  checkUriIsValid,
  getFileFromDevice,
  getFilenameInCache,
} from "@src/utils/imageHandling";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { Image, ImageResizeMode, ImageStyle, View } from "react-native";
import Animated, { AnimatedStyle } from "react-native-reanimated";

function getPropsSkeleton(
  style: ImageStyle | ImageStyle[],
  skeletonProps?: SkeletonProps
) {
  const flatten = (arr) =>
    [].concat(...arr.map((v) => (Array.isArray(v) ? flatten(v) : v)));
  const propsArray = Array.isArray(style) ? flatten(style) : [style];

  const propsToSkeleton = ["width", "height"];
  let props = {};

  propsArray.forEach((prop) => {
    propsToSkeleton.forEach((propSkeleton) => {
      if (prop[propSkeleton]) {
        props[propSkeleton] = prop[propSkeleton];
      }
    });
  });

  return { ...props, radius: 0, ...skeletonProps };
}

interface ImageCacheProps {
  uri: string;
  isAnimated?: boolean;
  style?: ImageStyle | ImageStyle[];
  resizeMode?: ImageResizeMode;
  sizeProgress?: number;
  checkUpdate?: boolean;
  imageAnimatedStyle?: AnimatedStyle;
  className?: string;
  skeletonProps?: SkeletonProps;
}
export default function ImageCache({
  style,
  isAnimated,
  uri,
  imageAnimatedStyle,
  resizeMode,
  skeletonProps,
}: ImageCacheProps) {
  /**
   * We integrated the **React Query** library to cache image paths on the device.
   * Since calling the `getInfoAsync` function is asynchronous and takes a few milliseconds to complete,
   * caching these paths ensures that subsequent image requests retrieve the images from the cache.
   * This eliminates the need to fetch the images again,
   * improving performance and reducing latency.
   */
  const { data: urlCacheImage, isLoading } = useQuery({
    /**
     * The `queryKey` is an array that uniquely identifies the query.
     * In this case, we use the `image` key and the filename of the image in the cache.
     * This ensures that the query is unique for each image and that the correct image is returned.
     */
    queryKey: ["image", getFilenameInCache(uri)],
    /**
     * The `queryFn` function is called when the query is executed.
     * It retrieves the image from the cache using the `getFileFromCache` function.
     * The `getFileFromCache` function checks if the image exists in the cache and returns the path to the image.
     * If the image does not exist in the cache, the function downloads the image and returns the path to the downloaded image.
     */
    queryFn: () => getFileFromDevice(uri),
    refetchOnMount: false,
    enabled: !!uri && checkUriIsValid(uri),
  });

  useEffect(() => {
    (async () => {
      if (urlCacheImage) {
        checkImageExistInLocal(urlCacheImage);
      }
    })();
  }, [urlCacheImage, uri]);

  if (!uri || !checkUriIsValid(uri)) {
    console.log("ImageCache: uri is invalid", uri);
    return null;
  }

  if (!urlCacheImage || isLoading) {
    return (
      <View style={[style, { overflow: "hidden" }]}>
        <Skeleton {...getPropsSkeleton(style, skeletonProps)} />
      </View>
    );
  }

  if (isAnimated) {
    return (
      <Animated.Image
        source={{ uri: urlCacheImage }}
        style={[style, imageAnimatedStyle]}
        resizeMode={resizeMode}
      />
    );
  }

  return (
    <Image
      style={style}
      source={{ uri: urlCacheImage }}
      resizeMode={resizeMode}
    />
  );
}
