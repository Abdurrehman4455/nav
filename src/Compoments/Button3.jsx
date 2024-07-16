import React from 'react'

const Button3 = ({name}) => {
  return (
    <div>
       <button className='pt-[15px] text-center bg-[#4CAF4F] px-6 py-4 text-white mt-[5%] text-[20px] rounded-lg max-sm:text-[10px] ' >
          {name}
       </button>
    </div>
  )
}

export default Button3
