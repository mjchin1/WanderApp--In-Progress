import React from 'react'
import { useRef } from 'react';
import { GoogleMap, useJsApiLoader, StandaloneSearchBox } from '@react-google-maps/api'


export default function PlacesSearchBar(destination, setDestination) {

  const inputref= useRef(null)

  console.log(import.meta.env.PLACES_API_KEY);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.PLACES_API_KEY,
    libraries:["places"]
  })

  const handleOnPlacesChanged = () => {
    let address = inputref.current.getPlaces();
    console.log("address", address)
    console.log(address[0].formatted_address)
    console.log(address[0].name)
  }

  return (
    <div>
      <form>
      <label className="destinationSearchBar">
          <p className="searchBarText">Where Are We Going?</p>
          {isLoaded &&
          <StandaloneSearchBox 
          onLoad={(ref)=> inputref.current = ref}
          onPlacesChanged={handleOnPlacesChanged}>
          <input className="searchBarInput" name="searchBar" 
          value={destination.cityName} onChange={(event) => setDestination(event.target.value)}
          />
          </StandaloneSearchBox>
          }
          <button className="searchBarButton">Next</button>
        </label>
      </form>
      </div>
  );
};