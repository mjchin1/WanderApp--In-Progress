const express = require("express");
const router = express.Router();

const {
  getDepartureById,
  getAllDepartures,
  getAllDeparturesByTripId,
  createDeparture,
  deleteDeparture,
  updateDeparture,
} = require("../db/sqlHelperFunctions/departures");

router.get("/trip/:id", async (req, res, next) => {
  try {
    const departures = await getAllDeparturesByTripId(req.params.id);
    res.send(departures);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const departures = await getAllDepartures();
    res.send(departures);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const departure = await getDepartureById(req.params.id);
    res.send(departure);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const departure = await createDeparture(req.body);
    res.send(departure);
  } catch (error) {
    next(error);
    throw new Error(`${error.message}`);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const departure = await deleteDeparture(req.params.id);
    res.send(departure);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const departure = await updateDeparture(req.params.id, req.body);
    res.send(departure);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
