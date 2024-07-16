import React from 'react'
import Button4 from '../Compoments/Button4'


const Footer = () => {
  return (
    <div className='bg-[#F5F7FA] w-full h-[300px] text-center max-sm:text-[30px] flex flex-col'>

        <div className='pt-[5%]' >
       <h1 className='font-bold text-[30px] text-[#263238]'>Pellentesque suscipit <br/>fringilla libero eu.</h1>
       </div>

       <div>
        <Button4 name='Get a Demo ' className='mt-[10%'/>
       </div>

    </div>
  )
}

export default Footer
