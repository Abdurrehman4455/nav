import React from 'react'
import imgs from'../Icon/Right.png'
import img from'../Images/image 18.svg'
import { FaLongArrowAltRight } from "react-icons/fa";
const Cards3 = () => {
  return (
    <div className='flex justify-center space-x-3 max-sm:flex-col max-sm:items-center md:space-x-5 lg:space-x-10 pt-5 md:pt-2'>
  <div className='bg-card-bg w-64 h-64 bg-no-repeat flex items-center justify-center max-sm:mb-10'>
    <div className='w-[90%] bg-[white] rounded-lg border-grey border-[2px] p-5 mt-[60%]'>
      <p>Creating Streamlined Safeguarding Processes with OneRen</p>
      <div className='flex justify-center'>
        <a className='text-green-500'><p>Readme more</p></a>
        <div className='text-green-400 ml-2 mt-'><FaLongArrowAltRight/></div>
      </div>
    </div>
  </div>
  <div className='bg-cards-bg w-64 h-64 bg-no-repeat flex items-center justify-center max-sm:mb-10'>
    <div className='w-[90%] bg-[white] rounded-lg border-grey border-[2px] p-5 mt-[60%]'>
      <p>Creating Streamlined Safeguarding Processes with OneRen</p>
      <div className='flex justify-center'>
        <a className='text-green-500'><p>Readme more</p></a>
        <div className='text-green-400 ml-2 mt-1'><FaLongArrowAltRight/></div>
      </div>
    </div>
  </div>
  <div className='bg-cards-bg1 w-64 h-64 bg-no-repeat flex items-center justify-center max-sm:mb-10'>
    <div className='w-[90%] bg-[white] rounded-lg border-grey border-[2px] p-5 mt-[60%]'>
      <p>Creating Streamlined Safeguarding Processes with OneRen</p>
      <div className='flex justify-center'>
        <a className='text-green-500'><p>Readme more</p></a>
        <div className='text-green-400 ml-2 mt-1'><FaLongArrowAltRight/></div>
      </div>
    </div>
  </div>
</div>


  )
} 


export default Cards3
