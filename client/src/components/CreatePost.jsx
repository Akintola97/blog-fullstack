import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
 import axios from 'axios';
 import { Navigate } from 'react-router-dom';
import Header from './Header';

const CreatePost = () => {

    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);



    const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      };

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ];

    const createPost = async(e)=>{
        const data = new FormData();
        data.set('title', title)
        data.set('summary', summary)
        data.set('content', content)
        data.set('file', files[0])
        e.preventDefault();
        const post = await axios.post('/post', data, {withCredentials:true, credentials: 'include'})
        if(post && post.status === 200 && post.statusText === 'OK'){
           setRedirect(true);
        }
  
      
    }
     if (redirect){
       return <Navigate to = {'/'} />
      }

  return (
    <div className='h-[100vh] w-[100vw]'>
      {<Header />}
        <form onSubmit={createPost}>
            <div className='pt-5 pb-3 pl-3 pr-3'>
            <input className='border rounded w-full h-[5vmin]' value={title} type='title' placeholder={'Title'} 
            onChange={e => setTitle(e.target.value)} maxLength='100' required
            />
            </div>
           <div className='pt-5 pb-3 pl-3 pr-3'>
           <input className='border rounded w-full h-[5vmin]' onChange={e=>setSummary(e.target.value)} value={summary} type='summary' placeholder={'Summary'} maxLength='200' required />
           </div>
           <div className='pt-5 pb-3 pl-3 pr-3'>
            <ReactQuill value={content} modules={modules} onChange={newValue=>setContent(newValue)} formats={formats} className='h-[30vmin]' required />
            </div>
            <div className='pt-10 pl-3'>
            <input type='file' onChange={e => setFiles(e.target.files)} required />
            </div>
            <div className='text-center p-10'>
                <button type='submit' className='bg-green-500 border rounded-lg p-3'>Create Post</button>
            </div>
            
            
        </form>
    </div>
  )
}

export default CreatePost