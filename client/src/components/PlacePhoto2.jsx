import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PlacePhoto ({photoName}) {

  const [googlePhotoUrl, setGooglePhotoUrl] = useState("")
  async function fetchPhoto() {
    try {
      const response = await fetch(`https://places.googleapis.com/v1/${photoName}/media?skipHttpRedirect=true&maxHeightPx=400&maxWidthPx=400&key=${import.meta.env.VITE_PLACES_API_KEY}`);
      const result = await response.json();
      console.log(result)
      setGooglePhotoUrl(result.photoUri)

      
    } catch (error) {
      console.error(error);
    }
  }
  fetchPhoto()


  return (
    <>
    <img src={googlePhotoUrl}/>
    </>
  );
};


