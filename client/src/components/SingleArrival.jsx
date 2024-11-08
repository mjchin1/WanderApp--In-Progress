import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SingleArrival({ arrivals, setArrivals, arrival, setArrival }) {

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
              {/* <p className="arrivalInfo">{arrival.traveler_name}</p> */}
              <p className="arrivalInfo">Flight Number: {arrival.trip_number}</p>
              <p className="arrivalInfo">Leaves {arrival.travel_origin} on {arrival.travel_date} at {arrival.departure_time} </p>
              <p className="arrivalInfo"> Arrives in {arrival.travel_destination} on {arrival.arrival_date} at {arrival.arrival_time} </p>
            </div>
          </div>
      </div> <br/>
      <button onClick={()=>{
        navToArrivals()
      }}>Back to All Arrivals</button> 

    </> )
}

export default SingleArrival
