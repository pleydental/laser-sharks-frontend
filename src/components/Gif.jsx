// src/components/Gif.jsx
import React, { useEffect, useRef } from "react";

// Auto play/pause <video> when it's on screen (no sound)
function useAutoplayWhenVisible() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || el.tagName !== "VIDEO") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.play().catch(() => {});
          } else {
            el.pause();
          }
        });
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

/**
 * <Gif />
 * Drop it between <p> tags anywhere.
 *
 * Props:
 * - src: string (import or URL)
 * - alt: string (for accessibility)
 * - size: "sm" | "md" | "lg" | "full" (default "md")
 * - align: "left" | "center" | "right" (default "center")
 * - type: "image" | "video" (auto-detects .mp4 if omitted)
 */
export default function Gif({
  src,
  alt = "",
  size = "md",
  align = "center",
  type
}) {
  const isVideo = type === "video" || /\.mp4($|\?)/i.test(String(src || ""));

  const sizeClass =
    size === "sm" ? "gif-sm" :
    size === "lg" ? "gif-lg" :
    size === "full" ? "gif-full" : "gif-md";

  const alignClass =
    align === "left" ? "gif-left" :
    align === "right" ? "gif-right" : "gif-center";

  if (isVideo) {
    const ref = useAutoplayWhenVisible();
    return (
      <figure className={`gif-figure ${alignClass}`}>
        <video
          ref={ref}
          className={`gif-media ${sizeClass}`}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={alt}
        >
          <source src={src} type="video/mp4" />
        </video>
      </figure>
    );
  }

  return (
    <figure className={`gif-figure ${alignClass}`}>
      <img
        src={src}
        alt={alt}
        className={`gif-media ${sizeClass}`}
        loading="lazy"
      />
    </figure>
  );
}
