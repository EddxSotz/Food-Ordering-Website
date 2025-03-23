import Modal from '../UI/Modal.jsx';
import CartContext from '../store/CartContext.jsx';
import { useState, useContext } from 'react';

export default function Forms({ onSubmit }) {
    const cartCtx = useContext(CartContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const inputData = Object.fromEntries(formData.entries());
        onSubmit(inputData);
        setIsModalOpen(true);
        sendOrderToBackend(inputData); 
        event.target.reset();        
    };
  
    const handleCloseModal = () => {        
        setIsModalOpen(false)        
        cartCtx.clearCart();        
    }

    async function sendOrderToBackend(inputData) {        
        const response = await fetch('http://localhost:3000/orders', {
            method: 'POST', 
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({order: {items: cartCtx.cartItems, customer: inputData}})
        })
        const responseData = await response.json();
        if (!response.ok) {
            throw new Error('Something went wrong!');                
        }
        return responseData.message;
    }
    return (
        <>
        <form onSubmit={handleSubmit} id='shipping-form'>
            <div className='input-field'>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div className='input-field'>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className='input-field'>
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" required />
            </div>
            <div className='input-field'>
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" required />
            </div>
            <div className='input-field'>
                <label htmlFor="postalCode">Postal Code:</label>
                <input type="text" id="postalCode" name="postalCode" required />
            </div>
            <div className='input-field'>
                <label htmlFor="country">Country:</label>
                <input type="text" id="country" name="country" required />
            </div>
            <div className='btn-group'>
                <button type='reset' className='cart-button'>Reset</button>
                <button type="submit" className='cart-button'>Submit</button>                
            </div>
            
        </form>
        {isModalOpen && (
            <Modal onClose={handleCloseModal} openStatus={isModalOpen}>
             <p>Submitted Successfully!</p>
            </Modal>
        )}
        </>
    );
}