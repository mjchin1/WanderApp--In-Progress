import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function ArrivalsPage({ trip, arrivals, setArrivals, setArrival, formatDate, formatTime, timeToDigits }) {

  const navigate = useNavigate();

  function navToTrip() {
    navigate(`/trip/${trip.trip_id}`)
  }

  function navToArrivalForm() {
    navigate("/add-arrival")
  }

  useEffect(() => {
    async function fetchArrivals() {
      try {
        const response = await fetch(`http://localhost:8080/api/arrivals/trip/${trip.trip_id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        setArrivals(result);
        console.log(result);
      } catch (error) {
        throw new Error(`${error.message}`);
      }
    }
    fetchArrivals();
  }, []);


 

  return (
    <>
      <h1>Arrivals</h1>

      { arrivals.length===0 ? <p> No arrivals currently listed for this trip. </p> : null }

      <button onClick={()=>{
        navToArrivalForm()
      }}>Add an Arrival</button> 
      
      <button onClick={()=>{
        navToTrip()
      }}>Back to Trip</button>
      
 
     
<br/> <br/>



      <div className="arrivalsPageContainer">
      {arrivals.map((arrival) => (
          <>
          <div key={arrival.arrival_id} className="arrivalCard" >
            <div className="arrivalDetails">
              <div className="arrivalBanner">
              <p className="arrivalInfo arrivalHeading">{arrival.traveler_name}</p>
              </div>
              <p className="arrivalInfo arrivalHeading">{arrival.travel_origin} to {arrival.travel_destination} </p>
              <p className="arrivalInfo">Leaving {arrival.travel_origin} on {formatDate(arrival.travel_date)}  at {formatTime(timeToDigits(arrival.departure_time))}</p>
              <p className="arrivalInfo"> Arriving in {arrival.travel_destination} on {formatDate(arrival.arrival_date)} at {formatTime(timeToDigits(arrival.arrival_time))} </p>
              <button className="arrivalsButton" onClick={()=> {
            setArrival(arrival)
            navigate(`/arrivals/${arrival.arrival_id}`)
          }}> More Info </button>
            </div>
          </div>
          </>
      ))}
      </div> <br/> <br/>
    
    </> )
}

export default ArrivalsPage
