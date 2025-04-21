import Modal from '../UI/Modal.jsx';
import Popup from '../components/Popup.jsx';
import CartContext from '../store/CartContext.jsx';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function ShippingForm({ onSubmit }) {
    const navigate = useNavigate();
    const cartCtx = useContext(CartContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const inputData = Object.fromEntries(formData.entries());
        onSubmit(inputData);
        setIsModalOpen(true);
        sendOrderToBackend(inputData); 
        event.target.reset();
        setShowPopup(true);        
    };
  
    const handleCloseModal = () => {        
        setIsModalOpen(false)        
        cartCtx.clearCart();
        navigate("/");     
    }

    async function sendOrderToBackend(inputData) {        
        const response = await fetch('https://food-ordering-website-backend-3mwk.onrender.com/orders', {
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

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(false);
        }, 3000); 
        return () => clearTimeout(timer);
    }
    , [ showPopup]);

    return (
        <>
        <section className='text-gray-700 '>
            <h1 className='text-6xl mb-8 font-Charm font-semibold'>Your Shipping information</h1>
            <form onSubmit={handleSubmit} >
                <div className='border border-gray-300 p-4 rounded-md shadow-md mb-6'>
                    <h2 className='font-Zain text-2xl font-semibold'>Personal Information</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" placeholder='Name' required className='border border-gray-200 py-2 px-4 ml-2'/>
                        </div>
                        <div >
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder='Email Address' required className='border border-gray-200 py-2 px-4 ml-2'/>
                        </div>
                    </div>
                </div>
                
                <div className='border border-gray-300 p-4 rounded-md shadow-md mb-6'>
                    <h2 className='font-Zain text-2xl font-semibold'>Shipping Information</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <label htmlFor="address">Address:</label>
                            <input type="text" id="address" name="address" placeholder='shipping address' required className='border border-gray-200 py-2 px-4 ml-2'/>
                        </div>
                        <div >
                            <label htmlFor="city">City:</label>
                            <input type="text" id="city" name="city" placeholder='city' required className='border border-gray-200 py-2 px-4 ml-2'/>
                        </div>
                        <div >
                            <label htmlFor="postalCode">Postal Code:</label>
                            <input type="text" id="postalCode" name="postalCode" placeholder='zip code' required className='border border-gray-200 py-2 px-4 ml-2'/>
                        </div>
                        <div>
                            <label htmlFor="country">Country:</label>
                            <input type="text" id="country" name="country" placeholder='country' required className='border border-gray-200 py-2 px-4 ml-2'/>
                        </div>
                    </div>
                </div>               
               
                <div className='flex flex-row justify-between items-center'>
                    <button type='reset' className='w-1/3 font-semibold border-2 border-gray-800 text-gray-800 hover:bg-red-400 hover:border-red-400 hover:cursor-pointer active:bg-red-500 active:text-stone-50 active:border-red-500 rounded-md py-2 px-4'>Reset</button>
                    <button type="submit" className='w-1/3 font-semibold bg-lime-700 border-2 border-transparent text-stone-50 hover:bg-stone-50 hover:text-lime-700 hover:border-lime-700 hover:cursor-pointer active:bg-lime-800 active:text-stone-50 active:border-lime-800 rounded-md py-2 px-4'>Submit</button>                
                </div>                
            </form>        
        </section>
        {isModalOpen && (
            <Modal onClose={handleCloseModal} openStatus={isModalOpen}>
             <p>Submitted Successfully!</p>
            </Modal>
        )}
        {showPopup && <Popup message="Order placed successfully!" />}
        </>
    );
}