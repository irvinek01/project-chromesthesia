const router = require("express").Router();
const colorController = require("../controller/colorController");

// Matches with "/api/colors/"
router.get("/", colorController.findAll);
router.get("/:color", colorController.findByColor);

module.exports = router;
