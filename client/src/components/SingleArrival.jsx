import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RemoveArrivalButton from './RemoveArrivalButton'

function SingleArrival({ arrivals, setArrivals, arrival, setArrival, formatDate, formatTime, timeToDigits}) {

  const navigate  = useNavigate();

  function navToArrivals(){
    navigate("/arrivals")
  }

  useEffect(() => {
    async function fetchArrival() {
      try {
        const response = await fetch(`http://localhost:8080/api/arrivals/${arrival_arrival_id}`, {
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
    fetchArrival();
  }, []);


 

  return (
    <>
      <h1>{arrival.traveler_name}'s Arrival Information</h1>


      <div className="arrivalContainer">
          <div key={arrival.arrival_id} className="arrivalCard">
            <div className="arrivalDetails">
            <p className="arrivalInfo arrivalHeading">{arrival.traveler_name}</p>
              <p className="arrivalInfo">Flight/Travel Number: {arrival.trip_number}</p>
              <p className="arrivalInfo">Departure City: {arrival.travel_origin}</p>
              <p className="arrivalInfo">Arrival Date/Time: {formatDate(arrival.travel_date)} at {formatTime(timeToDigits(arrival.arrival_time))}</p>
              <p className="arrivalInfo">Destination City: {arrival.travel_destination}</p>
              <p className="arrivalInfo">Arrival Date/Time: {formatDate(arrival.arrival_date)} at {formatTime(timeToDigits(arrival.arrival_time))}</p>
            </div>
          </div>
      </div> <br/>
      <div className="arrivalDepartureButtons">
      <button onClick={()=>{
        navToArrivals()
      }}>Back to All Arrivals</button>
      <RemoveArrivalButton arrival={arrival} arrivals={arrivals} setArrivals={setArrivals}/> 
      </div>

    </> )
}

export default SingleArrival
