import React from 'react'
import imgs from'../Icon/Right.png'
import { FaLongArrowAltRight } from "react-icons/fa";
const Cards3 = () => {
  return (
    <div className=' flex ml-[5%] mt-5 justify-center p-10 space-x-2 max-sm:ml-0  max-sm:flex-col max-sm:items-center '>
      <div className='  bg-card-bg  h-[400px] bg-no-repeat bg-contain max-sm:bg-cover'>
          
            <div className='p-[10px] mt-[50%] ml-0 flex justify-center w-[100%] bg-[white] mt-[30%] rounded-lg  shadow-lg shadow-grey border-[6px] border-grey-500 mr-[30%]'>
             
             <div className='flex-col'>
            <div>
                   
            <p className='text-[#717171] p-6'>What are your safeguarding responsibilities and how can you manage them?</p>

            </div>

            <div className='justify-center flex'>
                <a href='/#'><span className='text-[Green]'>Readmore</span></a>
                <div className='text-[Green] ml-2 mt-1'><FaLongArrowAltRight/></div>
               </div>
               </div>
               
               
      
            </div>
          
      </div>
  
      <div className=' p-[10px] bg-cards-bg  h-[400px] bg-no-repeat bg-contain'>
      <div className=' p-[10px]  mt-[50%]  flex justify-center w-[100%] bg-[white] mt-[30%] rounded-lg  shadow-lg shadow-grey border-[6px] border-grey-500'>
      <div className='flex-col'>
            <div>
                   
            <p className='text-[#717171] p-6 '>What are your safeguarding responsibilities and how can you manage them?</p>

            </div>
               
               <div className='text-center flex justify-center'>
                <a href='/#'><span className=' text-[Green]'>Readmore </span></a>
                <div className='text-[green] ml-2 mt-1'><FaLongArrowAltRight/></div>
               </div>
               </div>
      </div>  
        
      </div>
      <div className='p-[10px] bg-cards-bg1 h-[400px] bg-no-repeat bg-contain'>
      <div className='p-[10px]  mt-[50%]  flex justify-center w-[100%] bg-[white] mt-[30%] rounded-lg  shadow-lg shadow-grey border-[6px] border-grey-500'>
      <div className=''>
            <div>
                   
            <p className='text-[#717171] p-6'>What are your safeguarding responsibilities and how can you manage them?</p>
            
            </div>
            <div className='text-center flex justify-center'>
                <a href='/#'><span className=' text-[Green]'>Readmore </span></a>
                <div className='text-[green] ml-2 mt-1'><FaLongArrowAltRight/></div>
               </div>
          
            
              
      </div>
      </div>  
        
      </div>
    </div>
  
  )
} 


export default Cards3
