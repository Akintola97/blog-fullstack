import React from 'react'
import {formatISO9075} from 'date-fns'
import { Link } from 'react-router-dom'

const Post = ({_id, author,title, summary, cover, content, createdAt}) => {


  //
  return (
    <>
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