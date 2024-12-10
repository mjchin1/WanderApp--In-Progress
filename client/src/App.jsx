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

  function formatDate(date) {
    return moment(date).format("MMM Do, YYYY");
  }

  return (
    <>
    <div className="appHeaderContainer">
    <div className="appHeader">
      <h1>Wander</h1>
    </div>
    </div>
    
    <Navigations/> <br/> <br/>

    <div className="appBody">
  
    <Routes>
    <Route path='/' element={<TripsPage trips={trips} setTrips={setTrips} trip={trip} setTrip={setTrip} formatDate={formatDate}/> } />
    <Route path='/activities' element={<ActivitiesPage trip={trip} activity={activity} setActivity={setActivity} activities={activities} setActivities={setActivities}/>} />
    <Route path='/activities/:id' element={<SingleActivity activity={activity} setActivity={setActivity} activities={activities} setActivities={setActivities}/>} />
    <Route path='/arrivals' element={<ArrivalsPage trip={trip} arrivals={arrivals} setArrivals={setArrivals} arrival={arrival} setArrival={setArrival} formatDate={formatDate}/>} />
    <Route path='/departures' element={<DeparturesPage setDeparture={setDeparture} setDepartures={setDepartures} departures={departures} trip={trip} formatDate={formatDate}/>} />
    <Route path='/arrivals/:id' element={<SingleArrival arrivals={arrivals} setArrivals={setArrivals} arrival={arrival} setArrival={setArrival} formatDate={formatDate}/>}/>
    <Route path='/trip/:id' element={<SingleTrip trips={trips} setTrips={setTrips} trip={trip} arrival={arrival} departure={departure} formatDate={formatDate}/>} />
    <Route path='/departures/:id' element={<SingleDeparture trip={trip}  departure={departure} setDepartures={setDepartures} departures={departures} formatDate={formatDate} />} />
    <Route path='/add-arrival' element={<AddArrivalForm trip={trip}/>}/> 
    <Route path='/add-departure' element={<AddDepartureForm trip={trip}/>}/> 
    <Route path='/add-activity' element={<AddActivityForm trip={trip}/>}/> 
    <Route path='/activity-types' element={<ActivityTypes />}/> 
    <Route path='/add-trip' element={<AddTripForm trip ={trip} setTrip={setTrip} destination={destination} setDestination={setDestination} destinationPic={destinationPic} setDestinationPic={setDestinationPic}/>}/> 
    <Route path='/destinations' element={<DestinationsPage destination={destination} setDestination={setDestination} destinationPic={destinationPic} setDestinationPic={setDestinationPic}/>}/> 
    
    </Routes>
    </div>
    </>
  )
}

export default App
