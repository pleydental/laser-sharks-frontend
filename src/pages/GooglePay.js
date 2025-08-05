import React from 'react';
import { Link } from 'react-router-dom';
import sharkImage from '../assets/bg-shark.png';

const GooglePay = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem', color: 'white' }}>
      <h1>💳 Google Pay Payment</h1>
      <p style={{ fontSize: '1.2rem', margin: '1rem auto', maxWidth: '600px' }}>
        There is no link for GooglePay/GoogleWallet to pay me. You'll just have to 
        find me on your own. I mean you can use Google Pay or Google Wallet, 
        or whatever the fuck it's called, if you want. 
        Or use Venmo, Paypal, or Zelle like a normal adult
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

export default GooglePay;
