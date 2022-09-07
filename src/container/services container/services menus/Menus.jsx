import React from 'react'
import './Menus.css'
function Menus() {
  return (
    <section id="menus" className='menus-background h-[100vh] '>
      <div className='menus-wrapper h-full p-8 lg:p-16'>
        <div className="menus-content flex flex-col h-full justify-center">
          <h3 className='mt-8'><a href="/Bar" className=' text-white text-[35px] lg:text-[45px] hover:underline p-Cormorant'>Bar Menu</a></h3>
          <h3 className='mt-8'><a href="/Food" className='text-white text-[35px] lg:text-[45px] hover:underline p-Cormorant'>Food Menu</a></h3>
          <h3 className='mt-8'><a href="/Dessert" className='text-white text-[35px] lg:text-[45px] hover:underline p-Cormorant'>Desserts Menu</a></h3>
        </div>
      </div>
    </section>
  )
}

export default Menus