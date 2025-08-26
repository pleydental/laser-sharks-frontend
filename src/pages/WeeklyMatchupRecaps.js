// src/pages/WeeklyMatchupRecaps.js
import React, { useMemo } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import middleFingerBtn from "../assets/middle-finger-button.png";

const YEARS = [2025];               // add more years later
const WEEKS = Array.from({ length: 16 }, (_, i) => i + 1); // 1..16

function YearButtons({ activeYear, onPick }) {
  return (
    <div className="recap-year-grid">
      {YEARS.map((y) => (
        <button
          key={y}
          onClick={() => onPick(String(y))}
          className={`recap-year-btn ${String(y) === String(activeYear) ? "active" : ""}`}
          aria-pressed={String(y) === String(activeYear)}
        >
          {y}
        </button>
      ))}
    </div>
  );
}

function WeekButtons({ year, activeWeek, onPickWeek }) {
  return (
    <div className="recap-year-grid" style={{ marginTop: "1rem" }}>
      {WEEKS.map((w) => (
        <button
          key={w}
          onClick={() => onPickWeek(year, w)}
          className={`recap-year-btn ${String(w) === String(activeWeek) ? "active" : ""}`}
          aria-pressed={String(w) === String(activeWeek)}
        >
          {w}
        </button>
      ))}

      {/* Week 17 -> champions matchup recap for the year */}
      <button
        onClick={() => onPickWeek(year, 17)}
        className="recap-year-btn"
        aria-label={`Go to ${year} championship recap`}
        title="Championship Recap"
      >
        17
      </button>
    </div>
  );
}

function PrevNextNav({ year, week, onPickWeek }) {
  const w = Number(week);

  if (!w || w < 1) return null;

  return (
    <div
      style={{
        marginTop: "2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Prev button */}
      {w > 1 && (
        <button
          onClick={() => onPickWeek(year, w - 1)}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <img
            src={middleFingerBtn}
            alt="Previous Week"
            style={{ width: "60px", transform: "rotate(180deg)" }}
          />
        </button>
      )}

      {/* Spacer if no prev */}
      {w === 1 && <div />}

      {/* Next button */}
      {w < 16 && (
        <button
          onClick={() => onPickWeek(year, w + 1)}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <img
            src={middleFingerBtn}
            alt="Next Week"
            style={{ width: "60px" }}
          />
        </button>
      )}

      {w === 16 && (
        <button
          onClick={() => onPickWeek(year, 17)}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <img
            src={middleFingerBtn}
            alt="Go to Championship Recap"
            style={{ width: "60px" }}
          />
        </button>
      )}
    </div>
  );
}

function YearlyRecap({ year, week, onPickWeek }) {
  const y = String(year);

  if (y !== "2025") {
    return (
      <div className="recap-coming-soon">
        <h2>{y} Weekly Recaps</h2>
        <p><em>chill bros, coming soon</em></p>
      </div>
    );
  }

  return (
    <section className="recap-content">
      <h2>{y} Weekly Matchup Recaps</h2>
      <p>Select a week below to view the recap. (1–16). Week 17 goes to the championship recap.</p>

      <WeekButtons year={y} activeWeek={week} onPickWeek={onPickWeek} />

      {week && Number(week) >= 1 && Number(week) <= 16 && (
        <div style={{ marginTop: "1.25rem" }}>
          <h3>Week {week} Recap</h3>
          <p><em>coming soon — you probably sucked/will suck balls this week anyway</em></p>
        </div>
      )}

      {/* Prev/Next Nav */}
      {week && <PrevNextNav year={y} week={week} onPickWeek={onPickWeek} />}
    </section>
  );
}

export default function WeeklyMatchupRecaps() {
  const { year: yearParam, week: weekParam } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const selectedYear = useMemo(() => {
    const y = yearParam || "2025";
    return YEARS.includes(Number(y)) ? y : "2025";
  }, [yearParam]);

  const selectedWeek = useMemo(() => {
    return weekParam ? String(weekParam) : "";
  }, [weekParam]);

  const handlePickYear = (y) => {
    navigate(`/weekly-matchup-recaps/${y}`);
  };

  const handlePickWeek = (y, w) => {
    if (w === 17) {
      // Week 17 jumps to your existing champions matchup recap route
      navigate(`/matchup-recap/${y}`);
    } else {
      navigate(`/weekly-matchup-recaps/${y}/week/${w}`);
    }
  };

  return (
    <div className="recap-wrapper content-wrapper">
      <header className="recap-header">
        <h1>Weekly Recaps</h1>
        <p className="recap-sub">Put your dick away, then pick a year, then a week, then laugh at the carnage.</p>
      </header>

      <YearButtons activeYear={selectedYear} onPick={handlePickYear} />
      <YearlyRecap year={selectedYear} week={selectedWeek} onPickWeek={handlePickWeek} />
    </div>
  );
}
