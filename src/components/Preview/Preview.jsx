import React from 'react'
import './Preview.css'

function Preview({url,setPreview}) {
    console.log("urli in preview",url)
  return (
    <div className='absolute inset-0 bg-pop-color flex justify-center z-20 p-8'>
       <div className='w-full flex justify-center items-center'>  
          <div className='h-max w-max' >
         { url===undefined ? <h1 className= 'my-anime text-white text-5xl font-semibold'>Convert Image to Preview</h1> :<img src={url} alt="" className=''/> }
          </div>
       </div>
          <div className='flex flex-row text-5xl'>
          <i onClick={()=>setPreview(false)} className='fa fa-times-circle text-gray-200 cursor-pointer'></i>
          </div>
    
    </div>
  )
}

export default Preview