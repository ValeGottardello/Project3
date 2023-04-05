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

  static async calculateOwnStat() {
    const sql =
      'SELECT owner, COUNT(*) AS count FROM stations GROUP BY owner ORDER BY count DESC;'

    return db.query(sql).then((res) => {
      return { owners: res.rows }
    })
  }
  static totalStation() {
    return db
      .query('SELECT COUNT(*) FROM stations;')
      .then((res) => res.rows[0].count)
  }
  static findNearest(lat, lng) {
    const sql = `
      SELECT *, SQRT( POWER( CAST( latitude AS float ) - ( $1 ), 2 ) + POWER( CAST( longitude AS float ) - ( $2 ), 2 ) ) * 111 AS distance
      FROM stations
      ORDER BY distance ASC LIMIT 700;
    `
    return db.query(sql, [lat, lng]).then((res) => res.rows)
  }
  static findStatsByBounds(lat1, lat2, long1, long2) {
    const sql = `
    SELECT * FROM stations 
    WHERE CAST(latitude AS float) BETWEEN $1 AND $2 
    AND CAST(longitude AS float) BETWEEN $3 AND $4;
    `
    return db.query(sql, [lat1, lat2, long1, long2]).then((res) => res.rows)
  }
}

module.exports = Station
