import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [data,setData] = useState()
  const[loader,setLoader] = useState(false);

  async function getData(){
    try{
      setLoader(true);
    const serverdata = await fetch("http://localhost:4005/data");
    const json = await serverdata.json();
    setData(json.msg);
  }catch(err){
    console.log(err);
  }finally{
    setLoader(false);
  }
  }

  return (
    <>
      <h2>Fetching Data from Node Server</h2>
      <button onClick={getData}>Fetch Data</button>
      {
        loader ? <h3 style={{color:"blue",backgroundColor:"lightgray",}}>Data is fetching...</h3> : ("")
      }
      {JSON.stringify(data) }
    </>
  )
}


export default App
