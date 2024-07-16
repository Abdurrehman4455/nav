import React from 'react'
import Right from'../Icon/Vector.png';

const Button = ({label,image}) => {
  return (
   <button className='px-5  py-3  mt-[15%] bg-[#4CAF4F] text-[#FFFFFF] flex ml-10   max-sm:text-center max-sm:text-[13px] max-sm:py-2 rounded-lg  text-center' >
     
      <p className='text-center'>{label}</p>
      <div className=' mt-[10px] ml-3'>
      <img src={Right} alt='aa' className=''></img>
      </div>
     
   </button>
  )
}

export default Button
