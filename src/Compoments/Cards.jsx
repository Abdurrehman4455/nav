import React from 'react'
import Icon from'../Icon/Icon (5).png'
import img from'../Icon/Icon (6).png'
import img1 from'../Icon/Icon (7).png'

const Cards = ({content,content2,content3,content4,content5,content6}) => {
  return (
  
    <div className="flex flex-col items-center space-y-6 pt-10 sm:flex-row sm:justify-around sm:space-x-4 sm:space-y-0 sm:pt-6 md:space-x-6 md:pt-8 lg:space-x-8 lg:pt-10">
  <div className="w-[60%] h-[270px] bg-white rounded-lg border border-gray-300 shadow-lg flex justify-center items-center sm:w-[25%] sm:h-[300px] md:w-[30%] md:h-[320px] lg:w-[18%] lg:h-[350px]">
    <div className="flex flex-col items-center">
      <div>
        <img src={Icon} alt="icon" className="w-14 md:w-16 lg:w-20" /><br />
      </div>
      <div>
        <h1 className="text-[#4D4D4D] font-bold text-2xl sm:text-xl md:text-2xl lg:text-3xl">{content}</h1>
        <span className="text-[#4D4D4D] font-bold text-2xl sm:text-xl md:text-2xl lg:text-3xl">{content2}</span>
      </div>
      <div>
        <p className="text-center text-[#717171] text-sm md:text-base lg:text-lg">Our membership management<br />software provides full automation of<br />membership renewals and payments</p>
      </div>
    </div>
  </div>

  <div className="w-[60%] h-[270px] bg-white rounded-lg border border-gray-300 shadow-lg flex justify-center items-center sm:w-[25%] sm:h-[300px] md:w-[30%] md:h-[320px] lg:w-[18%] lg:h-[350px]">
    <div className="flex flex-col items-center">
      <div>
        <img src={img} alt="icon" className="w-14 md:w-16 lg:w-20" /><br />
      </div>
      <div>
        <h1 className="text-[#4D4D4D] font-bold text-2xl sm:text-xl md:text-2xl lg:text-3xl">{content3}</h1>
        <span className="text-[#4D4D4D] font-bold text-2xl sm:text-xl md:text-2xl lg:text-3xl">{content4}</span>
      </div>
      <div>
        <p className="text-center text-[#717171] text-sm md:text-base lg:text-lg">Our membership management<br />software provides full automation of<br />membership renewals and payments</p>
      </div>
    </div>
  </div>

  <div className="w-[60%] h-[270px] bg-white rounded-lg border border-gray-300 shadow-lg flex justify-center items-center sm:w-[25%] sm:h-[300px] md:w-[30%] md:h-[320px] lg:w-[18%] lg:h-[350px]">
    <div className="flex flex-col items-center">
      <div>
        <img src={img1} alt="icon" className="w-14 md:w-16 lg:w-20" /><br />
      </div>
      <div>
        <h1 className="text-[#4D4D4D] font-bold text-2xl sm:text-xl md:text-2xl lg:text-3xl">{content5}</h1>
        <span className="text-[#4D4D4D] font-bold text-2xl sm:text-xl md:text-2xl lg:text-3xl">{content6}</span>
      </div>
      <div>
        <p className="text-center text-[#717171] text-sm md:text-base lg:text-lg">Our membership management<br />software provides full automation of<br />membership renewals and payments</p>
      </div>
    </div>
  </div>
</div>

      
      
  )
}

export default Cards
