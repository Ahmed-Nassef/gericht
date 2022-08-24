import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import images from '../../constants/images';
import '../../App.css';

const Chef = () => (
  <section id='chef-section' className='section-background'>
    <div className='chef-wrapper p-8 sm:p-16'>
      <div className='chef-content flex flex-col lg:flex-row items-center justify-around'>
        <div className='left-chef-content'>
          <img src={images.chef} alt="chef" className='self-end max-w-xs md:max-w-md mb-8 lg:mt-0' />
        </div>
        <div className='right-chef-content'>
            <div className='chef-header mb-24'>
              <SubHeading title="Chef's Word" className="p-Cormorant tracking-wider text-[19px] lg:text-[24px]" />
              <h2 className='text-[45px] md:text-[64px] p-Cormorant mt-12' style={{color: '#DCCA87'}}>What We Believe In</h2>
            </div>
            <div className='chef-caption '>
              <img src={images.quote} alt="qoute" className='float-left max-w-[50px] mr-4' />
              <p className='max-w-lg p-openSans text-[#fff] '>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit .
Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.</p>
            </div>
            <div className='chef-more-details mt-12'>
              <h3 className='p-Cormorant text-[30px] tracking-wider' style={{color: '#DCCA87'}}>kevin luo</h3>
              <p className='p-openSans text-[#fff]'>chef & founder</p>
              <img src={images.sign} alt="sign" className='max-w-[220px] mt-12' />
            </div>
        </div>
      </div>
    </div>
  </section>
);

export default Chef;
