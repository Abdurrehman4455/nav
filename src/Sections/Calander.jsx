import React from 'react'
import pana from'../Images/pana.png';
import Button3 from '../Compoments/Button3';


const Calander = () => {
  return (
    <div>
       <div className='flex justify-center  max-sm:flex-col max-sm:mt-20 items-center' >
      <div className='w-[30%] max-sm:w-[60%]'>
        <img src={pana} alt='frame'
        width={500}/>
      </div>
      <div className='w-[40%]'>
    <h1 className=' text-[#4D4D4D] font-bold text-[40px]  max-sm:text-[19px]  mt-1'>
    How to design your site footer like  </h1><span className=' text-[#4D4D4D] font-bold text-[40px]  max-sm:text-[19px]  mt-1 '>we did</span>
    <p className='text-[#717171] text-[20px] '> Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
    <Button3 name='Learn More'/>
    </div>
    </div>
    </div>
  )
}

export default Calander
