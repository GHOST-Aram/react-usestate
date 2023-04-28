import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import StateHooks4 from './StateHooks4'

const StateHook3 = () => {
    /**
     * Updating array states
     * Use Spread operator
     */

    const [users, setUsers] = useState([]) //Initialize as empty array

    //User name state
    const [user, setUser] = useState('')
  return (
    <div>
        {/* Getting users' names from user input */}
        <form action="" onSubmit={(e) =>{
            e.preventDefault()

            //Use spread operator to update arrays states that depend on preveus array
            setUsers([...users, user])
        }
        }> 
            <input type="text" value={user} onChange={(e) => setUser(e.target.value)}/>
            <input type="submit" value="Submit" />
        </form>
        {
            users.map((user, index) => <li key={index}>{user}</li>)
        }
        <Link to='/statehooks4' component ={<StateHooks4 />}><button>StateHook 4</button></Link>
    </div>
  )
}

export default StateHook3