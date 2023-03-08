import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = ({value, onChange}) => {

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

      
  return (
    <div className='h-full w-full justify-center'>
      
        <ReactQuill value={value} modules={modules} onChange={onChange} formats={formats} className='h-[60vmin] w-full overflow-y-scroll' required />
     </div>
        
    
   
  )
}

export default Editor