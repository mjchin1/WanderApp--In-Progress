const client = require("./client");

const {
  trips,
  arrivals,
  departures,
  activities,
  calendar,
  users,
} = require("./seedData");

const dropTables = async () => {
  try {
    console.log("Dropping tables...");
    await client.query(`
      DROP TABLE IF EXISTS trips;
      DROP TABLE IF EXISTS arrivals;
      DROP TABLE IF EXISTS departures;
      DROP TABLE IF EXISTS activities;
      DROP TABLE IF EXISTS calendar;
      DROP TABLE IF EXISTS users;
        

    `);
    console.log("Tables have been dropped.");
  } catch (error) {
    console.log("Error dropping tables: ", error);
  }
};

const createTables = async () => {
  try {
    console.log("Building tables...");
    await client.query(`
        CREATE TABLE trips (
            trip_id SERIAL PRIMARY KEY,
            destination TEXT,
            start_date TEXT,
            end_date TEXT,
            trip_photo TEXT,
        );
       
        CREATE TABLE arrivals (
            arrival_id SERIAL PRIMARY KEY,
            trip_id INTEGER REFERENCES trips(trip_id) ON DELETE CASCADE,
            traveler_name TEXT,
            travel_date TEXT,
            trip_number TEXT, 
            travel_origin TEXT,
            departure_time TEXT,
            travel_destination TEXT,
            arrival_time TEXT,
        );

        CREATE TABLE departures (
          departure_id SERIAL PRIMARY KEY,
          trip_id INTEGER REFERENCES trips(trip_id) ON DELETE CASCADE,
          traveler_name TEXT,
          travel_date TEXT,
          trip_number TEXT, 
          travel_origin TEXT,
          departure_time TEXT,
          travel_destination TEXT,
          arrival_time TEXT,
        );

        CREATE TABLE activities (
          activity_id SERIAL PRIMARY KEY,
          trip_id INTEGER REFERENCES trips(trip_id) ON DELETE CASCADE,
          activity_name TEXT,
          activity_description TEXT,
          activity_photo TEXT, 
          activity_website TEXT,
        );

        CREATE TABLE calendar (
          event_id SERIAL PRIMARY KEY,
          trip_id INTEGER REFERENCES trips(trip_id) ON DELETE CASCADE,
          event_date TEXT,
          event_start TEXT,
          event_name TEXT,
          event_description TEXT,
          event_website TEXT,
        );

        CREATE TABLE users (
          user_id SERIAL PRIMARY KEY,
          name TEXT,
          password TEXT,
        );

    `);
    console.log("tables have been built!");
  } catch (error) {
    console.error(error);
  }
};
