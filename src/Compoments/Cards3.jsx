import React from 'react'
import imgs from'../Icon/Right.png'

const Cards3 = () => {
  return (
    <div className='pt-10 ml-[12%] max-sm:flex-col max-sm:mr-10 max-sm:flex-wrap max-sm:align-stretch max-sm:justify-center max-sm:align-baseline space-x-2 md:mr-[30%]'>
    <div className='ml-[15%] w-full flex justify-center max-sm:flex-col max-sm:mt-5 max-sm:items-center'>
      <div className='w-[15%] h-[290px] bg-card-bg bg-no-repeat rounded-lg max-sm:w-[60%] sm:w-[60%] z-10 max-sm:mr-[64px] sm:mr-[10%] md:w-[40%] max-sm:w-[92%]'>
        <div className='flex justify-center'>
          <div className='w-[240px] rounded-lg bg-white pt-10 mt-[60%] h-[150px] mr-[10%] text-center max-sm:ml-5 sm:ml-0 border-2 border-grey-500 max-sm:text-[10px] sm:text-[12px] ml-4 max-sm:h-[120px] sm:h-[150px] lg:w-[230px] lg:mr-[20%] lg:mb-10'>
            <p className='text-[#717171] font-bold md:text-[13px] sm:text-[12px]'>Creating Streamlined Safeguarding Processes with OneRen</p>
            <div className='flex ml-10 sm:ml-0 lg:pl-[20%]'>
              <span className='md:text-[14px] sm:text-[12px] hover:text-[red]'><a href='#/'>Readmore</a></span>
              <img src={imgs} alt='aa' className='ml-3 sm:ml-1 sm:w-[20px]'></img>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[35%]  h-[290px] bg-cards-bg bg-no-repeat rounded-lg max-sm:mt-[15%] max-sm:w-[60%] sm:w-[60%] max-sm:mr-[90px] sm:mr-[10%] ml-4 md:w-[40%] '>
        <div className='flex justify-center'>
          <div className='w-[240px] rounded-lg bg-white pt-10 mt-[60%] h-[150px] mr-[10%] text-center max-sm:ml-5 sm:ml-0 border-2 border-grey-500 max-sm:text-[10px] sm:text-[12px] md:w-[290px] md:h-[130px] lg:h-[130] max-sm:h-[120px] sm:h-[150px] lg:w-[230px] lg:mr-[20%]'>
            <p className='text-[#717171] font-bold md:text-[13px] sm:text-[12px]'>What are your safeguarding responsibilities and how can you manage them?</p>
            <div className='flex ml-10 sm:ml-0 sm:mr-1 lg:pl-[20%]'>
              <span className='md:text-[14px] sm:text-[12px] hover:text-[red]'><a href='#/'>Readmore</a></span>
              <img src={imgs} alt='aa' className='ml-3 sm:ml-1 sm:w-[20px]'></img>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[20%] h-[290px] bg-cards-bg1 bg-no-repeat rounded-lg max-sm:mt-4 max-sm:w-[60%] sm:w-[60%] items-center justify-center max-sm:mr-[90px] sm:mr-[10%] ml-4 md:w-[40%] max-sm:w-[92%] md:hidden lg:block'>
        <div className='flex justify-center'>
          <div className='w-[240px] rounded-lg bg-white pt-10 mt-[60%] h-[150px] mr-[10%] text-center max-sm:ml-5 sm:ml-0 border-2 border-grey-500 max-sm:text-[10px] sm:text-[12px] sm:w-[80%] max-sm:h-[120px] sm:h-[150px] lg:w-[230px] lg:mr-[20%]'>
            <p className='text-[#717171] font-bold md:text-[13px] sm:text-[12px]'>Revamping the Membership Model with Triathlon Australia</p>
            <div className='flex ml-10 sm:ml-0 lg:pl-[20%]'>
              <span className='md:text-[14px] sm:text-[12px] hover:text-[red]'><a href='#/'>Readmore</a></span>
              <img src={imgs} alt='aa' className='ml-3 sm:ml-1 sm:w-[20px]'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
} 


export default Cards3
