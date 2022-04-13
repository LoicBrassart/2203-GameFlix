const AbstractManager = require("./AbstractManager");

class MiscManager extends AbstractManager {
  constructor(connection, table) {
    super(connection, table);
    delete this.find;
    delete this.findAll;
    delete this.delete;
  }

  search(needle) {
    return this.connection.query(
      `select * from searchable where haystack like ?`,
      [`%${needle}%`]
    );
  }
}

module.exports = MiscManager;
