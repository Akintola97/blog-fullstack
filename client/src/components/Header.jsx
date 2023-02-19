import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
const [userInfo, setUserInfo] = useState(null);
  useEffect(()=>{
    const fetchData = async () =>{
      const profile = await axios.get('/profile', {withCredentials: true, credentials: 'include'})
      setUserInfo(profile.data.username)
    }
    fetchData()
  }, [])


  function logout(){
    axios.post('/logout', {credentials:'include', withCredentials: true})
    setUserInfo(null)
  }


  return (
   
    <div className='flex justify-between items-center p-2'>
     <div>
        <h1><Link to = '/' className='logo text-[5vmin]'>Blog</Link></h1> 
    </div>
     <div className='flex'>
      {userInfo && (
        <>
        <h1 className='pr-4 text-[2.5vmin]'><Link to ='/post'>Create new post</Link></h1>
        <h1 className='text-[2.5vmin]'><button onClick={logout}>Logout</button></h1> 
        </>
      )}
      {!userInfo && (
        <>
        <h1 className='pr-4 text-[2.5vmin]'><Link to = '/register' className='logo'>Register</Link></h1>
        <h1 className='text-[2.5vmin]'><Link to = '/login' className='logo'>Login</Link></h1>
        </>
      )}
     
    </div> 
    </div>
  
  )
}

export default Header