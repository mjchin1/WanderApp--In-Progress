const client = require("../client");

async function getArrivalById(id) {
  try {
    const { rows } = await client.query(
      `
          SELECT * FROM arrivals
          WHERE arrivals.arrival_id = $1;
      `,
      [id]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getAllArrivalsByTripId(tripId) {
  try {
    const { rows } = await client.query(
      `
          SELECT * FROM arrivals
          WHERE arrivals.trip_id = $1;
      `,
      [tripId]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

async function createArrival(body) {
  const {
    tripId,
    travelerName,
    travelDate,
    tripNumber,
    travelOrigin,
    departureTime,
    travelDestination,
    arrivalTime,
  } = body;
  try {
    const {
      rows: [arrival],
    } = await client.query(
      `
          INSERT INTO arrivals(trip_id, traveler_name, travel_date, trip_number, travel_origin, departure_time, travel_destination, arrival_time)
          VALUES($1, $2, $3, $4, $5, $6, $7, $8);
          RETURNING *;
      `,
      [
        tripId,
        travelerName,
        travelDate,
        tripNumber,
        travelOrigin,
        departureTime,
        travelDestination,
        arrivalTime,
      ]
    );
    return arrival;
  } catch (error) {
    throw error;
  }
}

async function deleteArrival(id) {
  try {
    const {
      rows: [arrival],
    } = await client.query(
      `
        DELETE FROM arrivals
        WHERE arrival_id = $1
        RETURNING *;
      `,
      [id]
    );
    return arrival;
  } catch (error) {
    throw error;
  }
}

async function updateArrival(id, body = {}) {
  const setString = Object.keys(body)
    .map((key, index) => `"${key}"=$${index + 1}`)
    .join(", ");
  if (setString.length === 0) {
    return;
  }
  try {
    const {
      rows: [arrivals],
    } = await client.query(
      `
      UPDATE arrivals
      SET ${setString}
      WHERE arrival_id=${id}
      RETURNING *;
      `,
      Object.values(body)
    );
    return arrivals;
  } catch (error) {
    throw new Error(`Website update failed: ${error.message}`);
  }
}

module.exports = {
  getArrivalById,
  getAllArrivalsByTripId,
  createArrival,
  deleteArrival,
  updateArrival,
};
