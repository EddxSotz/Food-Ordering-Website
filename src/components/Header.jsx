import logo from '../assets/logo.png';
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


  const handleOpenCart = () => {
    setIsModalOpen(true);
    setNavToggle(false)
  }

  return (
    <section className='fixed top-0 flex flex-col items-center text-stone-50 w-full py-2 bg-emerald-950/85 z-10'>
      <header className='w-4/5 mx-auto flex flex-row justify-between items-center'>
        <div>
          <a href="#" className='hover:cursor-pointer'>
            <img src={logo} alt="Logo" className='w-12 inline mr-2'/>
            <h1 className='inline text-lg font-semibold'>Broccolinni Restaurant</h1>
          </a>                
        </div>
        <div className='md:hidden'>
          {navToggle ?
            <button onClick={() => setNavToggle(false)} className='text-3xl p-1 focus:outline-2 focus:outline-stone-50'>X</button> :
            <button onClick={() => setNavToggle(true)} className='text-3xl p-1 focus:outline-2 focus:outline-stone-50'>☰</button>
          }
          {navToggle && (
              <nav className='md:hidden absolute top-16 right-0 bg-emerald-950/85 w-1/2 h-screen shadow-md'>           
              <ul className='flex flex-col md:flex-row gap-4 font-semibold items-center'>
                <li><NavLink to="/" onClick={() => setNavToggle(false)} className={({ isActive }) => isActive ? "underline" : "hover:cursor-pointer hover:text-lime-800"}>Home</NavLink></li>
                <li><NavLink to="/shop" onClick={() => setNavToggle(false)} className={({ isActive }) => isActive ? "underline" : "hover:cursor-pointer hover:text-lime-600"}>Shop</NavLink></li>
                <li><NavLink to="/about" onClick={() => setNavToggle(false)} className={({ isActive }) => isActive ? "underline" : "hover:cursor-pointer hover:text-lime-600"}>About</NavLink></li>
                <li><NavLink to="/contact" onClick={() => setNavToggle(false)} className={({ isActive }) => isActive ? "underline" : "hover:cursor-pointer hover:text-lime-600"}>Contact</NavLink></li>
                <li><NavLink to="/login" onClick={() => setNavToggle(false)} className={({ isActive }) => isActive ? "bg-lime-800 text-stone-50 rounded-md py-1 px-2" : "bg-stone-50 text-gray-700 hover:bg-lime-800 hover:text-stone-50 hover:cursor-pointer rounded-md py-1 px-2"}>Login</NavLink></li>
                <button onClick={handleOpenCart} className='bg-lime-800 hover:bg-stone-50 hover:text-lime-800 hover:cursor-pointer rounded-md py-2 px-4 ml-4'>Cart <span>{totalCartItems}</span></button>
              </ul>          
          </nav>
          )}                
        </div>      
        <nav className='hidden md:block'>           
            <ul className='flex flex-col md:flex-row gap-4 font-semibold items-center'>
              <li><NavLink to="/" className={({ isActive }) => isActive ? "underline" : "hover:cursor-pointer hover:text-lime-800"}>Home</NavLink></li>
              <li><NavLink to="/shop" className={({ isActive }) => isActive ? "underline" : "hover:cursor-pointer hover:text-lime-600"}>Shop</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => isActive ? "underline" : "hover:cursor-pointer hover:text-lime-600"}>About</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) => isActive ? "underline" : "hover:cursor-pointer hover:text-lime-600"}>Contact</NavLink></li>
              <li><NavLink to="/login" className={({ isActive }) => isActive ? "bg-lime-800 text-stone-50 rounded-md py-1 px-2" : "bg-stone-50 text-gray-700 hover:bg-lime-800 hover:text-stone-50 hover:cursor-pointer rounded-md py-1 px-2"}>Login</NavLink></li>
              <button onClick={() => setIsModalOpen(true)} className='bg-lime-800 hover:bg-stone-50 hover:text-lime-800 hover:cursor-pointer rounded-md py-2 px-4 ml-4'>Cart <span>{totalCartItems}</span></button>
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