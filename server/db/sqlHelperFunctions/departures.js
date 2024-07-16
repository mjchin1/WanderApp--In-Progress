const client = require("../client");

async function getAllDeparturesByTripId(tripId) {
  try {
    const { rows } = await client.query(
      `
          SELECT * FROM departures
          WHERE departures.trip_id = $1;
      `,
      [tripId]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getAllDepartures() {
  try {
    const { rows } = await client.query(
      `
          SELECT * FROM departures
      `
    );
    return rows;
  } catch (error) {
    throw error;
  }
}


async function getDepartureById(id) {
  try {
    const {
      rows: [departure],
    } = await client.query(
      `
          SELECT * FROM departures
          WHERE departures.departure_id = $1;
      `,
      [id]
    );
    return departure;
  } catch (error) {
    throw error;
  }
}

async function createDeparture(body) {
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
      rows: [departure],
    } = await client.query(
      `
          INSERT INTO departures(trip_id, traveler_name, travel_date, trip_number, travel_origin, departure_time, travel_destination, arrival_time)
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
    return departure;
  } catch (error) {
    throw error;
  }
}

async function deleteDeparture(id) {
  try {
    const {
      rows: [departure],
    } = await client.query(
      `
        DELETE FROM departures
        WHERE departure_id = $1
        RETURNING *;
      `,
      [id]
    );
    return departure;
  } catch (error) {
    throw error;
  }
}

async function updateDeparture(id, body = {}) {
  const setString = Object.keys(body)
    .map((key, index) => `"${key}"=$${index + 1}`)
    .join(", ");
  if (setString.length === 0) {
    return;
  }
  try {
    const {
      rows: [departures],
    } = await client.query(
      `
      UPDATE departures
      SET ${setString}
      WHERE departure_id=${id}
      RETURNING *;
      `,
      Object.values(body)
    );
    return departures;
  } catch (error) {
    throw new Error(`Website update failed: ${error.message}`);
  }
}

module.exports = {
  getDepartureById,
  getAllDepartures,
  getAllDeparturesByTripId,
  createDeparture,
  deleteDeparture,
  updateDeparture,
};
