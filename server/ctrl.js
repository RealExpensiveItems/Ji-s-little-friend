const db = require("../db");

module.exports = {
  type: (req, res) => {
    db.query(`SELECT * FROM fitable WHERE fitable.typename="${req.params.type}";`,
      (err, result) => {
        if (err) res.status(400).send(err);
        else res.status(200).send(result.length!==0);
      }
    );
  }
};
