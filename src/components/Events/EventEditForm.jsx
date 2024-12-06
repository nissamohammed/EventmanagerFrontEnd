import React, { useEffect, useState } from 'react'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons/faPenToSquare';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { editEventApi } from '../../services/allApi';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function EventEditForm({ items }) {
    const [show, setShow] = useState(false);
    const [token, settoken] = useState("");
    const [eventdetails, seteventdetails] = useState({
        id: items?._id,
        title: items?.title,
        description: items?.description,
        date: items?.date,
        time: items?.time,
        location: items?.location
    })
    console.log(eventdetails);
    console.log(token);

    const handleClose = () => {
        setShow(false);
        handleClose1()
    }
    const handleShow = () => setShow(true);
    const handleClose2 = () => {
        setShow(false);
    }
    const handleClose1 = () => {
        seteventdetails({
            id: items._id,
            title: items.title,
            description: items.description,
            date: items.date,
            time: items.time,
            location: items.location
        })

        if (key == 0) {
            setkey(1)
        } else {
            setkey(0)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { id, title, description, date, time, location } = eventdetails
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
            if (token) {
                const reqHeader = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`//for token authentication 
                }
                const result = await editEventApi(id, reqBody, reqHeader)
                console.log(result);
                if (result.status == 200) {
                    alert('Event Updated successfully !!!!!!')
                    handleClose2()
                }
            } else {
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
            <FontAwesomeIcon icon={faPenToSquare} className='text-light ms-2' onClick={handleShow} />
            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Title: {items?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex justify-content-center align-items-center'>
                    <Row>
                        <Col sm={12} md={12}>
                            <form className="event-form">
                                <h2> Edit Event</h2>
                                <div className="form-group">
                                    <label htmlFor="title">Event Title</label>
                                    <input
                                        id="title"
                                        type="text"
                                        placeholder="Enter event title"
                                        value={eventdetails.title}
                                        onChange={(e) => seteventdetails({ ...eventdetails, title: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <textarea
                                        id="description"
                                        placeholder="Enter event description"
                                        value={eventdetails.description}
                                        onChange={(e) => seteventdetails({ ...eventdetails, description: e.target.value })}
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
                                            onChange={(e) => seteventdetails({ ...eventdetails, date: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="time">Time</label>
                                        <input
                                            id="time"
                                            type="time"
                                            value={eventdetails.time}
                                            onChange={(e) => seteventdetails({ ...eventdetails, time: e.target.value })}
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
                                        onChange={(e) => seteventdetails({ ...eventdetails, location: e.target.value })}
                                        required
                                    />
                                </div>
                            </form>

                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleClose1}>
                        Cancel
                    </Button>
                    <Button variant="success" type="button" onClick={handleSubmit}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
      </>
    )
}

export default EventEditForm