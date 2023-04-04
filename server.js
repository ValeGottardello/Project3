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

app.get('/api/stats', (req, res, next) => {
  Station.calculateTotalStations()
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
    .then((res) => {
      return res.data
    })
    .then((data) => {
      return res.json(data)
    })
})

app.listen(config.port, () => {
  console.log(`Listening in port ${config.port}`)
})
