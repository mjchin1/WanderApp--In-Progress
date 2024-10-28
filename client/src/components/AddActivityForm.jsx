import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Dine from "../assets/Dine.png"
import Drink from "../assets/Drink.png"
import Entertainment from "../assets/Entertainment.png"
import Nature from "../assets/Nature.png"
import Dancing from "../assets/Dancing.png"
import Shopping from "../assets/Shopping.png"
import Explore from "../assets/Explore.png"

export default function AddActivityForm ({trip}) {
  const [activityName, setActivityName] = useState("");
  const [activityDescription, setActivityDescription] = useState("");
  const [activityPhoto, setActivityPhoto] = useState("");
  const [activityWebsite, setActivityWebsite] = useState("");
  const [tripId, setTripId] = useState(trip.trip_id);

  const navigate = useNavigate();

  function navToActivities() {
    navigate("/activities");
  };

  const activityTypes = [

    {
      description: "Dine",
      image: Dine
    },

    {
      description: "Drink",
      image: Drink
    },

    {
      description: "Entertainment",
      image: Entertainment
    },

    {
      description: "Nature",
      image: Nature
    },

    {
      description: "Dance",
      image: Dancing
    },

    {
      description: "Shop",
      image: Shopping
    },
    {
      description: "Explore",
      image: Explore
    },
   
  ];

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
      navToActivities();
    } catch (error) {
    }

  }

  return (
    <>
    <div className="activityFormCard">
      
      <div className="activityFormBorder">
      <h3> Add an Activity</h3>

      <h1>What kind of activity is this?</h1>
      {activityTypes.map((type) => (
      <button className="activityTypeButton" onClick={()=>{
        setActivityDescription(type.description)
        setActivityPhoto(type.image)
      }}>
        {type.description} <br/> <br/>
      <img className="activityIcon" src={type.image}></img> 
      </button>
      ))} <br/> <br/>


      <form className="activityForm" onSubmit={handleSubmit}>

        <label>
         Activity Name: <input value={activityName} onChange={(event) => setActivityName(event.target.value)}/> <br/>
        </label> <br/>

        {/* <label>
          Activity Description: <input value={activityDescription} onChange={(event) => setActivityDescription(event.target.value)}/><br/>
        </label> <br/>

        <label>
          Activity Photo: <input value={activityPhoto} onChange={(event) => setActivityPhoto(event.target.value)}/> <br/>
        </label> <br/> 
         */}
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