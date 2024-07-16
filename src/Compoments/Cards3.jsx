import React from 'react'
import imgs from'../Icon/Right.png'

const Cards3 = () => {
  return (
    <div className='pt-10'>

         <div className='  ml-[10%] w-full flex  items-center justify-center max-sm:flex-col max-sm:mt-5 max-sm:items-center max-sm:justify-center max-sm:mr-[17px] '>
        <div className='w-[15%] h-[290px] bg-card-bg bg-no-repeat    rounded-lg max-sm:mr-10 max-sm:w-[60%] z-10  '>
          <div className='flex justify-center'>
           <div className='w-[240px] rounded-lg bg-white pt-10 mt-[50%] h-[150px] mr-[10%] text-center  max-sm:ml-5 border-2 border-grey-500  max-sm:text-[10px]'>
            <p className='text-[#717171] font-bold'>Creating Streamlined Safeguarding Processes with OneRen</p>
            <div className='flex ml-20'>
              <span>Read more</span>

              <img src={imgs} alt='aa' className='ml-3'></img>
              </div>
           </div>
          </div>
        </div>
        <div className='w-[15%] h-[290px] bg-cards-bg  bg-no-repeat  rounded-lg max-sm:mt-[15%]  max-sm:w-[60%] max-sm:mr-10' >
             <div className='flex justify-center'>
              <div className='w-[240px] rounded-lg bg-white pt-10 mt-[50%] h-[150px] mr-[10%] text-center max-sm:mt-[100px] max-sm:ml-4 border-2 border-grey-500 max-sm:text-[10px]' >
              <p className='text-[#717171] font-bold'>What are your safeguarding responsibilities and how can you manage them?</p>
              <div className='flex ml-20 max-sm:mr-4'>
              <span>Read more</span>

              <img src={imgs} alt='aa 'className='ml-3'></img>
              </div>
              </div>
             </div>

            
        </div>
        <div className='w-[30%] h-[290px] bg-cards-bg1 bg-no-repeat   rounded-lg  max-sm:mt-4 max-sm:w-[60%] items-center justify-center max-sm:mr-10'>
             
        <div className='flex justify-center'>
          
              <div className='w-[90%]   rounded-lg bg-white pt-10 mt-[25%] h-[150px]  text-center mr-[55%]  shadow-white shadow-lg max-sm:ml-[20%] border-2 border-grey-500  max-sm:text-[10px]  max-sm:w-[590px]'>
              <p className='text-[#717171] font-bold'>Revamping the Membership Model with Triathlon Australia</p>
              <div className='flex ml-20 mt-5'>
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
