import { useNavigate } from 'react-router-dom'

export default function RemoveDepartureButton({departure, departures, setDepartures }) {

  const navigate = useNavigate()
  function navToDepartures() {
    navigate("/departures")
  }

  async function handleClick() {
    try {
      const response = await fetch(`http://localhost:8080/api/departures/${departure.departure_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result)
     
      setDepartures(departures.filter((departure) => departure.departure_id !== result.departure_id));
    } catch (error) {
    }
  }
  return (
    <div className="removeButton">
      <button onClick={() => {
        handleClick();
        navToDepartures();
      }}>Delete Departure</button>
    </div>
  );
};