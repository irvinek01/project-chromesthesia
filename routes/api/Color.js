const router = require("express").Router();
const colorController = require("../../controller/trackController");


router.route("/")
  .get(colorController.findAll)
  .post(colorController.create);


router
  .route("/:id")
  .get(colorController.findById)
  .put(colorController.update)
  .delete(colorController.remove);

module.exports = router;
