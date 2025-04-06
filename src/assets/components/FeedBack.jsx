import React, { useRef } from 'react'
import { FaTimes } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
const FeedBack = ({message}) => {
    const removeRef = useRef(null)
    const handleClick = (e)=>{
        removeRef.current?.remove()
    }
    setTimeout(()=>{
        removeRef.current?.remove()
    },2000)
  return (
    <div ref={removeRef} className='rounded-md shadow-md p-4 flex gap-4 items-center w-94 absolute z-10 right-2 top-5 bg-red-100 text-red-800 font-bold'>
       <IoInformationCircleOutline className='text-center text-3xl'/>
        <p className='w-full'>{message}</p>
        <div onClick={handleClick}>
        <FaTimes />
        </div>
    </div>
  )
}

export default FeedBack