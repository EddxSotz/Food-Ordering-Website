import logo from '../assets/logo.jpg';
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom"
import CartContext from "../store/CartContext.jsx";
import Modal from '../UI/Modal.jsx';
import CartContents from '../components/CartContents.jsx';


function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);


  return (
    <section className='fixed top-0 flex flex-col items-center text-stone-50 w-full py-2 bg-linear-to-b from-emerald-950/85 to-emerald-950/45 z-10'>
    <header className='w-4/5 mx-auto flex flex-row justify-between items-center'>
      <div>
        <img src={logo} alt="Logo" className='w-12 inline mr-2'/>
        <h1 className='inline text-lg font-semibold'>Le Fancy Restaurant</h1>        
      </div>       
      <nav id="navbar">           
          <ul className='flex flex-col md:flex-row gap-4 font-semibold items-center'>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "underline" : "hover:cursor-pointer hover:bg-lime-800"}>Home</NavLink></li>
            <li><NavLink to="/shop" className={({ isActive }) => isActive ? "underline" : "hover:cursor-pointer hover:text-lime-800"}>Shop</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "underline" : "hover:cursor-pointer hover:text-lime-800"}>About</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "underline" : "hover:cursor-pointer hover:text-lime-800"}>Contact</NavLink></li>
            <button onClick={() => setIsModalOpen(true)} className='bg-stone-50 text-gray-700 hover:bg-lime-800 hover:text-stone-50 hover:cursor-pointer rounded-md p-4'>Cart <span>{totalCartItems}</span></button>
          </ul>          
      </nav>      
    </header>
      {isModalOpen && 
        <Modal onClose={() => setIsModalOpen(false)} openStatus={isModalOpen}>
          <CartContents onCloseModal={() => setIsModalOpen(false)}/>
        </Modal>
      }
    </section>
  );
}
export default Header;