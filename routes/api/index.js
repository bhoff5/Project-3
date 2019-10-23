const router = require("express").Router();
const billRoutes = require("./bills");
const taskRoutes = require("./tasks");
const householdRoutes = require("./households");
const userRoutes = require("./users");
const tenantRoutes = require("./tenants");

router.use("/bills", billRoutes);
router.use("/tasks", taskRoutes);
router.use("/households", householdRoutes);
router.use("/users", userRoutes);
router.use("/tenants", tenantRoutes);

module.exports = router;
