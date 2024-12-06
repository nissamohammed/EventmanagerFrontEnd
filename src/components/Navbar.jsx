import React from 'react'
import '../components/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <h1 className='text-light'>Event Manager</h1>
          <ul>
            <li><Link to={'/dashboard'}>Dashboard</Link></li>
            <li><Link to={'/events'}>Events</Link></li>
            <li><Link to={'/events/new'}>Create Event</Link></li>
            <li><Link to={'/'}>Logout</Link></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar