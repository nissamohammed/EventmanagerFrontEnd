
import React, { useEffect, useState } from "react";
import './dashboard.css'
import Navbar from '../components/Navbar'
import { useNavigate } from "react-router-dom";
import { deleteEventApi, userEventsApi } from "../services/allApi";
import EventEditForm from "../components/Events/EventEditForm";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons/faTrashCan";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";

function Dashboard() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]); // List of events
  const [deleteStatus, setdeleteStatus] = useState(false)
  const [user,setuser]= useState("")//setting username on heading
  
  //fetch Events
  const getuserevents = async()=>{
    if(sessionStorage.getItem("token"))
   {
    const token = sessionStorage.getItem("token")
     const reqHeader = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`//for token authentication 
    }
    const result = await userEventsApi(reqHeader)
    setEvents(result.data);
  }
  }

  //delete event
  const handleDelete = async(id)=>{
    const result = await deleteEventApi(id)
    console.log(result);
    if(result.status == 200){
      setdeleteStatus(true)
      alert('Deleted successfully')
    }
  }

 // Handle add new event button click
 const handleAddNew = () => {
  navigate('/events/new')
};

  
  useEffect(()=>{
    getuserevents()
    setdeleteStatus(false)
  },[deleteStatus])

  useEffect(()=>{
    if(sessionStorage.getItem("existingUser")){
      setuser(JSON.parse(sessionStorage.getItem("existingUser")).username)
    }
  },[])

 
  return (
    <>
    <Navbar/>
    <div className="dashboard">
  <header className="dashboard-header">
    <h4>
      Welcome{" "}
      <span className="text-danger fw-bolder" style={{ textTransform: "capitalize" }}>
        {user}
      </span>{" "}
      <em>.</em>
    </h4>
    <h1 className="fw-bolder">Event Management Dashboard</h1>
  </header>

  <button onClick={handleAddNew} className="add-new-btn">
  <FontAwesomeIcon icon={faPlus} className="me-2"/> Add New Event
  </button>
  <h2>All Events</h2>
  {/* Events List */}
  <div className="events-list">
   
    {events?.length > 0 ? (
      events.map((event) => (
        <div className="event-card" key={event?._id}>
          <h3 style={{textTransform:'capitalize'}}>{event?.title}</h3>
          <p style={{textTransform:'capitalize'}}>{event?.description}</p>
          <p className="event-date">
            {event?.date} at {event?.time}
          </p>
          <p className="location" style={{textTransform:'capitalize'}}>Location: {event?.location}</p>
<div className="d-flex justify-content-evenly ">
          <button className="edit-btn">
          Edit  <EventEditForm items={event} />
          </button>
          <button onClick={() => handleDelete(event?._id)} className="delete-btn">
           Delete <FontAwesomeIcon icon={faTrashCan} style={{ color: "#fff" }} size="1x" className="ms-2"/>
          </button>
          </div>
        </div>
      ))
    ) : (
      <p>No events found. Add your first event!</p>
    )}
  </div>
</div>


    </>
  )
}

export default Dashboard