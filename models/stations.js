const db = require('../db')

class Station {
  static findAll() {
    return db.query('SELECT * FROM stations ORDER BY id ASC;').then((res) => {
      return res.rows.slice(0, 400)
    })
  }
  // static findNearby() {
  //   return db.query('select * from stations where latitude').then((res) => {
  //     return res.rows.slice(0, 400)
  //     return res.rows
  //   })
  // }
  static findRandomStation() {
    return db
      .query('SELECT * FROM stations ORDER BY RANDOM() LIMIT 1;')
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
}

module.exports = Station
