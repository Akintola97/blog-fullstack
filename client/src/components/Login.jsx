import React from 'react'
import { useState } from 'react'
import { UserContext} from '../UserContext';
import Header from './Header'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {setUserInfo} = useContext(UserContext);


  const handleSubmit= async(e)=> {
    e.preventDefault();
    
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
       if (response.ok){
       response.json().then((userInfo) =>{
        setUserInfo(userInfo);
        navigate('/');
       });
  } else {
    alert('wrong credentials')
  }

  }



  return (
    <div>
    <div className='w-[100vw] h-[90vh]'>
    {<Header />}
   
    <div className='flex justify-center items-center text-center w-full h-full'>
        <form onSubmit={handleSubmit}>
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