import { useState } from 'react';

export default function AddTripForm () {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [tripPhoto, setTripPhoto] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/trips/create', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          destination, 
          startDate, 
          endDate, 
          tripPhoto
        })
      });
      const result = await response.json();
      setDestination("");
      setStartDate("");
      setEndDate("");
      setTripPhoto("");
    } catch (error) {
    }

  }

  return (
    <>
    <div className="tripFormCard">
      
      <div className="tripFormBorder">

      <form className="tripForm" onSubmit={handleSubmit}>
        <h3> Add a Trip</h3>
        
        <label>
         Destination: <input value={destination} onChange={(event) => setDestination(event.target.value)}/> <br/>
        </label> <br/>

        <label>
          Start Date: <input value={startDate} onChange={(event) => setStartDate(event.target.value)}/><br/>
        </label> <br/>

        <label>
          End Date: <input value={endDate} onChange={(event) => setEndDate(event.target.value)}/> <br/>
        </label> <br/> 
        
        <label> 
         Trip Photo: <input value={tripPhoto} onChange={(event) => setTripPhoto(event.target.value)}/> <br/>
        </label> <br/>

        <button className="addTripButton">Add Trip</button> <br/> <br/>
      </form>
      </div>

    </div>
    
    </>
  );
};