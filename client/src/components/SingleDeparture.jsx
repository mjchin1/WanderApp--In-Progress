import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import RemoveDepartureButton from './RemoveDepartureButton'

function SingleDeparture({ departure, departures, setDepartures, formatDate, formatTime, timeToDigits}) {

  const navigate  = useNavigate();

  function navToDepartures(){
    navigate("/departures")
  }

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
              <p className="departureInfo departureHeading">{departure.traveler_name}</p>
              <p className="departureInfo">Flight/Travel Number: {departure.trip_number}</p>
              <p className="departureInfo">Departure City: {departure.travel_origin}</p>
              <p className="departureInfo">Departure Date/Time: {formatDate(departure.travel_date)} at {formatTime(timeToDigits(departure.departure_time))}</p>
              <p className="departureInfo">Destination City: {departure.travel_destination}</p>
              <p className="departureInfo">Arrival Date/Time: {formatDate(departure.arrival_date)} at {formatTime(timeToDigits(departure.arrival_time))}</p>
            </div>
          </div>
      </div> <br/>
      <div className="arrivalDepartureButtons">
      <button onClick={()=>{
        navToDepartures()}}>Back to All Departures</button>
      <RemoveDepartureButton departure={departure} departures={departures} setDepartures={setDepartures}/>
      </div>
    </> )
}

export default SingleDeparture
