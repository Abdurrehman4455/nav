import React from 'react'
import Right from'../Icon/Vector.png';

const Button = ({label,image}) => {
  return (
   <button className='px-2 py-2 mt-7 bg-[#4CAF4F] text-[#FFFFFF] flex   max-sm:text-center max-sm:text-[13px] max-sm:py-2 rounded-lg  text-center   md:hiiden lg:block lg:flex  '  >
     
      <p className='text-center  max-sm:mt-2'>{label}</p>
      <div className=' mt-[11px] ml-3 max-sm:mt-3'>
      <img src={Right} alt='aa' className='max-sm:mb-2'></img>
      </div>
     
   </button>
  )
}

export default Button
