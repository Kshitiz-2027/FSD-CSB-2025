import React from 'react'
import './Profile.css'

function Profile({data}) {
  return (
    <div className="parent">
      <h3>Profile Page</h3>
      <h3>Name: {data.name}</h3>
      <h3>Branch : {data.branch}</h3>
      <h3> Section : {data.section}</h3>
      <h3>College: {data.college}</h3>
    </div>
  )
}

export default Profile
