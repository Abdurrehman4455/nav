import React from 'react'
import Right from'../Icon/Vector.png';

const Button = ({label,image}) => {
  return (
   <button className=' px-5   mt-[15%] bg-[#4CAF4F] text-[#FFFFFF] flex ml-10   max-sm:text-center max-sm:text-[13px] max-sm:py-2   rounded-lg ' >
     
      <p className='mt-2'>{label}</p>
      <img src={Right} alt='aa' className='ml-3 mt-[15%]'></img>
      
     
   </button>
  )
}

export default Button
