const axios = require('axios');
const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = require('../config/keys');
const querystring = require('querystring');

exports.searchArtist = async (q, market = 'US') => {
  // console.log(q, market)

  try {
    const token = await axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        Authorization:
          'Basic ' + new Buffer(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64'),
      },
      data: querystring.stringify({ grant_type: 'client_credentials' }),
    });

    let artist = await axios.get(
      'https://api.spotify.com/v1/search?query=' +
        q +
        '&offset=0&limit=1&type=artist&market=' +
        market,
      {
        headers: {
          Authorization: `Bearer ${token.data.access_token}`,
        },
      }
    );

    artist = artist.data.artists.items[0];
    const topTracks = await getArtistTopTracks(artist.id, market);

    const artistData = {
      id: artist.id,
      name: artist.name,
      popularity: artist.popularity,
      followers: artist.followers.total / 1000000,
      image: artist.images[1].url,
      tracks: topTracks.tracks.map((track) => ({ name: track.name, popularity: track.popularity })),
    };
    // console.log(artistData);
    return artistData;
  } catch (err) {
    console.log(err);
  }
};

// exports.getArtist = async (market) => {
//   const info = await getArtistInfo()
//   const topTracks = await getArtistTopTracks(market)
//   // const albums = await getArtistAlbum()
//   const artistData = {
//     id: info.id,
//     name: info.name,
//     popularity: info.popularity,
//     followers: Math.floor(info.followers.total / 1000000),
//     image: info.images[1].url,
//     tracks: topTracks.tracks.map(track => ({name: track.name, popularity: track.popularity}))
//   }
//   return artistData
// }

// const getArtistInfo = async () => {
//     try {
//       const token = await axios({
//         method: 'post',
//         url: 'https://accounts.spotify.com/api/token',
//         headers: {
//           Authorization: 'Basic ' + (new Buffer(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64')),
//         },
//         data: querystring.stringify({grant_type: 'client_credentials'}),
//       })

//       const artist = await axios.get('https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4/', {
//         headers: {
//           Authorization: `Bearer ${token.data.access_token}`
//         }
//       })

//       return artist.data

//   } catch(err) {
//       console.log(err)
//   }
// }

const getArtistTopTracks = async (artistId, market) => {
  try {
    const token = await axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        Authorization:
          'Basic ' + new Buffer(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64'),
      },
      data: querystring.stringify({ grant_type: 'client_credentials' }),
    });

    const topTracks = await axios.get(
      'https://api.spotify.com/v1/artists/' + artistId + '/top-tracks?market=US',
      {
        headers: {
          Authorization: `Bearer ${token.data.access_token}`,
        },
      }
    );
    // console.log(topTracks.data);
    return topTracks.data;
  } catch (err) {
    console.log(err);
  }
};

// const getArtistAlbum = async (albumId) => {
//   try {
//     const token = await axios({
//       method: 'post',
//       url: 'https://accounts.spotify.com/api/token',
//       headers: {
//         Authorization: 'Basic ' + (new Buffer(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64')),
//       },
//       data: querystring.stringify({grant_type: 'client_credentials'}),
//     })

//     const artist = await axios.get('https://api.spotify.com/v1/albums/3TVXtAsR1Inumwj472S9r4', {
//       headers: {
//         Authorization: `Bearer ${token.data.access_token}`
//       }
//     })
//     return artist.data
//   } catch(err) {
//       console.log(err)
//   }
// }

// compare artists [popularity, top track followers, ]
// compare albums
// const searchTrack
// const GetMultipleArtists
