import React, { useEffect, useState } from 'react'

const IntervalHookCounter = () => {
    const [counter, setCounter] = useState(0)

    
    useEffect(()=>{
        const tick = (counter) =>{
            setCounter(() =>counter + 1)
        }
        console.log('call effect')
        const interval = setInterval(()=> tick(counter), 1000)

        return () => {clearInterval(interval)}
    })
  return (
    <div>{counter}</div>
  )
}

export default IntervalHookCounter