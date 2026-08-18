import React, { useEffect, useState } from 'react';
import './Standings.css';

const MIN_SCALE = 0.25;
const MAX_SCALE = 1.1;
const SCALE_STEP = 0.1;
const DEFAULT_SCALE = 0.45;

const Standings = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scale, setScale] = useState(DEFAULT_SCALE);

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mobileQuery.matches);

    const viewport = document.querySelector('meta[name="viewport"]');
    const original = viewport ? viewport.getAttribute('content') : null;

    if (viewport && mobileQuery.matches) {
      // Lock zoom to a flat 1:1 while on this page. Letting native
      // pinch-zoom stay active here made single-finger drags ambiguous
      // between "pan the zoomed page" and "scroll this sheet" — WebKit
      // was routing the drag to pan the zoomed viewport, which is
      // bounded by the page's own width and snaps back almost
      // immediately. Zooming instead happens through the +/- controls
      // below, which apply a plain CSS transform to the sheet itself.
      viewport.setAttribute(
        'content',
        'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
      );
    }

    return () => {
      if (viewport && original) {
        viewport.setAttribute('content', original);
      }
    };
  }, []);

  const zoomOut = () => setScale((s) => Math.max(MIN_SCALE, +(s - SCALE_STEP).toFixed(2)));
  const zoomIn = () => setScale((s) => Math.min(MAX_SCALE, +(s + SCALE_STEP).toFixed(2)));

  return (
    <div className="content-wrapper">
      <h2 style={{ color: '#00e6e6', textAlign: 'center', marginBottom: '1rem' }}>League Standings</h2>
      {isMobile && (
        <div className="standings-zoom-controls">
          <button type="button" onClick={zoomOut} disabled={scale <= MIN_SCALE}>−</button>
          <span>{Math.round(scale * 100)}%</span>
          <button type="button" onClick={zoomIn} disabled={scale >= MAX_SCALE}>+</button>
        </div>
      )}
      <div className="standings-outer">
        <div
          className="standings-scale-box"
          style={isMobile ? { transform: `scale(${scale})` } : undefined}
        >
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
