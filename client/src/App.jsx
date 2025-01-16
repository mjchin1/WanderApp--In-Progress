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
import PlacesSearchBar from './components/PlacesSearchBar'
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
    <Route path='/' element={<TripsPage trips={trips} setTrips={setTrips} trip={trip} setTrip={setTrip} formatDate={formatDate} timeToDigits={timeToDigits} formatTime={formatTime}/> } />
    <Route path='/activities' element={<ActivitiesPage trip={trip} activity={activity} setActivity={setActivity} activities={activities} setActivities={setActivities}/>} />
    <Route path='/activities/:id' element={<SingleActivity activity={activity} setActivity={setActivity} activities={activities} setActivities={setActivities}/>} />
    <Route path='/arrivals' element={<ArrivalsPage trip={trip} arrivals={arrivals} setArrivals={setArrivals} arrival={arrival} setArrival={setArrival} formatDate={formatDate} timeToDigits={timeToDigits} formatTime={formatTime}/>} />
    <Route path='/departures' element={<DeparturesPage setDeparture={setDeparture} setDepartures={setDepartures} departures={departures} trip={trip} formatDate={formatDate} timeToDigits={timeToDigits} formatTime={formatTime} />} />
    <Route path='/arrivals/:id' element={<SingleArrival arrivals={arrivals} setArrivals={setArrivals} arrival={arrival} setArrival={setArrival} formatDate={formatDate} timeToDigits={timeToDigits} formatTime={formatTime}/>}/>
    <Route path='/trip/:id' element={<SingleTrip trips={trips} setTrips={setTrips} trip={trip} arrival={arrival} departure={departure} formatDate={formatDate} timeToDigits={timeToDigits} formatTime={formatTime}/>} />
    <Route path='/departures/:id' element={<SingleDeparture trip={trip}  departure={departure} setDepartures={setDepartures} departures={departures} formatDate={formatDate} timeToDigits={timeToDigits} formatTime={formatTime}/>} />
    <Route path='/add-arrival' element={<AddArrivalForm trip={trip}/>}/> 
    <Route path='/add-departure' element={<AddDepartureForm trip={trip}/>}/> 
    <Route path='/add-activity' element={<AddActivityForm trip={trip}/>}/> 
    <Route path='/activity-types' element={<ActivityTypes />}/> 
    <Route path='/add-trip' element={<AddTripForm formatDate={formatDate} trip ={trip} setTrip={setTrip} destination={destination} setDestination={setDestination} destinationPic={destinationPic} setDestinationPic={setDestinationPic}/>}/> 
    <Route path='/destinations' element={<DestinationsPage destination={destination} setDestination={setDestination} destinationPic={destinationPic} setDestinationPic={setDestinationPic} setPlaceId={setPlaceId}/>}/> 
    <Route path='/place-search' element={<PlacesSearchBar destination={destination} setDestination={setDestination}/>}/> 
    <Route path='/place-search2' element={<PlacesSearchBar2 setPlaceId={setPlaceId} destination={destination} setDestination={setDestination}/>}/> 
    <Route path='/place-photo' element={<PlacePhoto photoName={photoName} setPhotoName={setPhotoName} setPlaceId={setPlaceId} placeId={placeId} destination={destination} setDestination={setDestination}/>}/> 
    <Route path='/place-photo2' element={<PlacePhoto2 photoName={photoName} setPhotoName={setPhotoName} setPlaceId={setPlaceId} placeId={placeId} destination={destination} setDestination={setDestination}/>}/> 
    </Routes>
    </div>
    </>
  )
}

export default App
