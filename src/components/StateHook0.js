import React, { useState } from 'react'

const StateHook0 = () => {
    const [age, setAge] = useState(18)

  return (
    <div>
        <input type="text" value={age}  
        onChange={(e) => setAge(e.target.value)}/>
        
        <h1>{age}</h1>
    </div>
  )
}

export default StateHook0