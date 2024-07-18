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

function App() {
  return (
    <div className ="overflow-hidden">
      <Nav className='mb-[10%]'/>
      <section className='mt-0'>
      <Sliders />
      </section>
      
       <Clients/>
       <section className='pt-[5%]'>
       <Community/>
       </section>

       <section className='pt-[10%]'>
        <Unlock/>
       </section>

       <section className='pt-14'>
        <Acheivements/>
       </section>

       <section className='pt-[10%]'>
       <Calander/>
       </section>

       <section className='pt-[10%]'>
        <Customer/>
       </section>

       <section  className='pt-[4%]'>
      <CommunityUpdate/>



       </section>


       <section className='pt-[10%]'> 
        <Footer/>
       </section>
       <section>
        <BigFooter/>
       </section>
      
       
      
       
    </div>
  );
}

export default App;
