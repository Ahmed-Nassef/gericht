import React from 'react'
import { Navbar } from '../../../components'
import './AboutHeader.css'
import {MdArrowForwardIos} from 'react-icons/md'
function AboutHeader({title, route}) {
  return (
    <section className='About-section'>
    <Navbar style={{backgroundColor: 'black'}} />
      <div className="About-wrapper p-8 sm:p-16 h-full" id='AboutHeader-bg'>
        <div className="About-content h-[50vh] flex flex-col items-center justify-center">
            <h1 className='text-[50px] lg:text-[90px] p-Cormorant' style={{color: '#DCCA87'}}>{title}</h1>
            <p className='p-Cormorant' style={{fontWeight: 700}}> <a href="/gericht">Home</a> <MdArrowForwardIos color='#DCCA87' className='inline' /> {route}</p>
        </div>
      </div>
    </section>
  )
}

export default AboutHeader