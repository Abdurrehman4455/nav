import React from 'react'
import Logo from'../Images/Icon (5).svg';
import{ Navs} from'../Compoments/constants';
import Button from './Button';
import Right from'../Icon/Right.png';
import  { useState } from 'react'



const Nav = () => {

     const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(dropdownOpen);
  };


    
  return ( 
    <div className="w-full bg-[#FFFFFF] flex flex-wrap justify-between items-center ml-10 p-1 sm:flex-nowrap sm:ml-0 sm:mt-0  max-sm:ml-0 md:flex-nowrap md:ml-0 xl:flex-nowrap xl:ml-0 xl:mt-0">
    <div className="w-[40%] max-sm:w-[20%] flex items-center font-semibold sm:pl-[10%] max-sm:h-[30px]  max-sm:ml-2 md:ml-0 md:mt-10  xl:mt-0 xl:ml-0 max ">
      <img 
        src={Logo} 
        alt="logo" 
        className="w-[40px] max-sm:w-[60px] xl:w-[50px]"
      />
      
      <span className="ml-2 font-bold text-lg sm:text-4xl leading-9 text-[#263238] max-sm:text-[27px] xl:text-[36px]">Nexcent</span>
    </div>

  
    <div className="w-[50%] max-sm:w-[50%] flex max-sm:flex-row max-sm:items-center mt-2  max-sm:overflow-hidden md:justify-end   lg:mr-4 max-sm:justify-end sm:justify-end  lg:mt-0 lg:mr-[10%] xl:mr-[5%] xl:justify-between xl:mt-0">
      <div className="md:block lg:hidden max-sm:block max-md:hidden sm:block md:mt-10 lg:mt-0  max-sm:ml-[13px] sm:justify-end xl:hidden md:ml-10">
        <button onClick={toggleDropdown} className="text-lg font-semibold flex items-center">
          <div className="space-y-2  ">
            <span className="block w-8 h-0.5 bg-black"></span>
            <span className="block w-8 h-0.5 bg-black"></span>
            <span className="block w-8 h-0.5 bg-black"></span>
          </div>
        </button>
      </div>
  
      <nav className="w-full sm:w-auto max-sm:hidden md:hidden lg:block sm:hidden lg:mr-[2%]  xl:block xl:mr-0 xl:mb-0 xl:mt-10 ">
        <ul className="flex flex-col sm:flex-row gap-3 sm:gap-x-4 sm:mt-10 xl:flex-row xl:gap-x-6 xl:mt-0 xl:ml-[13%] lg:mb-[9%]">
          {Navs.map((Nav, index) => (
            <li key={index} className="text-center sm:text-left ml-10 font-medium xl:ml-4">{Nav.name}</li>
          ))}
        </ul>
      </nav>
  
      <div className="flex max-sm:text-[14px] max-sm:text-center max-sm:justify-center md:hidden lg:block sm:hidden max-sm:hidden lg:mr-[1%] xl:block xl:mr-0">
        <Button label="Register Now" image={Right} className="mb-10 sm:mb-0 max-sm:text-[10px] text-center md:hidden lg:pb-10 xl:pb-0 xl:mb-0 lg:mt-10" />
      </div>
    </div>
  </div>
  

    
  )
}

export default Nav;
