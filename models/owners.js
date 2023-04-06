const db = require('../db')

class Owners {
  static every() {
    return db
      .query('SELECT DISTINCT owner FROM stations;')
      .then((res) => res.rows)
  }
  static calculateOwnStat() {
    const sql =
      'SELECT owner, COUNT(*) AS count FROM stations GROUP BY owner ORDER BY count DESC;'

    return db.query(sql).then((res) => {
      return { owners: res.rows }
    })
  }
}

module.exports = Owners
