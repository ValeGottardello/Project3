const db = require('../db')

class Station {
  static findAll() {
    return db.query('SELECT * FROM stations ORDER BY id ASC;').then((res) => {
      return res.rows.slice(0, 400)
    })
  }
  static findRandomStation() {
    return db
      .query('SELECT * FROM stations ORDER BY RANDOM() LIMIT 1;')
      .then((res) => res.rows[0])
  }
  static async calculateTotalStations() {
    const arrOfOwn = [
      'Caltex',
      'BP',
      'Shell',
      '7-Eleven Pty Ltd',
      'Independent Fuel Supplies',
      'United',
      'Ampol',
    ]

    const sql =
      'SELECT owner, COUNT(*) AS count FROM stations GROUP BY owner ORDER BY count DESC;'

    return db.query(sql).then((res) => {
      return { owners: res.rows }
    })
  }
}

module.exports = Station
