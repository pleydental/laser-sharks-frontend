// src/pages/Zelle.js
import React from 'react';
import zelleLarge from '../assets/zelle-large.png';
import './PaymentPages.css';

const Zelle = () => {
  return (
    <div className="payment-page">
      <h1>Zelle Payment</h1>
      <p>Send $100 dues via Zelle to the account shown below:</p>
      <img src={zelleLarge} alt="Zelle QR Code" className="payment-img" />
    </div>
  );
};

export default Zelle;
