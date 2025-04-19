import logo from '../assets/logo.png';
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { useState, useRef, useContext } from "react";
import { NavLink } from "react-router-dom"
import CartContext from "../store/CartContext.jsx";
import Modal from '../UI/Modal.jsx';
import CartContents from '../components/CartContents.jsx';


function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [navToggle, setNavToggle] = useState(false);
  const mobileNavRef = useRef();

  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);


  const handleOpenCart = () => {
    setIsModalOpen(true);
    setNavToggle(false)
  }

  const handleTapOutside = (e) => {
    if (mobileNavRef.current.contains(e.target) === false && navToggle) {
      setNavToggle(false);
      return;
    }
  }

  return (
    <section className='fixed top-0 flex flex-col items-center text-stone-50 w-full py-2 bg-emerald-950/85 z-40' >
      <header className='w-4/5 mx-auto flex flex-row justify-between items-center'>
        <div>
            <NavLink to="/" className='flex flex-row items-center'>
              <img src={logo} alt="Logo" className='w-12 inline mr-2'/>
              <h1 className='inline text-2xl font-semibold font-Charm'>Broccolinni</h1>
            </NavLink>            
                          
        </div>
        <div className='md:hidden'>
          {navToggle ?
            <button onClick={() => setNavToggle(false)} className='text-stone-50 text-3xl p-1  active:text-lime-800'>X</button> :
            <button onClick={() => setNavToggle(true)} className='text-stone-50 text-3xl p-1  active:text-lime-800'>☰</button>
          }
          {navToggle && (
            <div className='fixed inset-0 w-screen h-screenz-20' onClick={handleTapOutside}>
              <nav className='absolute top-16 right-0 bg-emerald-950/85 w-1/2 sm:w-1/3 h-screen' ref={mobileNavRef}>           
                <ul className='flex flex-col md:flex-row gap-4 font-semibold items-center py-4 text-center text-lg'>
                  <NavLink to="/" onClick={() => setNavToggle(false)} className={({ isActive }) => isActive ? "underline block w-full py-1.5" : "active:text-lime-800 block w-full py-1.5"}>Home</NavLink>
                  <NavLink to="/shop" onClick={() => setNavToggle(false)} className={({ isActive }) => isActive ? "underline block w-full py-1.5" : " active:text-lime-800 block w-full py-1.5"}>Shop</NavLink>
                  <NavLink to="/about" onClick={() => setNavToggle(false)} className={({ isActive }) => isActive ? "underline block w-full py-1.5" : "  active:text-lime-800 block w-full py-1.5"}>About</NavLink>
                  <NavLink to="/contact" onClick={() => setNavToggle(false)} className={({ isActive }) => isActive ? "underlineblock w-full py-1.5" : "  active:text-lime-800 block w-full py-1.5"}>Contact</NavLink>
                  <NavLink to="/login" onClick={() => setNavToggle(false)} className={({ isActive }) => isActive ? "bg-lime-800 text-stone-50 block w-full py-1.5 " : "block w-full py-1.5 bg-stone-50 text-gray-700 active:bg-lime-800 active:text-stone-50 px-2"}><FaUser className='inline text-lg mr-1'/>Login</NavLink>
                  <button onClick={handleOpenCart} className='bg-lime-800 text-stone-50  active:text-lime-800 active:bg-stone-50 block w-full py-1.5'><FaCartShopping className='inline text-lg mr-1'/><span>{totalCartItems}</span></button>
                </ul>          
              </nav>
            </div>
          )}                
        </div>      
        <nav className='hidden md:block'>           
            <ul className='flex flex-col md:flex-row gap-4 font-semibold items-center'>
              <NavLink to="/" className={({ isActive }) => isActive ? "underline px-1.5 py-1" : "hover:cursor-pointer hover:text-lime-600 active:text-lime-800 px-1.5 py-1"}>Home</NavLink>
              <NavLink to="/shop" className={({ isActive }) => isActive ? "underline px-1.5 py-1" : "hover:cursor-pointer hover:text-lime-600 active:text-lime-800 px-1.5 py-1"}>Shop</NavLink>
              <NavLink to="/about" className={({ isActive }) => isActive ? "underline px-1.5 py-1" : "hover:cursor-pointer hover:text-lime-600 active:text-lime-800 px-1.5 py-1"}>About</NavLink>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "underline px-1.5 py-1" : "hover:cursor-pointer hover:text-lime-600 active:text-lime-800 px-1.5 py-1"}>Contact</NavLink>
              <NavLink to="/login" className={({ isActive }) => isActive ? "bg-lime-800 text-stone-50 rounded-md py-1 px-2" : "bg-stone-50 text-gray-700 hover:bg-lime-700 hover:text-stone-50 active:text-stone-50 active:bg-lime-800 hover:cursor-pointer rounded-md py-1 px-2"}><FaUser className='inline text-lg mr-1'/>Login</NavLink>
              <button onClick={() => setIsModalOpen(true)} className='bg-lime-700 text-stone-50 hover:bg-stone-50 hover:text-gray-700 hover:cursor-pointer active:text-stone-50 active:bg-lime-800 rounded-md py-2 px-4 ml-4'><FaCartShopping className='inline text-lg mr-1'/><span>{totalCartItems}</span></button>
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