import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import {images,data} from '../../constants';
import './Laurels.css';

const Laurels = () => {

  return (

  <section id='Laurels' className='section-background'>
    <div className='laurels-wrapper p-8 sm:p-16'>
      <div className='laurels-content flex flex-col lg:flex-row items-center md:justify-evenly '>
          <div className='left-div text-center'>
              <div className='laurels-header'>
                <SubHeading title="Awards & Recognition" className="p-Cormorant flex flex-col items-center tracking-wider text-[19px] lg:text-[24px]"/>
                <h2 className='text-[45px] md:text-[64px] p-Cormorant mt-12' style={{color: '#DCCA87'}}>Our Laurels</h2>
              </div>
              <div className='laurles-awards mt-16 grid grid-cols-1 md:grid-cols-2 '>
                {data.awards.map((award)=>(
                  <div className='award flex text-start my-4 md:m-4'>
                    <div className='award-img mr-4'>
                      <img src={award.imgUrl} alt={award.title} className="w-[50px] h-[50px]" />
                    </div>
                    <div className='award-details'>
                      <h4 className='p-Cormorant text-[19px] md:text-[23px]' style={{color: '#DCCA87'}}>{award.title}</h4>
                      <p className='p-openSans text-[#fff] max-w-[200px]'>{award.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
          </div>
          <div className='right-div'>
            <img src={images.laurels} alt="laurels" className='max-w-[250px] md:max-w-md' />
          </div>
      </div>
    </div>
  </section>
  )
};

export default Laurels;
