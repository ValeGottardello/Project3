const db = require('../db')

class Owners {
  static every() {
    return db
      .query('SELECT DISTINCT owner FROM stations;')
      .then((res) => res.rows)
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

    let arrData = []

    arrOfOwn.forEach((owner) => {
      const sql = 'SELECT COUNT owner FROM stations WHERE owner = $1;'
      db.query(sql, [owner]).then((res) => {
        arrData.push({ owner: owner, count: res.rows.count })
      })
    })
    return { owners: arrData }
  }
}

module.exports = Owners
