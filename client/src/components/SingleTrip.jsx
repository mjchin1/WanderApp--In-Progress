import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import RemoveTripButton from './RemoveTripButton'

function SingleTrip({ trips, setTrips, trip, setTrip, arrival, departure }) {
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchTrip() {
      try {
        const response = await fetch(`http://localhost:8080/api/trips/${trip.trip_id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        console.log(result);
      } catch (error) {
        throw new Error(`${error.message}`);
      }
    }
    fetchTrip();
  }, []);

  function navToArrivals() {
    navigate("/arrivals")
  }
  function navToDepartures() {
    navigate("/departures")
  }

  function navToActivities() {
    navigate("/activities")
  }

  function navToHome() {
    navigate("/")
  }


 

  return (
    <>

      <h1>Your Trip to {trip.destination}</h1>
      <h1 className="tripDates">{trip.start_date} to {trip.end_date}</h1>
      <div className="singleTripCard">
        
        <div className="tripButtonDiv">
        <button className="tripButton" onClick={()=>{navToArrivals()}}>Arrivals</button> 
        <button className="tripButton" onClick={()=>{navToDepartures()}}>Departures</button> 
        <button className="tripButton" onClick={()=>{navToActivities()}}>Activities</button>
        <button className="tripButton">Travel Buddies</button>
        </div>
        
        <div className="tripPhotoDiv">
        <br/> <img className="tripPhoto"src={trip.trip_photo}></img> <br/> <br/>
        </div>
     
      </div>
      <br/> <br/>

    <div className="tripActionButtons">
      <RemoveTripButton trip={trip} trips={trips} setTrips={setTrips}/>
      <button onClick={()=> {
        navToHome()
      }}>Back to All Trips</button>

    </div>
       

    </> )
}

export default SingleTrip
