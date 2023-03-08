import React from 'react'
import { useState } from 'react';
 import { Navigate } from 'react-router-dom';
import Editor from '../Editor';


const CreatePost = () => {

    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);





    const createPost = async(e)=>{
        const data = new FormData();
        data.set('title', title)
        data.set('summary', summary)
        data.set('content', content)
        data.set('file', files[0])
        e.preventDefault();
      const response = await fetch('/post', {
          method: 'POST',
          body: data,
          credentials: 'include',
        });
        if (response.ok) {
          setRedirect(true);
        }
      }
      
     if (redirect){
       return <Navigate to = {'/'} />
      }

  return (
    <>
  <div className='w-full h-full text-black flex items-center justify-center p-5'>
          <form onSubmit={createPost}>
          <div className='text-center p-3'>
            <input className='border rounded w-full' value={title} type='title' placeholder={'Title'} 
            onChange={e => setTitle(e.target.value)} maxLength='120' required
            />
          </div>
          <div className='text-center p-3'>
            <input className='border rounded w-full' value={summary} type='title' placeholder={'Summary'} maxLength='170'
            onChange={e => setSummary(e.target.value)} required
            />
          </div>
        
         
        <div className='p-3'>
        <Editor value={content} onChange={setContent} maxLength='2500' />
       
        </div>
    
          </form>
      
</div>
<div className='w-full h-full flex flex-col justify-center pb-10'>
<form onSubmit={createPost}>
<div className='text-center'>
    <input type='file' onChange={e => setFiles(e.target.files)} required />
    </div>
    <div className='text-center'>
    <button type='submit' className='bg-green-500 border rounded-lg p-3'>Create Post
     </button>
     </div>
</form>
</div>
 
     </>
  )
}

export default CreatePost