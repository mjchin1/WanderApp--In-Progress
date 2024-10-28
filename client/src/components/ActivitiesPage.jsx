import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function ActivitiesPage( { activity, setActivity, trip }) {

  const [activities, setActivities] = useState([])
  const navigate = useNavigate()

  function handleClick () {
    navigate(`/activities/${activity.activity_id}`)
  }

  function navToForm() {
    navigate("/add-activity")
  }

  useEffect(() => {
    async function fetchActivities() {
      try {
        const response = await fetch(`http://localhost:8080/api/activities/trip/${trip.trip_id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        setActivities(result);
        console.log(result);
      } catch (error) {
        throw new Error(`${error.message}`);
      }
    }
    fetchActivities();
  }, []);


 

  return (
    <>
      <h1>Wander List</h1>


      <div className="activityContainer">
      {activities.map((activity) => (
          <>
          <button key={activity.activity_id} className="activityPageButton clickDiv" onClick={()=>{
            setActivity(activity);
            handleClick()
          }}>
            <div className="activityDetails">
              <p className="activityHeading">{activity.activity_name}</p>
              <img className="activityIcon"src={activity.activity_photo}></img> <br/> <br/>
            </div>
          </button>
    
          </>
      ))}

      </div>
      <br/> <br/>
      <button onClick={()=> {
        navToForm()
      }}>Add an Activity</button>

    </> )
}

export default ActivitiesPage
