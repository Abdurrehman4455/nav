import React from 'react'
import Right from'../Icon/Right.png';

const Button = ({label,image}) => {
  return (
   <button className='px-10 py-4  mt-[3%] bg-[#4CAF4F] text-[#FFFFFF] flex ml-5  max-sm:px- max-sm:py-1 max-sm:text-center ' >
     
      {label}
     <img src={Right} alt='a' className='ml-2 mt-2 max-sm:mb-5'/>
   </button>
  )
}

export default Button
