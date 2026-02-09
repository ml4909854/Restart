import React, { useState } from 'react'

const UseState = () => {
    const [state , setState] = useState("")
   
    function shoot(){
        setState("Goal successfull")
    }
    
  return (
    <div>
        <h1>{state}</h1>
<button onClick={shoot}>Take a shot</button>

    </div>
  )
}

export default UseState