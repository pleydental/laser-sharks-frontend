// src/pages/ManagerBio.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ManagerBio.css';
import sharkImage from '../assets/bg-shark.png';

// Dynamic image loaders
const managerImages = require.context('../assets', false, /\.png$/);
const loserBanners = require.context('../assets/loser-banners', false, /\.png$/);
const runnerUpBanners = require.context('../assets/runner-up-banners', false, /\.png$/);

const ManagerBio = () => {
  const { slug } = useParams();
  const navigate = useNavigate();


const HIGHLIGHT_TITLES = [
  'Connection to commish',
  'Likes',
  'Dislikes',
  'Favorite Draft Strategy',
  'Player most likely to draft',
  'Location',
  'Off limit trash talk',
];

const styleBio = (bioText) => {
  const lines = bioText.split('\n').map((line, idx) => {
    const match = HIGHLIGHT_TITLES.find((title) =>
      line.toLowerCase().startsWith(`-${title.toLowerCase()}`) ||
      line.toLowerCase().startsWith(`${title.toLowerCase()}`)
    );

    if (match) {
      const parts = line.split(':');
      return (
        <div key={idx}>
          <strong className="glow-green">{parts[0]}:</strong>
          {parts.slice(1).join(':')}
        </div>
      );
    }

    return <div key={idx}>{line}</div>;
  });

  return lines;
};

const bios = {
  'paul-ley': {
    name: 'Paul Ley',
    aliases: ['Biggie Pauls', 'Mish', 'Shit talking mofo'],
    stats: 'Seasons: 9 -||- Win rate: 54% -||- Record: 110-92 -||- High Scores Per Season: 2.13 -||- Lifetime Earnings: $700',
    championships: [2016], 
    runnerUps: [2021, 2020, 2019, 2017],
    bio: `-Connection to commish: It’s me!!!

-Likes: football, super-hero movies, tiny baby corn in stir-fry’s, golf, hiking, pocket lint, upside down punctuation, being (former) champion, celery, pina coladas, over-using exclamation points!!!

-Dislikes: over-using question marks???????

-Favorite Draft Strategy: 0-3 beers = McCool's strategy, 3+ beers = basically darts

-Player most likely to draft: Snarf

-Location: Westfield, IN

-Off limit trash talk: no limits cuz I’m extreme like that`

  },
  'ryan-schamerloh': {
    name: 'Ryan Schamerloh',
    aliases: ['Team Steiners', 'Scham-balls'],
    stats: 'Seasons: 8 -||- Win rate: 51% -||- Record: 97-92 -||- High Scores Per Season: 1.14 -||- Lifetime Earnings: $1575',
    championships: [2024, 2022, 2019], 
    bio: `-Connection to commish: Cousin

-Likes: Bedazzling non-cloth items such as napkins and sheet metal, bubble wrap, marinades, hairless cats, fireworks, unicycle(s), that sticky stuff that holds a new credit card to the paper that you can pull off and roll up into a little ball, eyes

-Dislikes: Velcro, llama’s

-Favorite Draft Strategy: chug a beer 10 seconds before each pick

-Player most likely to draft: Camel Toe

-Location: Dallas, Texas

-Off limit trash talk: Monopoly jokes (e.g. Your team is a bigger waste of money than a hotel on Park Place)`
  },
  'mark-williams': {
    name: 'Mark Williams',
    aliases: ['unfollowbobo', 'Just here for the bitches'],
    stats: 'Seasons: 9 -||- Win rate: 53% -||- Record: 108-94 -||- High Scores Per Season: 1.38 -||- Lifetime Earnings: $300',
    runnerUps: [2019, 2016],
    bio: `-Connection to commish: College

-Likes: Hair bands, monster ballads, air guitar, Harry Potter, curling, rubber band balls, movies, Alex P Keaton

-Dislikes: Hairspray, Aurora borealis 

-Favorite Draft Strategy: to do good

-Player most likely to draft: Giselle Bundchen

-Location: Westfield, IN

-Off limit trash talk: Mom jokes and mom pooping jokes (e.g. Yo momma so fat, instead of drafting Refrigerator Perry, she ate the damn fridge…then had diarrhea…then named the diarrhea after your team)`
  },
  'ryan-shaw': {
    name: 'Ryan Shaw',
    aliases: ['Kenny Powers', 'Shaw-balls', 'Ronald Reagan Is a Damn Hero'],
    stats: 'Seasons: 9 -||- Win rate: 50% -||- Record: 102-100 -||- High Scores Per Season: 1.88 -||- Lifetime Earnings: $1050',
    championships: [2023, 2017], 
    bio: `-Connection to commish: friends-giving crew

-Likes: airplanes, spreadsheets, duvet covers, Chuck Norris, football, white brick, crop tops, melted cheese on the inside of hamburger wrappers, bacon, bacon, bacon

-Dislikes: Kevin Bacon, nicknames that end in -balls

-Favorite Draft Strategy: don’t need one, I’m Shaw-balls dammit!!

-Player most likely to draft: MAGA

-Location: Zionsville, IN

-Off limit trash talk: Ronald Reagan jokes (e.g. your team is so stupid it thought Ronald Reagan was fiscally irresponsible)`
  },
  'justin-gus-miller': {
    name: 'Justin "Gus" Miller',
    aliases: ['Prison Panther', 'Tofurker? I barely know er'],
    stats: 'Seasons: 9 -||- Win rate: 53% -||- Record: 101-88 -||- High Scores Per Season: 0.88 -||- Lifetime Earnings: $250',
    bio: `-Connection to commish: Kirkland Light brewery tour

-Likes: bikes, tofurkey, crappy beer, not so crappy beer, kites, Weird-Al, oil wrestling, kayaking, Rom-Com’s, #2 pencils, The Sound of Music but not Music of Sound The

-Dislikes: profiles of people he doesn’t know

-Favorite Draft Strategy: find match, light match, throw match in dumpster filled with gasoline, shotgun a beer

-Player most likely to draft: Tom Brady

-Location: Indianapolis

-Off limit trash talk: Michael Jackson jokes (e.g. Gus your team is so bad, even Michael Jackson beat it)`
  },
  'matt-welsch': {
    name: 'Matt Welsch',
    aliases: ['smakdown', 'I wear TuTu(s)', 'I Also Champ'],
    stats: 'Seasons: 9 -||- Win rate: 44% -||- Record: 88-114 -||- High Scores Per Season: 1.25 -||- Lifetime Earnings: $275',
    championships: [2018], 
    losers: [2023, 2022],
    bio: `-Connection to commish: Former neighbor

-Likes: super-heroes, bikes, beer, wine, movies, figure skating, running, tough man shots, paper clips but not the ones with the different colored veneers…just the silver ones, colored veneer paper clips (he’s confused), hockey

-Dislikes: tan lines

-Favorite Draft Strategy: self thumb wrestling for hard decisions

-Player most likely to draft: Captain Marvel

-Location: Westfield, IN

-Off limit trash talk: Horse jokes (e.g. A horse walks into a bar, the bartender says, "your team sucks! And also, why the long face? JK, don't care, your team sucks!")`
  },
  'shawn-mccool': {
    name: 'Shawn McCool',
    aliases: ['HingleMcCringleberry', 'Suns Out Guns Out'],
    stats: 'Seasons: 7 -||- Win rate: 62% -||- Record: 109-67 -||- High Scores Per Season: 2.67 -||- Lifetime Earnings: $500',
    championships: [2020],
    runnerUps: [2018],
    bio: `-Connection to commish: Brookside

-Likes: long walks in the rain, short walks in the snow, medium walks in sand-storms, goggles, constellations, kite surfing, knittin’ mittens, singin in the rain, Reading Rainbow song remixes

-Dislikes: Tide Pod aftertaste 

-Favorite Draft Strategy: Something like a multivariate analysis of past individual performance and projected performance while taking strength of schedule into consideration, including results of analysis into proprietary algorithm giving best available player based on remaining non-drafted players whilst considering strength of current roster and projected players to be available in later rounds

-Player most likely to draft: that’s what she said?

-Location: Westfield, Indiana

-Off limit trash talk: adding “Mc” to random words in your trash talk (e.g. McCool your McTeam McSucks McBalls)`
  },
  'jd-ley': {
    name: 'JD Ley',
    aliases: ['Pound It Noggin', 'I would put it in her butt'],
    stats: 'Seasons: 7 -||- Win rate: 44% -||- Record: 77-99 -||- High Scores Per Season: 1.00 -||- Lifetime Earnings: $350',
    championships: [2021],
    bio: `-Connection to commish: best brother ever

-Likes: putting vegetables in water for flavor, hiking, beer, garbage pail kids, Nilla wafers, shaving cats so they have one long Mohawk from front to tail, yogging, crop dusting during hot yoga

-Dislikes: people that say moist like it’s no big deal that they just said moist. Oh wait that’s me

-Favorite Draft Strategy: weegee board and meth unite!

-Player most likely to draft: Warren Buffet

-Location: Carmel, Indiana 

-Off limit trash talk: Handicapped dogs (e.g. your team is gimpier than a 3-legged dog with gonorrhea…that you gave the gonorrhea to)`
  },
  'marcello-polidori': {
    name: 'Marcello Polidori',
    aliases: ['Slippery Jack', 'Truffle King', 'I am Italian Dammit', 'also I am Moist'],
    stats: 'Seasons: 7 -||- Win rate: 50% -||- Record: 102-100 -||- High Scores Per Season: 1.88 -||- Lifetime Earnings: $250',
    runnerUps: [2024],
    bio: `Connection to commish: brutha from anotha mutha

-Likes: MOIST, The thong song, spaghetti, breaded tenderloins, truffles, beer, ceramic knives, dogs, bedazzling unsuspecting people’s garments at the bus stop

-Dislikes: meteor showers that get a liiiiiiitle too close. Troy Aikman

-Favorite Draft Strategy: it’s like reading tea leaves but with dog vomit instead

-Player most likely to draft: Steve

-Location: Texas

-Off limit trash talk: Truffle jokes (e.g. Cello your team sucks so bad there isn’t mushroom for any more suck)`
  },
  'don-debone': {
    name: 'Don "DD" Debone',
    aliases: ["Double D's", 'I wear TuTu'],
    stats: 'Seasons: 5 -||- Win rate: 58% -||- Record: 72-52 -||- High Scores Per Season: 1.5 -||- Lifetime Earnings: $325',
    losers: [2024],
    runnerUps: [2022],
    bio: `-Connection to commish- Brookside 

-Likes: Golfing every day, humidity, barometric pressure, salt-water, chlorophyll, nutritional yeast, cutting out and saving bar codes from granola bar boxes, Uno (not the game, the number)

-Dislikes: Adam Sandler’s rendition of Toll-Booth Willie, the white eyes of the dude from Star Trek when he takes his visor glasses off

-Favorite Draft Strategy: spray fart against a wall and look for players name 

-Player most likely to draft: Philip Rivers

-Location: Westfield, IN

--Off limit trash talk: TuTu references`
  },
  'brian-debo': {
    name: 'Brian Debo',
    aliases: ['Happy Hour', 'Bottoms Up'],
    stats: 'Seasons: 3 -||- Win rate: 60% -||- Record: 50-34 -||- High Scores Per Season: 0.67 -||- Lifetime Earnings: $225',
    runnerUps: [2023],
    bio: `Connection to commish: Brookside, case races

-Likes: Miller light, Miller heavy, Clover, bogo sales, Night vision, golf, 100-point yardage bonuses, hair balls, yarn balls, bouncy balls, gutta-percha balls

-Dislikes: meatballs

-Favorite Draft Strategy: Rub lucky strand of Taylor Swifts hair that he got on ebay

-Player most likely to draft: Bud Light Knight

-Location: Westfield, IN

-Off limit trash talk: none that I can think of, give him your worst`
  },
  'aaron-fischer': {
    name: 'Aaron Fischer',
    aliases: ['Dice Roll Aaron', 'I love lamp', 'that got out of hand quickly'],
    stats: 'Seasons: 0 -||- Win rate: 0% -||- Record: 0-0 -||- High Scores Per Season: 0 -||- Lifetime Earnings: $0',
    bio: `Connection to commish: brutha from another mutha

Likes: Red and white striped pants, diet coke, bobby knight, IU, rocks, chia pets, corn, corn dogs, corn bread, creamed corn, corn, creepy collages of old school game show talents (think Vanna White)

Dislikes: Pat Sajak, Purdue, also hairspray, also sunscreen

Favorite Draft Strategy: You wouldn't understand

Player most likely to draft: Flavor Flav

Location: Where dreams are made of

Off limit trash talk: any insult or factual evidence of IU's recent inferiority in college sports (except football in 2024). Eg "You say the same thing about your Laser Shark team that you do about IU (insert sport here), we're going to be good this year!"`
  }
};

  const slugs = Object.keys(bios);
  const index = slugs.indexOf(slug);
  const nextSlug = slugs[(index + 1) % slugs.length];
  const prevSlug = slugs[(index - 1 + slugs.length) % slugs.length];

  const manager = bios[slug];
  const nextName = bios[nextSlug].name;
  const prevName = bios[prevSlug].name;

  let managerImg;
  try {
    managerImg = managerImages(`./${slug}.png`);
  } catch (err) {
    console.warn(`Manager image not found for ${slug}, using fallback.`);
    managerImg = sharkImage;
  }

  if (!manager) {
    return (
      <div className="content-wrapper">
        <h2>Manager Not Found</h2>
        <p>We couldn't find that Laser Shark. Try going back to the Managers page.</p>
      </div>
    );
  }

  return (
    <div className="manager-bio-wrapper">

      {/* Main Manager Info */}
      <div className="bio-header">
        <div className="champion-badge-container">
          {manager.championships && manager.championships.map((year, idx) => (
            <video
              key={idx}
              src={require(`../assets/champ-banners/champ-${year}.mp4`)}
              autoPlay
              loop
              muted
              playsInline
              className="champ-banner"
            />
          ))}
        </div>

        <img src={managerImg} alt={manager.name} className="manager-img-bio" />

        <div className="runnerup-loser-container">
          {manager.runnerUps && manager.runnerUps.map((year, idx) => (
            <img
              key={`runnerup-${idx}`}
              src={require(`../assets/runner-up-banners/runner-up-${year}.png`)}
              alt={`Runner Up ${year}`}
              className="runnerup-banner"
            />
          ))}
          {manager.losers && manager.losers.map((year, idx) => (
            <div key={`loser-${idx}`} className="loser-banner">
              <img
                src={require(`../assets/loser-banners/loser-${year}.png`)}
                alt={`Loser ${year}`}
              />
            </div>
          ))}
        </div>
      </div>

      <h1>{manager.name}</h1>
      <h3>{manager.aliases.join(', ')}</h3>
      {manager.stats && <p className="manager-stats">{manager.stats}</p>}
      <pre className="bio-text">{styleBio(manager.bio)}</pre>

      {/* Navigation Buttons (NOW AT BOTTOM) */}
      <div className="bio-nav-container bottom-nav">
        <button className="nav-arrow" onClick={() => navigate(`/managers/${prevSlug}`)}>
          <img src={sharkImage} alt="shark" className="shark-icon" />
        </button>
        <div className="nav-label">Previous: {prevName}</div>
        <div style={{ width: '2rem' }}></div>
        <div className="nav-label">Next: {nextName}</div>
        <button className="nav-arrow" onClick={() => navigate(`/managers/${nextSlug}`)}>
          <img src={sharkImage} alt="shark" className="shark-icon" />
        </button>
      </div>

    </div>
  );
};

export default ManagerBio;