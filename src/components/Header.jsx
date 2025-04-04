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
    <header className='flex flex-row justify-between items-center w-full bg-amber-100 p-4'>
      <div className='flex flex-row items-center w-1/2 gap-2'>
       <img src={logo} alt="Logo" className='w-10 inline'/>
       <h1 className='text-lg font-bold text-amber-700'>Le Fancy Restaurant</h1>
      </div>             
      <nav className='w-1/2 '>           
          <ul className='flex flex-row justify-around items-center'>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-item-active" : "nav-item"}>Home</NavLink></li>
            <li><NavLink to="/shop" className={({ isActive }) => isActive ? "nav-item-active" : "nav-item"}>Shop</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "nav-item-active" : "nav-item"}>About</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "nav-item-active" : "nav-item"}>Contact</NavLink></li>
            <button onClick={() => setIsModalOpen(true)} className='cart-button'>Cart <span>{totalCartItems}</span></button>
          </ul>          
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