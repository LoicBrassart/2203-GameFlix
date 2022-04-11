const AbstractManager = require("./AbstractManager");

class GameManager extends AbstractManager {
  static table = "game";

  insert(item) {
    return this.connection.query(
      `insert into ${GameManager.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${GameManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = GameManager;
