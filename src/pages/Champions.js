// src/pages/Champions.js
import React, { useEffect, useRef, useState } from 'react';
import './Champions.css';
import trophySpin from '../assets/trophy-spin-smooth.mp4';
import { useNavigate } from 'react-router-dom';
import Comments from "../components/Comments"; // ⬅️ add

const champions = [
  { year: 2016, winner: 'Paul Ley', file: 'champ-2016.mp4' },
  { year: 2017, winner: 'Ryan Shaw', file: 'champ-2017.mp4' },
  { year: 2018, winner: 'Matt Welsch', file: 'champ-2018.mp4' },
  { year: 2019, winner: 'Ryan Schamerloh', file: 'champ-2019.mp4' },
  { year: 2020, winner: 'Shawn McCool', file: 'champ-2020.mp4' },
  { year: 2021, winner: 'JD Ley', file: 'champ-2021.mp4' },
  { year: 2022, winner: 'Ryan Schamerloh', file: 'champ-2022.mp4' },
  { year: 2023, winner: 'Ryan Shaw', file: 'champ-2023.mp4' },
  { year: 2024, winner: 'Ryan Schamerloh', file: 'champ-2024.mp4' },
  { year: 2025, winner: 'Could be You', file: 'champ-2025.mp4' }
];

/**
 * LazyVideo: renders a <video> that only sets its src once the element is near viewport.
 * - Reduces initial network traffic massively versus eager <video>.
 * - Autoplays/loops/muted when visible; pauses when scrolled away.
 */
function LazyVideo({ src, className = 'champ-media', poster }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { root: null, rootMargin: '300px', threshold: 0.01 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    if (inView && !loaded) {
      v.src = src;
      setLoaded(true);
    }

    if (inView) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [inView, loaded, src]);

  return (
    <video
      ref={ref}
      className={className}
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
    />
  );
}

const Champions = () => {
  const navigate = useNavigate();

  return (
    <div className="champ-page">
      {/* Spinning Trophy Video (hero): keep autoplay but light preload */}
      <div className="trophy-container">
        <video
          src={trophySpin}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="trophy-video"
        />
      </div>

      <h1>Past Laser Sharks CHAMPS</h1>

      <div className="champ-grid">
        {champions.map((champ, idx) => {
          const isVideo = champ.file.endsWith('.mp4') || champ.file.endsWith('.webm');
          const mediaSrc = require(`../assets/champ-banners/${champ.file}`);

          return (
            <div key={idx} className="champ-card">
              {isVideo ? (
                <LazyVideo
                  src={mediaSrc}
                  className="champ-media"
                  // poster={require(`../assets/champ-banners/${champ.year}-poster.jpg`)} // optional
                />
              ) : (
                <img
                  src={mediaSrc}
                  alt={`${champ.year} Laser Sharks Champ`}
                  className="champ-media"
                  loading="lazy"
                  decoding="async"
                />
              )}

              <div className="champ-info">
                <h2>{champ.year}</h2>
                <h3>{champ.winner}</h3>
                <button
                  onClick={() => navigate(`/matchup-recap/${champ.year}`)}
                  style={{
                    marginTop: '10px',
                    padding: '0.6rem 1.2rem',
                    fontSize: '1rem',
                    background: 'linear-gradient(90deg, #00e6e6, #39ff14)',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    color: '#000',
                    textShadow: '0 0 5px #00ffff',
                    boxShadow: '0 0 15px #00ffff',
                  }}
                >
                  Click for Matchup Recap
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 💬 Shit Talk (single thread for Champions page) */}
      <section className="recap-comments" style={{ marginTop: '1.5rem' }}>
        <h3 className="recap-comments__title">💬 Shit Talk</h3>
        <div className="recap-comments__help" style={{ opacity: 0.9, marginBottom: 8 }}>
          <ol>
            <li>
              Make a free{' '}
              <a href="https://github.com/signup" target="_blank" rel="noreferrer">
                GitHub account
              </a>.
            </li>
            <li>Click “Sign in with GitHub” below.</li>
            <li>Approve the prompt.</li>
            <li>Type your masterpiece and hit <strong>Comment</strong>.</li>
          </ol>
        </div>
        <Comments pageKey="champions" />
      </section>
    </div>
  );
};

export default Champions;
