const router = require("express").Router();
const colorController = require("../controller/colorController");

// Matches with "/api/colors/"
router.route("/")
.get(colorController.findAll)
.post(colorController.create);

// Matches with "/api/colors/:id"
router
.route("/:id")
.delete(colorController.remove);

module.exports = router;
