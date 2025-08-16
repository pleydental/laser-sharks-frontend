// src/components/Recap.jsx
import React, { useEffect, useRef } from "react";

export default function Recap({ children }) {
  return <div className="recap">{children}</div>;
}

export function H2({ children }) {
  return <h2 className="recap-h2">{children}</h2>;
}

export function P({ children }) {
  return <p className="recap-p">{children}</p>;
}

export function Spacer({ size = 24 }) {
  return <div style={{ height: size }} aria-hidden="true" />;
}

// Internal: play/pause <video> when visible
function useAutoplayWhenVisible() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || el.tagName !== "VIDEO") return;
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
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
 * - Works with .gif (img) or .mp4 (video). Auto-detects by file extension,
 *   or force with type="video" | "image".
 * - Props: src (import or URL), alt, caption, size ('sm'|'md'|'lg'|'full'), align ('left'|'center'|'right')
 */
export function Gif({
  src,
  alt = "",
  caption,
  size = "md",
  align = "center",
  type
}) {
  const isVideo = type === "video" || /\.mp4($|\?)/i.test(String(src || ""));
  const sizeClass =
    size === "sm"
      ? "size-sm"
      : size === "lg"
      ? "size-lg"
      : size === "full"
      ? "size-full"
      : "size-md";
  const alignClass =
    align === "left" ? "align-left" : align === "right" ? "align-right" : "align-center";

  if (isVideo) {
    const ref = useAutoplayWhenVisible();
    return (
      <figure className={`recap-figure ${alignClass}`}>
        <video
          ref={ref}
          className={`recap-media ${sizeClass}`}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={alt}
        >
          <source src={src} type="video/mp4" />
        </video>
        {caption && <figcaption className="recap-caption">{caption}</figcaption>}
      </figure>
    );
  }

  return (
    <figure className={`recap-figure ${alignClass}`}>
      <img src={src} alt={alt} className={`recap-media ${sizeClass}`} loading="lazy" />
      {caption && <figcaption className="recap-caption">{caption}</figcaption>}
    </figure>
  );
}
