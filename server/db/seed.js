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
          event_time TEXT,
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

const createInitialTrips = async () => {
  try {
    for (const trip of trips) {
      await client.query(
        `
                INSERT INTO trips(destination, start_date, end_date, trip_photo)
                VALUES($1, $2, $3, $4);
            `,
        [trip.destination, trip.startDate, trip.endDate, trip.tripPhoto]
      );
    }
    console.log("created trips!");
  } catch (error) {
    throw error;
  }
};

const createInitialArrivals = async () => {
  try {
    for (const arrival of arrivals) {
      await client.query(
        `
                INSERT INTO arrivals(trip_id, traveler_name, travel_date, trip_number, travel_origin, departure_time, travel_destination, arrival_time)
                VALUES($1, $2, $3, $4, $5, $6, $7, $8);
            `,
        [
          arrival.tripId,
          arrival.travelerName,
          arrival.travelDate,
          arrival.tripNumber,
          arrival.travelOrigin,
          arrival.departureTime,
          arrival.travelDestination,
          arrival.arrivalTime,
        ]
      );
    }
    console.log("created arrivals!");
  } catch (error) {
    throw error;
  }
};

const createInitialDepartures = async () => {
  try {
    for (const departure of departures) {
      await client.query(
        `
                INSERT INTO departures(trip_id, traveler_name, travel_date, trip_number, travel_origin, departure_time, travel_destination, arrival_time)
                VALUES($1, $2, $3, $4, $5, $6, $7, $8);
            `,
        [
          departure.tripId,
          departure.travelerName,
          departure.travelDate,
          departure.tripNumber,
          departure.travelOrigin,
          departure.departureTime,
          departure.travelDestination,
          departure.arrivalTime,
        ]
      );
    }
    console.log("created departures!");
  } catch (error) {
    throw error;
  }
};

const buildDb = async () => {
  try {
    client.connect();

    await dropTables();
    await createTables();
    await createInitialTrips();
    await createInitialArrivals();
    await createInitialDepartures();
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
};

buildDb();
