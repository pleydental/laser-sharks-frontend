import React, { useEffect, useState } from 'react';

function LeagueDashboard() {
  const [league, setLeague] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_URL = 'https://laser-sharks-backend.onrender.com/league';

    fetch(API_URL, {
      credentials: 'include',
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch league data');
        return res.json();
      })
      .then((data) => {
        if (data.fantasy_content && data.fantasy_content.league) {
          setLeague(data.fantasy_content.league[0]);
        } else {
          throw new Error('Invalid league response');
        }
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setError('Could not load league info.');
      });
  }, []);

  if (error) {
    return <p style={styles.loading}>❌ {error}</p>;
  }

  if (!league) {
    return <p style={styles.loading}>🦈 Loading league data...</p>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🦈 {league.name}</h1>
      <div style={styles.card}>
        <p><strong>League ID:</strong> {league.league_id}</p>
        <p><strong>Teams:</strong> {league.num_teams}</p>
        <p><strong>Season:</strong> {league.season}</p>
        <p><strong>Week:</strong> {league.current_week}</p>
        <p><strong>Start:</strong> {league.start_date}</p>
        <p><strong>End:</strong> {league.end_date}</p>
        <p><strong>Draft Status:</strong> {league.draft_status}</p>
        <a href={league.url} target="_blank" rel="noreferrer" style={styles.link}>
          View on Yahoo ↗
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'Segoe UI, sans-serif',
    color: '#fff',
    backgroundColor: '#0d1b2a',
    borderRadius: '12px',
    boxShadow: '0 0 30px rgba(0, 255, 255, 0.2)',
  },
  title: {
    textAlign: 'center',
    color: '#00f7ff',
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  card: {
    backgroundColor: '#1b263b',
    padding: '1.5rem',
    borderRadius: '8px',
    lineHeight: '1.6',
  },
  link: {
    display: 'inline-block',
    marginTop: '1rem',
    color: '#00f7ff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  loading: {
    color: '#ccc',
    fontSize: '1.2rem',
    padding: '2rem',
    textAlign: 'center',
  },
};

export default LeagueDashboard;


