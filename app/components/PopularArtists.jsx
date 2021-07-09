import React, { useState} from 'react'

export default ({search}) => {
  const [topArtists, setTopArtists] = useState(['The Weekend', 'Justin beiber', 'Dua Lipa', 'Ariana Grande', 'Olivia Rodrigo', 'Ed Sheeran', 'J Balvin', 'Dojo Cat', 'DaBaby', 'Bruno Mars'])
  return(
    <div>
      <h1>Top Monthly</h1>
      {topArtists.map((artist, i) => <h2 onClick={()=>search(artist, 'US')}>{++i}. {artist}</h2>)}
    </div>

  )
}
