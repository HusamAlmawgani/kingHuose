import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import cart from '../assets/img/products/cart.svg';


// import logo
import Logo from '../assets/img/logo.svg';
// import icons
import { CgMenuRight, CgClose } from 'react-icons/cg';
// import data
import { navigation } from '../data';
// import components
import NavMobile from './NavMobile';

const Header = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  useEffect(() => {
    // add event listener
    window.addEventListener('scroll', () => {
      // when scrollY is bigger than 50px setBg to true, else false
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'center',
      alignItems: 'center',
      color: 'white',
      backgroundColor: 'black',
      height: 100,
    }}
    >
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='#'>
            <img className='h-15 lg:h-12' src={Logo} alt='' id='logo' />
          </a>
          {/* menu icon */}
          <div
            onClick={() => setMobileNav(!mobileNav)}
            className='md:hidden text-2xl lg:text-3xl text-white cursor-pointer'
          >
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>
          {/* nav */}
          <nav className='hidden md:flex'>
            <ul className='md:flex md:gap-x-12'>
              {navigation.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      className='capitalize text-white hover:border-b transition-all'
                      to={'/'+item.href}
                    >
                      {item.name =='cart' ?<img className='h-10 lg:h-7' src={cart} alt='' id='logo' /> : item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          {/* nav mobile */}
          <div
            className={`${
              mobileNav ? 'left-0' : '-left-full'
            } md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}
          >
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
