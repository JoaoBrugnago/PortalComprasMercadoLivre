import React, { useContext } from 'react';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';

import './Cart.css';

const Cart = () => {
  const {cartItems, isCartVisible} = useContext(AppContext)

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price
  }, 0)

  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <div className='cart_itens'>
        {cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />)}
      </div>

      <div className='cart_resumo'>
        Total: {formatCurrency(totalPrice, 'BRL')}
      </div>
    </section>
  )
}

export default Cart;