import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlacePhoto from './PlacePhoto'

export default function AddTripForm ({ destination, destinations, setDestination, destinationPic, setDestinationPic, trip, setTrip, formatDate, photoName, setPhotoName, placeId, googlePhotoUrl, setGooglePhotoUrl, }) {
  const [startDate, setStartDate] = useState("");
  const [startConfirmation, setStartConfirmation] = useState(null)
  const [endDate, setEndDate] = useState("");
  const [endConfirmation, setEndConfirmation] = useState(null)
  const [tripPhoto, setTripPhoto] = useState(destinationPic);
  const navigate = useNavigate();
  const [photoAvailable, setPhotoAvailable] = useState(null)

  function choosePhoto() {
    let destinationsArray = destinations;
    console.log(destination)
    let destinationCity = destination.split(",")[0]
    console.log(destinationCity)
    for (let i=0; i <destinationsArray.length; i++) {
      let place = destinationsArray[i];
      if (place.cityName===destinationCity){
        setPhotoAvailable("yes")
        return place.imageUrl
      }
    }
    return googlePhotoUrl
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/trips/create', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          destination, 
          startDate, 
          endDate, 
          tripPhoto: destinationPic
        })
      });
      const result = await response.json();
      // choosePhoto()
      // setDestination("");
      setStartDate("");
      setEndDate("");
      setTripPhoto("");
      setTrip(result)
    } catch (error) {
    }

    navigate(`/trip/${trip.trip_id}`);

  }

  return (
    <>

   {destination && startConfirmation && endConfirmation ? <div >
    <h1>Trip to {destination} </h1>
    {/* <img className="tripPhoto" src={destinationPic}></img>  */}
    <h1>{formatDate(startDate)} to {formatDate(endDate)}</h1>
    </div> : null } 


    <div className="tripFormCard">
      
      <div className="tripFormBorder">
      <p className="tripFormText"> When will you be in {destination}? <br/> </p>

      <form className="tripForm" onSubmit={handleSubmit}>
      
        {!startConfirmation && !endConfirmation? <label className="tripFormText">
          <div className="dateInputs">
          <p className="dateDividerText">From</p>
          <input className="tripInput" type="date" value={startDate} onChange={(event) => setStartDate(event.target.value)}/> 
          <p className="dateDividerText">to</p>
          <input className="tripInput" type="date" value={endDate} onChange={(event) => setEndDate(event.target.value)}/>
          </div>
        </label> : null} <br/>
        <button className="addTripButton" onClick={()=> {
            setDestinationPic(choosePhoto())}}>Confirm Trip Details</button> <br/>
        </form> <br/>
    

       {/* {startConfirmation && !endConfirmation? <label className="tripFormText">
          When are you returning from {destination}? <br/>
          <input className="tripInput" type="date" value={endDate} onChange={(event) => setEndDate(event.target.value)}/> <br/>
          <button className="dateConfirmationButton" onClick={()=> {
            setEndConfirmation("confirmed")
            setDestinationPic(choosePhoto())}}>Next</button>
        </label> : null} */}


      {!photoAvailable ? <PlacePhoto choosePhoto={choosePhoto} photoName={photoName} setPhotoName={setPhotoName} placeId={placeId} googlePhotoUrl={googlePhotoUrl} setGooglePhotoUrl={setGooglePhotoUrl}/> : <img className="searchResultPic" src={destinationPic}/>}



       
      
      </div>

    </div>
    
    </>
  );
};