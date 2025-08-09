// src/pages/Losers.js
import React from 'react';
import './Losers.css';

// Import loser banners (correct paths)
import loser2019 from '../assets/loser-banners/loser-2019.png';
import loser2020 from '../assets/loser-banners/loser-2020.png';
import loser2021 from '../assets/loser-banners/loser-2021.png';
import loser2022 from '../assets/loser-banners/loser-2022.png';
import loser2023 from '../assets/loser-banners/loser-2023.png';
import loser2024 from '../assets/loser-banners/loser-2024.png';

const losers = [
  { 
    year: 2019, 
    name: 'Scott Hackman 2-24. Quit the next year. Just Missed the TuTu rule. New TuTu Rule at end of this season', 
    banner: loser2019 
},
  { 
    year: 2020, 
    name: 'Jayson Wickencamp 4-22. Posted epic video with TuTu on a Trampoline', 
    banner: loser2020 
},
  { 
    year: 2021, 
    name: '**Jayson Wickencamp record not found but it was bad. No picture, debate about regular season vs. full season standings. Scham-Balls clarified.', banner: loser2021 },
  { 
    year: 2022, 
    name: 'Matt Welsch ......... 6-22. Shoveling Horse Shit in a TuTu', 
    banner: loser2022 
},
  { 
    year: 2023, 
    name: 'Matt Welsch 9-19. Cleaning Pool in a TuTu', 
    banner: loser2023 
},
  { 
    year: 2024, 
    name: 'Don Debone 9-19. Playing Golf in a Tutu', 
    banner: loser2024 
},
];



const Losers = () => {
  return (
    <div className="losers-wrapper">
      <h1 className="losers-title">Hall of Shame</h1>
      <div className="loser-grid">
        {losers.map((loser, idx) => (
          <div key={idx} className="loser-section">
            <div className="rainbow-frame">
              <img src={loser.banner} alt={`${loser.name} - ${loser.year}`} />
            </div>
            <div className="loser-card">{loser.year} - {loser.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Losers;
