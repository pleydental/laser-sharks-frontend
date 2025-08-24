// src/pages/DraftRecaps.js
import React, { useMemo } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

/**
 * HOW TO ADD MEDIA:
 * - Put your files in src/assets/recap-images (e.g., 2025-img1.jpg, recap-clip.mp4, etc.)
 * - Import them at the top (example commented out below), then add to RECAPS['2025'].
 *
 * import recapImg1 from "../assets/recap-images/2025-recap-1.jpg";
 * import recapImg2 from "../assets/recap-images/2025-recap-2.png";
 * import recapGif1 from "../assets/recap-images/2025-loop.gif";   // GIFs render as <img>
 * import recapVid1 from "../assets/recap-images/2025-recap.mp4";  // MP4s render in <video>
 */

// ✅ Example: importing your first recap image

import recapImg1 from "../assets/recap-images/2025RC-image-1.png";
import recapImg2 from "../assets/recap-images/2025RC-image-2.png";
import recapImg3 from "../assets/recap-images/2025RC-image-3.png";
import recapImg4 from "../assets/recap-images/2025RC-image-4.png";
import recapImg5 from "../assets/recap-images/2025RC-image-5.png";
import recapImg6 from "../assets/recap-images/2025RC-image-6.png";
import recapImg7 from "../assets/recap-images/2025RC-image-7.png";
import recapImg8 from "../assets/recap-images/2025RC-image-8.png";
import recapImg9 from "../assets/recap-images/2025RC-image-9.png";
import recapImg10 from "../assets/recap-images/2025RC-image-10.png";
import recapImg11 from "../assets/recap-images/2025RC-image-11.png";
import recapImg12 from "../assets/recap-images/2025RC-image-12.png";
import outroGif from "../assets/recap-images/2025RC-outro-loop.gif";


const YEARS = Array.from({ length: 2025 - 2016 + 1 }, (_, i) => 2016 + i).reverse();

// Editable recap data. Only 2025 shows content; others say "coming soon".
const RECAPS = {
  "2025": {
    images: [
      // recapImg1, recapImg2, recapGif1 //put your imported images here
    ],
    videos: [
      // recapVid1   //put imported MP4s here
    ],
    notes: <section className="recap-writeup">
  <h2>Season 10 Laser Sharks Draft Grades</h2>

  <p>
    Well another draft in the books. Things couldn’t have gone smoother. The draft order
    was correct, everyone was able to log in to Yahoo without any problems, everybody got
    along well with the non-Laser Shark attendees, the Yahoo draft room user interface left
    draftees in awe with its ease of use, I didn’t get the feeling at all that some of you
    had never been to Yahoo in your life or ever drafted from Yahoo. I didn’t even have to
    pause the draft.
  </p>

  <p>
    So you guys know my spiel by now with regard to Yahoo draft grades, I don’t think they
    mean much so I ask someone to look at your drafts and grade them. Though I think Yahoo
    nailed my grade pretty well. This year I recruited a group of Alpacas. The numbers in
    the pictures don’t mean anything.
  </p>

  <h3>SlipperyJack / Marcello</h3>
  <p><strong>Draft Spot:</strong> 2 &nbsp; | &nbsp; <strong>Sobriety:</strong> unknown</p>
  <p><strong>Yahoo Draft Grade:</strong> A+</p>
  <p>
    Marcello went RB heavy grabbing 4 of them in the first 5 rounds and sprinkled in a TE
    for good measure. I don’t hate the RB’s he got, I actually kind of like them. In the
    6th and 7th he grabbed two WR’s that are, well, they are ok. His QB’s are Baker Mayfield
    and Kyler Murray and yes he took 3 QB’s with Bryce Young in the 15th. Perfect example of
    if you want a good Yahoo draft grade be sure to get 3 QB’s and a backup TE.
  </p>
  <p><em>Alpaca grade: </em></p>
  <img 
  src={recapImg1} 
  alt="Marcello Alpaca Grade" 
  className="recap-inline-img"
  loading="lazy" 
/>

  <h3>Fischer / Dice Roll Aaron</h3>
  <p><strong>Draft Spot:</strong> 9 &nbsp; | &nbsp; <strong>Sobriety:</strong> ??? (not sure, never can tell, he is the same no matter how much he has had to drink</p>
  <p><strong>Yahoo Draft Grade:</strong> A</p>
  <p>
    Fischer grabbed Derrick Henry with his first pick, I mean probably not terrible but
    Henry is like 39 years old, surely he’s got to break down someday. He took RB’s and WR’s
    his first 7 rounds and he’s got some solid options. He already had 3 WR’s when he picked
    up Rashee Rice so once he gets off suspension Fischer will be stacked at the position.
    Fischer also took QB’s for some fucking reason, I will never understand why some of you
    guys do that. Yahoo likes it though. Does the Alpaca?
  </p>
  <p><em>Alpaca grade: </em></p>
 <img 
  src={recapImg2} 
  alt="Fischer Alpaca Grade" 
  className="recap-inline-img" 
  loading="lazy" 
  />

  <h3>Double D’s</h3>
  <p><strong>Draft Spot:</strong> 10 &nbsp; | &nbsp; <strong>Sobriety:</strong> at kids’ sporting event so probably sober</p>
  <p><strong>Yahoo Draft Grade:</strong> B+</p>
  <p>
    DD had the 10th pick and started off really balanced. WR/RB/TE/WR/QB. Solid start. God
    dammit, I am looking at these drafts for the first time and just typing the shit that
    comes into my head when I notice it. He took 3 QB’s as well, Nix, Herbert, Tua. Going to
    be tough trying to figure which one will score the most points in their 15-19 pt range.
    He also has 2 TE’s and 2 K’s. Yahoo is eating this shit up.
  </p>
  <p><em>Alpaca grade: </em></p>
  <img 
  src={recapImg3} 
  alt="DD Alpaca Grade" 
  className="recap-inline-img" 
  loading="lazy" 
/>

  <h3>Debo</h3>
  <p><strong>Draft Spot:</strong> 6 &nbsp; | &nbsp; <strong>Sobriety:</strong> probably wasted but completely functional</p>
  <p><strong>Yahoo Draft Grade:</strong> B+</p>
  <p>
    He went WR/WR/RB/RB/QB, solid as hell with what he got. He got the start I wanted. I am
    going through the rest of the draft trying to find something I don’t like and the only
    thing is Mahomes in the 5th, but that isn’t even that bad. This hurts to say but well
    done Debo.
  </p>
  <p><em>Alpaca grade: </em></p>
  <img 
  src={recapImg4} 
  alt="Debo Alpaca Grade" 
  className="recap-inline-img" 
  loading="lazy" 
/>

  <h3>Mark</h3>
  <p><strong>Draft Spot:</strong> 7 &nbsp; | &nbsp; <strong>Sobriety:</strong> sober maybe?</p>
  <p><strong>Yahoo Draft Grade:</strong> C+</p>
  <p>
    He took CMC with his first pick and if he stays healthy all year there is not a damn
    thing wrong with that — except he won’t and Mark is screwed. He took AJ and Lamar in his
    next two picks so IF CMC stays healthy he’s got some monsters with his top 3. The rest
    of the draft was pretty balanced and all in all not too shabby.
  </p>
  <p><em>Alpaca grade: </em></p>
  <img 
  src={recapImg5} 
  alt="Mark Alpaca Grade" 
  className="recap-inline-img" 
  loading="lazy" 
/>

  <h3>Gus / Prison Panther</h3>
  <p><strong>Draft Spot:</strong> 12 &nbsp; | &nbsp; <strong>Sobriety:</strong> nope, pretty sure not sober</p>
  <p><strong>Yahoo Draft Grade:</strong> C-</p>
  <p>
    He went WR/WR at the turn with Nico and Thomas Jr, solid WR core. Took Burrow in the 3rd,
    not a bad play this year. He did wait until the 5th and 7th rounds to get his RB’s so a
    little weak there. I would think he would have nabbed some RB’s in later rounds for some
    upside but he only took 2 after that, might be a problem.
  </p>
  <p><em>Alpaca grade: </em></p>
  <img 
  src={recapImg6} 
  alt="Gus Alpaca Grade" 
  className="recap-inline-img" 
  loading="lazy" 
/>

  <h3>McCool</h3>
  <p><strong>Draft Spot:</strong> 8 &nbsp; | &nbsp; <strong>Sobriety:</strong> nope, not sober</p>
  <p><strong>Yahoo Draft Grade:</strong> C-</p>
  <p>
    McCool started off RB/RB with Taylor and Irving, might be ok? Took Hurts in the 3rd,
    that is a good one. Harrison Jr and Sutton as his WR1/WR2, not bad at all. Ok, wtf, I’m
    scanning ahead here and all I can see now is that he took 4 QB’s, that’s a new record.
    This blows my Yahoo draft grade algorithm theory to shit. They should have just crowned
    him the champ but they gave him a C-, what is happening??!!
  </p>
  <p><em>Alpaca grade: </em></p>
  <img 
  src={recapImg7} 
  alt="McCool Alpaca Grade" 
  className="recap-inline-img" 
  loading="lazy" 
/>

  <h3>Scham-balls / Champ</h3>
  <p><strong>Draft Spot:</strong> 4 &nbsp; | &nbsp; <strong>Sobriety:</strong> unknown, on golf trip, hopefully wasted</p>
  <p><strong>Yahoo Draft Grade:</strong> D+</p>
  <p>
    He took Gibbs with his first pick, no problems there. Tee Higgins is his WR1, Allen is
    his QB. I’m looking at the rest of the draft and there is some potential there but a lot
    of things are going to have to go right. Hell I don’t know.
  </p>
  <p><em>Alpaca grade: </em></p>
  <img 
  src={recapImg8} 
  alt="Scham Alpaca Grade" 
  className="recap-inline-img" 
  loading="lazy" 
/>

  <h3>Shaw-balls</h3>
  <p><strong>Draft Spot:</strong> 11 &nbsp; | &nbsp; <strong>Sobriety:</strong> claims sober</p>
  <p><strong>Yahoo Draft Grade:</strong> D+</p>
  <p>
    Shaw is stacked at WR taking 4 of them in the first 5 rounds and nabbing Jayden Daniels
    in the 3rd. He then only drafted 3 RB’s after that but managed to get 3 TE’s in the
    process thank God. Whew, that was a close one. I don’t think this is going to end well.
  </p>
  <p><em>Alpaca grade: </em></p>
  <img 
  src={recapImg9} 
  alt="Shaw Alpaca Grade" 
  className="recap-inline-img" 
  loading="lazy" 
/>

  <h3>Matt</h3>
  <p><strong>Draft Spot:</strong> 3 &nbsp; | &nbsp; <strong>Sobriety:</strong> I don't "think" he was sober</p>
  <p><strong>Yahoo Draft Grade:</strong> D+</p>
  <p>
    He might have been on Auto draft for the 1st four rounds. He called and I was confused,
    I couldn’t tell if he was trying to draft from my website or just couldn’t log in to
    Yahoo. Mark and Fischer did their best to help, thanks fellas. His first 4 picks were
    RB’s and he got some good ones. His WR’s are pretty weak but he got some upside players
    in later rounds. He also took 3 QB’s. This might work out.
  </p>
  <p><em>Alpaca grade:</em></p>
  <img 
  src={recapImg10} 
  alt="Matt Alpaca Grade" 
  className="recap-inline-img" 
  loading="lazy" 
/>

  <h3>JD</h3>
  <p><strong>Draft Spot:</strong> 1 &nbsp; | &nbsp; <strong>Sobriety:</strong> pfft lol, ya, he was drunk</p>
  <p><strong>Yahoo Draft Grade:</strong> D</p>
  <p>
    Direct quote from Yahoo: “Well, well, well, if it isn’t Pound It Noggin, who decided to
    kick off their fantasy journey from the first pick with all the grace of a three-legged
    giraffe.” He got Chase with his 1st pick, solid, took TE in the 2nd with Bowers, ok,
    2 more WR’s after that. His first RB is Henderson in the 5th which might be solid af.
    His 2nd RB is Charbonnet who might not have value unless Walker gets hurt. I’m not sure
    what happened in the 9th round, he picked a guy named Zavier Scott who I think is 4th
    or 5th on the Vikings depth chart? It’s not a terrible team.
  </p>
  <p><em>Alpaca grade: </em></p>
  <img 
  src={recapImg11} 
  alt="JD Alpaca Grade" 
  className="recap-inline-img" 
  loading="lazy" 
/>

  <h3>Mish</h3>
  <p><strong>Draft Spot:</strong> 5 &nbsp; | &nbsp; <strong>Sobriety:</strong> not blacked out but feeling good</p>
  <p><strong>Yahoo Draft Grade:</strong> Accurate</p>
  <p>
    I was feeling pretty good with how things were going early. I didn’t realize it but I
    already had two Bears players by the 5th round. Got a decent TE in 6th, pretty solid WR
    core by the 7th. I had hoped to have a QB by now but they went early, ended up with
    Caleb Williams (3 Bears now). I took a kicker in the 11th for some stupid reason then
    took two more Bears in the final rounds for a grand total of 5 Bears players. Yup, my
    grade is accurate.
  </p>
  <p><em>Feel free to chime in anyway, Alpaca.</em></p>
  <img 
  src={recapImg12} 
  alt="Mish Alpaca Grade" 
  className="recap-inline-img" 
  loading="lazy" 
/>

  <p className="recap-outro">
    I haven’t decided if I am going to keep emailing during the season or just put this
    shit directly on the website. Either way, I had a blast on Friday night and looking
    forward to another great season!!
  </p>

  <p><strong>- Mish out!</strong></p>

{/* ✅ Inline GIF or MP4 */}
<img
  src={outroGif}
  alt="Mish outro gif"
  className="recap-inline-video"
  loading="lazy" 
/> 


</section>
,
  },
};

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

function RecapContent({ year }) {
  const y = String(year);

  if (y !== "2025") {
    return (
      <div className="recap-coming-soon">
        <h2>{y} Recap</h2>
        <p><em>chill bros, coming soon</em></p>
      </div>
    );
  }

  const data = RECAPS[y] || { images: [], videos: [] };
  const hasAnything = (data.images?.length || 0) + (data.videos?.length || 0) > 0;

  return (
    <section className="recap-content">
      <h2>2025 Draft Recap</h2>

      {!hasAnything && (
        data.notes
         ? data.notes // can be full JSX (section, images, etc.)
         : <p className="recap-note">Add media to src/assets and wire them up in RECAPS to display here.</p>
)}


      {data.images?.length > 0 && (
        <div className="recap-media-grid">
          {data.images.map((src, idx) => (
            <figure key={`img-${idx}`} className="recap-card">
              <img 
                src={src}
                alt={`2025 recap ${idx + 1}`}
                className="recap-img"
                loading="lazy"
/>

            </figure>
          ))}
        </div>
      )}

      {data.videos?.length > 0 && (
        <div className="recap-media-grid">
          {data.videos.map((src, idx) => (
            <figure key={`vid-${idx}`} className="recap-card">
              <video
                src={src}
                className="recap-video"
                controls
                playsInline
                loop
                preload="metadata"
              />
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}
function YearPager({ year, onPick }) {
  const min = 2016;
  const max = 2025;
  const prevYear = year - 1;
  const nextYear = year + 1;
  const hasPrev = prevYear >= min;
  const hasNext = nextYear <= max;

  return (
    <div className="recap-pager">
      <button
        className={`pager-btn ${!hasPrev ? "disabled" : ""}`}
        onClick={() => hasPrev && onPick(String(prevYear))}
        disabled={!hasPrev}
        aria-label={hasPrev ? `Go to ${prevYear}` : "No previous year"}
      >
        ← {hasPrev ? prevYear : "—"}
      </button>

      <button
        className={`pager-btn ${!hasNext ? "disabled" : ""}`}
        onClick={() => hasNext && onPick(String(nextYear))}
        disabled={!hasNext}
        aria-label={hasNext ? `Go to ${nextYear}` : "No next year"}
      >
        {hasNext ? nextYear : "—"} →
      </button>
    </div>
  );
}


export default function DraftRecaps() {
  const { year: yearParam } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const selectedYear = useMemo(() => {
    // If route has /draft-recaps/:year, use it; else default to 2025
    const y = yearParam || "2025";
    return YEARS.includes(Number(y)) ? y : "2025";
  }, [yearParam]);

  const handlePickYear = (y) => {
    if (location.pathname.includes("/draft-recaps")) {
      navigate(`/draft-recaps/${y}`);
    } else {
      navigate(`/draft-recaps/${y}`);
    }
  };

  return (
    <div className="recap-wrapper content-wrapper">
      <header className="recap-header">
        <h1>Draft Recaps</h1>
        <p className="recap-sub">Relive the chaos year by year.</p>
      </header>

      <YearButtons activeYear={selectedYear} onPick={handlePickYear} />

      <RecapContent year={selectedYear} />

      <YearPager year={Number(selectedYear)} onPick={handlePickYear} />

    </div>
  );
}
