import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import TripsPage from './components/TripsPage'
import './App.css'

function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<TripsPage/>} />
    </Routes>
    </>
  )
}

export default App
