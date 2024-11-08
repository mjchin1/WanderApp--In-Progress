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
      DROP TABLE IF EXISTS trips CASCADE;
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
            trip_photo TEXT
        );
       
        CREATE TABLE arrivals (
            arrival_id SERIAL PRIMARY KEY,
            trip_id INTEGER REFERENCES trips(trip_id) ON DELETE CASCADE,
            traveler_name TEXT,
            travel_date TEXT,
            arrival_date TEXT,
            trip_number TEXT, 
            travel_origin TEXT,
            departure_time TEXT,
            travel_destination TEXT,
            arrival_time TEXT
        );

        CREATE TABLE departures (
          departure_id SERIAL PRIMARY KEY,
          trip_id INTEGER REFERENCES trips(trip_id) ON DELETE CASCADE,
          traveler_name TEXT,
          travel_date TEXT,
          arrrival_date TEXT,
          trip_number TEXT, 
          travel_origin TEXT,
          departure_time TEXT,
          travel_destination TEXT,
          arrival_time TEXT
        );

        CREATE TABLE activities (
          activity_id SERIAL PRIMARY KEY,
          trip_id INTEGER REFERENCES trips(trip_id) ON DELETE CASCADE,
          activity_name TEXT,
          activity_description TEXT,
          activity_photo TEXT, 
          activity_website TEXT
        );

        CREATE TABLE calendar (
          event_id SERIAL PRIMARY KEY,
          trip_id INTEGER REFERENCES trips(trip_id) ON DELETE CASCADE,
          event_date TEXT,
          event_time TEXT,
          event_name TEXT,
          event_description TEXT,
          event_website TEXT
        );

        CREATE TABLE users (
          user_id SERIAL PRIMARY KEY,
          name TEXT,
          password TEXT
        );

    `);
    console.log("Tables have been built!");
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
    console.log("Created Trips!");
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
    console.log("Created Arrivals!");
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
    console.log("Created Departures!");
  } catch (error) {
    throw error;
  }
};

const createInitialActivities = async () => {
  try {
    for (const activity of activities) {
      await client.query(
        `
          INSERT INTO activities(trip_id, activity_name, activity_description, activity_photo, activity_website)
          VALUES($1, $2, $3, $4, $5);
        `,
        [
          activity.tripId,
          activity.activityName,
          activity.activityDescription,
          activity.activityPhoto,
          activity.activityWebsite,
        ]
      );
    }
    console.log("Created Activities!");
  } catch (error) {
    throw error;
  }
};

const createInitialCalendar = async () => {
  try {
    for (const event of calendar) {
      await client.query(
        `
          INSERT INTO calendar(trip_id, event_date, event_time, event_name, event_description, event_website)
          VALUES($1, $2, $3, $4, $5, $6);
        `,
        [
          event.tripId,
          event.eventDate,
          event.eventTime,
          event.eventName,
          event.eventDescription,
          event.eventWebsite,
        ]
      );
    }
    console.log("Created Calendar!");
  } catch (error) {
    throw error;
  }
};

const createInitialUsers = async () => {
  try {
    for (const user of users) {
      await client.query(
        `
          INSERT INTO users(name, password)
          VALUES($1, $2);
        `,
        [users.name, users.password]
      );
    }
    console.log("Created Users!");
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
    await createInitialActivities();
    await createInitialCalendar();
    await createInitialUsers();
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
};

buildDb();
