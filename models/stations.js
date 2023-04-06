const db = require('../db')

class Station {
  static findAll() {
    return db.query('SELECT * FROM stations ORDER BY id ASC;').then((res) => {
      return res.rows.slice(0, 400)
    })
  }
  // static findNearby() {
  //   return db.query('select * from stations where latitude').then((res) => {
  //
  //   })
  // }
  static findRandomStation() {
    return db
      .query('SELECT * FROM stations ORDER BY RANDOM() LIMIT 1;')
      .then((res) => res.rows[0])
  }

  static findStationById(id) {
    return db
      .query('SELECT * FROM stations WHERE id = $1', [id])
      .then((res) => res.rows[0])
  }
  static totalStation() {
    return db
      .query('SELECT COUNT(*) FROM stations;')
      .then((res) => res.rows[0].count)
  }
  static findNearest(lat, lng) {
    const sql = `
      SELECT *, calculate_distance($1, $2, latitude, longitude, 'K') AS distance
      FROM stations
      ORDER BY distance ASC LIMIT 700;
    `
    return db.query(sql, [lat, lng]).then((res) => res.rows)
  }
  static findStatsByBounds(lat1, lat2, long1, long2) {
    const sql = `
      SELECT * FROM stations 
      WHERE latitude BETWEEN $1 AND $2 
      AND longitude BETWEEN $3 AND $4;
    `
    return db.query(sql, [lat1, lat2, long1, long2]).then((res) => res.rows)
  }
}

module.exports = Station

// http://localhost:8080/api/stations/bounds?lat1=-37…&long1=145.1494076571038&long2=145.08486297936943'
// http://localhost:8080/api/stations/bounds?lat1=-37.73425959354424&lat2=-37.94316958721066&long1=145.11781682112797&long2=145.0532721433936
// SELECT * FROM stations WHERE CAST(latitude AS float) BETWEEN -37.73425959354424 AND -37.94316958721066 AND CAST(longitude AS float) BETWEEN 145.11781682112797 AND 145.0532721433936
