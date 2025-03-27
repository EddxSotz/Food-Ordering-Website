import { useState } from 'react';
import Header from '../components/Header';
import Meals from '../components/Meals';
import Modal from '../UI/Modal.jsx';
import Checkout from '../store/Checkout.jsx';
import CartContents from '../components/CartContents.jsx';
import { CartContextProvider } from '../store/CartContext.jsx';


function Home()  {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  
    const handleCheckoutOpen = ()=> {
      setIsCheckoutOpen(true)
      setIsModalOpen(false)
    }
    return (
        <>
          <CartContextProvider>        
            <Header onCartButtonClick={() => setIsModalOpen(true)}/>
            {!isCheckoutOpen ? (
              <Meals onAddToCart={() => setIsModalOpen(true)}/>
            ): (
              <Checkout isCheckoutClosed={()=> setIsCheckoutOpen(false)}/>
            )}          
            {isModalOpen && 
            <Modal onClose={() => setIsModalOpen(false)} openStatus={isModalOpen}>
              <CartContents isCheckoutClicked={handleCheckoutOpen}/>
            </Modal>}
          </CartContextProvider>      
        </>
    );
}

export default Home;


