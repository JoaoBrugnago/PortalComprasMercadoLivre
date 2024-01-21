import React, { useContext } from 'react'
import { BsCartDashFill } from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

import './CartItem.css';

const CartItem = ({ data }) => {
  const { id, thumbnail, title, price} = data

  const { cartItems, setCartItems } = useContext(AppContext)

  function handleRemoveItem() {
    const updatedItems = cartItems.filter((item) => item.id !== id)
    setCartItems(updatedItems)
  }

  return (
    <section className='cart_item'>
      <img 
        src={thumbnail}
        alt="produto" 
        className='cart_item_image' 
      />

      <div className='cart_item_content'>
        <h3 className='cart_item_title'>{title}</h3>
        <h3 className='cart_item_price'>{formatCurrency(price, 'BRL')}</h3>
        <button type='button' className='button_remove_item' onClick={handleRemoveItem}>
          <BsCartDashFill />
        </button>
      </div>
    </section>
  )
}

export default CartItem;