import { useState } from 'react';

export default function AddActivityForm ({trip}) {
  const [activityName, setActivityName] = useState("");
  const [activityDescription, setActivityDescription] = useState("");
  const [activityPhoto, setActivityPhoto] = useState("");
  const [activityWebsite, setActivityWebsite] = useState("");
  const [tripId, setTripId] = useState(trip.trip_id);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/activities/create', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tripId, 
          activityName,
          activityDescription,
          activityPhoto,
          activityWebsite,
        })
      });
      const result = await response.json();
      console.log(result)
      console.log(tripId)
      setActivityName("");
      setActivityDescription("");
      setActivityPhoto("");
      setActivityWebsite("");
    } catch (error) {
    }

  }

  return (
    <>
    <div className="activityFormCard">
      
      <div className="activityFormBorder">

      <form className="activityForm" onSubmit={handleSubmit}>
        <h3> Add an Activity</h3>
        
        <label>
         Activity Name: <input value={activityName} onChange={(event) => setActivityName(event.target.value)}/> <br/>
        </label> <br/>

        <label>
          Activity Description: <input value={activityDescription} onChange={(event) => setActivityDescription(event.target.value)}/><br/>
        </label> <br/>

        <label>
          Activity Photo: <input value={activityPhoto} onChange={(event) => setActivityPhoto(event.target.value)}/> <br/>
        </label> <br/> 
        
        <label> 
         Activity Website: <input value={activityWebsite} onChange={(event) => setActivityWebsite(event.target.value)}/> <br/>
        </label> <br/>

        <button className="addActivityButton">Add Activity</button> <br/> <br/>
      </form>
      </div>

    </div>
    
    </>
  );
};