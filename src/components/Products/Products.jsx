import React, { useState, useEffect } from 'react';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';

import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts('iphone')
    .then((response) => {
      setProducts(response)
    })
  }, [])

  return (
    <section className='products container'>
      {products.map((product) => <ProductCard key={product.id} data={product}/>)}
    </section>
  )
}

export default Products;