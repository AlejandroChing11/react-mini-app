import React from 'react'
import { useState } from 'react'
function Lifecycle() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  return (
    <div>
      <h1>clicks counter 1: {counter1}</h1>
      <h1>click counter 2: {counter2}</h1>
      <button onClick={() => setCounter1 + 1}>
        Increment counter 1
      </button>
      <button onClick={() => setCounter2 + 1}>
        Increment counter 2
      </button>
    </div>
  )
}

export default Lifecycle