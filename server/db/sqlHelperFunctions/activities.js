const client = require("../client");

async function getActivityById(id) {
  try {
    const {
      rows: [activity],
    } = await client.query(
      `
          SELECT * FROM activities
          WHERE activities.activity_id = $1;
      `,
      [id]
    );
    return activity;
  } catch (error) {
    throw error;
  }
}

async function getAllActivitiesByTripId(tripId) {
  try {
    const { rows } = await client.query(
      `
          SELECT * FROM activities
          WHERE activities.trip_id = $1;
      `,
      [tripId]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

async function createActivity(body) {
  const {
    tripId,
    activityName, 
    activityDescription,
    activityPhoto,
    activityWebsite
  } = body;
  try {
    const {
      rows: [activity],
    } = await client.query(
      `
          INSERT INTO activities(trip_id, activity_name, activity_description, activity_photo, activity_website)
          VALUES($1, $2, $3, $4, $5);
          RETURNING *;
      `,
      [
        tripId,
        activityName, 
        activityDescription,
        activityPhoto,
        activityWebsite
      ]
    );
    return activity;
  } catch (error) {
    throw error;
  }
}

async function deleteActivity(id) {
  try {
    const {
      rows: [activity],
    } = await client.query(
      `
        DELETE FROM activities
        WHERE activity_id = $1
        RETURNING *;
      `,
      [id]
    );
    return activity;
  } catch (error) {
    throw error;
  }
}

async function updateActivity(id, body = {}) {
  const setString = Object.keys(body)
    .map((key, index) => `"${key}"=$${index + 1}`)
    .join(", ");
  if (setString.length === 0) {
    return;
  }
  try {
    const {
      rows: [activities],
    } = await client.query(
      `
      UPDATE activities
      SET ${setString}
      WHERE activity_id=${id}
      RETURNING *;
      `,
      Object.values(body),
    );
    return activities;
  } catch (error) {
    throw new Error(`Website update failed: ${error.message}`);
  }
}

module.exports = {
  getActivityById,
  getAllActivitiesByTripId,
  createActivity,
  deleteActivity,
  updateActivity
};
