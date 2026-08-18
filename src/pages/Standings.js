import React from 'react';
import './Standings.css';

const Standings = () => {
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

