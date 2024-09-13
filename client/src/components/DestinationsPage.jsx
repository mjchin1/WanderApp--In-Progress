import { useState, useEffect } from 'react'

function DestinationsPage() {
  const [destination, setDestination] = useState("")
  const [destinationPic, setDestinationPic] = useState("")

  function handleClick() {
   

  }

  return (
    <>
      <h1>Where To?</h1>

      <button className="destinationButton" onClick={() => {
        setDestination("London");
        setDestinationPic("https://cdn.aarp.net/content/dam/aarp/travel/budget_travel/2022/06/1140-big-ben-hero.jpg");
        console.log(destination)
      }}>
       <h3>London</h3>
       <img className="destinationButtonPic" src="https://cdn.aarp.net/content/dam/aarp/travel/budget_travel/2022/06/1140-big-ben-hero.jpg"></img> 
      </button>

    </> )
}

export default DestinationsPage 
