const router = require("express").Router();
const householdController = require("../../controllers/householdController");

router
  .route("/")
  .get(householdController.findAll)
  .post(householdController.createNewHousehold);

router
  .route("/:id")
  .get(householdController.findByName)
  .put(householdController.update)
  .delete(householdController.remove);

router.route("/addUser/:household").put(householdController.addUserToHousehold);

module.exports = router;
