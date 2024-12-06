import React, { useEffect, useState } from "react";
import './eventlist.css'
import Navbar from '../Navbar'
import { allEventsApi } from "../../services/allApi";
import { useNavigate } from "react-router-dom";

function EventList() {
  const navigate = useNavigate()
  const [events, setEvents] = useState([]);
  const [istoken ,setistoken] = useState("");//for Authentication
  const[searchkey,setsearchkey]=useState("")//search box


  //All user event Listing
  const getAllEvents = async()=>{
    if(sessionStorage.getItem("token")){
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`//for token Authentication 
    }
    const result = await allEventsApi(searchkey,reqHeader)
     console.log(result);
     if(result.status == 200){
      setEvents(result.data)
     }
  }
  }

//Ticket Booking Button
const handlebooking=()=>{
navigate('/ticketbooking')
}

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setistoken(sessionStorage.getItem("token"))
    }
  }, []);

  useEffect(()=>{
    getAllEvents()
  },[searchkey])
  console.log(searchkey);

  return (
    <>
    <Navbar/>
    <div className="event-list-container">
  <div className="search-bar d-flex flex-column align-items-start p-3">
    <h1 className="title text-primary fw-bolder">All Event List</h1>
    <input
      type="text"
      placeholder="Search By Place"
      className="form-control search-input shadow-sm"
      onChange={(e) => setsearchkey(e.target.value)}
    />
  </div>

  <div className="event-list">
    {istoken ? (
      events?.length > 0 ? (
        events.map((event) => (
          <div className="event-card shadow-sm" key={event?._id}>
            <h3 className="event-title text-success fw-bolder" style={{textTransform:'capitalize'}}>{event?.title}</h3>
            <p className="event-description" style={{textAlign:'justify'}}>{event?.description}</p>
            <p className="event-date">Date : {event?.date}</p>
            <p className="event-location" style={{textTransform:'capitalize'}}>Venue : {event?.location}</p>
            <div className="text-center">
            <button className="btn btn-danger" onClick={handlebooking}>Book Tickets</button>
            </div>
          </div>
        ))
      ) : (
        <p className="no-events-message">No events found.</p>
      )
    ) : (
      <p className="login-message">Please login to view events.</p>
    )}
  </div>
</div>

    </>
  )
}

export default EventList