import { createContext, useReducer } from 'react';

const CartContext = createContext({
    cartItems: [],    
    addItem: (item) => {},
    removeItem: (id) => {},
    reduceQuantity: (id) =>{},
    increaseQuantity:(id) => {},
    clearCart: ()=> {}
});

function cartReducer(state, action) {

    switch(action.type) {
        case 'ADD': {
            const existingCartItemIndex = state.cartItems.findIndex((item) => item.id === action.item.id);
            const updatedItems = [...state.cartItems]; //Copying existing array unmutably 

            if(existingCartItemIndex !== -1) {
                const existingCartItem = state.cartItems[existingCartItemIndex];
                const updatedCartItem = {...existingCartItem, quantity: existingCartItem.quantity + 1};
                updatedItems[existingCartItemIndex] = updatedCartItem;  //If same item is being added to cart again then it will add 1 to current quantity
            } else {
                updatedItems.push({...action.item, quantity: 1});  //Adds a new item with quantity of 1 as default
            }
            return {...state, cartItems: updatedItems}; 
        }

        case 'REMOVE': {
            const updatedItems = state.cartItems.filter((item) => item.id !== action.id);
            return {...state, cartItems: updatedItems};
        }
        
        case 'REDUCE': {
            const existingCartItemIndex = state.cartItems.findIndex((item) => item.id === action.id);
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

        case 'INCREASE': {
            const updatedItems = [...state.cartItems];
            const existingCartItemIndex = state.cartItems.findIndex((item) => item.id === action.id);
            const existingCartItem = state.cartItems[existingCartItemIndex];
            const existingCartItemQty = existingCartItem.quantity
            const updatedCartItem = {...existingCartItem, quantity: existingCartItemQty + 1};
            updatedItems[existingCartItemIndex] = updatedCartItem;
            return {...state, cartItems: updatedItems};
        }

        case 'CLEAR':{
            return {...state, cartItems:[]}
        }

        default: {
            return { cartItems: [] };
        }
    }  
    
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

    function increaseQuantity(id) {
        dispatchCartAction({ type: 'INCREASE', id });
    }

    function clearCart () {
        dispatchCartAction({type: 'CLEAR'});
    }

    const cartContext = {
        cartItems: cartState.cartItems,
        addItem,
        removeItem,
        reduceQuantity,
        increaseQuantity,
        clearCart
    };

    return (
        <CartContext.Provider value={cartContext}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContext ;

