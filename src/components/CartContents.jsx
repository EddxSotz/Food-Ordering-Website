import {useContext} from 'react';
import { useNavigate } from "react-router-dom";
import CartContext from '../store/CartContext.jsx';
import currencyFormatting from '../utils/currency-formatting.js';

export default function CartContents({onCloseModal}) {
    const navigate = useNavigate();

    const cartCtx = useContext(CartContext);
    const cartTotal = cartCtx.cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }
    , 0);

    const handleRemoveItem = (id) => {
        cartCtx.removeItem(id);
    }

    const handleDecreaseItem = (id) => {
        cartCtx.reduceQuantity(id);
    }

    const handleIncreaseItem = (id) => {
        cartCtx.increaseQuantity(id);
    }

    const handleIsCheckoutClicked = () => {
        navigate("/checkout");
        onCloseModal();
    }

    return (
        <>            
            {cartCtx.cartItems.length > 0 ? (
              <section className='w-full h-full overflow-hidden relative grid grid-cols-1 grid-rows-12 gap-2 bg-emerald-950/90'>
                <h2 className='text-4xl text-stone-50 font-semibold text-center pb-1 font-Zain'>Your Cart</h2>                         
                <ul className='row-span-8 overflow-y-scroll overscroll-contain bg-stone-50'>
                    {cartCtx.cartItems.map((item) => (
                        <li key={item.id} className="flex flex-row justify-between items-center border-b-1 border-gray-400 text-gray-700 shadow-md p-4 my-2">
                            <img src={`https://food-ordering-website-backend-3mwk.onrender.com/${item.image}`} alt={item.name} className='w-14 mr-1'/>   
                            <div className='flex flex-col justify-center'>
                                <span className='text-lg mb-2'>{item.name}</span>                     
                                <div className='flex flex-row gap-4 justify-center items-center'>                            
                                    <button onClick={()=> handleDecreaseItem(item.id)} className='text-lg text-gray-800 bg-gray-400 rounded-full py-1.5 px-4 hover:bg-lime-700 hover:text-stone-50 hover:cursor-pointer active:bg-lime-800 active:text-stone-50'> - </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={()=> handleIncreaseItem(item.id)} className='text-lg text-gray-800 bg-gray-400 rounded-full py-1.5 px-4 hover:bg-lime-700 hover:text-stone-50 hover:cursor-pointer active:bg-lime-800 active:text-stone-50'> + </button>
                                    <span>{currencyFormatting.format(item.price)}</span>
                                </div>
                            </div>                                                
                            <button onClick={()=> handleRemoveItem(item.id)} className='text-lg font-semibold rounded-full border border-gray-400 py-1.5 px-4 hover:bg-red-400 hover:border-red-400 hover:cursor-pointer active:bg-red-500 active:border-none'>X</button>
                        </li>               
                    ))}                                   
                </ul>
                <div className='w-full py-4 text-stone-50'>
                    <p className='text-lg px-4 mb-2'>Subtotal: <strong>{currencyFormatting.format(cartTotal)}</strong></p>
                    <button onClick={handleIsCheckoutClicked} className='w-full py-2 px-4 mb-2 text-xl font-semibold bg-lime-700 text-stone-50 border-2 border-transparent hover:bg-stone-50 hover:text-lime-800 hover:border-lime-800 hover:cursor-pointer active:text-stone-50 active:bg-lime-800 active:border-lime-800'>Checkout</button>
                    <p className='text-md text-wrap text-center mb-4'>Free Shipping on All Orders Over $100!</p>
                </div>                
              </section>
            ) : (
                <p className='mt-24 text-lg'>You have no items on your Cart</p>
            )}            
        </>
    );
}