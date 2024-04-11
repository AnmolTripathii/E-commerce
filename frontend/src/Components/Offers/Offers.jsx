import React from 'react'
import './Offers.css'
import EXC from '../Assets/exclusive_image.png'

function Offers() {
  return (
    <div className='offers'>
      <div className='offer_content'>
        <div className='offer_title'>
            <h1>Unlock Exclusive Styles Just for You:</h1>
            <h2> Dive In Now!</h2>
        </div>
        <button>Check Now</button>
      </div>
      <div className='offer_img'>
        <img src={EXC} alt="" />
      </div>
    </div>
  )
}

export default Offers
