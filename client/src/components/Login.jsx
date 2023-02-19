import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Header from './Header'

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  


  const handleSubmit= async(e)=> {
    e.preventDefault();
    
      const login = await axios.post('/login', {username, password}, {credentials: 'include', withCredentials: true});
       if (login.data){
         setRedirect(true);
       } else {  
         alert('wrong credentials')
       }
  }
  if (redirect){
   return <Navigate to = {'/'} />
   }

  return (
    <div>
    <div className='w-[100vw] h-[90vh]'>
    {<Header />}
   
    <div className='flex justify-center items-center text-center w-full h-full'>
        <form action='' onSubmit={handleSubmit}>
            <h1 className='text-center font-bold text-[6vmin] p-3'>Login</h1>
            <div>
            <input className='border rounded-lg' type='text' placeholder='username' value={username} onChange={e => setUsername(e.target.value)} name='username' required />
            </div>
            <div className='p-3'>
            <input className='border rounded-lg' type='password' placeholder = 'password' onChange={e=> setPassword(e.target.value)} value={password} name = 'password' required/>
            </div>
            <div className='text-center'>
            <button className='border rounded-sm' type='submit'>Login</button>
            </div>
        </form>
    </div>
    </div>
    </div>
  )
}

export default Login