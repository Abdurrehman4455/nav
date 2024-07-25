import React from 'react';
import './App.css';
import Nav from './Compoments/Nav';
import Hero from './Sections/Hero';
import Sliders from './Compoments/Sliders';
import Clients from './Sections/Clients';
import Community from './Sections/Community';
import Unlock from './Sections/Unlock';
import Acheivements from './Sections/Acheivements';
import Calander from './Sections/Calander';
import Customer from'./Sections/Customers';
import CommunityUpdate from './Sections/CommunityUpdate';
import Footer from './Sections/Footer';
import BigFooter from './Sections/BigFooter';
import Slider from 'react-slick/lib/slider';

function App() {
  return (
    <div className ="overflow-hidden">
      <section className='font-serif'>
      <Nav className=' font-serif'/>
      </section>
      <section className='mt-0 lg:w-full font-serif '>
        <Hero/>
      </section>
      
       <Clients/>
       <section className='pt-[5%] font-serif'>
       <Community/>
       </section>

       <section className='pt-[10%] font-serif'>
        <Unlock/>
       </section>

       <section className='pt-14 font-serif'>
        <Acheivements/>
       </section>

       <section className='pt-[10%] font-serif'>
       <Calander/>
       </section>

       <section className='pt-[10%] font-serif'>
        <Customer/>
       </section>

       <section  className='pt-[1%] font-serif'>
      <CommunityUpdate/>



       </section>


       <section className='font-serif'> 
        <Footer className='pt-[35%] font-serif'/>
       </section>
       <section>
        <BigFooter className='font-serif'/>
       </section>
      
       
      
       
    </div>
  );
}

export default App;
