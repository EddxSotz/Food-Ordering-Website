import Header from './components/Header';
import Meals from './components/Meals';
import Modal from './UI/Modal.jsx';
import CartContents from './components/CartContents.jsx';
import { CartContextProvider } from './store/CartContext.jsx';
import { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <CartContextProvider>        
        <Header onCartButtonClick={() => setIsModalOpen(true)}/>
        <Meals />
        {isModalOpen && 
        <Modal onClose={() => setIsModalOpen(false)} openStatus={isModalOpen}>
          <CartContents/>
        </Modal>}
      </CartContextProvider>       
    </>
  );
}

export default App;
