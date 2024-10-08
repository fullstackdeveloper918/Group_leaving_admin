"use client";

import React from 'react'

const Pagination = () => {
  return (
    <>
     <div className="p-2 flex justify-between">
       <button className="py-[5px] px-[10px] cursor-pointer">Previous</button>
       <button className="py-[5px] px-[10px] cursor-pointer">Next</button>
     </div>
    </>
  )
}

export default Pagination