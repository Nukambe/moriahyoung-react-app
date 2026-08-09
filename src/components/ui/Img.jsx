import { image } from "../../lib/images";

/**
 * Responsive image. `name` is an optimized-asset slug; `sizes` should describe
 * the rendered width so the browser can pick the cheapest source.
 */
export default function Img({ name, alt, sizes = "100vw", loading = "lazy", ...props }) {
  const { src, srcSet } = image(name);

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading={loading}
      decoding="async"
      {...props}
    />
  );
}
