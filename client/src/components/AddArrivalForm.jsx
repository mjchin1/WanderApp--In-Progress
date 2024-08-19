import { useState } from 'react';

export default function AddArrivalForm () {
  const [travelerName, setTravelerName] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [tripNumber, setTripNumber] = useState("");
  const [travelOrigin, setTravelOrigin] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [travelDestination, setTravelDestination] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/activities/create', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
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
    <div className="arrivalFormCard">
      
      <div className="arrivalFormBorder">

      <form className="arrivalForm" onSubmit={handleSubmit}>
        
        <label>
          Traveler Name:<input value={travelerName} onChange={(event) => setTravelerName(event.target.value)} required /> <br/>
        </label> <br/>

        <label>
          Travel Date:<input value={travelDate} onChange={(event) => setTravelDate(event.target.value)} required /><br/>
        </label> <br/>

        <label>
          Trip Number:<br/> <input value={tripNumber} onChange={(event) => setTripNumber(event.target.value)} required /> <br/>
        </label> <br/> 

        <label> 
          Departure Time:<input value={departureTime} onChange={(event) => setDepartureTime(event.target.value)} required /> <br/>
        </label> <br/>

        <label> 
         Travel Destination:<input value={travelDestination} onChange={(event) => setTravelDestination(event.target.value)} required /> <br/>
        </label> <br/>

        <label> 
          Arrival Time:<input value={arrivalTime} onChange={(event) => setArrivalTime(event.target.value)} required /> <br/>
        </label> <br/>
      </form>
      </div>

    </div>
    
    </>
  );
};