import React from 'react'
import Image from'../Images/image 9 (1).png'
import imgs from'../Images/001.png'
import img2 from'..//Images/Logo (5).png'
import img4 from'..//Images/Logo (6).png'
import img5 from'..//Images/Logo (7).png'
import img6 from'..//Images/Logo (8).png'
import img7 from'..//Images/Logo (17).png'
import img8 from'../Icon/Right.png';

const Customers = () => {
  return (
    <div className="flex justify-center max-sm:flex-col max-sm:mt-20 md:flex-col md:mt-10 items-center">
  <div className="w-[30%] max-sm:w-[60%] md:w-[50%] lg:w-[30%]">
    <img src={Image} alt="frame" width={500} />
  </div>
  <div className="w-[40%] max-sm:w-full max-sm:pl-4 max-sm:pr-4 max-sm:pt-2 md:w-full md:pl-0 md:pr-4 md:pt-2 lg:w-[50%] lg:pl-[2%] lg:pt-[5%]">
    <div className="pb-[14%] md:pb-[10%]">
      <p className="text-[#717171] text-[20px] pb-[4%] max-sm:text-left md:text-[18px] md:text-center">
        Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
      </p>
      <h1 className="font-bold text-[#4CAF4F] text-[25px] max-sm:text-left md:text-center">Tim Smith</h1>
      <p className="text-[#89939E] max-sm:text-left md:text-center">British Dragon Boat Racing Association</p>
      <div className="pt-4 md:pt-2">
        <div className="flex justify-between w-[70%] max-sm:flex md:flex-col md:w-full md:items-center max-sm:mt-3">
          <div className="flex md:justify-center md:mb-2">
            <img src={imgs} alt="log" className="md:w-[40px] md:h-[40px]"/>
          </div>
          <div className="flex md:justify-center md:mb-2">
            <img src={img2} alt="log" className="md:w-[40px] md:h-[40px]"/>
          </div>
          <div className="flex md:justify-center md:mb-2">
            <img src={img4} alt="log" className="md:w-[40px] md:h-[40px]"/>
          </div>
          <div className="flex md:justify-center md:mb-2">
            <img src={img5} alt="log" className="md:w-[40px] md:h-[40px]"/>
          </div>
          <div className="flex md:justify-center md:mb-2">
            <img src={img6} alt="log" className="md:w-[40px] md:h-[40px]"/>
          </div>
          <div className="flex md:justify-center md:mb-2">
            <img src={img7} alt="log" className="md:w-[40px] md:h-[40px]"/>
          </div>
          <div className="flex max-sm:flex max-sm:items-center md:flex-col md:items-center">
            <h1 className="font-bold text-[#4CAF4F] max-sm:text-[10px] max-sm:ml-0 max-sm:mt-2 md:text-center">Meet all customers</h1>
            <div className="pl-2 mt-1 max-sm:pl-0 md:pl-0 md:mt-2">
              <img src={img8} alt="a" className="md:w-[40px] md:h-[40px]"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  
  )
}

export default Customers
