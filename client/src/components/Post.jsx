import React from 'react'
import {formatISO9075} from 'date-fns'
import { Link } from 'react-router-dom'

const Post = ({_id, author,title, summary, cover, content, createdAt}) => {
  console.log(cover)
  return (
    <>
        <div className='w-full h-full flex flex-col md:flex-row md:items-center lg:items-center md:p-7'>
        <div className='w-full h-full'>
        <Link to = {`/post/${_id}`}>
        <img className='w-full h-full' src = {cover} />
        </Link>
        </div>
        <div className='w-full h-full'>
        <div className='p-3'>
          <div>
          <Link to = {`/post/${_id}`}>
         <h1 className='text-[3.0vmin] md:text-[2.0vmin] lg:text-[3vmin] xl:text-[3.5vmin] capitalize font-bold'>{title}</h1>
         </Link>
         <div>
         <p className='text-[1.5vmin] md:text-[2.0vmin] lg:text-[2.2vmin] xl:text-[2vmin]'>Author: {author.username}</p>
         <p className='text-[1.5vmin] md:text-[1.8vmin] lg:text-[2.2vmin] xl:text-[2vmin]'>{formatISO9075(new Date (createdAt))}</p>
         </div>
          </div>
          <div className='pt-2 lg:pt-5'>
          <p className='text-[2.3vmin] md:text-[1.8vmin] lg:text-[2.3vmin] xl:text-[2.5vmin]'>{summary}</p>
          </div>
        </div>
        </div>
        </div>
    </>
  )
}

export default Post