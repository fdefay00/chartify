import React, { useState } from 'react';

export default ({ search, toggleSideBar }) => {
  const [topArtists, setTopArtists] = useState([
    'Justin Beiber',
    'The Weekend',
    'Dua Lipa',
    'Ariana Grande',
    'Olivia Rodrigo',
    'Ed Sheeran',
    'J Balvin',
    'Dojo Cat',
    'DaBaby',
    'David Guetta',
    'Cardi B',
    'Nicki Minnaj',
    'Megan Thee Stalion',
    // 'Bruno Mars',
    // 'Maroon 5',
    'Drake',
    // 'Maneskin',
    'Bad Bunny',
    // 'Billie Eilish',
    // 'Post Malone',
    // 'Lil Nas X',
    // 'Khalid',
    // 'Rihanna',
  ]);

  const handleClick = (artist) => {
    search(artist, 'US');
    toggleSideBar();
  };
  return (
    <div>
      <h1>Top Monthly</h1>
      {topArtists.map((artist, i) => (
        <h2 key={i} onClick={() => handleClick(artist)}>
          {++i}. {artist}
        </h2>
      ))}
    </div>
  );
};
