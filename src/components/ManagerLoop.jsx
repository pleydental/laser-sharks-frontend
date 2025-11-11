import React from "react";

/**
 * ManagerLoop
 * Usage: <ManagerLoop slug="paul-ley" size={512} />
 * Renders WebM first (preferred) with MP4 fallback. Muted, looped, autoplay, 'contain' framing.
 */
export default function ManagerLoop({ slug, size = 256, className = "" }) {
  const base = `/src/assets/manager-loops/${size}/${slug}-${size}`;
  // Vite & CRA both resolve imported static assets in /src at build; this explicit path matches your outputs.

  return (
    <video
      className={className}
      width={size}
      height={size}
      playsInline
      muted
      loop
      autoPlay
      // 'contain' framing + black bars as needed
      style={{
        width: `${size}px`,
        height: `${size}px`,
        objectFit: "contain",
        background: "black",
        borderRadius: "50%", // comment out if you don't want the circle
        display: "block",
        margin: "0 auto"
      }}
    >
      <source src={`${base}.webm`} type="video/webm" />
      <source src={`${base}.mp4`} type="video/mp4" />
      {/* If both fail */}
      Sorry, your browser doesn’t support embedded videos.
    </video>
  );
}
