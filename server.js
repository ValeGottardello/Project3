const express = require('express')
const app = express()
const config = require('./config')
const axios = require('axios')

const Station = require('./models/stations.js')
const Owners = require('./models/owners.js')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { api_key: config.api_key })
})

app.get('/api/stations/random', (req, res, next) => {
  Station.random()
    .then((randomStat) => res.json(randomStat))
    .catch(next)
})

app.get('/api/stations/nearest', (req, res, next) => {
  const { lat, lng, radius } = req.query
  Station.nearest(lat, lng)
    .then((nearest) => res.json(nearest))
    .catch(next)
})

app.get('/api/stations/bounds', (req, res, next) => {
  let { lat1, lat2, long1, long2 } = req.query
  Station.nearbyWithinBounds(lat1, lat2, long1, long2)
    .then((dbRes) => res.json(dbRes))
    .catch(next)
})

app.get('/api/stations/:id', (req, res, next) => {
  Station.findById(req.params.id)
    .then((stationInfo) => res.json(stationInfo))
    .catch(next)
})

app.get('/api/stats', (req, res, next) => {
  Owners.stats()
    .then((obj) => {
      return Station.totalCount().then((res) => {
        return { ...obj, total_stations: res }
      })
    })
    .then((obj) => res.json(obj))
    .catch(next)
})

app.get('/api/owners', (req, res, next) => {
  Owners.every()
    .then((owners) => res.json(owners))
    .catch(next)
})

app.get('/api/commodities', (req, res, next) => {
  axios
    .get(
      `https://commodities-api.com/api/latest?access_key=${config.commoditiesapi_key}&base=USD&symbols=WTIOIL%2CBRENTOIL%2CNG`,
    )
    .then((res) => res.data)
    .then((data) => res.json(data))
    .catch(next)
})

app.listen(config.port, () => {
  console.log(`Listening in port ${config.port}`)
})
