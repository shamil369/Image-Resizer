import React from 'react'

function SearchImage({searchUrl}) {
  return (
          <div className='pt-10'>
            <div className='border-4 border-dashed w-96 h-max p-1 border-blue-400 '>
             {searchUrl ? <img src={searchUrl} className='w-96 h-96 object-fill' /> : "Search Image"}
            </div>
          </div>
  )
}

export default SearchImage