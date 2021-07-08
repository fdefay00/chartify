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
    followers: info.followers.total,
    images: info.images,
    tracks: topTracks.tracks.map(track => [track.name, track.popularity])
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

      const artist = await axios.get('https://api.spotify.com/v1/artists/181bsRPaVXVlUKXrxwZfHK/', {
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

    const topTracks = await axios.get('https://api.spotify.com/v1/artists/181bsRPaVXVlUKXrxwZfHK/top-tracks?market=US', {
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

    const artist = await axios.get('https://api.spotify.com/v1/albums/6Lo6ylJg4qbFfxicPEOzMI', {
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

