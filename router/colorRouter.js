const router = require("express").Router();
const colorController = require("../controller/colorController");

// Matches with "/api/colors/"
router.get("/", colorController.findAll);
// Matches with "/api/colors/:color"
router.get("/:color", colorController.findByColor);

module.exports = router;
