import { useState, useEffect } from 'react'

function ActivitiesPage() {

  const [activities, setActivities] = useState([])

  useEffect(() => {
    async function fetchActivities() {
      try {
        const response = await fetch("http://localhost:8080/api/activities", {
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
      <h1>Activity Ideas</h1>


      <div className="activityContainer">
      {activities.map((activity) => (
          <>
          <div key={activity.activity_id} className="activityCard">
            <div className="activityDetails">
              <p className="activityHeading">{activity.activity_name}</p>
              <a className="activityHeading" href={activity.activity_website} target="_blank">Website</a> <br/>
              <img className="activityPhoto"src={activity.activity_photo}></img>
            </div>
          </div>
    
          </>
      ))}

      </div>

    </> )
}

export default ActivitiesPage
