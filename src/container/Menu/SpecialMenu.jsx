import React from 'react';
import MenuItem from '../../components/Menuitem/MenuItem';
import SubHeading from '../../components/SubHeading/SubHeading';
import images  from '../../constants/images';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <section id="Menu" className='bg-[#0C0C0C]'>
    {/* old padding: px-5 py-12 md:py-16 md:px-12 */}
    <div className='menu-wrapper p-8 sm:p-16 '>
      <div className='menu-content flex flex-col items-center'>

        <div className='menu-caption flex flex-col text-center items-center'>
        <SubHeading title="Menu That Fits Your Palatte" className="p-Cormorant tracking-wider flex flex-col items-center text-[19px] lg:text-[24px]" />
        <h2 className='text-[45px] md:text-[64px] p-Cormorant my-8' style={{color: '#DCCA87'}}>Today's Special</h2>
        </div>

        <div className='menu-content w-full flex flex-col xl:flex-row'>
          <div className='left-menu-content mx-8 flex flex-col flex-1'>
            <div className='menu-title-wrapper text-center mb-12'>
              <h3 className='menu-title p-Cormorant text-[35px] md:text-[45px]'>Wine & Beer</h3>
            </div>
            <div className='menu-items w-full'>
              <MenuItem name="Chapel Hill Shiraz" price="$56" caption="AU | Bottle" />
              <MenuItem name="Catena Malbee" price="$59" caption="AU | Bottle" />
              <MenuItem name="La Vieillw Rose" price="$44" caption="FR | 750 Ml" />
              <MenuItem name="Rhino Pale Ale" price="$31" caption="CA | 750 Ml" />
              <MenuItem name="Irish Guinness" price="$26" caption="IE | 750 Ml" />
            </div>
          </div>

          <div className='center-menu-content flex items-center justify-center'>
            <img src={images.menu} alt="menu image" className='max-w-xs md:max-w-md' />
          </div>

          <div className='right-menu-content mx-8 flex flex-col flex-1'>
            <div className='menu-title-wrapper m-8 mb-12 text-center'>
              <h3 className='menu-title p-Cormorant text-[35px] md:text-[45px]'>Cocktails</h3>
            </div>
              <div className='menu-items w-full'>
              <MenuItem name="Aperol Sprtiz" price="$20" caption="Aperol | Villa Marchesi Prosecco | Soda | 30 Ml" />
              {/* <MenuItem name="C" price="59" caption="Dark Rum | Ginger Beer | Slice Of Lime" /> */}
              <MenuItem name="Dark 'N' Stormy" price="$16" caption="Rum | Citrus Juice | Sugar" />
              <MenuItem name="Daiquiri" price="$10" caption="Bourbon | Brown Sugar | Angostura Bitters" />
              <MenuItem name="Old Fashioned" price="$31" caption="AU | Bottle" />
              <MenuItem name="Negroni" price="$26" caption="Gin | Sweet Vermouth | Campari | Orange Garnish" />
              </div>
          </div>
        </div>
        <div>
          <button className='button'>view more</button>
        </div>

      </div>
    </div>
  </section>
);

export default SpecialMenu;
