import React, { useState } from 'react'
import '../TicketBooking/booking.css'
import Navbar from '../Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket } from '@fortawesome/free-solid-svg-icons/faTicket';

function Booking() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        tickets: 1,
      });
    
      const [message, setMessage] = useState("");
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      
    //Booking
      const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(`Thank you, ${formData.name}! Your tickets are booked.`);
        setFormData({ name: "", email: "", phone: "", tickets: 1 });
      };
    
  return (
    <>
    <Navbar/>
    <div className="booking-form mt-5" style={{ maxWidth: "400px", margin: "auto" }}>
    
      <h2 className='text-primary fw-bolder'><FontAwesomeIcon icon={faTicket} style={{color: "#f10404",}} className='me-2'/>Event Ticket Booking</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
          />
        </div>
        <div className="form-group">
          <label>Number of Tickets</label>
          <input
            type="number"
            name="tickets"
            value={formData.tickets}
            onChange={handleChange}
            min="1"
            max="10"
            required
          />
        </div>
        <button type="submit" >Book Tickets</button>
      </form>
      {message && <p style={{ marginTop: "20px", color: "green" }}>{message}</p>}
    </div>
    </>
  )
}

export default Booking