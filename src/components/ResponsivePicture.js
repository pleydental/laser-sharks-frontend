// src/components/ResponsivePicture.js
import React from "react";

/**
 * <ResponsivePicture /> renders a responsive <picture>:
 *  - WebP sources via srcSetWebp
 *  - PNG fallback via srcPng
 *  - Prevents layout shift with width/height
 */
export default function ResponsivePicture({
  srcSetWebp,
  srcPng,
  alt = "",
  className,
  sizes = "100vw",
  width,
  height,
  loading = "lazy",
  decoding = "async",
  style,
}) {
  return (
    <picture>
      <source type="image/webp" srcSet={srcSetWebp} sizes={sizes} />
      <img
        src={srcPng}
        alt={alt}
        className={className}
        loading={loading}
        decoding={decoding}
        width={width}
        height={height}
        style={style}
      />
    </picture>
  );
}
