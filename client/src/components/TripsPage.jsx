import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function TripsPage({setTrip, trips, setTrips, formatDate }) {
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
      <button onClick={() => {navToTripsPage()}}> Plan a Trip</button> <br/> <br/>
      
      {trips? <h1>Upcoming Trips</h1> :  <h1> No Upcoming Trips</h1> }

      <div className="tripsContainer">
      {trips.map((trip) => (
          <>
            <div className="tripCard" key={trip.trip_id}>
            <div className="tripDetails">
              <button className="imageButton" onClick={()=> {
                    setTrip(trip)
                    navigate(`/trip/${trip.trip_id}`)
            }}> <img className="tripPhoto"src={trip.trip_photo}></img> </button> <br/>
              <div className="tripInfo">
              <button className="tripHeading clearButton bold"key={trip.trip_id} onClick={()=> {
                    setTrip(trip)
                    navigate(`/trip/${trip.trip_id}`)
                }}>{trip.destination}</button> <br/>
              <button className="tripDatesBottom clearButton notBold" key={trip.trip_id} onClick={()=> {
                  setTrip(trip)
                  navigate(`/trip/${trip.trip_id}`)
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
