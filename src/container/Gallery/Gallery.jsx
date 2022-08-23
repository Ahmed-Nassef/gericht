import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import images from '../../constants/images';
import {FiInstagram} from 'react-icons/fi';

const Gallery = () => {
    let galleryImages = [images.gallery01,images.gallery02,images.gallery03,images.min];

    let gallery = document.getElementsByClassName('gallery-images');
    gallery.scrollLeft += 200;

  return (

  <section id='Gallery' className='bg-[#0C0C0C]'>
    <div className='gallery-wrapper sm:py-16 sm:pl-16 py-8 pl-8'>
      <div className='gallery-content flex flex-col lg:flex-row items-center'>
        <div className='gallery-caption flex-1'>
          <SubHeading title="Instagram" className="p-Cormorant tracking-wider text-[19px] text-[#fff]" />
          <h2 className='p-Cormorant text-[45px] md:text-[64px] mt-12 p-Cormorant' style={{color: '#DCCA87'}}>Photo Gallery</h2>
          <p className='p-openSans mt-8 text-[#AAAAAA] max-w-[550px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
          <button className='button'>view more</button>
        </div>
        <div className='relative gallery-images gallery-images-wrapper max-w-full mt-8 lg:mt-0 lg:max-w-auto flex-1 overflow-x-scroll'>
          <div className='relative gallery-images flex-1 overflow-x-scroll flex'>
            {
              galleryImages.map((img, index)=> (
                <div className='relative min-w-[310px] group flex items-center justify-center h-[440px] mr-8 transition hover:before:duration-700 before:absolute before:block before:w-full before:h-full before:bg-black before:opacity-0 hover:before:opacity-50'>
                  <FiInstagram fontSize={37} color={'white'} className='absolute hidden group-hover:block cursor-pointer' />
                  <img src={img} key={index} className='object-cover h-full w-full' />
                </div>
              ))
            }
          </div>
          </div>
      </div>
    </div>
  </section>
  )
};

export default Gallery;
