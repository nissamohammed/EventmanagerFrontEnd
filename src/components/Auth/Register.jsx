import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { registerApi } from '../../services/allApi';
import "./login .css";
function Register() {
  const navigate = useNavigate()//Naviagtion
  const [userdetails, setuserdetails] = useState({
username:"",
email:"",
password:""
  })
console.log(userdetails);

//Register
  const handleSubmit = async()=>{
    const {username,email,password} = userdetails;
    if(!username || !email || !password){
      alert('please fill the form completely')
    }
    else{
      const result = await registerApi(userdetails);
      console.log(result);
      if(result.status==200){
        alert('Registration successfull');
        navigate('/login');
      }
    }
  }
  return (
    <>
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="username"
          placeholder="Username"    
          onChange={(e) =>setuserdetails({...userdetails,username:e.target.value})}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>setuserdetails({...userdetails,email:e.target.value})}
        />
        <input
          type="password"
          placeholder="Password" 
          onChange={(e) => setuserdetails({...userdetails,password:e.target.value})}
        />
        <button type="submit">Register</button>
        <p>Already a User? Click here to <Link to={'/login'}>Login</Link></p>
      </form>
    </div>
    </>
  )
}

export default Register