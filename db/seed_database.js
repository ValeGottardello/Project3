const db = require('../config')
const fs = require('fs')

let stations = fs.readFileSync('./resources/stations.csv', 'utf-8')

stations
  .split('\n')
  .slice(1)
  .map((station) => {
    const values = station.split(',')
    return [
      values[5],
      values[7],
      values[9],
      values[10],
      values[11],
      values[15],
      values[16],
    ]
  })
  .forEach((station) => {
    const sql = `
      INSERT INTO
      stations (name, owner, address, suburb, state, latitude, longitude)
      VALUES ($1, $2, $3, $4, $5, $6, $7);
    `
    db.query(sql, station)
  })
