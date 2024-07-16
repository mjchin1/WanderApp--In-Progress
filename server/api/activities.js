const express = require("express");
const router = express.Router();

const {
  getActivityById,
  getAllActivitiesByTripId,
  createActivity,
  deleteActivity,
  updateActivity,
} = require("../db/sqlHelperFunctions/activities");

router.get("/trip/:id", async (req, res, next) => {
  try {
    const activities = await getAllActivitiesByTripId(req.params.id);
    res.send(activities);
  } catch (error) {
    next(error);
  }
});

router.post("/create", async (req, res, next) => {
  try {
    const activity = await createActivity(req.body);
    res.send(activity);
  } catch (error) {
    next(error);
    throw new Error(`${error.message}`);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const activity = await getActivityById(req.params.id);
    res.send(activity);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const activity = await deleteActivity(req.params.id);
    res.send(activity);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const activity = await updateActivity(req.params.id, req.body);
    res.send(activity);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
