import React, { useState } from 'react';
import axios from 'axios';
import Canvas from './Canvas.jsx';
import Chart2 from './Chart2.jsx';
import Artist from './Artist.jsx';
import Header from './Header.jsx';
import Aside from './Aside.jsx';
import SavedArtists from './SavedArtists.jsx';
import PopularArtists from './PopularArtists.jsx';
import Footer from './Footer.jsx';
import Loader from './Loader.jsx';

export default () => {
  const colors = ['#D1E2C4', '#EBEBE8', '#778A35'];
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);

  const artistInList = (newArtist) => {
    const exist = artists.filter((artist) => artist.id === newArtist.id);
    return exist.length > 0 ? true : false;
  };

  const searchArtist = (q, market) => {
    setLoading(true);
    axios.get(`/artist?q=${q}&market=${market}`).then((res) => {
      if (artistInList(res.data)) {
        setLoading(false);
        return;
      }
      if (artists.length > 2) {
        const newList = [artists[1], artists[2]];
        setArtists((prevList) => [prevList[1], prevList[2], res.data]);
      } else {
        setArtists([...artists, res.data]);
      }
      setLoading(false);
      // console.log([...artists, res.data]);
    });
  };

  const remove = (id) => {
    const newList = artists.filter((artist) => id !== artist.id);
    setArtists(newList);
  };

  const data = {
    labels: ['Popularity', 'Followers (M)', 'Top Track'],
    datasets: artists.map((artist, i) => ({
      label: artist.name,
      data: [artist.popularity, artist.followers, artist.tracks[0].popularity],
      backgroundColor: colors[i],
    })),
  };
  const tracks =
    artists.length === 0
      ? {}
      : {
          labels: artists[0].tracks.map((track, i) => `Track ${++i}`),
          datasets: artists.map((artist, i) => ({
            label: artist.name,
            data: artist.tracks.map((track) => track.popularity),
            backgroundColor: colors[i],
          })),
        };

  return (
    <div className="content">
      {loading && <Loader />}
      <Header searchArtist={searchArtist} />
      <div className="container">
        <Aside>
          <PopularArtists search={searchArtist} />
          <SavedArtists />
        </Aside>
        <main>
          <div className="artistData">
            {artists.map((artist) => (
              <Artist key={artist.id} artist={artist} remove={remove} />
            ))}
          </div>
          <div className="chartData">
            {
              <Canvas artists={artists} data={data} />
              //<Chart2 artists={artists} data={tracks} title='Top Tracks'/>
            }
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};
