import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PlacesSearchBar2 ({destinations, setDestinationPic, destinationPic, setDestination, destination, setPlaceId, googlePhotoUrl}) {

  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate()

  function photoAvailable(input) {
    let destinationsArray = destinations;
    console.log(destination)
    let destinationCity = input.split(",")[0]
    console.log(destinationCity)
    for (let i=0; i <destinationsArray.length; i++) {
      let place = destinationsArray[i];
      if (place.cityName===destinationCity){
        setDestinationPic(place.imageUrl)
        return true
      }
    }
    return false
  }

  function handleInputChange(event) {
    event.preventDefault();
    setInput(event.target.value)
    if (event.target.value) handleSubmit(event)
    photoAvailable(input)
    if(!event.target.value) {
      setSearchResults(null)
    }
  }

  function formatDestination(string) {
    let splitString = string.split(",");
    let city = splitString[0].trim();
    let state = splitString[1].trim();
    let country = splitString[splitString.length-1].trim();
    let reformattedString = ""
    
    if (country === "USA") {
      reformattedString = `${city + ", " + state}`
    } else {
    reformattedString = `${city + ", " + country}`
    }
    return (reformattedString)
  } 

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('https://places.googleapis.com/v1/places:autocomplete', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json', 
          'X-Goog-Api-Key': import.meta.env.VITE_PLACES_API_KEY
        },
        body: JSON.stringify({
          input,
          includeQueryPredictions: true,
          includedPrimaryTypes: ["locality"],
        })
      });
      const result = await response.json();
      setSearchResults(result.suggestions)
      console.log(result)
      console.log(input)
      setPlaceId(null)
      console.log("results:", searchResults)
      
    } catch (error) {
    }


    }

  return (
    <>
      <div>
      <p className="searchBarText">Let's plan your trip itinerary. Where are you headed?</p>
      <form onSubmit={handleSubmit}>
      <label className="destinationSearchBar">
          <p className="searchBarText">Browse destinations below or search here.</p> 
          <input className="searchBarInput"
            value={input}
            onChange={handleInputChange}
          />
          <button className="searchBarButton"
          onClick={() => {
                navigate("/add-trip")}
          }>Next</button>
        </label>
      </form>
      </div>
      
    {searchResults?.length ? <div className="searchResultsContainer">
    {searchResults.map((result)=>(
        <div key={result.placePrediction.placeId}>
        <button className="searchResultsButton clearButton" 
        onClick={() => {setInput(result.placePrediction.text.text)
          setDestination(formatDestination(result.placePrediction.text.text))
          !photoAvailable(input) && setPlaceId(result.placePrediction.placeId)
        }}
        >{result.placePrediction.text.text}</button>
        </div> 
    ))
    }
    <br/>
    </div> : null}
    </>
  );
};


