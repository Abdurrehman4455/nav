import React from 'react'
import Right from'../Icon/Vector.png';
import { FaLongArrowAltRight } from "react-icons/fa";
const Button4 = ({name}) => {

  return (
    <div className='flex justify-center'>
    <div  className='flex items-center'>
        <button className='mt-10  bg-[#4CAF4F] text-[#FFFFFF] px-8 py-4 rounded-lg flex max-sm:text-[20px] hover:bg-[#3E8E41]'>

             {name}
            <FaLongArrowAltRight className='ml-3 sm:ml-1 sm:w-[20px] mt-1.5'/>
       
         </button>
    </div>
    </div>
  )
}

export default Button4
