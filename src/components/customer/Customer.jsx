import React from 'react'
import images from '../../constants/images'
function Customer({name,smallerDes,img}) {
  return (
    <div className='Customer flex items-center mb-16 mr-4'>
      <div className='customer-img mr-4'>
      <img src={img} alt="jane" />
      </div>
      <div className='customer-description'>
        <p className='max-w-[450px] p-openSans text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, reiciendis. Et voluptates facilis nam, dolor voluptatem soluta.</p>
        <h3 className='p-Cormorant text-[23px]' style={{color: '#DCCA87'}}>{name}</h3>
        <p className='p-openSans text-white'>{smallerDes}</p>
      </div>
    </div>
  )
}

export default Customer