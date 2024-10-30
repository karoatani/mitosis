import React from 'react'
import { Skeleton } from "antd";



const Canvas = ({image, imageloading}) => {
  return (
    <div className='border-[1px] border-black w-[350px] h-[350px] md:w-[500px] md:h-[500px]  '>
      {/* {imageloading ? "" : } */}
      
      {imageloading ? <div><Skeleton/></div>: <img src={image} alt=""  className='bg-cover h-full w-full bg-no-repeat'/>}
      

    </div>
  )
}

export default Canvas