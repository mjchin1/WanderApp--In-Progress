import React from 'react'
import { useRef } from 'react';
import { GoogleMap, useJsApiLoader, StandaloneSearchBox } from '@react-google-maps/api'
import { useNavigate } from 'react-router-dom';


export default function ActivitySearchBar2({ activityName, setActivityName, activityAddress, setActivityAddress, activityVerb, setActivityNameStatus }) {
  
  const navigate= useNavigate()

  const inputref= useRef(null)

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_PLACES_API_KEY,
    libraries:["places"]
  })

  const handleOnPlacesChanged = () => {
    let address = inputref.current.getPlaces();
    console.log("address", address)
    console.log(address[0].formatted_address)
    console.log(address[0].name)
  }

  function confirmActivity() {
    let address = inputref.current.getPlaces();
    setActivityName(address[0].name)
    setActivityAddress(address[0].formatted_address)
  }

  return (
    <div>
      <form>
      <label className="destinationSearchBar">
          <p className="searchBarText">Where would you like to {activityVerb}?</p>
          {isLoaded &&
          <StandaloneSearchBox 
          onLoad={(ref)=> inputref.current = ref}
          onPlacesChanged={() =>{
            handleOnPlacesChanged()}}>
          <input className="searchBarInput" name="searchBar" 
          value={activityName} onChange={(event) => setActivityName(event.target.value)}
          />
          </StandaloneSearchBox>
          }
          <button onClick={()=>{
            setActivityNameStatus("confirmed")
            confirmActivity()}} className="searchBarButton">Next</button>
            
        </label>
      </form>
      </div>
  );
};