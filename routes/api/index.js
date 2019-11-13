const router = require("express").Router();
const billRoutes = require("./bills");
const householdRoutes = require("./households");
const userRoutes = require("./users");

router.use("/bills", billRoutes);
router.use("/households", householdRoutes);
router.use("/users", userRoutes);

module.exports = router;
