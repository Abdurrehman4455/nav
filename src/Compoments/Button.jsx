import React from 'react'
import Right from'../Icon/Vector.png';

const Button = ({label,image}) => {
  return (
   <button className='px-5  py-3  mt-[15%] bg-[#4CAF4F] text-[#FFFFFF] flex ml-10   max-sm:text-center max-sm:text-[13px] max-sm:py-2 rounded-lg  text-center hover:bg-[#3E8E41]' >
     
      <p className='text-center  max-sm:mt-2'>{label}</p>
      <div className=' mt-[11px] ml-3 max-sm:mt-4'>
      <img src={Right} alt='aa' className='max-sm:mb-2'></img>
      </div>
     
   </button>
  )
}

export default Button
