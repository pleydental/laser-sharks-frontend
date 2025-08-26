// src/components/Comments.jsx
import React from "react";
import Giscus from "@giscus/react";
import { useAuth } from "../context/AuthContext";

export default function Comments({
  pageKey,                 // unique key per page/thread (e.g. "draft-2025")
  title = "💬 Shit Talk",  // heading text
  showHelp = true,         // toggle the signup/how-to block
}) {
  const { status } = useAuth(); // "in" | "out" | "checking"
  if (status !== "in") return null;

  // If pageKey is provided, use a specific Giscus thread. Otherwise fall back to pathname.
  const useSpecific = Boolean(pageKey);

  return (
    <section className="recap-comments" style={{ marginTop: "2rem" }}>
      <h3 className="recap-comments__title">{title}</h3>

      {showHelp && (
        <div className="recap-comments__help" style={{ opacity: 0.9, marginBottom: 8 }}>
          <p><strong>How to talk shit (one-time setup):</strong></p>
          <ol>
            <li>
              Make a free{" "}
              <a href="https://github.com/signup" target="_blank" rel="noreferrer">
                GitHub account
              </a>.
            </li>
            <li>Click <strong>“Sign in with GitHub”</strong> below.</li>
            <li>Approve the prompt.</li>
            <li>Type your shit talk and hit <strong>Comment</strong>.</li>
          </ol>
          <p style={{ marginTop: 6 }}>
            Already have GitHub? Just hit <strong>Sign in with GitHub</strong> below.
          </p>
        </div>
      )}

      <Giscus
        id="comments"
        repo={process.env.REACT_APP_GISCUS_REPO}
        repoId={process.env.REACT_APP_GISCUS_REPO_ID}
        category={process.env.REACT_APP_GISCUS_CATEGORY}
        categoryId={process.env.REACT_APP_GISCUS_CATEGORY_ID}
        mapping={useSpecific ? "specific" : "pathname"}
        term={useSpecific ? pageKey : undefined}
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="transparent_dark"
        lang="en"
        loading="lazy"
      />
    </section>
  );
}
