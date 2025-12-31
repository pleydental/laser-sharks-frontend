// src/pages/ChampRules.js
import React from "react";
import "./ChampRules.css";

const lines = [
  "League rule: High score each week gets $25, goes through playoffs",
  "Bare minimum rule: Everyone is expected to set a line-up each week during regular season, any one who doesn't will be called out and humiliated. And if it becomes a habit, potentially removed from the league. Ask Ben Adams, though he went to jail before I could remove him",
  "2016: Mish – 1 win for head-to-head win, 1 win for top 6 weekly score",
  "2017: Shaw – Ummmmmm, I have no record of this rule, Shaw do you remember?",
  "2018: Welsch – Added SuperFlex (QB/WR/RB/TE)",
  "2019: Scham – Loser wears a TuTu doing outdoor activity; standings go through playoffs, not regular season",
  "2020: McCool – REMOVED SuperFlex, back to 1 QB starter",
  "2021: JD – Removed defensive position",
  "2022: Scham – Added a flex position (WR/TE/RB)",
  "2023: Shaw – Winner from previous year chooses draft position; down line from there",
  "2024: Scham – Cornell Rule: During the draft order picking, if current draftee does not respond within 12hrs, they automatically get the lowest pick left and the draft order picking resumes with the next up",
  "2025: Fischer - Waiting on Rule",
];

function RuleLine({ text }) {
  const idx = text.indexOf(":");
  if (idx === -1) {
    // no colon — render whole thing normally
    return <li>{text}</li>;
  }
  const label = text.slice(0, idx).trim();
  const rest = text.slice(idx + 1).trimStart();
  return (
    <li>
      <strong className="glow-green">{label}:</strong> {rest}
    </li>
  );
}

export default function ChampRules() {
  return (
    <div className="content-wrapper">
      <h2 className="champ-rules-title">
        Champ Rules - WINNER EACH YEAR GETS TO PICK A NEW RULE OR GET RID OR CHANGE ONE OF THE RULES BELOW OR IN LEAGUE SETTINGS
      </h2>
      <ul className="champ-rules-list">
        {lines.map((t, i) => (
          <RuleLine key={i} text={t} />
        ))}
      </ul>
    </div>
  );
}
