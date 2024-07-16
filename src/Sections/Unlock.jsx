import React from 'react'
import Frame from'../Images/Frame 35.png'
import Button3 from'../Compoments/Button3';

const Unlock = () => {
  return (
    <div className='flex justify-center  max-sm:flex-col max-sm:mt-20 items-center' >
      <div className='w-[30%] max-sm:w-[60%]'>
        <img src={Frame} alt='frame'
        width={500}/>
      </div>
      <div className="w-[40%] pl-[5%] pt-[10%] ml-10 max-sm:w-full max-sm:pl-0 max-sm:pr-4 max-sm:pt-2">
  <h1 className="text-[#4D4D4D] font-semibold text-[50px] max-sm:text-[19px] mt-1 max-sm:mt-1 max-sm:text-left">
    The unseen of spending three
  </h1>
  <span className="text-[#4D4D4D] font-semibold text-[50px] max-sm:text-[19px] ml-2 max-sm:ml-0 max-sm:text-left">
    years at Pixelgrade
  </span>
  <p className="text-[#717171] text-[20px] ml-2 max-sm:ml-0 max-sm:text-left">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
  </p>
  <Button3 name="Learn More" />
</div>
    </div>
  )
}

export default Unlock
