// src/pages/ChampRules.js
import React from 'react';
import './ChampRules.css'; // <-- make sure you have this file

const ChampRules = () => {
  return (
    <div className="content-wrapper">
      <h2 className="champ-rules-title">Champ Rules - WINNER EACH YEAR GETS TO PICK A NEW RULE OR GET RID OF ONE OF THE RULES BELOW</h2>
      <ul className="champ-rules-list">
        <p><strong className="glow-green">2016:</strong> Mish – 1 win for head-to-head win, 1 win for top 6 weekly score</p>
        <p><strong className="glow-green">2017:</strong> Shaw – Ummmmmm, I have no record of this rule, Shaw do you remember?</p>
        <p><strong className="glow-green">2018:</strong> Welsch – Added SuperFlex (QB/WR/RB/TE)</p>
        <p><strong className="glow-green">2019:</strong> Scham – Loser wears a TuTu doing outdoor activity; standings go through playoffs, not regular season</p>
        <p><strong className="glow-green">2020:</strong> McCool – REMOVED SuperFlex, back to 1 QB starter</p>
        <p><strong className="glow-green">2021:</strong> JD – Removed defensive position</p>
        <p><strong className="glow-green">2022:</strong> Scham – Added a flex position (WR/TE/RB)</p>
        <p><strong className="glow-green">2023:</strong> Shaw – Winner from previous year chooses draft position; down line from there</p>
        <p><strong className="glow-green">2024:</strong> Scham – TBD</p>
      </ul>
    </div>
  );
};

export default ChampRules;
