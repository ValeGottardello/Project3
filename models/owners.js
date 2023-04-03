const db = require('../config')

class Owners {
  static every() {
    return db
      .query('SELECT DISTINCT name FROM stations;')
      .then((res) => res.rows)
  }
}

module.exports = Owners
