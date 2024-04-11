import React from 'react'
import './Hero.css'
import Pic1 from '../Assets/picture1.png'
import Pic2 from '../Assets/picture2.png'
import { FaArrowRight } from "react-icons/fa6";
function Hero() {
  return (
    <div className='Hero'>
        <div className='picture1'><div className='border1'><img src={Pic1} alt="" /></div></div>
        <div className='picture2'><div className='border2'><img src={Pic2} alt="" /></div></div>
        <div className='content'>
            <h1>Unveiling the Latest Must-Haves:</h1>
            <h2> Shop New Arrivals Now!!</h2>
            <button>Latest Collection <span><FaArrowRight/></span></button>
        </div>
        
    </div>
  )
}

export default Hero
