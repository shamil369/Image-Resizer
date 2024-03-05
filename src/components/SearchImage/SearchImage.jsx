import React from "react";

function SearchImage({ searchUrl,setHeight,setWidth }) {

  const imageHeightWidth = ()=>{
    // let width = document.getElementById("searchImage").width;
    // let height = document.getElementById("searchImage").height;
    const img = new Image();
    
    img.onload = () => {
      // console.log("imag w",img.width)
      // console.log("imag h",img.height)
      setWidth(img.width+5);
      setHeight(img.height+5)
    };
    img.onerror = (err) => {
        console.log("imgae wi hei",err)
    };
    img.src = searchUrl;
  }

  return (
    <div className="pt-10">
      <div className="border-4 border-dashed w-96 h-max p-1 border-blue-400 ">
        {searchUrl ? (
          <img src={searchUrl} id="searchImage" onLoad={imageHeightWidth}className="w-96 h-96 object-fill" />
        ) : (
          "Search Image to View here"
        )}
      </div>
    </div>
  );
}

export default SearchImage;
