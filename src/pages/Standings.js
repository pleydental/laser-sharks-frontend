import React, { useEffect } from 'react';
import './Standings.css';

const Standings = () => {
  useEffect(() => {
    const viewport = document.querySelector('meta[name="viewport"]');
    const original = viewport ? viewport.getAttribute('content') : null;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (viewport && isMobile) {
      // Lock zoom to a flat 1:1 while on this page. Letting native
      // pinch-zoom stay active here made single-finger drags ambiguous
      // between "pan the zoomed page" and "scroll this sheet" — WebKit
      // was routing the drag to pan the zoomed viewport, which is
      // bounded by the page's own width and snaps back almost
      // immediately. The compact default view instead comes from a
      // plain CSS transform on the sheet itself (see Standings.css).
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

  return (
    <div className="content-wrapper">
      <h2 style={{ color: '#00e6e6', textAlign: 'center', marginBottom: '1rem' }}>League Standings</h2>
      <div className="standings-outer">
        <div className="standings-scale-box">
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
