const axios = require('axios')
const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = require('../config.js')
const querystring = require('querystring');

const searchArtist = () => {}

exports.getArtist = async (market) => {
  const info = await getArtistInfo()
  const topTracks = await getArtistTopTracks(market)
  // const albums = await getArtistAlbum()
  const artistData = {
    id: info.id,
    name: info.name,
    popularity: info.popularity,
    followers: Math.floor(info.followers.total / 1000000),
    image: info.images[1].url,
    tracks: topTracks.tracks.map(track => ({name: track.name, popularity: track.popularity}))
  }
  return artistData
}

const getArtistInfo = async () => {
    try {
      const token = await axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        headers: {
          Authorization: 'Basic ' + (new Buffer(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64')),
        },
        data: querystring.stringify({grant_type: 'client_credentials'}),
      })

      const artist = await axios.get('https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4/', {
        headers: {
          Authorization: `Bearer ${token.data.access_token}`
        }
      })

      return artist.data

  } catch(err) {
      console.log(err)
  }
}

const getArtistTopTracks = async (market) => { //(by market)
  try {
    const token = await axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        Authorization: 'Basic ' + (new Buffer(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64')),
      },
      data: querystring.stringify({grant_type: 'client_credentials'}),
    })

    const topTracks = await axios.get('https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4/top-tracks?market=US', {
      headers: {
        Authorization: `Bearer ${token.data.access_token}`
      }
    })
    return topTracks.data
  } catch(err) {
    console.log(err)
  }
}

const getArtistAlbum = async (albumId) => {
  try {
    const token = await axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        Authorization: 'Basic ' + (new Buffer(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64')),
      },
      data: querystring.stringify({grant_type: 'client_credentials'}),
    })

    const artist = await axios.get('https://api.spotify.com/v1/albums/3TVXtAsR1Inumwj472S9r4', {
      headers: {
        Authorization: `Bearer ${token.data.access_token}`
      }
    })
    return artist.data
  } catch(err) {
      console.log(err)
  }
}


// compare artists [popularity, top track followers, ]
// compare albums
// const searchTrack
// const GetMultipleArtists

