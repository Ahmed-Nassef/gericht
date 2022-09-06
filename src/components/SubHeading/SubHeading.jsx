import React from 'react';
import images from '../../constants/images'
const SubHeading = ({title, className, style}) => (
  <div className={className} style={style}>
    <p className='text-[19px]'>{title}</p>
    <img src={images.spoon} alt="spoon" />
  </div>
);

export default SubHeading;
