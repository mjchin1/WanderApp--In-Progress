import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PlacesSearchBar2 ({ }) {

  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function handleInputChange(event) {
    setInput(event.target.value)
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
          <input className="searchBarInput" id="searchBar" 
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button className="searchBarButton">Next</button>
        </label>
      </form>
      </div>
      
    {searchResults.map((result)=>(
      <div>
        <p>{result.placePrediction.text.text}</p>
      </div>
    ))
    }
    </>
  );
};