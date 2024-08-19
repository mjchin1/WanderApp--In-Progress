import { useState } from 'react';

export default function AddArrivalForm () {
  const [travelerName, setTravelerName] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [tripNumber, setTripNumber] = useState("");
  const [travelOrigin, setTravelOrigin] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [travelDestination, setTravelDestination] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/activities/create', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          travelerName,
          travelDate,
          tripNumber,
          travelOrigin,
          departureTime,
          travelDestination,
          arrivalTime,
        })
      });
      const result = await response.json();
      setTravelerName("");
      setTravelDate("");
      setTripNumber("");
      setTravelOrigin("");
      setDepartureTime("");
      setTravelDestination("");
      setArrivalTime("");
    } catch (error) {
    }

  }

  return (
    <>
    
    </>
  );
};