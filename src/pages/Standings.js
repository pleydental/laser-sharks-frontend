import React, { useEffect, useRef, useState } from 'react';
import './Standings.css';
import fingerButton from '../assets/middle-finger-button.png';

const MIN_SCALE = 0.25;
const MAX_SCALE = 1.1;
const SCALE_STEP = 0.1;
const DEFAULT_SCALE = 0.45;
const PAN_AMOUNT = 260;

const Standings = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scale, setScale] = useState(DEFAULT_SCALE);
  const outerRef = useRef(null);

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
      // immediately. Zooming instead happens through the finger-icon
      // controls below, which apply CSS zoom to the sheet itself.
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

  // Drag-to-scroll can get stuck partway across the embedded sheet —
  // something inside the (cross-origin) Google Sheets page appears to
  // intercept the touch gesture before it reaches the true edge, and
  // there's no way to inspect or fix that from our side. Panning via
  // scrollBy sidesteps touch handling entirely, so it isn't affected.
  const panBy = (amount) => {
    outerRef.current?.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <div className="content-wrapper">
      <h2 style={{ color: '#00e6e6', textAlign: 'center', marginBottom: '1rem' }}>League Standings</h2>
      {isMobile && (
        <div className="standings-zoom-controls">
          <button
            type="button"
            className="standings-zoom-btn"
            onClick={zoomOut}
            disabled={scale <= MIN_SCALE}
            aria-label="Zoom out"
          >
            <img src={fingerButton} alt="Zoom out" className="finger-icon zoom-down" />
          </button>
          <span>{Math.round(scale * 100)}%</span>
          <button
            type="button"
            className="standings-zoom-btn"
            onClick={zoomIn}
            disabled={scale >= MAX_SCALE}
            aria-label="Zoom in"
          >
            <img src={fingerButton} alt="Zoom in" className="finger-icon zoom-up" />
          </button>
        </div>
      )}
      {isMobile && (
        <div className="standings-pan-controls">
          <button
            type="button"
            className="standings-zoom-btn"
            onClick={() => panBy(-PAN_AMOUNT)}
            aria-label="Scroll left"
          >
            <img src={fingerButton} alt="Scroll left" className="finger-icon pan-left" />
          </button>
          <span>scroll</span>
          <button
            type="button"
            className="standings-zoom-btn"
            onClick={() => panBy(PAN_AMOUNT)}
            aria-label="Scroll right"
          >
            <img src={fingerButton} alt="Scroll right" className="finger-icon pan-right" />
          </button>
        </div>
      )}
      <div className="standings-outer" ref={outerRef}>
        <div
          className="standings-scale-box"
          style={isMobile ? { zoom: scale } : undefined}
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
