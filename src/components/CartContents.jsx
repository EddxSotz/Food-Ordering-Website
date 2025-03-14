import Modal from '../UI/Modal.jsx';
import {useContext} from 'react';
import CartContext from '../store/CartContext.jsx';
import {currencyFormatting} from '../utils/currency-formatting.js';

export default function CartContents({onClose}) {
    const cartCtx = useContext(CartContext);
    const cartTotal = cartCtx.cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }
    , 0);

    return (
        <Modal>
            <h2>Cart Contents</h2>
            <ul>
                {cartCtx.cartItems.map((item) => (
                    <li key={item.id}>
                        <span>{item.name}</span>
                        <span>{item.quantity}</span>
                        <span>{item.price}</span>
                    </li>                    
                ))}
                <p>Total: {currencyFormatting(cartTotal)}</p>
                <p><button>Close</button></p>      
            </ul>
        </Modal>
    );
}