import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddTripForm ({ destination, setDestination, destinationPic, setDestinationPic }) {
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
    } catch (error) {
    }

    navigate("/");

  }

  return (
    <>

    <div >
    <h1> Your Trip to {destination} </h1>
    <img className="tripPhoto" src={destinationPic}></img> 
    </div>

    <div className="tripFormCard">
      
      <div className="tripFormBorder">

      <form className="tripForm" onSubmit={handleSubmit}>
        
        {/* <label>
         Destination: <input value={destination} onChange={(event) => setDestination(event.target.value)}/> <br/>
        </label> <br/> */}

        <label className="tripFormText">
          When are you going? <input type="date" value={startDate} onChange={(event) => setStartDate(event.target.value)}/><br/>
        </label> <br/>

        <label className="tripFormText">
          When are you returning? <input type="date" value={endDate} onChange={(event) => setEndDate(event.target.value)}/> <br/>
        </label> <br/> 
        
        {/* <label> 
         Trip Photo: <input value={tripPhoto} onChange={(event) => setTripPhoto(event.target.value)}/> <br/>
        </label> <br/> */}

        <button className="addTripButton">Add Trip</button> <br/> <br/>
      </form>
      </div>

    </div>
    
    </>
  );
};