const client = require("../client");

async function getCalendarEventById(id) {
  try {
    const {
      rows: [event],
    } = await client.query(
      `
          SELECT * FROM calendar
          WHERE calendar.event_id = $1;
      `,
      [id]
    );
    return event;
  } catch (error) {
    throw error;
  }
}

async function getAllCalendarEventsByTripId(tripId) {
  try {
    const { rows } = await client.query(
      `
          SELECT * FROM calendar
          WHERE calendar.trip_id = $1;
      `,
      [tripId]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

async function createCalendarEvent(body) {
  const {
    tripId,
    eventName,
    eventDate,
    eventTime,
    eventDescription,
    eventWebsite,
  } = body;
  try {
    const {
      rows: [arrival],
    } = await client.query(
      `
          INSERT INTO calendar(trip_id, event_date, event_time, event_name, event_description, event_website)
          VALUES($1, $2, $3, $4, $5, $6);
          RETURNING *;
      `,
      [tripId, eventName, eventDate, eventTime, eventDescription, eventWebsite]
    );
    return arrival;
  } catch (error) {
    throw error;
  }
}

async function deleteCalendarEvent(id) {
  try {
    const {
      rows: [event],
    } = await client.query(
      `
        DELETE FROM calendar
        WHERE event_id = $1
        RETURNING *;
      `,
      [id]
    );
    return event;
  } catch (error) {
    throw error;
  }
}

async function updateCalendarEvent(id, body = {}) {
  const setString = Object.keys(body)
    .map((key, index) => `"${key}"=$${index + 1}`)
    .join(", ");
  if (setString.length === 0) {
    return;
  }
  try {
    const {
      rows: [event],
    } = await client.query(
      `
      UPDATE calendar
      SET ${setString}
      WHERE event_id=${id}
      RETURNING *;
      `,
      Object.values(body)
    );
    return event;
  } catch (error) {
    throw new Error(`Website update failed: ${error.message}`);
  }
}

module.exports = {
  getCalendarEventById,
  getAllCalendarEventsByTripId,
  createCalendarEvent,
  deleteCalendarEvent,
  updateCalendarEvent,
};
