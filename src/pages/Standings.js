import React, { useEffect } from 'react';
import './Standings.css';

const Standings = () => {
  useEffect(() => {
    const viewport = document.querySelector('meta[name="viewport"]');
    const original = viewport ? viewport.getAttribute('content') : null;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (viewport && isMobile) {
      viewport.setAttribute(
        'content',
        'width=device-width, initial-scale=0.45, minimum-scale=0.3, maximum-scale=2.5'
      );
    }

    return () => {
      if (viewport && original) {
        viewport.setAttribute('content', original);
      }
    };
  }, []);

  return (
    <div className="content-wrapper">
      <h2 style={{ color: '#00e6e6', textAlign: 'center', marginBottom: '1rem' }}>League Standings</h2>
      <div className="standings-outer">
        <div className="standings-scale-box">
          <iframe
            className="standings-frame"
            title="Laser Sharks Standings"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR98GtillaGjARBvQYGBHbS5B66Y8uqI7wtQQwEp1j_kF4nDc1TMRWGJJ0hNrdAvw/pubhtml"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Standings;
