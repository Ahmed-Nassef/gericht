import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import images from '../../constants/images';
import {FiFacebook,FiInstagram,FiTwitter} from 'react-icons/fi';


const Footer = () => (
  <footer id='footer' className='relative section-background'>
    <div className='footer-wrapper'>
      <div className='footer-content'>
          <div className='background-black flex items-center justify-center relative top-0 left-0 w-full h-[250px] bg-[#0C0C0C]'>
            <div className='Subscribe z-10 flex flex-col items-center justify-center text-center absolute p-8 w-[85%] lg:w-[65%] top-[30%] border-[1px] border-[#DCCA87] bg-[#0C0C0C]'>
              <SubHeading title="Newsletter" className="p-Cormorant tracking-wider text-[19px] lg:text-[24px]"/>
                <h2 className='p-Cormorant text-[45px] md:text-[64px]' style={{color: '#DCCA87'}}>Subscribe To Our Newsletter</h2>
                <p className='p-openSans text-[#fff]'>And Never Miss Latest Updates!</p>
              <div className='w-full'>
                <input type="email" name="email" id="email" placeholder='Enter your email address' className='p-Cormorant py-2 px-4 border-[1px] caret-[#DCCA87] w-full lg:w-[75%] mr-8 rounded-md border-[#DCCA87] bg-[#0C0C0C]' />
                <button className='button'>Subscribe</button>
              </div>
            </div>
          </div>
          <div className='footer-space h-[350px] lg:h-[200px] relative'>
          </div>
          <div className='footer-links justify-center flex flex-col lg:flex-row  p-16 text-[#fff]'>
            <div className='left-div lg:mr-16 flex flex-col text-center mt-8 md:mt-0'>
              <h4 className='p-Cormorant text-[35px] md:text-[45px] mb-8'>Contact Us</h4>
              <p>9 W 53rd St, New York, NY 10019, USA</p>
              <p>
                +1 212-344-1230
                  <br />
                +1 212-555-1230
                </p>
            </div>
            <div className='middle-div lg:mr-16 flex flex-col items-center text-center mt-8 md:mt-0'>
              <img src={images.gericht} alt="gericht" className='max-w-[220px] mb-8' />
              <SubHeading title='"The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others"' className="lg:max-w-[300px] flex flex-col items-center mb-4" />
              <div className='socialMedia flex'>
              <a href="#Home" className='mr-4'><FiFacebook fontSize={27} className='hover:text-[#DCCA87]' /></a>
              <a href="#Home" className='mr-4'><FiInstagram fontSize={27} className='hover:text-[#DCCA87]' /></a>
              <a href="#Home"><FiTwitter fontSize={27} className='hover:text-[#DCCA87]' /></a>
              </div>
            </div>
            <div className='right-div flex flex-col items-center justify-center text-center mt-8 md:mt-0'>
              <h4 className='p-Cormorant text-[35px] md:text-[45px] mb-8'>Working Hours</h4>
              <p className='mb-8'>Monday-Friday:<br />08:00 Am - 12:00 Am</p>
              <p>Saturday-Sunday:<br />07:00 Am - 11:00 Pm</p>
            </div>
          </div>
          <div className="copyWrites text-center pb-[150px] ">
            <p className='p-openSans text-[#fff]'>2021 Gericht. All Rights Reserved.</p>
          </div>
      </div>
    </div>
  </footer>
);

export default Footer;
