const express = require("express");
const router = express.Router();

const {
  getCalendarEventById,
  getAllCalendarEventsByTripId,
  createCalendarEvent,
  deleteCalendarEvent,
  updateCalendarEvent,
} = require("../db/sqlHelperFunctions/calendar");

router.get("/trip/:id", async (req, res, next) => {
  try {
    const calendarEvents = await getAllCalendarEventsByTripId(req.params.id);
    res.send(calendarEvents);
  } catch (error) {
    next(error);
  }
});

router.post("/create", async (req, res, next) => {
  try {
    const calendarEvent = await createCalendarEvent(req.body);
    res.send(calendarEvent);
  } catch (error) {
    next(error);
    throw new Error(`${error.message}`);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const calendarEvent = await getCalendarEventById(req.params.id);
    res.send(calendarEvent);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const calendarEvent = await deleteCalendarEvent(req.params.id);
    res.send(calendarEvent);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const calendarEvent = await updateCalendarEvent(req.params.id, req.body);
    res.send(calendarEvent);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
