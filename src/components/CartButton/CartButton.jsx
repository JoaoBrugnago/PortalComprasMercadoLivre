import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import AppContext from '../../context/AppContext';

import './CartButton.css';

const CartButton = () => {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext)

  const totalItems = cartItems.reduce((acc) => acc + 1, 0)
  
  return (
    <button type='button' className='cart_button' onClick={() => setIsCartVisible(!isCartVisible)}>
      <AiOutlineShoppingCart />
      {totalItems > 0 && <span className='cart_status'>{totalItems}</span>}
    </button>
  )
}

export default CartButton;