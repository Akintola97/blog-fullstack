
import React, { useContext, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext';





const Header = () => {
  const {setUserInfo, userInfo} = useContext(UserContext);
  useEffect(()=>{
      fetch('/profile', {
        credentials:'include'
      })
      .then(response => {
        response.json().then(userInfo => {
          setUserInfo(userInfo);
      });
});
}, []);
      


  function logout(){
    fetch('/logout', {credentials:'include', method:'POST'});
    setUserInfo(null)
  }

  const username = userInfo?.username;
  return (
   <>
    <div className='flex justify-between items-center p-2'>
     <div>
        <h1><Link to = '/' className='logo text-[5vmin]'>Blog</Link></h1> 
    </div>
     <div className='flex'>
      {username && (
        <>
        <h1 className='text-[2.5vmin] pr-4 capitalize'>Hello, {userInfo}</h1>
        <h1 className='pr-4 text-[2.5vmin]'><Link to ='/post'>Create new post</Link></h1>
        <h1 className='text-[2.5vmin]'><button onClick={logout}>Logout</button></h1> 
        </>
      )}
      {!username && (
        <>
        <h1 className='pr-4 text-[2.5vmin]'><Link to = '/register' className='logo'>Register</Link></h1>
        <h1 className='text-[2.5vmin]'><Link to = '/login' className='logo'>Login</Link></h1>
        </>
      )}
     
    </div> 
    </div>

  </>
  )
}

export default Header