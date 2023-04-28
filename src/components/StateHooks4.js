import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import StateHooks5 from './StateHooks5'

const StateHooks4 = () => {
    const [count, setCount] = useState(0)

    const [name, setName] = useState('')

    useEffect(()=>{
        document.title = `The count is ${count}`
    }, [count])
  return (
    <div>
        <input type="text" onChange={(e) => setName(e.target.value)} value = {name} />
        <button onClick={() => setCount((count) => count + 1)}
         className='px-8 py-4 rounded-sm border-none bg-gray'
        >Update Count {count}</button>
        <Link to = "/statehooks5" component = {<StateHooks5 />}>State Hooks 5</Link>
    </div>
  )
}

export default StateHooks4