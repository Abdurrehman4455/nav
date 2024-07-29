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
import { FaArrowRightLong } from "react-icons/fa6";


const Customers = () => {
  return (
    <div className="flex justify-center max-sm:flex-col max-sm:mt-20 sm:flex-col sm:mt-10 md:flex-col lg:flex md:mt-10 lg:mt-0 items-center lg:flex-row">

    <div className="w-[30%] max-sm:w-[60%] sm:w-[50%] md:w-[50%] lg:w-[30%] pb-[17%] ">
      <img src={Image} alt="frame" width={500} />
    </div>
    <div className="w-[40%] max-sm:w-full max-sm:pl-4 max-sm:pr-4 max-sm:pt-2 sm:w-[80%] sm:pl-4 sm:pr-4 sm:pt-2 md:w-[80%] md:pl-4 md:pr-4  lg:w-[40%] mb-[15%]">
      <div className=" flex  flex-wrap  sm:pb-[10%]  ">
        <p className="text-[#717171] text-[20px]   max-sm:text-left sm:text-center sm:text-[18px] md:text-center lg:text-left md:text-[18px]  max-sm:text-[14px]">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
        </p>


        <div className='max-sm:flex-col'>
      <div className='ml-4'>
      <h1 className="font-bold text-[#4CAF4F] text-[25px] max-sm:text-left sm:text-center md:text-center lg:text-left ">Tim Smith</h1><br/>
      </div>
      <div className='mb-3 ml-3'>
      <p className="text-[#89939E] max-sm:text-left sm:text-center md:text-center lg:text-left">British Dragon Boat Racing Association</p>
      </div>

      <div className='flex md:justify-center lg:justify-start space-x-2 sm:justify-center ml-3 l'>
       
       <div>
       <img src={Logo} alt="" />
       </div>

       <div>
       <img src={Logo1} alt="" />
       </div>
       
       <div>
       <img src={Logo2} alt="" />
       </div>
       <div>
       <img src={Logo3}alt="" />
       </div>
       <div>
       <img src={Logo4}alt="" />
       </div>
       <div>
       <img src={Logo5} alt="" />
       </div>
       <div className='flex'>
       <p className='text-[#4CAF4F] ml-2 flex'> Meet all customers <FaArrowRightLong className='ml-3 mt-2'></FaArrowRightLong></p>
       </div>
      </div>
      </div>




       
    
      </div>
      
    </div>
  </div>
  

  
  )
}

export default Customers
