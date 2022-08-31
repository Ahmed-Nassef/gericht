import React from 'react'
import './happyHours.css';
const HappyHours = () => {
  return (
    <section id='happyHours' className='h-[100vh] happyHours-background'>
      <div className='happyHours-wrapper h-full'>
        <div className='happyHours-content h-full flex items-center justify-center '>
          <div className='text-center'>
            <h2 className='p-Cormorant text-[50px] lg:text-[90px]' style={{color: '#DCCA87'}}>Happy Hours</h2>
            <p className='p-openSans text-white'>Monday - Friday (4:00 Pm - 7:00 PM)</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HappyHours