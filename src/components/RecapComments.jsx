// src/components/RecapComments.jsx
import React from "react";
import Comments from "./Comments"; // you already have this working

export default function RecapComments() {
  return (
    <section className="recap-comments">
      <h3 className="recap-comments__title">💬 Wanna Talk Shit? Do this:</h3>
      <div className="recap-comments__help">
        <p><strong>How To Talk Shit (only need to do once, quit bitching):</strong></p>
        <ol>
          <li>Make a free <a href="https://github.com/signup" target="_blank" rel="noreferrer">GitHub account</a> (takes ~1 minute).</li>
          <li>Scroll to the comment box below and click <strong>“Sign in with GitHub”</strong>.</li>
          <li>Approve the prompt (authorizes comments for this site).</li>
          <li>Type your shit talk and hit <strong>Comment</strong>. You’re in.</li>
        </ol>
        <p style={{opacity:.9, marginTop:8}}>
          Already have GitHub? Just hit <strong>Sign in with GitHub</strong> in the box below.
        </p>
      </div>

      {/* Giscus is already configured to use mapping="pathname" in your Comments component,
          so each page/route gets its own thread automatically. */}
      <Comments />
    </section>
  );
}
