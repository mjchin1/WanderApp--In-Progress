const express = require("express");
const router = express.Router();

const {
  getArrivalById,
  getAllArrivalsByTripId,
  createArrival,
  deleteArrival,
  updateArrival,
} = require("../db/sqlHelperFunctions/arrivals");

router.get("/trip/:id", async (req, res, next) => {
  try {
    const arrivals = await getAllArrivalsByTripId(req.params.id);
    res.send(arrivals);
  } catch (error) {
    next(error);
  }
});

router.post("/:id", async (req, res, next) => {
  try {
    const arrival = await createArrival(req.body);
    res.send(arrival);
  } catch (error) {
    next(error);
    throw new Error(`${error.message}`);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const arrival = await getArrivalById(req.params.id);
    res.send(arrival);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const arrival = await deleteArrival(req.params.id);
    res.send(arrival);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const arrival = await updateArrival(req.params.id, req.body);
    res.send(arrival);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
