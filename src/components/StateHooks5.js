import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import EffectHook1 from './EffectHook1'
import DataFetching from './DataFetching'

const StateHooks5 = () => {
    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)


    const logMousePosition = (e) =>{
        setMouseX(e.clientX)
        setMouseY(e.clientY)
        console.log('Event still binded')
    }
    useEffect(()=>{
        window.addEventListener('mousemove', logMousePosition)

        return ()=>{
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])
  return (
    <div>
        
        <h1>Mouse position  X - ${mouseX} Y - ${mouseY}</h1>
        <Link to='/effect-hook-1' component = {<DataFetching />}>Effect hook 1</Link>
    </div>
  )
}

export default StateHooks5