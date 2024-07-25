import React from 'react'
import Button from'../SocialButtons/Icon/Path.png';
import basket from'../SocialButtons/Icon/basket.png'
import Twit from'../SocialButtons/Icon/twiter.png';
import youtube from'../SocialButtons/Icon/youtube.png';
import path from'../Images/Path.svg'
import path1 from'../Images/Path12.svg'
import path2 from'../Images/Path22.svg'
import path3 from'../Images/66.svg'
import { ImPlay } from "react-icons/im";
import { CiInstagram } from "react-icons/ci";
import { PiFacebookLogoLight } from "react-icons/pi";
import { PiTwitterLogoBold } from "react-icons/pi";
import { CiYoutube } from "react-icons/ci";

const Instabutton = ({icon,name}) => {


    const handleButtonClick = (url) => {
    window.location.href = 'https://www.instagram.com/';
  };
  const handleButtonClick2 = (url) => {
    window.location.href = 'https://www.facebook.com/';
  };
  const handleButtonClick3 = (url) => {
    window.location.href = 'https://twitter.com/?lang=en';
  };
  const handleButtonClick4 = (url) => {
    window.location.href = 'https://www.youtube.com/';
  };
  return (
    <div>
       <button className='w-12 h-12 rounded-full bg-[grey]'>
           <CiInstagram  className='w-12 h-10 ml-0' onClick={handleButtonClick}  />
       </button>
       <button className='w-12 h-12 rounded-full bg-[grey] ml-2' onClick={handleButtonClick2}>
           <PiFacebookLogoLight alt='a' className=' w-12 h-10 ml-0'/>
       </button>
       <button className='w-12 h-12 rounded-full bg-[grey] ml-2' onClick={handleButtonClick3}>
           <PiTwitterLogoBold alt='a'className='w-12 h-8' />
       </button>
       <button className='w-12 h-12 rounded-full bg-[grey] ml-2 ' onClick={handleButtonClick4}>
       <CiYoutube alt='a'className='w-12 h-10'/>
       </button>
    </div>
  )
}

export default Instabutton
