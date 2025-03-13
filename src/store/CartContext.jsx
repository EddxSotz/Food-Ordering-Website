import { createContext, useReducer } from 'react';

const CartContext = createContext({
    cartItems: [],    
    addItem: (item) => {},
    removeItem: (id) => {},
});
export default CartContext ;

function cartReducer(state, action) {
    if (action.type === 'ADD') {
        const existingCartItemIndex = state.cartItems.findIndex((item) => item.id === action.item.id);
        const updatedItems = [...state.cartItems];

        if(existingCartItemIndex !== -1) {
            const existingCartItem = state.cartItems[existingCartItemIndex];
            const updatedCartItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1,
            };
            updatedItems[existingCartItemIndex] = updatedCartItem;            
        } else {
            updatedItems.push({...action.item, quantity: 1});
        }
        return {...state, cartItems: updatedItems};        
    }
    if (action.type === 'REMOVE') {
        const updatedItems = state.cartItems.filter((item) => item.id !== action.id);
        return {...state, cartItems: updatedItems};
    }
    return { cartItems: [] };
}

export function CartContextProvider({children}) {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, {
        cartItems: [],
    });

    function addItemToCartHandler(item) {
        dispatchCartAction({ type: 'ADD', item });
    }

    function removeItemFromCartHandler(id) {
        dispatchCartAction({ type: 'REMOVE', id });
    }

    const cartContext = {
        cartItems: cartState.cartItems,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
}

