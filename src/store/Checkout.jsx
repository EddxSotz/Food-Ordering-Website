import {useContext, useState} from 'react';
import { useNavigate } from "react-router-dom";
import CartContext from '../store/CartContext.jsx';
import currencyFormatting from '../utils/currency-formatting.js';
import Forms from '../components/Forms.jsx';

export default function Checkout () {
    const navigate = useNavigate();

    const cartCtx = useContext(CartContext);
    const cartTotal = cartCtx.cartItems.reduce((total, item) => {return total + item.price * item.quantity;}, 0);
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleRemoveItem = (id) => {
        cartCtx.removeItem(id);
    }

    const handleDecreaseItem = (id) => {
        cartCtx.reduceQuantity(id);
    }

    const handleIncreaseItem = (id) => {
        cartCtx.increaseQuantity(id);
    }

    const handleFormSubmit = (formData) => {
        console.log('Form Data:', formData);        
    }   
    
    const handleGoBack = ()=>{
        navigate("/");
    }
    return (
        <section className='container mx-auto mt-28 px-4'>                                       
            {isFormVisible ? (
                <div className='flex flex-col items-center'>
                <h1 className='text-3xl text-gray-700 mb-8'>Your Shipping information</h1>
                <Forms onSubmit={handleFormSubmit} />
                <button onClick={()=> setIsFormVisible(false)} className='bg-lime-800 hover:bg-stone-50 hover:text-lime-800 hover:cursor-pointer rounded-md py-2 px-4'>Back to: Shopping cart</button>
                </div>
            ): (
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    <div className='col-span-2'>
                        <h1 className='text-3xl text-gray-700 mb-8'>Checkout</h1>                         
                        {cartCtx.cartItems.length > 0 ? (                        
                        <ul>
                            {cartCtx.cartItems.map((item) => (
                                <li key={item.id} className="grid grid-cols-3 md:grid-cols-6 gap-4 items-center border-b-1 border-gray-200 text-gray-700 shadow-md py-4 mb-2">
                                    <img src={`https://food-ordering-website-backend-3mwk.onrender.com/${item.image}`} alt={item.name} className='md:w-24 col-span-2 md:col-span-1'/>
                                    <span className='text-wrap text-center font-semibold'>{item.name}</span>
                                    <span className='text-center'>{currencyFormatting.format(item.price)} x </span>                                    
                                    <div className='flex flex-row gap-2 justify-center items-center'>
                                        <button onClick={()=> handleDecreaseItem(item.id)} className='text-lg text-gray-800 border border-gray-800 rounded-full py-1.5 px-4 hover:bg-lime-700 hover:text-white hover:border-lime-700 hover:cursor-pointer'> - </button>
                                        <span>{item.quantity}</span>
                                        <button onClick={()=> handleIncreaseItem(item.id)} className='text-lg text-gray-800 border border-gray-800 rounded-full py-1.5 px-4 hover:bg-lime-700 hover:text-white hover:border-lime-700 hover:cursor-pointer'> + </button>                                    
                                    </div>                                    
                                    <span className='text-center'><strong>{currencyFormatting.format(item.price * item.quantity)}</strong></span>
                                    <button onClick={()=> handleRemoveItem(item.id)} className='col-span-3 md:col-span-1 text-lg font-semibold rounded-full border border-gray-400 py-1.5 px-4 hover:bg-red-400 hover:border-red-400 hover:cursor-pointer'>Remove</button>
                                </li>               
                            ))}                                   
                        </ul>                        
                        ) : (
                        <p>You have no items on your Cart</p>
                        )}
                    </div>
                    <aside className='flex flex-col shadow-md p-4 rounded-md border border-gray-200'>
                        <h2 className='text-2xl text-gray-700'>Order Totals</h2>
                        <p>Subtotal: <strong>{currencyFormatting.format(cartTotal)}</strong></p>
                        <p>Shipping and Handing: <strong>Free</strong></p> 
                        <p>Order Total: <strong>{currencyFormatting.format(cartTotal)}</strong></p>
                        <p className='text-md text-gray-700 text-center'>Free Shipping on All Orders Over $100!</p>                    
                    </aside>
                    <div className='col-span-2 flex flex-row justify-between items-center'>
                        <button onClick={handleGoBack} className='w-1/3 bg-lime-800 text-stone-50 hover:bg-stone-50 hover:text-lime-800 hover:cursor-pointer rounded-md py-2 px-4'>Back to Shopping Meals</button>                                    
                        <button onClick={()=> setIsFormVisible(true)} className='w-1/3 bg-lime-800 text-stone-50 hover:bg-stone-50 hover:text-lime-800 hover:cursor-pointer rounded-md py-2 px-4'>Next: Shipping Information</button>
                    </div>                                              
                </div>
            )}                                  
        </section>
    );
}