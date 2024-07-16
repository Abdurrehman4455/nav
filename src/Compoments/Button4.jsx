import React from 'react'
import Right from'../Icon/Vector.png';
const Button4 = ({name}) => {
  return (
    <div className='flex justify-center'>
    <div  className='flex items-center'>
        <button className='mt-10  bg-[#4CAF4F] text-[#FFFFFF] px-8 py-4 rounded-lg flex max-sm:text-[20px]'>

             {name}
            <img  src={Right}  className='ml-2 mt-[10px]' alt=''></img>
       
         </button>
    </div>
    </div>
  )
}

export default Button4
