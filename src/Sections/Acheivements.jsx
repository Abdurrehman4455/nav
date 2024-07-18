import React from 'react'
import icon8 from'../Icon/Icon (8).png'
import icon9 from'../Icon/Icon (9).png'
import a from'../Images/2.png'
import ba from '../Images/1 (1).png'
import ca from '../Images/3.png'
import da from'../Images/4.png'
const Acheivements = () => {
  return (
<div className='flex justify-between mt-[10%] ml-[3%] max-sm:flex-col max-sm:items-center md:flex-col md:items-center md:ml-[10%] md:mt-10 lg:flex-row lg:ml-[3%]'>
  <div className='w-[60%] ml-[10%] max-sm:w-full max-sm:ml-0 md:w-[80%] md:ml-0 lg:w-[60%] lg:ml-[10%]'>
    <h1 className='text-[#4D4D4D] font-semibold text-[50px] mt-4 max-sm:text-[20px] md:text-[40px] lg:text-[50px]'>Helping local</h1>
    <span className='text-[#4CAF4F] font-semibold text-[50px] mt-4 max-sm:text-[20px] md:text-[40px] lg:text-[50px]'>business reinvent itself</span>
    <p className='text-[#18191] text-[19px] mt-2 max-sm:text-[15px] md:text-[17px] lg:text-[19px]'>We reached here with our hard work and dedication</p>
  </div>

  <div className="w-[60%] max-sm:mt-10 max-sm:items-center md:w-[80%] md:mt-10 lg:w-[60%] lg:mt-0">
    <div className="flex flex-wrap justify-between max-sm:flex-col md:flex-col md:items-center lg:flex-row">
      <div className="flex w-[70%] justify-between mb-4 md:w-full md:justify-center lg:w-[70%] lg:justify-between">
        <img src={a} alt="a" className="w-[300px] md:w-[45%] lg:w-[300px] mb-4 md:mb-0 lg:mb-4"/>
        <img src={ba} alt="ba" className="w-[300px] md:w-[45%] lg:w-[300px]"/>
      </div>
      <div className="flex w-[70%] justify-between mb-4 md:w-full md:justify-center lg:w-[70%] lg:justify-between">
        <img src={ca} alt="ca" className="w-[300px] md:w-[45%] lg:w-[300px] mb-4 md:mb-0 lg:mb-4"/>
        <img src={da} alt="da" className="w-[300px] md:w-[45%] lg:w-[300px]"/>
      </div>
    </div>
  </div>
</div>

  )
}

export default Acheivements
