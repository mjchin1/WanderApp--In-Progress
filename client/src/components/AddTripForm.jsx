import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddTripForm ({ destination, setDestination, destinationPic, setDestinationPic, trip, setTrip, formatDate }) {
  const [startDate, setStartDate] = useState("");
  const [startConfirmation, setStartConfirmation] = useState(null)
  const [endDate, setEndDate] = useState("");
  const [endConfirmation, setEndConfirmation] = useState(null)
  const [tripPhoto, setTripPhoto] = useState(destinationPic);
  const navigate = useNavigate();

  function formatDestination(string) {
    let splitString = string.split(",");
    let city = splitString[0].trim();
    let state = splitString[1].trim();
    let country = splitString[splitString.length-1].trim();
    let reformattedString = ""
    
    if (country === "USA") {
      reformattedString = `${city + ", " + state}`
    } else {
    reformattedString = `${city + ", " + country}`
    }
    return (reformattedString)
  } 

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

   {destination && startConfirmation && endConfirmation ? <div >
    <h1>Trip to {formatDestination(destination)} </h1>
    {/* <img className="tripPhoto" src={destinationPic}></img>  */}
    <h1>{formatDate(startDate)} to {formatDate(endDate)}</h1>
    </div> : null } 


    <div className="tripFormCard">
      
      <div className="tripFormBorder">

      <form className="tripForm" onSubmit={handleSubmit}>
        
        {!startConfirmation && !endConfirmation? <label className="tripFormText">
          When are you going to {formatDestination(destination)}? <br/>
          <input className="tripInput" type="date" value={startDate} onChange={(event) => setStartDate(event.target.value)}/> <br/>
          <button className="dateConfirmationButton" onClick={()=> {setStartConfirmation("confirmed")}}>Next</button>
        </label> : null}

       {startConfirmation && !endConfirmation? <label className="tripFormText">
          When are you returning from {destination}? <br/>
          <input className="tripInput" type="date" value={endDate} onChange={(event) => setEndDate(event.target.value)}/> <br/>
          <button className="dateConfirmationButton" onClick={()=> {setEndConfirmation("confirmed")}}>Next</button>
        </label> : null}
        
        {/* <label> 
         Trip Photo: <input value={tripPhoto} onChange={(event) => setTripPhoto(event.target.value)}/> <br/>
        </label> <br/> */}


       {startConfirmation && endConfirmation ? <button className="addTripButton">Confirm Trip Details</button> : null}
      </form>
      </div>

    </div>
    
    </>
  );
};