// src/pages/MatchupRecap.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MatchupRecap.css';
import fingerButton from '../assets/middle-finger-button.png';

const recaps = {
  2016: `
    <p>MARK VS MISH<p>
  
    <p>It looked like Chad had it locked up heading in to the playoffs dominating much of the season but Mark and Ben put on strong showings towards the end and all three ended up 9-4 and essentially tied for 1st place. Only Ben and Chad got the BYE's. Myself, Matt and Gus barely made it with only one more loss putting our playoff bids in jeopardy.</p>

    <p>Round 1: My team was less crappy than Matt's but we both scored under a 100pts.  He didn't see the news in time that Michael Thomas was inactive for the game and got a big fat zero. I only got 1 point from Dez Bryant which made my future decisions much more stressful, more on that later too. Mark handled Gus pretty handily with a 20 point win. Mark also lost Matt Forte during the matchup but it's a good thing I dropped Bilal Powell the week before after hanging on to him for 12 weeks waiting for him to replace old man Forte. Mark snatched him up real quick and I was powerless to stop him with $0 FAAB money left.</p>

    <p>Round 2: Mark matched up with Chad for Round 2 and squeezed by him by 6 points. Both teams put up solid numbers but Mark had high score of the week and he and Gus were the only people Chad would have lost to that week. Bilal Powell scored 27 points btw. I benched Dez and he get's 16pts, I start Sammy and he gets 2 points, arrrghh! Regardless, I had a 7 point lead heading into Monday night and Ben had Jamison Crowder who was projected to have 15 points and only had 2 games under 10 points leading up to that night. Well now he has 3 games, he caught the final catch of the game and was about to break one off and send my season packing but alas...he fumbled and sent me to the championship.</p>

    <p>Championship. It started Thursday, I played NYG DEF who'd been tearing it up recently and they only got me 3 points. Mark played Manning in a + matchup but his 3 interceptions put him below projected value, not a great start by either one of us. Fast forward to Saturday, I asked Diana at 10:15am if I should start Thomas Rawls or Sammy Watkins in the FLEX. She said Sammy Watkins, I said nah, he only got 2 pts last week and his feeties are hurt. Rawls gets hurt early giving me 0.8 points, Sammy goes off for 29.4 points and I sleep on the couch, she just liked Sammy's name better for crying out loud, how am I supposed to trust that?! He had 2 points the week before and his feeties are hurtsies! I digress...Lev Bell finishes off Mark's championship bid with 29.7 points mid Sunday giving him a 54 point lead heading in to the Sun and Mon night games, I had 2 players left, Mark had none. Kelce came through for me big time Sun night putting up 34 points and cutting the lead to 20 and all I had left was Dez Bryant for Monday night. Some of you may know I was trying hard to trade Dez during the season and Sunday morning I was trying to find some way to pick someone off of waivers to play instead of him in the championship but I was too late. But...Dez...WENT...OFF, 2 receiving touchdowns and 1 PASSING touchdown and I ended up winning by 10 points! So basically, in my craptastic fashion I won because I wasn't able to make anymore crappy decisions with my lineup.</p>

    <p>That's fantasy football for you, I'm proud of the win but in reality I was just in the right place at the right time, 3 other people would have beat me if they were in the championship....and yes Wick...you were one of them.</p>
  
    <p>-Mish out<p>  
      `,
  2017: `
    <p>SHAW VS. MISH</p>
    <p>Couldn’t find the championship recap but here is the “Pre-cap”<p>

<p>Championship Breakdown<p>

<p>Shaw-balls is "projected" to win by 11pts<p>

<p>QB: I think I have the edge here with Bortles vs SF. Shaw has Cousins going against DEN. I can't believe I just typed those words, I can't quit Bortles
<p>WR: This is pretty close but giving this one to Shaw, he would have had a huge advantage if he hadn’t lost Brown. He’s got Keenan Allen in the flex and the Monday night hammer (Hopkins). Who knows which Fun-checkers is going to show up, guess it depends on Cam’s mood. I’ve got Mr. Reliable in M Thomas and a decision to make between Stefon Diggs and Mike Evans. If I bench Evans then that means the 2 championship teams will have their #1 picks on the bench.<p>
<p>RB: I’m giving myself the edge here even though Gurley is inhuman right now. Woodhead as an RB2 is pretty weak but they are playing IND. I’ve gut Hunt and Drake who are both hot right now, just hope they stay that way.<p>
<p>TE: GRONK by a mile but hoping Engram gets me 15, Shaw get it<p>
<p>FLEX: Shaw, i've got Duke Johnson in there for crying out loud<p>
<p>K: Kind of tie I guess. Shaw’s K is also playing Monday night and if I lose because of a 4th quarter field goal I might just eat my regurgitated vomit out of self loathing. If it’s regurgitated does that mean I threw up, ate it, threw up then ate it again? If yes then that is exactly what I was trying to say. In case you couldn't visualize it, this guy is half way there:<p>

 <p>That's what I will do if that happens, and I hope Shaw's reaction is like the other guy, if he has a soul that is<p>

<p>DEF: I could play both DEN and LAC and Shaw would still have the advantage here. <p>

<p>So thats 4-2-1 in favor of Shaw for those of you keeping track at home. Good luck Shaw but I think i'm the one that needs it! And good to luck to you all in getting high score!<p>

<p>Last year Wick was 1 of 3 teams that hadn't won a high score prize yet and he got it in week 16. So make sure you set your lineups and keep playing till the very end!<p>

<p>Can't wait to see what happens!!<p>

<p>Wait found it: <p>

<p>Week 16 recap<p>

<p>It’s over folks and a new champion has been crowned. Sorry for the delay, I was waiting for a 34pt stat correction to give me the win but I don’t think it’s coming…<p>

<p>This year the person that deserved the title actually got the title. That’s right the dominant force known as Shaw-balls just steamrolled the entire league all season. He had a 12-1 record and scored 253pts more than the next high score. He even lost Antonio Brown for the championship game and it didn’t matter! Good year Shaw!!<p>

<p>He had 6 high scores payouts totaling $150 plus the winning pot of $200 for a grand total of $350!<p>

<p>Here’s how the rest of the league shook out<p>
<p>1: Shaw	                12-1		$350<p>
<p>2: Paul                      9-4          $150<p>
<p>3: Ben                       7-6          $25<p>
<p>4: Goldhammer        7-6           $50<p>
<p>5: Mark                     7-6           $50<p>
<p>6: Chad                    7-6           $0<p>
<p>7: Wick                     7-6           $0   <p>
<p>8: Scham                  6-7           $0<p>
<p>9: Ashleigh                 4-9          $0<p>
<p>10: Jeremy                5-8           $25<p>
<p>11: Gus                     3-10          $0<p>
<p>12: Matt                     4-9            $0<p>

<p>My records show that everyone has been paid, if I am mistaken let me know.<p>

<p>NEXT YEAR a couple of things I would like to change<p>
<p>
1. Winner gets to change or add a rule that will improve the league in their mind. They can also remove a rule that a previous winner put in place. If the rule will significantly increase my time burden (see rule change #2 below) I may discuss other options with the winner. In the end if the winner is set on his/her suggestion I will comply. 
2. Until then I would like to change how the playoffs positions are decided. Rather than a standard 13 wk regular season record a team will get an extra win if they are in the top 6 of point scoring for the week or an extra loss if they are in the bottom 6 in scoring. It wouldn’t have made a difference this year but I know in years past there have been frustrating situations where a team(s) had way more points than the final spot, but just got unlucky with their schedule. For example Chad barely made it the playoffs this year because his ‘points against’ were the 2nd highest in the league. If he had just 1 regular season loss more he would have been out despite having a point advantage over the 2 teams that could have supplanted him. With the new format it would be more likely that the 6 playoff teams would in fact be the best performing teams of the year 
3. It is now ok to talk about Fight Club
<p>
 
<p>As always, I am open to suggestions. Any of you opposed to one or more of these 3 rule changes speak up, I consider silence a vote for yes. If it’s close I may ask all of you for an up or down vote so all voices are heard.<p>

<p>It’s been real y’alls!!<p>

<p>-Mish Out!<p>
  `,
  2018: `
    <p>MATT VS. McCOOL<p>

<p>Wow, just wow is all I have to say. What a great final matchup between Matty Ice and The Mac Train, either team could have won but in the end Matty Ice made TMT his little...<p>


<p>Here's how it went down:<p>

<p>First game was Saturday between the overrated Titans and hapless Redskins. No surprise, the only starter between these two championship teams was the Tennessee Titans DEF (TMT). Wasn't looking so good until TEN got a pick 6 in the final 6 seconds of the game to give TMT a nice 13pt cozy start to the week. <p>


<p>Next game was Saturday afternoon between LAC and BAL. Again only one starter between the two and that was the LAC K for TMT. MI smartly benched Philip Rivers who only ended up with 5pts, which sometimes is a good thing for the kicker but in this instance only meant 4 more pts for TMT. So TMT averaged 8.5pts for his DEF/K and probably not soooper stoked about it. Sorry Flossie<p>


<p>Sunday afternoon games up next. MI had 6 players: D Adams (WR), Cooks (WR), Cohen (RB), Kamara (RB), Ertz (TE) and Elliot (K). TMT had 4 players: Trub Train (QB), Julio (WR), Barkley (RB), Engram (TE). By the end of the early afternoon games MI had a 4pt lead over TMT, thanks in large part to MI's 36 points by Ball Zach Ertz and a pedestrian performance by Barkley and Julio for TMT. TMT got a respectable 17 points from Engram but he did not see Ball Zach coming, sorry....<p>

<p>New low for me...moving on<p>

<p>Sunday late afternoon games. MI got another great performance by Kamara (26.5pts) but only 12 points combined between Cohen and Cooks. Only 3 players left in the primetime games for MI. TMT had Trub train in the late afternoon game but he came up small somehow against a cake SF matchup. MI now has a 27pt lead with 1 player Sunday night and 2 on Monday. TMT still has T Hill, D Williams, and Carson going Sunday night so still some hope at this point but not looking good. Sunday 8:15pm MI is at the party ready to celebrate, excited to eat some horse cake, but still a liiiiiiittle nervous<p>


<p>Sunday night game: With TMT down 27 points and 3 players in this game he needs about 25 points from each of them to feel comfortable going into Monday night. Well he got 13 from Hill, 25 from Carson, and 27 from Williams. Not too shabby right? WRONG!! MI's Russel Wilson ends up getting 34 points as well, and for those keeping track that's 29 points more than Rivers got on his bench. Well at this stage TMT ends up taking the lead 146 to 142 over MI but MI still has 2 players Monday night that need to average 2.05 pts to walk home with the championship. Right now he's happier than a unicorn on crossbars<p>

<p>Right now Mac is sadder than Trump walking into a Democratic rally by mistake<p>


<p>Monday night game: Mac has 4 pt lead, no players left. MI's Phillip Lindsay get's 7.7 pts, DEN Def gets 1pt. Matty Ice wins the Championship and justly posts 56 GIF's celebrating on Yahoo app, well done smakdown! <p>


<p>His season was reminiscent of Shaw-Balls last year, dominating almost every week including through the playoffs and definitely deserved the win. Mac was no slouch especially the last half of the season coming on strong through the end and put up a great fight. For the championship to come down to 5 pts is always a good thing. <p>

<p>Here are the final standings and payouts. Of note, previously last place Wick moved up to 6th loser, JD got his first high score and $25 this week 16, proving once again it pays to play all 16 weeks <p>
<p>*PAID IN FULL<p>
</p>1. Matt..............$325</p>
</p>Last. Mac.........$150</p>
</p>Last. Paul.........$50*</p>
</p>Last. Ben..........$0</p>
</p>Last. Shaw.......$25*</p>
</p>Last. Cello........$50*</p>
</p>Last. Wick........$0</p>
</p>Last. Gus.........$25*</p>
</p>Last. JD...........$25</p>
</p>Last. Hack.......$25*</p>
</p>Last. Scham....$0</p>
</p>Last. Mark.......$0</p>
  `,
  2019: `
    <p>SCHAM vs. MARK<p>

<p>Here's how it all went down, see last email for road to playoffs<p>

<p>Mark had been dominant all season racking up 3 high scores along the way, 3 head to head losses and only 1 week in which he wasn't in the top 6 for points. Ryan racked up 2 high scores along the way, but after his 2 losses in week 11 he never looked back.<p>

<p>Saturday
Mark had Winston and Watson as his QB's which should have easily gotten him 50pts but he got 28pts instead, not a great start. Winston threw 4 frikin picks. His 2 RB's on the bench also ended up outscoring his RB2. Mark could not be feeling very good at this point.<p>

<p>Ryan did not have a great start either. He had been riding NE defense for awhile but they only got him 5pts this week. A good 11pts from his kicker so not bad. Ryan was probably feeling "meh."<p>


<p>Sunday 
Mark could have made up some ground with his defense, PIT was a solid play against the Jets but it didn't pan out, again, and only got him 5pts. He had CMAC (aka the Panthers) going against the Colts and got his usual 30+ pts so finally something good happened for him. Nevermind, he had DJ Moore going in the same game and he got 1 catch for 1 yard. Goedert got him 24pts in the afternoon game but things aren't looking good for the regular season champion. Mark needs some help at this point, his only hope is Dan Bailey and Diggs Monday night to get him 70pts?<p>

<p>We already talked about Mark's QB's but Ryan's QB's (Mahomes and Tannehill, yes, that Tannehill) got him a combined 60pts, 32pts more than Mark's. The rest is history as Ryan's team outperformed Mark's in every position except RB. Ryan had racked up 188pts by the end of Sunday night and had an ~70pt lead. He's feeling pretty confident right now!<p>

<p>Monday night
Mark's Diggs gets a TD and has decent game but Kirk Cousins had about 0.5 seconds per play to get a pass off and couldn't get anything else going. Dan Bailey scored 4pts. Ryan ends up with high score for the week....aaaaaaannddddddd<p>

<p>WE HAVE A NEW CHAMPION!! - Ryan Schamerloh<p>

<p>Great job to both of you and the rest of league. Ryan you get to pick a new rule for next season or get rid of an old one. Let me know when you decide!<p>

<p>Payouts will be coming soon. Ryan ended up with $300 including high scores and Mark ended up with $125 (2nd place and 3 weekly high scores). <p>

<p>Till next year!<p>

<p>-Mish out<p>
  `,
  2020: `
    <p>McCOOL vs. MISH<p>

<p>Mr. McCool, the crown is yours!<p>

<p>Wow, just wow, what a crazy year. In case any of you checked Monday morning and saw that I had a 39 point lead and McCool only had Diggs left, you probably assumed that I was going to win. Hell, I did. Well I didn't...<p>


<p>Here's how it went down. Yahoo's original projections had McCool beating me 171-157, which is fair because his team was way better than mine. It started off Christmas Day, Saints vs. the Vikings. I had Kirk Cousins and Dalvin Cook. I was very happy with Cousins and content with Cook but McCool still had the higher projected total. I was probably happiest that McCool didn't have Kamara, I mean really, that would suck to lose to someone in the championship because one player scored 40 plus points!<p>

<p>The next big set of games Saturday were TB/DET, SF/AZ, MIA/LV. I had Godwin in the 2nd game and he did NOT disappoint. I had TB's kicker. And since TB could only score 7 TD's in this game, I only got 5 points...that's right, he missed two of his PAT's. I HATE KICKERS IN FANTASY FOOTBALL! I had DHop and George Kittle and McCool had Kyler Murray and Aiyuk in the 2nd game. DHop and Kittle were somewhat disappointing for me with 26 combined points but Kyler and Aiyuk were even more of a let down for McCool, Aiyuk got hurt so he only got 4pts out of him.. The final game of Saturday McCool had Waller and I didn't have anybody. Well, I had Agholor (27pts) but didn't feel comfortable playing him over Corey Davis (0pts). Waller had a nice game for McCool and I think we were pretty even in the projections at this point, I finally had closed the gap thanks to Godwin and lackluster performances from McCool's team.<p>

<p>The rest of the games were on Sunday except the Monday night game. I was able to build on my lead with a great performance from Trubisky and an average performance from WAS defense. McCool had some nice pointage from his *$*(#)'ing kicker but got 0 points from his DEF. He actually would have gotten negative points for his defense in most leagues but not Laser Sharks! Tyreek only got him 10points but Matt Ryan was able to put together a nice game. The big surprise was the GB-TEN game in the SNOW. This left AJ Brown (McCool) and Davis (Mish) without much to do. Luckily, AJ Brown is a beast and was able to get 8pts for McCool but I got blanked with Davis. Still, by the end of Sunday night I had a 39pt lead and was feeling....pretty....darn....good. <p>

<p>Well then came Monday night. Buffalo finally got to kick the shit out of New England for a change  and that they did. They were up 31 to 9 thanks to two TD's from Diggs, who happens to be on McCools team. I am begging the Bills to rest their starters. They didn't, they had to get ONE more TD out of Diggs to go up 38-9. That's when they decided to cool it and just ride the game out with backups. That also gave Diggs 42 total points for the game and McCool with a 3point lead and OUR NEW CHAMPION!!!!!!!!<p>

<p>It all worked out in the end, for sure the best team won here, I got lucky beating Cello and thought I was going to get lucky with McCool but it did not happen.<p>

<p>Well done sir!<p>

<p>Ben had high score (209) this week and got some money back!<p>

<p>Final payouts below, if you don't get it by the end of today let me know!<p>


<p>It's been fun! Until next year fellas!!<p>
<p>-Mish out<p>
  `,
  2021: `
    <p>JD VS. MISH, brother vs. brother<p>

<p>I would love to say that was close but that would be the most ridiculous thing I have said in my entire life! <p>

<p>JD get the lotion out, someone wanted to say congrats to you:<p>

<p>It's legit, trust me<p>

<p>Here's how it went down:<p>

<p>Yes...JD did have Ja'Marr Chase but even if he didn't, he still would have whipped me. In case you didn't know Chase had 266 yards and 3 TD's for a grand total of 59pts, that's roughly 2/3rds of my point total. Then he got 36pts from St Brown (waiver wire), 34pts from Penny (waiver wire), 26pts from Murray, 15pts from Mike Williams (who I dropped, waiver wire). I nicely asked him to stop scoring points Sunday afternoon but he humbly replied:<p>

<p>So JD backed up his high score last week with another high score this week, so I am not even going to say how unlucky I was because the dude TORE IT UP and it was a hell of a finish to the season for him. He would have beat any of us on our best days these past two weeks. Nice job Broseph!! <p>

<p>That being said...<p>

<p>Well, the most exciting thing that happened on my team was when halfway through his game, Antonio Brown took all(most) of his clothes off, did a dance in the endzone half naked, tried to get an Uber to leave the stadium but then ended up with a police escort to the airport so he could quit football, during an in progress game. And in case anyone wasn't watching football yesterday and thinks I am making that up...I. am. not. Here is a picture a fan caught of the situation, looks sus<p>

<p>Again, it didn't make a damn difference, JD still would have whooped me if AB had an identical game to Chase, just thought it was funny. So glad I threw away my kids Antonio Brown jerseys 3 years ago.<p>

<p>JD WON 203.32 to 99.56 (Mish), holy hell that hurts to write<p>

<p>So here are the final payouts<p>
<p>JD: $200 1st place, plus 2 high scores (none paid)<p>
<p>DD: $100 4 high scores (2 already paid)<p>
<p>Mish: $75 1 high score + buy-in back for 2nd place<p>
<p>Gus: $75 3 high scores (1 already paid)<p>
<p>Scham: $50 2 high scores (none paid)<p>
<p>Mark: $50 2 high scores (1 already paid)<p>
<p>Matt: $25 1 high score (already paid)<p>
<p>McCool: $25 1 high score (already paid)<p>
<p>Wick: $25 1 high score (already paid)<p>

<p>I'm assuming JD's high score will stand this week but I will pay out what's owed tomorrow just in case<p>


<p>Looking to next year:<p>
<p>1) JD(Champ) needs to come up with a new rule or get rid of an old rule<p>
<p>2) League dues will go up to $100, this was unanimously approved prior to the start of this season but only to go into effect this next season<p>
<p>3) I'll be changing the waiver wire setup, the new setup should allow us to pick up a player last minute, it will likely eliminate FAAB.<p>

<p>Ok, that's it for this year. Your mish thanks you for another great season, see you next year! Congrats again JD!! Hope you enjoyed the video :)<p>

<p>-Mish out<p>

  `,
  2022: `
    <p>SCHAM VS. DD<p>

<p>Sorry for the delay but that was an unfortunate way to end the season.<p>

<p>Ryan aka Scham-balls has become the 1st laser shark member to win twice, quite the accomplishment amongst all of you fine upstanding gentlemen!<p>

<p>I actually leveled up the league this year and will be shipping this trophy out to Ryan :)<p>

<p>And sorry for the delay, DD ceded the win to Ryan last week I, just hadn't gotten around to making the announcement<p>

<p>The following payouts should be coming in the next 24-48hrs<p>

<p>League Winner Scham: $725 1st place, $75 in high scores<p>
<p>Runner up DD: $100 2nd place, $25 in high scores<p>
<p>McCool: $75 in high scores<p>
<p>Gus: $75 in high scores<p>
<p>Mark: $25 in high scores<p>
<p>Debo: $50 in high scores<p>
<p>Wick: $25 in high scores<p>
<p>Shaw: $0 in high scores<p>
<p>Cello: $0 in high scores<p>
<p>Mish: $50 in high scores<p>
<p>JD: $0 in high scores<p>
<p>Welsch: $0 in high scores<p>

<p>I got confirmation that the TuTu was delivered to Matt, so we should be expecting a video or photo of manual labor in said TuTu any day now.<p>

<p>Great season guys and great job Ryan! Sorry it had to end on such a tragic note.<p>

<p>-Mish out till next time<p>

  `,
  2023: `
    <p>SHAW VS. DEBO<p>

<p>We have a "new" champion. I write "new" because he has won it before, like 15 years ago it seems, but nonetheless he's done it again. Mr. Ryan Shaw, aka Shaw Balls has come out of nowhere and nabbed the trophy. He did in style too with the high score for the week!<p>

<p>Debo had a solid season and his final performance was respectable with the 2nd highest score in the league for the week. He was pretty dominant the last few weeks and it was going to take a monster performance to take him down and that's what we got folks.<p>

<p>The genius of Debo had him picking up Flacco a few weeks ago (yes, I made fun of him) but he has been balling and outscored Shaw's QB 30 to 22. <p>

<p>Debo also picked up an early WW darling in Puca Nacua and he put up 20 for him. Thielen had an ok game for Ryan but Aiyuk made up for it with 25 pts.<p>

<p>Debo won the RB battle as well, outscoring Shaw 35 to 25. <p>

<p>TE for both was meh but an extra disappointing 5pts from Kelce for Debo.<p>

<p>The big one for Shaw was in the FLEX getting 44pts from CeeDee Lamb and the final cherry on top was a whopping 24pts from Harrison Butker after getting five field goals yesterday afternoon. <p>

<p>Congrats Shaw!<p>

<p>Well that's how it all went down but what everyone really wants to know is how much they are getting paid and here is how it shakes out.<p>

<p>Shaw: $700<p>
<p>Debo: $175<p>
<p>JD: $75<p>
<p>Mish: $75<p>
<p>McCool: $50<p>
<p>Mark: $50<p>
<p>Wick: $25<p>
<p>Gus: $25<p>
<p>DD: $25<p>
<p>Cello: $0<p>
<p>Scham: $0<p>
<p>Welsch: TUTU<p>

<p>Been a great season, looking forward to the next! Shaw needs a new rule or get rid of a rule, and Matt I'll be sending another TUTU for you and we'll be looking forward to the pictures!<p>

<p>-Mish out with love<p>

  `,
  2024: `
    <p>MARCELLO VS. SCHAM<p>

<p>On to the Super Gay I Can't Quit You Texas Cowboys Laser Shark Championship<p>

<p>This is Scham-balls and Marcello getting all jazzed up prior to the championship game<p>

<p>It was actually a good matchup as both teams put up some pretty big numbers. In the end, I don't think Marcello polished his saddle enough because he had some seriously bad luck. James Conner got hurt in the 1st quarter and gave him less than 3 points and his TE Hunter Henry gave him 0 pts with only 2 targets. That's not to take away from Scham-balls victory, his team did great. This is his 3rd Laser Shark Championship. <p>

<p>For those of you that don't know Scham-balls or Marcello, these two cowboys are actually really good representations of them.<p>

<p>Shaw, I am going to need that trophy back so I can send it...again...to Texas<p>

<p>DD, I think that address you gave me for the TuTu was made-up, I can't seem to find it on a map<p>

<p>Thanks for a great season fellas, this is officially 3 years with this crew (out of 9 seasons) without anybody dropping out or going to jail, happy to have you all!<p>

<p>-Mish out<p>

  `,
  2025: `
    <p>My prediction for 2025<p>

<p>Fischer Vs. Debo<p>

<p>The two newest members of Laser Sharks find themselves head to head at the end of the 2025 season vying for the 2025 Laser Sharks Trophy.<p>

<p>Both men had something to prove, Fischer, the new guy approached the season like a prison newby. He got some advice from Gus and was told to shiv the big dog in the group. He flew out to Texas and and shivved Scham-Balls in the most obvious place when he bent down to pick up the soap. Scham-balls is now known as Scham-shaft.<p>

<p>Debo knowing there was still some work to do, called up some of his TSA buddies and planted some heroin on Shaw-Balls right before he was about to take off on a flight. Shaw-balls found the contraband and ran through the airport like an old British comedy. No one laughed.<p>

<p>Fischer and Debo thought they were in the clear but they forgot about 1 time champ and 4-time runner up Mish. They didn’t see him as much of a threat. Turns out they were right. Mish was blacked out for the draft and spent most of his time dicking around with this website to pay much attention to football. Mish ended up with the Tutu<p>

<p>McCool thought he was safe with his boy blue Debo but Debo made a pack with the devil and tipped off the FBI with some questionable browser history content. McCool didn’t stand a chance. The planted material was just too fucked up. McCool moved to Uruguay and became a banana farmer.<p>

<p>JD made an early season pack with Fischer to collude on some one sided trades. JD was promised a baby oil bath at Fischer’s “White Party” but he quickly realized DD was promised the same thing and the two of them hit it off and ran away to Croatia so they could be themselves with each other<p>

<p>Mark got off clean and was left alone. This was an oversight by Fischer and Debo and Mark was left to spend all of his free time pouring over his lineups and waiver wire. They didn’t see it coming. He finished 11th. Mark was later seen living his life like nothing ever happened.<p>

<p>Fischer, not forgetting the advice that Gus gave him about the prison shiv knew he had to make good on the help he got. He flew him out to Vegas to a Coldplay concert and Gus was caught on the kiss cam with an inflatable Gumby doll. Gus denied any ill-intent to the national media but when the Gumby doll deflated from some un-natural holes it was clear he was in trouble. Gus went into isolation and replied insessantly to critical social media posts that “you just don’t understand!”<p>

<p>Matt and Marcello were also overlooked. They forgot that Matt had won a championship and Marcello had been a runner-up. “Matt-Cello” was smart and could see what was going on. They decided to band together and put a stop to this pathetic attempt for the noobs to prove themselves. They devised a MacGyver type plan involving truffles, horse hair, sutures, bubble gum and paper clips. They ended up making an effigy of Epstein with the intention of luring Debo and Fischer into a scandalous trap but pictures of the effigy were leaked prematurely and “Matt-Cello” were cancelled and relegated to an abandoned island once used for people with leprosy.<p>

<p>With all of that craziness we found their evil plans paid off and Fischer and Debo found themselves head to head in the 2025 Laser Sharks Championship! It came down to the wire down to Monday Night Football. Debo came out victorious but later found himself committed to a mental asylum, not because he felt guilty about all that he had done. But because Fischer had been slowly poisoning him during their weekly Tuesday night “wine Wednesdays” they had together. Fischer, unsatisfied with his failure, committed himself as well so he could form another league with easier prey.<p>

<p>And that is how I see 2025 going, I can’t see any other way that it goes down<p>

<p>Though I guess I could be wrong….<p>

<p>-Mish out!<p>
  `,
  // You can add more recaps here for other years
};

const years = Object.keys(recaps).map(Number).sort((a, b) => a - b);

const MatchupRecap = () => {
  const { year } = useParams();
  const navigate = useNavigate();
  const currentYear = parseInt(year, 10);

  const currentIndex = years.indexOf(currentYear);
  const prevYear = years[currentIndex - 1];
  const nextYear = years[currentIndex + 1];

  return (
    <div className="matchup-recap-page">
      <div className="recap-navigation">
        {prevYear && (
          <button
            className="recap-button"
            onClick={() => navigate(`/matchup-recap/${prevYear}`)}
          >
            <img
              src={fingerButton}
              alt="Prev"
              className="finger-icon flipped"
            />
            Previous
          </button>
        )}
        {nextYear && (
          <button
            className="recap-button"
            onClick={() => navigate(`/matchup-recap/${nextYear}`)}
          >
            Next
            <img src={fingerButton} alt="Next" className="finger-icon" />
          </button>
        )}
      </div>

      <h1>{year} Matchup Recap</h1>
      <div
        className="recap-text"
        dangerouslySetInnerHTML={{
          __html: recaps[year] || '<p>No recap available for this year yet.</p>',
        }}
      />
    </div>
  );
};

export default MatchupRecap;