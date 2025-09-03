import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

const Card = () => {
  return (
     <div className='relative w-60 h-72 rounded-[35px] bg-zinc-900/90 text-white overflow-hidden px-7 py-10'>
        <FaRegFileAlt/>
        <p className='text-sm mt-5 font-semibold leading-[1.5]'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div className="footer absolute bottom-0  w-full left-0 ">
            <div className='flex items-center justify-between mb-2 px-6 py-3'>
            <h4>0.4mb</h4>
            <span className='w-6 h-6 rounded-full flex items-center justify-center bg-zinc-400'>

            <FaDownload size="0.8em" color='#000'/>
            </span>
            </div>
            <div className='tag w-full bg-green-600 py-5 flex items-center justify-center'>
                <h3 className='text-md font-semibold' >Download Now</h3>
            </div>
        </div>
     </div>

  )
}

export default Card