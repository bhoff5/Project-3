const router = require("express").Router();
const tenantController = require("../../controllers/tenantController");

router.route("/")
  .get(tenantController.findAll)
  .post(tenantController.create);

router
  .route("/:id")
  .get(tenantController.findById)
  .put(tenantController.update)
  .delete(tenantController.remove);

module.exports = router;