import { useState, useEffect } from 'react'

function ArrivalsPage() {

  const [arrivals, setArrivals] = useState([])

  useEffect(() => {
    async function fetchArrivals() {
      try {
        const response = await fetch("http://localhost:8080/api/arrivals/1", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        setArrivals(result);
        console.log(result);
      } catch (error) {
        throw new Error(`${error.message}`);
      }
    }
    fetchArrivals();
  }, []);


 

  return (
    <>
      <h1>Activity Ideas</h1>


      <div className="arrivalContainer">
      {arrivals.map((arrival) => (
          <>
          <div key={arrival.arrival_id} className="arrivalCard">
            <div className="arrivalDetails">
              <p className="arrivalHeading">{arrival.arrival_name}</p>
              <a className="arrivalHeading" href={arrival.arrival_website} target="_blank">Website</a> <br/>
              <img className="arrivalPhoto"src={arrival.arrival_photo}></img>
            </div>
          </div>
    
          </>
      ))}

      </div>

    </> )
}

export default ArrivalsPage
