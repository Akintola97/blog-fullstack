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
  
        <form onSubmit={createPost}>
            <div className='pt-5 pb-3 pl-3 pr-3'>
            <input className='border rounded w-full h-[5vmin]' value={title} type='title' placeholder={'Title'} 
            onChange={e => setTitle(e.target.value)} maxLength='120' required
            />
            </div>
           <div className='pt-5 pb-3 pl-3 pr-3'>
           <input className='border rounded w-full h-[5vmin]' onChange={e=>setSummary(e.target.value)} value={summary} type='summary' placeholder={'Summary'} maxLength='170' required />
           </div>
           <div className='pt-5 pb-3 pl-3 pr-3'>
            <Editor value={content} onChange={setContent} />
            </div>
            <div className='pt-10 pl-3'>
            <input type='file' onChange={e => setFiles(e.target.files)} required maxLength='2500'/>
            </div>
            <div className='text-center p-10'>
                <button type='submit' className='bg-green-500 border rounded-lg p-3'>Create Post</button>
            </div>
            
            
        </form>

  )
}

export default CreatePost