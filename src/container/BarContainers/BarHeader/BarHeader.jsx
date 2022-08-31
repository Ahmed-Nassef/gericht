import React from 'react'
import { Navbar } from '../../../components'
import images from '../../../constants/images'
export const BarHeader = () => {
  return (
    <>
    <section id='BarHeader' className='section-background'>
          <Navbar />
      <div className='BarHeader-wrapper p-8 sm:p-16'>
        <div className='BarHeader-content flex flex-col items-center'>
          <div className='flex flex-col items-center text-center justify-center w-[75%]'>
            <h1 className='text-[95.37px] lg:text-[186.26px] z-10 p-Cormorant absolute'>on the rocks</h1>
            <img src={images.BarWelcome} alt="BarWelcome" className='min-h-md md:max-w-md' />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
export default BarHeader