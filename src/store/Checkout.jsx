import {useContext, useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaTrashCan } from "react-icons/fa6";
import CartContext from '../store/CartContext.jsx';
import currencyFormatting from '../utils/currency-formatting.js';
import ShippingForm from '../components/Forms.jsx';

export default function Checkout () {
    const navigate = useNavigate();

    const cartCtx = useContext(CartContext);
    const [isCartEmpty, setIsCartEmpty] = useState(false);
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

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Checkout - Broccolinni Restaurant";
    }
    , []);

    useEffect(() => {
        if (cartCtx.cartItems.length === 0) {
            setIsCartEmpty(true);
        } else {
            setIsCartEmpty(false);
        }
    }
    , [cartCtx.cartItems]);

    return (
        <section className='container lg:h-full h-auto mx-auto py-28 px-4 relative'>                                       
            {isFormVisible ? (
                <>                
                <button onClick={()=> setIsFormVisible(false)} className='text-lime-800 hover:cursor-pointer active:text-gray-800 rounded-md  text-xl py-2 px-4 mb-8'><FaArrowLeft className='inline text-lg mr-1'/>Back to Shopping cart</button>
                <ShippingForm onSubmit={handleFormSubmit} />
                </>
            ): (
                <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-4'>
                    <div className='col-span-2'>
                        <h1 className='text-6xl text-gray-700 mb-8 font-Charm font-semibold'>Checkout</h1>                         
                        { !isCartEmpty ? (                        
                        <ul className='mb-12 overflow-y-scroll h-124 shadow-md'>
                            {cartCtx.cartItems.map((item) => (
                                <li key={item.id} className="grid grid-cols-3 md:grid-cols-6 gap-4 items-center border-b-1 border-gray-300 text-gray-700 shadow-md py-4 px-2">
                                    <img src={`https://food-ordering-website-backend-3mwk.onrender.com/${item.image}`} alt={item.name} className='md:w-24 col-span-2 md:col-span-1'/>
                                    <span className='text-wrap text-center font-semibold'>{item.name}</span>
                                    <span className='text-center'>{currencyFormatting.format(item.price)} x </span>                                    
                                    <div className='flex flex-row gap-2 justify-center items-center'>
                                        <button onClick={()=> handleDecreaseItem(item.id)} className='text-lg text-gray-800 border border-gray-800 rounded-full py-1.5 px-4 hover:bg-lime-700 hover:text-stone-50 hover:border-lime-700 hover:cursor-pointer active:bg-lime-800 active:border-lime-800 active:text-stone-50'> - </button>
                                        <span>{item.quantity}</span>
                                        <button onClick={()=> handleIncreaseItem(item.id)} className='text-lg text-gray-800 border border-gray-800 rounded-full py-1.5 px-4 hover:bg-lime-700 hover:text-stone-50 hover:border-lime-700 hover:cursor-pointer active:bg-lime-800 active:border-lime-800 active:text-stone-50'> + </button>                                    
                                    </div>                                    
                                    <span className='text-center'><strong>{currencyFormatting.format(item.price * item.quantity)}</strong></span>
                                    <button onClick={()=> handleRemoveItem(item.id)} className='col-span-3 md:col-span-1 text-lg font-semibold rounded-full text-gray-800 border border-gray-400 py-1.5 px-4 hover:bg-red-400 hover:border-red-400 hover:text-stone-50 hover:cursor-pointer active:text-stone-50 active:border-red-500 active:bg-red-500'><FaTrashCan className='mx-auto'/></button>
                                </li>               
                            ))}                                   
                        </ul>                        
                        ) : (
                        <p>You have no items on your Cart</p>
                        )}
                    </div>
                    <aside className='flex flex-col shadow-md p-4 mb-8 rounded-md border border-gray-300'>
                        <h2 className='text-2xl text-gray-700'>Order Totals</h2>
                        <p>Subtotal: <strong>{currencyFormatting.format(cartTotal)}</strong></p>
                        <p>Shipping and Handing: <strong>Free</strong></p> 
                        <p>Order Total: <strong>{currencyFormatting.format(cartTotal)}</strong></p>
                        <p className='text-md text-gray-700 text-center'>Free Shipping on All Orders Over $100!</p>                    
                    </aside>
                    <div className='col-span-2 flex flex-row justify-between items-center'>
                        <button onClick={handleGoBack} className='w-1/3 font-semibold bg-lime-700 border-2 border-transparent text-stone-50 hover:bg-stone-50 hover:text-lime-700 hover:border-lime-700 hover:cursor-pointer active:bg-lime-800 active:text-stone-50 active:border-lime-800 rounded-md py-2 px-4'><FaArrowLeft className='inline text-lg mr-1'/>Back to Shopping Meals</button>                                    
                        <button onClick={()=> setIsFormVisible(true)} className={`${isCartEmpty ? "hidden" : 'w-1/3 font-semibold bg-lime-700 border-2 border-transparent text-stone-50 hover:bg-stone-50 hover:text-lime-700 hover:border-lime-700 hover:cursor-pointer active:bg-lime-800 active:text-stone-50 active:border-lime-800  rounded-md py-2 px-4'}`}>Shipping Information <FaArrowRight className='inline text-lg ml-1'/></button>
                    </div>                                              
                </div>
            )}                                  
        </section>
    );
}