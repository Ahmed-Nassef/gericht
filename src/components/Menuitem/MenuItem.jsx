import React from 'react';

import './MenuItem.css';

const MenuItem = ({name,price,caption}) => (
  <div className='item my-8 md:m-8'>
    <div className='item-info flex items-center justify-between' style={{color:'#fff'}}>

          <h4 className='p-Cormorant text-[18px] sm:text-[19px] md:text-[23px]' style={{color: '#DCCA87'}}>{name}</h4>

      <div className='item-price-wrapper flex items-center'>

          <div className='item-price-space w-16 h-[1px] mx-4 bg-[#DCCA87]'></div>
          <div className='item-price-value'>
            <p>{price}</p>
          </div>

      </div>
    </div>
    <div className='item-caption'>
      <p className='p-openSans text-[#AAAAAA]'>{caption}</p>
    </div>
  </div>
);

export default MenuItem;
