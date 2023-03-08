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
    const [deleteRouteHome, setDeleteRouteHome] = useState(false);

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
      
      if (response.ok){
        alert('Post has been deleted')
        setDeleteRouteHome(true)
      }
      }
      if (deleteRouteHome){
        return <Navigate to = {'/'} />
        }

  return (
       <>
        <div className='w-full h-full text-black flex items-center justify-center p-5'>
      <form onSubmit={UpdatePost}>
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
    <div className='w-full h-full flex flex-col justify-center pb-10'></div>
        <form>
    <div className='text-center'>
    <input type='file' onChange={e => setFiles(e.target.files)} required />
    </div>
    <div className='text-center pb-10'>
        <button type='submit' className='bg-green-500 border rounded-lg p-3'>Update</button>
        <button onClick={deletePost} type='submit' className='bg-green-500 border rounded-lg p-3'>delete</button>
    </div>
</form>
       </>
  

  )
}



export default Editpost