import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import TripsPage from './components/TripsPage'
import Navigations from './components/Navigations'
import ActivitiesPage from './components/ActivitiesPage'
import './App.css'

function App() {

  return (
    <>

    <Navigations/>
    <Routes>
    <Route path='/' element={<TripsPage/>} />
    <Route path='/activities' element={<ActivitiesPage/>} />
    </Routes>
    </>
  )
}

export default App
