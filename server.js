const express = require('express')

const {getArtist}  = require('./Controllers/artist.js')

const app = express()


app.use(express.static('./dist'))



app.get('/artist', (req, res) => {
  getArtist()
    .then(data => res.send(data))
    .catch(err => console.log(err))

})

app.get('/artist/saved')


app.listen(3000, () => {
  console.log('app listening on port 3000')
})