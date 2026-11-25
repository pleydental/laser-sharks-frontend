import React, { useState } from 'react';
import './Standings.css';
import fingerBtn from '../assets/middle-finger-button.png';

// Native Google Sheet "LaserSharks FF 2016-2026" (File > Share > Publish to web, auto-republish on).
// Edits to the sheet show up here automatically; no site rebuild needed.
const SHEET_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQIsdn3hIujMwF-E-bOEv1Y3iZ2oipVftptdRnlWMDkXs_lsCoQdL5P6gPO2EvGuIML-a2dx1qWvTN6/pubhtml';

const DEFAULT_ZOOM = 0.65;
const MIN_ZOOM = 0.25;
const MAX_ZOOM = 1.5;
const ZOOM_STEP = 0.1;
const PAN_STEP = 80; // screen pixels per button click, constant regardless of zoom

// The source image naturally points right, so that's the 0deg rotation.
const Finger = ({ direction }) => (
  <img src={fingerBtn} alt="" className={`finger-icon finger-${direction}`} />
);

const Standings = () => {
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);
  const [pan, setPan] = useState({ x: 0, y: 0 });

  const zoomIn = () => setZoom((z) => Math.min(MAX_ZOOM, +(z + ZOOM_STEP).toFixed(2)));
  const zoomOut = () => setZoom((z) => Math.max(MIN_ZOOM, +(z - ZOOM_STEP).toFixed(2)));
  const reset = () => {
    setZoom(DEFAULT_ZOOM);
    setPan({ x: 0, y: 0 });
  };

  const panBy = (dx, dy) => setPan((p) => ({ x: p.x + dx, y: p.y + dy }));

  return (
    <div className="content-wrapper">
      <h2 style={{ color: '#00e6e6', textAlign: 'center', marginBottom: '1rem' }}>League Standings</h2>

      <div className="standings-controls">
        <div className="standings-control-group">
          <button type="button" onClick={zoomOut} aria-label="Zoom out" className="finger-button">
            <Finger direction="down" />
          </button>
          <span className="standings-zoom-readout">{Math.round(zoom * 100)}%</span>
          <button type="button" onClick={zoomIn} aria-label="Zoom in" className="finger-button">
            <Finger direction="up" />
          </button>
        </div>

        <div className="standings-pan-pad">
          <button type="button" onClick={() => panBy(PAN_STEP, 0)} aria-label="Pan left" className="finger-button">
            <Finger direction="left" />
          </button>
          <button type="button" onClick={reset} className="pan-reset">Reset</button>
          <button type="button" onClick={() => panBy(-PAN_STEP, 0)} aria-label="Pan right" className="finger-button">
            <Finger direction="right" />
          </button>
        </div>
      </div>

      <div className="standings-viewport">
        <iframe
          title="Laser Sharks Standings"
          src={SHEET_URL}
          width="6000"
          height="1800"
          frameBorder="0"
          className="standings-frame"
          style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})` }}
        ></iframe>
      </div>
    </div>
  );
};

export default Standings;
