import React, { useEffect, useState } from 'react'

const IntervalHookCounter = () => {
    const [counter, setCounter] = useState(0)

    
    const tick = (counter) =>{
        setCounter(() =>counter + 1)
    }
    useEffect(()=>{
        console.log('call effect')
        const interval = setInterval(()=> tick(counter), 1000)

        return () => {clearInterval(interval)}
    }, [counter])
  return (
    <div>{counter}</div>
  )
}

export default IntervalHookCounter