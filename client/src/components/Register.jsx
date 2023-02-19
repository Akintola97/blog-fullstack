import React from 'react'
import Header from './Header'
import axios from 'axios'
import { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit= async(e)=>{
    e.preventDefault();
    console.log(username, password)
    try {
      const fetchData = await axios.post('/register',{username, password});
      console.log(fetchData.data)
      console.log(fetchData.status)
      if (fetchData.code === 500){
        alert('Please try other credentials')
      }else if(fetchData.status === 200){
        alert('Registration Successful')
      }
    } 
    catch (error) {
      console.log(error)
    }
   
  }

  return (
    <div>
    <div className='w-[100vw] h-[90vh]'>
    {<Header />}
   
    <div className='flex justify-center items-center text-center w-full h-full'>
        <form action='' onSubmit={handleSubmit}>
            <h1 className='text-center font-bold text-[6vmin] p-3'>Register</h1>
            <div>
            <input className='border rounded-lg' type='text' placeholder='username' name='username' value = {username} onChange={event => setUsername(event.target.value)} required />
            </div>
            <div className='p-3'>
            <input className='border rounded-lg' type='password' placeholder = 'password' name = 'password' value={password} onChange={event => setPassword(event.target.value)} required/>
            </div>
            <div className='text-center'>
            <button className='border rounded-sm' type='submit'>Register</button>
            </div>
        </form>
    </div>
    </div>
    </div>
  )
}

export default Register