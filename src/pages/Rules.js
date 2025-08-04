import React from 'react';

const Rules = () => {
  return (
    <div className="info-box white-card">
      <h2>📜 League Rules 📜 </h2>
      <p style={{ fontStyle: 'italic', marginBottom: '1.5rem' }}>
        These are the Yahoo settings for scoring, points, etc.
      </p>

      <table className="rules-table">
        <tbody>
          <tr>
            <th>League ID#</th>
            <td colSpan="2">502812</td>
          </tr>
          <tr>
            <th>League Name</th>
            <td colSpan="2">Laser Sharks</td>
          </tr>
          <tr>
            <th>Draft Type</th>
            <td colSpan="2">Online Draft</td>
          </tr>
          <tr>
            <th>Max Teams</th>
            <td colSpan="2">12</td>
          </tr>
          <tr>
            <th>Scoring Type</th>
            <td colSpan="2">Head-to-Head</td>
          </tr>
          <tr>
            <th>Start Scoring On</th>
            <td colSpan="2">Week 1</td>
          </tr>
          <tr>
            <th>Trade End Date</th>
            <td colSpan="2">November 22, 2025</td>
          </tr>
          <tr>
            <th>Waiver Type</th>
            <td colSpan="2">FAB w/ Reverse order of standings tiebreak</td>
          </tr>
          <tr>
            <th>Playoffs</th>
            <td colSpan="2">6 teams - Week 15, 16, 17</td>
          </tr>
          <tr>
            <th>Playoff Tie-Breaker</th>
            <td colSpan="2">Higher seed wins</td>
          </tr>
          <tr>
            <th>Roster Positions</th>
            <td colSpan="2">
              QB, WR, WR, RB, RB, TE, W/R/T, W/R/T, K, BN x7, IR
            </td>
          </tr>
          <tr>
            <th>Fractional Points</th>
            <td colSpan="2">Yes</td>
          </tr>
          <tr>
            <th>Negative Points</th>
            <td colSpan="2">Yes</td>
          </tr>
          <tr>
            <th colSpan="3">Offensive Scoring</th>
          </tr>
          <tr>
            <td colSpan="3">
              <ul>
                <li>Passing Yards: 25 yds/pt; 1 pt @300 yds, 2 @400, 100 @600</li>
                <li>Passing TDs: 6 pts</li>
                <li>Interceptions: -1</li>
                <li>Rushing Yards: 10 yds/pt; 1 pt @100 yds, 2 @200, 100 @300</li>
                <li>Rushing TDs: 6 pts</li>
                <li>Receptions: 1 pt (PPR)</li>
                <li>Receiving Yards: 10 yds/pt; 1 pt @100 yds, 2 @200, 100 @300</li>
                <li>Receiving TDs: 6 pts</li>
                <li>Fumbles Lost: -1</li>
                <li>Offensive Fumble Return TD: 6 pts</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th colSpan="3">Kicking</th>
          </tr>
          <tr>
            <td colSpan="3">
              <ul>
                <li>FG 0-39 Yards: 3 pts</li>
                <li>FG 40-49 Yards: 4 pts</li>
                <li>FG 50+ Yards: 5 pts</li>
                <li>XP Made: 1 pt</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Rules;
