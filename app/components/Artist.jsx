import React from 'react'
import Chart2 from './Chart2.jsx'

export default ({artist, remove}) => {


 return (

   <div className="artist">
    <div className="image"><img src={artist.image}/></div>
    <h6 className="top-right" onClick={()=> remove(artist.id)}>X</h6>
    <h3>{artist.name}</h3>
   </div>
   )
}
    // <Chart followers, popularity, topTrack, />