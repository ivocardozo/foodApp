import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  if(action.type === 'ADD') {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    let udpatedItems;
    
    if(existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      };
      udpatedItems = [...state.items];
      udpatedItems[existingCartItemIndex] = updatedItem;
    } else {
      udpatedItems = state.items.concat(action.item);
    }
    
    return {
      items: udpatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  return defaultCartState
};

const CartProvider = props => {

  const [cartState, dispathCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispathCartAction({type: 'ADD', item: item});
  };
  const removeItemFromCartHandler = (id) => {
    dispathCartAction({type: 'REMOVE', id: id})
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  };

  return (<CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>)
};

export default CartProvider;
