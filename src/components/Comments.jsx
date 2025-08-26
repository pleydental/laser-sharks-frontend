import React from "react";
import Giscus from "@giscus/react";
import { useAuth } from "../context/AuthContext";

export default function Comments({ pageKey }) {
  const { status } = useAuth(); // "in" | "out" | "checking"

  // Only render if user is logged in to your site
  if (status !== "in") return null;

  return (
    <section style={{ marginTop: "2rem" }}>
      <h3>💬 Comments</h3>
      
      <Giscus
  id="comments"
  repo={process.env.REACT_APP_GISCUS_REPO}
  repoId={process.env.REACT_APP_GISCUS_REPO_ID}
  category={process.env.REACT_APP_GISCUS_CATEGORY}
  categoryId={process.env.REACT_APP_GISCUS_CATEGORY_ID}
  mapping="pathname"      // ⬅️ was "specific"
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
