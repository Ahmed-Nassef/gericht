import React from 'react'
import { SubHeading } from '../../../components'

function ServiceQuality() {
  return (
    <section id="service-qulity" className='bg-[#0C0C0C]'>
      <div className="service-quality-wrapper p-8 sm:p-16">
        <div className="service-quality-content flex flex-col items-center text-center justify-center">
          <div className='service-quality-description flex flex-col items-center'>
          <SubHeading title="Serving Quality" className="p-Cormorant flex flex-col items-center justify-center" />
          <h2 className='p-Cormorant text-[45px] lg:text-[64px]' style={{color: "#DCCA87"}}>We at gericht are serving out customers<br />for over a decade.</h2>
          <p className='text-[#545454] max-w-[650px] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quibusdam pariatur placeat esse, error laborum sed officiis.</p>
          </div>
          <div className='service-quality-buttons flex items-center justify-center w-[50%]'>
              <a href="#" className='button mr-8' style={{backgroundColor: "#DCCA87",color:"#000"}}>Read More</a>
              <a href="#" className='button' style={{backgroundColor:"transparent",border:"2px solid #DCCA87" ,color: 'white'}}>Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceQuality