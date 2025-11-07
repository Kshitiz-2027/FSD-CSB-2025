import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Gallery from './components/Gallery.jsx'
// import Statehandling from './components/Statehandling.jsx'
import ImageManipulation from './components/ImageManipulation.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      {/* <h2>Welcome to react Vite</h2> */}
      {/* <Gallery /> */}
      {/* <Statehandling /> */}
      <ImageManipulation />
    </div>
  )
}

export default App
