import { useState, useEffect } from 'react'

function DeparturesPage() {

  const [departures, setDepartures] = useState([])

  useEffect(() => {
    async function fetchDepartures() {
      try {
        const response = await fetch("http://localhost:8080/api/departures/1", {
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
      <h1>departures</h1>


      <div className="departureContainer">
      {departures.map((departure) => (
          <>
          <div key={departure.departure_id} className="departureCard">
            <div className="departureDetails">
              <p className="departureInfo">{departure.traveler_name}</p>
              <p className="departureInfo">{departure.travel_date}</p>
              <p className="departureInfo">{departure.trip_number}</p>
              <p className="departureInfo">{departure.travel_origin}</p>
              <p className="departureInfo">{departure.departure_time}</p>
              <p className="departureInfo">{departure.travel_destination}</p>
              <p className="departureInfo">{departure.departure_time}</p>
            </div>
          </div>
    
          </>
      ))}
      </div>

    </> )
}

export default DeparturesPage
