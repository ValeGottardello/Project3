const db = require('../db')

class Station {
  static findAll() {
    return db.query('select * from stations order by id asc;').then((res) => {
      return res.rows.slice(0, 400)
    })
  }
}

module.exports = Station
