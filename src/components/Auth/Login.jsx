import React, { useState } from "react";
import "./login .css";
import { Link, useNavigate } from "react-router-dom";
import { loginApi } from "../../services/allApi";

function Login() {
  
  const navigate = useNavigate();//Naviagttion

  const [userdetails, setuserdetails] = useState({
    email:"",
    password:""
      })
 console.log(userdetails);

 //Login
  const handleSubmit = async (e) => {
    e.preventDefault();
  const {email , password} = userdetails;
  if(!email || !password){
    alert('please fill the fields completely')
  }
  else{
    const result = await loginApi({email,password})
    console.log(result);
    if(result.status==200){
      alert('login successfull')
      sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
      sessionStorage.setItem("token", result.data.token)
      setuserdetails({
        email: "",
        password: ""
      })
      setTimeout(()=>{
        navigate('/dashboard')
      },500)
    }else{
      alert(result.response.data)
    }
  }
  };
  return (
    <>
    <div className="login-container">
  <form className="login-form" onSubmit={handleSubmit}>
    <h2>Login</h2>
    <input
      type="email"
      placeholder="Email"
      onChange={(e) => setuserdetails({ ...userdetails, email: e.target.value })}
    />
    <input
      type="password"
      placeholder="Password"
      onChange={(e) => setuserdetails({ ...userdetails, password: e.target.value })}
    />
    <button type="submit">Login</button>
    <p>
      New User? Click here to <Link to="/register">Register</Link>
    </p>
  </form>
</div>
    </>
  )
}

export default Login