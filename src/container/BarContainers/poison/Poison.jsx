import React from 'react'
import { SubHeading } from '../../../components'
import images from '../../../constants/images'
const poison = () => {
  return (
    <section id='poisonSection' className='bg-[#050505]'>
      <div className='poisonSection-wrapper p-8 sm:p-16'>
        <div className='poisonSection-content flex flex-col items-center'>
          <div className='poison-caption flex flex-col'>
            <SubHeading title="wide range to choose from" className="p-Cormorant flex flex-col items-center" />
            <h2 className='p-Cormorant text-[45px] capitalize' style={{color: '#DCCA87'}}>what's your poison?</h2>
          </div>
          <div className='poison-images flex flex-col lg:flex-row'>
          <div className='left-div flex items-center justify-center relative group lg:mr-8 before:absolute before:opacity-50 before:hidden before:cursor-pointer hover:before:block before:w-full before:h-full before:bg-black'>
            <h3 className='p-Cormorant absolute text-[50px] hidden group-hover:block'>Beer</h3>
            <img src={images.poison1} alt="poison1" className='w-full max-w-xs' />
          </div>
          <div className='middle-div flex items-center justify-center mt-8 lg:mt-0 lg:mr-8 group relative before:absolute before:opacity-50 before:hidden before:cursor-pointer hover:before:block before:w-full before:h-full before:bg-black'>
          <h3 className='p-Cormorant absolute text-[50px] hidden group-hover:block'>Wine</h3>
          <img src={images.poison2} alt="poison2" className='w-full max-w-xs' />
          </div>
          <div className='right-div flex items-center justify-center mt-8 lg:mt-0 group relative before:hidden before:cursor-pointer hover:before:block before:absolute before:opacity-50 before:w-full before:h-full before:bg-black'>
          <h3 className='p-Cormorant absolute text-[50px] hidden group-hover:block '>Juice</h3>
          <img src={images.poison3} alt="poison3" className='w-full max-w-xs' />
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default poison