// src/pages/Champions.js
import React from 'react';
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
  { year: 2025, winner: 'Could be You', file: 'champ-2025.mp4' }
];

const Champions = () => {
  const navigate = useNavigate();

  return (
    <div className="champ-page">
      {/* Spinning Trophy Video */}
      <div className="trophy-container">
        <video 
          src={trophySpin} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="trophy-video"
        />
      </div>

      <h1>Past Laser Sharks CHAMPS</h1>
      <div className="champ-grid">
        {champions.map((champ, idx) => {
          const isVideo = champ.file.endsWith('.mp4') || champ.file.endsWith('.webm');
          return (
            <div key={idx} className="champ-card">
              {isVideo ? (
                <video
                  src={require(`../assets/champ-banners/${champ.file}`)}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="champ-media"
                />
              ) : (
                <img
                  src={require(`../assets/champ-banners/${champ.file}`)}
                  alt={`${champ.year} Laser Sharks Champ`}
                  className="champ-media"
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
