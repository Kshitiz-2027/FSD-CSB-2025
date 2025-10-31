import { useState } from 'react'
import React from 'react'


function Statehandling() {
    const [counter, setCounter] = useState(20);

function IncreaseCounterValue(){
    setCounter(counter + 2);
}
  return (
    <div>
        <h2>Counter value is : {counter}</h2>
        <button onClick={IncreaseCounterValue}>Increament Counter </button>
        <button onClick={() => setCounter(counter - 2)}>Decreament Counter </button>
    </div>
  )
}

export default Statehandling
