import React, { useEffect, useContext } from 'react';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

import './Products.css';

const Products = () => {
  //const [products, setProducts] = useState([]) foi para o context (Provider)
  //const [loading, setLoading] = useState(true) foi para o context (Provider)

  const {products, setProducts, loading, setLoading} = useContext(AppContext)
  

  useEffect(() => {
    fetchProducts('produtos')
    .then((response) => {
      setProducts(response)
      setLoading(false)
    })
  }, [])

  return (
    (loading && <Loading />) || (<section className='products container'>
    {products.map((product) => <ProductCard key={product.id} data={product}/>)}
  </section>)
  )
}

export default Products;