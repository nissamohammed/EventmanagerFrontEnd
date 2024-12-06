import React from 'react'
import { Link } from 'react-router-dom'
import pimg from '../assets/pimg1.png'
function Pagenotfound() {
  return (
    <>
    <div className="d-flex justify-content-center align-items-center container-fluid" style={{height: "100vh"}}>
    <div className="row w-100">
        <div className="col-md-2"></div>
        <div className="col-md-8 d-flex justify-content-center align-items-center flex-column">
          <img src={pimg} alt="no image" width={'100%'}  height={'450px'}/>
            <h1 className="text-danger mt-3">Look Like You're Lost</h1>
            <Link to={'/'}><button className="btn btn-danger mt-4"><i className="fa-solid fa-backward me-2"></i>Back Home</button></Link>
        </div>
        <div className="col-md-2"></div>
    </div>
</div>

    </>
  )
}

export default Pagenotfound