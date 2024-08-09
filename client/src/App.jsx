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
import './App.css'

function App() {

  const [arrival, setArrival] = useState({})
  const [arrivals, setArrivals] = useState([])
  const [trip, setTrip] = useState({})
  const [departure, setDeparture] = useState({})
  const [activity, setActivity] = useState({})

  return (
    <>

    <Navigations/>
    <Routes>
    <Route path='/' element={<TripsPage trip={trip} setTrip={setTrip}/>} />
    <Route path='/activities' element={<ActivitiesPage activity={activity} setActivity={setActivity}/>} />
    <Route path='/activities/:id' element={<SingleActivity activity={activity} setActivity={setActivity}/>} />
    <Route path='/arrivals' element={<ArrivalsPage arrivals={arrivals} setArrivals={setArrivals} arrival={arrival} setArrival={setArrival}/>} />
    <Route path='/departures' element={<DeparturesPage setDeparture={setDeparture} departure={departure} trip={trip}/>} />
    <Route path='/arrivals/:id' element={<SingleArrival arrivals={arrivals} setArrivals={setArrivals} arrival={arrival} setArrival={setArrival}/>}/>
    <Route path='/trip/:id' element={<SingleTrip trip={trip}/>} />
    <Route path='/departures/:id' element={<SingleDeparture trip={trip}  departure={departure} setDeparture={setDeparture} />} />
    </Routes>
    </>
  )
}

export default App
