import React from 'react'
import imgs from'../Icon/Right.png'
import { FaLongArrowAltRight } from "react-icons/fa";
const Cards3 = () => {
  return (
    <div className=' flex  space-x-1 p-[200px] max-sm:p-5 max-sm:flex-col md:justify-center sm:justify-center sm:flex'>
      <div className='  bg-card-bg   bg-no-repeat bg-contain  flex justify-center'>
         <div className='flex flex-col justify-center mt-[170px] w-[80%]  h-[60%]  bg-[white] items-center rounded-lg border-2 border-[grey] md:mt-[110px]  md:p-6 lg:mt-[160px] max-sm:mb-10 '>

             <p className='p-10'>What are your safeguarding responsibilities and how can you manage them?</p>
             <div className='flex'>
             <a href='/#'><span className='text-green-500'>Readmore </span></a>
             <span className='text-green-500 mt-1'><FaLongArrowAltRight/></span>
             </div>
           
         </div>
      </div>
      <div className='  bg-cards-bg   bg-no-repeat bg-contain  flex justify-center'>
         <div className='flex flex-col justify-center mt-[170px] w-[80%]  h-[60%]  bg-[white] items-center rounded-lg border-2 border-[grey] md:p-6 lg:mt-[160px] md:mt-[110px] max-sm:mb-10 '>

         <p className='p-10'>What are your safeguarding responsibilities and how can you manage them?</p>
         <div className='flex'>
             <a href='/#'><span className='text-green-500'>Readmore </span></a>
             <span className='text-green-500 mt-1'><FaLongArrowAltRight/></span>
             </div>
           
         </div>
      </div>
      <div className='  bg-cards-bg1   bg-no-repeat bg-contain  flex justify-center'>
         <div className='flex flex-col justify-center mt-[170px] w-[80%]  h-[60%]  bg-[white] items-center rounded-lg border-2 border-[grey] md:p-6 lg:mt-[160px] md:mt-[110px]'>

         <p className='p-10'>What are your safeguarding responsibilities and how can you manage them?</p>
             <div className='flex'>
             <a href='/#'><span className='text-green-500'>Readmore </span></a>
             <span className='text-green-500 mt-1'><FaLongArrowAltRight/></span>
             </div>
           
         </div>
      </div>
      {/* <div className='  bg-cards-bg   bg-no-repeat bg-cover w-[20%] h-64'>
        a
      </div> */}

      {/* <div className='  bg-cards-bg1   bg-no-repeat bg-cover w-[20%] h-64'>
        a
      </div> */}
      </div>
  )
} 


export default Cards3
