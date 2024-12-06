import './App.css'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import EventForm from './components/Events/EventForm'
import EventList from './components/Events/EventList'
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Route, Routes } from 'react-router-dom'
import React from "react";
import Dashboard from './pages/Dashboard';
import Pagenotfound from './pages/Pagenotfound';
import Home from './pages/Home'
import EventEditForm from './components/Events/EventEditForm'
import Booking from './components/TicketBooking/Booking'
function App() { 
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/events" element={<EventList />} />
      <Route path="/events/new" element={<EventForm />} />
      <Route path="/editevents" element={<EventEditForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ticketbooking" element={<Booking />} />
      <Route path='*' element={<Pagenotfound/>}/>
    </Routes>
     
    </>
  )
}

export default App
