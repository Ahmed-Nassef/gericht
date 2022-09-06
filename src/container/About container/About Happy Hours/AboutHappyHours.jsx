import React from 'react'
import { SubHeading } from '../../../components'
import images from '../../../constants/images'
function AboutHappyHours() {
  return (
    // my theme is andromeda
    <section id="HappyHours-section" className='bg-[#0C0C0C]'>
      <div className="HappyHours-wrapper p-8 sm:p-16">
        <div className="HappyHours-content">
          <div className='HappyHours-header flex flex-col items-center'>
            <SubHeading title="About Us" className="flex flex-col p-Cormorant items-center" />
            <h2 className='p-Cormorant text-[45px] md:text-[64px]' style={{color: "#DCCA87"}}>Happy Hours With Us</h2>
            <p className='text-center max-w-[650px] text-[#545454] my-8' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quam, quia tenetur eveniet impedit alias quasi?</p>
          </div>
          <div className='HappyHours-video relative'>
            {/* let's make overlay later */}
            {/* <div className='HappyHours-video-overlay items-center justify-center text-white absolute flex h-full top-0 left-0 w-full bg-black'>
            dfjasdfsdlfkjsadfksdfkj
            </div> */}
            <img src={images.AboutVid} alt="About video" className='w-full' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHappyHours