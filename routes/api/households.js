const router = require("express").Router();
const householdController = require("../../controllers/householdController");

router.route("/")
  .get(householdController.findAll)
  .post(householdController.create);

router
  .route("/:id")
  .get(householdController.findById)
  .put(householdController.update)
  .delete(householdController.remove);

module.exports = router;