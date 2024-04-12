import React, { useContext, useState, useEffect } from 'react';
import Logo from '../Assets/Logo.png';
import { BsCart4 } from "react-icons/bs";
import './Navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [line, setLine] = useState( "");
  const [toggleMenu, setToggleMenu] = useState(false);
  const { getTotalCartItem } = useContext(ShopContext);

  // Save 'line' to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('line', line);
  }, [line]);

  return (
    <div className='navbar'>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#332927" size={30} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#332927" size={30} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="menu">
            <ul>
              <li><Link to="/" onClick={() => { setLine("Shop") }} >Shop {line === "Shop" ? <hr /> : <></>}</Link></li>
              <li><Link to="/mens" onClick={() => { setLine("Mens") }}>Mens {line === "Mens" ? <hr /> : <></>}</Link></li>
              <li><Link to="/womens" onClick={() => { setLine("Womens") }}>Womens {line === "Womens" ? <hr /> : <></>}</Link></li>
              <li><Link to="/kids" onClick={() => { setLine("Kids") }}>Kids {line === "Kids" ? <hr /> : <></>}</Link></li>
            </ul>
          </div>
        )}
      </div>
      <div className='logo'>
        <img src={Logo} alt="#" />
      </div>
      <div className="option">
        <ul>
          <li><Link to="/" onClick={() => { setLine("Shop") }} >Shop {line === "Shop" ? <hr /> : <></>}</Link></li>
          <li><Link to="/mens" onClick={() => { setLine("Mens") }}>Mens {line === "Mens" ? <hr /> : <></>}</Link></li>
          <li><Link to="/womens" onClick={() => { setLine("Womens") }}>Womens {line === "Womens" ? <hr /> : <></>}</Link></li>
          <li><Link to="/kids" onClick={() => { setLine("Kids") }}>Kids {line === "Kids" ? <hr /> : <></>}</Link></li>
        </ul>
      </div>
      <div className='cart_icons'>
        {localStorage.getItem('auth-token')
          ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button>
          : <Link to='/login'><button>Login</button></Link>}
        <Link to='/cart'>
          <div className='icon'>
            <BsCart4 />
            <div className="cart_count">{getTotalCartItem()}</div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;
