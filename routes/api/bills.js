const router = require("express").Router();
const billController = require("../../controllers/billController");

router.route("/")
  .get(billController.findAll)
  .post(billController.create);

router
  .route("/:id")
  .get(billController.findByHousehold)
  .put(billController.update)
  .delete(billController.remove);

router
  .route("/byhousehold/:household")
  .get(billController.findByHousehold)
  .put(billController.update)
  .delete(billController.remove);

module.exports = router;
