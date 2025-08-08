// src/pages/ChampRules.js
import React from 'react';
import './ChampRules.css'; // <-- make sure you have this file

const ChampRules = () => {
  return (
    <div className="content-wrapper">
      <h2 className="champ-rules-title">Champ Rules - WINNER EACH YEAR GETS TO PICK A NEW RULE OR GET RID OR CHANGE ONE OF THE RULES BELOW OR IN LEAGUE SETTINGS</h2>
      <ul className="champ-rules-list">
        <p><strong className="glow-green">League rule:</strong> High score each week gets $25, goes through playoffs</p>
        <p><strong className="glow-green">Bare minimum rule:</strong> Everyone is expected to set a line-up each week, any one who doesn't will be called out and humiliated. And if it becomes a habit, potentially removed from the league. Ask Ben Adams, though he went to jail before I could remove him</p>
        <p><strong className="glow-green">2016:</strong> Mish – 1 win for head-to-head win, 1 win for top 6 weekly score</p>
        <p><strong className="glow-green">2017:</strong> Shaw – Ummmmmm, I have no record of this rule, Shaw do you remember?</p>
        <p><strong className="glow-green">2018:</strong> Welsch – Added SuperFlex (QB/WR/RB/TE)</p>
        <p><strong className="glow-green">2019:</strong> Scham – Loser wears a TuTu doing outdoor activity; standings go through playoffs, not regular season</p>
        <p><strong className="glow-green">2020:</strong> McCool – REMOVED SuperFlex, back to 1 QB starter</p>
        <p><strong className="glow-green">2021:</strong> JD – Removed defensive position</p>
        <p><strong className="glow-green">2022:</strong> Scham – Added a flex position (WR/TE/RB)</p>
        <p><strong className="glow-green">2023:</strong> Shaw – Winner from previous year chooses draft position; down line from there</p>
        <p><strong className="glow-green">2024:</strong> Scham – Cornell Rule: During the draft order picking, if current draftee does not respond within 12hrs, they automatically get the lowest pick left and the draft order picking resumes with the next up</p>
      </ul>
    </div>
  );
};

export default ChampRules;
