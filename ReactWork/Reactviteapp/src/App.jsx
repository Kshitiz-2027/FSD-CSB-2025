import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginS from './pages/login'
import Registration from './pages/registration'
import Dashboard from './pages/dashboard'
import MainLayout from './pages/MainLayout'
// import Gallery from './components/Gallery.jsx'
// import Statehandling from './components/Statehandling.jsx'
// import ImageManipulation from './components/ImageManipulation.jsx'

function App() {
  const[data,setData]=useState();
  // const [count, setCount] = useState(0)

  return (
    <div>
    {/* // <div className='container'> */}
      {/* <h2>Welcome to react Vite</h2> */}
      {/* <Gallery /> */}
      {/* <Statehandling /> */}
      {/* <ImageManipulation /> */}
      <BrowserRouter>
       <Routes>
        <Route path='/Login' element={<LoginS logData={data} />} />
        <Route path='/Registration' element={<Registration regData={setData} />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/' element={<MainLayout />} />
       </Routes>
      </BrowserRouter>
    <h2>{JSON.stringify(data)}</h2>
    </div>

  )
}

export default App
