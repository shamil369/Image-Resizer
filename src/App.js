import React, { Component, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import { useState } from 'react';

function App() {

  const [url,setUrl] = useState()

  useEffect(()=>{
    axios.get("https://imageversa.com/v1/image/resize:fill:100:100:webp/url/https://netstratum.hoolva.com/docs/users/cf266b3c-bb03-442a-93b5-1f545425b844/CWY6VZTRM4V4.jpeg",{responseType:'blob'}).then((res)=>{

    console.log("fetch data",res)
    
    setUrl(URL.createObjectURL(res.data))
    console.log("blob url",url)
    }).catch((err)=>console.log("error",err))

    // fetch("https://imageversa.com/v1/image/resize:fill:40:40:webp/url/https://netstratum.hoolva.com/docs/users/cf266b3c-bb03-442a-93b5-1f545425b844/CWY6VZTRM4V4.jpeg")
    // .then(response=>response.blob()).then((result)=>{
    //   console.log("after blob result",result);
    //   setUrl(URL.createObjectURL(result));
    //   })
  },[])
  
  
    return (
      <div className="main-background">
        <div className="p-8">
          
          <div className="flex justify-between p-2 bg-gray-700 rounded" >
            <input type="search" className='w-full mr-0.5 outline-none text-blue-300 bg-gray-700' placeholder="Enter Image Url to Compress"/>
            <i className='fa fa-search fa-2x mb-1 cursor-pointer'></i>
          </div>
          <div className="flex justify-center my-5">
              <div className='pt-10'>
                <div className='border-4 border-dashed w-96 h-96 p-1 border-blue-400 object-fill'>
                  <img src="https://img.freepik.com/free-vector/abstract-background-design_1117-154.jpg?size=626&ext=jpg&ga=GA1.1.1419174211.1708411253&semt=ais" className='w-96 h-86 object-fill ' />
                </div>
              </div>
              <div className=' w-96 pt-10'>
                 <div>
                    <div className='w-80 flex justify-between mb-1.5 pl-6 items-center'>
                      <label className='text-lg font-bold'>Width:</label>
                      <div className=' flex justify-center'>
                        <button className='rounded-md p-1.5 my-1.5 me-3 mx-1.5 bg-red-700 hover:bg-custom-purple transform transition duration-1000 hover:scale-105'><i className='fa fa-minus fa-2x'></i></button>
                        <input className='rounded-md w-16 h-12 my-1.5 p-1.5 me-3 text-lg'></input>
                        <button className='rounded-md p-1.5 my-1.5 mx-1.5 bg-red-700 hover:bg-custom-purple transform transition duration-1000 hover:scale-105'><i className='fa fa-plus fa-2x'></i></button>
                      </div>
                    </div>
                    <div className='w-80 flex justify-between mb-1.5 pl-6 items-center'>
                      <label className='text-lg font-bold'>Height:</label>
                      <div className=' flex justify-center'>
                        <button className='rounded-md p-1.5 my-1.5 me-3 mx-1.5 bg-red-700 hover:bg-custom-purple transform transition duration-1000 hover:scale-105'><i className='fa fa-minus fa-2x'></i></button>
                        <input className='rounded-md w-16 h-12 my-1.5 p-1.5 me-3 text-lg'></input>
                        <button className='rounded-md p-1.5 my-1.5 mx-1.5 bg-red-700 hover:bg-custom-purple transform transition duration-1000 hover:scale-105'><i className='fa fa-plus fa-2x'></i></button>
                      </div>
                    </div>
                 </div>
                 <div className='flex flex-col my-10 pl-4'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-8 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>Convert Image</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-8 transition ease-in-out delay-150 hover:scale-105  duration-300'>Preview Image</button>
                 </div>
              </div>
          </div>

        </div>
       
       
       
       <a href={url} download="imge.webp"> download</a>
     
      </div>
    );
  
}

export default App;
