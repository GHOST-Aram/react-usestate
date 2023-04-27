import React, {useEffect, useState} from 'react'

const StateHooks4 = () => {
    const [count, setCount] = useState(0)

    const [name, setName] = useState('')

    useEffect(()=>{
      console.log('Title updated' , count)
        document.title = `The count is ${count}`
    }, [count])
  return (
    <div>
        <input type="text" onChange={(e) => setName(e.target.value)} value = {name} />
        <button onClick={() => setCount((count) => count + 1)}
         className='px-8 py-4 rounded-sm border-none bg-gray'
        >Update Count {count}</button>
    </div>
  )
}

export default StateHooks4