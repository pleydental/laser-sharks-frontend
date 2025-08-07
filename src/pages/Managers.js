// src/pages/Managers.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Managers.css';

// Import images
import paulImg from '../assets/paul-ley.png';
import ryanSImg from '../assets/ryan-schamerloh.png';
import markImg from '../assets/mark-williams.png';
import shawImg from '../assets/ryan-shaw.png';
import gusImg from '../assets/justin-gus-miller.png';
import mattImg from '../assets/matt-welsch.png';
import shawnImg from '../assets/shawn-mccool.png';
import jdImg from '../assets/jd-ley.png';
import marcelloImg from '../assets/marcello-polidori.png';
import donImg from '../assets/don-debone.png';
import brianImg from '../assets/brian-debo.png';
import aaronImg from '../assets/aaron-fischer.png';

const managers = [
  { name: 'Paul Ley', slug: 'paul-ley', aliases: ['Biggie Pauls', 'Mish'], image: paulImg },
  { name: 'Ryan Schamerloh', slug: 'ryan-schamerloh', aliases: ['Team Steiners'], image: ryanSImg },
  { name: 'Mark Williams', slug: 'mark-williams', aliases: ['unfollowbobo'], image: markImg },
  { name: 'Ryan Shaw', slug: 'ryan-shaw', aliases: ['Kenny Powers'], image: shawImg },
  { name: "Justin 'Gus' Miller", slug: 'justin-gus-miller', aliases: ['Prison Panther'], image: gusImg },
  { name: 'Matt Welsch', slug: 'matt-welsch', aliases: ['smakdown'], image: mattImg },
  { name: 'Shawn McCool', slug: 'shawn-mccool', aliases: ['HingleMcCringleberry'], image: shawnImg },
  { name: 'JD Ley', slug: 'jd-ley', aliases: ['Pound It Noggin'], image: jdImg },
  { name: 'Marcello Polidori', slug: 'marcello-polidori', aliases: ['Slippery Jack'], image: marcelloImg },
  { name: 'Don "DD" Debone', slug: 'don-debone', aliases: ["Double D's"], image: donImg },
  { name: 'Brian Debo', slug: 'brian-debo', aliases: ['Happy Hour'], image: brianImg },
  { name: 'Aaron Fischer', slug: 'aaron-fischer', aliases: ['Dice Roll Aaron'], image: aaronImg },
];

const Managers = () => {
  const navigate = useNavigate();

  return (
    <div className="content-wrapper">
      <h1 className="section-title">League Managers</h1>
      <p className="click-instruction">Click on pic for a random dick pic or manager info, which will it be? The choice is yours</p>
      <div className="managers-grid">
        {managers.map((manager, index) => (
          <div
            className="manager-card"
            key={index}
            onClick={() => navigate(`/managers/${manager.slug}`)}
          >
            <img src={manager.image} alt={manager.name} className="manager-img" />
            <div className="manager-name">{manager.name}</div>
            <div className="manager-aliases">{manager.aliases.join(', ')}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Managers;
