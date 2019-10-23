const router = require("express").Router();
const billController = require("../../controllers/billController");

router.route("/")
  .get(billController.findAll)
  .post(billController.create);

router
  .route("/:id")
  .get(billController.findById)
  .put(billController.update)
  .delete(billController.remove);

module.exports = router;
