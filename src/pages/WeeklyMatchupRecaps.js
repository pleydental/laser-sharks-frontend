// src/pages/WeeklyMatchupRecaps.js
import React, { useMemo } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Comments from "../components/Comments";
import middleFingerBtn from "../assets/middle-finger-button.png";

// 🔁 Week 1 GIFs (placed in: src/assets/weekly-recaps)
import w1gif1 from "../assets/weekly-recaps/week-1-loop-1.gif";
import w1gif2 from "../assets/weekly-recaps/week-1-loop-2.gif";
import w1gif3 from "../assets/weekly-recaps/week-1-loop-3.gif";
import w1gif4 from "../assets/weekly-recaps/week-1-loop-4.gif";
import w1gif5 from "../assets/weekly-recaps/week-1-loop-5.gif";
import w1gif6 from "../assets/weekly-recaps/week-1-loop-6.gif";
import w1gif7 from "../assets/weekly-recaps/week-1-loop-7.gif";
import w1gif8 from "../assets/weekly-recaps/week-1-loop-8.gif";
import w1gif9 from "../assets/weekly-recaps/week-1-loop-9.gif";
import w1gif10 from "../assets/weekly-recaps/week-1-loop-10.gif";
import w1gif11 from "../assets/weekly-recaps/week-1-loop-11.gif";

const YEARS = [2025]; // add more years later
const WEEKS = Array.from({ length: 16 }, (_, i) => i + 1); // 1..16

// small helper to keep GIFs centered and not huge
const Gif = ({ src, alt }) => (
  <div style={{ display: "flex", justifyContent: "center", margin: "1.25rem 0" }}>
    <img
      src={src}
      alt={alt || ""}
      style={{
        width: "100%",
        maxWidth: "680px", // keeps them from being enormous
        height: "auto",
        borderRadius: "10px",
      }}
      loading="lazy"
    />
  </div>
);

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
      {/* Prev */}
      {w > 1 ? (
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
      ) : (
        <div />
      )}

      {/* Next / Champ */}
      {w < 16 ? (
        <button
          onClick={() => onPickWeek(year, w + 1)}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <img src={middleFingerBtn} alt="Next Week" style={{ width: "60px" }} />
        </button>
      ) : (
        <button
          onClick={() => onPickWeek(year, 17)}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <img src={middleFingerBtn} alt="Go to Championship Recap" style={{ width: "60px" }} />
        </button>
      )}
    </div>
  );
}

/** ---- 2025 WEEK 1 CONTENT ---- */
function Recap2025Week1() {
  return (
    <article style={{ marginTop: "1.25rem" }}>
      <h3>Week 1 — <strong>Suck/Spit Edition</strong></h3>

      <Gif src={w1gif1} alt="Week 1 opener" />

      <p>
        This is how the 2025 NFL season started Thursday night, grown men spitting on each other.
        I know a few of you are into that kind of thing.
      </p>


      <p>
        One quick reminder, we do have an IR spot so if you have a player on IR you can move him into that spot
        so he doesn’t take up any bench space.
      </p>

      <p>
        Well that was kind of a messed up week, most of us did not do very well with the exception of{" "}
        <strong>Fischer</strong> and <strong>Mark</strong>. Lots of “star” players disappointed for us but hey it
        is week 1, who gives AF? Well, I kind of give AF.
      </p>

      <Gif src={w1gif2} alt="Week 1 loop 2" />

      <p>
        And just remember guys, I talk a lot of shit about your teams, take it with a grain of salt, just know that
        deep down when I am writing this stuff I believe and mean every word of it.
      </p>

      <Gif src={w1gif11} alt="Week 1 loop 11" />

      <p>
        <strong>High score of the week:</strong> <strong>Fischer</strong> over <strong>Mark</strong>.
        Turns out he might have been right about his draft. And in perfect Laser Sharks kick-in-the-nuts fashion
        he beat Mark who had the 2nd highest score of the week. Fischer goes 2-0 and Mark is 1-1.
        Fischer got a good game out of Purdy but it remains to be seen if he plays week 2 or not, good thing
        he has 2 backup QB’s. Derrick Henry had a monster game and looks like he has at least one more good
        season in him. Even his bench tore it up. Mark’s team was all over the place—solid production from
        Lamar, CMC and Zay Flowers but he only got 6.5 pts total from his two starting WRs
        (AJ Brown and McLaurin). His bench was terrible. Nothing sucky about this matchup, or spitty.
      </p>

      <Gif src={w1gif3} alt="Billy Mays??" />

      <p><em>That’s Billy Mays, not sure why he popped into my head…</em></p>

      <p>
        <strong>3rd highest score:</strong> <strong>Brother Debo</strong> (127) over <strong>Mish</strong> (102).
        I had 4 players going Monday night and needed each of them to get over 20 pts to catch up to Debo but
        3 of them were Bears so that did…not…happen. Debo had a similar experience to Mark with some really
        great performances and some pretty terrible ones. Mahomes was actually pretty decent, Garrett Wilson
        is doing just fine with his new QB and Breece Hall is looking pretty damn good. Some of his early picks
        didn’t pan out very well, particularly Amon-Ra and Omarion Hampton but that will probably improve during
        the year. Neither one of us had any injuries so yay us. I’ll claim all the suck on this matchup.
      </p>

      <Gif src={w1gif4} alt="Week 1 loop 4" />

      <p>
        <strong>4th highest score:</strong> <strong>DD</strong> (125) over <strong>JD</strong> (106) — bittersweet.
        Kittle got hurt during the game and is expected to miss a few weeks. Buuuut he has Tyler Warren on the bench
        so basically screw you DD, I mean congrats, well done. DD had a pretty balanced lineup with really only
        Bo Nix and Tank Bigsby disappointing. JD also had a TE injury with Brock Bowers (day-to-day; could miss Week 2).
        He does not have a backup TE like DD so he’s going to have to hit the WW I think. His team really did pretty well
        with the exception of Dak and Chase only giving him 12 pts total — that probably won’t be an every week thing
        so JD should suck less next week.
      </p>

      <Gif src={w1gif5} alt="Week 1 loop 5" />

      <p>
        <strong>5th highest score:</strong> <strong>Marcello</strong> (124) over <strong>Shaw-Balls</strong> (94).
        Marcello had a great week; the only sore spot was his WR1 Xavier Worthy giving him a goose egg and potentially
        missing some time going forward (currently day-to-day). He started 4 RBs this week and they all scored over
        13 points. Shaw had a rough week with Jayden Daniels being his best player with 22 points. He had 5 players
        that scored under 10 pts though. He barely missed the lowest score of the week by outscoring Gus by 0.1 pts —
        that’s sucky spitty fo sho.
      </p>

      <Gif src={w1gif6} alt="Week 1 loop 6" />

      <p>
        <strong>6th highest score:</strong> <strong>Champ Scham-balls</strong> (119.36) over <strong>McCool</strong> (118.38).
        Champ’s team actually sucked pretty bad but he got 44 pts from Josh Allen while five other players scored under 10.
        His TE Engram got hurt late and only had 5 pts by then. Bench looks a little shaky. Scham got lucky this week I think.
        McCool’s team was pretty balanced and most of his players did well — including the 3 QBs on his bench.
        Jennings got hurt but initial reports seem positive. Sucky sucky, spit spit.
      </p>

      <Gif src={w1gif7} alt="Week 1 loop 7" />

      <p>
        <strong>Barely worth mentioning matchup:</strong> <strong>Matt</strong> over <strong>Gus</strong>.
        Matt sucked less and has a kicker on IR now. Gus sucked the most and had the lowest total of the week.
        Matt’s bench did not suck; Gus’s bench did suck.
      </p>

      <Gif src={w1gif8} alt="Week 1 loop 8" />

      <p>
        Ok that’s it for week 1 folks. Don’t worry if your team sucked this week, I have no doubt it will continue to suck.
      </p>

      <p style={{ marginBottom: "0.5rem" }}>— <strong>Mish Out!</strong></p>

      <Gif src={w1gif9} alt="Week 1 loop 9" />
      <Gif src={w1gif10} alt="Week 1 loop 10" />
    </article>
  );
}

function YearlyRecap({ year, week, onPickWeek }) {
  const y = String(year);

  if (y !== "2025") {
    return (
      <div className="recap-coming-soon">
        <h2>{y} Weekly Recaps</h2>
        <p>
          <em>chill bros, coming soon</em>
        </p>
      </div>
    );
  }

  const w = Number(week);

  return (
    <section className="recap-content">
      <h2>{y} Weekly Matchup Recaps</h2>
      <p>Select a week below to view the recap. (1–16). Week 17 goes to the championship recap.</p>

      <WeekButtons year={y} activeWeek={week} onPickWeek={onPickWeek} />

      {/* Render specific weeks */}
      {w >= 1 && w <= 16 ? (
        <>
          <div style={{ marginTop: "1.25rem" }}>
            <h3>Week {w} Recap</h3>
          </div>

          {w === 1 ? (
            <Recap2025Week1 />
          ) : (
            <p>
              <em>No recap yet. Don't worry you probabaly sucked balls.</em>
            </p>
          )}

          {/* Prev/Next Nav */}
          <PrevNextNav year={y} week={week} onPickWeek={onPickWeek} />
        </>
      ) : null}
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

  // 🔑 Build a unique comments key for Giscus
  const pageKey = selectedWeek
    ? `weekly-${selectedYear}-week-${selectedWeek}`
    : selectedYear
    ? `weekly-${selectedYear}`
    : "weekly-recaps-root";

  return (
    <div className="recap-wrapper content-wrapper">
      <header className="recap-header">
        <h1>Weekly Recaps</h1>
        <p className="recap-sub">
          Put your dick away, then pick a year, then a week, then laugh at the carnage.
        </p>
      </header>

      <YearButtons activeYear={selectedYear} onPick={handlePickYear} />
      <YearlyRecap year={selectedYear} week={selectedWeek} onPickWeek={handlePickWeek} />

      {/* 💬 Shit Talk for this exact year/week */}
      <Comments pageKey={pageKey} />
    </div>
  );
}
