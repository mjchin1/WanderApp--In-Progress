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
import './App.css'

function App() {

  const [arrival, setArrival] = useState({})
  const [arrivals, setArrivals] = useState([])
  const [trip, setTrip] = useState({})

  return (
    <>

    <Navigations/>
    <Routes>
    <Route path='/' element={<TripsPage trip={trip} setTrip={setTrip}/>} />
    <Route path='/activities' element={<ActivitiesPage/>} />
    <Route path='/activity' element={<SingleActivity/>} />
    <Route path='/arrivals' element={<ArrivalsPage arrivals={arrivals} setArrivals={setArrivals} arrival={arrival} setArrival={setArrival}/>} />
    <Route path='/departures' element={<DeparturesPage/>} />
    <Route path='/arrivals/:id' element={<SingleArrival arrivals={arrivals} setArrivals={setArrivals} arrival={arrival} setArrival={setArrival}/>}/>
    <Route path='/trip/:id' element={<SingleTrip trip={trip}/>} />
    </Routes>
    </>
  )
}

export default App
