import { useNavigate } from 'react-router-dom'

function DestinationsPage({destination, setDestination, destinationPic, setDestinationPic}) {

  const navigate = useNavigate()

  const destinations = [

    {
      cityName: "Barcelona",
      countryName: "Spain",
      imageUrl: "https://www.thetrainline.com/cms/media/5673/alleys_in_gothic_quarter_in_barcelona_spain.jpg?mode=crop&width=660&height=440&quality=70"
    },
    {
      cityName: "Brussels",
      countryName: "Belgium",
      imageUrl: "https://a.storyblok.com/f/95452/5370x3284/892dc3547d/belgium-brussels-grand-place.jpg"
    },
    {
      cityName: "Cartagena",
      countryName: "Colombia",
      imageUrl: "https://conbio.org/images/content_static_pages/ICCB2017_Cartagena.jpg"
    },
    {
      cityName: "Copenhagen",
      countryName: "Denmark",
      imageUrl: "https://media.cntraveler.com/photos/5c002c7745e16c465f875830/2:1/w_2560%2Cc_limit/GettyImages-1011529218.jpg",
    },
    {
      cityName: "Lisbon",
      countryName: "Portugal",
      imageUrl: "https://www.travelandleisure.com/thmb/LzWpzDihxjffaFmM9TZWCvm9VyY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/lisbon-portugal-LISBONTG0521-c933a0fb669647619fa580f6c602c4c8.jpg"
    },
    {
      cityName: "London",
      countryName: "United Kingdom",
      imageUrl: "https://cdn.aarp.net/content/dam/aarp/travel/budget_travel/2022/06/1140-big-ben-hero.jpg",
    },
    {
      cityName: "Lyon",
      countryName: "France",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/da/01/47/vieux-lyon.jpg?w=1200&h=-1&s=1"
    },
    {
      cityName: "Marrakech",
      countryName: "Morocco",
      imageUrl: "https://www.muchbetteradventures.com/magazine/content/images/2023/01/marrakech.jpg"
    },
    {
      cityName: "Mexico City",
      countryName: "Mexico",
      imageUrl: "https://i.natgeofe.com/n/73d9e4e3-4884-4e93-ac41-6be6a90079f5/mexico-city-travel%20(1).jpg?w=2880&h=1920"
    },
    {
      cityName: "Milan",
      countryName: "Italy",
      imageUrl: "https://cdn.britannica.com/32/20032-050-B0CF9E76/Shoppers-Galleria-Vittorio-Emanuele-II-Italy-Milan.jpg"
    },
    {
      cityName: "Montego Bay",
      countryName: "Jamaica",
      imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/198571074.jpg?k=9bf91bed563eb8ad068dc7f49143a197cbd6083a8407448cb3522536187da5c0&o=&hp=1"
    },
    {
      cityName: "Oslo",
      countryName: "Norway",
      imageUrl: "https://res.cloudinary.com/simpleview/image/upload/v1634555140/clients/norway/Oslo_operahus_2_447c01a6-7d1c-4cd6-a87a-0c38e552a893.jpg"
    },
    {
      cityName: "Paris",
      countryName: "France",
      imageUrl: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg",
    },
    {
      cityName: "Prague",
      countryName: "Czech Republic",
      imageUrl: "https://statemag.state.gov/wp-content/uploads/2023/10/1123pom-3-1.jpg"
    },
    {
      cityName: "Rio de Janeiro",
      countryName: "Brazil",
      imageUrl: "https://i.natgeofe.com/n/560b293d-80b2-4449-ad6c-036a249d46f8/rio-de-janeiro-travel_16x9.jpg"
    },
    {
      cityName: "Rome",
      countryName: "Italy",
      imageUrl: "https://i.natgeofe.com/n/3012ffcc-7361-45f6-98b3-a36d4153f660/colosseum-daylight-rome-italy_16x9.jpg"
    },
    {
      cityName: "Santorini",
      countryName: "Greece",
      imageUrl: "https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MjA0MjExMDI2MjY5MzE2NzQ4/what-to-see-in-santorini.jpg"
    },
    {
      cityName: "Tulum",
      countryName: "Mexico",
      imageUrl: "https://oasisblog.nyc3.cdn.digitaloceanspaces.com/2016/04/ik-kil-cenote01.jpg"
    },
    {
      cityName: "Venice",
      countryName: "Italy",
      imageUrl: "https://lp-cms-production.imgix.net/2021-06/GettyRF_543346423.jpg"
    },
    {
      cityName: "Zurich",
      countryName: "Switzerland",
      imageUrl: "https://img.static-kl.com/images/media/506F5E1C-28C1-4555-A238CB9D4AD6039E"
    },
  ];

    function navToForm() {
      navigate("/add-trip")
    }

  return (
    <>
      <h1>Where Are We Going?</h1>
      {destinations.map((destination) => (
        <button className="destinationButton" onClick={() => {
          setDestination(destination.cityName);
          setDestinationPic(destination.imageUrl);
          navToForm();
        }}>
         
         <img className="destinationButtonPic" src={destination.imageUrl}></img> 
         <p className="destinationButtonText bold">{destination.cityName}</p>
         <p className="destinationButtonText notBold">{destination.countryName}</p>
        </button>
      ))}

    </> )
}

export default DestinationsPage 
