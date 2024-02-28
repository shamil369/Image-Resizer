import React from 'react'

function Operations({width,height,setHeight,setWidth}) {
    
  const px="px"
  console.log("height value",height)
  return (
             <div>
                <div className='w-96 flex justify-between mb-1.5 pl-6 items-center'>
                  <label className='text-lg font-bold'>Width:</label>
                  <div className=' flex justify-center'>
                    <button onMouseDown={()=>width>1 && setWidth(width-1)} className='rounded-md p-1.5 my-1.5 me-4 mx-1.5 bg-red-700 hover:bg-teal-800 transform transition duration-1000 hover:scale-105'><i className='fa fa-minus fa-2x hover:text-slate-400'></i></button>
                    <input onChange={(e)=>setWidth(e.target.value>=0 && e.target.value<=1000 ? e.target.value:20)} value={width} type="number" min={1} max={1000} className='rounded-md w-32 h-12 my-1.5 p-1.5 me-3 text-lg '></input>
                    <button onMouseDown={()=>width<1000 && setWidth(Number(width)+1)} className='rounded-md p-1.5 my-1.5 mx-1.5 bg-red-700 hover:bg-teal-800 transform transition duration-1000 hover:scale-105'><i className='fa fa-plus fa-2x hover:text-slate-400'></i></button>
                  </div>
                </div>
                <div className='w-96 flex justify-between mb-1.5 pl-6 items-center'>
                  <label className='text-lg font-bold'>Height:</label>
                  <div className=' flex justify-center pl-6'>
                    <button onMouseDown={()=>height>1 && setHeight(height-1)}className='rounded-md p-1.5 my-1.5 me-4 mx-1.5 bg-red-700 hover:bg-teal-800 transform transition duration-1000 hover:scale-105'><i className='fa fa-minus fa-2x hover:text-slate-400' ></i></button>
                    <input onChange={(e)=>setHeight(e.target.value>=0 && e.target.value<=1000?e.target.value:1000)} value={height} type="number" min={1} max={1000} className='rounded-md w-32 h-12 my-1.5 p-1.5 me-3 text-lg '></input>
                    <button onMouseDown={()=>height<1000 && setHeight(Number(height)+1)} className='rounded-md p-1.5 my-1.5 mx-1.5 bg-red-700 hover:bg-teal-800 transform transition duration-1000 hover:scale-105'><i className='fa fa-plus fa-2x hover:text-slate-400'></i></button>
                  </div>
                 
                </div>
             </div>
  )
}

export default Operations