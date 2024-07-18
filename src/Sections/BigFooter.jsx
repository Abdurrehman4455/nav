import React from 'react'
import Logo from'../Icon/Logo.png';
import vector from'../Images/Vector.png'
import Instabutton from'../SocialButtons/Instabutton';
import Button from'../SocialButtons/Icon/Path.png';
const BigFooter = () => {
  return (
    <div className='bg-[#263238] w-full h-[300px]  flex justify-around max-sm:flex-col  max-sm:h-[700px] max-sm:items-center'>
      <div className="  font-semibold flex mt-10  p-[2%]   ">
        <div>
        <img 
            src={Logo} 
            alt="logo" 
            className="w-[40px] max-sm:w-[60px]"

        />
      
      </div>

      <div >
        <h1 className='ml-2 font-bold text-lg sm:text-4xl leading-9 text-[white]'>Next Cent</h1>

         <p className='text-[#F5F7FA] mt-10'>Copyright © 2020 Landify UI Kit.</p>
         <p className='text-[#F5F7FA]'>All rights reserved</p>
         <div className='flex space-x-1 mt-3'>
          <Instabutton icon={Button}name='ali' className="ml-10"/>

         
         </div>
      </div>
    

    </div> 

    <div className='flex  justify-around w-[70%]  max-sm:flex-col  max-sm:items-center '>

    <div className='text-white p-[4%]  max-sm:text-[15px] max-sm:flex-col '>
        <h1 className='font-bold'>Company</h1>

     <div className='text-white'>About us</div>
     <div className='text-white'>BLog</div>
     <div className='text-white'>Contact us</div>
     <div className='text-white'>Pricing</div>
     <div className='text-white'>Testimonials</div>
    </div>
    <div className='text-white p-[4%]   max-sm:text-[15px] max-sm:pb-6 max-sm:ml-6'>
        <h1 className='font-bold'>Support</h1>
    <div className='text-white'>Help center</div>
     <div className='text-white'>Term  of service</div>
     <div className='text-white'>Legal </div>
     <div className='text-white'>Privacy policy</div>
     <div className='text-white'>status</div>

    </div>
    <div className='text-white p-[4%]  max-sm:text-[16px] max-sm:ml-10'>
        < h1 className='font-bold max-sm:text-center'> Stay up to date</h1>
        <div className='w-full'>
             <span className='max-sm:ml-0'><img src={vector} alt='a' className='absolute mt-4 ml-[16%] max-sm:ml-[45%] max-sm:mt-5 sm:ml-[10%] lg:ml-[16%] '></img></span>
            <input  className='text-[white] rounded-lg  h-[50px] w-[300px] bg-[grey] max-sm:w-[210px]' type='text' placeholder='  enter your email adress  '>
             </input>

        
           
        </div>
    </div>
    </div>
    
    </div>
  )
}

export default BigFooter
