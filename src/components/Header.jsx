import logo from '../assets/logo.jpg';
import { useContext } from "react";
import { NavLink } from "react-router-dom"
import CartContext from "../store/CartContext.jsx";


function Header({onCartButtonClick}) {

  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <h1 id="title">Food Order</h1>
      <img src={logo} alt="Logo" id='header-img'/> 
      <nav id="navbar">           
          <ul id="nav-list">
            <li className='nav-item'><NavLink to="/">Home</NavLink></li>
            <li className='nav-item'><NavLink to="/about">About</NavLink></li>
            <li className='nav-item'><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <button onClick={onCartButtonClick} className='cart-button'>Cart <span>{totalCartItems}</span></button>
      </nav>      
    </header>
  );
}
export default Header;