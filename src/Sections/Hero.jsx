import React from 'react'
import Dot from'../Images/Dot.png'
import IL from'../Images//IL.png'

const Hero = () => {
  return ( 
    <div className='w-full bg-[#F5F7FA] h-[700px] max-sm:h-[200x] flex justify-around max-sm:flex-col flex-wrap '>
             <div className='w-[40%] pl-[5%] pt-[10%]'> 
             <h1 class="font-semibold text-[65px] leading-[76px] text-[#4D4D4D]">Lesson and insights</h1>
             <span className="text-[#4CAF4F] font-semibold text-[60px]">from 8 years</span>
               
             </div>
 
               
              

           
             

           
               
              
             <div className=' w-[30%] pt-[5%] '>
                <img src={IL} alt="" 
                width={300}/>
             </div>
             <div className='w-[60%] pl-[30%]  max-sm:pt-[70%] pt-[9%]'   >
             <img src={Dot} alt='dot'
                width={30}/>
             </div>
                




    </div>
  )
}

export default Hero
