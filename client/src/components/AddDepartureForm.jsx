import { useState } from 'react';

export default function AddArrivalForm ({trip}) {
  const [travelerName, setTravelerName] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [tripNumber, setTripNumber] = useState("");
  const [travelOrigin, setTravelOrigin] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [travelDestination, setTravelDestination] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [tripId, setTripId] = useState(trip.trip_id);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/departures/create', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tripId, 
          travelerName,
          travelDate,
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
    <div className="departureFormCard">
      
      <div className="departureFormBorder">

      <form className="departureForm" onSubmit={handleSubmit}>
        <h3> Add a Departure</h3>
        
        <label>
          Traveler Name: <input value={travelerName} onChange={(event) => setTravelerName(event.target.value)}/> <br/>
        </label> <br/>
        
        <label>
          What is your trip/flight number? <input value={tripNumber} onChange={(event) => setTripNumber(event.target.value)}/> <br/>
        </label> <br/>

        <label>
        When are you heading home? <input value={travelDate} onChange={(event) => setTravelDate(event.target.value)}/><br/>
        </label> <br/>

        <label> 
        Where will you be leaving from? <input value={travelOrigin} onChange={(event) => setTravelOrigin(event.target.value)}/> <br/>
        </label> <br/>

        <label> 
          At what time? <input value={departureTime} onChange={(event) => setDepartureTime(event.target.value)}/> <br/>
        </label> <br/>

        <label> 
         Where will you be returning to? <input value={travelDestination} onChange={(event) => setTravelDestination(event.target.value)}/> <br/>
        </label> <br/>

           {/* <label>
          When will you be getting there? <input value={travelDate} onChange={(event) => setTravelDate(event.target.value)}/><br/>
          </label> <br/> */}

        <label> 
          At what time? <input value={arrivalTime} onChange={(event) => setArrivalTime(event.target.value)}/> <br/>
        </label> <br/>

        <button className="addDepartureButton">Add Departure</button> <br/> <br/>
      </form>
      </div>

    </div>
    
    </>
  );
};