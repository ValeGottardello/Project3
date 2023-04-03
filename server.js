require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { API_KEY: process.env.API_KEY })
})

app.listen(port, () => {
  console.log(`Listening in port ${port}`)
})
