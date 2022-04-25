const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  insert(formData) {
    const { email, password, avatarUrl, pseudo } = formData;
    return this.connection.query(
      `insert into ${this.table} (email, password, avatarUrl, pseudo) values (?,?,?,?)`,
      [email, password, avatarUrl, pseudo]
    );
  }

  find(email) {
    return this.connection.query(
      `select id, email, pseudo, password,avatarUrl from  ${this.table} where email = ?`,
      [email]
    );
  }
}

module.exports = UserManager;
