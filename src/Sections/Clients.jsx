import React from 'react'
import Logo1 from '../Images/Logo (4).png'
import Logo2 from '../Images/Logo (5).png'
import Logo3 from '../Images/Logo (6).png'

import Logo4 from '../Images/Logo (7).png'
import Logo5 from '../Images/Logo (8).png'
import Logo6 from '../Images/Logo (9).png'
import Logo7 from '../Images/Logo (10).png'


const Clients = () => {
  return (
    <div >
         <div className=''>
          <h1 className='text-center text-[#4D4D4D] font-semibold text-[50px] mt-4 max-sm:text-[20px]'>Our Clients</h1>
        <p className='text-[#717171] text-center text-[19px] mt-2 max-sm:text-[15px]'>we have  been working with some Fortune 500+clients </p>

        <div className='pt-10 flex  pl-[10px] w-full justify-around  max-sm:flex-col  max-sm:items-center '>

            <div className=''>
                   <img src={Logo1} alt='logo' ></img>
                
            </div>
           <div className=' pl-[15px]'>
                  <img src={Logo2} alt='logo' ></img>
            </div>
            <div className=' pl-[15px]'>
            <img src={Logo3} alt='logo' ></img>
                
            </div>
            <div className=' pl-[15px]'>
            <img src={Logo4} alt='logo' ></img>
            </div>
            <div className=' pl-[15px]'>
            <img src={Logo5} alt='logo' ></img>
            </div>

            <div className=' pl-[15px]'>
            <img src={Logo6} alt='logo' ></img>
                
            </div>
            <div className=' pl-[15px]'>
            <img src={Logo7} alt='logo' ></img>
                
            </div>

            


        </div>
      
           
         </div>
    </div>
  )
}

export default Clients
