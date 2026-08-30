// src/pages/DraftRecaps.js
import React, { useMemo } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

/**
 * HOW TO ADD MEDIA:
 * - Put your files in src/assets/recap-images (e.g., 2025-img1.jpg, recap-clip.mp4, etc.)
 * - Import them at the top (example commented out below), then add to RECAPS['YYYY'].
 *
 * import recapImg1 from "../assets/recap-images/2025-recap-1.jpg";
 * import recapImg2 from "../assets/recap-images/2025-recap-2.png";
 * import recapGif1 from "../assets/recap-images/2025-loop.gif";   // GIFs render as <img>
 * import recapVid1 from "../assets/recap-images/2025-recap.mp4";  // MP4s render in <video>
 */

// ===================== 2025 assets =====================
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

// ===================== 2024 assets =====================
import recap2024Img1 from "../assets/recap-images/2024RC-image-1.png";
import recap2024Img2 from "../assets/recap-images/2024RC-image-2.png";
import recap2024Img3 from "../assets/recap-images/2024RC-image-3.png";
import recap2024Img4 from "../assets/recap-images/2024RC-image-4.png";
import recap2024Img5 from "../assets/recap-images/2024RC-image-5.png";
import recap2024Img6 from "../assets/recap-images/2024RC-image-6.png";
import recap2024Img7 from "../assets/recap-images/2024RC-image-7.png";
import recap2024Img8 from "../assets/recap-images/2024RC-image-8.png";
import recap2024Img9 from "../assets/recap-images/2024RC-image-9.png";
import recap2024Img10 from "../assets/recap-images/2024RC-image-10.png";
import recap2024Img11 from "../assets/recap-images/2024RC-image-11.png";
import recap2024Img12 from "../assets/recap-images/2024RC-image-12.png";
import recap2024Outro from "../assets/recap-images/2024RC-outro-loop.gif";

// ===================== 2023 assets =====================
import recap2023Img1 from "../assets/recap-images/2023RC-loop-1.gif";
import recap2023Img2 from "../assets/recap-images/2023RC-loop-2.gif";
import recap2023Img3 from "../assets/recap-images/2023RC-loop-3.gif";
import recap2023Img4 from "../assets/recap-images/2023RC-loop-4.gif";
import recap2023Img5 from "../assets/recap-images/2023RC-loop-5.gif";
import recap2023Img6 from "../assets/recap-images/2023RC-loop-6.gif";
import recap2023Img7 from "../assets/recap-images/2023RC-loop-7.gif";
import recap2023Img8 from "../assets/recap-images/2023RC-loop-8.gif";
import recap2023Img9 from "../assets/recap-images/2023RC-loop-9.gif";
import recap2023Img10 from "../assets/recap-images/2023RC-loop-10.gif";
import recap2023Img11 from "../assets/recap-images/2023RC-loop-11.gif";
import recap2023Img12 from "../assets/recap-images/2023RC-loop-12.gif";
import recap2023Outro from "../assets/recap-images/2023RC-outro-loop.gif";

// ===================== 2022 assets =====================
import recap2022Img1 from "../assets/recap-images/2022RC-image-1.png";
import recap2022Img2 from "../assets/recap-images/2022RC-image-2.png";
import recap2022Img3 from "../assets/recap-images/2022RC-image-3.png";
import recap2022Img4 from "../assets/recap-images/2022RC-image-4.png";
import recap2022Img5 from "../assets/recap-images/2022RC-image-5.png";
import recap2022Img6 from "../assets/recap-images/2022RC-image-6.png";
import recap2022Img7 from "../assets/recap-images/2022RC-image-7.png";
import recap2022Img8 from "../assets/recap-images/2022RC-image-8.png";
import recap2022Img9 from "../assets/recap-images/2022RC-image-9.png";
import recap2022Img10 from "../assets/recap-images/2022RC-image-10.png";
import recap2022Img11 from "../assets/recap-images/2022RC-image-11.png";
import recap2022Img12 from "../assets/recap-images/2022RC-image-12.png";
import recap2022Img13 from "../assets/recap-images/2022RC-image-13.png";
import recap2022Outro from "../assets/recap-images/2022RC-outro-loop.gif";

// 2021 recap assets
import recap2021Loop1 from "../assets/recap-images/2021RC-loop-1.gif";
import recap2021Loop2 from "../assets/recap-images/2021RC-loop-2.gif";
import recap2021Loop3 from "../assets/recap-images/2021RC-loop-3.gif";
import recap2021Image1 from "../assets/recap-images/2021RC-image-1.png";
import recap2021Loop4 from "../assets/recap-images/2021RC-loop-4.gif";
import recap2021Loop5 from "../assets/recap-images/2021RC-loop-5.gif";
import recap2021Loop6 from "../assets/recap-images/2021RC-loop-6.gif";
import recap2021Loop7 from "../assets/recap-images/2021RC-loop-7.gif";
import recap2021Loop8 from "../assets/recap-images/2021RC-loop-8.gif";
import recap2021Loop9 from "../assets/recap-images/2021RC-loop-9.gif";
import recap2021Loop10 from "../assets/recap-images/2021RC-loop-10.gif";
import recap2021Loop11 from "../assets/recap-images/2021RC-loop-11.gif";
import recap2021Loop12 from "../assets/recap-images/2021RC-loop-12.gif";
import recap2021Loop13 from "../assets/recap-images/2021RC-loop-13.gif";
import recap2021Outro from "../assets/recap-images/2021RC-outro-loop.gif";

// 2020 recap assets
import recap2020Loop1 from "../assets/recap-images/2020RC-loop-1.gif";
import recap2020Loop2 from "../assets/recap-images/2020RC-loop-2.gif";
import recap2020Img1 from "../assets/recap-images/2020RC-image-1.png";
import recap2020Img2 from "../assets/recap-images/2020RC-image-2.png";
import recap2020Img3 from "../assets/recap-images/2020RC-image-3.png";
import recap2020Img4 from "../assets/recap-images/2020RC-image-4.png";
import recap2020Img5 from "../assets/recap-images/2020RC-image-5.png";
import recap2020Img6 from "../assets/recap-images/2020RC-image-6.png";
import recap2020Img7 from "../assets/recap-images/2020RC-image-7.png";
import recap2020Img8 from "../assets/recap-images/2020RC-image-8.png";
import recap2020Img9 from "../assets/recap-images/2020RC-image-9.png";
import recap2020Img10 from "../assets/recap-images/2020RC-image-10.png";
import recap2020Img11 from "../assets/recap-images/2020RC-image-11.png";
import recap2020Img12 from "../assets/recap-images/2020RC-image-12.png";
import recap2020Outro from "../assets/recap-images/2020RC-outro-loop.gif";

// 2019 recap assets
import recap2019Loop1 from "../assets/recap-images/2019RC-loop-1.gif";
import recap2019Loop2 from "../assets/recap-images/2019RC-loop-2.gif";
import recap2019Loop3 from "../assets/recap-images/2019RC-loop-3.gif";
import recap2019Loop4 from "../assets/recap-images/2019RC-loop-4.gif";
import recap2019Loop5 from "../assets/recap-images/2019RC-loop-5.gif";
import recap2019Loop6 from "../assets/recap-images/2019RC-loop-6.gif";
import recap2019Loop7 from "../assets/recap-images/2019RC-loop-7.gif";
import recap2019Loop8 from "../assets/recap-images/2019RC-loop-8.gif";
import recap2019Loop9 from "../assets/recap-images/2019RC-loop-9.gif";
import recap2019Loop10 from "../assets/recap-images/2019RC-loop-10.gif";
import recap2019Loop11 from "../assets/recap-images/2019RC-loop-11.gif";
import recap2019Loop12 from "../assets/recap-images/2019RC-loop-12.gif";
import recap2019Outro from "../assets/recap-images/2019RC-outro-loop.gif";

// 2018 recap assets
import recap2018Loop1 from "../assets/recap-images/2018RC-loop-1.gif";
import recap2018Loop2 from "../assets/recap-images/2018RC-loop-2.gif";
import recap2018Loop3 from "../assets/recap-images/2018RC-loop-3.gif";
import recap2018Loop4 from "../assets/recap-images/2018RC-loop-4.gif";
import recap2018Loop5 from "../assets/recap-images/2018RC-loop-5.gif";
import recap2018Loop6 from "../assets/recap-images/2018RC-loop-6.gif";
import recap2018Loop7 from "../assets/recap-images/2018RC-loop-7.gif";
import recap2018Loop8 from "../assets/recap-images/2018RC-loop-8.gif";
import recap2018Loop9 from "../assets/recap-images/2018RC-loop-9.gif";
import recap2018Loop10 from "../assets/recap-images/2018RC-loop-10.gif";
import recap2018Loop11 from "../assets/recap-images/2018RC-loop-11.gif";
import recap2018Loop12 from "../assets/recap-images/2018RC-loop-12.gif";
import recap2018Outro from "../assets/recap-images/2018RC-outro-loop.gif";

// 2017 recap (PDF)
import recap2017Pdf from "../assets/recap-images/2017-Laser-Shark-Draft-Grade.pdf";

import recap2016Img1 from "../assets/recap-images/2016RC-image-1.png";
import recap2016Img2 from "../assets/recap-images/2016RC-image-2.png";
import recap2016Img3 from "../assets/recap-images/2016RC-image-3.png";
import recap2016Img4 from "../assets/recap-images/2016RC-image-4.png";
import recap2016Img5 from "../assets/recap-images/2016RC-image-5.png";
import recap2016Img6 from "../assets/recap-images/2016RC-image-6.png";
import recap2016Img7 from "../assets/recap-images/2016RC-image-7.png";
import recap2016Img8 from "../assets/recap-images/2016RC-image-8.png";
import recap2016Img9 from "../assets/recap-images/2016RC-image-9.png";
import recap2016Img10 from "../assets/recap-images/2016RC-image-10.png";
import recap2016Img11 from "../assets/recap-images/2016RC-image-11.png";
import recap2016Img12 from "../assets/recap-images/2016RC-image-12.png";

// ===================== 2026 assets =====================
import recap2026HotBalls from "../assets/recap-images/2026RC-hotballs.gif";
import recap2026Debo1 from "../assets/recap-images/2026RC-debo-1.mp4";
import recap2026Debo2 from "../assets/recap-images/2026RC-debo-2.mp4";
import recap2026BeerSlap from "../assets/recap-images/2026RC-beerslap.jpg";
import recap2026Fireworks from "../assets/recap-images/2026RC-fireworks.mp4";
import recap2026Mark from "../assets/recap-images/2026RC-mark.png";
import recap2026Fischer from "../assets/recap-images/2026RC-fischer.png";
import recap2026Debo from "../assets/recap-images/2026RC-debo.png";
import recap2026Scham from "../assets/recap-images/2026RC-scham.png";
import recap2026Jd from "../assets/recap-images/2026RC-jd.png";
import recap2026Marcello from "../assets/recap-images/2026RC-marcello.png";
import recap2026Shaw from "../assets/recap-images/2026RC-shaw.png";
import recap2026Mish from "../assets/recap-images/2026RC-mish.png";
import recap2026Gus from "../assets/recap-images/2026RC-gus.png";
import recap2026Mccool from "../assets/recap-images/2026RC-mccool.png";
import recap2026Dd from "../assets/recap-images/2026RC-dd.png";
import recap2026Matt from "../assets/recap-images/2026RC-matt.png";
import recap2026Outro1 from "../assets/recap-images/2026RC-outro-1.gif";
import recap2026Outro2 from "../assets/recap-images/2026RC-outro-2.gif";
import recap2026Outro3 from "../assets/recap-images/2026RC-outro-3.mp4";


// Years 2016..2026 (desc)
const YEARS = Array.from({ length: 2026 - 2016 + 1 }, (_, i) => 2016 + i).reverse();

// ===================== DATA: RECAPS =====================
const RECAPS = {
  "2026": {
    images: [],
    videos: [],
    notes: (
      <section className="recap-writeup">
        <h2>Hot Balls Season 11 Draft Recap</h2>

        <p>
          We had a decent turnout this year, Champ, McCool, Mark, JD, Debo and DD
          with a rare appearance and plenty of others stopped by here and there
          throughout the day and night. The highlights of the night were hot
          balls, fireworks and lots of meat.
        </p>

        <img src={recap2026HotBalls} alt="Hot balls" className="recap-inline-img" loading="lazy" />

        <p>
          My kids talked me into trying a hot ball (2,200,000 scofield units)
          today and I can confirm it feels like this.
        </p>

        <p>
          Champ and Debo, however, ate the most. Debo had 20+ and Champ wasn’t too
          far behind. Here are the videos
        </p>

        <video className="recap-inline-video" controls playsInline preload="metadata">
          <source src={recap2026Debo1} type="video/mp4" />
        </video>
        <video className="recap-inline-video" controls playsInline preload="metadata">
          <source src={recap2026Debo2} type="video/mp4" />
        </video>

        <p>
          We also have a new tradition of sorts, slapping beers out of Debo’s or
          JD’s or my hands. Somehow I escaped it this year and it was just JD and
          Debo. JD was taking a piss and he told me he was wondering when someone
          would slap a beer out of hands, he then walked outside and Debo slapped
          the beer out of his hand. Then JD threw beer in his eye, this hurt him
          somehow more than 66,000,000 cumulative scofield units. Debo is now JD’s
          favorite brother.
        </p>

        <img src={recap2026BeerSlap} alt="Beer slap aftermath" className="recap-inline-img" loading="lazy" />

        <p>
          And finally, I meant to do this last year for Fischer’s rookie debut. He
          likes to do intepretive dance with roman candles with Coming To America
          by Neil Diamond in the background. Well I remembered this year and he did
          not dissapoint.
        </p>

        <video className="recap-inline-video" controls playsInline preload="metadata">
          <source src={recap2026Fireworks} type="video/mp4" />
        </video>

        <p>
          Oh ya, this is supposed to be the draft recap and draft grades. My bad,
          here we go. Like in the past, I have asked someone else to grade the
          drafts. My research this year consisted of printing 30 pages of fantasy
          football analysis the morning of the draft that I didn’t read and used
          as a mouse pad. Since JD and I were just in Forks, Washington the town
          Twilight was based in, I thought I would ask Kristen Stewart.
        </p>

        <h3>Mark — unfollowbobo — Draft Spot 2 — Yahoo Grade A+</h3>
        <p>
          Mark led the pack with an A+ grade from Yahoo from the #2 spot. It’s a
          freaking solid team, I had to double check a couple of times to make
          sure unfollowbobo was actually Mark. Bijan, Nico, Josh Allen, D’Andre
          Swift and DJ Moore were his first 5 picks. He also got a top Defense
          later on and has plenty of depth. I think Kristen likes it but I can’t
          tell.
        </p>
        <img src={recap2026Mark} alt="Kristen Stewart reaction to Mark" className="recap-inline-img" loading="lazy" />
        <p><em>Ooooh girl, stop it</em></p>

        <h3>Champ / Fischer — Dice Roll Aaron — Draft Spot 1 — Yahoo Grade A+</h3>
        <p>
          Champ got the 2nd highest Yahoo grade with an A+ as well. He had the #1
          pick and went with Gibbs, Pickens, Javonte, Skattebo and McClaurin. He
          waited on QB and got Purdy then he got 2 more QB’s after that. 2 kickers
          and 2 defenses. His weakest positions are WR and TE. On paper this team
          could work but Skattebo will likely have an arm ripped off doing
          competitive arm wrestling and Brock Purdy is on the 49ers and we all
          know how well they take care of their players. Can’t wait to see who the
          new champ is this year 😉 Kristen I think agrees with me.
        </p>
        <img src={recap2026Fischer} alt="Kristen Stewart reaction to Champ" className="recap-inline-img" loading="lazy" />
        <p><em>Totes agree</em></p>

        <h3>Debo — Happy Hour — Draft Spot 5 — Yahoo Grade B+</h3>
        <p>
          Debo got the 3rd highest grade with a B+, he drafted from the 5 spot. He
          went Amon-Ra, Jeanty, Olave, Jacobs and Odunze. He took his QB in the
          7th with Daniels and his TE right after that with Kelce (I thought he
          retired after Taylor Swift got him pregnant). Then he hit up another QB
          and two top defenses and then and then 2 more TE’s. I’m not sure if this
          was before or after he fried his brain and asshole with hot balls. His
          weakness is RB as he only has 4 of them. And his RB2 is facing legal
          problems and a possible suspension. Yikes. Kristen, let him have it girl.
        </p>
        <img src={recap2026Debo} alt="Kristen Stewart reaction to Debo" className="recap-inline-img" loading="lazy" />
        <p><em>Man this bitch is stone cold</em></p>

        <h3>Scham-Balls — Team Steiners — Draft Spot 4 — Yahoo Grade B</h3>
        <p>
          Former, former, former champ Scham-Balls got a B from the 4 spot. He
          started off with Chase, rookie Jeremiyah love, DeVonta Smith, Lamar
          Jackson and then David Montgomery. Two tight ends after that, LaPorta and
          Pitts. He took his kicker and defense in the 10th and 11th rounds
          instead of building depth but he did that in the remainder of the rounds.
          I don’t know, I can’t talk smack, the dude has won 3 times. Maybe Kristen
          can give an unbiased opinion.
        </p>
        <img src={recap2026Scham} alt="Kristen Stewart reaction to Scham-Balls" className="recap-inline-img" loading="lazy" />
        <p><em>I don’t even know what that means</em></p>

        <h3>JD — Pound It Noggin — Draft Spot 3 — Yahoo Grade: top 6</h3>
        <p>
          JD made it into the top 6 grades this year somehow from the #3 spot. He
          went Taylor, London, AJ Brown, Etienne and took Caleb Williams in the
          5th. Fairly balanced draft after that just picking up one of each DEF and
          K and building depth instead. My only concern is he has one TE and it is
          Dallas Goedert. Could be a problem. Kristen?
        </p>
        <img src={recap2026Jd} alt="Kristen Stewart reaction to JD" className="recap-inline-img" loading="lazy" />
        <p><em>Jesus lady settle down</em></p>

        <h3>Marcello — Slippery Jack — Draft Spot 12 — Yahoo Grade C</h3>
        <p>
          Marcello opted for the #12 draft spot and ended up with a C grade. He
          concentrated on RB and WR the first 6 rounds (Lamb, Walker III, Rice,
          McMillan, Burden and Tuten. Then he took his QB Herbert. He ended up with
          KIttle as his TE and he should be great except for the 49ers injury
          curse. I mean c’mon, their freakin coach got injured in the preseason. He
          did pick up a backup TE thankfully and 2 backup QB’s. He waited all the
          way until the 16th and 17th rounds to pick up his DEF and K. Mad respect
          bro.
        </p>
        <img src={recap2026Marcello} alt="Kristen Stewart reaction to Marcello" className="recap-inline-img" loading="lazy" />
        <p><em>Damn tootin</em></p>

        <h3>Shaw-Balls — Kenny Powers — Yahoo Grade C-</h3>
        <p>
          Former, former champ Shaw-balls had his wife Tiffany pay his dues and
          draft for him as well apparently. He gets a C- from Yahoo. Well shit, I
          wrote that before I looked at his team and its actually mostly solid I
          think. Barkley, Jefferson, Flowers, Wilson, Irving and Hurts. He has lots
          of WR talent and depth but is pretty weak at RB. His TE is Mark Andrews
          who I also thought was retired after he got pregnant by a pop star. He
          waited until the last 3 rounds to pick his kicker and defenses. I’m torn.
          Kristen how ‘bout you?
        </p>
        <img src={recap2026Shaw} alt="Kristen Stewart reaction to Shaw-Balls" className="recap-inline-img" loading="lazy" />
        <p><em>Ya Kristen I know, right?</em></p>

        <h3>Mish — Da Mish — Draft Spot 11 — Yahoo Grade D+</h3>
        <p>
          Your Mish got a D+, I mean I had a friends 15 year old son giving me
          advice and it made sense at the time but now I don’t know. I wasn’t even
          that drunk yet. I had the #11 spot. I started off with Achane and
          Hampton, got my WR’s with Higgins and Watson. Took Tyler Warren as my TE.
          I have Trevor Lawrence as my QB which worked out pretty well for Fischer
          last year. I took my K and DEF in the 13th and 14th instead of the last 2
          rounds. I have a backup QB which I almost never do. I’m not sure if I
          actually drafted this team or not. This might actually work out! Kristen?!
          Do you like it?!
        </p>
        <img src={recap2026Mish} alt="Kristen Stewart reaction to Mish" className="recap-inline-img" loading="lazy" />
        <p><em>I going to put some hot balls in her mouth, that should perk her right up</em></p>

        <h3>Gus — Prison Panther — Draft Spot 8 — Yahoo Grade D</h3>
        <p>
          Gus is usually a regular at the draft but sadly he couldn’t make it. He
          drafted from the 8 spot and got a D. He started with JSN, King Henry,
          Nabers, TE Loveland, Davante Adams and Stevenson. He nabbed Preskott in
          the 7th and he might have been the first to take a kicker in the 10th.
          He’s got decent depth but if this ends up being the year Henry falls off
          a cliff he is screwed because the rest of his RB’s are trash. I don’t
          know about this one Gussy poo. Kristen, how do you feel about Gussy-poo?
        </p>
        <img src={recap2026Gus} alt="Kristen Stewart reaction to Gus" className="recap-inline-img" loading="lazy" />
        <p><em>Don’t worry guys, he’s used to it</em></p>

        <h3>McCool — HingleMcCringleberry — Draft Spot 6 — Yahoo Grade D</h3>
        <p>
          McCool came in right behind Gus like usual with a solid D from the 6
          spot. He started off with CMAC, Bowers, Hall, Egbuka and Judkins. He’s
          got good depth after that and I love the Bowers pick. He’s got good depth
          as well, 2 defenses meh but only one kicker, loving that too. Overall I
          think this is a decent team so long as McCaffrey stays healthy. If not,
          buh bye. Kristen?
        </p>
        <img src={recap2026Mccool} alt="Kristen Stewart reaction to McCool" className="recap-inline-img" loading="lazy" />
        <p><em>Its ok baby, you just need some McHotBalls</em></p>

        <h3>DD — Double D’s — Draft Spot 10 — Yahoo Grade D</h3>
        <p>
          DD went from double D’s to triple D’s because he got a D from the 10 spot.
          It’s too bad Yahoo is a robot otherwise it would realize 3 D’s are better
          than 2. He went Puca, Brown, Waddle, Burrow, Price and Kraft. Gross.
          Smells like my draft. Hell, I am just glad he was able to make it to the
          draft this year so I just want to say good job sir. Good depth, one K one
          DEF like a sane person. Kristen?
        </p>
        <img src={recap2026Dd} alt="Kristen Stewart reaction to DD" className="recap-inline-img" loading="lazy" />
        <p><em>I’ve never seen her react this way, wow, just wow. You got that Pittsburg Cignetti special sauce</em></p>

        <h3>Welsch / Matt — smakdown — Draft Spot 7 — Yahoo Grade D-</h3>
        <p>
          Welsch caught me before the draft with a good joke on GroupMe. Well done
          Matt. He drafted from the 7th spot and ended up with the worst Yahoo
          grade at D-. Lets see why. Alright he went Cook, Williams, McBride, his
          first WR in the 4th with McConkey, Drake Maye in the 5th, his WR2 in the
          6th with Parker Washington. Ok, I don’t see a problem here. He’s got a
          good defense and good kicker without backups for them, thats fine by me
          too. Huh, well I like the team. Kristen?
        </p>
        <img src={recap2026Matt} alt="Kristen Stewart reaction to Welsch" className="recap-inline-img" loading="lazy" />
        <p><em>Gasp! Is she being sarcastic or was I?!</em></p>

        <p>
          Alright fellas, another successful draft in the books. Thank you all for
          being a part of this league, thanks to those that came out to get stupid
          with me and sorry to those that couldn’t make it. Good luck this year and
          may the best defense win!
        </p>
        <p><strong>-Mish out bitches!</strong></p>

        <img src={recap2026Outro1} alt="2026 draft outro" className="recap-inline-img" loading="lazy" />
        <img src={recap2026Outro2} alt="2026 draft outro" className="recap-inline-img" loading="lazy" />
        <p><em>Well if you say so</em></p>
        <video className="recap-inline-video" autoPlay loop muted playsInline preload="metadata">
          <source src={recap2026Outro3} type="video/mp4" />
        </video>
      </section>
    ),
  },
  "2025": {
    images: [],
    videos: [],
    notes: (
      <section className="recap-writeup">
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
        <img src={recapImg1} alt="Marcello Alpaca Grade" className="recap-inline-img" loading="lazy" />

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
        <img src={recapImg2} alt="Fischer Alpaca Grade" className="recap-inline-img" loading="lazy" />

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
        <img src={recapImg3} alt="DD Alpaca Grade" className="recap-inline-img" loading="lazy" />

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
        <img src={recapImg4} alt="Debo Alpaca Grade" className="recap-inline-img" loading="lazy" />

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
        <img src={recapImg5} alt="Mark Alpaca Grade" className="recap-inline-img" loading="lazy" />

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
        <img src={recapImg6} alt="Gus Alpaca Grade" className="recap-inline-img" loading="lazy" />

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
        <img src={recapImg7} alt="McCool Alpaca Grade" className="recap-inline-img" loading="lazy" />

        <h3>Scham-balls / Champ</h3>
        <p><strong>Draft Spot:</strong> 4 &nbsp; | &nbsp; <strong>Sobriety:</strong> unknown, on golf trip, hopefully wasted</p>
        <p><strong>Yahoo Draft Grade:</strong> D+</p>
        <p>
          He took Gibbs with his first pick, no problems there. Tee Higgins is his WR1, Allen is
          his QB. I’m looking at the rest of the draft and there is some potential there but a lot
          of things are going to have to go right. Hell I don’t know.
        </p>
        <p><em>Alpaca grade: </em></p>
        <img src={recapImg8} alt="Scham Alpaca Grade" className="recap-inline-img" loading="lazy" />

        <h3>Shaw-balls</h3>
        <p><strong>Draft Spot:</strong> 11 &nbsp; | &nbsp; <strong>Sobriety:</strong> claims sober</p>
        <p><strong>Yahoo Draft Grade:</strong> D+</p>
        <p>
          Shaw is stacked at WR taking 4 of them in the first 5 rounds and nabbing Jayden Daniels
          in the 3rd. He then only drafted 3 RB’s after that but managed to get 3 TE’s in the
          process thank God. Whew, that was a close one. I don’t think this is going to end well.
        </p>
        <p><em>Alpaca grade: </em></p>
        <img src={recapImg9} alt="Shaw Alpaca Grade" className="recap-inline-img" loading="lazy" />

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
        <img src={recapImg10} alt="Matt Alpaca Grade" className="recap-inline-img" loading="lazy" />

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
        <img src={recapImg11} alt="JD Alpaca Grade" className="recap-inline-img" loading="lazy" />

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
        <img src={recapImg12} alt="Mish Alpaca Grade" className="recap-inline-img" loading="lazy" />

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
    ),
  },

  "2024": {
    images: [],
    videos: [],
    notes: (
      <section className="recap-writeup">
        <h2>Season 9</h2>

        <p>
          The time is finally here, first game tonight and another Friday, let's go!
        </p>
        <p>
          The draft went off without a hitch just like picking the draft order. All is well in the world.
        </p>
        <p>
          So just like in previous years, I will post the Yahoo Draft Grade, my take, and then Samuel L Jackson will chime in.
        </p>

        <h3>Wick: <em>Yahoo Draft Grade A+</em></h3>
        <p>
          Wick is projected to go 13-1 according to Yahoo, let's dig in. He got the 1st pick and he started off RB/RB with CMC and Pachecho and picked up 4 more RB's in later rounds to protect himself, can't argue there. His next 3 picks were WR's in high power offenses, not bad but none of them are WR1 caliber so he is really banking on good RB play. He picked up Dak as his QB in 7th, no complaints there but he ended up with Njoku as a TE, which might hurt down the road. What does SLJ think?
        </p>
        <img src={recap2024Img1} alt="SLJ on Wick's grade" className="recap-inline-img" loading="lazy" />

        <h3>Gus/Prison Panther: <em>Yahoo Draft Grade A+</em></h3>
        <p>
          Gus is projected to go 11-3 according to Yahoo, let's see why. Drafting 3 QB's might have something to do with it but WTH do I know. Gus had the 4th pick and started off with Tyreek Hill, I mean I don't think anyone can argue with that. But his next pick was Nico Collins, that is where is ADP was but honestly I think he should have been 2 or 3 more rounds down. I was going to give him trouble for taking Lamar Jackson instead of an RB in round 3 but he picked up Joe Mixon in round 4, that was a solid pick. But THEN, but THEN, he waited until the 9th round to pick up his 2nd RB. By the end of it all he ended up with 3 RB's. He might go 11-3 but not with the depth me thinks. What does SLJ think?
        </p>
        <img src={recap2024Img2} alt="SLJ on Gus's grade" className="recap-inline-img" loading="lazy" />

        <h3>Mark/bobo: <em>Yahoo Draft Grade B+</em></h3>
        <p>
          Mark is projected to go 9-5 this year. His first pick was AJ Brown, love it, 2nd pick was Puca Nacua, hate it. I stayed away from Puka at this ADP all day long. His 3rd pick was also a WR (Olave) and I actually like Olave as the 2nd WR over Nacua. Next two picks were CJ stroud and Kittle, seems he is kind of punting on RB this year. BUT, he did manage to get David Montgomery with the next pick and that is pretty solid. Devin Singletary as his RB 2 though, not so solid. He has depth at WR and TE but his RB field is lacking. What does SLJ think?
        </p>
        <img src={recap2024Img3} alt="SLJ on Mark's grade" className="recap-inline-img" loading="lazy" />

        <h3>Scham/Steiners: <em>Yahoo Grade B</em></h3>
        <p>
          Scham is projected to go 10-4 this year, mmmmk. Scham had the 5th pick in the draft and he started out with Chase which is a steal in my opinion. I just found out last night though that he might not even play in the 1st game. Doesn't matter, it's a long season and Chase will get his. His next pick was Henry, I like it, he has a RB1 and WR 1 right off the bat. His love affair with Mahomes continued and he took him in the 3rd round. His next two picks were Smith(WR) and Walker (RB). This is shaping up pretty nicely. THEN, he took Anthony Richardson for some mind numbing reason. WHY DO YOU NEED MAHOMES AND RICHARDSON?!! The rest of the draft was boring depth building and he waited until the 11th to pick up his TE, I can't blame, most of the good options were gone anyway, might as well wait. What does SLJ think?
        </p>
        <img src={recap2024Img4} alt="SLJ on Scham's grade" className="recap-inline-img" loading="lazy" />

        <h3>MAC/Hingle: <em>Yahoo Draft Grade B</em></h3>
        <p>
          Mac is projected to go 9-5 using the 6th pick. He started off with Breece Hall (RB) then Kelce. I can't say that's a bad way to start but a TE in the 2nd round is a little too early for my tastes. He then nabbed Josh Jacobs so his RB core is looking solid. His next 3 picks were WR's, Moore, Flowers and Pickens. Not a fan of the Flowers pick. Tua is his QB, ok, ok, not bad. The rest is kind of boring, he has "depth." What does SLJ think?
        </p>
        <img src={recap2024Img5} alt="SLJ on Mac's grade" className="recap-inline-img" loading="lazy" />

        <h3>JD/Pound It: <em>Yahoo Draft Grade C+</em></h3>
        <p>
          Yahoo didn't bother to project his finishing record but did project a 7th place finish. He started off with Amon Ra, no complaints. He took Hurts in the 2nd round, to each his own, too early for a QB in my opinion. That left him with Achane and Rachaad White as his RB's. Amon Ra and Diggs are a solid WR core at least. He'll be relying on Hurts and his WR's this year, nothing too exciting anywhere else. Strolling through the rest of his draft I am struggling with finding anything negative or positive to say so I'll pass it on to SLJ.
        </p>
        <img src={recap2024Img6} alt="SLJ on JD's grade" className="recap-inline-img" loading="lazy" />

        <h3>Marcello/Slippery Jack: <em>Yahoo Draft Grade C</em></h3>
        <p>
          Marcello had the 2nd pick and is projected to go 8-6. He started off with Lamb and Evans as his two WR's, a very solid start. He nabbed Josh Allen in the 3rd making sure he had a top tier QB. Then he built his RB stables with Jones, Conner and Mostert. This is looking good so far. He still managed to get a top 12 TE in the 8th round. And somewhere along the way he got the most annoying fantasy football player in the game, Taysom Hill. What does SLJ think?
        </p>
        <img src={recap2024Img7} alt="SLJ on Marcello's grade" className="recap-inline-img" loading="lazy" />

        <h3>Matt/smakdown: <em>Yahoo Draft Grade C-</em></h3>
        <p>
          Matt had the 9th pick this year and is projected to go 5-9. He started off with Justin Jefferson and Kyren Williams so he has a good base to start. Then Deebo Samuel and James Cook so his WR/RB core is solid. Then he continued to fill in his starting line up with Trey McBride and Brock Purdy. I have to say, this is one of the more well balanced starts I have seen so far. Scanning the rest of the draft he picked some solid backup options with potential. I think Yahoo got this one wrong. What does SLJ think?
        </p>
        <img src={recap2024Img8} alt="SLJ on Matt's grade" className="recap-inline-img" loading="lazy" />

        <h3>Champ/Kenny: <em>Yahoo Draft Grade D</em></h3>
        <p>
          Shaw chose the 12th spot to draft from this year and Yahoo projects him to go 4-10 because of it. He chose to go early on RB's this year, grabbing Gibbs and Barkley, given the WR depth I don't think this was a bad play. His next 5 picks were WR and most of them are interchangeable I think. He waited all the way until the 9th round to pick up Kyler Murray, for some reason he was ranked pretty high on my draft board and even in the 9th round I don't think I would have wanted anything to do with him. He got 2 serviceable TE's but for some reason drafted 2 more QB's after that. I am not sure what to think about this one folks, SLJ?
        </p>
        <img src={recap2024Img9} alt="SLJ on Champ's grade" className="recap-inline-img" loading="lazy" />

        <h3>Don/DD's: <em>Yahoo Draft Grade D</em></h3>
        <p>
          DD had the 8th pick and is projected to finish 3-11. He was the lucky one that got to draft Taylor in the 1st round, and he followed that up with Marvin Harrison Jr, great start. Cooper Kupp in the 3rd, meh. Sam LaPorta in the 4th, ok thats fine. Jordan love in the 5th, ummm. His next few picks were finishing out his starting lineup with RB's and WR's thank God. But then he ended up picking up 2 more QB's for 3 total, someone else did this but I forget. Why, why, why? SLJ?
        </p>
        <img src={recap2024Img10} alt="SLJ on DD's grade" className="recap-inline-img" loading="lazy" />

        <h3>Mish: <em>Yahoo Draft Grade D-</em></h3>
        <p>
          Well hell, I got the 11th pick and am projected to go 3-11. My first pick was Garrett Wilson, I might regret that. Second pick was Etienne, might regret that too. Then I got Kamara and Nabers, I'm pretty happy with that 3rd round 4th round combo. I picked up Burrow and Engram to fill my starting lineup, not sad about that either. Then I filled in some depth, backup QB Goff, probably shouldn't have done that. The rest is pretty much garbage. Give it to me SLJ.
        </p>
        <img src={recap2024Img11} alt="SLJ on Mish's grade" className="recap-inline-img" loading="lazy" />

        <h3>Debo/Happy Hour: <em>Yahoo Draft Grade D-</em></h3>
        <p>
          Debo had the 7th pick and is projected to finish 2-12. He grabbed Bijan Robinson with his 1st pick, a steal at pick 7 in my opinion. Then he went with Davante Adams, looking good. THEN he picked DK Metcalf, way too early in my opinion, probably could have gotten him 2-3 rounds later. Solid TE in Andrews, Swift as his RB2 works for me. The rest of the draft was the rest of the draft, not much else to say. A lot of reaching by Debo in this one but he was in the championship last year. WWSLJD?
        </p>
        <img src={recap2024Img12} alt="SLJ on Debo's grade" className="recap-inline-img" loading="lazy" />

        <p>
          For those of us that got poor draft grades don't worry, Yahoo draft grades are meaningless in my opinion and bad grades are usually a good thing. For those of you that got good Yahoo draft grades, good job, they are rarely wrong.
        </p>
        <p>
          Are you ready for some football! First game tonight!
        </p>
        <p><strong>- Mish Out</strong></p>

        {/* outro GIF */}
        <img
          src={recap2024Outro}
          alt="2024 outro"
          className="recap-inline-video"
          loading="lazy"
        />
      </section>
    ),
  },
 // === 2023 ===
  "2023": {
    images: [],
    videos: [],
    notes: (
      <section className="recap-writeup">
        <h2>Season 8</h2>
        <p>
          First, thanks to everyone that made the trek, had a blast with you all. Sorry it didn't work out for some of you but I definitely get it. Last year the teams that did the best didn't make it to the draft, we'll see how it shakes out this year :)
        </p>
        <p>
          Also sorry the draft order seemed to have been messed up, I have no idea what happened there, frustrating.
        </p>
        <p>Will Ferrell is chiming in this year</p>

        <h3>DD — Yahoo Draft Grade A+</h3>
        <p>
          He went the first six rounds switching between RB's and WR's and he's got some good ones. He waited on QB and ended up with Dak and went early in round 9 to pick up Justin Tucker. Seems like a good team on paper but what do I know?
        </p>
        <img src={recap2023Img1} alt="Will Ferrell on DD" className="recap-inline-img" loading="lazy" />

        <h3>Wick — Yahoo Draft Grade A</h3>
        <p>
          He started off WR/RB then nabbed Lamar Jackson in the 3rd. Pretty well rounded draft after that but I have to admit he picked a lot of people I have never heard of. Probably says more about me than him. So I guess it's a good team?
        </p>
        <img src={recap2023Img2} alt="Will Ferrell on Wick" className="recap-inline-img" loading="lazy" />

        <h3>Gus — Yahoo Draft Grade A</h3>
        <p>
          Gus waited until round 3 and round 8 to get his running backs, not a bad plan this year. He ended up with some good TE's and a solid QB and overall I like it. Does Will?
        </p>
        <img src={recap2023Img3} alt="Will Ferrell on Gus" className="recap-inline-img" loading="lazy" />

        <h3>Debo — Yahoo Draft Grade B+</h3>
        <p>
          He was able to get the coveted Travis Kelce. Kelce single handedly broke the rule of it being a bad idea to draft a TE in the 1st round. He went WR, WR, QB after that also choosing to wait on RB. Then he went to the next 4 rounds getting RB's. I like it.
        </p>
        <img src={recap2023Img4} alt="Will Ferrell on Debo" className="recap-inline-img" loading="lazy" />

        <h3>Ryan — Yahoo Draft Grade B</h3>
        <p>
          I think he might have been on autodraft but I'm not sure. He drafted Mahomes and Burrow the 1st two rounds for some reason and waited until round 8 to start drafting his WR's. Ryan has always gone against the grain in drafts and he's won twice so I'm not even going to pretend to critique.
        </p>
        <img src={recap2023Img5} alt="Will Ferrell on Ryan" className="recap-inline-img" loading="lazy" />

        <h3>Mark — Yahoo Draft Grade B-</h3>
        <p>
          His first 5 picks were WR's, RB's and TE. By all accounts he has a deep team with some upside potential. No complaints here.
        </p>
        <img src={recap2023Img6} alt="Will Ferrell on Mark" className="recap-inline-img" loading="lazy" />

        <h3>Marcello — Yahoo Draft Grade C</h3>
        <p>
          His first 6 rounds were RB's and WR's and he nabbed some good ones, he decided to take a chance on Jonathan Taylor. He waited until round 8 to get a QB and hopefully the other position players will make up for that.
        </p>
        <img src={recap2023Img7} alt="Will Ferrell on Marcello" className="recap-inline-img" loading="lazy" />

        <h3>McCool — Yahoo Draft Grade D+</h3>
        <p>
          Very similar draft to Marcello filling in the skill positions and waiting until round 9 for QB. Looks pretty balanced to me.
        </p>
        <img src={recap2023Img8} alt="Will Ferrell on McCool" className="recap-inline-img" loading="lazy" />

        <h3>JD — Yahoo Draft Grade D+</h3>
        <p>
          He waited until round six to get a RB, like I said, probably not a problem this year. He nabbed Jalen Hurts in the 2nd. I like this team too.
        </p>
        <img src={recap2023Img9} alt="Will Ferrell on JD" className="recap-inline-img" loading="lazy" />

        <h3>Mish — Yahoo Draft Grade D</h3>
        <p>
          If Tua stays healthy I should be ok...so I'm fucked.
        </p>
        <img src={recap2023Img10} alt="Will Ferrell on Mish" className="recap-inline-img" loading="lazy" />

        <h3>Shaw — Yahoo Draft Grade D</h3>
        <p>
          But he made it for the first time to a draft so he gets an A in my book. At this point all the teams are looking the same to me, I like this team too.
        </p>
        <img src={recap2023Img11} alt="Will Ferrell on Shaw" className="recap-inline-img" loading="lazy" />

        <h3>Matt — Yahoo Draft Grade D-</h3>
        <p>
          Probably has something to do with drafting 4 quarterbacks.
        </p>
        <img src={recap2023Img12} alt="Will Ferrell on Matt" className="recap-inline-img" loading="lazy" />

        <p>
          That's it, again, sorry for the messed up draft position, amateur stuff right there. Looking forward to week 1!
        </p>
        <p><strong>- Mish out</strong></p>
        <img src={recap2023Outro} alt="2023 outro" className="recap-inline-video" loading="lazy" />
      </section>
    ),
  },
  // === 2022===
  "2022": {
    images: [],
    videos: [],
    notes: (
  <section className="recap-writeup">
    <h2>Season 7</h2>

    <p>
      Well hell, that was some kind of night, might go down as a top 3 (non-college) nights of my life with an unexpectedly very nice end to it. Glad those that could make it did, and those that couldn't, I hope you were able to draft the way you wanted. I want this season to end so I host another draft party.
    </p>

    <p>
      Didn't quite get all of us degenerates in this photo but this might go down as one of my favorite photos of all times. Debo and Cello, solid work as the base fellas.
    </p>
    <img src={recap2022Img1} alt="Draft night group photo" className="recap-inline-img" loading="lazy" />

    <p>
      Sooo, as far as the grades go, take it with a grain of salt, I could name maybe 1 or 2 players on my team 30 minutes after the draft.
    </p>

    <h3>GUS/Prison Panther — <em>Yahoo draft grade A-</em> (Drafted 10th)</h3>
    <p>
      I think Gus hit an auto draft after the 10th round (smart) to take a nap on the porch. But man, I got to say he did some nice work before that. Lamar Jackson, Diggs, Pittman and Kelce in the first 4. Akers and Montgomery the next 2 rounds. He only has one backup RB but plenty of droppable players if needed. Well done Gus. Shady chimed in on this one, he's not a fan of the name change.
    </p>
    <img src={recap2022Img2} alt="Shady comment on Prison Panther" className="recap-inline-img" loading="lazy" />

    <h3>SHAW/Kenny Powers — <em>Yahoo draft grade B</em> (Drafted 12th)</h3>
    <p>
      Shaw drafted remotely...again. He didn't even give us a chance to distract him with excessive drinking and meat sweats, not fair, but a good strategy. He went WR heavy in the 1st 4 rounds and nabbed Swift as an RB in 2nd. Overall he has a good balanced team with some potential on the bench. Aaron Carter weighed in on this one.
    </p>
    <img src={recap2022Img3} alt="Aaron Carter weighs in" className="recap-inline-img" loading="lazy" />

    <h3>WELSCH/smakdown — <em>Yahoo draft grade B</em> (Drafted 8th)</h3>
    <p>
      Went really RB heavy early on, picking up Aaron Jones, Barkley, and James Conner. I like one of them so hopefully he knows something I don't (very likely) and all 3 of them will ball out. A decent WR core, 3 TE's and a last round pick of Julio Jones is too complex of a scenario for me to analyze, so I had Bill Cosby weigh in.
    </p>
    <img src={recap2022Img4} alt="Cosby reaction" className="recap-inline-img" loading="lazy" />

    <h3>MCCOOL/hinglemccringleberry — <em>Yahoo draft grade B</em> (Drafted 6th)</h3>
    <p>
      He went RB/QB/TE/WR in the first 4 rounds so he has some decent starters in each of those positions but his other WR in a later round plays for the same team (Evans and Godwin). I wasn't sure how to feel about this team so I got some help.
    </p>
    <img src={recap2022Img5} alt="JD at 11:15pm, totally not Nick Nolte" className="recap-inline-img" loading="lazy" />
    <p>
      This looks like Nick Nolte but it is actually a picture of JD at around 11:15pm.
    </p>

    <h3>JD/Pound it Noggin — <em>Yahoo draft grade B</em> (Drafted 9th)</h3>
    <p>
      JD went RB/RB/QB/QB. I think his main goal was for trade bait or he must not have liked what was on the board in the 4th round. He waited until the 5th round to pick up a WR, then he took 6 of them in a row. He also spent a solid 56 minutes smack talking Wick during that stretch. JD, the Erin Andrews cameo stops working after 2000 plays, you might want to try to stretch that video out a little longer. Ron Jeremy cameos are on sale and he really REALLY liked your draft
    </p>
    <img src={recap2022Img6} alt="Ron Jeremy cameo" className="recap-inline-img" loading="lazy" />

    <h3>WICK/ol flea wicker — <em>Yahoo draft grade C+</em> (Drafted 1st)</h3>
    <p>
      Wick had a solid draft going until he picked up Antonio Gibson in the 6th, which might be a little rough as an RB2. He's got a solid enough team to maybe make up for that but we'll see. He really used every second of this draft to put this squad together. Snooki even sobered up in the drunk tank waiting for him to make his 8th pick.
    </p>
    <img src={recap2022Img7} alt="Snooki in the tank" className="recap-inline-img" loading="lazy" />

    <h3>SCHAM/Team steiners — <em>Yahoo draft grade C+</em> (Drafted 2nd)</h3>
    <p>
      Not clear if he had a surrogate drafter or not, I'm guessing no, since he chimed in about the jerk mish that kept pausing the draft. Holy crap though I think I like this team. He continued his love fest with drafting Mahomes and still was able to grab McLauren and Sutton as WR's. CMC needs to stay healthy for this team to do well, Tiger has faith.
    </p>
    <img src={recap2022Img8} alt="Tiger approves" className="recap-inline-img" loading="lazy" />

    <h3>MISH/Biggie Pauls — <em>Yahoo draft grade C</em> (Drafted 4th)</h3>
    <p>
      This is the first time I've looked at my team (that I remember) since last night. I was ready to trash it and move on but I kinda like it. Just need Stafford to show up and not have a rubber arm. Nick Nolte thinks it's dreamy even though he was blacked out in this picture.
    </p>
    <img src={recap2022Img9} alt="Nick Nolte 'dreamy' take" className="recap-inline-img" loading="lazy" />

    <h3>MARK/unfollowbobo — <em>Yahoo draft grade C</em> (Drafted 5th)</h3>
    <p>
      Marky Mark stocked up on RB's and WR's in the first 5 rounds then nabbed his TE and QB. Then he built some depth and took a chance that AJ Dillon would surpass Aaron Jones, not a bad strategy. He ended up with 3 QB's as well so that's at least one team that won't be trading with Nick Nolte. Pucker up buttercup.
    </p>
    <img src={recap2022Img10} alt="Mark recap" className="recap-inline-img" loading="lazy" />

    <h3>DEBO/happy hour — <em>Yahoo draft grade C</em> (Drafted 11th)</h3>
    <p>
      Debo's first rookie draft went very well. I'm not even going to look at his team because he excelled in other areas. For example, he had his wife pick up a bottle of Johnny Walker Blue and drop it off somewhere in the 2nd or 3rd round. I was drinking straight from the bottle a couple of hours later and threw up in my sink because I was so overcome with gratitude. That was right before the very nice unexpected thing happened. Thanks Brother D. Hope your team that I didn't look at does well. Alright alright alright
    </p>
    <img src={recap2022Img11} alt="Johnny Walker Blue tribute" className="recap-inline-img" loading="lazy" />

    <h3>MARCELLO/slippery jack — <em>Yahoo draft grade C</em> (Drafted 3rd)</h3>
    <p>
      My brother from another mother flew all the way from Texas to be with us degenerates and he fit right in. His first 5 picks are as solid as solid can get, except for Aaron Rogers I think. His only veteran receiver is Lazard who he has actively avoided throwing to in the past, maybe he'll actually gain some chemistry with a first year receiver for the first time in his career. JD and Mark, Cello might be a prime candidate for a trade, and snuggling. That would make him happier than Bill Gates after snorting coke off a hookers toe and getting carted off to jail.
    </p>
    <img src={recap2022Img12} alt="Bill Gates toe joke visual" className="recap-inline-img" loading="lazy" />

    <h3>DD/Double D's — <em>Yahoo draft grade C</em> (Drafted 7th)</h3>
    <p>
      DD had to draft remotely unfortunately but he ended up with a solid first 6 rounds. The next 9 picks I have only heard of 5 or 6 of them so that could be a good thing, it worked out well for him last year. Sorry it didn't work out for you to be here DD, McCool was inconsolable and didn't have a good time at all without you here.
    </p>
    <img src={recap2022Img13} alt="DD remote draft recap" className="recap-inline-img" loading="lazy" />

    <p><strong>- Mish Out</strong></p>

    {/* outro GIF */}
    <img
      src={recap2022Outro}
      alt="2022 outro"
      className="recap-inline-video"
      loading="lazy"
    />
  </section>
),
},
  // === 2021===
  "2021": {
    images: [],
    videos: [],
    notes: (
  <section className="recap-writeup">
    <h2>Season 6</h2>

    <p>
      First note, I added one more day of Waivers to be processed Sunday morning. Still won't allow for last minute pickups but gives you an extra day.
      Second note, playoffs will be weeks 15, 16, and 17. Week 18 is the last week of the season.
    </p>

    <p>
      This year I really haven't kept up on the news so I have no idea if you have a good team or not.
      So you are listed in order of Yahoo Draft Grade, you and your league mates will be grading the draft this year!
    </p>

    <h3>Team Steiners — Ryan — <em>Yahoo draft grade A</em></h3>
    <p>
      Ryan had the 11th pick, he took Mahomes in the first round, maybe he didn't get the memo we were in a 1 QB league now.
      He had two TE's by the 8th round and his last two picks were QB's for 3 total. That's how you get a good Yahoo draft grade,
      you get backups for your backups. The algorithm doesn't account for the fact that you will drop people when it comes to bye weeks
      to fill in holes on your team, so a high grade means Yahoo thinks the team you draft will be your team forever.
      Doesn't matter, Ryan (with guest appearance by Ben) is going to cut up the competition either way
    </p>
    <img src={recap2021Loop1} alt="Ryan grade reaction" className="recap-inline-img" loading="lazy" />

    <h3>Hit 'em with the Hein — Mark — <em>Yahoo draft grade A-</em></h3>
    <p>
      Mark had the 4th pick overall and started off with Kamara, I'm sure he'll get plenty of work with Brees out of the picture.
      He locked up his starting line-up by the 8th round and nabbed Russel Wilson in the 5th and connected him with Tyler Lockett.
      He seems to have a pretty strong team, he took TY in the last round, we'll see if he holds on to him long enough for him to get over his neck issue.
      Is anyone going to beat you this year Mark?
    </p>
    <img src={recap2021Loop2} alt="Mark grade reaction - Shooter!" className="recap-inline-img" loading="lazy" />
    <p>Shooter!</p>

    <h3>Shaw — <em>Yahoo Draft Grade B</em></h3>
    <p>
      Shaw had the 9th pick overall and went with Tyreek Hill then nabbed two more WR's with his next 2 picks.
      He really doesn't like RB's this year, only drafting 3 versus his 7 WR's and 2 TE's.
      He waited until the 13th round to grab his QB, Fitz-magic. I'm guessing he'll be hitting the waiver wire pretty early this year but what do I know?
      Shaw is ready to annihilate us all
    </p>
    <img src={recap2021Loop3} alt="Shaw grade reaction" className="recap-inline-img" loading="lazy" />

    <h3>HingleMcCringleberry — McChamp — <em>Yahoo Draft Grade B</em></h3>
    <p>Here is a glimpse into our Champ's genius, the notes from his draft:</p>
    <img src={recap2021Image1} alt="McChamp draft notes" className="recap-inline-img" loading="lazy" />
    <p>
      McChamp started out with the 7th pick and he went with a risky and aggressive approach.
      He took Chubb (not risky), then Saquon (somewhat risky), then Godwin (not risky), then Pitts (rookie TE - very risky).
      He's got a pretty good starting core but the depth is a little shaky. He did win last year, so there's that.
      McChamp you do you buddy, never stop being a star
    </p>
    <img src={recap2021Loop4} alt="McChamp grade reaction" className="recap-inline-img" loading="lazy" />

    <h3>Pound it Noggin — JD — <em>Yahoo Draft Grade B</em></h3>
    <p>
      JD had the first overall pick and got two monster RB's, CMAC and Carson. Went QB in the 3rd round (Murray) and TE in the 4th (Andrews).
      As a result his WR's are very shaky. His overall roster has great depth so plenty of chances for some players to break out and outperform their draft position.
      JD, what do you think of my "analysis"?
    </p>
    <img src={recap2021Loop5} alt="JD grade reaction" className="recap-inline-img" loading="lazy" />

    <h3>'Ol Flea Wicker — Wick — <em>Yahoo Draft Grade B-</em></h3>
    <p>
      Wick had the 3rd overall pick and picked up a newly rejuvenated Zeke and followed it up with two solid WR's (Hopkins, AJ Brown).
      James Robinson was a solid 4th round pickup and he landed Tannehill in the 7th. I'm actually kind of liking this team.
      Well done Wick, you may have your best season yet! You should be very confident...
    </p>
    <img src={recap2021Loop6} alt="Wick grade reaction" className="recap-inline-img" loading="lazy" />

    <h3>Sex Panther — Ben — <em>Yahoo Draft Grade C+</em></h3>
    <p>
      Well...he didn't draft 4 TE's this year but he did have 2 QB's (Jackson and Prescott) by the end of the 4th round.
      Dalvin Cook was his first pick and no complaints there but his early QB run left the rest of his team kind of weak.
      He auto-drafted JK Dobbins in the 6th round which will be great for next year since JK is out for the season.
      Sorry Ben, I'm not feeling it but Sex Panther can never be counted out
    </p>
    <img src={recap2021Loop7} alt="Ben grade reaction" className="recap-inline-img" loading="lazy" />

    <h3>Biggie Pauls — Mish — <em>Yahoo Draft Grade C</em></h3>
    <p>
      I had the 12th overall pick and was happy I got to grab Ekeler and DK Metcalf.
      I'm hoping CeeDee Lamb connects with Dak and Mike Davis doesn't suck.
      I got a lot of crap in the draft room for picking Sony Michel 752 picks ahead of his ADP but the more I hear about him the less sad I am about the pick.
      I got Jalen Hurts as my QB and in some weird twist of irony Carson Wentz as my backup.
      I did a really nice job at drafting backups with the same BYE week as my starters too.
      In summary, I hate my team but I like tickling Tickles the Cat.
    </p>
    <img src={recap2021Loop8} alt="Mish grade reaction" className="recap-inline-img" loading="lazy" />

    <h3>smakdown — Matt — <em>Yahoo Draft Grade C</em></h3>
    <p>
      Matt had the 8th pick overall and went with homer A Jones in the 1st and Rogers in the 4th.
      He's hoping his Packers play with a chip on their shoulder this year and dominate, but then lose win in the playoffs.
      He nabbed a solid TE in round 3 (Waller) and his WR1 is Ridley. Will be interesting to see how Ridley does with Julio demanding coverage this year.
      Matt could do well and he always serves pancakes after laying down a smakdown
    </p>
    <img src={recap2021Loop9} alt="Matt grade reaction" className="recap-inline-img" loading="lazy" />

    <h3>Slippery Jack — Cello — <em>Yahoo Draft Grade C</em></h3>
    <p>
      Cello had the 10th overall pick, I used to be against TE's in the first round but an exception can be made for Kelce and Cello did just that.
      But then he took Gibson and Montgomery as his RB 1 and 2 and I can't say I'm too excited about that.
      He did nab Gus Edwards later on so he might propel into the starting lineup now that JK Dobbins is out.
      Overall, another "what do I know moment" because I'm not a big fan of this team but he'll probably kick my ass.
      Don't cry Cello, I believe in you
    </p>
    <img src={recap2021Loop10} alt="Cello grade reaction" className="recap-inline-img" loading="lazy" />

    <h3>Double D's — DD — <em>Yahoo Draft Grade C</em></h3>
    <p>
      DD had the 6th overall pick and got the point machine Davante Adams.
      Another homer pick with Najee Harris with PIT, if Tomlin uses him like he did Bell this 1-2 punch could work out VERY well for him.
      He took K Allen as his 2nd WR and that should be solid as well.
      Stafford and Brady (4th pick) should give him plenty of options at the QB spot but it might be tough to figure out which one to use each week.
      My favorite pick was Pat Freiermuth because as of 3 seconds ago I did not know this person existed.
      Well enough of my opinion, what is your opinion DD?
    </p>
    <img src={recap2021Loop11} alt="DD grade reaction" className="recap-inline-img" loading="lazy" />

    <h3>Shadys All Stars — Gus — <em>Yahoo Draft Grade C-</em></h3>
    <p>
      Gus had the 5th overall pick and I like how this team shaped up.
      Henry in the first, Josh Allen in the 2nd (meh), Mike Evans and Amari Cooper in the 3rd and 4th, then Jacobs, Thielen, and Antonio Brown.
      He's got decent depth after that. Gus, what do you have to say to Yahoo?
    </p>
    <img src={recap2021Loop12} alt="Gus grade reaction" className="recap-inline-img" loading="lazy" />

    <p>
      This next Giph has no relevance, but I was able to get Ryan (white tux), Mark (old lady), McChamp (Dangerfield) and DD (judge) in it, so I thought I would share
    </p>
    <img src={recap2021Loop13} alt="Bonus gif cameo" className="recap-inline-img" loading="lazy" />

    <p>Can't wait to see how this season shakes out!</p>
    <p><strong>- Mish Out</strong></p>

    {/* outro GIF */}
    <img
      src={recap2021Outro}
      alt="2021 outro"
      className="recap-inline-video"
      loading="lazy"
    />
  </section>
),
},
  // === 2020===
  "2020": {
    images: [],
    videos: [],
    notes: (
  <section className="recap-writeup">
    <h2>Season 5</h2>

    <p>
      McCool, Debo, Matt and Mark got to see how I do my GIPH research for these write-ups.
      I showed them a few that end up getting me off the rails for about an hour, here's an example
    </p>
    <img src={recap2020Loop1} alt="Example of GIPH research derailing" className="recap-inline-img" loading="lazy" />

    <p>Here were their faces:</p>
    <img src={recap2020Loop2} alt="Their faces reaction" className="recap-inline-img" loading="lazy" />

    <p>
      So everyone knows the routine but for Don here's what I do. Yahoo does draft grades that are meaningless
      so I put my spin on it and make you all feel terrible about how you did. We've had Tom Sellek, Chris Farley,
      Donald Trump and Jay Cutler help me out in the past. This year, it's the good folks at White Claw!
      Without further AhhhDooo
    </p>

    <p><strong>In order of Yahoo Grade:</strong></p>

    <h3>Scham — Team Steiners — <em>Yahoo Grade A-</em></h3>
    <p>
      Ryan was the first to snag a QB and took Mahomes, can't get too mad considering it's a 2 QB league.
      His second QB is Bridgewater which should even him out with the rest of the league. His best RB's are Chub and Carson
      which might be ok but most likely terrible. His best WR's are DJ Moore and Ridley, again, might be ok but most likely terrible.
      Long story short, Mahomes is going to have to outperform every week to make the early pick worth it.
    </p>
    <p><em>White Claw Draft Grade:</em></p>
    <img src={recap2020Img1} alt="White Claw grade for Scham" className="recap-inline-img" loading="lazy" />

    <h3>Shaw-Bawls — Frank and Beans — <em>Yahoo Grade A-</em></h3>
    <p>
      Shaw decided to shore up his RB position early and took Saquan and Ekeler...I like it. Then he reached for Dak in the 3rd round,
      he probably could have waited another round or two to get him. This left him with Tyler Lockett and Bobby Trees (Robert Woods)
      as best WR's, might be ok but like Scham, probably terrible. He did draft some breakout candidates in later rounds so he was thinking ahead at least.
      His QB2 is Josh Allen so that was good, I think. He got Edelman in the 9th round, love that. No TE. All in all, I like his team
    </p>
    <p><em>White Claw Draft Grade:</em></p>
    <img src={recap2020Img2} alt="White Claw grade for Shaw" className="recap-inline-img" loading="lazy" />

    <h3>Matt — smakdown — <em>Yahoo Grade B</em></h3>
    <p>
      Matt had the #1 pick and he took CMAC and followed up with Miles Sanders in the 2nd round, I love that start.
      He shored up his QB's in the 3rd and 5th with Watson and Wentz....thennnnnn he took Goff in the 6th,
      who he could have gotten 3 or 4 rounds later. So his best WR's are Cooper Kupp and Gallup, not good. He also went with no TE.
      Got to be honest, after the 5th round I'm not a big fan of the rest of the team. But what do I know, White Claw will sort this out for us.
    </p>
    <p><em>White Claw Draft Grade:</em></p>
    <img src={recap2020Img3} alt="White Claw grade for Matt" className="recap-inline-img" loading="lazy" />

    <h3>JD — Pound it Noggin — <em>Yahoo Grade B</em></h3>
    <p>
      JD actually got to draft in the spot he thought he would draft this year. Then he had his son call me everytime it was my pick to distract me,
      I'm not even mad, it was a good strategy. JD's #1 pick was Lamar Jackson who was a beast last year, let's see if he can repeat that or
      if the rest of the NFL has figured out how to stop him. His next two picks were RB's which was smart and then he took TE Mark Andrews
      to pair up with Lamar Jackson, all in all, not a bad start. He took TY Hilton next then waited until the 8th round to pick up his next WR.
      Daniel Jones is his QB2 and he picked up a 2nd TE in the 15th with Kyle Rudolph, Rudolph will probably end up being his 1st dropped player.
    </p>
    <p><em>White Claw Draft Grade:</em></p>
    <img src={recap2020Img4} alt="White Claw grade for JD" className="recap-inline-img" loading="lazy" />
    <p><small>That's JD's face on the nice lady, credit to Marcello Pollidori for the art-work.</small></p>

    <h3>Mish — Biggie Pauls — <em>Yahoo Grade B-</em></h3>
    <p>
      Best draft hands down. Started off with Dalvin Cook, Hopkins next (a little nervous about this one actually),
      Chris Godwin and Cam Akers. I reached a couple rounds early to get Baker Mayfield. I'm really happy about getting Zach Moss in the 7th
      and Fournette in the 11th. I hadn't planned on drafting a TE but Jack Doyle was still there in the 14th. Prepare to die Laser Sharks.
    </p>
    <p><em>White Claw Draft Grade:</em></p>
    <img src={recap2020Img5} alt="White Claw grade for Mish" className="recap-inline-img" loading="lazy" />

    <h3>Wick — 'Ol Flea Wicker — <em>Yahoo Grade C+</em></h3>
    <p>
      Wick is an Enigma. Historically, he would draft QB's too early, then we moved to a 2QB set up last year and he waited on QB,
      this year he waited even more, which I don't think was a bad idea. He's got Michael Thomas WR1, Drake and Conner RB1/2 but then
      for some reason he took Gronk in the 4th round...I guess his draft got interrupted by work but his team is workable.
      I've heard of most of the players on his team so that's good right? AmIright? No, I am not right.
    </p>
    <p><em>White Claw Draft Grade</em></p>
    <img src={recap2020Img6} alt="White Claw grade for Wick" className="recap-inline-img" loading="lazy" />

    <h3>Mac — HingleMcCringleBerry — <em>Yahoo Grade C+</em></h3>
    <p>
      Mac never seems to like his team, I'm curious what he thinks about this one. He only drafted 2 RB's and the 2nd RB is going to be replaced
      by Jonathan Taylor by week 4. I guess it doesn't matter given how many FLEX spots we have this year.
      His QB's are Kyler Murray and Matt Ryan, solid. I'm really interested to see how this team pans out, could be great, could be a dumpster fire.
    </p>
    <p>
      <em>White Claw Draft Grade (Not white claw but relevant, don't smoke drugs kids):</em>
    </p>
    <img src={recap2020Img7} alt="White Claw grade for Mac" className="recap-inline-img" loading="lazy" />

    <h3>Cello — Slippery Jack — <em>Yahoo Grade C+</em></h3>
    <p>
      I'm kind of impressed with this team, kind of. Took Zeke 1st, great...Kelce 2nd, great...Robinson/AmariCooper 3rd/4th, cool cool...
      David Johnson (meh), Keenan Allen (boom Cello!). Not a bad start, pretty good balance. Then 3 QB's in a row (Rivers/BigBen/Tyrod), unnecessary.
      Then DEF and K, are you trying to lose! The rest of the team is what you would expect to look like 12th round on, scrubs and duds.
      I think he had one too many White Claws at this point in the draft.
    </p>
    <p><em>White Claw Draft Grade:</em></p>
    <img src={recap2020Img8} alt="White Claw grade for Cello" className="recap-inline-img" loading="lazy" />

    <h3>DD — Double D's — <em>Yahoo Grade C+</em></h3>
    <p>
      Don is a rookie in this league so I'll try to take it easy on him...hehehe. At first glance at his team I am not impressed,
      which usually ends up being a good thing by the end of the season so kudos DD. He waited until the 6th to grab Aaron Rodgers so he's got
      a good core of RB's and WR's but most have question marks around them. Will Mike Evans have chemistry with Brady? Will JuJu prove he's good
      without a better WR across taking coverage away from him? Will Mark Ingram be necessary behind Lamar Jackson? We will see.
      AJ Green is finally back so maybe he'll have a breakout season. The rest of the players don't seem to have much upside.
    </p>
    <p><em>White Claw Draft Grade:</em></p>
    <img src={recap2020Img9} alt="White Claw grade for DD" className="recap-inline-img" loading="lazy" />

    <h3>Mark — Hit em with the Hein — <em>Yahoo Grade C</em></h3>
    <p>
      I might agree with Yahoo on this one. I like CEH as his 1st pick, I'm not even mad at Russel Wilson as his 2nd pick.
      Not a big fan of Golladay as his 3rd pick. I think I like OBJ in the 4th, I think he and Baker have something to prove this year.
      He took Brady in the 6th which means he is a traitor and should walk down the street with his head down in shame.
      The rest of the team I just don't know, he has 2 NE RB's which is never a good strategy. Sorry Mark, I'm just not feeling this team.
    </p>
    <p><em>White Claw Draft Grade:</em></p>
    <img src={recap2020Img10} alt="White Claw grade for Mark" className="recap-inline-img" loading="lazy" />

    <h3>Ben — Sex Panther — <em>Yahoo Grade C</em></h3>
    <p>
      Solid Start with Davante Adams and Julio, Brees as QB1 (probably too early), Gurley as RB1 (meh), Ertz as TE (I like),
      Courtland Sutton (ok), Cam Newton in 7th (great value). I don't get why you took TE's in the 12th, 13th and 14th rounds
      considering we don't even have to start a TE. But you want to take 4 TE's, have at it! I remember when you took 3 kickers one year,
      and 3 QB's another year (in 1 QB format), at least you're consistent!
    </p>
    <p><em>White Claw Draft Grade:</em></p>
    <img src={recap2020Img11} alt="White Claw grade for Ben" className="recap-inline-img" loading="lazy" />

    <h3>Gus — Shady's Allstars — <em>Yahoo Grade D+</em></h3>
    <p>
      Last but least is Gus. I'm not sure what happened here. Again, great start. Henry, Kittle, Thielen, Jonathan Taylor, McLaurin.
      Pretty much downhill from there. Gus ended up taking 5 TE's! His only QB is Joe Burrow. I just have no words.
      Maybe I'm missing something and Ben and Gus know something we don't. I've never played in a 4 FLEX + SuperFlex league before
      so they may end up being geniuses. Gus, I wish you the best my friend.
    </p>
    <p><em>White Claw Draft Grade:</em></p>
    <img src={recap2020Img12} alt="White Claw grade for Gus" className="recap-inline-img" loading="lazy" />

    <p>See you week 1!!</p>
    <p><strong>- Mish out</strong></p>

    {/* outro GIF */}
    <img
      src={recap2020Outro}
      alt="2020 outro"
      className="recap-inline-video"
      loading="lazy"
    />
  </section>
),
  },
    // === 2019===
  "2019": {
    images: [],
    videos: [],
    notes: (
  <section className="recap-writeup">
    <h2>Season 4</h2>

    <p>
      It's 12:46am on a Thursday morning, less than 20hrs away from kickoff, here's my draft grades, get over it
    </p>

    <h3>Frank and Beans (Shaw-Balls)</h3>
    <p>
      Should have been 7th but was 1st, my bad. Fully embraced the 2 QB league and took 3 defenses with Joe Flatulance as his 2nd QB.
    </p>
    <img src={recap2019Loop1} alt="Shaw-Balls draft gif" className="recap-inline-img" loading="lazy" />

    <h3>HingleMcCringleberry</h3>
    <p>
      Aka Mac town waited on QB but is good on TE and RB aaaaand WR.
    </p>
    <img src={recap2019Loop2} alt="Mac draft gif" className="recap-inline-img" loading="lazy" />

    <h3>Mark — aka hit em with the heim</h3>
    <p>
      Good balanced draft but still sucks balls.
    </p>
    <img src={recap2019Loop3} alt="Mark draft gif" className="recap-inline-img" loading="lazy" />

    <h3>Sex Panther — Ben</h3>
    <p>
      Took 5 RB's before any of us woke up this morning but still ended up with a stacked team.
    </p>
    <img src={recap2019Loop4} alt="Ben draft gif" className="recap-inline-img" loading="lazy" />

    <h3>Mish</h3>
    <p>
      I just don't know what happened.
    </p>
    <img src={recap2019Loop5} alt="Mish draft gif" className="recap-inline-img" loading="lazy" />

    <h3>smakdown / champ / Matt</h3>
    <p>
      Pissed in the pool and came out victorious.
    </p>
    <img src={recap2019Loop6} alt="Matt draft gif" className="recap-inline-img" loading="lazy" />

    <h3>JD / Brother / Pound it Noggin</h3>
    <p>
      Should have had 1st pick but ended up with 7th and...failed.
    </p>
    <img src={recap2019Loop7} alt="JD draft gif" className="recap-inline-img" loading="lazy" />

    <h3>Scham / Steiners</h3>
    <p>
      Cousin / Brother from another mother — took first QB and shat the bed after that.
    </p>
    <img src={recap2019Loop8} alt="Scham draft gif" className="recap-inline-img" loading="lazy" />

    <h3>Hack Attack / hackman / let's make a deal</h3>
    <p>
      Best pick round 12 auto pick keke couteeeeeeeeeeeeeee.
    </p>
    <img src={recap2019Loop9} alt="Hack draft gif" className="recap-inline-img" loading="lazy" />

    <h3>Team Shady / Gus / all stars</h3>
    <p>
      ummmm I dunno.
    </p>
    <img src={recap2019Loop10} alt="Gus draft gif" className="recap-inline-img" loading="lazy" />

    <h3>Team Wick / team panda</h3>
    <p>
      Team I take QB's early except when I'm supposed to.
    </p>
    <img src={recap2019Loop11} alt="Wick draft gif" className="recap-inline-img" loading="lazy" />

    <h3>Tem Cello / team shroom</h3>
    <p>
      Team literal brother from another mother.
    </p>
    <img src={recap2019Loop12} alt="Cello draft gif" className="recap-inline-img" loading="lazy" />

    <p><strong>Mish out, welcome</strong></p>

    <img
      src={recap2019Outro}
      alt="2019 outro"
      className="recap-inline-video"
      loading="lazy"
    />
  </section>
),

  },
      // === 2018===
  "2018": {
    images: [],
    videos: [],
    notes: (
  <section className="recap-writeup">
    <h2>Season 3</h2>

    <p>
      Listed in order of Yahoo ranking/grade. Which means nothing because the mustache himself,
      <strong> Tom Selleck </strong>, will be weighing in this year with the official draft grades!
    </p>

    <h3>Mark — <em>Yahoo Draft Grade A-</em></h3>
    <h4>New Team Name:</h4>
    <p>Jack Black's swamp ass</p>
    <p>
      Mark’s strength is definitely his WR’s with A Brown and AJ Green and he’s got a top 5 QB in Brees. 
      I have a feeling RB’s are going to be a thorn in side, his backups have some serious durability issues. 
      If Jimmy Graham can put together a decent season and his RB’s stay healthy he could make it to the ship.</p> 
      <p>What does Tom Selleck think?!
    </p>
    <img src={recap2018Loop1} alt="Tom Selleck on Mark's draft" className="recap-inline-img" loading="lazy" />
    <p> I looked it up Tom, I thought that was Korean 5 Hour Energy you were pushin, nope, just more boner medicine</p>

    <h3>Marcello — <em>Yahoo Draft Grade B</em></h3>
    <h4>New Team Name:</h4>
    <p>Please don’t suck Vikings</p>
    <p>
      Cello went with the Cousins-Diggs connection and I have a feeling that will work out nicely for him this year, 
      which means it probably won’t. WR2 Dem Thomas is a tough one, I just have a bad feeling about Denver this year 
      (says everyone that watches football). He’s got a couple of rookies that could pan out and add some depth though. 
      Lot's of "ifs" here.</p>
      <p>What does Tom Selleck think?!
    </p>
    <img src={recap2018Loop2} alt="Tom Selleck on Cello's draft" className="recap-inline-img" loading="lazy" />
    <p>Ya, you got a problem with that porn stache?</p>

    <h3>Ryan Schamerloh — <em>Yahoo Draft Grade B</em></h3>
    <h4>New Team Name:</h4>
    <p>White Rappers</p>
    <p>
      Drafted two young ascending QB’s in Watson and Goff in the 2nd and 8th respectively. Has a great WR core in OBJ and 
      Golden Tate and if Engram can figure out how to catch a ball this year he should be set at TE too. Not sure why he 
      thought it was a good idea to draft 3 DET Lions, he did have a haircut like Eminem for awhile so that could be it. 
      I actually kind of like this team but my opinion doesn’t matter, </p>
      <p>What does Tom Selleck think?!
    </p>
    <img src={recap2018Loop3} alt="Tom Selleck on Ryan's draft" className="recap-inline-img" loading="lazy" />
<p> Hahahahah, that's so Tom</p>

    <h3>Hackman — <em>Yahoo Draft Grade B</em></h3>
    <h4>New Team Name:</h4>
    <p>I Love Douchebags</p>
    <p>
      I almost had to kick Hacky-poo out of my basement for picking 2 patriots with his 1st 3 picks. He went Bell, 
      Gronk and Brady that are all beasts but the rest of his lineup suffered a bit. From the looks of it he doesn’t have a 
      true WR1 but Bell should make up for that. If (when) Gronk goes down he’ll be hurting. My favorite picks of his were Bell in the 1st, 
      JAX in the 9th and Nick Chubb in the 14th round. In the end, if everyone stays healthy he should do just fine.</p>
      <p>What does Tom Selleck think?!
    </p>
    <img src={recap2018Loop4} alt="Tom Selleck on Hackman draft" className="recap-inline-img" loading="lazy" />
<p>Oooh, he does not like what he sees</p>

    <h3>Matt — <em>Yahoo Draft Grade B</em></h3>
    <h4>New Team Name:</h4>
    <p>My ball Zach Ertz</p>
    <p>
Waited a little bit longer than the previous two teams to draft a QB and he snagged Russel Wilson. Russel's value comes from 
his running but it will interesting to see with the new OC if that continues. Kamara should have a huge start to the season while 
Ingram serves his suspension and even when he’s back he should still have big numbers as we saw last year. Went with Beast Mode 
for RB2, which will either be great or a great big stank burger with cheese. His back-up RB’s are suspect and my bet is he’ll cut
 Parker by week 3. Nice WR pair with Adams and Cooks. Not bad ball Zach, not bad.</p>
<p> What does Tom Selleck think?!
    </p>
    <img src={recap2018Loop5} alt="Tom Selleck on Matt's draft" className="recap-inline-img" loading="lazy" />
<p>Wait, what? Are you happy or are you being patronizing, screw you Tom, Matt doesn't need your pity smile!</p>

    <h3>Ben — <em>Yahoo Draft Grade B-</em></h3>
    <h4>New Team Name:</h4>
    <p>Screw kickers</p>
    <p>
This might be one of my favorite teams, which if you’re paying attention means it will probably suck. But man, 
he’s got Johnson and Freeman as RB1/2, LeSean McCoy will be terrible this year, but then he picked up Ingram in the 6th and will 
be ready to roll him out in the flex week 5 and dominate the RB category. Then he’s got Thielin/Baldwin as his WR1/2 which ain’t half bad. 
Stafford should do just fine. He still needs a kicker but that’s a minor detail.</p>


<p>What does Tom Selleck think?
    </p>
    <img src={recap2018Loop6} alt="Tom Selleck on Ben's draft" className="recap-inline-img" loading="lazy" />
<p>I think he's a fan Benny, I swear, every 5th eyebrow raise is a little different.</p>

    <h3>Shaw — <em>Yahoo Draft Grade C+</em></h3>
    <h4>New Team Name:</h4>
    <p>Taints</p>
    <p>
      First 3 picks were pretty solid. Gurley’s great, Evans should do well with Fitz-magic for the first 4 games then 
      Winston after, Fitzgerald should do well with…? No idea who the ARI QB is this year, Bradford? should be able to play at least 
      1.5 games before getting hurt. That's kind of the great thing about Larry though, he only plays out of the slot these days and 
      he can rack up 15 points with Paul Reubins throwing to him. The rest of the team is OK but I think Robinson, Rudolph, Kerryon Johnson, 
      Aaron Jones and Boswell will disappoint him. Other than that, looks peachy. </p>
      <p>What does Tom Selleck think?
    </p>
    <img src={recap2018Loop7} alt="Tom Selleck on Shaw's draft" className="recap-inline-img" loading="lazy" />
<p>W.T.F. Tom</p>

    <h3>Wick — <em>Yahoo Draft Grade C</em></h3>
    <h4>New Team Name:</h4>
    <p>Suicidal Unicorn Emoji</p>
    <p>
      One of these years I’ll convince Wick not to take a QB with one of his first 2 picks. Not this year, went with Rodgers 1st round
      and now his best player after that is Dalvin Cook behind what’s turning out to be a shaky O-line in Minnesota. Rodgers might get 3 
      more points than QB’s drafted 8 rounds later but not consistently. Great pickup at TE though in the 6th round with Greg Olson and 
      a solid backup QB in Garoppolo. I think Jordy was a steal in the 7th and Cobb in the 10th should work out nicely.</p> 

<p>What does Tom Selleck think?
    </p>
    <img src={recap2018Loop8} alt="Tom Selleck on Wick's draft" className="recap-inline-img" loading="lazy" />
<p>Right back at ya brah</p>

    <h3>JD — <em>Yahoo Draft Grade C</em></h3>
    <h4>New Team Name:</h4>
    <p>You hungry? (Inside joke, JD loves when people ask him this)</p>
    <p>
      JD’s coming out of retirement from fantasy football so I’m going to give him a little slack, it’s been at least 30 years (yes, he’s that old).
       But I got to say he put together a pretty impressive lineup. Week spot is tight end for sure and not sure why he needs 3 QB’s but hey, guy 
       likes to party. Cam Newton is set to have a great year, KHunt is Khunt, McCaffrey will get his, and TY has his emotional support animal back (Luck).
        Not bad brother, not bad.  </p>
        <p>What does Tom Selleck Think?!
    </p>
    <img src={recap2018Loop9} alt="Tom Selleck on JD's draft" className="recap-inline-img" loading="lazy" />
<p>Stay out of the sun Tom</p>

    <h3>McCringleberry — <em>Yahoo Draft Grade C</em></h3>
    <h4>New Team Name:</h4>
    <p>Starts with “Mc” and ends with “Dingleberry”</p>
    <p>
      Mac was pretty disappointed at the end of the draft but looking at his team it’s not terrible. Saquon will go for 3, 4, 5, 9, 36, 2, 5, 3, 1, 42yd 
      with a TD or 2 each game so it will add up. He’s not lovin' on Julio but I think he’s prime for monster yards and at least double the TD’s he got last 
      year (6).  Tyreek is a freak and Corey Davis will be the breakout WR of the year I think. Jordan Reed will literally explode the first time he gets hit 
      so he’ll need another TE soon. The new OC at SEA (Shotty) is big on power running so Carson should get plenty of action as his RB2.  I’m guessing Wentz 
      isn’t starting week 1 but he picked up “New Cutler” in the last round so he’s got his bases covered. By the way, as of draft night he was wanting to 
      trade Julio so if anyone is interested make an offer.</p> 
      <p>I don’t know what Tom Selleck thinks of this team but I know what McDingleberry thinks of it:
    </p>
    <img src={recap2018Loop10} alt="Tom Selleck on Mac's draft" className="recap-inline-img" loading="lazy" />
<p>Well this went south quickly </p>

    <h3>Gus — <em>Yahoo Draft Grade C</em></h3>
    <h4>New Team Name:</h4>
    <p>The Cleveland Browns of Laser Sharks</p>
    <p>
      I’m kidding Gus, you’re way better than last year panned out and I’m SURE you’ll do better this year, I predict 4 wins. If we could start 4 WR’s Gus would 
      dominate everyone, Hopkins/Keenan/Gordon (maybe?)/Westbrook (reach). Weak spot is RB, he went for Kelce in the 3rd instead of grabbing a RB and ended up with 
      Alex Collins as his RB1, and CJ Anderson as RB2 ajlkdfapoieuqp94jafkl;dvx., sorry, I just threw up a little.  Blount will probably end up doing well, DET has 
      been looking for a RB like him and he should get the ball plenty. Great QB in Ryan, I think he’ll be top 6 this year but he also has ATL kicker, and typically 
      the QB/K production is inversely proportional. But kickers are the devil and I don’t care. This is the year GUS, I’m rooting for you!! </p>

<p>What does Tom Selleck Think!?
    </p>
    <img src={recap2018Loop11} alt="Tom Selleck on Gus's draft" className="recap-inline-img" loading="lazy" />
<p>I don't even know what this means</p>

    <h3>Mish — <em>Yahoo Draft Grade C-</em></h3>
    <h4>New Team Name:</h4>
    <p>(left blank in writeup)</p>
    <p>
      I did not like my team after the draft but the more I look at I am pretty happy. Zeke is the only game in town in DAL and as long as he doesn’t get hurt he WILL 
      be the #1 RB by years end. I thought I would have to settle for David Johnson with the 4th overall pick but I lucked out and got my overall #1. I think Marquise 
      Goodwin will end up being Jimmy G’s favorite target. Joe Mixon and Lamar Miller make me nervous but they are both set to get heavy workloads. I’ve got Njoku who 
      will be a top 5 TE to cover for Walker when he gets hurt. I didn’t get my QB till the 13th round, I missed on Brees, Luck, Ryan and Mariota. I’m hoping Eli can 
      get me through the first 3 games because I think Baker Mayfield get’s the starting job week 4. The Browns have the best looking offense I’ve seen in a long time 
      (for the Browns anyway) and if Gordon is back they might get more wins than Gus this year.</p>
      <p>What does Tom Selleck think?
    </p>
    <img src={recap2018Loop12} alt="Tom Selleck on Mish's draft" className="recap-inline-img" loading="lazy" />
<p>Damn straight Tom, damn straight</p>

    <p><strong>Mish out</strong></p>
    <img src={recap2018Outro} alt="2018 outro" className="recap-inline-video" loading="lazy" />
  </section>
),
},
      // === 2017===
  "2017": {
    images: [],
    videos: [],
    notes: (
  <section className="recap-writeup">
    <h2>Season 2</h2>
    <p>
      This year’s recap is a PDF. If it doesn’t preview inline on your device, use the
      “Open / Download” link below.
    </p>

    {/* Inline PDF preview with a graceful fallback */}
    <object
      data={recap2017Pdf}
      type="application/pdf"
      width="100%"
      height="800px"
      aria-label="2017 Draft Recap PDF"
    >
      <p>
        Your browser can’t display PDFs inline.{" "}
        <a href={recap2017Pdf} target="_blank" rel="noopener noreferrer">
          Open / Download the 2017 Draft Recap
        </a>.
      </p>
    </object>

    <p style={{ textAlign: "center", marginTop: "0.75rem" }}>
      <a href={recap2017Pdf} target="_blank" rel="noopener noreferrer">
        Open / Download the 2017 Draft Recap
      </a>
    </p>
  </section>
    ),
},
// === 2016 ===
"2016": {
  images: [],
  videos: [],
  notes: (
    <section className="recap-writeup">
      <h2>Season 1</h2>
      <p>
        Yahoo has chimed in with their opinion but now it’s my turn, except instead of the A-F grade system I will be relying on the <strong>Jay Cutler Emotional Chart</strong>. Take the critiques with a grain of salt, I only think I know what I’m talking about. Enjoy!
      </p>

      <h3>#1 Pick — Ashleigh’s Cool Team — <em>Yahoo Grade C+</em></h3>
      <p>
        Soon to be renamed Ashleigh’s “AARP All-Stars.” Went with the hook-up between Big Ben and Antonio Brown, hard to argue with there... What does Jay Cutler think?
      </p>
      <img src={recap2016Img1} alt="Jay Cutler reaction to Ashleigh" className="recap-inline-img" loading="lazy" />

      <h3>#2 Pick — Sex Panther (Ben) — <em>Yahoo Grade A+</em></h3>
      <p>
        Soon to be renamed “Back that A** Up!” Decided on getting backup’s for every position including QB, TE, K and DEF... What does Jay Cutler think?
      </p>
      <img src={recap2016Img2} alt="Jay Cutler reaction to Ben" className="recap-inline-img" loading="lazy" />

      <h3>#3 Pick — Wombats (Chad) — <em>Yahoo Grade A</em></h3>
      <p>
        Soon to be renamed….Wombats…I got nothin. Decided to go with a DEF and K in 6th and 7th rounds... What does Jay Cutler think?
      </p>
      <img src={recap2016Img3} alt="Jay Cutler reaction to Chad" className="recap-inline-img" loading="lazy" />

      <h3>#4 Pick — Shady’s All Stars (Gus) — <em>Yahoo Grade B</em></h3>
      <p>
        Soon to be renamed “Wide-out, Why not!?” Exciting 1st round RB pick Todd Gurley but followed it up with 4 straight WR’s... What does Jay Cutler think?
      </p>
      <img src={recap2016Img4} alt="Jay Cutler reaction to Gus" className="recap-inline-img" loading="lazy" />

      <h3>#5 Pick — Mark’s Team — <em>Yahoo Grade B</em></h3>
      <p>
        Soon to be renamed “Gunslingers.” For some reason decided to draft 3 QB’s... What does Jay Cutler think?
      </p>
      <img src={recap2016Img5} alt="Jay Cutler reaction to Mark" className="recap-inline-img" loading="lazy" />

      <h3>#6 Pick — Wick — <em>Yahoo Grade B</em></h3>
      <p>
        Soon to be renamed “Bye Week Wick.” Drafted 2 TE’s but sadly both have the same bye-week... What does Jay Cutler think?
      </p>
      <img src={recap2016Img6} alt="Jay Cutler reaction to Wick" className="recap-inline-img" loading="lazy" />

      <h3>#7 Pick — Cracked NonRestorable (Alex) — <em>Yahoo Grade C</em></h3>
      <p>
        Soon to be renamed “What’s that noise?” Oh, that was Jamaal Charles tearing his ACL while eating a Fudgesicle... What does Jay Cutler think?
      </p>
      <img src={recap2016Img7} alt="Jay Cutler reaction to Alex" className="recap-inline-img" loading="lazy" />

      <h3>#8 Pick — Inigo Montoya (Ricky) — <em>Yahoo Grade B</em></h3>
      <p>
        Soon to be renamed “Chi-Town homer.” Drafted K Robbie Gould, Marshall...and JAY CUTLER! ... What does Jay Cutler think?
      </p>
      <img src={recap2016Img8} alt="Jay Cutler reaction to Ricky" className="recap-inline-img" loading="lazy" />

      <h3>#9 Pick — Randy Watson (Ryan) — <em>Yahoo Grade B</em></h3>
      <p>
        Soon to be renamed “It’s German for Whale’s Vagina.” Ryan really likes the SD offense drafting Rivers, Woodhead, and Allen... What does Jay Cutler think?
      </p>
      <img src={recap2016Img9} alt="Jay Cutler reaction to Ryan" className="recap-inline-img" loading="lazy" />

      <h3>#10 Pick — smakdown (Matt) — <em>Yahoo Grade B-</em></h3>
      <p>
        Soon to be renamed “Gunslinger’s part deux.” Matt also drafted 3 QB’s... What does Jay Cutler think?
      </p>
      <img src={recap2016Img10} alt="Jay Cutler reaction to Matt" className="recap-inline-img" loading="lazy" />

      <h3>#11 Pick — Biggie Pauls (Paul) — <em>Yahoo Grade C</em></h3>
      <p>
        Soon to be renamed “Champion.” Or not. Turns out I have the youngest team slash least experienced... What does Jay Cutler think?
      </p>
      <img src={recap2016Img11} alt="Jay Cutler reaction to Paul" className="recap-inline-img" loading="lazy" />

      <h3>#12 Pick — The Twins (Brian) — <em>Yahoo Grade B-</em></h3>
      <p>
        Soon to be renamed “Chase Daniel.” Cam Newton projected #1 QB... He also drafted several players late that could elevate his team... What does Jay Cutler think?
      </p>
      <img src={recap2016Img12} alt="Jay Cutler reaction to Brian" className="recap-inline-img" loading="lazy" />

      <p><strong>Arrrggghhh, is anyone else READY FOR SOME FOOTBALL!!!!</strong></p>
      <p>Thanks to everyone for getting their dues in, had a blast at the draft and am looking forward to a great season!!</p>
      <p><strong>Stay classy San Diahgo — Paul</strong></p>
    </section>
  ),
},
};


// ===================== UI COMPONENTS =====================
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
  const data = RECAPS[y];

  if (!data) {
    return (
      <div className="recap-coming-soon">
        <h2>{y} Recap</h2>
        <p>
          <em>
            coming soon, spoiler alert your draft was the equivalent of getting
            runner up in the special olympics
          </em>
        </p>
      </div>
    );
  }

  const hasMedia = (data.images?.length || 0) + (data.videos?.length || 0) > 0;

  return (
    <section className="recap-content">
      <h2>{y} Draft Recap</h2>

      {/* notes section (preferred) */}
      {data.notes ? (
        data.notes
      ) : !hasMedia ? (
        <p className="recap-note">
          Add media to <code>src/assets/recap-images</code> and wire them up in <code>RECAPS</code> to display here.
        </p>
      ) : null}

      {/* image grid */}
      {data.images?.length > 0 && (
        <div className="recap-media-grid">
          {data.images.map((src, idx) => (
            <figure key={`img-${y}-${idx}`} className="recap-card">
              <img src={src} alt={`${y} recap ${idx + 1}`} className="recap-img" loading="lazy" />
            </figure>
          ))}
        </div>
      )}

      {/* video grid */}
      {data.videos?.length > 0 && (
        <div className="recap-media-grid">
          {data.videos.map((src, idx) => (
            <figure key={`vid-${y}-${idx}`} className="recap-card">
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
      {/* comments live at page bottom in the parent to keep pager below too */}
    </section>
  );
}

function YearPager({ year, onPick }) {
  const min = 2016;
  const max = 2026;
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

// ===================== PAGE =====================
export default function DraftRecaps() {
  const { year: yearParam } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const selectedYear = useMemo(() => {
    const y = yearParam || "2026";
    return YEARS.includes(Number(y)) ? y : "2026";
    }, [yearParam]);

  const handlePickYear = (y) => {
    if (location.pathname.includes("/draft-recaps")) {
      navigate(`/draft-recaps/${y}`);
    } else {
      navigate(`/draft-recaps/${y}`);
    }
  };

  // 🔑 unique thread per draft year (root page has its own too)
  const pageKey = yearParam ? `draft-${yearParam}` : "draft-recaps-root";

  return (
    <div className="recap-wrapper content-wrapper">
      <header className="recap-header">
        <h1>Draft Recaps</h1>
        <p className="recap-sub">Relive the chaos year by year.</p>
      </header>

      <YearButtons activeYear={selectedYear} onPick={handlePickYear} />
      <RecapContent year={selectedYear} />
      <YearPager year={Number(selectedYear)} onPick={handlePickYear} />

      {/* 💬 Shit Talk — unique per year */}
    </div>
  );
}
