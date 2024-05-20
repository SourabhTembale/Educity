import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import menu from '../../assets/menu-icon.png'
const Navbar = () => {

  const [mobileMenu,setMobileMenu] = useState(false);

  const toggleMenu =()=>{
    mobileMenu ? setMobileMenu(false):setMobileMenu(true);
  }


  const [sticky,setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);


  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''} ` }>
<img src={logo} alt="" className='logo'/>
<ul className={mobileMenu ? '':'hide-mobile'}>
    <li><Link to='hero' smooth={true} offset={0} duration={500}> HOME</Link></li>
    <li><Link to='program' smooth={true} offset={-260} duration={500}> PROGRAMS</Link></li>
    <li><Link to='about' smooth={true} offset={-150} duration={500}> ABOUT</Link></li>
    {/* <li><Link to='campus' smooth={true} offset={-260} duration={500}> CAMPUS</Link></li> */}
    <li><button className='btn'><Link to='contact' smooth={true} offset={-260} duration={500}> Contact Us</Link></button></li>
</ul>
<img src={menu} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
