import {useContext, useState} from 'react';
import CartContext from '../store/CartContext.jsx';
import currencyFormatting from '../utils/currency-formatting.js';
import Forms from '../components/Forms.jsx';

export default function Checkout ({isCheckoutClosed}) {
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
    
    return (
        <>                                       
            {isFormVisible ? (
                <>
                <h1>Your Shipping information</h1>
                <Forms onSubmit={handleFormSubmit} />
                <button onClick={()=> setIsFormVisible(false)}className='cart-button'>Back to: Shopping cart</button>
                </>
            ): (
                <div id='Checkout-page' className={`${isFormVisible} ? hidden : null`}>                
                <h2>Your Shopping cart</h2>
                {cartCtx.cartItems.length > 0 ? (
                <>
                <ul>
                    {cartCtx.cartItems.map((item) => (
                        <li key={item.id} className="cart-item">
                            <img src={`http://localhost:3000/${item.image}`} alt={item.name}/>
                            <span>{item.name}</span>
                            <button onClick={()=> handleDecreaseItem(item.id)} className='cart-button'> - </button>
                            <span>{item.quantity}</span>
                            <button onClick={()=> handleIncreaseItem(item.id)} className='cart-button'> + </button>
                            <span>{currencyFormatting.format(item.price)}</span>
                            <button onClick={()=> handleRemoveItem(item.id)} className='cart-button'>Remove Item</button>
                        </li>               
                    ))}                                   
                </ul>
                <p>Total: <strong>{currencyFormatting.format(cartTotal)}</strong></p>              
                </>
                ) : (
                <p>You have no items on your Cart</p>
                )}
                <div id='checkout-actions-btns'>
                  <button onClick={isCheckoutClosed} className='cart-button'>Back to Shopping Meals</button>
                  <button onClick={()=> setIsFormVisible(true)}className='cart-button'>Next: Shipping Information</button>
                </div>                
            </div>
            )}                                  
        </>
    );
}