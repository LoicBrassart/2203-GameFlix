const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  insert(formData) {
    const { email, password, avatar, pseudo } = formData;
    return this.connection.query(
      `insert into ${this.table} (email, password, avatar, pseudo) values (?,?,?,?)`,
      [email, password, avatar, pseudo]
    );
  }

  find(email) {
    return this.connection.query(
      `select id, email, pseudo, password from  ${this.table} where email = ?`,
      [email]
    );
  }
}

module.exports = UserManager;
