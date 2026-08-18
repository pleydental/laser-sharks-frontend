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

  useEffect(() => {
    if (!isMobile) return undefined;
    const el = outerRef.current;
    if (!el) return undefined;

    // touch-action: pan-y only stops the *browser's* default panning —
    // it can't reach whatever the cross-origin Google Sheets iframe
    // does internally with the gesture, which kept letting drag
    // through inconsistently. Take the gesture over manually instead:
    // once movement clears a small threshold (so it's a real drag, not
    // a tap), preventDefault stops it from ever reaching the iframe,
    // and we drive scrollLeft/scrollTop ourselves. Below the threshold
    // nothing is touched, so genuine taps (e.g. Google's own
    // pagination arrow) still reach the iframe normally.
    const DRAG_THRESHOLD = 8;
    let startX = 0;
    let startY = 0;
    let startScrollLeft = 0;
    let startScrollTop = 0;
    let dragging = false;

    const onTouchStart = (e) => {
      if (e.touches.length !== 1) return;
      const t = e.touches[0];
      startX = t.clientX;
      startY = t.clientY;
      startScrollLeft = el.scrollLeft;
      startScrollTop = el.scrollTop;
      dragging = false;
    };

    const onTouchMove = (e) => {
      if (e.touches.length !== 1) return;
      const t = e.touches[0];
      const dx = t.clientX - startX;
      const dy = t.clientY - startY;

      if (!dragging) {
        if (Math.abs(dx) < DRAG_THRESHOLD && Math.abs(dy) < DRAG_THRESHOLD) return;
        dragging = true;
      }

      e.preventDefault();
      el.scrollLeft = startScrollLeft - dx;
      el.scrollTop = startScrollTop - dy;
    };

    const onTouchEnd = () => {
      dragging = false;
    };

    el.addEventListener('touchstart', onTouchStart, { capture: true, passive: true });
    el.addEventListener('touchmove', onTouchMove, { capture: true, passive: false });
    el.addEventListener('touchend', onTouchEnd, { capture: true, passive: true });
    el.addEventListener('touchcancel', onTouchEnd, { capture: true, passive: true });

    return () => {
      el.removeEventListener('touchstart', onTouchStart, { capture: true });
      el.removeEventListener('touchmove', onTouchMove, { capture: true });
      el.removeEventListener('touchend', onTouchEnd, { capture: true });
      el.removeEventListener('touchcancel', onTouchEnd, { capture: true });
    };
  }, [isMobile]);

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
