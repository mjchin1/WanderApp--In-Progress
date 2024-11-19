import { useState } from 'react';

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
    } catch (error) {
    }

  }

  return (
    <>
    <div className="arrivalDepartureFormCard">
      
      <div className="arrivalFormBorder">
      <h3> Add an Arrival</h3>

      <form className="arrivalForm" onSubmit={handleSubmit}>
        
        <div className="formFields">
        <label>
          Traveler Name <input value={travelerName} onChange={(event) => setTravelerName(event.target.value)}/> <br/>
        </label> <br/>
        
        <label>
         Flight/Trip Number <input value={tripNumber} onChange={(event) => setTripNumber(event.target.value)}/> <br/>
        </label> <br/> 
        
        <label> 
         Departure City <input value={travelOrigin} onChange={(event) => setTravelOrigin(event.target.value)}/> <br/>
        </label> <br/>

        <label> 
         Destination City <input value={travelDestination} onChange={(event) => setTravelDestination(event.target.value)}/> <br/>
        </label> <br/>
        

        <label>
          Departure Date <input value={travelDate} onChange={(event) => setTravelDate(event.target.value)}/><br/>
        </label> <br/>

        <label>
          Arrival Date <input value={arrivalDate} onChange={(event) => setArrivalDate(event.target.value)}/><br/>
        </label> <br/>

        <label> 
          Departure Time <input value={departureTime} onChange={(event) => setDepartureTime(event.target.value)}/> <br/>
        </label> <br/>
        <label> 
          Arrival Time <input value={arrivalTime} onChange={(event) => setArrivalTime(event.target.value)}/> <br/>
        </label> <br/>
        </div>


        <button className="addArrivalButton">Add Arrival</button> <br/> <br/>
      </form>
      </div>

    </div>
    
    </>
  );
};