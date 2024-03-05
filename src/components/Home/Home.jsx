import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchImage from "../SearchImage/SearchImage";
import Operations from "../Operations/Operations";
import Preview from "../Preview/Preview";
import Loader from "../Loader/Loader";
import DialogBox from "../DialogBox/DialogBox";

function Home() {
  const [url, setUrl] = useState();
  const [imageView, setImageView] = useState();
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const [preview, setPreview] = useState();
  const [searchUrl, setSearchUrl] = useState("");
  const [converting, setConverting] = useState("Convert Image");
  const [dialogBox, setDialogBox] = useState();
  const [downloading, setDownloading] = useState();
  const [pasteImage, setPasteImage] = useState();
  

  const convertImage = (size) => {
    if(searchUrl===""){
      setPasteImage(true);
      setTimeout(()=>{
        setPasteImage(false)
      },1500)
      return false
    }
    setConverting("Converting");
    console.log("url before", url);
      
    axios
      .get(
        `https://imageversa.com/v1/image/resize:${size}:${width}:${height}:webp/url/${searchUrl}`,
        { responseType: "blob" }
      )
      .then((res) => {
        console.log("fetch data", res);
        const blobUrl = URL.createObjectURL(res.data);
        setUrl(blobUrl);
        console.log("blob url", url);
        console.log("url after", url);
        setConverting("Convert Image");
        setDialogBox(true);
        setTimeout(() => {
          setDialogBox(false);
        }, 2000);
      })
      .catch((err) => console.log("error", err));
  };

  return (
    <div className="flex justify-center items-center pt-32">
      {preview && (
        <Preview
          url={url}
          setPreview={setPreview}
          convertImage={convertImage}
          converting={converting}
          height={height}
        />
      )}
      {dialogBox && <DialogBox value={"Image converted Successfully"} icon={"fa fa-check-circle-o text-green-700"} />}
      {downloading && <DialogBox value={"Image Downloading"} icon={"fa fa-check-circle-o text-green-700"}/>}
      {pasteImage && <DialogBox value={"Paste Image URL to Convert Image"} icon={"fa fa-exclamation-circle fa-2xl text-red-700"} />}
      <div className="main-background ">
        <div className="p-8">
          <div className="movetxt flex justify-between p-2 bg-gray-700 rounded ">
            <input
              type="search"
              onChange={(e) => setSearchUrl(e.target.value)}
              value={searchUrl}
              className="w-full mr-0.5 outline-none text-blue-50 bg-gray-700 "
              placeholder="Enter Image Url to Compress"
            />
            {searchUrl === "" ? (
              <i className="fa fa-search fa-2x mb-1 cursor-pointer text-teal-400"></i>
            ) : (
              <i
                className="fa fa-close fa-2x mb-1 cursor-pointer text-teal-400"
                onClick={() => {
                  setSearchUrl("");
                  setUrl(undefined);
                }}
              ></i>
            )}
          </div>
          <div className="flex justify-center my-5">
            <SearchImage searchUrl={searchUrl} setHeight={setHeight} setWidth={setWidth} />
            <div className=" w-96 pt-10">
              <Operations
                width={width}
                height={height}
                setHeight={setHeight}
                setWidth={setWidth}
              />
              <div className="flex flex-col my-10 pl-4">
                <button
                  onClick={() => convertImage("fill")}
                  className="movetxt bg-purple-two hover:bg-purple-one text-name-color
                   hover:text-white font-bold py-2 px-4 border border-blue-700 rounded mb-8 
                   transition transform hover:-translate-y-1 motion-reduce:transition-none 
                   motion-reduce:hover:transform-none"
                >
                  {converting === "Converting" ? <Loader /> : converting}
                </button>
                <button
                  onClick={() => setPreview(true)}
                  className="movetxt bg-purple-two hover:bg-purple-one hover:text-white 
                  text-name-color font-bold py-2 px-4 border border-blue-700 
                  rounded mb-8 transition ease-in-out delay-150 hover:scale-105  duration-300"
                >
                  Preview Image
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="movetxt bg-purple-two hover:bg-purple-one text-name-color 
            hover:text-white text-font-bold py-2 w-1/2 px-4 border border-blue-700 
            rounded mb-8 transition ease-in-out delay-150 hover:scale-105  duration-300">
              <a
                href={url}
                download="imge.webp"
                onClick={() => {
                  setDownloading(true);
                  setTimeout(() => {
                    setDownloading(false);
                  }, 3000);
                }}
              >
                {" "}
                <i className="fa fa-download" aria-hidden="true"></i> Download
              </a>
            </button>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default Home;
