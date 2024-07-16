const express = require("express");
const router = express.Router();

const {
  getTripById,
  getAllTrips,
  createTrip,
  deleteTrip,
  updateTrip,
} = require("../db/sqlHelperFunctions/trips");

router.get("/", async (req, res, next) => {
  try {
    const trips = await getAllTrips(req.params.id);
    res.send(trips);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const trip = await getTripById(req.params.id);
    res.send(trip);
  } catch (error) {
    next(error);
  }
});

router.post("/:id", async (req, res, next) => {
  try {
    const trip = await createTrip(req.body);
    res.send(trip);
  } catch (error) {
    next(error);
    throw new Error(`${error.message}`);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const trip = await deleteTrip(req.params.id);
    res.send(trip);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const trip = await updateTrip(req.params.id, req.body);
    res.send(trip);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
