import React from 'react'
import Logo from'../Icon/Logo.png';
import vector from'../Images/Vector.png'
import images from'../Images/Social Links.png'
import Instabutton from '../SocialButtons/Instabutton';


const BigFooter = () => {
  return (
    <div className='bg-[#263238] w-full h-[300px]  flex justify-around max-sm:flex-col  max-sm:h-[1500px] max-sm:items-center   '>
      <div className="  font-semibold flex mt-10  p-[2%]    ">
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
         <div className='flex space-x-1 mt-5 lg:mt-5 md:mt -5 max-sm:mt-10 max-sm:mr-5 max-sm:mt-10'>
         
         <Instabutton   title='facebook button'className='mt-10 '>
         </Instabutton>
         </div>
      </div>
    

    </div> 

    <div className='flex  justify-around w-[70%]  max-sm:flex-col  max-sm:items-center '>

    <div className='text-white mt-[5%]  max-sm:text-[15px] max-sm:flex-col max-sm:mb-[30%] '>
        <h1 className='font-bold'>Company</h1>

     <div className='text-white mt-2'>About us</div>
     <div className='text-white  mt-2'>BLog</div>
     <div className='text-white mt-2'>Contact us</div>
     <div className='text-white mt-2'>Pricing</div>
     <div className='text-white mt-2'>Testimonials</div>
    </div>
    <div className='text-white p-[4%]   max-sm:text-[15px] max-sm:pb-6 max-sm:ml-6 max-sm:mb-[50%]'>
        <h1 className='font-bold '>Support</h1>
    <div className='text-white mt-5'>Help center</div>
     <div className='text-white mt-5'>Term  of service</div>
     <div className='text-white mt-5'>Legal </div>
     <div className='text-white mt-5'>Privacy policy</div>
     <div className='text-white mt-5'>status</div>

    </div>
    <div className='text-white p-[4%]  max-sm:text-[16px] max-sm:ml-10'>
        < h1 className='font-bold max-sm:text-center'> Stay up to date</h1>
        <div className='w-[50%] lg:mt-5'>
             <span><img src={vector} alt='a' className='absolute mt-4 ml-[18%] mt-5  max-sm:ml-[50%] '></img></span>
            <input  className='text-[white] rounded-lg  h-[50px] w-[300px] bg-[grey] max-sm:w-[210px]' type='text' placeholder='   enter your emailadress  '>
             </input>

        
           
        </div>
    </div>
    </div>
    
    </div>
  )
}

export default BigFooter
