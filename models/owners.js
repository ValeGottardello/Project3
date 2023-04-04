const db = require('../db')

class Owners {
  static every() {
    return db
      .query('SELECT DISTINCT owner FROM stations;')
      .then((res) => res.rows)
  }
  static calculateTotalStations() {
    const arrOfOwn = [
      'Caltex',
      'BP',
      'Shell',
      '7-Eleven Pty Ltd',
      'Independent Fuel Supplies',
      'United',
      'Ampol',
    ]

    // arrOfOwn.forEach((owner) => {
    //   const sql = 'SELECT * FROM stations WHERE owner = $1;'
    //   db.query(sql, [owner]).then((owner) => {
    //     owner = owner.rows
    //     owner.reduce((acc, owner.))
    //   })
    // })
  }
}

module.exports = Owners
