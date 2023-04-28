import React, { useEffect, useState } from 'react'
import axios from 'axios'
import App from '../App'
import { Link } from 'react-router-dom'
const DataFetching = () => {
    const [user, setuser] = useState({})

    const [id, setId] = useState(1)
    const [idFromSubmit, setIdFromSubmit] = useState(1)

    useEffect(() =>{
        const fetchData = async() =>{
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${idFromSubmit}`)
            console.log(response.data)
            return response.data
        }
        console.log('Effect')
    
        fetchData().then((data) =>{
            setuser(data)
        }).catch(error => console.log(error))
            
        
    },[idFromSubmit])
  return (
    <div>
        <form action="" onSubmit={(e) =>{
            e.preventDefault()
            setIdFromSubmit(id)

        }}>
        <input type="text" value={id} onChange={(e) =>setId(e.target.value)} />
        <input type="submit" value="Submit" />
        </form>
        <h1>{user.website}</h1>
        {/* {
            posts.map(user => <li key={user.email}>{user.name}</li>)
        } */}
        <Link to= '/' component = {<App />}>
        <button><h1>Home Base</h1></button></Link>
    </div>
  )
}

export default DataFetching