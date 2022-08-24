import React from 'react';


const MenuItem = ({title,price,tags,index}) => (
<div className='cocktail flex flex-col my-12'>
  <div className='cocktail-info flex items-center justify-between'>
    <h4 className='p-Cormorant text-[19px] md:text-[23px]' style={{color: '#DCCA87'}}>{title}</h4>
    <div className='space flex items-center'>
    <div className='h-[1px] w-[70px] bg-[#DCCA87]'></div>
    <p className='p-openSans text-white'>{price}</p>
    </div>
  </div>
  <div className='cocktail-tags'>
    <p className='p-openSans text-[#AAAAAA]'>{tags}</p>
  </div>
</div>
);

export default MenuItem;
