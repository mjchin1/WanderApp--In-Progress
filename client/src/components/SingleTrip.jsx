import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import RemoveTripButton from './RemoveTripButton'
import moment from 'moment'

function SingleTrip({ trips, setTrips, trip, setTrip, arrival, departure, formatDate}) {
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
      <div className="singleTripContainer">
      <div className="singleTripBanner">
      <h1 className="singleTripHeading">Your Trip to {trip.destination} | {formatDate(trip.start_date)} - {formatDate(trip.end_date)} </h1>
      {/* <h1 className="tripDates">{formatDate(trip.start_date)} - {formatDate(trip.end_date)}</h1> */}
      </div> <br/>
      <div className="singleTripCard">
        
        <div className="tripButtonDiv">
        <button className="tripButton" onClick={()=>{navToArrivals()}}>Arrivals</button> 
        <button className="tripButton" onClick={()=>{navToDepartures()}}>Departures</button> 
        <button className="tripButton" onClick={()=>{navToActivities()}}>Activities</button>
        <button className="tripButton">Travelers</button>
        </div>
        
        <div className="tripPhotoDiv">
        <br/> <img className="tripPhoto"src={trip.trip_photo}></img> <br/> <br/>
        </div>
     
      </div>
      <br/> <br/>

    <div className="tripActionButtons">
      <button onClick={()=> {
        navToHome()
      }}>Back to All Trips</button>
      <RemoveTripButton trip={trip} trips={trips} setTrips={setTrips}/>
    </div> <br/> <br/>

    </div>
    <br/> <br/> <br/>
       

    </> )
}

export default SingleTrip
