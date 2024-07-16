import React from 'react'
import Logo from'../Icon/Logo.png';
import{ Navs} from'../Compoments/constants';
import Button from './Button';
import Right from'../Icon/Right.png';
const Nav = () => {
  return ( 
    <div className="w-full bg-[#FFFFFF] flex flex-wrap justify-between items-center ml-10 mt-5 p-1 sm:flex-nowrap sm:ml-0 sm:mt-0 overflow-x-hiddden max-sm:overflow-x-hidden max-sm:ml-0">
    <div className="w-[30%]  max-sm:w-[20%] flex items-center font-semibold  sm:pl-[10%] max-sm:h-[30px] max-sm:mt-5 max-sm:overflow=x-hidden ] ">
        <img 
            src={Logo} 
            alt="logo" 
            className="w-[40px] max-sm:w-[60px]"
        />
        <span className="ml-2 font-bold text-lg sm:text-4xl leading-9 text-[#263238] max-sm:text-[27px]">Nexcent</span>
    </div>
        <div className="w-[50%] max-sm:w-[50%] flex  max-sm:flex-row max-sm:items-center mt-2 sm:mt-0 max-sm:overflow-hidden ">
        <nav className="w-full sm:w-auto max-sm:hidden">
            <ul className="flex flex-col sm:flex-row gap-3 sm:gap-x-5 mt-2 sm:mt-10">
                {Navs.map((Nav, index) => (
                    <li key={index} className="text-center sm:text-left">{Nav.name}</li>
                ))}
            </ul>
        </nav>

        <div className="flex   max-sm:text-[14px] max-sm:text-center  max-sm:justify-cente">
            <Button label="Register Now" image={Right} className="mb-5 sm:mb-0 max-sm:text-[10px] " />
     </div>
        
    </div>
    
</div>

    
  )
}

export default Nav;
