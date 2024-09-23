import { useState, useEffect } from 'react'

function DestinationsPage() {
  const [destination, setDestination] = useState("")
  const [destinationPic, setDestinationPic] = useState("")

  const destinations = [

    {
      cityName: "Antigua Guatemala",
      imageUrl: "https://cdn-ecllj.nitrocdn.com/tlOjUJBEedYlFmMWnYnKfpcNXvNKiSnd/assets/images/optimized/rev-580e7a3/www.wanderingstus.com/wp-content/uploads/2023/03/wandering-stus-antigua-guatemala-2.jpg"
    },
    {
      cityName: "Barcelona",
      imageUrl: "https://www.thetrainline.com/cms/media/5673/alleys_in_gothic_quarter_in_barcelona_spain.jpg?mode=crop&width=660&height=440&quality=70"
    },
    {
      cityName: "Cartagena",
      imageUrl: "https://conbio.org/images/content_static_pages/ICCB2017_Cartagena.jpg"
    },
    {
      cityName: "Copenhagen",
      imageUrl: "https://i.natgeofe.com/n/6f896103-f5b8-426b-aef7-3dcbbee6dcf4/GettyImages1045586638.jpg",
    },
    {
      cityName: "Lisbon",
      imageUrl: "https://www.travelandleisure.com/thmb/LzWpzDihxjffaFmM9TZWCvm9VyY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/lisbon-portugal-LISBONTG0521-c933a0fb669647619fa580f6c602c4c8.jpg"
    },
    {
      cityName: "London",
      imageUrl: "https://cdn.aarp.net/content/dam/aarp/travel/budget_travel/2022/06/1140-big-ben-hero.jpg",
    },
    {
      cityName: "Lyon",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/da/01/47/vieux-lyon.jpg?w=1200&h=-1&s=1"
    },
    {
      cityName: "Marrakech",
      imageUrl: "https://www.muchbetteradventures.com/magazine/content/images/2023/01/marrakech.jpg"
    },
    {
      cityName: "Mexico City",
      imageUrl: "https://i.natgeofe.com/n/73d9e4e3-4884-4e93-ac41-6be6a90079f5/mexico-city-travel%20(1).jpg?w=2880&h=1920"
    },
    {
      cityName: "Milan",
      imageUrl: "https://cdn.britannica.com/32/20032-050-B0CF9E76/Shoppers-Galleria-Vittorio-Emanuele-II-Italy-Milan.jpg"
    },
    {
      cityName: "Montego Bay",
      imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/198571074.jpg?k=9bf91bed563eb8ad068dc7f49143a197cbd6083a8407448cb3522536187da5c0&o=&hp=1"
    },
    {
      cityName: "Oslo",
      imageUrl: "https://res.cloudinary.com/simpleview/image/upload/v1634555140/clients/norway/Oslo_operahus_2_447c01a6-7d1c-4cd6-a87a-0c38e552a893.jpg"
    },
    {
      cityName: "Paris",
      imageUrl: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg",
    },
    {
      cityName: "Prague",
      imageUrl: "https://statemag.state.gov/wp-content/uploads/2023/10/1123pom-3-1.jpg"
    },
    {
      cityName: "Rio de Janeiro",
      imageUrl: "https://i.natgeofe.com/n/560b293d-80b2-4449-ad6c-036a249d46f8/rio-de-janeiro-travel_16x9.jpg"
    },
    {
      cityName: "Rome",
      imageUrl: "https://i.natgeofe.com/n/3012ffcc-7361-45f6-98b3-a36d4153f660/colosseum-daylight-rome-italy_16x9.jpg"
    },
    {
      cityName: "Santorini",
      imageUrl: "https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MjA0MjExMDI2MjY5MzE2NzQ4/what-to-see-in-santorini.jpg"
    },
    {
      cityName: "Tulum",
      imageUrl: "https://oasisblog.nyc3.cdn.digitaloceanspaces.com/2016/04/ik-kil-cenote01.jpg"
    },
    {
      cityName: "Venice",
      imageUrl: "https://lp-cms-production.imgix.net/2021-06/GettyRF_543346423.jpg"
    },
    {
      cityName: "Zurich",
      imageUrl: "https://img.static-kl.com/images/media/506F5E1C-28C1-4555-A238CB9D4AD6039E"
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
