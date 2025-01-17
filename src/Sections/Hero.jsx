import React from 'react'
import Dot from'../Images/Dot.png'
import IL from'../Images//Illustration.svg'
import Button2 from '../Compoments/Button2'



const Hero = () => {
  
  

  return ( 
  
    <div className='w-full bg-[#F5F7FA] h-[700px] flex justify-around flex-wrap max-sm:flex-col max-sm:items-center pr-5  md:justify-around md:h-[700px] lg:justify-around lg:h-[700px] lg:mt-0 lg:w-[100%]'>
    <div className="w-full md:w-[40%] lg:w-[30%] pt-[10%] md:pt-[10%] lg:pt-[10%] max-sm:pt-2 max-sm:w-full max-sm:pl-0 max-sm:pr-4  md:justify-center items-center  lg:ml-[6%] md:pl-[10%] lg:pl-0  max-sm:ml-5">
      <h1 className="font-semibold text-[55px] leading-[76px] text-[#4D4D4D] max-sm:text-left max-sm:text-[24px] max-sm:leading-[24px] max-sm:mt-1 md:text-[40px] md:leading-[56px] md:mt-2 lg:text-[48px] lg:leading-[66px] lg:mt-3 max-sm:text-[28px] sm:text-[30px]">
        Lesson and insights
      </h1>
      <span className="text-[#4CAF4F] font-semibold text-[60px] max-sm:text-left max-sm:text-[24px] max-sm:mb-10 md:text-[45px] md:mt-2 lg:text-[50px] lg:mt-3 sm:text-[20px] ">
        from 8 years
      </span>
      <p className="text-[#4D4D4d] max-sm:text-left md:text-left max-sm:text-[15px] md:text-[14px] md:leading-[28px] md:mt-2 lg:text-[22px] lg:leading-[30px] lg:mt-3">
        where to grow your business as a photographer: site or social media?
      </p>
      <div className="pt-[6%] max-sm:pt-2 md:pt-2 lg:pt-3">
        <Button2 className="mt-[10%] lg:mt-4" />
      </div>
    </div>
    
    <div className='w-[50%] md:w-[50%] lg:w-[40%] sm:mt-[5%] md:mt-[10%] lg:mt-[4%] ml-10 mb-10'>
      <div className=' sm:w-[80%] md:w-[60%] lg:w-[60%] sm:pt-[5%] md:pt-[10%] lg:pt-[%] md:ml-10 lg:ml-10 '>
        <img src={IL} alt="" className="mb-[10%]" />
      </div>
    </div>
  
  </div>
  
  
  )
}

export default Hero
