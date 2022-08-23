import React,{useState} from 'react';
import './Navbar.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdRestaurantMenu} from 'react-icons/md';
import images from '../../constants/images';
const Navbar = () => {
  let [toggle, setToggle] = useState(false);
  return(

  <nav className='p-5 flex justify-between text-white items-center'>

    <div className='Navbar_logo'>
      <img src={images.gericht} className='w-40 cursor-pointer'/>
    </div>

    <div className='nav_links hidden lg:block'>
      <ul className='flex'>
        <li><a href="#Home" className='mx-4 link-hover'>Home</a></li>
        <li><a href="#About" className='mx-4 link-hover'>About</a></li>
        <li><a href="#Menu" className='mx-4 link-hover'>Menu</a></li>
        <li><a href="#Awards" className='mx-4 link-hover'>Awards</a></li>
        <li><a href="#Contact" className='mx-4 link-hover'>Contact</a></li>
      </ul>
    </div>

    <div className='Navbar_login hidden md:flex'>
      <a href="#login" className=' border-white mr-4 login-hover'>Log In / Registration</a>
      <div className=''>|</div>
      <a href="#login" className='ml-4 login-hover'>Book Table</a>
    </div>
    <div className='responsive_Navbar block lg:hidden'>
      <GiHamburgerMenu fontSize={27} className='block cursor-pointer' onClick={()=>setToggle(true)}/>
      {toggle && (
      <div className='z-50 Navbar_overlay duration-500 ease-in flex flex-col items-center justify-center slide-bottom fixed top-0 left-0 h-full w-full'>
        <MdRestaurantMenu fontSize={27} className='responsive_Navbar-close cursor-pointer absolute top-5 right-5' onClick={()=>setToggle(false)} />
      <ul className='responsive_links text-3xl flex items-center flex-col'>
        <li className='my-4'><a href="#Home" className='small-devices-link'>Home</a></li>
        <li className='my-4'><a href="#About" className='small-devices-link'>About</a></li>
        <li className='my-4'><a href="#Menu" className='small-devices-link'>Menu</a></li>
        <li className='my-4'><a href="#Awards" className='small-devices-link'>Awards</a></li>
        <li className='my-4'><a href="#Contact" className='small-devices-link'>Contact</a></li>
      </ul>
      </div>
      )}
    </div>

  </nav>
  )
};

export default Navbar;
