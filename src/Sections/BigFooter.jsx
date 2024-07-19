import React from 'react'
import Logo from'../Icon/Logo.png';
import vector from'../Images/Vector.png'
import images from'../Images/Social Links.png'
import Instabutton from '../SocialButtons/Instabutton';
import Logo1 from'../Images/Icon (5).svg';


const BigFooter = () => {
  return (
    <div className='bg-[#263238] w-full h-[300px] flex justify-around max-sm:flex-col max-sm:h-[700px] max-sm:items-center lg:h-auto'>
  <div className="font-semibold flex mt-10 p-[2%] md:flex-col md:items-center lg:flex-row lg:justify-start lg:items-start">
    <div>
      <img 
        src={Logo1} 
        alt="logo" 
        className="w-[40px] max-sm:w-[60px] md:w-[50px] lg:w-[40px]"
      />
    </div>

    <div className='text-center lg:text-left md:ml-4'>
      <h1 className='ml-2 font-bold text-lg sm:text-4xl leading-9 text-[white]'>Next Cent</h1>

      <p className='text-[#F5F7FA] mt-10'>Copyright © 2020 Landify UI Kit.</p>
      <p className='text-[#F5F7FA]'>All rights reserved</p>
      <div className='flex space-x-1 mt-5 lg:mt-5 md:mt-10 max-sm:mr-5'>
        <Instabutton title='facebook button' className='mt-10' />
      </div>
    </div>
  </div> 

  <div className='flex justify-around w-[70%] max-sm:flex-col max-sm:items-center md:flex-row md:justify-center md:w-full lg:w-[70%] max-sm:mb-[100%]'>
    <div className='text-white lg:mt-[5%] max-sm:text-[15px] max-sm:flex-col max-sm:mb-[] md:mt-5  md:w-[30%]'>
      <h1 className='font-bold'>Company</h1>
      <div className='text-white mt-2'>About us</div>
      <div className='text-white mt-2'>Blog</div>
      <div className='text-white mt-2'>Contact us</div>
      <div className='text-white mt-2'>Pricing</div>
      <div className='text-white mt-2'>Testimonials</div>
    </div>
    
    <div className='text-white p-[4%] max-sm:text-[15px] max-sm:pb-6 max-sm:ml-6 max-sm:mb-[50%] md:mt-0 md:w-[30%]'>
      <h1 className='font-bold'>Support</h1>
      <div className='text-white mt-5'>Help center</div>
      <div className='text-white mt-5'>Term of service</div>
      <div className='text-white mt-5'>Legal</div>
      <div className='text-white mt-5'>Privacy policy</div>
      <div className='text-white mt-5'>Status</div>
    </div>
    
    <div className='text-white p-[4%] max-sm:text-[16px] max-sm:ml-10 md:mt-0 md:w-[30%] md:hidden lg:block  max-sm:hidden'>
      <h1 className='font-bold max-sm:text-center'>Stay up to date</h1>
      <div className='w-full lg:mt-5 relative md:w-[150px]'>
        <span className='absolute mt-4 w-[140px] ml-[10%] '>
          <img src={vector} alt='a' className='ml-[150%]' />
        </span>
        <input className=' mr-[10%]text-[white] rounded-lg h-[50px] w-[300px] bg-[grey] max-sm:w-[210px]  lg:w-[260px] md:w-auto' type='text' placeholder='  Enter your email address' />
      </div>
    </div>
  </div>
</div>

  )
}

export default BigFooter
