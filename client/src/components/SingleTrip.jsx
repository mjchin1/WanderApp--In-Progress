import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function SingleTrip({ trip, arrival, departure }) {
  const navigate = useNavigate()

  const [trips, setTrips] = useState([])

  useEffect(() => {
    async function fetchTrips() {
      try {
        const response = await fetch(`http://localhost:8080/api/trips/${trip.trip_id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        setTrips(result);
        console.log(result);
      } catch (error) {
        throw new Error(`${error.message}`);
      }
    }
    fetchTrips();
  }, []);

  function navToArrivals() {
    navigate("/arrivals")
  }
  function navToDepartures() {
    navigate("/departures")
  }

  function navToActivities() {
    navigate("/activities")
  }


 

  return (
    <>
      <div className="tripCard">
        <h1>Your Trip to {trip.destination}</h1>
        <h1 className="tripDates">{trip.start_date} to {trip.end_date}</h1>
        <br/> <img className="tripPhoto"src={trip.trip_photo}></img> <br/> <br/>

        <button onClick={()=>{navToArrivals()}}>Arrivals</button> 
        <button onClick={()=>{navToDepartures()}}>Departures</button> 
        <button onClick={()=>{navToActivities()}}>Activities</button>
        <button>Travel Buddies</button>
        
      </div>
       

    </> )
}

export default SingleTrip
