import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/Logo.png'
import navProfile from '../../assets/nav-profile.svg'
function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={navlogo} alt="" className='nav_logo' />
      </div>
      <div className='profile'>
        <img src={navProfile} alt="" className='navprofile' />
      </div>
    </div>
  )
}

export default Navbar
