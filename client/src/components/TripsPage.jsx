import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function TripsPage({ trip, setTrip, trips, setTrips, formatDate }) {
  const navigate = useNavigate()

  function navToTripsPage() {

    navigate("/destinations")
    window.scroll(0,0)

  }

  function navToSingleTrip() {
    setTrip(trip)
    navigate(`/trip/${trip.trip_id}`)
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
              <button className="imageButton"key={trip.trip_id} onClick={()=> {
                navToSingleTrip()
            }}> <img className="tripPhoto"src={trip.trip_photo}></img> </button> <br/>
              <div className="tripInfo">
              <button className="tripHeading clearButton bold"key={trip.trip_id} onClick={()=> {
                navToSingleTrip()
                }}>{trip.destination}</button> <br/>
              <button className="tripDatesBottom clearButton notBold" key={trip.trip_id} onClick={()=> {
              navToSingleTrip()
              }}>{formatDate(trip.start_date)} to {formatDate(trip.end_date)}</button>
              </div>
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
