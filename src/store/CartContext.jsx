import { createContext, useReducer } from 'react';

const CartContext = createContext({
    cartItems: [],    
    addItem: (item) => {},
    removeItem: (id) => {},
});

function cartReducer(state, action) {
    if (action.type === 'ADD') {
        const existingCartItemIndex = state.cartItems.findIndex((item) => item.id === action.item.id);
        const updatedItems = [...state.cartItems]; //Copying existing array unmutably 

        if(existingCartItemIndex !== -1) {
            const existingCartItem = state.cartItems[existingCartItemIndex];
            const updatedCartItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1,
            };
            updatedItems[existingCartItemIndex] = updatedCartItem;  //If same item is being added to cart again then it will add 1 to current quantity
        } else {
            updatedItems.push({...action.item, quantity: 1});  //Adds a new item with quantity of 1 as default
        }
        return {...state, cartItems: updatedItems};        
    }
    if (action.type === 'REMOVE') {
        const updatedItems = state.cartItems.filter((item) => item.id !== action.id);
        return {...state, cartItems: updatedItems};
    }
    if (action.type === 'REDUCE') {
        const existingCartItemIndex = state.cartItems.findIndex((item) => item.id === action.item.id);
        const existingCartItem = state.cartItems[existingCartItemIndex];
        const existingCartItemQty = existingCartItem.quantity
        const updatedItems = [...state.cartItems];

        if (existingCartItemQty >1 ){
            const updatedCartItem = {
                ...existingCartItem,
                quantity: existingCartItemQty - 1,
            };            
            updatedItems[existingCartItemIndex] = updatedCartItem;
        } else {
            const updatedCartItem = {
                ...existingCartItem,
                quantity: 1,
            };
            updatedItems[existingCartItemIndex] = updatedCartItem;
        }
        return {...state, cartItems: updatedItems};        
    }

    return { cartItems: [] };
    
}

export function CartContextProvider({children}) {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, {
        cartItems: [],
    });

    function addItem(item) {
        dispatchCartAction({ type: 'ADD', item });
    }

    function removeItem(id) {
        dispatchCartAction({ type: 'REMOVE', id });
    }

    function reduceQuantity(id) {
        dispatchCartAction({ type: 'REDUCE', id });
    }

    const cartContext = {
        cartItems: cartState.cartItems,
        addItem,
        removeItem,
        reduceQuantity
    };

    return (
        <CartContext.Provider value={cartContext}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContext ;

