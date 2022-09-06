import React from 'react'
import { SubHeading } from '../../../components'
import images from '../../../constants/images'
function OurHistory() {
  return (
    <section id='our-history' className='bg-[#0C0C0C]'>
      <div className="ourHistory-wrapper p-8 sm:p-16">
        <div className="ourHistory-content">
          <div className='ourHistory-description text-center'>
            <SubHeading title="Our History" className="flex flex-col items-center p-Cormorant text-white" />
            <h2 className='p-Cormorant text-[45px] md:text-[64px]' style={{color: '#DCCA87'}}>Serving Customers For Over A Decade</h2>
          </div>
          <div className='ourHistory-images mt-8 flex flex-col lg:flex-row items-center justify-around '>
              <div className='history-2 lg:mr-8'>
                <p className='max-w-[500px] text-[#AAAAAA]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ipsam illum impedit perspiciatis, minima iste corporis consequuntur dolor beatae maiores, a provident similique officiis.</p>
              <img src={images.history2} alt="history2" className='mt-8' />
              </div>
              <div className='history-1 mt-8 lg:mt-0'>
                <div className='history1-img'>
                <img src={images.history1} alt="history1" />
                </div>
                <div className='history1-description'>
                  <h3 className='p-Cormorant text-[23px] my-4' style={{color: '#DCCA87'}}>Over The Years</h3>
                  <div className='details flex items-center'>
                    <div className='detail-1 p-4 flex-1'>
                      <SubHeading title="30+" className="p-Cormorant" style={{color: '#DCCA87'}} />
                      <p className='p-Cormorant text-[25px]' style={{color: '#AAAAAA'}}>Breakfast<br />Options</p>
                    </div>
                    <img src={images.vector} alt="vector" />
                    <div className='detail-2 p-4 flex-1'>
                      <SubHeading title="50+" className="p-Cormorant" style={{color: '#DCCA87'}} />
                      <p className='p-Cormorant text-[25px]' style={{color: '#AAAAAA'}}>Dinner<br />Options</p>
                    </div>
                    <img src={images.vector} alt="vector" />
                    <div className='detail-1 p-4 flex-1'>
                      <SubHeading title="8" className="p-Cormorant" style={{color: '#DCCA87'}} />
                      <p className='p-Cormorant text-[25px]' style={{color: '#AAAAAA'}}>New<br />Locations</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurHistory