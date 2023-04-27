import React ,{useState} from 'react'
import StateHooks5 from './StateHooks5'

const EffectHook1 = () => {
    const [clearLog, setClearLog] = useState(false)

  return (
    <div>
        <button onClick={() => setClearLog(!clearLog)}>Clearlog</button>
        {!clearLog && <StateHooks5 />}
    </div>
  )
}

export default EffectHook1