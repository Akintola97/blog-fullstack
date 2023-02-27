import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Post from './Post'

const Index = () => {
  const [posts, setPosts] = useState([]);
   useEffect(()=>{
    const fetchData = async () =>{
    const content = await axios.get('/post', {withCredentials:true, credentials:'include'})
      setPosts(content.data)

    }

    fetchData()
  }, [])

  return (
    <div className='w-full  min-h-screen bg-gradient-to-t from-black via-black to-black text-white '>
       {posts.length > 0 && posts.map((post, index) =>{
          return <Post {...post} key={index}/>
       })} 
      
    
    
    </div>
  )
}

export default Index