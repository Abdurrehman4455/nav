import React from 'react'
import Logo from'../Icon/Logo.png';
import vector from'../Images/Vector.png'
import Instabutton from'../SocialButtons/Instabutton';
import Button from'../SocialButtons/Icon/Path.png';
const BigFooter = () => {
  return (
    <div className="bg-[#263238] w-full h-[300px] flex justify-around max-sm:flex-col max-sm:h-[700px] max-sm:items-center md:flex-col md:h-auto md:items-center lg:flex-row lg:h-[300px]">
  <div className="font-semibold flex mt-10 p-[2%] md:flex-col md:items-center lg:flex-row">
    <div>
      <img src={Logo} alt="logo" className="w-[40px] max-sm:w-[60px] md:w-[50px]" />
    </div>
    <div className="md:text-center md:mt-4 lg:ml-4">
      <h1 className="ml-2 font-bold text-lg sm:text-4xl leading-9 text-[white]">Next Cent</h1>
      <p className="text-[#F5F7FA] mt-10">Copyright © 2020 Landify UI Kit.</p>
      <p className="text-[#F5F7FA]">All rights reserved</p>
      <div className="flex space-x-1 mt-3 md:justify-center">
        <Instabutton icon={Button} name="ali" className="ml-10" />
      </div>
    </div>
  </div>

  <div className="flex justify-around w-[70%] max-sm:flex-col max-sm:items-center md:flex-col md:items-center md:w-full lg:flex-row lg:items-start lg:w-[70%]">
    <div className="text-white p-[4%] max-sm:text-[15px] md:text-center md:w-full md:mb-4 lg:text-left">
      <h1 className="font-bold">Company</h1>
      <div className="text-white">About us</div>
      <div className="text-white">Blog</div>
      <div className="text-white">Contact us</div>
      <div className="text-white">Pricing</div>
      <div className="text-white">Testimonials</div>
    </div>
    <div className="text-white p-[4%] max-sm:text-[15px] max-sm:pb-6 max-sm:ml-6 md:text-center md:w-full md:mb-4 lg:text-left">
      <h1 className="font-bold">Support</h1>
      <div className="text-white">Help center</div>
      <div className="text-white">Term of service</div>
      <div className="text-white">Legal</div>
      <div className="text-white">Privacy policy</div>
      <div className="text-white">Status</div>
    </div>
    <div className="text-white p-[4%] max-sm:text-[16px] md:text-center md:w-full lg:text-left">
      <h1 className="font-bold">Stay up to date</h1>
      <div className="w-full lg:mt-4 md:mt-2">
        <span className="max-sm:ml-0">
          <img src={vector} alt="a" className="absolute mt-4 ml-[16%] max-sm:ml-[45%] max-sm:mt-5 sm:ml-[10%] lg:ml-[16%] md:ml-[59%]" />
        </span>
        <input className="text-[white] rounded-lg h-[50px] w-[300px] bg-[grey] max-sm:w-[210px] md:w-[250px] " type="text" placeholder="   enter your email address" />
      </div>
    </div>
  </div>
</div>

  )
}

export default BigFooter
