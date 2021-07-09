import React, {useState} from 'react'
import Canvas from './Canvas.jsx'
import Artist from './Artist.jsx'
import Header from './Header.jsx'
import Aside from './Aside.jsx'
import SavedArtists from './SavedArtists.jsx'
import PopularArtists from './PopularArtists.jsx'
import Footer from './Footer.jsx'

export default () => {
  const colors = ['#D1E2C4', '#EBEBE8', '#778A35']
  const [artists, setArtists] = useState([
    {
    "id": "3TVXtAsR1Inumwj472S9r4",
    "name": "Drake",
    "popularity": 98,
    "followers": 25,
    "image": "https://i.scdn.co/image/ab676161000051749d6c72d285ab349ce7a93529",
    "tracks": [
      {
        "name": "Wants and Needs (feat. Lil Baby)",
        "popularity": 29
        },
        {
        "name": "Laugh Now Cry Later (feat. Lil Durk)",
        "popularity": 85
        },
    ]
    },
    {
      "id": "3TVXtAsR1Inumwj472S9r4",
      "name": "Megan",
      "popularity": 98,
      "followers": 65,
      "image": "https://i.scdn.co/image/ab676161000051749d6c72d285ab349ce7a93529",
      "tracks": [
        {
          "name": "Wants and Needs (feat. Lil Baby)",
          "popularity": 39
          },
          {
          "name": "Laugh Now Cry Later (feat. Lil Durk)",
          "popularity": 85
          },
      ]
      },
      {
        "id": "3TVXtAsR1Inumwj472S9r4",
        "name": "Chris",
        "popularity": 68,
        "followers": 10,
        "image": "https://i.scdn.co/image/ab676161000051749d6c72d285ab349ce7a93529",
        "tracks": [
          {
            "name": "Wants and Needs (feat. Lil Baby)",
            "popularity": 80
            },
            {
            "name": "Laugh Now Cry Later (feat. Lil Durk)",
            "popularity": 85
            },
        ]
        }])
    const data = {
      labels: ['Followers (M)', 'Popularity', 'Top Track'],
      datasets: artists.map((artist, i) => (
        {
          label: artist.name,
          data: [artist.popularity, artist.followers, artist.tracks[0].popularity],
          backgroundColor: colors[i],
        }
      ))
    };

  return(
    <div>
      <Header/>
      <div id='container'>
        <Aside className='sidenav'>
          <SavedArtists />
          <PopularArtists />
        </Aside>
        <main>
          <div className='artistSection'>
            {artists.map(artist => <Artist key={artist.key} artist={artist}/>)}
          </div>
          <Canvas artist={artists} data={data}/>
        </main>
      </div>
      <Footer />
    </div>
  )
}