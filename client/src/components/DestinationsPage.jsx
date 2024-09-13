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
      }}>
       <h3>London</h3>
       <img className="destinationButtonPic" src="https://cdn.aarp.net/content/dam/aarp/travel/budget_travel/2022/06/1140-big-ben-hero.jpg"></img> 
      </button>

      <button className="destinationButton" onClick={() => {
        setDestination("Paris");
        setDestinationPic("https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg");
      }}>
       <h3>Paris</h3>
       <img className="destinationButtonPic" src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg"></img> 
      </button>

      <button className="destinationButton" onClick={() => {
        setDestination("Copenhagen");
        setDestinationPic("https://i.natgeofe.com/n/6f896103-f5b8-426b-aef7-3dcbbee6dcf4/GettyImages1045586638.jpg");
      }}>
       <h3>Copenhagen</h3>
       <img className="destinationButtonPic" src="https://i.natgeofe.com/n/6f896103-f5b8-426b-aef7-3dcbbee6dcf4/GettyImages1045586638.jpg"></img> 
      </button>

      <button className="destinationButton" onClick={() => {
        setDestination("Zurich");
        setDestinationPic("https://img.static-kl.com/images/media/506F5E1C-28C1-4555-A238CB9D4AD6039E");
        console.log(destination)
      }}>
       <h3>Zurich</h3>
       <img className="destinationButtonPic" src="https://img.static-kl.com/images/media/506F5E1C-28C1-4555-A238CB9D4AD6039E"></img> 
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
