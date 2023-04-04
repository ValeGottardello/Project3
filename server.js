const express = require('express')
const app = express()
const config = require('./config')

const Station = require('./models/stations.js')
const Owners = require('./models/owners.js')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { api_key: config.api_key })
})

app.get('/api/stations/all', (req, res, next) => {
  Station.findAll()
    .then((stations) => res.json(stations))
    .catch(next)
})

app.get('/api/stations/random', (req, res, next) => {
  Station.findRandomStation()
    .then((randomStat) => res.json(randomStat))
    .catch(next)
})

app.get('/api/owners', (req, res, next) => {
  Owners.every()
    .then((owners) => res.json(owners))
    .catch(next)
})

app.get('/api/owners/total', (req, res, next) => {
  Owners.calculateTotalStations()
    .then((obj) => res.json(obj))
    .catch(next)
})

app.listen(config.port, () => {
  console.log(`Listening in port ${config.port}`)
})
