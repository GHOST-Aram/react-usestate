import React, { useEffect, useState } from 'react'

const StateHooks5 = () => {
    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)


    const logMousePosition = (e) =>{
        setMouseX(e.clientX)
        setMouseY(e.clientY)
        console.log('Event still binded')
    }
    useEffect(()=>{
        console.log('Event added, use Effect called')
        window.addEventListener('mousemove', logMousePosition)

        return ()=>{
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])
  return (
    <div>
        
        <h1>Mouse position  X - ${mouseX} Y - ${mouseY}</h1>
    </div>
  )
}

export default StateHooks5