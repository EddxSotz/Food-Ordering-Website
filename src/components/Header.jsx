import logo from '../assets/logo.jpg';
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom"
import CartContext from "../store/CartContext.jsx";
import Modal from '../UI/Modal.jsx';
import CartContents from '../components/CartContents.jsx';


function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);  

  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);


  return (
    <>
    <header id="main-header">
      <h1 id="title">Le Fancy Restaurant</h1>
      <img src={logo} alt="Logo" id='header-img'/> 
      <nav id="navbar">           
          <ul id="nav-list">
            <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-item-active" : "nav-item"}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "nav-item-active" : "nav-item"}>About</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "nav-item-active" : "nav-item"}>Contact</NavLink></li>
          </ul>
          <button onClick={() => setIsModalOpen(true)} className='cart-button'>Cart <span>{totalCartItems}</span></button>
      </nav>      
    </header>
      {isModalOpen && 
        <Modal onClose={() => setIsModalOpen(false)} openStatus={isModalOpen}>
          <CartContents onCloseModal={() => setIsModalOpen(false)}/>
        </Modal>
      }
    </>
  );
}
export default Header;