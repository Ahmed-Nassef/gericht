import React from 'react';
import MenuItem from '../../components/Menuitem/MenuItem';
import SubHeading from '../../components/SubHeading/SubHeading';
import {data} from '../../constants';
import images  from '../../constants/images';

const SpecialMenu = () => (
  <section id="Menu" className='bg-[#0C0C0C]'>
    <div className='menu-wrapper p-8 sm:p-16 '>
      <div className='menu-content flex flex-col items-center'>
        <div className='menu-caption flex flex-col text-center items-center'>
        <SubHeading title="Menu That Fits Your Palatte" className="p-Cormorant tracking-wider flex flex-col items-center text-[19px] lg:text-[24px]" />
        <h2 className='text-[45px] md:text-[64px] p-Cormorant my-8' style={{color: '#DCCA87'}}>Today's Special</h2>
        </div>

        <div className='menu-menu w-full flex flex-col xl:flex-row'>
          <div className='left-div mx-8 flex flex-col flex-1'>
            <div className='menu-title-wrapper'>
              <h3 className='menu-title p-Cormorant text-center text-[35px] md:text-[45px]'>Wine & Beer</h3>
              <div className='wine-menu'>
              {data.wines.map((el,index) => {
                return(
                  <MenuItem title={el.title} price={el.price} tags={el.tags} index={index} />
                )
              })}
            </div>
            </div>  
          </div>

          <div className='center-menu-content flex items-center justify-center flex-1'>
            <img src={images.menu} alt="menuImage" className='max-w-xs md:max-w-md' />
          </div>

          <div className='right-menu-content mx-8 flex flex-col flex-1'>
            <div className='menu-title-wrapper text-center'>
              <h3 className='menu-title p-Cormorant text-[35px] md:text-[45px]'>Cocktails</h3>
            </div>
            <div className='cocktails-menu'>
            {data.cocktails.map((el,index) => {
                return(
                  <MenuItem title={el.title} price={el.price} tags={el.tags} index={index} />
                )
              })}
            </div>
          </div>
        </div>
        <div className='bar-link mt-8'>
          <a className='button' href='/Bar'>view more</a>
        </div>

      </div>
    </div>
  </section>
);

export default SpecialMenu;