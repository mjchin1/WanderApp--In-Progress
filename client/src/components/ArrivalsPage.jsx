import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function ArrivalsPage({ trip, arrivals, setArrivals, setArrival }) {

  const navigate = useNavigate();

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


      <div>
      {arrivals.map((arrival) => (
          <>
          <button key={arrival.arrival_id} className="arrivalCard clickDiv" onClick={()=> {
            setArrival(arrival)
            navigate(`/arrivals/${arrival.arrival_id}`)
          }}>
            <div className="arrivalDetails">
              <p className="arrivalInfo">{arrival.traveler_name}</p>
              <p className="arrivalInfo">Flight Number: {arrival.trip_number}</p>
              <p className="arrivalInfo">Leaves {arrival.travel_origin} on {arrival.travel_date} at {arrival.departure_time} </p>
              <p className="arrivalInfo"> Arrives in {arrival.travel_destination} at {arrival.arrival_time} </p>
              <button className="arrivalsButton"> Edit </button>
            </div>
          </button>
    
          </>
      ))}
      </div>

    </> )
}

export default ArrivalsPage
