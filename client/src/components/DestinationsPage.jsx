import { useState, useEffect } from 'react'

function DestinationsPage() {
  const [destination, setDestination] = useState("")
  const [destinationPic, setDestinationPic] = useState("")

  function handleClick() {
   

  }

  const destinations = [
    {
      cityName: "London",
      imageUrl: "https://cdn.aarp.net/content/dam/aarp/travel/budget_travel/2022/06/1140-big-ben-hero.jpg",
    },
    {
      cityName: "Paris",
      imageUrl: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg",
    },
    {
      cityName: "Copenhagen",
      imageUrl: "https://i.natgeofe.com/n/6f896103-f5b8-426b-aef7-3dcbbee6dcf4/GettyImages1045586638.jpg",
    },
    {
      cityName: "Zurich",
      imageUrl: "https://img.static-kl.com/images/media/506F5E1C-28C1-4555-A238CB9D4AD6039E"
    },
    {
      cityName: "Cartagena",
      imageUrl: "https://conbio.org/images/content_static_pages/ICCB2017_Cartagena.jpg"
    },
    {
      cityName: "Lisbon",
      imageUrl: "https://www.travelandleisure.com/thmb/LzWpzDihxjffaFmM9TZWCvm9VyY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/lisbon-portugal-LISBONTG0521-c933a0fb669647619fa580f6c602c4c8.jpg"
    },
    {
      cityName: "Rome",
      imageUrl: "https://i.natgeofe.com/n/3012ffcc-7361-45f6-98b3-a36d4153f660/colosseum-daylight-rome-italy_16x9.jpg"
    },
    {
      cityName: "Tulum",
      imageUrl: "https://oasisblog.nyc3.cdn.digitaloceanspaces.com/2016/04/ik-kil-cenote01.jpg"
    },
    {
      cityName: "Prague",
      imageUrl: ""
    },
    {
      cityName: "Venice",
      imageUrl: ""
    },
    {
      cityName: "Antigua Guatemala",
      imageUrl: ""
    },
    {
      cityName: "Montego Bay",
      imageUrl: ""
    },
    {
      cityName: "Rio de Janeiro",
      imageUrl: ""
    },
    {
      cityName: "Accra",
      imageUrl: ""
    },
    {
      cityName: "Mexico City",
      imageUrl: ""
    },
    {
      cityName: "Barcelona",
      imageUrl: ""
    },
    {
      cityName: "Lyon",
      imageUrl: ""
    },
    {
      cityName: "Milan",
      imageUrl: ""
    },
    {
      cityName: "Oslo",
      imageUrl: ""
    },
    {
      cityName: "Santorini",
      imageUrl: ""
    },
  ];

  return (
    <>
      <h1>Where To?</h1>
      {destinations.map((destination) => (
        <button className="destinationButton" onClick={() => {
          setDestination(destination.cityName);
          setDestinationPic(destination.imageUrl);
        }}>
         <h3>{destination.cityName}</h3>
         <img className="destinationButtonPic" src={destination.imageUrl}></img> 
        </button>
      ))}

    </> )
}

export default DestinationsPage 
