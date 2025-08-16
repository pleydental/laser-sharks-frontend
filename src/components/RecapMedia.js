import React, { useEffect, useRef } from "react";

// autoplay/pause videos on scroll
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

export function Gif({ src, alt = "", size = "md", align = "center", type }) {
  const isVideo = type === "video" || /\.mp4($|\?)/i.test(src);
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
      <div className={`gif-wrapper ${alignClass}`}>
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
      </div>
    );
  }

  return (
    <div className={`gif-wrapper ${alignClass}`}>
      <img src={src} alt={alt} className={`gif-media ${sizeClass}`} loading="lazy" />
    </div>
  );
}
