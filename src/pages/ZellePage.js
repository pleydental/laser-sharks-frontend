import React from 'react';
import { Link } from 'react-router-dom';
import zelleLarge from '../assets/zelle-large.png';

const ZellePage = () => {
  return (
    <div style={{
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: 'rgba(0,0,0,0.8)',
      borderRadius: '12px',
      boxShadow: '0 0 25px limegreen',
      maxWidth: '600px',
      margin: '2rem auto',
      color: '#fff'
    }}>
      <h1 style={{ color: '#39ff14', marginBottom: '1.5rem' }}>Pay with Zelle</h1>
      <img 
        src={zelleLarge} 
        alt="Zelle QR Code" 
        style={{
          width: '100%',
          maxWidth: '400px',
          borderRadius: '8px',
          boxShadow: '0 0 20px #39ff14',
        }}
      />
      <div style={{ marginTop: '2rem' }}>
        <Link 
          to="/" 
          style={{
            color: '#00ffff',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            textDecoration: 'none',
            textShadow: '0 0 10px #00ffff'
          }}
        >
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default ZellePage;
