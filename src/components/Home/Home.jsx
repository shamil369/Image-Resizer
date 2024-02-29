import React, { useState,useEffect } from 'react'
import axios from 'axios'
import SearchImage from '../SearchImage/SearchImage'
import Operations from '../Operations/Operations'
import Preview from '../Preview/Preview'
import Loader from '../Loader/Loader'

function Home() {

    const [url,setUrl] = useState()
    const [imageView,setImageView] = useState()
    const [width,setWidth] = useState(100)
    const [height,setHeight] = useState(100)
    const [preview,setPreview] = useState()
    const [searchUrl,setSearchUrl] = useState()
    const [converting,setConverting]= useState("Convert Image")
    

    const convertImage =()=>{

        setConverting("Converting")
        axios.get(`https://imageversa.com/v1/image/resize:fill:${width}:${height}:webp/url/${searchUrl}`,{responseType:'blob'}).then((res)=>{
  
        console.log("fetch data",res)
        
        setUrl(URL.createObjectURL(res.data))
        console.log("blob url",url)
        setConverting("Convert Image")
        }).catch((err)=>console.log("error",err))
    }


    // useEffect(()=>{
    //   axios.get("https://imageversa.com/v1/image/resize:fill:100:100:webp/url/https://netstratum.hoolva.com/docs/users/cf266b3c-bb03-442a-93b5-1f545425b844/CWY6VZTRM4V4.jpeg",{responseType:'blob'}).then((res)=>{
  
    //   console.log("fetch data",res)
      
    //   setUrl(URL.createObjectURL(res.data))
    //   console.log("blob url",url)
    //   }).catch((err)=>console.log("error",err))
  
    //   // fetch("https://imageversa.com/v1/image/resize:fill:40:40:webp/url/https://netstratum.hoolva.com/docs/users/cf266b3c-bb03-442a-93b5-1f545425b844/CWY6VZTRM4V4.jpeg")
    //   // .then(response=>response.blob()).then((result)=>{
    //   //   console.log("after blob result",result);
    //   //   setUrl(URL.createObjectURL(result));
    //   //   })
    // },[])


  return (
    <div className='flex justify-center items-center pt-32'>
      { preview && <Preview url={url} setPreview={setPreview}/> }
    <div className="main-background ">
     
    <div className="p-8">
      
      <div className="movetxt flex justify-between p-2 bg-gray-700 rounded " >
        <input type="search" onChange={(e)=>setSearchUrl(e.target.value)} value={searchUrl} className='w-full mr-0.5 outline-none text-blue-50 bg-gray-700 ' placeholder="Enter Image Url to Compress"/>
       { searchUrl ==="" ? <i className='fa fa-search fa-2x mb-1 cursor-pointer text-teal-400'></i> : <i className='fa fa-close fa-2x mb-1 cursor-pointer text-teal-400' onClick={()=>setSearchUrl("")}></i>}
      </div>
      <div className="flex justify-center my-5">
          <SearchImage searchUrl={searchUrl}/>
          <div className=' w-96 pt-10'>
             <Operations width={width} height={height} setHeight={setHeight} setWidth={setWidth}/>
             <div className='flex flex-col my-10 pl-4'>
                <button onClick={convertImage} className='movetxt bg-purple-two hover:bg-purple-one text-name-color hover:text-white font-bold py-2 px-4 border border-blue-700 rounded mb-8 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>{converting==="Converting" ? <Loader/> : converting}</button>
                <button onClick={()=>setPreview(true)} className='movetxt bg-purple-two hover:bg-purple-one hover:text-white text-name-color font-bold py-2 px-4 border border-blue-700 rounded mb-8 transition ease-in-out delay-150 hover:scale-105  duration-300'>Preview Image</button>
             </div>
          </div>
      </div>
      <div className='flex justify-center'>
        <button className='movetxt bg-purple-two hover:bg-purple-one text-name-color hover:text-white text-font-bold py-2 w-1/2 px-4 border border-blue-700 rounded mb-8 transition ease-in-out delay-150 hover:scale-105  duration-300'>
         <a href={url} download="imge.webp"> <i class="fa fa-download" aria-hidden="true"></i> Download</a>
        </button>
      </div>

    </div>
   
   
   
   
 
  </div>
  </div>
  )
}

export default Home