const db = require('../db')

class Station {
  static totalCount() {
    return db
      .query('SELECT COUNT(*) FROM stations;')
      .then((res) => res.rows[0].count)
  }

  static random() {
    return db
      .query('SELECT * FROM stations ORDER BY RANDOM() LIMIT 1;')
      .then((res) => res.rows[0])
  }

  static findById(id) {
    return db
      .query('SELECT * FROM stations WHERE id = $1', [id])
      .then((res) => res.rows[0])
  }

  static nearest(lat, lng) {
    const sql = `
      SELECT *, calculate_distance($1, $2, latitude, longitude, 'K') AS distance
      FROM stations
      ORDER BY distance ASC LIMIT 700;
    `
    return db.query(sql, [lat, lng]).then((res) => res.rows)
  }

  static nearbyWithinBounds(lat1, lat2, long1, long2) {
    const sql = `
      SELECT * FROM stations 
      WHERE latitude BETWEEN $1 AND $2 
      AND longitude BETWEEN $3 AND $4;
    `
    return db.query(sql, [lat1, lat2, long1, long2]).then((res) => res.rows)
  }
}

module.exports = Station
