import React from 'react'
import { useState } from 'react';
import Editor from '../Editor';
import { Navigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Editpost = () => {
    const {id} = useParams();
    const [title,setTitle] = useState('');
    const [summary,setSummary] = useState('');
    const [content,setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect,setRedirect] = useState(false);

useEffect(() => {
    fetch('/post/'+id)
    .then(response => {
        response.json().then(postInfo => {
          setTitle(postInfo.title);
          setContent(postInfo.content);
          setSummary(postInfo.summary);
        });
      });
  }, []);



    const UpdatePost = async(e)=>{
        e.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('id', id);
        if (files?.[0]) {
          data.set('file', files?.[0]);
        }
        const response = await fetch('/post', {
          method: 'PUT',
          body: data,
          credentials: 'include',
        });
        if (response.ok) {
          setRedirect(true);
        }
      }

    if (redirect){
       return <Navigate to = {'/post/'+id} />
       }


       const deletePost = async(e) =>{
        e.preventDefault();
        const response = await fetch('/post/'+id, {credentials:'include', method:'DELETE',
      }) 
      console.log(response)
      if (response.ok){
        alert('Post has been delete')
        setRedirect(true)
      }
      if (redirect){
        return <Navigate to = {'/'} />
        }
 
      }

  return (
       
        <form onSubmit={UpdatePost}>
    <div className='pt-5 pb-3 pl-3 pr-3'>
    <input className='border rounded w-full h-[5vmin]' value={title} type='title' placeholder={'Title'} 
    onChange={e => setTitle(e.target.value)} maxLength='120' required
    />
    </div>
   <div className='pt-5 pb-3 pl-3 pr-3'>
   <input className='border rounded w-full h-[5vmin]' onChange={e=>setSummary(e.target.value)} value={summary} type='summary' placeholder={'Summary'} maxLength='170' required />
   </div>
   <div className='pt-5 pb-3 pl-3 pr-3'>
    <Editor onChange={setContent} value= {content} />
    </div> 
    <div className='pt-10 pl-3'>
    <input type='file' onChange={e => setFiles(e.target.files)} required maxLength='2500'/>
    </div>
    <div className='text-center p-10'>
        <button type='submit' className='bg-green-500 border rounded-lg p-3'>Update</button>
        <button onClick={deletePost} type='submit' className='bg-green-500 border rounded-lg p-3'>delete</button>
    </div>
</form>

  )
}



export default Editpost