import React from 'react'
import { Link } from 'react-router-dom'
function MainLayout() {
  return (
    <div>
      <nav>
        <Link to='/Login'>Login</Link>
        <Link to='/Registration'>Registration</Link>
        <Link to='/Dashboard'>Dashboard</Link>
      </nav>
    </div>
  )
}

export default MainLayout
