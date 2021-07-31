import React from 'react';
import Chart2 from './Chart2.jsx';

export default ({ artist, remove }) => {
  return (
    <div className="artist" onClick={() => remove(artist.id)}>
      <div className="image">
        <img src={artist.image} />
      </div>

      <h3>{artist.name}</h3>
    </div>
  );
};
// <Chart followers, popularity, topTrack, />
