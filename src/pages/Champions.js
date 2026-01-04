// src/pages/Champions.js
import React, { useEffect, useRef, useState } from 'react';
import './Champions.css';
import trophySpin from '../assets/trophy-spin-smooth.mp4';
import { useNavigate } from 'react-router-dom';

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
  { year: 2025, winner: 'Aaron Fischer', file: 'champ-2025.mp4' }
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
      v.src = src;           // attach only when needed
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
      preload="none"   // lighter on mobile
      poster={poster}
    />
  );
}

const Champions = () => {
  const navigate = useNavigate();
  const trophyRef = useRef(null);

  // Try to start playback in a few different lifecycle moments (iOS-friendly)
  useEffect(() => {
    const v = trophyRef.current;
    if (!v) return;

    const tryPlay = () => v.play().catch(() => { /* iOS may require a tap */ });

    // 1) On mount
    tryPlay();

    // 2) When the video has enough data
    const onLoaded = () => tryPlay();
    v.addEventListener('loadeddata', onLoaded);

    // 3) When page becomes visible again
    const onVis = () => {
      if (document.visibilityState === 'visible') tryPlay();
    };
    document.addEventListener('visibilitychange', onVis);

    return () => {
      v.removeEventListener('loadeddata', onLoaded);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  // 4) As a last resort, first user tap on the trophy starts it
  const handleTrophyTap = () => {
    const v = trophyRef.current;
    if (v && v.paused) v.play().catch(() => {});
  };

  return (
    <div className="champ-page">
      {/* Spinning Trophy — autoplay everywhere (muted + playsInline) */}
      <div className="trophy-container">
        <video
          ref={trophyRef}
          src={trophySpin}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="trophy-video"
          onClick={handleTrophyTap}
          onTouchStart={handleTrophyTap}
          disablePictureInPicture
          controls={false}
        />
      </div>

      <h1>Past Laser Sharks CHAMPS</h1>

      <div className="champ-grid">
        {champions.map((champ, idx) => {
          const isVideo = /\.(mp4|webm)$/i.test(champ.file);
          const mediaSrc = `${process.env.PUBLIC_URL}/champ-banners/${champ.file}`;

          return (
            <div key={idx} className="champ-card">
              {isVideo ? (
                <LazyVideo
                  src={mediaSrc}
                  className="champ-media"
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
    </div>
  );
};

export default Champions;
