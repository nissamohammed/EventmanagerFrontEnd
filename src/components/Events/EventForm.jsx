import React, { useEffect, useState } from "react";
import './eventform.css';
import Navbar from '../Navbar';
import { addEventApi } from "../../services/allApi";
import { CancelToken } from "axios";

function EventForm() {
  const [token, settoken] = useState("");
  const [eventdetails, seteventdetails] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: ""
  })
  console.log(eventdetails);
console.log(token);

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { title, description, date, time, location } = eventdetails
    if (!title || !description || !date || !time || !location) {
      alert('please fill the form completely')
    } else {
        //addevents
        const reqBody = new FormData()
        reqBody.append("title", title)
        reqBody.append("description", description)
        reqBody.append("date", date)
        reqBody.append("time", time)
        reqBody.append("location", location)
        console.log(token);
        console.log(reqBody);
       // const token = sessionStorage.getItem("token")
        if(token){
          const reqHeader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`//for token authentication 
          }
         const result = await addEventApi(reqBody,reqHeader)
          console.log(result);
          if (result.status == 200) {
            alert('New Event Created successfully')
          }
        }else{
          alert('please login')
          }
    //addeventsend 
    }
  };
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      settoken(sessionStorage.getItem("token"))
    }
  }, [])
  console.log(token);

  return (
    <>
      <Navbar />
      <div className="event-form-container">
        <form className="event-form">
          <h2> Create Event</h2>
          <div className="form-group">
            <label htmlFor="title">Event Title</label>
            <input
              id="title"
              type="text"
              placeholder="Enter event title"
              value={eventdetails.title}
              onChange={(e) => seteventdetails({...eventdetails,title:e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Enter event description"
              value={eventdetails.description}
              onChange={(e) => seteventdetails({...eventdetails,description:e.target.value })}
              rows="4"
              required
            ></textarea>
          </div>
          <div className="form-group-inline">
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                id="date"
                type="date"
                value={eventdetails.date}
                onChange={(e) => seteventdetails({...eventdetails,date:e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input
                id="time"
                type="time"
                 value={eventdetails.time}
                onChange={(e) => seteventdetails({...eventdetails,time:e.target.value })}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              id="location"
              type="text"
              placeholder="Enter event location"
             value={eventdetails.location}
              onChange={(e) => seteventdetails({...eventdetails,location:e.target.value })}
              required
            />
          </div>
          <button type="button" className="btn-submit" onClick={handleSubmit}>
            Create Event
          </button>
        </form>
      </div>

    </>
  )
}

export default EventForm