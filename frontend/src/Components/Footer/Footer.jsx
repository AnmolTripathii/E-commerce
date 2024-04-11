import React from 'react'
import './Footer.css'
import Logo from '../Assets/Logo.png'
import { FaPinterest } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";

function Footer() {
  return (
    <div className='Footer Footer1'>
      <div className='footer_logo'>
        <img src={Logo} alt="" />
      </div>
      <div className='footer_option'>
        <ul>
            <li><a href=""> Company</a></li>
            <li><a href="">Products</a></li>
            <li><a href="">Offices</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
        </ul>
      </div>
      <div className='footer_contact'>
        <div><a href=""><FaPinterest/></a></div>
        <div><a href=""><IoLogoWhatsapp/></a></div>
        <div><a href=""><GrInstagram/></a></div>
      </div>
      <div className='copyright'>
        <hr />
        <p>Copyright @ 2024- All</p>
      </div>
    </div>
  )
}

export default Footer
