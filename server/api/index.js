const express = require("express");
const router = express.Router();

router.use("/activities", require("./activities"));

router.use("/arrivals", require("./arrivals"));

router.use("/calendar", require("./calendar"));

router.use("/departures", require("./departures"));

router.use("/trips", require("./trips"));

router.use("/users", require("./users"));

module.exports = router;
