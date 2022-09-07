import React from 'react'
import NavBar from '../components/Navbar/Navbar'
import AboutHeader from '../container/About container/About header/AboutHeader'
import ServiceQuality from '../container/services container/service quality/ServiceQuality'
import Menus from '../container/services container/services menus/Menus'
import BookTable from '../container/BarContainers/bookTable/BookTable'
import HappyHours from '../container/BarContainers/happy Hours/HappyHours'
function Services() {
  return (
    <>
    <AboutHeader
      title="What We Offer"
      route="Services"
    />
    <ServiceQuality />
    <Menus />
    <BookTable />
    <HappyHours />
    </>
  )
}

export default Services