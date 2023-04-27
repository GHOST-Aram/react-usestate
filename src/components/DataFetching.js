import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DataFetching = () => {
    const [posts, setPosts] = useState([])

    const fetchData = async() =>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(response.data)
        return response.data
    }
    useEffect(() =>{
        console.log('Effect')
        fetchData().then((data) =>{
            setPosts(data)
        })
    },[])
  return (
    <div>
        {
            posts.map(user => <li key={user.email}>{user.name}</li>)
        }
    </div>
  )
}

export default DataFetching