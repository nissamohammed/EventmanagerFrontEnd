import React from 'react';
import '../pages/home.css';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import video1 from '../assets/video1.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons/faCirclePlay';
import aboutimg1 from '../assets/aboutimg1.jpg';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons/faRightToBracket';

function Home() {
  const navigate = useNavigate();
  const handleBooking = () => {
    navigate('/login');
  };

  return (
    <>
      <div className="home-container">
        <nav className="navbar">
          <div className="container">
            <h1 className="text-light">Event Manager</h1>
            <ul className="navbar-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="/login"><button className='btn btn-outline-warning'>
              <FontAwesomeIcon icon={faRightToBracket} className='me-2'/>
                Sign-in</button></a></li>
            </ul>
          </div>
        </nav>

        <div className="p-5 text-center homediv1">
          <h1 className="text-light fw-bolder animated-text">
            Unforgettable Events, Perfectly Crafted
          </h1>
          <p className="text-light animated-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Assumenda non.
          </p>
          <button
            className="btn btn-warning p-3 m-4 animated-btn fw-bolder"
            onClick={handleBooking}
          >
            Book Tickets
          </button>
        </div>
      </div>

      <section className="about-section">
        <div className="about-container text-center text-md-start">
          <div className="content p-3 m-3">
            <h1 className="text-light mb-5">About The <span className="text-warning">Event</span></h1>
            <div className="row">
              <div className="col-md-6 col-lg-5">
                <img src={aboutimg1} alt="Event" className="img-fluid rounded" />
              </div>
              <div className="col-md-6 col-lg-7">
                <p className="about-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et, optio labore quisquam
                  consectetur, amet aliquid maiores nulla ipsa est numquam quia officia blanditiis, nisi
                  repellat! Modi eligendi consequuntur perspiciatis!
                </p>
                <div className="d-flex justify-content-between align-items-start mt-4">
                  <div>
                    <h4 className="text-light">WHERE</h4>
                    <p>Downtown Conference Center, New York</p>
                  </div>
                  <div>
                    <h4 className="text-light">WHEN</h4>
                    <p>Monday to Wednesday<br />10-12 December</p>
                  </div>
                </div>
                <button className="btn btn-outline-warning mt-4">Book Tickets</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="video-section">
        <video src={video1} autoPlay loop muted className="video-bg" />
        <div className="video-content">
          <button className="btn btn-transparent text-warning px-3 m-3 fw-bolder fs-2 rounded-5">
            <FontAwesomeIcon icon={faCirclePlay} size="3x" beat />
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
