/**
 * Resolves the WebP derivatives produced by `npm run images:optimize` into
 * `{ src, srcSet }` pairs so every <img> ships a responsive source set.
 */
const files = import.meta.glob("../assets/optimized/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
});

const byName = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [path.split("/").pop(), url])
);

const WIDTHS = [800, 1600];

export function image(slug) {
  const available = WIDTHS.filter((width) => byName[`${slug}-${width}.webp`]);

  if (available.length === 0) {
    throw new Error(
      `No optimized image for "${slug}". Run \`npm run images:optimize\`.`
    );
  }

  const largest = available.at(-1);

  return {
    src: byName[`${slug}-${largest}.webp`],
    srcSet: available
      .map((width) => `${byName[`${slug}-${width}.webp`]} ${width}w`)
      .join(", "),
  };
}
