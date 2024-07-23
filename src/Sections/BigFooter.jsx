import React from 'react'
import Logo from'../Icon/Logo.png';
import vector from'../Images/Vector.png'
import images from'../Images/Social Links.png'
import Instabutton from '../SocialButtons/Instabutton';
import Logo1 from'../Images/Icon (5).svg';


const BigFooter = () => {
  return (
    <div className='bg-[#263238] w-full h-auto flex flex-col lg:flex-row lg:h-[400px] max-sm:h-[700px] items-center lg:justify-around p-6 lg:p-10'>
      
    {/* Logo and Info Section */}
    <div className='flex flex-col lg:flex-row lg:items-start lg:justify-start w-full lg:w-[30%] text-center lg:text-left'>
      <div className='flex justify-center lg:justify-start'>
        <img 
          src={Logo1} 
          alt="logo" 
          className="w-[60px] sm:w-[50px] md:w-[50px] lg:w-[40px]"
        />
      </div>
      <div className='mt-4 lg:mt-0 lg:ml-4'>
        <h1 className='font-bold text-lg sm:text-2xl text-white'>Next Cent</h1>
        <p className='text-[#F5F7FA] mt-5 sm:mt-2'>Copyright © 2020 Landify UI Kit.</p>
        <p className='text-[#F5F7FA]'>All rights reserved</p>
        <div className='flex justify-center lg:justify-start mt-5'>
          <Instabutton title='facebook button' className='mt-2' />
        </div>
      </div>
    </div>

    {/* Links Section */}
    <div className='flex flex-col lg:flex-row lg:w-[70%] w-full mt-6 lg:mt-0 lg:justify-around'>
      
      {/* Company Links */}
      <div className='text-white lg:w-[30%] sm:text-[15px] mb-6 lg:mb-0'>
        <h1 className='font-bold text-lg sm:text-xl'>Company</h1>
        <div className='mt-2'>About us</div>
        <div className='mt-2'>Blog</div>
        <div className='mt-2'>Contact us</div>
        <div className='mt-2'>Pricing</div>
        <div className='mt-2'>Testimonials</div>
      </div>

      {/* Support Links */}
      <div className='text-white lg:w-[30%] sm:text-[15px] mb-6 lg:mb-0'>
        <h1 className='font-bold text-lg sm:text-xl'>Support</h1>
        <div className='mt-5'>Help center</div>
        <div className='mt-5'>Terms of service</div>
        <div className='mt-5'>Legal</div>
        <div className='mt-5'>Privacy policy</div>
        <div className='mt-5'>Status</div>
      </div>

      {/* Subscribe Section */}
      <div className='text-white lg:w-[30%] sm:w-[60%] sm:mb-[20%] md:hidden lg:block'>
        <h1 className='font-bold text-lg sm:text-xl text-center'>Stay up to date</h1>
        <div className='relative mt-5 md:hidden sm:hidden'>
          <span className='absolute top-4 left-1/2 transform -translate-x-1/2'>
            <img src={vector} alt='vector graphic' />
          </span>
          <input className='text-white rounded-lg h-[50px] w-full sm:w-[210px] bg-[grey] pl-3' type='text' placeholder='Enter your email address' />
        </div>
      </div>
    </div>
  </div>
  

  )
}

export default BigFooter
