import React from 'react'
import icon8 from'../Icon/Icon (8).png'
import icon9 from'../Icon/Icon (9).png'
import a from'../Images/2.png'
import ba from '../Images/1 (1).png'
import ca from '../Images/3.png'
import da from'../Images/4.png'
const Acheivements = () => {
  return (
    <div className='flex justify-betwween mt-[10%] ml-[3%] max-sm:flex-col max-sm:items-center'>
      <div className='w-[60%] ml-[10%]'>
       <h1 className=' text-[#4D4D4D] font-semibold text-[50px] mt-4 max-sm:text-[20px]'>Helping local</h1><span className='text-[#4CAF4F] font-semibold text-[50px] mt-4 max-sm:text-[20px]'>business reinvent itself</span>
       <p className='text-[#18191]  text-[19px] mt-2 max-sm:text-[15px]'>We reached here with our hard work and dedication </p>
     </div>


     <div className="w-[60%] max-sm:mt-10 max-sm:items-center">
      <div className="flex flex-wrap justify-between max-sm:flex-col">
        <div className="flex w-[70%] justify-between mb-4">
          <img src={a} alt="a" className="w-[300px]"/>
          <img src={ba} alt="ba" className="w-[300px]"/>
        </div>
        <div className="flex w-[70%] justify-between mb-4">
          <img src={ca} alt="a" className="w-[300px]"/>
          <img src={da} alt="ba" className="w-[300px]"/>
        </div>
      </div>
    </div>

     

     

 
         
    

    
     
    </div>
  )
}

export default Acheivements
