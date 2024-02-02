import React from 'react'
import './Navbar.css'
import logo from '../../Components/Assets/app-products.js/logo.png'; 
import cart_icon from '../../Components/Assets/app-products.js/cart_icon.png';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=''/>
<p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
            <li>Shops <hr /> </li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
        </ul>
      <div className='nav-login-cart'>
        <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar
