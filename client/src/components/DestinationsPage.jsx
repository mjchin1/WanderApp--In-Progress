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

      <button className="destinationButton" onClick={() => {
        setDestination("Paris");
        setDestinationPic("");
        console.log(destination)
      }}>
       <h3>Paris</h3>
       <img className="destinationButtonPic" src=""></img> 
      </button>

      <button className="destinationButton" onClick={() => {
        setDestination("Copenhagen");
        setDestinationPic("");
        console.log(destination)
      }}>
       <h3>Copenhagen</h3>
       <img className="destinationButtonPic" src=""></img> 
      </button>

      <button className="destinationButton" onClick={() => {
        setDestination("Zurich");
        setDestinationPic("");
        console.log(destination)
      }}>
       <h3>Zurich</h3>
       <img className="destinationButtonPic" src=""></img> 
      </button>

      <button className="destinationButton" onClick={() => {
        setDestination("Cartagena");
        setDestinationPic("");
        console.log(destination)
      }}>
       <h3>Cartagena</h3>
       <img className="destinationButtonPic" src=""></img> 
      </button>

      <button className="destinationButton" onClick={() => {
        setDestination("Lisbon");
        setDestinationPic("");
        console.log(destination)
      }}>
       <h3>Lisbon</h3>
       <img className="destinationButtonPic" src=""></img> 
      </button>

      <button className="destinationButton" onClick={() => {
        setDestination("Rome");
        setDestinationPic("");
        console.log(destination)
      }}>
       <h3>Rome</h3>
       <img className="destinationButtonPic" src=""></img> 
      </button>

      <button className="destinationButton" onClick={() => {
        setDestination("Tulum");
        setDestinationPic("");
        console.log(destination)
      }}>
       <h3>Tulum</h3>
       <img className="destinationButtonPic" src=""></img> 
      </button>





    </> )
}

export default DestinationsPage 
