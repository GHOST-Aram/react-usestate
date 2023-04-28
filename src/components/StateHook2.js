import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import StateHook3 from './StateHook3'

/**
 * Updating states of object variables
 * Use Spread operator
 */

const StateHook2 = () => {
  // Declaring states for objects
  const [name, setName] = useState({firstName:'', lastName:'' })
  return (
    <div>
        <form action="">
          <Link to='/statehook3'>SateHook 3</Link>
            <input type="text" 
            // Use Spread operator to update object states, 
            // use state does not merge the objects properties automatically during update
            onChange={(e) => setName( {...name, firstName: e.target.value})} value={name.firstName} />
            <input type="text" 
            onChange={(e) => setName( {...name, lastName: e.target.value})} value={name.lastName} />

            <h1>FirstName: {name.firstName}</h1>
            <h1>LastName: {name.lastName}</h1>
        </form>
    </div>
  )
}

export default StateHook2