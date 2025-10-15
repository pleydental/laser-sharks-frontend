// src/pages/WeeklyMatchupRecaps.js
import React, { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

/** ---- 2025 WEEK 4 CONTENT ---- */
import w4gif1 from "../assets/weekly-recaps/week-4-loop-1.gif";
import w4gif2 from "../assets/weekly-recaps/week-4-loop-2.gif";
import w4gif3 from "../assets/weekly-recaps/week-4-loop-3.gif";
import w4gif4 from "../assets/weekly-recaps/week-4-loop-4.gif";
import w4gif5 from "../assets/weekly-recaps/week-4-loop-5.gif";
import w4gif6 from "../assets/weekly-recaps/week-4-loop-6.gif";
import w4gif7 from "../assets/weekly-recaps/week-4-loop-7.gif";
import w4gif8 from "../assets/weekly-recaps/week-4-loop-8.gif";
import w4gif9 from "../assets/weekly-recaps/week-4-loop-9.gif";

// --- WEEK 5: Bounce Edition (Final JSX Block with Glowing Arrows) ---
import w5gif1 from "../assets/weekly-recaps/week-5-loop-1.gif";
import w5gif2 from "../assets/weekly-recaps/week-5-loop-2.gif";
import w5gif3 from "../assets/weekly-recaps/week-5-loop-3.gif";
import w5gif4 from "../assets/weekly-recaps/week-5-loop-4.gif";
import w5gif5 from "../assets/weekly-recaps/week-5-loop-5.gif";
import w5gif6 from "../assets/weekly-recaps/week-5-loop-6.gif";
import w5gif7 from "../assets/weekly-recaps/week-5-loop-7.gif";
import w5gif8 from "../assets/weekly-recaps/week-5-loop-8.gif";
import w5gif9 from "../assets/weekly-recaps/week-5-loop-9.gif";
import w5gif10 from "../assets/weekly-recaps/week-5-loop-10.gif";
import w5gif11 from "../assets/weekly-recaps/week-5-loop-11.gif";
import w5gif12 from "../assets/weekly-recaps/week-5-loop-12.gif";
import w5gif13 from "../assets/weekly-recaps/week-5-loop-13.gif";
import w5gif14 from "../assets/weekly-recaps/week-5-loop-14.gif";
import w5gif15 from "../assets/weekly-recaps/week-5-loop-15.gif";
import w5gif16 from "../assets/weekly-recaps/week-5-loop-16.gif";

// ---- WEEK 6 AUDIO ----
import week6VO from "../assets/weekly-recaps/week-6-voiceover.mp3";

// ---- 2025 WEEK 6 GIFs ----
import w6gif1 from "../assets/weekly-recaps/week-6-loop-1.gif";
import w6gif2 from "../assets/weekly-recaps/week-6-loop-2.gif";
import w6gif3 from "../assets/weekly-recaps/week-6-loop-3.gif";
import w6gif4 from "../assets/weekly-recaps/week-6-loop-4.gif";
import w6gif5 from "../assets/weekly-recaps/week-6-loop-5.gif";
import w6gif6 from "../assets/weekly-recaps/week-6-loop-6.gif";
import w6gif7 from "../assets/weekly-recaps/week-6-loop-7.gif";
import w6gif8 from "../assets/weekly-recaps/week-6-loop-8.gif";
import w6gif9 from "../assets/weekly-recaps/week-6-loop-9.gif";
import w6gif10 from "../assets/weekly-recaps/week-6-loop-10.gif";
import w6gif11 from "../assets/weekly-recaps/week-6-loop-11.gif";
import w6gif12 from "../assets/weekly-recaps/week-6-loop-12.gif";
import w6gif13 from "../assets/weekly-recaps/week-6-loop-13.gif";
import w6gif14 from "../assets/weekly-recaps/week-6-loop-14.gif";


// 🔁 Universal glowing arrow + number component
const Arrow = ({ dir, change }) => {
  const isUp = dir === "up";
  const colorClass = isUp ? "arrow-up" : "arrow-down";
  const sign = isUp ? "+" : "−";
  return (
    <span className={colorClass}>
      {isUp ? "⬆︎" : "⬇︎"} {sign}
      {change}
    </span>
  );
};



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
function Recap2025Week4() {
  return (
    <article style={{ marginTop: "1.25rem" }}>
      <h2>Week 4 — Gen Z Trash Talk Edition</h2>

      <p>
        <strong>Mish</strong> low-key sold this week and hit me like, 
        “bro, no cap I’m cooked 🥱—can you run the recap?” so here I am, 
        taking the aux and turning this league into content. buckle up.
      </p>
      <p>
        we’re ranking these by pure vibes a.k.a. <strong>top score to lowest</strong> 
        because numbers don’t lie, they just expose. top 6 get the bonus dub ✅, 
        bottom 6 get the walk of shame ❌. feelings will be hurt; screenshots will be saved.
      </p>
      <p>
        expect extra emojis, spicy roasts, and plenty of salt for the losers. 
        if your squad caught an L, take it up with your waiver wire, not me.
      </p>

      <Gif src={w4gif1} alt="Week 4 intro gif" />

      {/* Fischer vs Matty Ice */}
      <h3>🎲 <strong>Fischer</strong> (182.96) vs <strong>Matty Ice</strong> (114.72) 🧊</h3>
      <p>
        <strong>Fischer</strong> went full nuclear ☢️ dropping 182.9 like it was casual cardio. 
        Puka Nacua 🐐 posted a 37 bomb while James Cook 🍳 served a hot plate with 23.5. 
        Even Purdy’s 2 picks couldn’t kill the vibe.  
        <strong>Matty Ice</strong>? ❄️ Bro had Jared Goff as his only green flag 🚦 and then 
        just vibes-checked the rest of his team. Saquon looked like he was running in Crocs 👟, 
        and Fields dropping 30+ on the bench is pain with a capital P.  
        💀 Verdict: <strong>Fischer</strong> streamed this on Twitch with a “get rekt kid” overlay.
      </p>
      <Gif src={w4gif2} alt="Week 4 Fischer vs Matty Ice" />

      {/* Debo vs Mark */}
      <h3>🍻 <strong>Debo</strong> (169.70) vs <strong>Mark</strong> (98.28) 🤦‍♂️</h3>
      <p>
        <strong>Debo</strong> had the Mahomes 🏈 + Amon-Ra 🌞 + Breece Hall 🚀 stack and it was 
        straight violence. Omarion Hampton tossed in 128 yards like it was nothing.  
        <strong>Mark</strong>? 😬 Lamar + CMC couldn’t even save this mess. David Montgomery 
        dropped a 1.2 🫠 and his bench Stafford’s 34 was just sitting there eating popcorn 🍿.  
        🤣 Verdict: <strong>Debo</strong> didn’t win, he gave <strong>Mark</strong> a tutorial mode experience.
      </p>
      <Gif src={w4gif3} alt="Week 4 Debo vs Mark" />

 {/* Marcello vs Gus (Week 4) */}
<h3>🔥🐍 <strong>Marcello</strong> (149.00) vs <strong>Gus</strong> (134.12) 🚔🍗</h3>
<p>
  Broooo, this matchup was straight TikTok drama energy. <strong>Marcello</strong> pulled up 
  with the ✨duo of doom✨ — <strong>Josh Jacobs</strong> (31.7) & <strong>Bijan Robinson</strong> (29.1) 
  — and just spammed “hold this L” all over <strong>Gus</strong>’s feed. Add in 
  <strong> Trey McBride</strong> looking like he’s running his own influencer campaign (12.2) 
  and <strong>Kyler Murray</strong> serving steady QB vibes, and boom, another undefeated flex.
</p>


<p>
  Meanwhile, <strong>Gus</strong> was out here fighting like it’s the comments section at 3AM. 
  <strong>George Pickens</strong> went nuclear with 34.4 🔥 and <strong>C.J. Stroud</strong> 
  dropped a clean 22.4, but the rest of the squad ghosted harder than your hinge match. 
  <strong>Nick Chubb</strong> and <strong>Sam LaPorta</strong> brought vibes so mid it felt like 
  filler content. Respectable 134 points, but no cap — against <strong>Marcello</strong>’s 
  demon mode, that’s just a sad react only 💀📉.
</p>

<Gif src={w4gif4} alt="Week 4 Marcello vs Gus" />

      {/* Mish vs DD */}
      <h3>🦍 <strong>Mish</strong> (116.48) vs <strong>DD</strong> (141.32) 🦑</h3>
      <p>
        <strong>Mish</strong> finally got JJettas ✈️ to pop with 23.6, but Caleb Williams 
        was running for his life 📦 and Kenneth Walker hit the injury tent 🚑.  
        <strong>DD</strong> just chilled 😎 until Ashton Jeanty dropped a 35-piece 🍗 and 
        Tyler Warren added 18. That was wraps.  
        📉 Verdict: <strong>Mish</strong> falls to 2-6 🥲, <strong>DD</strong> climbs back to 5-3 with a smug grin 😏.
      </p>
      <Gif src={w4gif5} alt="Week 4 Mish vs DD" />

      {/* Balls Bowl */}
      <h3>🏈 <strong>Champ-Balls</strong> (124.26) vs <strong>Shaw-Balls</strong> (104.30) ⚾</h3>
      <p>
        Josh Allen 🪄 cooked for 29.8 and Gibbs remembered how to football 🏃‍♂️. 
        That’s literally all <strong>Champ-Balls</strong> needed.  
        <strong>Shaw-Balls</strong>? He started Jake Browning 🤯 for 5.4 while Penix dropped 
        24.7 on the bench. Drake London tried to carry 🦸 but the rest was mid 😐.  
        🫤 Verdict: <strong>Champ-Balls</strong> wins the Balls Bowl. Honestly this was like 
        watching slap fights at Chuck E. Cheese 🐭.
      </p>
      <Gif src={w4gif6} alt="Week 4 Champ-Balls vs Shaw-Balls" />

      {/* McCool vs JD */}
      <h3>🤡 <strong>McCool</strong> (138.90) vs <strong>Pound It Noggin</strong> (90.38) 💀</h3>
      <p>
        <strong>McCool</strong> came alive 🔥 with Bucky Irving cooking defenders for 27.5 
        and Hurts + Marvin Harrison Jr. carrying the vibes 💪.  
        <strong>JD</strong>? Bro is now Pound It 0-8 🚫. Daniel Jones put up garbage stats 🗑️ 
        and Keenan Allen ghosted like it was Halloween 🎃. Dak Prescott’s 37.9 on the bench 
        is comedy-tier clownery 🤡.  
        ☠️ Verdict: <strong>McCool</strong> dubs, <strong>JD</strong> turns into the meme team of the league.
      </p>
      <Gif src={w4gif7} alt="Week 4 McCool vs JD" />

      <p className="signoff">- <strong>Your AI Overlord Out!</strong></p>
      <Gif src={w4gif8} alt="Week 4 closing gif 1" />
      <Gif src={w4gif9} alt="Week 4 closing gif 2" />
    </article>
  );
}

function Recap2025Week5() {
  return (
    <article style={{ marginTop: "1.25rem" }}>
      <div className="recap-content">
        <h2>Week 5 Laser Sharks Bounce Edition</h2>

        <p>
          A few people bouncing around in the standings. Thanks ChatGPT, I used her again, 
          we aren't fighting any more, she's nice. 
        </p>

        {/* Standings Table */}
        <div className="standings-movement-table">
          <table>
            <thead>
              <tr>
                <th>Manager</th>
                <th>Week 4 Rank</th>
                <th>Week 5 Rank</th>
                <th>Movement</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong className="glow-green">Debo</strong></td><td>2</td><td>1</td><td><Arrow dir="up" change="1" /></td></tr>
              <tr><td><strong className="glow-green">Fischer</strong></td><td>1</td><td>2</td><td><Arrow dir="down" change="1" /></td></tr>
              <tr><td><strong className="glow-green">Mark</strong></td><td>4</td><td>3</td><td><Arrow dir="up" change="1" /></td></tr>
              <tr><td><strong className="glow-green">Marcello</strong></td><td>3</td><td>4</td><td><Arrow dir="down" change="1" /></td></tr>
              <tr><td><strong className="glow-green">Gus</strong></td><td>8</td><td>5</td><td><Arrow dir="up" change="3" /></td></tr>
              <tr><td><strong className="glow-green">Scham</strong></td><td>6</td><td>6</td><td>–</td></tr>
              <tr><td><strong className="glow-green">DD</strong></td><td>5</td><td>7</td><td><Arrow dir="down" change="2" /></td></tr>
              <tr><td><strong className="glow-green">McCool</strong></td><td>9</td><td>8</td><td><Arrow dir="up" change="1" /></td></tr>
              <tr><td><strong className="glow-green">Mish</strong></td><td>10</td><td>9</td><td><Arrow dir="up" change="1" /></td></tr>
              <tr><td><strong className="glow-green">Welsch</strong></td><td>7</td><td>10</td><td><Arrow dir="down" change="3" /></td></tr>
              <tr><td><strong className="glow-green">JD</strong></td><td>11</td><td>11</td><td>–</td></tr>
              <tr><td><strong className="glow-green">Shaw</strong></td><td>12</td><td>12</td><td>–</td></tr>
            </tbody>
          </table>
        </div>

        <div className="recap-gif"><img src={w5gif1} alt="Week 5 GIF 1" /></div>

        <p>
          I was going to do a stabbing edition due to Sanchez’s rage eruption over his Uber Eats but I thought this would be more fun.
          Should help you guys that are losing your focus on the season like me. <strong>All should be read in a Trump voice.</strong>
        </p>

        <div className="recap-gif"><img src={w5gif2} alt="Week 5 GIF 2" /></div>

        <h3>🦈 WEEK 5 — “MASSIVE WINS, TOTAL DISASTERS, EVERYBODY’S TALKING ABOUT IT”</h3>

        <h4>🥇 <strong className="glow-green">Gus</strong> (161.26-highest) def. <strong className="glow-green">Fischer</strong> (138.24)</h4>
        <p>
          Record: <strong className="glow-green">Gus</strong> 5–5 <Arrow dir="up" change="3" /> | <strong className="glow-green">Fischer</strong> 8–2 <Arrow dir="down" change="1" /><br />
          Absolutely tremendous performance by <strong className="glow-green">Gus</strong>. People are saying it’s one of the greatest fantasy weeks anyone’s ever seen, maybe in history.
          <strong className="glow-green">Fischer</strong>—nice guy, good numbers—but frankly, got destroyed. Total embarrassment.
          <strong className="glow-green">Gus</strong> is winning again, folks, and the league has never been so nervous.
        </p>

        <div className="recap-gif"><img src={w5gif3} alt="Week 5 GIF 3" /></div>

        <h4>🥈 <strong className="glow-green">JD</strong> (156.98- 2nd highest) def. <strong className="glow-green">Marcello</strong> (95.40)</h4>
        <p>
          Record: <strong className="glow-green">JD</strong> 2–8 | <strong className="glow-green">Marcello</strong> 7–3 <Arrow dir="down" change="1" /><br />
          <strong className="glow-green">JD</strong> was losing badly, many people said he couldn’t win. I never believed it.
          He came back—big comeback—absolutely crushed <strong className="glow-green">Marcello</strong>, who quite frankly looked terrible.
          Sleepy <strong className="glow-green">Marcello</strong> didn’t even show up. <strong className="glow-green">JD</strong>’s performance was beautiful, just beautiful.
        </p>

        <div className="recap-gif"><img src={w5gif4} alt="Week 5 GIF 4" /></div>

        <h4>🥉 <strong className="glow-green">Mish</strong> (156.74 3rd highest) def. <strong className="glow-green">Welsch</strong> (122.82)</h4>
        <p>
          Record: <strong className="glow-green">Mish</strong> 4–6 <Arrow dir="up" change="1" /> | <strong className="glow-green">Welsch</strong> 3–7 <Arrow dir="down" change="3" /><br />
          Biggie Pauls—he’s tough, he’s strong, he’s got that winning mentality. Tremendous victory.
          <strong className="glow-green">Welsch</strong>’s team? Not good. They call it a team, I call it a total disaster.
          Many people are saying it might be one of the worst-run rosters in league history. Sad!
        </p>

        <div className="recap-gif"><img src={w5gif5} alt="Week 5 GIF 5" /></div>

        <h4><strong className="glow-green">Mark</strong> (155.28 4th highest) def. <strong className="glow-green">McCool</strong> (148.30 5th highest)</h4>
        <p>
          Record: <strong className="glow-green">Mark</strong> 7–3 <Arrow dir="up" change="1" /> | <strong className="glow-green">McCool</strong> 4–6 <Arrow dir="down" change="1" /><br />
          <strong className="glow-green">Mark</strong>—fantastic guy, plays the game the right way. Very high IQ fantasy football.
          <strong className="glow-green">McCool</strong>, decent player, but he’s been losing so much, he’s probably tired of losing.
          Maybe he should change his name to “Not-So-Cool.” Everyone’s talking about it.
        </p>

        <div className="recap-gif"><img src={w5gif6} alt="Week 5 GIF 6" /></div>

        <h4><strong className="glow-green">Debo</strong> (143.82 6th highest) def. <strong className="glow-green">Shaw</strong> (109.64)</h4>
        <p>
          Record: <strong className="glow-green">Debo</strong> 10–0 <Arrow dir="up" change="1" /> | <strong className="glow-green">Shaw</strong> 0–10<br />
          <strong className="glow-green">Debo</strong>’s undefeated—just like I was in 2016, folks. He’s got the best team, maybe ever, and everyone knows it. Total domination.
          <strong className="glow-green">Shaw</strong>? Terrible season. Zero wins, zero leadership, zero clue. He’s the Jeb Bush of fantasy football—low energy!
        </p>

        <div className="recap-gif"><img src={w5gif7} alt="Week 5 GIF 7" /></div>

        <h4><strong>Barely Worth Mentioning Matchup of the Week</strong><br />
          <strong className="glow-green">Scham</strong> (111.72) def. <strong className="glow-green">DD</strong> (98.44) -2
        </h4>
        <p>
          Record: <strong className="glow-green">Scham</strong> 5–5 | <strong className="glow-green">DD</strong> 5–5 <Arrow dir="down" change="2" /><br />
          Pretty even matchup. Both middle of the pack—some say average, I say very average.
          <strong className="glow-green">Scham</strong> won because he knows how to close the deal.
          <strong className="glow-green">DD</strong> just couldn’t get it done—maybe he was too busy negotiating a golf cart lease.
        </p>

        <div className="recap-gif"><img src={w5gif8} alt="Week 5 GIF 8" /></div>
        <p>—<strong className="glow-green">Mish Out!</strong></p>

        <div className="recap-gif"><img src={w5gif9} alt="Week 5 GIF 9" /></div>
        <div className="recap-gif"><img src={w5gif10} alt="Week 5 GIF 10" /></div>

        <p>
          Here’s more GIFs, couldn’t fit them all above, seemed a shame to let them go to waste.
        </p>

        <div className="recap-gif"><img src={w5gif11} alt="Week 5 GIF 11" /></div>
        <div className="recap-gif"><img src={w5gif12} alt="Week 5 GIF 12" /></div>
        <div className="recap-gif"><img src={w5gif13} alt="Week 5 GIF 13" /></div>
        <div className="recap-gif"><img src={w5gif14} alt="Week 5 GIF 14" /></div>
        <div className="recap-gif"><img src={w5gif15} alt="Week 5 GIF 15" /></div>
        <div className="recap-gif"><img src={w5gif16} alt="Week 5 GIF 16" /></div>
      </div>
    </article>
  );
}
/** ---- 2025 WEEK 6 CONTENT ---- */
function Recap2025Week6() {
const audioRef = React.useRef(null);
const playVO = () => audioRef.current?.play();
const pauseVO = () => audioRef.current?.pause();


  return (
    <article style={{ marginTop: "1.25rem" }}>
      {/* Top audio CTA */}
      <div className="voiceover-bar">
  <h3>🎧 Week 6 Recap — Morgan Freeman Narration</h3>
  <audio ref={audioRef} src={week6VO} preload="auto" />
  <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "0.5rem" }}>
    <button className="voiceover-btn" onClick={playVO}>
      ▶️ Play
    </button>
    <button className="voiceover-btn" onClick={pauseVO}>
      ⏸️ Pause
    </button>
  </div>
</div>


      {/* Intro (VERBATIM) */}
      <p>I remember Andy Dufresne. The quiet man who crawled through five hundred yards of the foulest fantasy football lineup you can imagine… and came out clean on the other side.</p>
      <p>Some seasons feel like that, don’t they? You start out buried under bad trades, broken players, and that familiar smell of despair. But then one Sunday… one lineup… and you feel that first drop of rain on your face.</p>
      <p>I’ve seen men rise in this league. I’ve seen them break, rebuild, and rise again. And this week… well, this week was Andy’s crawl all over again.</p>
      <p>The walls of the Laser Sharks league stood tall. Some men chipped away with steady hands. Others just sat in the dark, waiting for a miracle. But the ones who made it out… they didn’t just play. They escaped.</p>
      <p>So here we are — Week Six. Half the season gone. The legends still being written. And hope… that dangerous, beautiful thing… still crawling through the pipes.</p>

      <p><em>Let’s see how it all went down shall we?</em></p>

      {/* Marcello */}
      <h4><strong className="glow">Marcello (Slippery Jack)</strong> — 160.04</h4>
      <p>Marcello gets the top score with 160 points 
He’d been down there in the dark for weeks, scraping at the walls. But this time, he broke through again with his 2nd top score of the season. One lineup, one perfect escape, and the man found daylight. One-hundred-sixty points of pure, clean freedom… you could almost hear the rain washing the season off his shoulders.</p>
      <p>He is now 9 and 3 on the season, up 2 spots from last week. He has been quietly hiding in the shadows of Debo and Fischer and he can see the light now, the sweet sweet light. </p>
      <Gif src={w6gif1} alt="Week 6 — Marcello" />

      {/* Shaw-Balls */}
      <h4><strong className="glow">Shaw-Balls (Kenny Powers)</strong> — 147.84</h4>
      <p>Shaw-Balls gets the 2nd highest score with 148 points.
 They said he was finished, that all the talk was just noise. But every now and then, the loudest man in the yard earns his silence. He stormed the scoreboard like a riot and stopped just short of the top. You can lock a man’s mouth… but you can’t lock his swagger.</p>
      <p>He is now 2 and 10 getting his first wins of the season, he may still be in the basement but he is looking to climb the walls of freedom, right into the grips of a ball vice</p>
      <Gif src={w6gif2} alt="Week 6 — Shaw-Balls" />

      {/* JD */}
      <h4><strong className="glow">JD (Pound It Noggin)</strong> — 146.24</h4>
      <p>JD gets the 3rd highest score with 146 points.
 The kid kept hammering at the wall. Weeks of near-misses, and now the light finally came through. One-hundred-forty-six points. When the gate opened, he didn’t sprint—he just walked, calm, like a man who always 
knew this day would come.</p>
      <p>He is now 4 and 8 and moved up 2 spots to 9th, still garbage but even the garbage man needs hope. This is is 2nd week in a row in the top 6 and who knows, maybe he’s figured out the system.</p>
      <Gif src={w6gif3} alt="Week 6 — JD" />

      {/* DD */}
      <h4><strong className="glow">DD (Double D’s)</strong> — 129.16</h4>
      <p>DD gets the 4th highest score with 129 points.
 Old Double D’s stumbled onto something rare this week—hope. Not the loud kind… just the sort that sits quiet and waits its turn. One-hundred-twenty-nine points worth of belief that the season ain’t over yet.</p>
      <p>He is now 7 and 5 moving up one spot to top half of Laser Sharks at #6.</p>
      <Gif src={w6gif4} alt="Week 6 — DD" />

      {/* Gus */}
      <h4><strong className="glow">Gus (Prison Panther)</strong> — 128.96</h4>
      <p>Gus gets the 5th highest score with 129 points. 
 The Panther roared again. A few bad weeks had left him in solitary, but Week Six let him stretch those claws. One-hundred-twenty-nine points of revenge. He’s not out yet… but you can smell freedom on the wind.</p>
      <p>He is now 7 and 5 holding steady at 5th place. Gus has improved the most thus far, starting the season in dead last but tasting the sweet sweet nectar of redemption.</p>
      <Gif src={w6gif5} alt="Week 6 — Gus" />

      {/* Mish */}
      <h4><strong className="glow">Mish (DA BEARS)</strong> — 108.68</h4>
      <p>Your warden Mish got the 6th highest score with 109 glorious points. 
 The Commish looked tired—tired of the noise, the injuries, the hope that hurts when it dies. One-hundred-nine glorious points and a spark that won’t quit. Some men keep digging because they don’t know how to stop. That’s Mish.</p>
      <p>He is now 5 and 7 and moved up one spot to 8th. He didn’t even care that he lost this week to Gus, for his plethora of Bears finally came through and got him the one win, partial victory is so so sweet, like freedom you didn’t ask for but came tightly wrapped in a bag that he shit out once he cleared security. </p>
      <Gif src={w6gif6} alt="Week 6 — Mish" />

      {/* Fischer */}
      <h4><strong className="glow">Fischer (Dice Roll Aaron)</strong> — 103.32</h4>
      <p>Fischer suffered his 4th loss in a row with the 7th highest score of one-hundred-three points. 
 The dice came up short this time. One-hundred-three. Not bad, not good… just stuck in the middle of the yard watching others climb. He’ll find his numbers again. He always does.</p>
      <p>His record is now 8 and 4 and dropped to 3rd place when he was the top dog just 2 short weeks ago.</p>
      <Gif src={w6gif7} alt="Week 6 — Fischer" />

      {/* Scham-Balls */}
      <h4><strong className="glow">Scham-Balls (Team Steiners)</strong> — 101.60</h4>
      <p>Scham-Balls got the 8th highest score with one-hundred-two points.
 He tried. One-hundred-two of almost. You could see the light on his face for a moment… then the gate slammed shut. Some birds aren’t meant to be caged. He’ll fly—just not this week.</p>
      <p>His record is now 6 and 6 and dropped out of the top 6 (again) to 7th place.</p>
      <Gif src={w6gif8} alt="Week 6 — Scham-Balls" />

      {/* Welsch */}
      <h4><strong className="glow">Welsch (smakdown)</strong> — 98.94</h4>
      <p>Welsch got the 9th highest score with our first sub 100 at ninety-nine points
 Ninety-nine and the sound of rain on concrete. Every touchdown that wasn’t, every yard that fell short—he felt them all. There’s a certain quiet to defeat, and Welsch wore it like a coat.</p>
      <p>He is now 3 and 9 on the season and dropped one spot to 11th. He is the juicy juicy meat between the McCool—JD and Shaw sandwich.</p>
      <Gif src={w6gif9} alt="Week 6 — Welsch" />

      {/* Williams */}
      <h4><strong className="glow">Williams (unfollowbobo)</strong> — 97.54</h4>
      <p>Williams got the 10th highest score with ninety-eight points  Ninety-eight, and still working his way through the pipe. There’s a tunnel there—you can see it in his eyes. He’ll get out soon. He doesn’t like being a bitch and a plans on getting the BJ’s instead of giving them.</p>
      <p>He is now 7 and 5 and only dropped one spot to 4th place in Laser Sharks</p>
      <Gif src={w6gif10} alt="Week 6 — Williams" />

      {/* Debo */}
      <h4><strong className="glow">Debo (Happy Hour)</strong> — 96.78</h4>
      <p>Debo got the 2nd lowest score with  ninety-seven points.   Ninety-seven and a laugh that echoes through the cell block. The scoreboard lies sometimes. He’s playing for pride now—and a little fear for anyone who draws him next.</p>
      <p>He loved pointing out his perfect record to the warden despite the wardens attempt to blemish his good name, but Debo’s hubris has been relegated to the loser column this week.
His record is still a solid 10 and 2 and he sits a top the Laser Shark standings at 1st place. </p>
      <Gif src={w6gif11} alt="Week 6 — Debo" />

      {/* McCool */}
      <h4><strong className="glow">McCool (Hingle McCringleberry)</strong> — 84.02</h4>
      <p>McCool got the lowest score by a whole bunch with only eighty-four points.  Eighty-four. Lowest of the week, but he took it like a man who’s seen worse. Every league needs somebody to carry the weight of last place. He’s our canary in the mine—and somehow, he still sings.</p>
      <p>His record is now 4 and 8 and he dropped two spots the 10th. </p>
      <Gif src={w6gif12} alt="Week 6 — McCool" />

      {/* Outro (VERBATIM) */}
      <p>I find myself thinking about this league… about the men who’ve fought, lost, and clawed their way through the weeks. I think about Andy Dufresne, standing in the rain, arms to the sky — and I wonder if maybe, in his heart, he knew something about fantasy football too.</p>
      <p>Because that’s what this game is, isn’t it? A long crawl through darkness, searching for that one clean Sunday on the other side. Some will make it out. Some will stay behind. But every one of us keeps digging.</p>
      <p>I guess I just miss the sound of Sunday. The quiet before the storm. The moment when you still believe that this… could be the week you break free.</p>
      <p>Maybe I’ll see my team climb that wall. Maybe I won’t. But I hope.</p>
      <p>I hope to make the playoffs. I hope the waiver gods have mercy. I hope I can make it across that border… to the land of trophies and bragging rights… where the sun never sets on the Laser Sharks.</p>
      <p>One thing seems to be abundantly certain, no one with the last name of Balls will be released from the depths of Laser Shark obscurity this year.</p>
      <p>And finally, in the immortal words of JD Lie, Eat a Dick</p>
      <p>Fuck fuck, fuckity fuck balls shit face doggy shit gonorrhea fucky fuck. Dammit, Mish made me say that.</p>
      <p><strong>— Mish….OUT!</strong></p>

      {/* Two extra GIFs after Mish OUT */}
      <Gif src={w6gif13} alt="Week 6 — Outro 1" />
      <Gif src={w6gif14} alt="Week 6 — Outro 2" />
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
    ) : w === 4 ? (
      <Recap2025Week4 />
    ) : w === 5 ? (
      <Recap2025Week5 />
    ) : w === 6 ? (
      <Recap2025Week6 />
    ) : (
      <p><em>No recap yet. Don’t worry, you probably sucked balls.</em></p>
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
