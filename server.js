require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const Station = require('./models/stations.js')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { API_KEY: process.env.API_KEY })
})

app.get('/api/stations/all', (req, res, next) => {
  Station.findAll()
    .then((stations) => res.json(stations))
    .catch(next)
})

app.listen(port, () => {
  console.log(`Listening in port ${port}`)
})
