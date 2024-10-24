import { useNavigate } from 'react-router-dom'

export default function RemoveTripButton({trip, trips, setTrips }) {

  const navigate = useNavigate()
  function navToTrips() {
    navigate("/")
  }

  async function handleClick() {
    try {
      const response = await fetch(`http://localhost:8080/api/trips/${trip.trip_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result)
     
      setTrips(trips.filter((trip) => trip.trip_id !== result.trip_id));
    } catch (error) {
    }
  }
  return (
    <div className="removeButton">
      <button onClick={() => {
        handleClick();
        navToTrips();
      }}>Delete Trip</button>
    </div>
  );
};