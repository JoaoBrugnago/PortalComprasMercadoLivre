import React, { useContext } from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency'
import propTypes from 'prop-types';
import AppContext from '../../context/AppContext';

import './ProductCard.css';

const ProductCard = ({ data }) => {
  const {title, thumbnail, price} = data
  const {cartItems, setCartItems} = useContext(AppContext)

  const handleAddCart = () => {
    setCartItems([...cartItems, data])
  }

  return (
    <section className='product_card'>
      <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="product" className='card__image' />
      <div className='card__infos'>
        <h2 className='card__price'>{formatCurrency(price, 'BRL')}</h2>
        <h2 className='card__title'>{title}</h2>
      </div>
      <button type='button' className='button__add-cart' onClick={handleAddCart}>
        <BsFillCartPlusFill />
      </button>
    </section>
  )
}

export default ProductCard

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;