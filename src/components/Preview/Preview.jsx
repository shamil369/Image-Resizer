import React, { useEffect, useState} from "react";
import "./Preview.css";

function Preview({ url, setPreview, convertImage, converting, height }) {

  return (
    <div className={url && height>1600 ? "absolute inset-0 h-max bg-pop-color flex justify-center z-20 p-8" : "absolute inset-0 bg-pop-color flex justify-center z-20 p-8"}>

      <div className="w-full  flex justify-center items-center ">
       
          {url === undefined ? (
            converting === "converting" ? (
              <h1 className="text-5xl text-white">Loading</h1>
            ) : (
              <h1 className="my-anime text-white text-5xl font-semibold">
                Convert Image to Preview
              </h1>
            )
          ) : (
            <img src={url} alt="" className=''/>
          )}
      </div>
      {url !== undefined && (
        <div className="flex flex-col justify-center">
          <button
            onClick={() => {
              convertImage("fill");
            }}
            className="rounded-md p-1.5 my-1.5 me-4 mx-1.5 bg-red-700 
            hover:bg-teal-800 transform transition duration-1000 hover:scale-105"
          >
            fill
          </button>
          <button
            onClick={() => {
              convertImage("contain");
            }}
            className="rounded-md p-1.5 my-1.5 me-4 mx-1.5 bg-red-700 
            hover:bg-teal-800 transform transition duration-1000 hover:scale-105"
          >
            contain
          </button>
          <button
            onClick={() => {
              convertImage("cover");
            }}
            className="rounded-md p-1.5 my-1.5 me-4 mx-1.5 bg-red-700 
            hover:bg-teal-800 transform transition duration-1000 hover:scale-105"
          >
            cover
          </button>
          <button
            onClick={() => {
              convertImage("inside");
            }}
            className="rounded-md p-1.5 my-1.5 me-4 mx-1.5 bg-red-700 
            hover:bg-teal-800 transform transition duration-1000 hover:scale-105"
          >
            Inside
          </button>
          <button
            onClick={() => {
              convertImage("outside");
            }}
            className="rounded-md p-1.5 my-1.5 me-4 mx-1.5 bg-red-700 
            hover:bg-teal-800 transform transition duration-1000 hover:scale-105"
          >
            outside
          </button>
        </div>
      )}
      <div className="flex flex-row text-5xl">
        <i
          onClick={() => setPreview(false)}
          className="fa fa-times-circle text-gray-200 cursor-pointer"
        ></i>
      </div>
    </div>
  );
}

export default Preview;
