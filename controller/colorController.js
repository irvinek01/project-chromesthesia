const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Color.find({}, "color keyNote hexaDecValue")
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByColor: function (req, res) {
    db.Color.find({ color: req.params.color })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
