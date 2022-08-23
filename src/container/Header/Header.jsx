import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import {images} from '../../constants';
const Header = () => (
  // the last time i was collecting font sizes for design
  <section id='Home' className='bg-[#0C0C0C]'>
    <div className='home-wrapper w-full p-8 sm:p-16'>
      <div className='home-content flex flex-col items-center justify-around lg:flex-row'>
        <div className='home-left flex flex-col items-start mb-8 w-full lg:mb-0 lg:max-w-lg'>
          <SubHeading title="Chase The New Flavour" className='p-Cormorant tracking-wider text-[19px] lg:text-[24px]' />
          <h1 className='text-[50px] md:text-[90px] p-Cormorant font-bold' style={{color: '#DCCA87'}}>The Key To Fine Dining</h1>
          <p className='p-openSans my-4 tracking-wide leading-7 text-white'>Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</p>
          <button className='button'>explore menu</button>
        </div>
        <div className='home-right img_wrapper'>
          <img src={images.welcome} alt="welcome img" className=' w-full lg:max-w-lg' />
        </div>
      </div>
    </div>
  </section>
);

export default Header;
