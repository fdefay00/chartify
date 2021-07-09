import React, {useState} from 'react'
import axios from 'axios'
import Canvas from './Canvas.jsx'
import Artist from './Artist.jsx'
import Header from './Header.jsx'
import Aside from './Aside.jsx'
import SavedArtists from './SavedArtists.jsx'
import PopularArtists from './PopularArtists.jsx'
import Footer from './Footer.jsx'

export default () => {
  const colors = ['#D1E2C4', '#EBEBE8', '#778A35']
  const [artists, setArtists] = useState([])


  const searchArtist = (q, market) => {
    axios.get(`http://localhost:3000/artist?q=${q}&market=${market}`)
    .then(res => {
      if(artists.length > 2) {
        const newList = [artists[1], artists[2]]
        setArtists([...newList, res.data])
      }
      else{

        setArtists([...artists, res.data])
      }
    console.log(artists)

    })
  }

  const remove = (id) => {
    const newList = artists.filter(artist => id !== artist.id)
    setArtists(newList)
  }

  const data = {
    labels: ['Popularity', 'Followers (M)', 'Top Track'],
    datasets: artists.map((artist, i) => (
      {
        label: artist.name,
        data: [artist.popularity, artist.followers, artist.tracks[0].popularity],
        backgroundColor: colors[i],
      }
    ))
  };
  const tracks = artists.length === 0 ? {} : {
    labels: artists[0].tracks.map(track => track.name),
    datasets: artists.map((artist, i) => ({
      label: artist.name,
      data: artist.tracks.map(track => track.popularity),
      backgroundColor: colors[i],
    }))
  }

  return (
    <div>
      <Header searchArtist={searchArtist}/>
      <div id='container'>
        <Aside className='sidenav'>
          <PopularArtists search={searchArtist}/>
          <SavedArtists />
        </Aside>
        <main>
          <div className='artistSection'>
            {artists.map(artist => <Artist key={artist.id} artist={artist} remove={remove}/>)}
          </div>
          <div>
            <Canvas artists={artists} data={data}/>
            {//<Canvas artists={artists} data={tracks} title='Top Tracks'/>
            }
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}