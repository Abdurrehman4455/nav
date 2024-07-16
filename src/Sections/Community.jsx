import React from 'react'
import Cards from '../Compoments/Cards'
import Icon from'../Icon/Icon (5).png'

const Community = () => {
  return (
    <div>  <h1 className='text-center text-[#4D4D4D] font-semibold text-[50px] mt-4 max-sm:text-[20px]'>  Manage your entire community <br/>in a single system  </h1>
    <p className='text-[#717171] text-center text-[19px] mt-2'>Who is Nextcent suitable for?
    </p>

    <Cards className='pt-[15px]'
    
    Icon={Icon}
    content='Membership'content2='Organisations' content3='National' content4='Assosciations' content5='Clubs And' content6='Groups'
    
    ></Cards>
    
    </div>
  )
}

export default Community
