import React, {useEffect, useState}from 'react'

function dashboard() {
  const[counter,setCounter]=useState(10);
  const[pointer,setPointer]=useState(100);
  useEffect(()=>{
    console.log(counter)
    console.log(pointer)
},[counter,pointer])
  return (
    <div>
     <h2>Counter Value = {counter}</h2>
      <h2>Pointer Value = {pointer}</h2>
      <button onClick={()=>setCounter(counter+10)}>Counter</button>
      <button onClick={()=>setPointer(pointer-10)}>Pointer</button>
    </div>
  )
}

export default dashboard
