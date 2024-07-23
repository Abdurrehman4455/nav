import React from 'react'
import Slider from 'react-slick'
import Hero from '../Sections/Hero';


const Sliders = () => {
    const settings = {
        
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:5000,
       
      };
  return (
            
    
        <Slider {...settings}>




          <div>
          <Hero />
        </div>
        <div>
         
        </div>
        <div>
         
        </div>
      </Slider>
    
  )
}

export default Sliders;
