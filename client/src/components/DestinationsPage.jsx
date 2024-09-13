import { useState, useEffect } from 'react'

function DestinationsPage() {
  const navigate = useNavigate()
  const [destination, setDestination] = useState("")
  const [destinationPic, setDestinationPic] = useState("")

  function handleClick() {
   

  }

  return (
    <>
      <h1>Where To?</h1>

      <button onClick={() => {
        setDestination("London");
        setDestinationPic("");
      }}>
       <h3>London</h3>
       <img src="https://cdn.aarp.net/content/dam/aarp/travel/budget_travel/2022/06/1140-big-ben-hero.jpg"></img> 
      </button>

    </> )
}

export default DestinationsPage 
