import { MotiSkeletonProps } from "moti/build/skeleton/types";
import { Skeleton as MotiSkeleton } from "moti/skeleton";

const SkeletonCommonProps = {
  colorMode: "light",
  transition: {
    type: "timing",
    duration: 1500,
  },
  backgroundColor: "#D4D4D4",
} as const;

export interface SkeletonProps extends Omit<MotiSkeletonProps, "Gradient"> {}

export default function Skeleton(props: SkeletonProps) {
  return <MotiSkeleton {...SkeletonCommonProps} {...props} />;
}
