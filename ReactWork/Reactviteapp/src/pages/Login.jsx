import React , {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useNavigate } from 'react-router-dom';

function Login(logData) {
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();

  const navigate=useNavigate();

  function verification(e){
    e.preventDefault();
    // console.log(logData);
    // alert("Email: "+email + " Password: "+ password);
    if(email===logData.email){
      if(password===logData.password){
      alert("Login Successful");
      navigate('/Dashboard');
      }
      else{
        alert("Invalid Password");
      }
    }
    else{
      alert("Invalid Email");
    }
  }
  return (
    <div>
      <h2>Login Form </h2>
        <form>
            <label htmlFor="email">Email:</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" />
            <br />
            <label for="password">Password:</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" />
            <br />
            <button type="submit" onClick={verification}>Login</button>
        </form>
    </div>
  )
}

export default Login
