import React, { useState } from "react";

function Registration({ regData }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const getData = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }

    const data = { name, age, email, password };

    // if you still want to use regData from parent
    // if (regData) regData(data);

    try {
      const server = await fetch("http://172.16.45.91:7878/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const jsonresponse = await server.json();
      alert(jsonresponse.msg);
    } catch (err) {
      console.error(err);
      alert("Something went wrong while registering!");
    }
  };

  return (
    <div>
      <form onSubmit={getData}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            onChange={(e) => setAge(e.target.value)}
            type="number"
            className="form-control"
            id="age"
            placeholder="Enter age"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default Registration;
