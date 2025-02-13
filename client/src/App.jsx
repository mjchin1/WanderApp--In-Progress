import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import TripsPage from './components/TripsPage'
import Navigations from './components/Navigations'
import ActivitiesPage from './components/ActivitiesPage'
import SingleActivity from './components/SingleActivity'
import ArrivalsPage from './components/ArrivalsPage'
import DeparturesPage from './components/DeparturesPage'
import SingleArrival from './components/SingleArrival'
import SingleTrip from './components/SingleTrip'
import SingleDeparture from './components/SingleDeparture'
import AddArrivalForm from './components/AddArrivalForm'
import AddDepartureForm from './components/AddDepartureForm'
import AddActivityForm from './components/AddActivityForm'
import AddTripForm from './components/AddTripForm'
import DestinationsPage from './components/DestinationsPage'
import ActivityTypes from './components/ActivityTypes'
import ActivitySearchBar2 from './components/ActivitySearchBar2'
import PlacesSearchBar2 from './components/PlacesSearchBar2'
import PlacePhoto from './components/PlacePhoto'
import PlacePhoto2 from './components/PlacePhoto2'
import './App.css'
import moment from 'moment'

function App() {

  const [arrival, setArrival] = useState({});
  const [arrivals, setArrivals] = useState([]);
  const [trip, setTrip] = useState({});
  const [departure, setDeparture] = useState({});
  const [departures, setDepartures] = useState([])
  const [activity, setActivity] = useState({});
  const [destination, setDestination] = useState("");
  const [destinationPic, setDestinationPic] = useState("");
  const [trips, setTrips] = useState([])
  const [activities, setActivities] = useState([])
  const [placeId, setPlaceId] = useState([])
  const [photoName, setPhotoName] = useState([])
  const [googlePhotoUrl, setGooglePhotoUrl] = useState("")

  function formatDate(date) {
    return moment(date).format("MMM Do, YYYY");
  }

  function timeToDigits(time) {
    return time.charAt(0)+ time.charAt(1) + time.charAt(3) + time.charAt(4)
  }

  function formatTime(fourDigitTime){
    let hours24 = parseInt(fourDigitTime.substring(0,2));
    let hours = ((hours24 + 11) % 12) + 1;
    let amPm = hours24 > 11 ? 'pm' : 'am';
    let minutes = fourDigitTime.substring(2);
    return hours + ':' + minutes + amPm;
    };

    const destinations = [

      {
        cityName: "Amsterdam",
        countryName: "Netherlands",
        imageUrl: "https://media.cntraveler.com/photos/62747dc06673cadbbd825338/master/pass/Amsteradm_eirik-skarstein-Vgr-_65__lw-unsplash.jpg"
      },
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
        cityName: "Cape Town",
        countryName: "South Africa",
        imageUrl: "https://www.datocms-assets.com/32623/1708462515-cape_town_south_africa.jpeg"
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
        cityName: "Dublin",
        countryName: "Ireland",
        imageUrl: "https://bucket-files.city-sightseeing.com/blog/2023/02/cityview-dublin-scaled.jpg",
      },
      {
        cityName: "Edinburgh",
        countryName: "United Kingdom",
        imageUrl: "https://i.natgeofe.com/n/f2ffaf35-7c4b-4661-871c-0c1e2d5757d9/old-town-edinburgh-scotland.jpg",
      },
      {
        cityName: "Hanoi",
        countryName: "Vietnam",
        imageUrl: "https://travelpassero.com/wp-content/uploads/2022/12/Day-Tour-from-Hanoi-Vietnam.jpg",
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
        cityName: "Marrakesh",
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
        cityName: "Sydney",
        countryName: "Australia",
        imageUrl: "https://delivery-cqucontenthub.stylelabs.cloud/api/public/content/Sydney-Opera-House-and-Harbour-Bridge-full-page.jpg?v=d0a86cb2"
      },
      {
        cityName: "Tokyo",
        countryName: "Japan",
        imageUrl: "https://www.advantour.com/img/japan/images/tokyo.jpg"
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

  return (
    <>
    <div className="appHeaderContainer">
    <div className="appHeader">
      <h1>Wander</h1>
      <Navigations/>
    </div> <br/> <br/>
    </div>
    


    <div className="appBody">
  
    <Routes>
    <Route path='/trips' element={<TripsPage trips={trips} setTrips={setTrips} trip={trip} setTrip={setTrip} formatDate={formatDate} timeToDigits={timeToDigits} formatTime={formatTime}/> } />
    <Route path='/activities' element={<ActivitiesPage trip={trip} activity={activity} setActivity={setActivity} activities={activities} setActivities={setActivities}/>} />
    <Route path='/activities/:id' element={<SingleActivity activity={activity} setActivity={setActivity} activities={activities} setActivities={setActivities}/>} />
    <Route path='/arrivals' element={<ArrivalsPage trip={trip} arrivals={arrivals} setArrivals={setArrivals} arrival={arrival} setArrival={setArrival} formatDate={formatDate} timeToDigits={timeToDigits} formatTime={formatTime}/>} />
    <Route path='/departures' element={<DeparturesPage setDeparture={setDeparture} setDepartures={setDepartures} departures={departures} trip={trip} formatDate={formatDate} timeToDigits={timeToDigits} formatTime={formatTime} />} />
    <Route path='/arrivals/:id' element={<SingleArrival arrivals={arrivals} setArrivals={setArrivals} arrival={arrival} setArrival={setArrival} formatDate={formatDate} timeToDigits={timeToDigits} formatTime={formatTime}/>}/>
    <Route path='/trip/:id' element={<SingleTrip arrivals={arrivals} trips={trips} setTrips={setTrips} trip={trip} arrival={arrival} departure={departure} formatDate={formatDate} timeToDigits={timeToDigits} formatTime={formatTime}/>} />
    <Route path='/departures/:id' element={<SingleDeparture trip={trip}  departure={departure} setDepartures={setDepartures} departures={departures} formatDate={formatDate} timeToDigits={timeToDigits} formatTime={formatTime}/>} />
    <Route path='/add-arrival' element={<AddArrivalForm trip={trip}/>}/> 
    <Route path='/add-departure' element={<AddDepartureForm trip={trip}/>}/> 
    <Route path='/add-activity' element={<AddActivityForm trip={trip}/>}/> 
    <Route path='/activity-types' element={<ActivityTypes />}/> 
    <Route path='/add-trip' element={<AddTripForm googlePhotoUrl={googlePhotoUrl} setGooglePhotoUrl={setGooglePhotoUrl} photoName={photoName} setPhotoName={setPhotoName} setPlaceId={setPlaceId} placeId={placeId} destinations={destinations} formatDate={formatDate} trip ={trip} setTrip={setTrip} destination={destination} setDestination={setDestination} destinationPic={destinationPic} setDestinationPic={setDestinationPic}/>}/> 
    <Route path='/' element={<DestinationsPage destination={destination} setDestination={setDestination} destinationPic={destinationPic} setDestinationPic={setDestinationPic} setPlaceId={setPlaceId}/>}/> 
    <Route path='/place-search' element={<ActivitySearchBar2 activity={activity} setActivity={setActivity} activities={activities} setActivities={setActivities}/>}/> 
    <Route path='/place-search2' element={<PlacesSearchBar2 setPlaceId={setPlaceId} destination={destination} setDestination={setDestination}/>}/> 
    <Route path='/place-photo' element={<PlacePhoto photoName={photoName} setPhotoName={setPhotoName} setPlaceId={setPlaceId} placeId={placeId} destination={destination} setDestination={setDestination}/>}/> 
    <Route path='/place-photo2' element={<PlacePhoto2 photoName={photoName} setPhotoName={setPhotoName} setPlaceId={setPlaceId} placeId={placeId} destination={destination} setDestination={setDestination}/>}/> 
    <Route path='/activity-search' element={<ActivitySearchBar2/>}/> 
    
    </Routes>
    </div>
    </>
  )
}

export default App
