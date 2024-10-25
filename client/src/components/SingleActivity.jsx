import { useState, useEffect } from 'react'

function SingleActivity( { activity }) {

  useEffect(() => {
    async function fetchActivity() {
      try {
        const response = await fetch(`http://localhost:8080/api/activities/${activity.activity_id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        console.log(result);
      } catch (error) {
        throw new Error(`${error.message}`);
      }
    }
    fetchActivity();
  }, []);


  return (
    <>
      <h1>{activity.activity_name}</h1>

      <div className="activityContainer">
  
          <div key={activity.activity_id} className="activityCard">
            <div className="activityDetails">
              <p className="activityHeading">{activity.activity_description}</p>
              <a className="activityHeading" href={activity.activity_website} target="_blank">Website</a> <br/>
              <img className="activityPhoto"src={activity.activity_photo}></img>
            </div>
          </div>
      </div>

    </> )
}

export default SingleActivity
