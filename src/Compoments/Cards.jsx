import React from 'react'
import Icon from'../Icon/Icon (5).png'
import img from'../Icon/Icon (6).png'
import img1 from'../Icon/Icon (7).png'

const Cards = ({content,content2,content3,content4,content5,content6}) => {
  return (
  
        <div className='flex justify-around space-x-1 items-center pt-[5%] max-sm:flex-col'  >
          <div className='w-[20%] h-[270px] bg-[white] rounded-lg  border-[1px] border-white-90 shadow-lg flex justify-center items-center   max-sm:w-[60%] max-sm:mb-[25px] max-sm:mt-10'>
      
            <div className=' flex  flex-col items-center'>
            <div>
            <img src={Icon} alt='icon'></img><br/>
            </div>
            <div>
            <h1 className=' text-[#4D4D4D] font-bold text-[30px] max-sm:text-[20px]' >{content}</h1> <span className=' text-[#4D4D4D] font-bold text-[30px] mr-1 max-sm:text-[20px]'>{content2}</span>
           </div>

           <div>
            <p className='text-center text-[#717171]'>Our membership management<br/>software provides full automation of<br/> membership renewals and payments</p>
           </div>
           </div>

          </div>
           

       <div className='w-[20%] h-[270px] bg-[white] rounded-lg  border-[1px] border-white-90 shadow-lg flex justify-center items-center max-sm:w-[60%]'>
      
      <div className=' flex  flex-col items-center'>
      <div>
      <img src={img} alt='icon'></img><br/>
      </div>
      <div>
      <h1 className=' text-[#4D4D4D] font-bold text-[30px] ml-8 max-sm:text-[20px]' >{content3}</h1> <span className=' text-[#4D4D4D] font-bold text-[30px] mr-1 max-sm:text-[20px] '>{content4}</span>
     </div>
     <div>
            <p className='text-center text-[#717171]'>Our membership management<br/>software provides full automation of<br/> membership renewals and payments</p>
           </div>
     </div>

    </div>

    <div className='w-[20%] h-[270px] bg-[white] rounded-lg  border-[1px] border-white-90 shadow-lg flex justify-center items-center max-sm:text-[20px] max-sm:w-[60%] max-sm:mt-[15px]'>
      
      <div className=' flex  flex-col items-center'>
      <div>
      <img src={img1} alt='icon'></img><br/>
      </div>
      <div>
      <h1 className=' text-[#4D4D4D] font-bold text-[30px] max-sm:text-[20px]' >{content5}</h1> <span className=' text-[#4D4D4D] font-bold text-[30px] mr-1 max-sm:text-[20px] ml-5'>{content6}</span>
     </div>
     <div>
            <p className='text-center text-[#717171] max-sm:text-[14px]'>Our membership management<br/>software provides full automation of<br/> membership renewals and payments</p>
           </div>
     </div>

    </div>

    
    
          
        </div>
      
  )
}

export default Cards
