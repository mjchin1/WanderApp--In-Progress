import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddTripForm ({ destination, setDestination, destinationPic, setDestinationPic, trip, setTrip }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [tripPhoto, setTripPhoto] = useState(destinationPic);
  const navigate = useNavigate();

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
      setTrip(result)
    } catch (error) {
    }

    navigate(`/trip/${trip.trip_id}`);

  }

  return (
    <>

   {destination && startDate && endDate ? <div >
    <h1>Trip to {destination} </h1>
    <img className="tripPhoto" src={destinationPic}></img> 
    <h1>{startDate} to {endDate}</h1>
    </div> : null } 


    <div className="tripFormCard">
      
      <div className="tripFormBorder">

      <form className="tripForm" onSubmit={handleSubmit}>
        
        {!startDate && !endDate? <label className="tripFormText">
          When are you going? <input type="date" value={startDate} onChange={(event) => setStartDate(event.target.value)}/><br/>
        </label> : null}

       {startDate && !endDate? <label className="tripFormText">
          When are you returning? <input type="date" value={endDate} onChange={(event) => setEndDate(event.target.value)}/> <br/>
        </label> : null}
        
        {/* <label> 
         Trip Photo: <input value={tripPhoto} onChange={(event) => setTripPhoto(event.target.value)}/> <br/>
        </label> <br/> */}


       {startDate && endDate ? <button className="addTripButton">Add Trip</button> : null}
      </form>
      </div>

    </div>
    
    </>
  );
};