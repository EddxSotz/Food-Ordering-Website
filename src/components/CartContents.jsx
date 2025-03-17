import {useContext} from 'react';
import CartContext from '../store/CartContext.jsx';
import currencyFormatting from '../utils/currency-formatting.js';

export default function CartContents({isCheckoutClicked}) {
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

    return (
        <>
            <h2>Cart Contents</h2>
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
              <button onClick={isCheckoutClicked} className='cart-button'>Checkout</button>
              </>
            ) : (
                <p>You have no items on your Cart</p>
            )}            
        </>
    );
}