import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DataFetching = () => {
    const [user, setuser] = useState({})

    const [id, setId] = useState(1)

    useEffect(() =>{
        const fetchData = async() =>{
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            console.log(response.data)
            return response.data
        }
        console.log('Effect')
        fetchData().then((data) =>{
            setuser(data)
        }).catch(error => console.log(error))
    },[id])
  return (
    <div>
        <input type="text" value={id} onChange={(e) =>setId(e.target.value)} />
        <h1>{user.website}</h1>
        {/* {
            posts.map(user => <li key={user.email}>{user.name}</li>)
        } */}
    </div>
  )
}

export default DataFetching