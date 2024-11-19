import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function AddArrivalForm ({trip}) {
  const [travelerName, setTravelerName] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [tripNumber, setTripNumber] = useState("");
  const [travelOrigin, setTravelOrigin] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [travelDestination, setTravelDestination] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [tripId, setTripId] = useState(trip.trip_id);

  const navigate = useNavigate(); 

  function navToArrivals() {
    navigate("/arrivals")
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/arrivals/create', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tripId, 
          travelerName,
          travelDate,
          arrivalDate,
          tripNumber,
          travelOrigin,
          departureTime,
          travelDestination,
          arrivalTime,
        })
      });
      const result = await response.json();
      console.log(result)
      console.log(tripId)
      setTravelerName("");
      setTravelDate("");
      setArrivalDate("");
      setTripNumber("");
      setTravelOrigin("");
      setDepartureTime("");
      setTravelDestination("");
      setArrivalTime("");
      navToArrivals()

    } catch (error) {
    }

  }

  return (
    <>
      <button onClick={()=>{
        navToArrivals();
      }}>Back to Arrivals</button> <br/> <br/>
    
    <div className="arrivalDepartureFormCard">
      
      <div className="arrivalFormBorder">
      <h3> Add an Arrival</h3>

      <form className="arrivalForm" onSubmit={handleSubmit}>
        
        <div className="formFields">
        <label>
        <input placeholder="Traveler Name" value={travelerName} onChange={(event) => setTravelerName(event.target.value)}/> <br/>
        </label> <br/>
        
        <label>
        <input placeholder="Flight/Trip Number (ex. AA 543)" value={tripNumber} onChange={(event) => setTripNumber(event.target.value)}/> <br/>
        </label> <br/> 
        
        <label> 
        <input placeholder="Departure City" value={travelOrigin} onChange={(event) => setTravelOrigin(event.target.value)}/> <br/>
        </label> <br/>

        <label> 
        <input placeholder="Destination City" value={travelDestination} onChange={(event) => setTravelDestination(event.target.value)}/> <br/>
        </label> <br/>
        
        <label className="dateTimeField">
        Departure Date/Time <br/><input className="dateTimeInput" type="date" value={travelDate} onChange={(event) => setTravelDate(event.target.value)}/>
        <input className="dateTimeInput" type="time" value={departureTime} onChange={(event) => setDepartureTime(event.target.value)}/>
        </label> <br/> <br/>

        <label>
        Arrival Date/Time <br/> <input className="dateTimeInput" type="date" value={arrivalDate} onChange={(event) => setArrivalDate(event.target.value)}/>
        <input className="dateTimeInput" type="time" value={arrivalTime} onChange={(event) => setArrivalTime(event.target.value)}/>
        </label> <br/>
        </div> <br/>


        <button className="addArrivalButton">Add Arrival</button>
      </form> <br/>
      </div>

    </div> <br/>
    </>
  );
};