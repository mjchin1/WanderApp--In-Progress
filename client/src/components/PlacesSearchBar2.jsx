import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PlacesSearchBar2 ({destinations, setDestinationPic, destinationPic, setDestination, destination, setPlaceId, googlePhotoUrl}) {

  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate()

  // function choosePhoto() {
  //   let destinationsArray= destinations;
  //   console.log(destination)
  //   let destinationCity = destination.split(",")[0]
  //   console.log(destinationCity)
  //   for (let i=0; i <destinationsArray.length; i++) {
  //     let place = destinationsArray[i];
  //     if (place.cityName===destinationCity){
  //       setDestinationPic(place.imageUrl)
  //       console.log("pic:", destinationPic)
  //     } 
  //   }
  //     }

  function handleInputChange(event) {
    event.preventDefault();
    setInput(event.target.value)
    input && handleSubmit(event)
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
      
      
    } catch (error) {
    }


    }

  return (
    <>
      <div>
      <p className="searchBarText">Where Are We Going?</p>
      <form onSubmit={handleSubmit}>
      <label className="destinationSearchBar">
          <p className="searchBarText">Browse locations below or search here.</p> 
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
      
      <div className="searchResultsContainer">
    {searchResults.map((result)=>(
        <div key={result.placePrediction.placeId}>
        <button className="searchResultsButton clearButton" 
        onClick={() => {setInput(result.placePrediction.text.text)
          setDestination(formatDestination(result.placePrediction.text.text))
          setPlaceId(result.placePrediction.placeId)
          // choosePhoto()
        }}
        >{result.placePrediction.text.text}</button>
        </div>
    ))
    }
      </div>
    </>
  );
};


