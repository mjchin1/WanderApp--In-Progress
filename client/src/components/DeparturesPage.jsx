import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function DeparturesPage( {trip, setDeparture, setDepartures, departures, formatDate, formatTime, timeToDigits} ) {

  const navigate = useNavigate()

  function navToTrip() {
    navigate(`/trip/${trip.trip_id}`)
  }

  function navToDepartureForm() {
    navigate("/add-departure")
  }

  useEffect(() => {
    async function fetchDepartures() {
      try {
        const response = await fetch(`http://localhost:8080/api/departures/trip/${trip.trip_id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        setDepartures(result);
        console.log(result);
      } catch (error) {
        throw new Error(`${error.message}`);
      }
    }
    fetchDepartures();
  }, []);


 

  return (
    <>
      <h1>Departures</h1>

      {departures.length===0? <p>No departures currently listed for this trip.</p> : null}

      <button onClick={()=>{
        navToDepartureForm()
      }}>Add a Departure</button> <br/> <br/>
      
       <button onClick={()=>{
        navToTrip()
      }}>Back to Trip</button>
       

      <div className="departuresPageContainer">
      {departures.map((departure) => (
          <>
          <div key={departure.departure_id} className="departureCard clickDiv" >

          <div className="departureDetails">
              <p className="departureInfo departureHeading">{departure.traveler_name}</p>
              <p className="departureInfo departureHeading"> {departure.travel_origin} to {departure.travel_destination} </p> 
              <p className="departureInfo">Leaving {departure.travel_origin} on {formatDate(departure.travel_date)} at {formatTime(timeToDigits(departure.departure_time))} </p>
              <p className="departureInfo"> Arriving in {departure.travel_destination} on {formatDate(departure.arrival_date)} at {formatTime(timeToDigits(departure.arrival_time))} </p>
              <button className="departuresButton" onClick={()=> {
            setDeparture(departure);
            navigate(`/departures/${departure.departure_id}`)
          }}> More Info </button>
            </div>
          </div>
    
          </>
      ))}
      </div> <br/>

    </> )
}

export default DeparturesPage
