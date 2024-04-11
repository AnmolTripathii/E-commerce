import React from 'react'
import './News_Letter.css'
import Iconic from '../Assets/iconoic.jpg'
function News_Letter() {
    return (
        <div className='news_letter'>
            <div className="element">
                <div className='iconic'><img src={Iconic} alt="" /></div>
                <div className='ele_context'>
                    <h1>Receive exclusive offers directly to your inbox.</h1>
                    <h3>Stay in the loop with our latest updates by subscribing to our newsletter.</h3>
                </div>
            </div>
            <div className="join">
                <div className="input-group">
                    <input
                        type="email"
                        className="input"
                        id="Email"
                        name="Email"
                        placeholder="Enter Your E-mail"
                        autoComplete="off"
                    />
                    <input className="button--submit" value="Subscribe" type="submit" />
                </div>
            </div>
        </div>
    )
}

export default News_Letter
