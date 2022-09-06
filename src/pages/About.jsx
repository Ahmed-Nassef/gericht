import React from 'react'
import { Navbar } from '../components'
import HappyCustomer from '../container/About container/About Happy Customer/HappyCustomer'
import AboutHappyHours from '../container/About container/About Happy Hours/AboutHappyHours'
import AboutHeader from '../container/About container/About header/AboutHeader'
import OurHistory from '../container/About container/About our history/OurHistory'
import Chef from '../container/Chef/Chef'
import Gallery from '../container/Gallery/Gallery'
const About = () => {
  return (
    <>
    <AboutHeader
      title="Welcome To Gericht"
      route="About Us"
    />
    <OurHistory />
    <AboutHappyHours />
    <Chef />
    <HappyCustomer />
    <Gallery />
    </>
  )
}

export default About