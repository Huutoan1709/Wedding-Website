type WeddingImageVariant = "thumb" | "medium" | "large";

const LOCAL_IMAGE_PATTERN = /^(\/images\/.+)\/([^/.]+)\.(jpe?g|png|webp)$/i;

export function getOptimizedWeddingImage(src: string, variant: WeddingImageVariant) {
  const match = src.match(LOCAL_IMAGE_PATTERN);

  if (!match || src.includes("/optimized/")) {
    return src;
  }

  const [, directory, fileName] = match;
  return `${directory}/optimized/${fileName}-${variant}.webp`;
}
