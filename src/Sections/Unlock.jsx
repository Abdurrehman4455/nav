import React from 'react'
import Frame from'../Images/Frame 35.svg'
import Button3 from'../Compoments/Button3';

const Unlock = () => {
  return (
    <div className='flex justify-center items-center max-sm:flex-col max-sm:mt-20 md:flex-col md:mt-10 lg:flex-row lg:mt-10'>
  <div className='w-[30%] max-sm:w-[60%] md:w-[50%] lg:w-[30%] lg:pt-2'>
    <img src={Frame} alt='frame' className='mt-10' width={500} />
  </div>
  <div className="w-[40%] ml-10 pl-[5%]  max-sm:w-full max-sm:pl-0 max-sm:pr-4 max-sm:pt-2 md:w-full md:pl-0 md:pr-4 md:pt-2 lg:w-[50%] lg:pl-[2%] lg:pt-0 lg:mb-[37px]  ">
  <h1 className="text-[#4D4D4D] font-semibold text-[50px] mt-1 max-sm:text-[19px] max-sm:mt-1 max-sm:text-left md:text-[20px] md:text-center lg:text-[40px] lg:text-left">
  The unseen of spending three
</h1>
<span className="text-[#4D4D4D] font-semibold text-[50px] ml-2 max-sm:text-[19px] max-sm:ml-0 max-sm:text-left md:text-[20px] md:ml-[32%] md:text-center lg:text-left lg:ml-0">
  years at Pixelgrade
</span>

    <p className="text-[#717171] text-[20px] ml-2 max-sm:text-left max-sm:ml-0 md:text-[16px] md:ml-0 md:text-center lg:text-[18px] lg:text-left lg:ml-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
    </p>
    <div className="md:flex md:justify-center lg:justify-start max-sm:flex max-sm:justify-center max-sm:mt-2 max-sm:text-[20px]">
      <Button3 name="Learn More" />
    </div>
  </div>
</div>

  )
}

export default Unlock
