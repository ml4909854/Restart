import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [count , setCount] = useState(0)
    
    useEffect(()=>{
        let timer = setInterval(()=>{
            setCount(count+1)
        }, 1000)
        return ()=>clearInterval(timer)
    })
  return (


    <div>The result is {count}</div>
  )
}

export default UseEffect