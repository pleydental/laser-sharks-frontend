import React from 'react';
import './ChampBanner.css';

const ChampBanner = ({ year, winner, file }) => {
  const isVideo = file.endsWith('.mp4') || file.endsWith('.webm');

  return (
    <div className="champ-banner-wrapper">
      <div className="champ-banner">
        {isVideo ? (
          <video
            src={require(`../assets/${file}`)}
            autoPlay
            loop
            muted
            playsInline
            className="champ-banner-media"
          />
        ) : (
          <img
            src={require(`../assets/${file}`)}
            alt={`${year} Laser Sharks Champ`}
            className="champ-banner-media"
          />
        )}
        <div className="champ-banner-overlay">
          <h2>{year}</h2>
          <h3>{winner}</h3>
        </div>
      </div>
    </div>
  );
};

export default ChampBanner;
