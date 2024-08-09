import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function ArrivalsPage({ arrivals, setArrivals, arrival, setArrival }) {

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchArrivals() {
      try {
        const response = await fetch("http://localhost:8080/api/arrivals/trip/1", {
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


      <div className="arrivalContainer">
      {arrivals.map((arrival) => (
          <>
          <button key={arrival.arrival_id} className="arrivalCard" onClick={()=> {
            setArrival(arrival)
            navigate(`/arrivals/${arrival.arrival_id}`)
          }}>
            <div className="arrivalDetails">
              <p className="arrivalInfo">{arrival.traveler_name}</p>
              <p className="arrivalInfo">{arrival.travel_date}</p>
              <p className="arrivalInfo">{arrival.trip_number}</p>
              <p className="arrivalInfo">{arrival.travel_origin}</p>
              <p className="arrivalInfo">{arrival.departure_time}</p>
              <p className="arrivalInfo">{arrival.travel_destination}</p>
              <p className="arrivalInfo">{arrival.arrival_time}</p>
            </div>
          </button>
    
          </>
      ))}
      </div>

    </> )
}

export default ArrivalsPage
