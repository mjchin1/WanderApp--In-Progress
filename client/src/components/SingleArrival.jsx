import { useState, useEffect } from 'react'

function SingleArrival() {

  const [arrival, setArrival] = useState([])

  useEffect(() => {
    async function fetchArrival() {
      try {
        const response = await fetch(`http://localhost:8080/api/arrivals/2`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        setArrival(result);
        console.log(result);
      } catch (error) {
        throw new Error(`${error.message}`);
      }
    }
    fetchArrival();
  }, []);


 

  return (
    <>
      <h1>Arrivals</h1>


      <div className="arrivalContainer">
          <div key={arrival.arrival_id} className="arrivalCard">
            <div className="arrivalDetails">
              <p className="arrivalInfo">{arrival.traveler_name}</p>
              <p className="arrivalInfo">{arrival.travel_date}</p>
              <p className="arrivalInfo">{arrival.trip_number}</p>
              <p className="arrivalInfo">{arrival.travel_origin}</p>
              <p className="arrivalInfo">{arrival.departure_time}</p>
              <p className="arrivalInfo">{arrival.travel_destination}</p>
              <p className="arrivalInfo">{arrival.arrival_time}</p>
            </div>
          </div>
      </div>

    </> )
}

export default SingleArrival
