// src/components/Comments.jsx
import React, { useEffect, useRef, useState } from "react";
import Giscus from "@giscus/react";
import { useAuth } from "../context/AuthContext";

export default function Comments({ pageKey }) {
  const { status } = useAuth(); // "in" | "out" | "checking"
  const wrapRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
  }, []);

  useEffect(() => {
    if (status !== "in" || isMobile || ready) return;
    const el = wrapRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setReady(true); io.disconnect(); } },
      { rootMargin: "400px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [status, isMobile, ready]);

  if (status !== "in") return null;

  return (
    <section ref={wrapRef} style={{ marginTop: "2rem" }}>
      <h3>💬 Shit Talk</h3>

      {/* On mobile, don’t load the iframe until user taps */}
      {isMobile && !ready && (
        <button
          onClick={() => setReady(true)}
          style={{
            marginTop: 8,
            padding: "0.6rem 1rem",
            fontWeight: 800,
            borderRadius: 8,
            border: "2px solid rgba(0,255,120,0.85)",
            background: "rgba(0,0,0,0.55)",
            color: "#fff",
            cursor: "pointer"
          }}
        >
          Load Shit Talk
        </button>
      )}

      {ready && (
        <Giscus
          id="comments"
          repo={process.env.REACT_APP_GISCUS_REPO}
          repoId={process.env.REACT_APP_GISCUS_REPO_ID}
          category={process.env.REACT_APP_GISCUS_CATEGORY}
          categoryId={process.env.REACT_APP_GISCUS_CATEGORY_ID}
          mapping="specific"
          term={pageKey || window.location.pathname}
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="bottom"
          theme="transparent_dark"
          lang="en"
          loading="lazy"
        />
      )}
    </section>
  );
}
