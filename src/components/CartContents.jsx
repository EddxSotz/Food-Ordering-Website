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
              <section className='px-2 py-4'>
                <h2 className='text-xl font-semibold text-left mb-8'>Cart</h2>                         
                <ul>
                    {cartCtx.cartItems.map((item) => (
                        <li key={item.id} className="flex flex-row justify-between items-center border-b-1 border-gray-400 text-gray-700 shadow-md p-4 my-2">
                            <img src={`https://food-ordering-website-backend-3mwk.onrender.com/${item.image}`} alt={item.name} className='w-14'/>   
                            <div className='flex flex-col justify-center'>
                                <span className='text-lg mb-2'>{item.name}</span>                     
                                <div className='flex flex-row gap-4 justify-center items-center'>                            
                                    <button onClick={()=> handleDecreaseItem(item.id)} className='text-lg text-gray-800 bg-gray-400 rounded-full py-1.5 px-4 hover:bg-lime-700 hover:text-white hover:cursor-pointer'> - </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={()=> handleIncreaseItem(item.id)} className='text-lg text-gray-800 bg-gray-400 rounded-full py-1.5 px-4 hover:bg-lime-700 hover:text-white hover:cursor-pointer'> + </button>
                                    <span>{currencyFormatting.format(item.price)}</span>
                                </div>
                            </div>                                                
                            <button onClick={()=> handleRemoveItem(item.id)} className='text-lg font-semibold rounded-full border border-gray-400 py-1.5 px-4 hover:bg-red-400 hover:cursor-pointer'>X</button>
                        </li>               
                    ))}                                   
                </ul>
                <p>Subtotal: <strong>{currencyFormatting.format(cartTotal)}</strong></p>
                <button onClick={handleIsCheckoutClicked} className='absolute bottom-20 left-0 right-0 bg-lime-800 py-2 px-4 text-xl text-stone-50 hover:bg-lime-600 hover:cursor-pointer'>Checkout</button>
                <p className='text-md text-gray-700 absolute bottom-0 left-0 right-0 text-center'>Free Shipping on All Orders Over $100!</p>
              </section>
            ) : (
                <p>You have no items on your Cart</p>
            )}            
        </>
    );
}