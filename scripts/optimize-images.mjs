/**
 * Generates web-sized WebP derivatives from the full-resolution photography in
 * `src/assets/content`. The originals stay in the repo untouched; only the
 * derivatives are shipped to the browser.
 *
 *   npm run images:optimize
 */
import { mkdir, readdir, stat, unlink } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE_DIR = join(root, "src/assets/content");
const OUTPUT_DIR = join(root, "src/assets/optimized");

/** source file -> slug used by `src/lib/images.js` */
const SOURCES = {
  "0463-_Moriah_Young-_Larger_File.jpg": "portrait-main",
  "0468-_Moriah_Young-_Larger_File.jpg": "portrait-comedic",
  "0534-_Moriah_Young-_Larger_File.jpg": "portrait-warm",
  "0572-_Moriah_Young-_Larger_File.jpg": "portrait-editorial",
  "0615-_Moriah_Young-_Larger_File.jpg": "portrait-dramatic",
  "MoriahYoung-HS-Casual.JPG": "headshot-casual",
  "MoriahYoung-HS-Business.JPG": "headshot-business",
  "mystudio.jpg": "studio",
};

const WIDTHS = [800, 1600];
const QUALITY = 78;

await mkdir(OUTPUT_DIR, { recursive: true });

// Clear stale derivatives so renamed sources don't leave orphans behind.
for (const file of await readdir(OUTPUT_DIR)) {
  if (file.endsWith(".webp")) await unlink(join(OUTPUT_DIR, file));
}

let originalBytes = 0;
let outputBytes = 0;

for (const [file, slug] of Object.entries(SOURCES)) {
  const input = join(SOURCE_DIR, file);
  originalBytes += (await stat(input)).size;

  for (const width of WIDTHS) {
    const output = join(OUTPUT_DIR, `${slug}-${width}.webp`);
    await sharp(input)
      .rotate() // honour EXIF orientation
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 5 })
      .toFile(output);
    outputBytes += (await stat(output)).size;
  }

  console.log(`✓ ${slug}`);
}

const mb = (bytes) => `${(bytes / 1024 / 1024).toFixed(1)} MB`;
console.log(
  `\n${Object.keys(SOURCES).length} images · ${mb(originalBytes)} original → ${mb(outputBytes)} across ${WIDTHS.length} widths`
);
