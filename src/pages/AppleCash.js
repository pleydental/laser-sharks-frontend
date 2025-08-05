import React from 'react';
import { Link } from 'react-router-dom';
import sharkImage from '../assets/bg-shark.png';

const AppleCash = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem', color: 'white' }}>
      <h1>🍎 Apple Cash Payment</h1>
      <p style={{ fontSize: '1.2rem', margin: '1rem auto', maxWidth: '600px' }}>
        I only know one person who knows how Apple Cash works, his name starts with "Mc" 
        and ends with "Cool." There is no link for Apple Cash to pay me because 
        Steve Jobs is dead, if he were alive, there would be a link. 
        Elon Musk would agree with me.
      </p>

      <Link to="/" style={{ textDecoration: 'none' }}>
        <button
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            marginTop: '2rem',
          }}
        >
          <img
            src={sharkImage}
            alt="Back to Dashboard"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              boxShadow: '0 0 20px limegreen, 0 0 40px #00ffff',
            }}
          />
        </button>
        <h2 style={{ color: '#39ff14', marginTop: '1rem' }}>Back to Dashboard</h2>
      </Link>
    </div>
  );
};

export default AppleCash;
