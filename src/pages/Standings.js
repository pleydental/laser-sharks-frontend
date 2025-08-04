import React from 'react';

const Standings = () => {
  return (
    <div className="content-wrapper">
      <h2 style={{ color: '#00e6e6', textAlign: 'center', marginBottom: '1rem' }}>League Standings</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          title="Laser Sharks Standings"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR98GtillaGjARBvQYGBHbS5B66Y8uqI7wtQQwEp1j_kF4nDc1TMRWGJJ0hNrdAvw/pubhtml?gid=643647835&single=true"
          width="1000"
          height="850"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Standings;

