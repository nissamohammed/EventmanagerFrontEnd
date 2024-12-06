import React from 'react'
import '../components/navbar.css';
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <h1 className='text-light'>Event Manager</h1>
          <ul>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/events/new">Create Event</a></li>
            <li><a href="/">Logout</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar