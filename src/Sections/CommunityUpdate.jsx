import React from 'react'
import Cards3 from '../Compoments/Cards3'

const CommunityUpdate = () => {
  return (
    <div>
  <div className='flex flex-col items-center space-x-2 max-sm:space-x-0 max-sm:space-y-4'>
    <div>
      <h1 className='text-center text-[#4D4D4D] font-semibold text-[30px] mt-4 max-sm:text-[25px]'>Caring is the new marketing</h1>
    </div>
    <div className='text-center'>
      <p className='text-[#717171] max-sm:text-sm max-sm:px-4'>
        The Nextcent blog is the best place to read about the latest membership insights, <br />
        trends and more. See who's joining the community, read about how our community <br /> 
        are increasing their membership income and lot's more.
      </p>
    </div>
  </div>
  <section className='pt-[1%] max-sm:pt-[5%]'>
    <Cards3 />
  </section>
</div>


  
    
  )
}

export default CommunityUpdate
