import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PlacesSearchBar2 ({ }) {

  const [input, setInput] = useState("London");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  function handleInputChange(event) {
    event.preventDefault();
    setInput(event.target.value)
    input && handleSubmit(event)
  }


  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('https://places.googleapis.com/v1/places:autocomplete', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json', 
          'X-Goog-Api-Key': 
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
      <form onSubmit={handleSubmit}>
      <label className="destinationSearchBar">
          <p className="searchBarText">Where Are We Going?</p>
          <input className="searchBarInput" placeHolder="Search Here"
            value={input}
            onChange={handleInputChange}
          />
          <button className="searchBarButton">Next</button>
        </label>
      </form>
      </div>
      
      <div className="searchResultsContainer">
    {searchResults.map((result)=>(
        <div key={result.placePrediction.placeId}>
        <button className="searchResultsButton clearButton" 
        onClick={() => setInput(result.placePrediction.text.text)}
        >{result.placePrediction.text.text}</button>
        </div>
    ))
    }
      </div>
    </>
  );
};


