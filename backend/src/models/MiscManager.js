const AbstractManager = require("./AbstractManager");

class MiscManager extends AbstractManager {
  static table = "misc";

  search(needle) {
    return this.connection.query(
      `select * from searchable where haystack like ?`,
      [`%${needle}%`]
    );
  }

  find(id) {
    return null;
  }

  findAll() {
    return null;
  }

  delete(id) {
    return null;
  }
}

module.exports = MiscManager;
