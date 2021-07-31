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
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sideBar, setSideBar] = useState(true);

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
    });
  };

  const remove = (id) => {
    const newList = artists.filter((artist) => id !== artist.id);
    setArtists(newList);
  };

  const toggleSideBar = () => setSideBar((prev) => !prev);

  return (
    <div className="content">
      {loading && <Loader />}
      <Header searchArtist={searchArtist} toggleSideBar={toggleSideBar} />
      <div className="container">
        <main>
          <div className="artistData">
            {artists.map((artist) => (
              <Artist key={artist.id} artist={artist} remove={remove} />
            ))}
          </div>
          <div className="chartData">
            <Canvas artists={artists} />
            <Chart2 artists={artists} title="Top Tracks" />
          </div>
        </main>
        <Aside sideBar={sideBar}>
          <PopularArtists search={searchArtist} />
          <SavedArtists />
        </Aside>
      </div>
      <Footer />
    </div>
  );
};
