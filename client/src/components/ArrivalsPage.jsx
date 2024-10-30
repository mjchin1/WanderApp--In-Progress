import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function ArrivalsPage({ trip, arrivals, setArrivals, setArrival }) {

  const navigate = useNavigate();

  function navToTrip() {
    navigate(`/trip/${trip.trip_id}`)
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


      <div className="arrivalsPageContainer">
      {arrivals.map((arrival) => (
          <>
          <div key={arrival.arrival_id} className="arrivalCard" >
            <div className="arrivalDetails">
              <p className="arrivalInfo arrivingTravelerName">{arrival.traveler_name}</p>
              <p className="arrivalInfo">Traveling on {arrival.travel_date} </p>
              <p className="arrivalInfo">Leaving {arrival.travel_origin} at {arrival.departure_time}</p>
              <p className="arrivalInfo"> Arriving in {arrival.travel_destination} at {arrival.arrival_time} </p>
              <button className="arrivalsButton" onClick={()=> {
            setArrival(arrival)
            navigate(`/arrivals/${arrival.arrival_id}`)
          }}> More Info </button>
            </div>
          </div>
          </>
      ))}
      </div> <br/> <br/>
      <button onClick={()=>{
        navToTrip()
      }}>Back to Trip</button>

    </> )
}

export default ArrivalsPage
