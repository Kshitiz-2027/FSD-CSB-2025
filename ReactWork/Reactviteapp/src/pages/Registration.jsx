import React, { useState } from 'react'


function registration({regData}) {
  const[name,setName]=useState();
  const[age,setAge]=useState();
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  function getData(e){
    e.preventDefault();
    const data = {
      name,
      age,
      email,
      password
    }
    regData(data);
    console.log(data);
    // alert("Hiii "+name + " Your age is "+age + email + password);
  }
  return (
    <div>
      <form>
        <div class="form-group">
            <label for="name">Name</label>
            <input onChange={(e) => setName(e.target.value)} type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name"/> 
        </div>
        <div class="form-group">
            <label for="age">Age</label>
            <input onChange={(e) => setAge(e.target.value)} type="number" class="form-control" id="age" aria-describedby="emailHelp" placeholder="Enter age"/> 
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/> 
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Confirm Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password"/>
        </div>
        <button type="submit" class="btn btn-primary" onClick={getData}>Register</button>
      </form>
    </div>
  )
}

export default registration
