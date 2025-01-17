import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PlacePhoto2 from './PlacePhoto2'

export default function PlacePhoto ({photoName, setPhotoName, setDestination, setPlaceId, placeId, setGooglePhotoUrl, googlePhotoUrl}) {
  useEffect(() => {
    fetchPhoto();
  }, [placeId])

  async function fetchPhoto() {
    console.log(placeId)
    try {
      const response = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json', 
          'X-Goog-Api-Key': import.meta.env.VITE_PLACES_API_KEY,
          'X-Goog-FieldMask': ['id', 'displayName', 'photos'],
        },
      });
      const result = await response.json();
      console.log(result)
      setPhotoName(result.photos[0].name)
      console.log(result.photos[0].name)

      
    } catch (error) {
    }
  }


  return (
    <>
    <PlacePhoto2 photoName={photoName} googlePhotoUrl={googlePhotoUrl} setGooglePhotoUrl={setGooglePhotoUrl}/>
    </>
  );
};


