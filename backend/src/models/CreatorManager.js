const AbstractManager = require("./AbstractManager");

class CreatorManager extends AbstractManager {
  static table = "creator";

  insert(item) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = CreatorManager;
