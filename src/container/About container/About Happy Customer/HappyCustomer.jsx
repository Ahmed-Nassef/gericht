import React from 'react'
import { SubHeading } from '../../../components'
import Customer from '../../../components/customer/Customer'
import images from '../../../constants/images'
function HappyCustomer() {
  return (
    <>
    <section id='HappyCustomer-section' className='bg-[#0C0C0C]'>
      <div className="HappyCustomer-wrapper p-8 sm:p-16">
        <div className="HappyCustomer-content">
          <div className='HappyCustomer-description mb-8 flex flex-col items-center justify-center text-center'>
            <SubHeading title="Testimony" className="p-Cormorant flex flex-col items-center justify-center" />
            <h2 className='p-Cormorant text-[45px] md:text-[64px]' style={{color: "#DCCA87"}}>Happy Customers</h2>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <Customer
            name="Wade Warren"
            img={images.WadeWarren}
            smallerDes="Sommelier"
            />
            <Customer
            name="Jane Cooper"
            img={images.JaneCooper}
            smallerDes="Chef"
            />
            <Customer
            name="Robert Fox"
            img={images.RobertFox}
            smallerDes="Chef"
            />
            <Customer
            name="Brooklyn Simmon"
            img={images.BrooklySimmon}
            smallerDes="Caterer"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default HappyCustomer