import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons/faCalendarDays';

function Footer() {
  return (
   <>
      <div className="container-fluid w-100 text-dark shadow bg-warning">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-4 col-sm-12">
            <div className="d-flex p-3 ms-md-5 mt-5 justify-content-center justify-content-md-start">
            <FontAwesomeIcon icon={faCalendarDays} className="mt-1" size="2x" />
              <h3 className="ms-3 " style={{ fontSize: '35px' }}>Event Manager</h3>
            </div>
            <p className="py-2 ms-md-5 text-center text-md-start text-dark">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio commodi perferendis
              dolor numquam alias pariatur qui nesciunt, beatae quasi atque laborum corrupti natus veniam
              architecto voluptatem blanditiis dolores? Modi, laboriosam.
            </p>
          </div>

          {/* Links Section */}
          <div className="col-md-2 col-sm-6 text-center text-md-start">
            <h5 className="p-5 ms-md-1 mt-4 fw-bolder">Link</h5>
            <h6 className="ms-md-5">Home Page</h6>
            <h6 className="ms-md-5">About</h6>
            <h6 className="ms-md-5">Contact</h6>
          </div>

          {/* Guides Section */}
          <div className="col-md-2 col-sm-6 text-center text-md-start">
            <h5 className="p-5 ms-md-1 mt-4 fw-bolder">Events</h5>
            <h6 className="ms-md-5">Conference Meetings</h6>
            <h6 className="ms-md-5">Concerts</h6>
            <h6 className="ms-md-5">Party</h6>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 col-sm-12 p-3">
            <h5 className="p-5 ms-md-3 mt-1 text-center text-md-start fw-bolder">Contact Us</h5>
            <div className="d-flex flex-column flex-md-row align-items-center ms-md-5 justify-content-center">
              <input
                type="text"
                placeholder="Enter your E-mail Id"
                className="form-control w-75 w-md-50 ms-2"
              />
              <button className="btn btn-dark ms-md-3 mt-3 mt-md-0">Subscribe</button>
            </div>
            <div className="d-flex mt-4 justify-content-center justify-content-md-start ms-md-5">
              <FontAwesomeIcon icon={faInstagram} size="2x" className="mx-3" />
              <FontAwesomeIcon icon={faXTwitter} size="2x" className="mx-3" />
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="mx-3" />
              <FontAwesomeIcon icon={faFacebook} size="2x" className="mx-3" />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer