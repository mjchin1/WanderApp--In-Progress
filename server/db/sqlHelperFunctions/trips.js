const client = require("../client");

//Will eventually need to add a "getTripsByUserId" function

async function getAllTrips() {
  try {
    const { rows } = await client.query(`
          SELECT * FROM trips;
      `);
    return rows;
  } catch (err) {
    throw err;
  }
}

async function getTripById(id) {
  try {
    const {
      rows: [trip],
    } = await client.query(
      `
          SELECT * FROM trips
          WHERE trips.trip_id = $1;
      `,
      [id]
    );
    return trip;
  } catch (error) {
    throw error;
  }
}

async function createTrip(body) {
  const { destination, startDate, tripEndDate, tripPhoto } = body;
  try {
    const {
      rows: [activity],
    } = await client.query(
      `
        INSERT INTO trips(destination, start_date, end_date, trip_photo)
        VALUES($1, $2, $3, $4);
        RETURNING *;
      `,
      [destination, startDate, tripEndDate, tripPhoto]
    );
    return activity;
  } catch (error) {
    throw error;
  }
}

async function deleteTrip(id) {
  try {
    const {
      rows: [trip],
    } = await client.query(
      `
        DELETE FROM trips
        WHERE trip_id = $1
        RETURNING *;
      `,
      [id]
    );
    return trip;
  } catch (error) {
    throw error;
  }
}

async function updateTrip(id, body = {}) {
  const setString = Object.keys(body)
    .map((key, index) => `"${key}"=$${index + 1}`)
    .join(", ");
  if (setString.length === 0) {
    return;
  }
  try {
    const {
      rows: [trip],
    } = await client.query(
      `
      UPDATE trips
      SET ${setString}
      WHERE trip_id = ${id}
      RETURNING *;
      `,
      Object.values(body)
    );
    return trip;
  } catch (error) {
    throw new Error(`Website update failed: ${error.message}`);
  }
}

module.exports = {
  getAllTrips,
  getTripById,
  createTrip,
  deleteTrip,
  updateTrip,
};
