const db = require('../config')

class Owners {
  static every() {
    return db
      .query('SELECT DISTINCT owner FROM stations;')
      .then((res) => res.rows)
  }
}

module.exports = Owners
