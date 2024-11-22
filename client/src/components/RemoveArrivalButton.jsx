import { useNavigate } from 'react-router-dom'

export default function RemoveArrivalButton({arrival, arrivals, setArrivals }) {

  const navigate = useNavigate()
  function navToArrivals() {
    navigate("/arrivals")
  }

  async function handleClick() {
    try {
      const response = await fetch(`http://localhost:8080/api/arrivals/${arrival.arrival_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result)
     
      setArrivals(arrivals.filter((arrival) => arrival.arrival_id !== result.arrival_id));
    } catch (error) {
    }
  }
  return (
    <div className="removeButton">
      <button onClick={() => {
        handleClick();
        navToArrivals();
      }}>Delete Arrival</button>
    </div>
  );
};