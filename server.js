const express = require('express');

const { getArtist, searchArtist } = require('./Controllers/artist.js');

const app = express();

// app.use(express.static('./dist'));

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/artist', (req, res) => {
  const { q, market } = req.query;
  searchArtist(q, market)
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

app.get('/artist/saved');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('app listening on port 3000');
});
