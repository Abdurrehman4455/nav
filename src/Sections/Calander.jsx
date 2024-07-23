import React from 'react'
import pana from'../Images/Group 238.svg';
import Button3 from '../Compoments/Button3';


const Calander = () => {
  return (
    <div>
    <div className='flex justify-center items-center max-sm:flex-col max-sm:mt-20 sm:flex-col sm:mt-10 md:flex-col md:mt-10 lg:flex-row lg:mt-10'>
      <div className='w-[30%] max-sm:w-[60%] sm:w-[50%] md:w-[50%] lg:w-[30%]'>
        <img src={pana} alt='frame' width={500} />
      </div>
      <div className="w-[40%] pl-[5%] pt-[10%] ml-10 max-sm:w-full max-sm:pl-0 max-sm:pr-4 max-sm:pt-2 sm:w-full sm:pl-0 sm:pr-4 sm:pt-2 md:w-full md:pl-0 md:pr-4 md:pt-2 lg:w-[50%] lg:pl-[2%] lg:pt-[5%] lg:mb-[120px]">
        <h1 className="text-[#4D4D4D] font-bold text-[40px] mt-1 max-sm:text-[19px] max-sm:mt-1 max-sm:text-left sm:text-[30px] sm:text-center md:text-[30px] md:text-center lg:text-[40px] lg:text-left">
          How to design your site footer like
        </h1>
        <span className="text-[#4D4D4D] font-bold text-[40px] mt-1 max-sm:text-[19px] max-sm:ml-0 max-sm:text-left sm:text-[30px] sm:text-center md:text-[30px] md:ml-[40%] md:text-center lg:text-[40px] lg:text-left lg:ml-0 sm:ml-[40%]">
          we did
        </span>
        <p className="text-[#717171] text-[20px] max-sm:ml-0 max-sm:text-left sm:text-[18px] sm:text-center md:text-[16px] md:text-center lg:text-[18px] lg:text-left">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <div className="md:flex md:justify-center lg:justify-start max-sm:flex max-sm:justify-center sm:flex sm:justify-center">
          <Button3 name="Learn More" />
        </div>
      </div>
    </div>
  </div>
  

  )
}

export default Calander
