import React from 'react'
import {formatISO9075} from 'date-fns'
import { Link } from 'react-router-dom'

const Post = ({_id, author,title, summary, cover, content, createdAt}) => {


  //
  return (
    <>
        {/* <div className=' w-full h-[100vh] flex flex-col md:flex-row md:items-center lg:items-center md:p-7 bg-gradient-to-t from-gray-700 via-gray-900 to-black text-white'>
        <div className='w-full h-full'>
        <Link to = {`/post/${_id}`}>
        <img className='w-full h-full pt-10 md:pt-0' src = {cover} alt={title} />
        </Link>
        </div>
        <div className='w-full h-full p-4'>
        <div>
          <div>
          <Link to = {`/post/${_id}`}>
         <h1 className='text-[3.0vmin] md:text-[2.5vmin] lg:text-[3.0vmin] xl:text-[4.0vmin] capitalize font-bold'>{title}</h1>
         </Link>
         <div>
         <p className='text-[1.5vmin] md:text-[1.3vmin] lg:text-[1.5vmin] xl:text-[2.3vmin]'>Author: {author.username}</p>
         <p className='text-[1.5vmin] md:text-[1.3vmin] lg:text-[1.5vmin] xl:text-[2.3vmin]'>{formatISO9075(new Date (createdAt))}</p>
         </div>
          </div>
          <div className='pt-2 lg:pt-3 xl:pt-8'>
          <p className='text-[2.3vmin] md:text-[1.5vmin] lg:text-[2.0vmin] xl:text-[3.0vmin] pb-10 md:pb-0'>{summary}</p>
          </div>
        </div>
        </div>
        </div> */}
<div className='w-full h-full justify-evenly p-10 flex items-center flex-col md:flex-row'>
  <Link to =  {`/post/${_id}`}>
  <img className='w-[90vmin]' src={cover} alt={title} />
  </Link>

<div className='p-10'>
<Link to = {`/post/${_id}`}>
         <h1 className='text-[3.0vmin] md:text-[2.5vmin] lg:text-[3.0vmin] xl:text-[4.0vmin] capitalize font-bold'>{title}</h1>
         </Link>
         <p className='text-[1.5vmin] md:text-[1.3vmin] lg:text-[1.5vmin] xl:text-[2.3vmin]'>Author: {author.username}</p>
         <p className='text-[2.3vmin] md:text-[1.5vmin] lg:text-[2.0vmin] xl:text-[3.0vmin] pb-10 md:pb-0'>{summary}</p>
</div>
</div>


 
  </>
  
   
    
  )
}

export default Post