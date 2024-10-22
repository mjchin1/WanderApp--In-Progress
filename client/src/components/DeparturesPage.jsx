import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function DeparturesPage( {trip, setDeparture} ) {

  const [departures, setDepartures] = useState([])
  const navigate = useNavigate()

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

      <div className="departureContainer">
      {departures.map((departure) => (
          <>
          <button key={departure.departure_id} className="departureCard clickDiv" onClick={()=> {
            setDeparture(departure);
            navigate(`/departures/${departure.departure_id}`)
          }}>

          <div className="departureDetails">
              <p className="departureInfo departingTravelerName">{departure.traveler_name}</p>
              <p className="departureInfo">Traveling on {departure.travel_date} </p>
              <p className="departureInfo">Leaving {departure.travel_origin} at {departure.departure_time}</p>
              <p className="departureInfo"> Arriving in {departure.travel_destination} at {departure.departure_time} </p>
              <button className="departuresButton"> Edit </button>
            </div>
          </button>
    
          </>
      ))}
      </div>

    </> )
}

export default DeparturesPage
