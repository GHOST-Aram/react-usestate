import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "../App"
import StateHook1 from './StateHook1'
import StateHooks5 from './StateHooks5'
import StateHook2 from "./StateHook2"
import StateHook3 from "./StateHook3"
import StateHooks4 from "./StateHooks4"
import DataFetching from "./DataFetching"
export const RouterSwitch = () =>{
return(
    <BrowserRouter>
        <Routes>
            <Route  path="/" element={<App/>} />
            <Route path ="/statehook1" element = {<StateHook1 />} />
            <Route path ="/statehook2" element = {<StateHook2 />} />
            <Route path ="/statehook3" element = {<StateHook3 />} />
            <Route path ="/statehooks4" element = {<StateHooks4 />} />
            <Route path ="/statehooks5" element = {<StateHooks5 />} />
            <Route path ="/effect-hook-1" element = {<DataFetching />} />
        </Routes>
    </BrowserRouter>
)
}

export default RouterSwitch