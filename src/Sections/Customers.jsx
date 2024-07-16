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
    <div>
       <div className='flex justify-center  max-sm:flex-col max-sm:mt-20 items-center' >
      <div className='w-[30%] max-sm:w-[60%]'>
        <img src={Image} alt='frame'
        width={500}/>
      </div>
      <div className='w-[40%]'>
    <div className='pb-[14%]'>
 
    <p className='text-[#717171] text-[20px] pb-[4%] '>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
    <h1 className='font-bold text-[#4CAF4F] text-[25px] '>Tim Smith</h1>
    <p className='text-[#89939E] '>British Dragon Boat Racing Assocation</p>


    <div className='pt-4 max'  >

        <div className='flex justify-between w-[70%] max-sm:flex-col  items-center max-sm:mt-3'>
    
        <div>
          <img src={imgs} alt='log'></img>
        </div>
         
        <div>
        <img src={img2} alt='log'></img>
        </div>

        <div>
        <img src={img4} alt='log'></img>
        </div>
         
        <div>
        <img src={img5} alt='log'></img>
        </div>
        <div>
        <img src={img6} alt='log'></img>
        </div>
         
        <div>
        <img src={img7} alt='log'></img>
        </div>

        <div className='flex max-sm:flex' >
         <h1 className='font-bold  text-[#4CAF4F] max-sm:text-[10px] max-sm:ml-5'>Meet all customers </h1>
         <div className='pl-2 mt-1'  >
         <img src={img8} alt='a'></img>
         </div>
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
