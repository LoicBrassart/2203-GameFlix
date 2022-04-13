const models = require("../models");

class MiscController {
  static search = (req, res) => {
    const { needle } = req.query;
    models.misc
      .search(needle.toLowerCase())
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = MiscController;
