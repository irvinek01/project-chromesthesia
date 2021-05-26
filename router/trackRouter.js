const router = require("express").Router();
const trackController = require("../controller/trackController");

// Matches with "/api/tracks/"
router.route("/")
.get(trackController.findAll)
.post(trackController.create);

// Matches with "/api/tracks/:id"
router
.route("/:id")
.delete(trackController.remove);

module.exports = router;
