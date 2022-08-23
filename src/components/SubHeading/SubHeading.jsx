import React from 'react';
import images from '../../constants/images'
const SubHeading = ({title, className}) => (
  <div className={className}>
    <p className='text-[19px]'>{title}</p>
    <img src={images.spoon} alt="spoon" />
  </div>
);

export default SubHeading;
