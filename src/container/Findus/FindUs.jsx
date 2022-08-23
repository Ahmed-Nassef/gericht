import React from 'react';
import images from '../../constants/images';
import SubHeading from '../../components/SubHeading/SubHeading';
const FindUs = () => (
  <section id='Contact' className='section-background pb-16'>
    <div className='contact-wrapper p-8 sm:p-16 '>
      <div className='contact-content flex flex-col lg:flex-row justify-around'>
        <div className='left-div'>
          <div className='contact-header'>
            <SubHeading title="Contact" className="p-Cormorant tracking-wider text-[19px] lg:text-[24px]" />
            <h2 className='p-Cormorant text-[45px] md:text-[64px] p-Cormorant mt-12' style={{color: '#DCCA87'}}>Find Us</h2>
          </div>
          <div className='contact-details mt-16'>
              <p className='p-openSans text-[#fff] mb-8'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
              <h4 className='p-Cormorant text-[19px] md:text-[23px] mb-8' style={{color: '#DCCA87'}}>Opening Hours</h4>
              <p className='p-openSans text-[#fff]'>Mon - Fri: 10:00 Am - 02:00 Am</p>
              <p className='p-openSans text-[#fff] mb-4'>Sat - Sun: 10:00 Am - 03:00 Am</p>
              <button className='button'>visit us</button>
          </div>
        </div>
        <div className='right-div max-w-xs md:max-w-md'>
          <img src={images.findus} alt="find us" className='max-w-full'/>
        </div>
      </div>
    </div>
  </section>
);

export default FindUs;
