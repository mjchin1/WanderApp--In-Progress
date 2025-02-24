import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import RemoveActivityButton from './RemoveActivityButton'

function SingleActivity( { activity, activities, setActivities }) {

const navigate = useNavigate()

function navToActivities(){
  navigate("/activities")
}

  console.log(activity)

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
      <h2>{activity.activity_address}</h2>
  
          <div key={activity.activity_id} className="activityCard">
            <div className="singleActivityDetails">
              <div className="activityLinks">
              {activity.activity_website ? <Link to={activity.activity_website} target="_blank"><button className="activityLinkButton">See Website</button></Link> : <button className="activityLinkButton">Add Website</button>}
              <button className="activityLinkButton">Add to Calendar</button>
              <RemoveActivityButton activity={activity} activities={activities} setActivities={setActivities}/>
              </div>
              <div className="activityPhotoDiv">
              <img className="singleActivityPhoto"src={activity.activity_photo}></img>
              </div>
            </div>
          </div>
          <button onClick={navToActivities}>Back</button>
      </div>

    </> )
}

export default SingleActivity
