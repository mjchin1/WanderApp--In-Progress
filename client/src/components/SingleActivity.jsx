import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import RemoveActivityButton from './RemoveActivityButton'

function SingleActivity( { activity, activities, setActivities }) {

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


      

      <div className="singleActivityContainer">
      <h1>{activity.activity_name}</h1>
  
          <div key={activity.activity_id} className="activityCard">
            <div className="singleActivityDetails">
              <div className="activityLinks">
              <Link to={activity.activity_website} target="_blank"><button className="activityLinkButton">See Website</button></Link>
              <button className="activityLinkButton">Add to Calendar</button>
              <button className="activityLinkButton">Remove From List</button>
              </div>
              <div className="activityPhotoDiv">
              <img className="singleActivityPhoto"src={activity.activity_photo}></img>
              </div>
            </div>
            <RemoveActivityButton activity={activity} activities={activities} setActivities={setActivities}/>
          </div>
      </div>

    </> )
}

export default SingleActivity
