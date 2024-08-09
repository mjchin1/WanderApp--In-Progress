import { useState, useEffect } from 'react'

function SingleDeparture({ departure }) {

  useEffect(() => {
    async function fetchDeparture() {
      try {
        const response = await fetch(`http://localhost:8080/api/departures/${departure.departure_id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
      } catch (error) {
        throw new Error(`${error.message}`);
      }
    }
    fetchDeparture();
  }, []);


 

  return (
    <>
      <h1>{departure.traveler_name}'s Departure Information</h1>

      <div className="departureContainer">
          <div key={departure.departure_id} className="departureCard">
            <div className="departureDetails">
              <p className="departureInfo">{departure.traveler_name}</p>
              <p className="departureInfo">{departure.travel_date}</p>
              <p className="departureInfo">{departure.trip_number}</p>
              <p className="departureInfo">{departure.travel_origin}</p>
              <p className="departureInfo">{departure.departure_time}</p>
              <p className="departureInfo">{departure.travel_destination}</p>
              <p className="departureInfo">{departure.arrival_time}</p>
            </div>
          </div>
      </div>

    </> )
}

export default SingleDeparture
