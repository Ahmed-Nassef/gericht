import React from 'react';
import images from '../../constants/images';
import '../../App.css';

const AboutUs = () => (
  <section id='About' className='section-background relative'>
    <div className='About-wrapper p-8 sm:p-16'>
      <div className='About-content flex flex-col lg:flex-row justify-center items-center'>
      <div className='G-letter absolute'>
          <img src={images.G} alt="g-letter" className='max-w-xs md:max-w-sm' />
        </div>
        <div className='about-us z-10 flex-1 flex items-end flex-col text-right'>
          <h2 className='text-[45px] md:text-[64px] p-Cormorant my-8' style={{color: '#DCCA87'}}>About Us</h2>
          <img src={images.spoon} alt="spoon" className='rotate-180 ' />
          <p className='p-openSans my-8 text-[#AAAAAA]'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.</p>
          <button className='button'>know more</button>
        </div>
        <div className='about-us-img z-10 mx-8 my-16'>
          <img src={images.knife} alt="knife" className='h-[910px]' />
        </div>
        
        <div className='our-history flex-1 z-10'>
        <h2 className='text-[45px] md:text-[64px] p-Cormorant my-8' style={{color: '#DCCA87'}}>Our History</h2>
          <img src={images.spoon} alt="spoon" />
          <p className='p-openSans my-8 text-[#AAAAAA]'>Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu Volutpat. Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed Odio Nec Aliquet.</p>
          <button className='button'>know more</button>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
