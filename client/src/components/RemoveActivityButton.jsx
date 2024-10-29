import { useNavigate } from 'react-router-dom'

export default function RemoveActivityButton({ activity, setActivities, activities }) {

  const navigate = useNavigate()
  function navToActivities() {
    navigate("/activities")
  }

  async function handleClick() {
    try {
      const response = await fetch(`http://localhost:8080/api/activities/${activity.activity_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result)
     
      setActivities(activity.filter((activity) => activity.activity_id !== result.activity_id));
    } catch (error) {
    }
  }
  return (
    <div> 
      <button className="activityLinkButton" onClick={() => {
        handleClick();
        navToActivities();
      }}>Delete Activity</button>
    </div>
  );
};