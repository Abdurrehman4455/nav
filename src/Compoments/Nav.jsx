import React from 'react'
import Logo from'../Icon/Logo.png';
import{ Navs} from'../Compoments/constants';
import Button from './Button';
import Right from'../Icon/Right.png';
import  { useState } from 'react'



const Nav = () => {

     const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };


    
  return ( 
    <div className="w-full bg-[#FFFFFF] flex flex-wrap justify-between items-center ml-10 mt-5 p-1 sm:flex-nowrap sm:ml-0 sm:mt-0 overflow-x-hiddden max-sm:overflow-x-hidden max-sm:ml-0 md:flex-nowrap md:ml-0">
    <div className=" w-[30%]  max-sm:w-[20%] flex items-center font-semibold  sm:pl-[10%] max-sm:h-[30px] max-sm:mt-5 max-sm:overflow=x-hidden max-sm:ml-10 md:mt-10 ">
        <img 
            src={Logo} 
            alt="logo" 
            className="w-[40px] max-sm:w-[60px]"
        />
        <span className="ml-2 font-bold text-lg sm:text-4xl leading-9 text-[#263238] max-sm:text-[27px]">Nexcent</span>
    </div>

        <div className="w-[50%] max-sm:w-[50%] flex  max-sm:flex-row max-sm:items-center mt-2 sm:mt-0 max-sm:overflow-hidden md:justify-end md:mr-4  pr-11 lg:mr-4 max-sm:justify-end sm:justify-end sm:mt-7">
        
        <div className="md:block lg:hidden max-sm:block max-md:hidden sm:block md:mt-10  max-sm:mt-5 max-sm:ml-[13px] sm:justify-end">
          <button onClick={toggleDropdown} className="text-lg font-semibold flex items-cente max-sm:ml-">
            <div className="space-y-2   ">
              <span className="block w-8 h-0.5 bg-black"></span>
              <span className="block w-8 h-0.5 bg-black"></span>
              <span className="block w-8 h-0.5 bg-black"></span>
            </div>
          </button>
        </div>

        <nav className="w-full sm:w-auto max-sm:hidden md:hidden lg:block sm:hidden lg:mr-[2%] ">
            <ul className="flex flex-col sm:flex-row gap-3 sm:gap-x- mt-2 sm:mt-10">
                {Navs.map((Nav, index) => (
                    <li key={index} className="text-center sm:text-left ml-10 font-medium">{Nav.name}</li>
                ))}
            </ul>
        </nav>

        <div className="flex   max-sm:text-[14px] max-sm:text-center  max-sm:justify-cente md:hidden lg:block sm:hidden max-sm:hidden lg:mr-[1%]">
            <Button label="Register Now" image={Right} className="mb-10 sm:mb-0 max-sm:text-[10px] text-center md:hidden" />
     </div>
        
    </div>
    
</div>

    
  )
}

export default Nav;
