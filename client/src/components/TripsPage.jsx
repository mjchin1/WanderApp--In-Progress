import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function TripsPage({ trip, setTrip, trips, setTrips }) {
  const navigate = useNavigate()

  function navToTripsPage() {

    navigate("/destinations")
    window.scroll(0,0)

  }

  useEffect(() => {
    async function fetchTrips() {
      try {
        const response = await fetch("http://localhost:8080/api/trips/", {
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
      {trips? <h1>Upcoming Trips</h1> :  <h1> No Upcoming Trips</h1> }

      <button onClick={() => {navToTripsPage()}}> Plan a Trip</button> <br/> <br/>

      <div className="tripsContainer">
      {trips.map((trip) => (
          <>
            <div className="tripCard">
            <div className="tripDetails">
              <p className="tripHeading">{trip.destination}</p>
              <p className="tripDates">{trip.start_date} to {trip.end_date}</p>
              <img className="tripPhoto"src={trip.trip_photo}></img> <br/>
              <button key={trip.trip_id} onClick={()=> {
            setTrip(trip)
            navigate(`/trip/${trip.trip_id}`)
          }}> See Trip </button> <br/> <br/>
            </div>
            </div>
        
          </>
      ))}

      </div>

      <br/> <br/>

      <br/> <br/> <br/>

    </> )
}

export default TripsPage 
