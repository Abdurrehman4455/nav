import React from 'react'
import Dot from'../Images/Dot.png'
import IL from'../Images//IL.png'
import Button2 from '../Compoments/Button2'



const Hero = () => {
  
  

  return ( 
  
    <div className='w-full bg-[#F5F7FA] h-[700px]  flex justify-around  flex-wrap max-sm:flex-col max-sm:items-center  pr-5 ml-[3%]'>
              
              
            
             <div className='w-[40%] pl-[5%] pt-[10%] ml-10 '> 
             <h1 class="font-semibold text-[55px] leading-[76px] text-[#4D4D4D]  max-sm:text-[14px] max-sm:mt-1">Lesson and insights</h1>
             <span className="text-[#4CAF4F] font-semibold text-[60px] max-sm:text-[15px] max-sm:mb-10">from 8 years</span>
             <p className='text-[#4D4D4d]'>where to grow your buisness as a photographer: site or socialmedia?</p>
             <div className='pt-[6%]'>
             <Button2 className='mt-[10%]'/>
             </div>
               
             </div>
 
               
              

           
               
              
             <div className=' w-[56%] pt-[5%] pl-[10%] '>
                <img src={IL} alt=""
                width={400}/>
            
             </div>

             <div className='w-[60%] pl-[30%]  max-sm:pt-[20%]  items-center'   >
             <img src={Dot} alt='dot'
                width={30}/>
             </div>
            
            
             




    </div>
  
  
  )
}

export default Hero
