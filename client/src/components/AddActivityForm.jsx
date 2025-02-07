import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Dine from "../assets/Dine.png"
import Drink from "../assets/Drink.png"
import Entertainment from "../assets/Entertainment.png"
import Nature from "../assets/Nature.png"
import Dancing from "../assets/Dancing.png"
import Shopping from "../assets/Shopping.png"
import Explore from "../assets/Explore.png"
import ActivitySearchBar2 from "./ActivitySearchBar2"

export default function AddActivityForm ({trip}) {
  const [activityName, setActivityName] = useState("");
  const [activityDescription, setActivityDescription] = useState("");
  const [activityPhoto, setActivityPhoto] = useState("");
  const [activityWebsite, setActivityWebsite] = useState("");
  const [tripId, setTripId] = useState(trip.trip_id);
  const [activityNameStatus, setActivityNameStatus] = useState(null)
  const [activityWebsiteStatus, setActivityWebsiteStatus] = useState(null)
  const [activityVerb, setActivityVerb] = useState("")

  const navigate = useNavigate();

  function navToActivities() {
    navigate("/activities");
  };

  const activityTypes = [

    {
      description: "Dine",
      image: Dine,
      activityVerb:"dine"
    },

    {
      description: "Grab a Drink",
      image: Drink,
      activityVerb:"grab a drink"
    },

    {
      description: "Enjoy Nature",
      image: Nature, 
      activityVerb: "enjoy nature"
    },

    {
      description: "Dance",
      image: Dancing, 
      activityVerb: "dance"
    },

    {
      description: "Shop",
      image: Shopping, 
      activityVerb: "shop"
    },
    {
      description: "Explore",
      image: Explore, 
      activityVerb: "explore"
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
      <h1> Add an Activity</h1>

    { activityPhoto && !activityNameStatus? <ActivitySearchBar2 activityName={activityName} setActivityNameStatus={setActivityNameStatus} setActivityName={setActivityName} activityVerb={activityVerb}/>: null } 

   { ! activityPhoto? <div className="activityCategoriesContainer">
      <h2>What would you like to do? </h2>
      {activityTypes.map((type) => (
      <button className="activityTypeButton" onClick={()=>{
        setActivityDescription(type.description)
        setActivityPhoto(type.image)
        setActivityVerb(type.activityVerb)
      }}>
        {type.description} <br/> <br/>
      <img className="activityIcon" src={type.image}></img> 
      </button>
      ))} <br/> <br/>

    </div> : null}

    
      <form className="activityForm" onSubmit={handleSubmit}>
      
      {/* { activityDescription && activityPhoto && !activityNameStatus ? 
      <>
      <label className="formText">
         Name of your activity <br/>
         <input value={activityName} onChange={(event) => setActivityName(event.target.value)}/> 
        </label> <br/> <br/>
        <button onClick={()=>{
          setActivityNameStatus("confirmed")
        }}>Next</button>

        </>
      : null} */}
     
        {/* <label>
          Activity Description: <input value={activityDescription} onChange={(event) => setActivityDescription(event.target.value)}/><br/>
        </label> <br/>

        <label>
          Activity Photo: <input value={activityPhoto} onChange={(event) => setActivityPhoto(event.target.value)}/> <br/>
        </label> <br/> 
         */}
        { activityDescription && activityPhoto && activityNameStatus && !activityWebsiteStatus ? 
        <>
        <label className="formText">
         Add a Website? <br/> 
         <input value={activityWebsite} onChange={(event) => setActivityWebsite(event.target.value)}/>
        </label> <br/> <br/>
       { activityWebsite ? <button onClick={()=>{
          setActivityWebsiteStatus("confirmed")
        }}>Next</button> : <button onClick={()=>{
          setActivityWebsiteStatus("confirmed")
        }}>Skip</button> }

        </> 
        : null}

       
       { activityPhoto && activityName && activityNameStatus && activityWebsiteStatus? 
       <>
        <button className="activityTypeButton" >
        {activityName} <br/> <br/>
        <img className="activityIcon" src={activityPhoto}></img> 
        </button> <br/>

        <button className="addActivityButton">Add This Activity</button>

        </>

      : null}


      </form>
      </div>

    </div>
    
    </>
  );
};