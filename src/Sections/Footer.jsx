import React from 'react'
import Button4 from '../Compoments/Button4'


const Footer = () => {
  return (
    <div className='bg-[#F5F7FA] w-full h-[300px] text-center max-sm:text-[30px] flex flex-col mt-[10%]'>

        <div className='pt-[2%]' >
       <h1 className='font-bold text-[40px] text-[#263238] max-sm:text-[20px]'>Pellentesque suscipit <br/>fringilla libero eu.</h1>
       </div>

       <div>
        <Button4 name='Get a Demo ' className='mt-[10%'/>
       </div>

    </div>
  )
}

export default Footer
