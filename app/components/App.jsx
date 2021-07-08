import React, {useState} from 'react'
import Canvas from './Canvas.jsx'
import Artist from './Artist.jsx'
import Header from './Header.jsx'
import Aside from './Aside.jsx'
import SavedArtists from './SavedArtists.jsx'
import PopularArtists from './PopularArtists.jsx'

export default () => {
  const [artists, setArtists] = useState([])

  return(
    <div>
      <Header/>
      <Aside>
        <SavedArtists />
        <PopularArtists />
      </Aside>
      <main>
        {artists.map(artist => <Artist key={artist.key} artist={artist}/>)}
      </main>
      <footer>Footer</footer>
    </div>
  )
}