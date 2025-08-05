// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import Standings from './Standings';
import Managers from './Managers';
import Rules from './Rules';
import ChampRules from './ChampRules';
import Champions from './Champions';
import Losers from './Losers';
import leagueConfig from '../config/leagueConfig';
import './Dashboard.css';


import bgShark from '../assets/bg-shark.png';
import moodGif from '../assets/mood-middle-finger-GIF.gif';
import venmoIcon from '../assets/venmo.png';
import paypalIcon from '../assets/paypal.png';
import googlepayIcon from '../assets/googlewallet.png';
import zelleIcon from '../assets/zelle-icon.png';
import applecashIcon from '../assets/applecash.png';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showGif, setShowGif] = useState(false);
  const [draftCountdown, setDraftCountdown] = useState('');
  const [playoffCountdown, setPlayoffCountdown] = useState('');

  // Update countdowns every second
  useEffect(() => {
    const draftDate = new Date('2025-08-22T20:00:00-04:00');
    const playoffDate = new Date('2025-12-11T20:15:00-05:00');

    const updateCountdowns = () => {
      const now = new Date();
      const draftDiff = draftDate - now;
      const playoffDiff = playoffDate - now;

      if (draftDiff > 0) {
        const d = Math.floor(draftDiff / (1000 * 60 * 60 * 24));
        const h = Math.floor((draftDiff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((draftDiff / (1000 * 60)) % 60);
        const s = Math.floor((draftDiff / 1000) % 60);
        setDraftCountdown(`${d}d ${h}h ${m}m ${s}s`);
      } else {
        setDraftCountdown('🚨 Draft is LIVE! 🚨');
      }

      if (playoffDiff > 0) {
        const d = Math.floor(playoffDiff / (1000 * 60 * 60 * 24));
        const h = Math.floor((playoffDiff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((playoffDiff / (1000 * 60)) % 60);
        const s = Math.floor((playoffDiff / 1000) % 60);
        setPlayoffCountdown(`${d}d ${h}h ${m}m ${s}s`);
      } else {
        setPlayoffCountdown('🔥 Playoffs Have Begun! 🔥');
      }
    };

    const interval = setInterval(updateCountdowns, 1000);
    return () => clearInterval(interval);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'standings':
        return <Standings />;
      case 'managers':
        return <Managers />;
      case 'rules':
        return <Rules />;
      case 'champRules':
        return <ChampRules />;
      case 'champions':
        return <Champions />;
      case 'losers':
        return <Losers />;
      default:
        return (
          <div className="content-wrapper">
            <h1 style={{ color: '#00e6e6', textShadow: '0 0 20px #00e6e6' }}>
              Laser Sharks Fantasy Football League
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
              Welcome my brothers. CLICK SHIT AND FIND OUT.
            </p>

            {/* Shark Button */}
            <div 
              style={{ 
                marginBottom: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <button
                onClick={() => setShowGif(!showGif)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <img
                  src={bgShark}
                  alt="Shark Button"
                  style={{
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    boxShadow: '0 0 40px limegreen, 0 0 80px #00ffff',
                    display: 'block',
                  }}
                />
              </button>
              <h2
                style={{
                  color: '#39ff14',
                  marginTop: '1rem',
                  textShadow: '0 0 15px #39ff14, 0 0 30px #00ffff',
                  textAlign: 'center',
                }}
              >
                Click shark button above for important info
              </h2>
            </div>

            {/* Mood GIF */}
            {showGif && (
              <div
                style={{
                  marginBottom: '2rem',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src={moodGif}
                  alt="Mood GIF"
                  style={{
                    width: '300px',
                    maxWidth: '90%',
                    borderRadius: '12px',
                    boxShadow:
                      '0 0 20px #ff4500, 0 0 40px #ff1493, 0 0 60px #00ffff',
                  }}
                />
              </div>
            )}

            {/* Countdown Timers */}
            <div style={{ marginTop: '2rem' }}>
              <div
                style={{
                  width: '375px',
                  margin: '20px auto',
                  padding: '1.5rem',
                  fontSize: '1.6rem',
                  color: '#000',
                  background: 'linear-gradient(90deg, limegreen, #00ffff)',
                  borderRadius: '15px',
                  boxShadow: '0 0 40px limegreen, 0 0 60px #00ffff',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  animation: 'pulseGlow 2s infinite',
                }}
              >
                🏈 Draft Countdown🏈 <br />
                <span style={{ fontSize: '2rem', color: '#000' }}>{draftCountdown}</span>
              </div>

              <div
                style={{
                  width: '375px',
                  margin: '20px auto',
                  padding: '1.5rem',
                  fontSize: '1.6rem',
                  color: '#000',
                  background: 'linear-gradient(90deg, #ff1493, purple)',
                  borderRadius: '15px',
                  boxShadow: '0 0 40px #ff1493, 0 0 60px purple',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  animation: 'pulseGlow 2s infinite',
                }}
              >
                 Playoff Countdown <br />
                <span style={{ fontSize: '2rem', color: '#000' }}>{playoffCountdown}</span>
              </div>
            </div>

               {/* Draft Day Info Box */}
<div className="draft-info-box">
  <h2>🍗 Draft Day Info 🍗 🍗 </h2>
  <table className="draft-info-table">
    <tbody>
      <tr>
        <th>Date</th>
        <td>{leagueConfig.draft.date}</td>
      </tr>
      <tr>
        <th>Location</th>
        <td>{leagueConfig.draft.location}</td>
      </tr>
      <tr>
        <th>Address</th>
        <td>{leagueConfig.draft.address}</td>
      </tr>
    </tbody>
  </table>
</div>


{/* Draft Order Box */}
<div className="info-box white-card">
  <h2>📋 Draft Order 2025 📋</h2>
  <table className="draft-order-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Manager</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {leagueConfig.draftOrder.map((entry, i) => (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{entry.manager}</td>
          <td>
           {entry.paid ? (
  <span className="status paid">✅ Paid</span>
) : (
  <span className="status unpaid">❌ Unpaid</span>
)}

          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>



{/* Pay Dues Section */}
<div
  className="pay-dues-box"
  style={{
    margin: '20px auto',
    padding: '1.5rem',
    background: 'rgba(0, 0, 0, 0.7)',
    borderRadius: '15px',
    boxShadow: '0 0 30px limegreen',
    maxWidth: '650px',
    textAlign: 'center',
  }}
>
  <h2
    style={{
      color: '#ffff00',
      textShadow: '0 0 15px #ffff00',
      marginBottom: '0.5rem',
    }}
  >
    💵 Click Icon To Pay Your $100 Dues 💵 
  </h2>
  <p style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '1rem' }}>
    Links for Google Wallet and Apple Cash Do Not Exist Because They Just Don't, Trust Me I Tried
  </p>

<div className="payment-icons">
  <a href={leagueConfig.payments.venmo} target="_blank" rel="noopener noreferrer">
    <div className="payment-icon"><img src={venmoIcon} alt="Venmo" /></div>
  </a>
  <a href={leagueConfig.payments.paypal} target="_blank" rel="noopener noreferrer">
    <div className="payment-icon"><img src={paypalIcon} alt="Paypal" /></div>
  </a>
  <a href="/googlepay">
    <div className="payment-icon"><img src={googlepayIcon} alt="Google Pay" /></div>
  </a>
  <a href="/zelle">
    <div className="payment-icon"><img src={zelleIcon} alt="Zelle" /></div>
  </a>
  <a href="/applecash">
    <div className="payment-icon"><img src={applecashIcon} alt="Apple Cash" /></div>
  </a>
</div>

</div>

          </div>
        );
    }
  };

  return (
    <div className="dashboard">
      {/* Removed navbar tabs */}
      <main>{renderContent()}</main>
    </div>
  );
};

export default Dashboard;
