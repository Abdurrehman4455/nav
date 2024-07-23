import React from 'react'
import Image from'../Images/image 9 (2).svg'
import imgs from'../Images/001.png'
import img2 from'..//Images/Logo (5).png'
import img4 from'..//Images/Logo (6).png'
import img5 from'..//Images/Logo (7).png'
import img6 from'..//Images/Logo (8).png'
import img7 from'..//Images/Logo (17).png'
import img8 from'../Icon/Right.png';
import Logo from'../Images/Logo.svg'
import Logo1 from'../Images/Logo (1).svg'
import Logo2 from'../Images/Logo (2).svg'
import Logo3 from'../Images/Logo (4).svg'
import Logo4 from'../Images/Logo (5).svg'
import Logo5 from'../Images/Logo (6).svg'
import Logo6 from'../Images/Right.svg'


const Customers = () => {
  return (
    <div className="flex justify-center max-sm:flex-col max-sm:mt-20 sm:flex-col sm:mt-10 md:flex-col md:mt-10 items-center lg:flex-row">
    <div className="w-[30%] max-sm:w-[60%] sm:w-[50%] md:w-[50%] lg:w-[30%] lg:mb-[22%]">
      <img src={Image} alt="frame" width={500} />
    </div>
    <div className="w-[40%] max-sm:w-full max-sm:pl-4 max-sm:pr-4 max-sm:pt-2 sm:w-[80%] sm:pl-4 sm:pr-4 sm:pt-2 md:w-[80%] md:pl-4 md:pr-4 md:pt-4 lg:w-[40%] lg:mt-10">
      <div className="pb-[14%] sm:pb-[10%] md:pb-[10%]">
        <p className="text-[#717171] text-[20px] pb-[4%] max-sm:text-left sm:text-center sm:text-[18px] md:text-center md:text-[18px]">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
        </p>
        <h1 className="font-bold text-[#4CAF4F] text-[25px] max-sm:text-left sm:text-center md:text-center">Tim Smith</h1>
        <p className="text-[#89939E] max-sm:text-left sm:text-center md:text-center">British Dragon Boat Racing Association</p>
        <div className="pt-4 sm:pt-2 md:pt-2 lg:flex">
          <div className="flex justify-between w-[70%] max-sm:flex sm:flex-wrap sm:justify-center sm:w-full md:flex-col md:w-full md:items-center max-sm:mt-3 lg:flex">
            <div className="flex justify-center mb-4 sm:w-[30%] md:w-full">
              <img src={Logo} alt="log" className="sm:w-[40px] sm:h-[40px] md:w-[40px] md:h-[40px]" />
            </div>
            <div className="flex justify-center mb-4 sm:w-[30%] md:w-full">
              <img src={Logo1} alt="log" className="sm:w-[40px] sm:h-[40px] md:w-[40px] md:h-[40px]" />
            </div>
            <div className="flex justify-center mb-4 sm:w-[30%] md:w-full">
              <img src={Logo2} alt="log" className="sm:w-[40px] sm:h-[40px] md:w-[40px] md:h-[40px]" />
            </div>
            <div className="flex justify-center mb-4 sm:w-[30%] md:w-full">
              <img src={Logo3} alt="log" className="sm:w-[40px] sm:h-[40px] md:w-[40px] md:h-[40px]" />
            </div>
            <div className="flex justify-center mb-4 sm:w-[30%] md:w-full">
              <img src={Logo4} alt="log" className="sm:w-[40px] sm:h-[40px] md:w-[40px] md:h-[40px]" />
            </div>
            <div className="flex justify-center mb-4 sm:w-[30%] md:w-full">
              <img src={Logo5} alt="log" className="sm:w-[40px] sm:h-[40px] md:w-[40px] md:h-[40px]" />
            </div>
            <div className="flex items-center lg:mb-[14px] sm:w-[60%] md:w-full">
              <h1 className="font-bold text-[#4CAF4F] max-sm:text-[10px] max-sm:ml-0 max-sm:mt-2 sm:text-center md:text-center">Meetallcustomers</h1>
              <img src={Logo6} alt="a" className="sm:w-[40px] sm:h-[40px] md:w-[40px] md:h-[40px] lg:w-[10px] lg:ml-[5px] lg:mt-[2px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  
  )
}

export default Customers
