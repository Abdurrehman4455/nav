import React from 'react'
import imgs from'../Icon/Right.png'

const Cards3 = () => {
  return (
    <div className='pt-10 ml-[12%] max-sm:flex-col max-sm:mr-2 max-sm: flex-wrap max-sm:align-strech max-sm: justify-center  max-sm:align-baseline space-x-2 ' >

         <div className='ml-[15%]   w-full flex justify-center  max-sm:flex-col max-sm:mt-5 max-sm:items-center'>
        <div className='w-[15%] h-[290px] bg-card-bg bg-no-repeat     rounded-lg  max-sm:w-[60%] z-10  max-sm:mr-[64px] '>
          <div className='flex justify-center'>
           <div className='w-[240px] rounded-lg bg-white pt-10 mt-[60%] h-[150px] mr-[10%] text-center  max-sm:ml-5 border-2 border-grey-500  max-sm:text-[10px] ml-4 '>
            <p className='text-[#717171] font-bold'>Creating Streamlined Safeguarding Processes with OneRen</p>
            <div className='flex ml-20'>
              <span>Read more</span>
 
              <img src={imgs} alt='aa' className='ml-3'></img>
              </div>
           </div>
          </div>
        </div>
        <div className='w-[15%] h-[290px] bg-cards-bg  bg-no-repeat   rounded-lg max-sm:mt-[15%]  max-sm:w-[60%]  max-sm:mr-[90px] ml-4 ' >
             <div className='flex justify-center'>
             <div className='w-[240px] rounded-lg bg-white pt-10 mt-[60%] h-[150px] mr-[10%] text-center  max-sm:ml-5 border-2 border-grey-500  max-sm:text-[10px]'>
              <p className='text-[#717171] font-bold'>What are your safeguarding responsibilities and how can you manage them?</p>
              <div className='flex ml-20 max-sm:mr-4'>
              <span>Read more</span>

              <img src={imgs} alt='aa 'className='ml-3'></img>
              </div>
              </div>
             </div>

            
        </div>
        <div className='w-[20%] h-[290px] bg-cards-bg1 bg-no-repeat    rounded-lg  max-sm:mt-4 max-sm:w-[60%] items-center justify-center  max-sm:mr-[90px] ml-4 '>
             
        <div className='flex justify-center'>
           
        <div className='w-[240px] rounded-lg bg-white pt-10 mt-[60%] h-[150px] mr-[10%] text-center  max-sm:ml-5 border-2 border-grey-500  max-sm:text-[10px]'>
              <p className='text-[#717171] font-bold'>Revamping the Membership Model with Triathlon Australia</p>
              <div className='flex ml-20'>
              <span>Read more</span>

              <img src={imgs} alt='aa'className='ml-3'></img>
              </div>
              </div>
             </div>
             

          
        </div>

        
        <div className='w-[20%] h-[290px] bg-cards-bg1 bg-no-repeat  mr-[50%]      rounded-lg  max-sm:mt-4 max-sm:w-[60%] items-center justify-center max-sm:mr-[90px] ml-4 '>
             
             <div className='flex justify-center '>
               
             <div className='w-[240px] rounded-lg bg-white pt-10 mt-[60%] h-[150px] mr-[10%] text-center  max-sm:ml-5 border-2 border-grey-500  max-sm:text-[10px]'>
                   <p className='text-[#717171] font-bold'>Revamping the Membership Model with Triathlon Australia</p>
                   <div className='flex ml-20 mt-2'>
                   <span>Read more</span>
     
                   <img src={imgs} alt='aa'className='ml-3'></img>
                   </div>
                   </div>
                  </div>
                  
     
               
             </div>

        
            
        </div> 
        
    </div>
  )
} 


export default Cards3
