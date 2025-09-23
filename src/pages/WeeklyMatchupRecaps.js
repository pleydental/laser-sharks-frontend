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
import w2gif1 from "../assets/weekly-recaps/week-2-loop-1.gif";
import w2gif2 from "../assets/weekly-recaps/week-2-loop-2.gif";
import w2gif3 from "../assets/weekly-recaps/week-2-loop-3.gif";
import w2gif4 from "../assets/weekly-recaps/week-2-loop-4.gif";
import w2gif5 from "../assets/weekly-recaps/week-2-loop-5.gif";
import w2gif6 from "../assets/weekly-recaps/week-2-loop-6.gif";
import w2gif7 from "../assets/weekly-recaps/week-2-loop-7.gif";
import w2gif8 from "../assets/weekly-recaps/week-2-loop-8.gif";
import w2gif10 from "../assets/weekly-recaps/week-2-loop-10.gif";

/** ---- 2025 WEEK 3 CONTENT ---- */
import w3gif1 from "../assets/weekly-recaps/week-3-loop-1.gif";
import w3gif2 from "../assets/weekly-recaps/week-3-loop-2.gif";
import w3gif3 from "../assets/weekly-recaps/week-3-loop-3.gif";
import w3gif4 from "../assets/weekly-recaps/week-3-loop-4.gif";
import w3gif5 from "../assets/weekly-recaps/week-3-loop-5.gif";
import w3gif6 from "../assets/weekly-recaps/week-3-loop-6.gif";
import w3gif7 from "../assets/weekly-recaps/week-3-loop-7.gif";
import w3gif8 from "../assets/weekly-recaps/week-3-loop-8.gif";
import w3gif10 from "../assets/weekly-recaps/week-3-loop-10.gif";

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
/** ---- 2025 WEEK 2 CONTENT ---- */

function Recap2025Week2() {
  return (
    <article style={{ marginTop: "1.25rem" }}>
    <h2>Week 2 — Laser Sharks Starting to Get Worried Edition</h2>

    <p>
      So far about half of you are feeling pretty damn good right now about your
      teams and the other half of us feel like dog shit. Let’s get into it.
    </p>

    <Gif src={w2gif1} alt="Week 2 loop 1" />

    <p>
      <strong>High score of the week</strong> goes to <strong>Marcello</strong> with a 151-127
      <strong>(5th highest score)</strong> win over <strong>DD</strong>.{" "}
      <strong>Marcello</strong> is one of two undefeated teams at 4-0 and{" "}
      <strong>DD</strong> is 3-1. . <strong>Marcello's</strong> worst player of the week was James Conner
      with 12 pts — no one on his team went off, just a solid balanced week and
      no injuries. <strong>DD</strong> did not have the same luck and for the
      2nd week in a row one of his players got injured, this time it was RB
      Aaron Jones. Might be time to start getting worried.
    </p>

   <Gif src={w2gif2} alt="Week 2 loop 2" />

    <p>
      <strong>The 2nd highest score</strong> goes to rookie <strong>Fischer</strong> with a 146-109
      win over <strong>Shaw</strong>-Balls. <strong>Fischer</strong> is also
      undefeated at 4-0 and <strong>Shaw</strong> sits 12th at 0-4. At one point{" "}
      <strong>Fischer</strong> was projected to be the high score but he got a
      disappointing Monday night from Shultz and only 2 pts from Derrick Henry.
      Everyone try to feel bad for him. <strong>Shaw</strong> got 39 pts from
      Nabers but Jayden Daniels got hurt and Austin Ekeler landed on IR, leaving
      him with RJ Harvey and Skattebo as his only viable RBs. Ouch.
    </p>

   <Gif src={w2gif3} alt="Week 2 loop 3" />

    <p>
      <strong>The 3rd highest score</strong> goes to <strong>Mark</strong> who is off to a great
      start and beat your <strong>Mish</strong> 141-102. <strong>Mark</strong> is
      3-1 and <strong>Mish</strong> is barely above <strong>Shaw</strong> at
      0-4 and 11th. So far the early CMC pick is paying off for{" "}
      <strong>Mark</strong> and he has avoided injury so far. If he can get some
      AJ Brown production going soon this team will keep winning.{" "}
      <strong>Mish's</strong> Bears didn’t do terribly but some dumb lineup
      choices left points on the bench. Still though — he sucks.
    </p>

    <Gif src={w2gif4} alt="Week 2 loop 4" />

    <p>
      <strong>The 4th highest score</strong> goes to <strong>Matt</strong> with a nice bounce-back
      win over <strong>JD</strong>, 131-115. <strong>Matt</strong> is 3-1 and{" "}
      <strong>JD</strong> is in the basement with us at 0-4. This win is
      bittersweet for <strong>Matt</strong> — Jayden Reed fractured his collarbone
      (6-8 weeks) and Justin Fields is in concussion protocol. Luckily{" "}
      <strong>Matt</strong> has Goff (45 pts on bench!) and WR depth so he should
      be fine. <strong>JD</strong> had Jamar Chase go off for 38 pts and still
      missed top 6. He started 3 RBs that gave him 8.7 pts total, while his
      3 bench RBs had 19.8 pts total. Yeah… he should be worried too.
    </p>

  <Gif src={w2gif5} alt="Week 2 loop 5" />

    <p>
      <strong>The 5th highest score</strong> goes to <strong>Debo</strong> with a 125-112 win over{" "}
      <strong>Champ-Balls</strong>. <strong>Debo</strong> stays undefeated in 3rd
      and <strong>Champ-Balls</strong> loses that status, falling to 7th.{" "}
      <strong>Debo</strong>’s team was solid thanks to Amon-Ra and his 40 pts.
      Only 9.3 pts from starting RBs but Dobbins in the FLEX bailed him out with
      16. <strong>Champ-Balls</strong> looked a lot like Week 1 except Josh Allen
      only scored 12 pts instead of 44. Both squads might be a little worried.
    </p>

   <Gif src={w2gif6} alt="Week 2 loop 6" />

    <p>
      <strong>Barely-worth-mentioning matchup</strong> of the week was between{" "}
      <strong>Gus</strong> and <strong>McCool</strong> —{" "}
      <strong>Gus's</strong> 2nd straight appearance in this segment.{" "}
      <strong>Gus</strong> pulled off the 119-94 win but neither of them cracked the top 6.{" "}
      <strong>Gus</strong> is now 1-3 and <strong>McCool</strong> is still in
      the basement with us at 0-4. Yeah — they’re worried.
    </p>

    <Gif src={w2gif7} alt="Week 2 loop 7" />

    <p>
      Ok that’s it for week 2 folks. I’ll try to keep these going despite the
      personal anguish of looking at my team. Don't forget to hit those comments to tell me 
      how terrible my team is. 
    </p>

    <p className="signoff">- <strong>Mish Out!</strong></p>

    <Gif src={w2gif8} alt="Week 2 loop 8" />
   <Gif src={w2gif10} alt="Week 2 loop 10" />
  </article>
);
}
function Recap2025Week3() {
  return (
    <article style={{ marginTop: "1.25rem" }}>
      <h2>Week 3 — Laser Sharks wait, what? edition</h2>

      <p>
        It seems my{" "}
        <a
          href="https://lasersharksfantasyfootball.netlify.app/matchup-recap/2025"
          target="_blank"
          rel="noopener noreferrer"
        >
          Season 10 prediction
        </a>{" "}
        has some merit. Hopefully <strong>Champ-balls</strong> hasn’t been shivved and <strong>McCool</strong> 
          isn’t applying for a banana farmer license.
      </p>

      <Gif src={w3gif1} alt="Week 3 loop 1" />

      <p>
        <strong>High score of the week</strong> goes to <strong>Mark</strong>{" "}
        with a 154 to 143 (<strong>3rd highest score</strong>) win over{" "}
        <strong>Champ-balls</strong>. <strong>Mark</strong> is 3rd at 5-1 but he is only one
        point behind <strong>Fischer</strong> (6-0). <strong>Mark</strong> needed a big Monday night, he had
        Jackson and Montgomery and Ryan had Gibbs. Every one of those players
        cleaned it up but Montgomery getting 30 points was the difference maker
        for <strong>Mark</strong>. This was <strong>Champ-balls</strong> (3-3) best week by far and I have
        complete confidence that he maybe might possibly have an ok chance that
        he will or will not make the playoffs with this team, guaranteed.
      </p>

      <Gif src={w3gif2} alt="Week 3 loop 2" />

      <p>
        <strong>The 2rd highest score</strong> goes to <strong>Debo</strong>{" "}
        with a 146 to 136 (<strong>5th highest score</strong>) win over{" "}
        <strong>McCool</strong>. <strong>Debo</strong> is still undefeated and
        moved up to 2nd. He does not have much of a point advantage over any one.
        One bad week and he would drop a few spots pretty quick but still a
        solid start to the season. He needed 10pts from St Brown Monday night to
        get the win and he got 20. <strong>McCool</strong> had his best week by far as well and
        is no longer in the “no-win” basement, he now has one foot on the bottom
        step of the basement stairs. Hampton finally had a game and that will
        likely continue now that Najee is out. <strong>McCool</strong> has a decently unlikely
        but possible outside improbable but hopeful chance of turning this
        season around.
      </p>

      <Gif src={w3gif3} alt="Week 3 loop 3" />

      <p>
        <strong>The 4rd highest score</strong> goes to your <strong>Mish</strong>{" "}
        with a 138 to 102 win over <strong>Shaw-Balls</strong>. I also moved out
        of the “no-win” basement and I feel like maybe I have 2 feet on the
        bottom step of the basement stairs. I renamed my team to<strong>DA BEARS</strong> as I
        finally got the production out of them I was hoping to, 37pts from Caleb
        (hell ya) and 23pts from Moore and Swift (hell meh). They are amazing I
        can’t believe how lucky I was to draft them. I finally benched Andrews
        and he of course gets 27pts on the bench. <strong>Shaw-balls</strong> is in trouble
        though, he is still winless. Devonta Smith finally did something and
        rookie Skattebo emerged but everyone else was terrible. To make matters
        worse Evans tweaked his hamstring, hopefully he’ll get Daniels back for
        this week. <strong>Shaw-balls</strong> is really hoping for a miracle, his team has the
        outside potential to have great games individually any given week but
        not much of a chance for them to all have a great game all at the same
        time to give them any kind of reliable consistency and confidence that
        any given week all the pieces will line up to have a good week overall
        and that each week will be a scattering of solid performances and not
        solid performances and and and
      </p>

      <Gif src={w3gif4} alt="Week 3 loop 4" />

      <p>
        <strong>The 6th highest score</strong> goes to <strong>Fischer</strong>{" "}
        with a fortunate matchup and win over <strong>DD</strong> 125 to 81.{" "}
        <strong>Fischer</strong> is still undefeated and poisoning <strong>Debo’s</strong> wine during their
        Tuesday night Wine Wednesdays. His team came back to earth a little and
        his highest score was week 1. It didn’t help that he had to start Trevor
        Lawrence with Purdy being out. It worked out for him last week but only
        got 9 pts this week. But honestly, wtf am I even talking about, he still
        won his head to head matchup, he still got a top 6 score, he is still
        the league point leader. HIS DRAFT STILL SUCKED AND DID NOT DESERVE AN A
        FROM YAHOO, gaaaaawwwwwww! Shit that was weird. On to <strong>DD</strong> who is just
        getting donged by injuries. He already lost Kittle week 1, Aaron Jones
        week 2, and now Lamb week 3. Lamb said he will absolutely play week 4
        but the reports are saying he could miss 3-4 weeks. <strong>DD’s</strong> only hope is
        that Jeanty returns his draft capital some day, Aiyuk returns from PUP
        with a vengeance, one of his 3 QB’s find a way to score more than 20pts
        and his IR players get stem cell injections into their prostates.
      </p>

      <Gif src={w3gif5} alt="Week 3 loop 5" />

      <p>
        We have 2 barely worth mentioning matchups this week.
      </p>

      <p>
        The first not as bad but still bad <strong>Barely worth mentioning matchup</strong> was
        between <strong>Marcello</strong> and <strong>Matt</strong>.{" "}
        <strong>Marcello</strong> won and dropped from 2nd to 4th like a sack of
        hot potatoes tumbling down a hill of broken dreams and promises.
      </p>

      <Gif src={w3gif6} alt="Week 3 loop 6" />

      <p>
        The next but not really that bad but pretty bad <strong>Barely worth mentioning
        matchup of the week</strong> was between <strong>Gus</strong> and{" "}
        <strong>JD</strong>. <strong>Gus's</strong> 3rd week in this prominent
        category. <strong>Gus</strong> was just unshitty enough again to pull out the win by less
        than 1 point. <strong>Gus and JD’s</strong> hopes are a lot like that time that guy said
        a thing and then ate a sandwich and shit himself but was ok with it
        because he only got a little bit of shit on his shoes.
      </p>

      <Gif src={w3gif7} alt="Week 3 loop 7" />

      <p>
        Ok that’s it for week 3 folks. Can't wait for the bye weeks! Go Bears!!
      </p>

      <p className="signoff">- <strong>Mish Out!</strong></p>

      <Gif src={w3gif8} alt="Week 3 loop 8" />
      <Gif src={w3gif10} alt="Week 3 loop 10" />
      <p><strong>Well, some of you anyway</strong></p>
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
) : w === 2 ? (
  <Recap2025Week2 />
) : w === 3 ? (
  <Recap2025Week3 />
) : (
  <p><em>No recap yet. Don't worry you probabaly sucked balls.</em></p>
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
