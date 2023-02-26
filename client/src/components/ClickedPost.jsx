import axios from 'axios'
import React, { useContext } from 'react'
import { useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'

import {formatISO9075} from 'date-fns'
import { UserContext } from '../UserContext'




const ClickedPost = () => {
    const [postInfo, setPostInfo] = useState(null);
    const {id}= useParams()
    const {userInfo} = useContext(UserContext)
    
    useEffect(()=>{
        const fetchData = async() =>{
            const pageContent = await axios.get(`/post/${id}`)
            setPostInfo(pageContent?.data)
        }
      fetchData()
    }, [id])



if (!postInfo)
    return '';


  return (
    <>
    <div className='w-full h-full p-5'>
        <div>
        <h1 className='text-[5vmin] capitalize font-bold text-center p-5'>{postInfo.title}</h1>
        </div>
        <div>
        <h1 className='text-[2.3vmin] capitalize text-left'>Author: {postInfo.author.username}</h1>
        </div>
        <div>
        <time className='text-[2.3vmin] text-left'>{formatISO9075(new Date(postInfo.createdAt))}</time>
        </div>
        {userInfo?.id === postInfo?.author._id && (
          <div>
            <button className='border bg-red-300 rounded-md p-1.5'><Link to = {`/edit/${postInfo._id}`}>Edit Post</Link></button>
          </div>

        )}
        <div className='w-full h-full'>
        <img className='w-full h-full pt-4 pb-4' src = {`/${postInfo.cover}`} alt='' />
        </div>
        <div>
        </div>
       <div className='h-full pt-5 p-2 w-full' dangerouslySetInnerHTML={{__html:postInfo.content}}>
       </div>
    </div>
    </>
  )
}

export default ClickedPost