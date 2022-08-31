import React from 'react'
import { SubHeading } from '../../../components'
import './bookTable.css'
const BookTable = () => {
  return (
    <section id='bookTable' className='bg-[#050505]'>
      <div className='bookTable-wrapper p-8 sm:p-16'>
        <div className='bookTable-content flex flex-col items-center justify-center'>
          <div className='border-2 w-[90%] border-[#DCCA87] bg-[#0C0C0C] flex flex-col px-4 py-12 items-center'>
            <div className='bookTable-description text-center'>
              <SubHeading title="Reservation"  className="flex flex-col items-center p-Cormorant" />
              <h2 className='p-Cormorant text-[45px]' style={{color: '#DCCA87'}}>Book A Table</h2>
            </div>
            <div className='bookTable-options w-full flex flex-col lg:flex-row items-center justify-center'>
              <div className='w-[90%] md:flex-1 lg:mr-4'>
                <select name="people" id="cars" className='input-style w-full'>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
                </div>
                <div className='w-[90%] md:flex-1 mt-4 lg:mt-0 lg:mr-4'>
                <input type="date" id="" name="date" className='input-style w-full'></input>
                </div>
                <div className='w-[90%] md:flex-1 mt-4 lg:mt-0'>
                <input type="time" id="appt" name="appt" className='input-style w-full'></input>
              </div>
            </div>
            <div className='book-now'>
              <button className='button'>order now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookTable