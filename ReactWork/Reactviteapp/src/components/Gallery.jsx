import React from 'react'
import Profile from './Profile'
import './Gallery.css'

function Gallery() {
  const students = [{
    name: "Kshitiz",
    branch: "Computer Science",
    section: "A",
    college: "XYZ University"
  },
  {
    name: "Jane Smith",
    branch: "Electrical Engineering",
    section: "C",
    college: "DEF University"
  },
  {
    name: "Alice Johnson",
    branch: "Civil Engineering",
    section: "D",
    college: "GHI University"
  }];
  return (
    <div className='gallery'>
      {/* <div>
        <Profile name="Kshitiz" branch="Computer Science" section="A" college="XYZ University"/>
      </div>
       <div>
        <Profile name="John Doe" branch="Mechanical Engineering" section="B" college="ABC University"/>
      </div> */}
      {/* <Profile data ={students} /> */}
      {
        students.map((student, index) => (
          <Profile data={student} key={index} />
        ))
      }
    </div>
  )
}

export default Gallery
