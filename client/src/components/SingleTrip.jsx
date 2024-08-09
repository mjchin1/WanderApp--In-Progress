import { useState, useEffect } from 'react'

function SingleTrip({ trip }) {

  const [trips, setTrips] = useState([])

  useEffect(() => {
    async function fetchTrips() {
      try {
        const response = await fetch(`http://localhost:8080/api/trips/${trip.trip_id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        setTrips(result);
        console.log(result);
      } catch (error) {
        throw new Error(`${error.message}`);
      }
    }
    fetchTrips();
  }, []);


 

  return (
    <>
       <h1>{trip.destination}</h1>

          <button key={trip.trip_id} className="tripCard">
            <div className="tripDetails">
              <p className="tripHeading">{trip.destination}</p>
              <p className="tripDates">{trip.start_date} to {trip.end_date}</p>
              <img className="tripPhoto"src={trip.trip_photo}></img>
            </div>
          </button>

    </> )
}

export default SingleTrip
