import { mkdir, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const INPUT_DIR = process.argv[2];

const VARIANTS = [
  { key: "thumb", width: 480, quality: 82 },
  { key: "medium", width: 900, quality: 86 },
  { key: "large", width: 1600, quality: 90 }
];

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function toPublicPath(filePath) {
  return `/${path.relative(PUBLIC_DIR, filePath).replaceAll(path.sep, "/")}`;
}

async function main() {
  if (!INPUT_DIR) {
    throw new Error("Usage: npm run images:optimize -- public/images/invitation/long-phung-reu");
  }

  const sourceDir = path.resolve(process.cwd(), INPUT_DIR);
  const sourceStat = await stat(sourceDir);

  if (!sourceStat.isDirectory()) {
    throw new Error(`Image source must be a directory: ${sourceDir}`);
  }

  const outputDir = path.join(sourceDir, "optimized");
  await mkdir(outputDir, { recursive: true });

  const files = await readdir(sourceDir);
  const manifest = {};

  for (const fileName of files) {
    const extension = path.extname(fileName).toLowerCase();
    if (!IMAGE_EXTENSIONS.has(extension)) continue;

    const inputPath = path.join(sourceDir, fileName);
    const image = sharp(inputPath).rotate();
    const metadata = await image.metadata();
    const baseName = path.basename(fileName, extension);
    const variants = {};

    for (const variant of VARIANTS) {
      const outputName = `${baseName}-${variant.key}.webp`;
      const outputPath = path.join(outputDir, outputName);

      await sharp(inputPath)
        .rotate()
        .resize({
          width: variant.width,
          withoutEnlargement: true
        })
        .webp({
          quality: variant.quality,
          effort: 5
        })
        .toFile(outputPath);

      const outputMetadata = await sharp(outputPath).metadata();
      variants[variant.key] = {
        src: toPublicPath(outputPath),
        width: outputMetadata.width,
        height: outputMetadata.height
      };
    }

    manifest[toPublicPath(inputPath)] = {
      src: toPublicPath(inputPath),
      width: metadata.width,
      height: metadata.height,
      format: metadata.format,
      variants
    };
  }

  await writeFile(path.join(outputDir, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  console.log(`Optimized ${Object.keys(manifest).length} images into ${toPublicPath(outputDir)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
