import React from 'react'
import { useState } from 'react'
import StateHook2 from './StateHook2'
import { Link } from 'react-router-dom'

const StateHook1 = () => {
    const [count, setCount] = useState(0)
    /**
     * Updating state that is dependent on the previous state
     * Use arrow function to return updated value in setCount
     */
  return (
    <div>
        <button style={{padding: '1rem'}}
        //Use arrow function to set state dependent on a previous state
        onClick={() => setCount((count) => count + 1)}
        >Counting {count}</button>
        <Link to='/statehook2' component = {<StateHook2/>}>Sate hook 2</Link>
    </div>
  )
}

export default StateHook1