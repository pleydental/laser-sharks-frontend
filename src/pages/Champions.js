// src/pages/Champions.js
import React, { useEffect, useRef, useState } from 'react';
import './Champions.css';
import { useNavigate } from 'react-router-dom';
import Comments from "../components/Comments";

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
 * LazyVideo: only sets src when near the viewport; plays when visible.
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
      v.src = src; // attach only when needed
      setLoaded(true);
    }
    if (inView) v.play().catch(() => {});
    else v.pause();
  }, [inView, loaded, src]);

  return (
    <video
      ref={ref}
      className={className}
      muted
      loop
      playsInline
      preload="none"   // lighter on mobile
      poster={poster}
    />
  );
}

const Champions = () => {
  const navigate = useNavigate();

  // Desktop vs mobile + reduced motion
  const [isDesktop, setIsDesktop] = useState(true);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mqDesktop = window.matchMedia('(min-width: 768px)');
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateDesktop = () => setIsDesktop(mqDesktop.matches);
    const updateReduced = () => setReduced(mqReduce.matches);
    updateDesktop(); updateReduced();

    mqDesktop.addEventListener?.('change', updateDesktop) ?? mqDesktop.addListener(updateDesktop);
    mqReduce.addEventListener?.('change', updateReduced) ?? mqReduce.addListener(updateReduced);

    return () => {
      mqDesktop.removeEventListener?.('change', updateDesktop) ?? mqDesktop.removeListener(updateDesktop);
      mqReduce.removeEventListener?.('change', updateReduced) ?? mqReduce.removeListener(updateReduced);
    };
  }, []);

  return (
    <div className="champ-page">
      {/* Spinning Trophy (autoplay only on desktop, respects reduced motion) */}
      <div className="trophy-container">
        <video
          className="trophy-video"
          muted
          loop
          playsInline
          poster="/trophy-poster.jpg"
          autoPlay={isDesktop && !reduced}
          preload={isDesktop ? 'metadata' : 'none'}
        >
          {isDesktop ? (
            <>
              <source src="/trophy-spin-desktop.webm" type="video/webm" />
              <source src="/trophy-spin-desktop.mp4" type="video/mp4" />
            </>
          ) : (
            <>
              <source src="/trophy-spin-mobile.webm" type="video/webm" />
              <source src="/trophy-spin-mobile.mp4" type="video/mp4" />
            </>
          )}
        </video>
      </div>

      <h1>Past Laser Sharks CHAMPS</h1>

      <div className="champ-grid">
        {champions.map((champ, idx) => {
          const isVideo = champ.file.endsWith('.mp4') || champ.file.endsWith('.webm');
          const mod = require(`../assets/champ-banners/${champ.file}`);
          const mediaSrc = mod?.default || mod;

          return (
            <div key={idx} className="champ-card">
              {isVideo ? (
                <LazyVideo src={mediaSrc} className="champ-media" />
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

      <Comments pageKey="champions" />
    </div>
  );
};

export default Champions;
