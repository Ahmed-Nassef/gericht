import React from 'react'
import { SubHeading } from '../../../components'
import images from '../../../constants/images'
const Drinks = () => {
  return (
    <section id='drinksSection' className='section-background'>
      <div className='drinksSection-wrapper p-8 sm:p-16'>
        <div className='drinksSection-content flex flex-col-reverse lg:flex-row items-center justify-between'>
          <div className='left-div mt-8 lg:mt-0'>
            <img src={images.drinks1} alt="drink1" className='w-full lg:max-w-lg' />
          </div>
          <div className='right-div'>
            <div>
              <img src={images.drinks2} alt="drink2" className='w-full lg:max-w-md' />
            </div>
            <div className='mt-8'>
              <SubHeading title="About us" className="p-Cormorant" />
              <h2 className='p-Cormorant text-[45px]' style={{color: '#DCCA87'}}>Food, Drinks,<br /> Entertainment in one</h2>
              <p className='p-openSans max-w-[450px] text-[#AAAAAA]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos dolor cum fuga magnam nisi, alias perspiciatis, aliquid tenetur, earum dolores</p>
              <button className='button' style={{backgroundColor: '#DCCA87'}}>know more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Drinks